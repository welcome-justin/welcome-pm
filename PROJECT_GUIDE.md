# Welcome Property Management — Project Guide

Working context for this site. Read this first at the start of a session.
This folder is the **single source of truth**. Make all changes here, then deploy.

## What this is
A self-contained, static marketing site (no build step, no framework).
Pages: `index.html` + four service pages (`hoa-management.html`,
`residential-management.html`, `commercial-management.html`,
`brokerage-services.html`). All pages share `styles.css` and `app.js`.

- **Live:** https://welcome-justin.github.io/welcome-pm/
- **Repo:** `welcome-justin/welcome-pm` (GitHub account tied to the *welcome.tech*
  email — NOT the personal `jcapucla` account). Public, so GitHub Pages stays free.

## Architecture (important)
- Layout is built with **inline styles** on the markup; there are no classes on
  layout elements. Visual theming runs through **CSS variables**.
- Four independent theming axes set as `data-*` on `<html>`, driven by the
  floating **Customize** panel (`app.js`, persisted to `localStorage`):
  `data-color` (green/blue/charcoal), `data-style` (heritage/institutional/tech),
  `data-accent` (gold/copper/sage), `data-compact` (true/false).
- The site renders fully even with JS disabled; the panel is progressive enhancement.

## Customizations made so far (beyond the original Claude Design output)
- **Responsive layer** (`styles.css`): a `@media (max-width:768px)` block that
  targets the inline-style "signatures" with attribute selectors + `!important`
  (e.g. `[style*="grid-template-columns:repeat(3,1fr)"]`). Collapses grids to one
  column, stacks the hero, trims padding.
- **Mobile hamburger** (`app.js` injects the button + toggles `data-nav="open"`;
  styled in `styles.css`). Desktop nav unchanged; desktop CTA hidden on phones.
- **Logo toggle** — `data-logo` axis with `square` (default), `rounded`, `circle`.
  Added as a Logo control the panel via `app.js`; variants are theme-aware CSS in
  `styles.css` (the mark recolors with the brand color).
- **DRE number removed** from the utility bar + footer on all pages (the
  "California DRE Licensed Broker" credit line was left in).
- **Buildium portal links wired** (2026-06-30): added **Resident Login** and
  **Owner Login** links to the top **utility bar** (right side, after the "Serving
  Southern California" tagline) on all 5 pages. Open in a new tab. Buildium account
  is fully provisioned; site subdomain is `larry3rqzj.managebuilding.com`. URLs:
  Resident Center → `https://larry3rqzj.managebuilding.com/Resident/portal/login`;
  Owner/vendor → `https://larry3rqzj.managebuilding.com/Manager`; manager admin (Larry)
  → `https://larry3rqzj.managebuilding.com/manager/`. No public listings/online-
  application page exists yet (`/listings` 404s) — needs listings posted in Buildium
  before an "Apply Now" link can point anywhere real. Placement is provisional —
  Justin may rework it (e.g. in Claude Design); the block is self-contained and easy
  to relocate.
- **Request a Proposal form wired** (index.html `#contact`) to **Web3Forms**
  (`api.web3forms.com`; account under larry@welcomepropertymanagement.com, so
  submissions email Larry). Real `<form>` with field `name`s + hidden `access_key`;
  `app.js` adds a `fetch` submit with an inline success/error message; no-JS fallback
  posts normally. Live as of 2026-06-23. Access key is public/safe in the repo.

## Conventions for changes
- Prefer editing the **shared** `styles.css` / `app.js` so all 5 pages get the
  change from one file. The hamburger and logo controls are injected at runtime by
  `app.js` for exactly this reason.
- Preserve the theming-axis system; new colors/styles should flow through the
  CSS variables, not hard-coded values.
- Because layout is inline, restyle via attribute-selector overrides — OR do the
  one-time refactor below if changes get frequent.
- Keep the no-JS fallback working.

## Local preview loop (fast)
1. Edit files in this folder.
2. Double-click `index.html` to open it in a browser; refresh after each edit.
3. Deploy only once it looks right.
(Claude can't open a local `file://` itself, but can screenshot your screen to review.)

## Deploy process
1. Go to https://github.com/welcome-justin/welcome-pm/upload/main
2. Drag the **changed** files onto the drop zone (re-uploading overwrites).
3. Commit message under ~50 chars, commit directly to `main`.
4. GitHub Pages rebuilds in ~1 min. Assets are CDN-cached ~10 min, so
   **hard refresh (Cmd+Shift+R)** to see changes immediately.
- Keep the repo **public** (private breaks Pages on the free plan).

## Using Claude Design alongside this
Use Claude Design for *visual exploration / new section design*. Treat its output
as a mockup — bring the good parts back here and merge them into these files so the
responsive layer, hamburger, and logo toggle are preserved. Don't replace the live
files wholesale.

## Open to-dos / placeholders
- **Custom domain** (`welcomepropertymanagement.com`) — mostly DONE 2026-06-23:
  custom domain set on the repo (CNAME file written), and DNS configured at GoDaddy
  (registrar + nameservers stay at GoDaddy): four apex `A` records →
  185.199.108–111.153, and `www` CNAME → welcome-justin.github.io. Google Workspace
  email records (MX/TXT) left untouched. **Remaining:** once DNS propagates and
  GitHub issues the cert, tick **Enforce HTTPS** in repo Settings → Pages and confirm
  the apex + www both load.
- ~~Replace placeholder phone with Larry's number~~ — DONE 2026-06-23: swapped to
  Larry's number; updated again 2026-07-07 to **(424) 371-2761**
  (`tel:+14243712761`) across all 5 pages (utility bar, contact
  section, footer, service-page CTAs). The contact form's input placeholder
  `(949) 555-0000` was intentionally left as a generic example.
- Replace CSS-gradient image placeholders (hero, leadership headshot, resource
  cards) with real photos + Larry Cole's headshot.
- Social links + SEO: real LinkedIn / Google Business URLs, Open Graph tags, sitemap.
- Optional: refactor inline styles → CSS classes for easier iteration (only worth
  it now that Cowork is the source of truth).
- **TODO — Consider removing remaining brokerage references site-wide:**
  meta-description, footer tagline, top nav "Brokerage" link, services-section
  "Brokerage Services" card, the standalone `brokerage-services.html` page,
  contact form "Brokerage inquiry" option, and the "California DRE Licensed Broker"
  footer label. Justin removed it from the hero on **2026-06-23** and may want to
  clean up the rest depending on whether Larry is keeping brokerage as a service line.
