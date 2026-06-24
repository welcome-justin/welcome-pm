# Welcome Property Management — Homepage

A self-contained, **static** marketing homepage for Welcome Property Management
(HOA, residential, commercial property management + brokerage, Southern California).

No build step, no framework, no server — just `index.html`, `styles.css`, `app.js`.
It is ready to host on **GitHub Pages** as-is.

---

## What's in this bundle

| File | Purpose |
|------|---------|
| `index.html` | The full homepage. Sections use **inline styles** that reference CSS variables. Icons are inlined SVG (no icon library, no CDN JS). |
| `hoa-management.html` | Service page: HOA / community associations. |
| `residential-management.html` | Service page: residential & multifamily. |
| `commercial-management.html` | Service page: office / retail / mixed-use. |
| `brokerage-services.html` | Service page: acquisitions & dispositions. |
| `styles.css` | The theming system (CSS variables across 4 axes) + Customize-panel + FAQ-accordion styles. |
| `app.js` | The in-page **Customize** panel logic + a hover-restore helper. Pure progressive enhancement. |
| `README.md` | This file. |

Every page shares `styles.css` + `app.js`, the same header/footer, and the same theming
system — the Customize panel works site-wide and each service page has its own hero,
Overview, What's Included, Benefits, FAQ (native `<details>` accordion), and CTA.

> **About these files:** this is a working design reference / prototype built in plain
> HTML/CSS/JS. You can ship it directly as a static site, **or** recreate it inside an
> existing codebase (React/Vue/Astro/etc.) using that project's patterns. The HTML here is
> hand-authored with inline styles because it originated as a design artifact — if you move
> it into a component framework, lift the markup into components and keep the CSS-variable
> theming system described below.

**Fidelity: high.** Final colors, typography, spacing, copy, and layout are all intended as shown.

---

## The theming system (important)

The look is controlled by four **independent** axes, set as `data-*` attributes on the
root `<html>` element. Defaults are hard-coded in `index.html` so the page is fully styled
**even if JavaScript never runs** (e.g. opened in an SMS/in-app browser):

```html
<html data-color="green" data-style="heritage" data-accent="gold" data-compact="false">
```

| Axis | Attribute | Values | Drives |
|------|-----------|--------|--------|
| Brand color | `data-color` | `green` · `blue` · `charcoal` | `--navy`, `--navy-deep`, `--hero-bg` |
| Style direction | `data-style` | `heritage` · `institutional` · `tech` | `--font-display`, `--radius`, `--bg`, `--ink`, `--line` |
| Accent | `data-accent` | `gold` · `copper` · `sage` | `--accent`, `--accent-ink`, `--accent-12/18/40` |
| Spacing | `data-compact` | `true` · `false` | `--sec-pad` (76px vs 112px) |

`app.js` reads/writes these attributes (and persists the choice to `localStorage` under
`wpm-tweaks`). The floating **Customize** button bottom-right opens the panel.

To change the shipped default, just edit the attributes on `<html>` in `index.html`.
To remove the visitor-facing switcher entirely, delete the `<div class="tw">…</div>` block
and the `<script src="app.js">` tag — the page keeps whatever defaults are on `<html>`.

### Design tokens

**Brand colors (dark anchors):** green `#1e3d2f`/`#13281f` · blue `#16324f`/`#0f2438` · charcoal `#2b3138`/`#1b1f24`
**Accents:** gold `#b0894f` · copper `#b06a4f` · sage `#7f9460`
**Neutrals (heritage):** bg `#f6f3ec`, surface `#ffffff`, ink `#1b2531`, ink-soft `#525c68`, line `#e7e1d4`
**Type:** display = Source Serif 4 (heritage) / Archivo (institutional, tech); body = Public Sans. All via Google Fonts `<link>` in `index.html`.
**Radius:** 4px (heritage) / 3px (institutional) / 16px (tech)
**Section padding:** 112px (default) / 76px (compact)

---

## Page sections (top → bottom)

1. **Utility bar** — phone, email, DRE #, service area.
2. **Sticky header** — logo wordmark, nav (HOA / Residential / Commercial / Brokerage / About / Resources), "Schedule a Consultation" CTA.
3. **Hero** — headline, subhead, two CTAs, "20+ years" badge, property image placeholder + floating stat card.
4. **Trust strip** — 5 credentials.
5. **Services** — 4 cards (HOA, Residential, Commercial, Brokerage). *Intended to link to dedicated service pages.*
6. **Why Welcome** — dark band, 6 value props with icons.
7. **Leadership** — Larry Cole, founder story, headshot placeholder, stat badge.
8. **Stats band** — 20+ / 4 / 24-7 / 100%.
9. **Resources** — 3 article cards (blog/SEO area).
10. **Lead-gen / Contact** — call + email blocks and a "Request a Proposal" form (markup only — not wired).
11. **Footer** — brand, services, company, contact, social (LinkedIn + Google Business), DRE, legal.

---

## Deploy to GitHub Pages

1. Create a repo and put these files at the **repo root** (or in a `/docs` folder).
2. Commit & push:
   ```bash
   git init
   git add .
   git commit -m "Welcome Property Management homepage"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` and `/ (root)` (or `/docs`). Save.
4. Your site goes live at `https://<you>.github.io/<repo>/` within a minute or two.

(No Jekyll processing is needed; an empty `.nojekyll` file is included to skip it.)

---

## Suggested next steps (for Claude Code)

These are **placeholders** to replace with real content/functionality:

- **Contact details:** the real phone `(310) 497-2660` is live across the utility bar,
  contact section, footer, and service-page CTAs. (The DRE number was previously removed.)
- **Imagery:** the hero, leadership headshot, and resource cards use CSS-gradient placeholders.
  Replace with real Southern California property photos and Larry Cole's headshot
  (swap the placeholder `<div>`s for `<img>` and constrain with the same `aspect-ratio`).
- **Forms:** the "Request a Proposal" form is markup only. Wire it to a backend / form service
  (Formspree, Netlify Forms, a CRM endpoint, etc.) and add validation + a success state.
- **Service pages:** the 4 pages are scaffolded with placeholder copy + imagery — review/refine
  the wording and swap in real photos. The homepage nav, footer, and service cards already link to them.
- **Resources:** turn the 3 cards into a real blog/index (no dedicated page yet).
- **Social links + SEO:** set real LinkedIn / Google Business URLs, add Open Graph tags,
  `sitemap.xml`, and analytics if desired.

Keep the CSS-variable theming system intact when expanding to multiple pages — link the same
`styles.css` and put the `data-*` defaults on each page's `<html>`.
