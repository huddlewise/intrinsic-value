# Intrinsic Value

A dependency-free, responsive investing site with an interactive owner-earnings and DCF calculator. Estimate a range of possible values, examine what the market price implies, and make your assumptions visible. This is an educational tool, not investment advice.

## Run locally

Open `index.html` directly in a modern browser, or start a simple static server from this directory:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. The calculator is embedded from `calculator.html`; use a local server if your browser restricts local-file iframes.

## Files

- `index.html` — marketing page, guidance, FAQ, and embedded calculator.
- `styles.css` — responsive styles and reduced-motion support.
- `script.js` — mobile navigation, FAQ accordion, anchor scrolling, and calculator sizing.
- `calculator.html` — standalone owner-earnings valuation calculator.

## Customize

Edit the page copy and sections in `index.html`, adjust colors and layout in `styles.css`, or change navigation and accordion behavior in `script.js`. The calculator's assumptions and valuation logic are in `calculator.html`. All financial inputs are entered manually and remain in the browser; verify them against current filings.

## GitHub Pages

Publish the repository root using GitHub Pages (Settings → Pages → deploy from a branch, choose the repository branch and `/ (root)`). No build step or package installation is required.
