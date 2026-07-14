# SEO Checklist — Welcome Property Management

Living tracker for the SEO effort. Full findings are in the audit (`WPM-SEO-Audit-2026-07-14.md`).
Status key: `[x]` done · `[ ]` open · **(C)** = Claude can do in-repo · **(J)** = needs Justin (account/input).

Last updated: **2026-07-14**

---

## ✅ Done this session (2026-07-14) — committed to repo, awaiting VS Code Commit + Sync

- [x] **robots.txt** created (allows all crawlers, references sitemap). (C)
- [x] **sitemap.xml** created — all 17 pages, lastmod 2026-07-14. (C)
- [x] **Meta descriptions trimmed to ≤160 chars** on all pages (were 162–193). (C)
- [x] **Page titles fixed** — homepage now leads with keyword ("Southern California Property
      Management & HOA | Welcome PM"); all resource titles shortened to ≤58 chars (were up
      to 122). (C)
- [x] **resources.html H1** changed to keyword-relevant "HOA & Property Management Resources
      for California". (C)
- [x] **Canonical tags** added to every page (self-referencing; fixes custom-domain vs
      github.io duplicate risk). (C)
- [x] **Open Graph + Twitter Card tags** added to every page. (C)
- [x] **JSON-LD structured data** added: `LocalBusiness`/`RealEstateAgent` sitewide,
      `WebSite` on homepage, `Article` + `BreadcrumbList` on all 10 resource articles.
      (38 blocks total, all validated.) (C)

---

## 🔴 Critical — do next (highest impact)

- [ ] **Verify site in Google Search Console** and submit `sitemap.xml`; request indexing of
      all pages. *This is the #1 unlock — nothing ranks until Google indexes it.* (J)
      → https://search.google.com/search-console — add property `welcomepropertymanagement.com`,
      verify via DNS TXT at GoDaddy (or the HTML-file method), then Sitemaps → submit `sitemap.xml`.
- [ ] **Bing Webmaster Tools** — add + verify + submit sitemap (can import from Search Console). (J)
- [ ] **Confirm "Enforce HTTPS"** is ticked in the repo → Settings → Pages. (J)

## 🟠 Local SEO (where a new site can actually rank)

- [ ] **Create / claim Google Business Profile** — name, phone (424) 371-2761, service areas,
      categories (Property management company + HOA). (J)
- [ ] **Add business address (NAP) to the site footer** on all pages — consistent with GBP.
      *Blocked on input below.* (C, once address confirmed)
- [ ] **Finish LocalBusiness schema** — add `address` (street), `openingHours`, `geo`, and
      `sameAs` (LinkedIn, Google Business, Facebook). Placeholder schema is live now with
      accurate name/phone/email/areaServed only. *Blocked on input below.* (C)
- [ ] **Local citations / directories** — SoCal Rental Housing Assoc., CAI, Yelp, BBB, local
      chambers, Buildium listing. Consistent NAP everywhere. (J, some C)

## 🟡 Content (build topical authority)

- [ ] **HOA management pricing / fees guide** — high informational demand; currently missing. (C draft → J review)
- [ ] **"How to switch HOA management companies in California"** — high commercial intent. (C draft)
- [ ] **"What does an HOA management company do" / "what to look for"** — top-of-funnel. (C draft)
- [ ] **City-specific service landing pages** (3–5 real service cities). *Blocked on city list below.* (C)
- [ ] **FAQPage schema** on the service pages' existing FAQ accordions. (C)
- [ ] **Testimonials / reviews / case studies** section (trust + fresh content). (J input → C)
- [ ] **Topic-cluster internal linking** — turn the 10 articles into a "California HOA
      Compliance" pillar. (C)

## 🟢 On-page polish / assets

- [ ] **Real photography + Larry's headshot** with descriptive, keyword-aware `alt` text +
      good file names (replaces CSS-gradient placeholders). (J photos → C)
- [ ] **og:image share image** — create a branded 1200×630 image and reference it in the OG
      tags (currently omitted; no image asset exists yet). (J/C)
- [ ] **Real social URLs** in footer (LinkedIn + Google Business) — currently placeholders. (J)
- [ ] **Fix/repoint the `/listings` + "Apply Now"** dead paths before they get crawled
      (noted in PROJECT_GUIDE). (C/J)
- [ ] **Analytics** — add Google Analytics 4 or Plausible to measure organic traffic. (J/C)
- [ ] **Verify mobile-friendliness + Core Web Vitals** once real images are added (size +
      lazy-load images; watch render-blocking Google Fonts). (C/J)

---

## ⛳ Inputs needed from Justin (to unblock the items above)

1. **Business address** for NAP + schema — a real street address, OR confirm it's a
   service-area business with no public address (GBP supports that).
2. **Target service cities** (3–5) for city landing pages + `areaServed` — where does Larry
   actually take clients? (e.g. Torrance, Long Beach, Pasadena, …)
3. **Hours of operation** for LocalBusiness schema + GBP.
4. **Real social URLs** — LinkedIn company page + Google Business Profile (once created) + any Facebook.
5. **Correct publish dates** for the resource articles (schema currently uses 2026-07-01
   published / 2026-07-14 modified as placeholders).
