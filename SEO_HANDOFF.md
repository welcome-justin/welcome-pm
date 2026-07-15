# SEO Effort — Session Handoff Notes

Purpose: let a fresh Cowork session continue the SEO work without re-deriving context.
Companion files in the repo: `SEO_CHECKLIST.md` (living to-do) and `WPM-SEO-Audit-2026-07-14.md` (full audit).

## Goal
Get welcomepropertymanagement.com indexed and ranking for Southern California HOA /
residential / commercial property-management searches. Multi-session effort.

## Where things stand (as of 2026-07-14)

**Done and written to the repo clone (`~/Documents/GitHub/welcome-pm`).**
⚠️ Everything below is on disk but **not yet published** — Justin must **VS Code → Source
Control → Commit → Sync** to push to GitHub Pages.

- `robots.txt` + `sitemap.xml` (19 URLs) created.
- Every page: canonical tag, Open Graph + Twitter tags, `LocalBusiness`/`RealEstateAgent`
  JSON-LD; homepage also `WebSite`; all articles have `Article` + `BreadcrumbList`.
- All titles ≤60 chars and meta descriptions ≤160 chars (many were over).
- Homepage title leads with keyword; `resources.html` H1 made keyword-relevant.
- Two new articles created + linked from resources index + in sitemap:
  `resource-switch-hoa-management.html`, `resource-hoa-management-cost.html`.

## Key decisions / conventions (so a new session stays consistent)
- **Deploy = VS Code Commit + Sync by Justin.** Do NOT run git in the mounted repo (leaves
  an index.lock the mount can't delete). Claude writes files via `device_commit_files`.
- Head-level SEO tags are injected right before `</head>`; see any page for the exact block.
  New pages are generated from the `resource-*.html` template (nav/footer chrome reused).
- LocalBusiness schema currently has **accurate fields only** (name, url, phone
  +1-424-371-2761, email, areaServed=Southern California, region=CA). Street address, hours,
  geo, and `sameAs` are intentionally omitted until Justin confirms them.
- Article schema uses `datePublished` 2026-07-01 / `dateModified` 2026-07-14 as placeholders
  for the pre-existing articles (the 2 new ones use 2026-07-14). Replace with real dates.
- No `<img>` tags exist yet (CSS-gradient placeholders); alt-text work starts when photos are added.
- Skipped a "what to look for in an HOA manager" article to avoid cannibalizing
  `resource-management-company-expectations.html`.

## Blockers — inputs needed from Justin
1. Business street address, or confirm service-area business (no public address).
2. 3–5 target service cities (for city pages + `areaServed`).
3. Hours of operation.
4. Real LinkedIn / Google Business / Facebook URLs (for footer + schema `sameAs`).
5. Correct publish dates for the existing resource articles.

## Next steps (priority order)
1. **(Justin)** Commit + Sync in VS Code to publish everything.
2. **(Justin)** Google Search Console: verify domain (DNS TXT at GoDaddy), submit
   `sitemap.xml`, request indexing. Repeat in Bing Webmaster Tools. Tick Enforce HTTPS.
3. **(Justin)** Create/claim Google Business Profile.
4. **(Claude, after inputs)** Finish LocalBusiness schema (address/hours/geo/sameAs), add
   footer NAP, build 3–5 city landing pages.
5. **(Claude)** FAQPage schema on the service pages' existing FAQ accordions; topic-cluster
   internal links; "what does an HOA management company do" article; og:image; analytics.

## How to resume
Read this file + `SEO_CHECKLIST.md`. Connected folder is `~/Documents/GitHub/welcome-pm`
(the source of truth; the old `~/Downloads/welcome-property-management-site` copy is retired).
