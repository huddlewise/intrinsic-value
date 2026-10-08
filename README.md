# Intrinsic Value Calculator

A single-file, no-build web app that estimates a **range** of intrinsic values per share (low / base / high) instead of a single number. It encodes ideas from Howard Marks, Warren Buffett, Charlie Munger and Mohnish Pabrai.

## What it does
- Owner earnings (net income + non-cash charges − maintenance capex − working-capital need), with optional 5–10 year median normalization
- Two-stage DCF with fading growth, terminal growth capped at 3%, and visible discount rate (risk-free + premium, overridable)
- Low / base / high range, probability-weighted value, sensitivity grid (discount rate × terminal growth) and "what moves the value" ranking
- Reverse DCF: the growth the current price implies
- Quality score → required margin of safety → buy-below price
- Circle-of-competence gate, inversion checklist, automatic red flags, and a Buy zone / Watch / Pass signal

## Run locally
Open `index.html` in a browser. There is no build step or dependency.

## Deploy with GitHub Pages
1. Push this folder to a new GitHub repository (branch `main`).
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Choose `main` and `/ (root)`, then save. The site appears at `https://<your-username>.github.io/<repo-name>/`.

## Data
All inputs are entered by hand (price, EPS, cash flow, etc.). Nothing is fetched or sent anywhere.

## Disclaimer
Simplified models for study and decision support. Not investment advice; check every input against current filings.
