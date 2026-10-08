const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const calculatorFrame = document.querySelector("#calculator-frame");
const currentYear = document.querySelector("#current-year");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const wasExpanded = button.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq-item button").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      document.getElementById(item.getAttribute("aria-controls")).hidden = true;
    });
    button.setAttribute("aria-expanded", String(!wasExpanded));
    document.getElementById(button.getAttribute("aria-controls")).hidden = wasExpanded;
  });
});

function resizeCalculator() {
  try {
    const calculatorDocument = calculatorFrame.contentDocument;
    if (!calculatorDocument) return;
    calculatorFrame.style.height = `${Math.max(calculatorDocument.documentElement.scrollHeight, calculatorDocument.body.scrollHeight)}px`;
    const observer = new ResizeObserver(() => {
      calculatorFrame.style.height = `${Math.max(calculatorDocument.documentElement.scrollHeight, calculatorDocument.body.scrollHeight)}px`;
    });
    observer.observe(calculatorDocument.documentElement);
    observer.observe(calculatorDocument.body);
  } catch {
    calculatorFrame.style.height = "1500px";
  }
}

calculatorFrame.addEventListener("load", resizeCalculator);
currentYear.textContent = new Date().getFullYear();
