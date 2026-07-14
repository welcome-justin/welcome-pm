# SEO Audit — Welcome Property Management

**Site:** https://welcomepropertymanagement.com (GitHub Pages origin `welcome-justin.github.io/welcome-pm`)
**Date:** July 14, 2026 · **Audit type:** Full site audit
**Scope:** 17 pages — homepage, 4 service pages, resources index, 10 resource articles, privacy policy
**Method:** on-page analysis of the local source of truth (`~/Documents/GitHub/welcome-pm`) + live-site checks (robots/sitemap/HTTPS) + web research for keywords and competitors.

> **Data caveat:** No SEO tool (Ahrefs/Semrush) is connected, so search-volume and keyword-difficulty figures below are **directional estimates** from web research and domain knowledge, not measured values. Difficulty is judged relative to a **brand-new, zero-authority domain** — that context matters more than raw difficulty. Connect an SEO MCP later for exact volumes and live rankings.

---

## Executive Summary

The site has a **surprisingly strong on-page foundation** for a small business site: every page has a unique, well-written title and meta description, exactly one keyword-relevant H1, valid `lang`/`charset`/`viewport`, clean internal linking, and a genuinely valuable set of 10 California-specific HOA resource articles that most competitors don't have. That content is the biggest asset here.

The problem is almost entirely **discoverability, not quality**. The site is effectively invisible to search engines right now: there is **no `robots.txt`, no `sitemap.xml`, no structured data, and no evidence it's verified in Google Search Console** — and it did not surface anywhere in searches for its own niche. Good pages that Google can't find or trust don't rank.

**Top 3 priorities, in order:**
1. **Get indexed.** Add `robots.txt` + `sitemap.xml`, verify the site in Google Search Console, and request indexing. This is the single highest-impact action and unblocks everything else.
2. **Win local SEO.** Create/claim a Google Business Profile, add a consistent business address (NAP) to the site, and add `LocalBusiness` structured data. Property management is a local-intent business; this is where a new site can actually rank.
3. **Lean into the resource content.** The 10 California HOA articles already target real informational searches — add `Article`/`FAQPage` schema, fix the over-long meta lengths, and expand into pricing + city pages to build topical authority.

**Overall assessment: Strong foundation, critical visibility gaps.** The build quality is good; the site just hasn't been "switched on" for search engines yet. Most of the top fixes are quick and additive — no redesign required.

---

## Keyword Opportunity Table

Opportunity score weighs demand × relevance × *realistic* winnability for a new domain. For Welcome PM, **local long-tail and question/informational terms are where near-term wins live** — the broad head terms are dominated by established, high-authority competitors and should be treated as long-game.

| Keyword | Est. Difficulty | Opportunity | Current Ranking | Intent | Recommended Content Type |
|---|---|---|---|---|---|
| hoa management [specific city, e.g. Torrance / Long Beach / Pasadena] | Easy–Moderate | **High** | Not ranking | Commercial | City service landing page |
| small hoa management company southern california | Easy | **High** | Not ranking | Commercial | Homepage / HOA page angle |
| how to switch hoa management companies (california) | Easy | **High** | Not ranking | Commercial-info | Resource article |
| how much do hoa management companies charge in california | Moderate | **High** | Not ranking | Informational | Pricing/fees guide (missing) |
| what does an hoa management company do | Easy | **High** | Not ranking | Informational | Resource article |
| sb 326 balcony inspection requirements california | Easy | **High** | Have page ✓ | Informational | Existing article (add schema) |
| davis-stirling reserve study requirements | Easy–Moderate | **High** | Have page ✓ | Informational | Existing article (add schema) |
| california hoa board election rules | Easy | **High** | Have page ✓ | Informational | Existing article (add schema) |
| pre-lien notice california hoa | Easy | Medium | Have page ✓ | Informational | Existing article (add schema) |
| community association management [city] | Moderate | Medium | Not ranking | Commercial | Service/city page |
| condo association management los angeles | Moderate | Medium | Not ranking | Commercial | Service page section |
| self-managed hoa help california | Easy | Medium | Not ranking | Commercial-info | Resource + CTA |
| residential property management los angeles | Hard | Medium | Not ranking | Commercial | Residential page (long game) |
| commercial property management los angeles | Moderate–Hard | Medium | Not ranking | Commercial | Commercial page (long game) |
| hoa management company southern california | Hard | Low (near-term) | Not ranking | Commercial | HOA pillar page |
| property management company los angeles / southern california | Hard | Low (near-term) | Not ranking | Commercial | Homepage (long game) |
| average hoa fees in california | Moderate | Medium | Not ranking | Informational | Resource article |
| what to look for in an hoa management company | Easy | Medium | Not ranking | Commercial-info | Resource / comparison |
| ab 12 security deposit limit california | Moderate | Medium | Have page ✓ | Informational | Existing article (verify current law) |
| multifamily property management [city] | Moderate | Medium | Not ranking | Commercial | Residential page angle |

---

## On-Page Issues Table

| Page(s) | Issue | Severity | Recommended Fix |
|---|---|---|---|
| All pages | No structured data (JSON-LD) anywhere | **High** | Add `LocalBusiness`/`RealEstateAgent` schema sitewide; `Article` on resource pages; `BreadcrumbList`; `FAQPage` where FAQs exist |
| All pages | No `<link rel="canonical">` | **Medium** | Add self-referencing canonicals — the site resolves on both the custom domain and `*.github.io`, a duplicate-content risk |
| All pages | No Open Graph / Twitter Card tags | **Medium** | Add OG + Twitter tags and a share image so links preview correctly (social/referral CTR) |
| All 7 primary pages | Meta descriptions run **162–191 chars** (over the ~155–160 SERP limit) | **Medium** | Trim each to ≤160 chars so they don't truncate mid-sentence |
| resource-sb326-balcony-inspections.html | `<title>` is **122 chars** — will truncate badly in results | **Medium** | Shorten to ≤60 chars, front-load the keyword (e.g. "SB 326 Balcony Inspections for CA HOAs — Welcome PM") |
| resources.html | H1 "Guidance for boards & owners" has no target keyword | **Low–Medium** | Rework to include "HOA & Property Management Resources (California)" |
| All pages | Zero real images — hero, headshot, resource cards are CSS-gradient placeholders | **Medium** | Add real property photos + Larry's headshot; **every image needs descriptive, keyword-aware `alt` text** and file names |
| All pages (footer/contact) | No visible physical/mailing address; only phone + email | **High (local)** | Add a consistent business address (or service-area + city list) — NAP consistency is core to local ranking |
| Homepage title | "Welcome Property Management — Southern California" leads with brand, not the money keyword | **Low** | Optionally: "Property Management & HOA Services in Southern California \| Welcome PM" |

**What's already good (leave as-is):** unique titles within 46–54 chars on all core pages ✓ · one keyword-rich H1 per page ✓ (home, HOA, residential, commercial all strong) · `lang="en"`, `<meta charset>`, responsive `viewport` on every page ✓ · clean, readable URLs ✓ · solid internal linking (home 19, resources 22 internal links) ✓ · well-written, genuinely useful resource copy ✓.

---

## Content Gap Recommendations

1. **HOA management pricing / fees guide** — *Why:* high, proven informational demand ("how much do HOA management companies charge in California," "average HOA fees") that competitors like FirstService and All Property Management own; you have nothing on it. *Format:* resource article + CTA. *Priority:* High. *Effort:* Moderate (half day).
2. **City-specific service landing pages** — *Why:* local intent is where a new domain can realistically rank; "HOA management [city]" is far more winnable than the SoCal-wide head term. *Format:* one lightweight landing page per target city (start with 3–5 where Larry actually operates). *Priority:* High. *Effort:* Substantial (multi-day, but templatable).
3. **"How to switch HOA management companies" / "signs your HOA needs a new manager"** — *Why:* high-commercial-intent mid-funnel searches that convert; competitors rank, you don't. *Format:* resource article. *Priority:* High. *Effort:* Quick win (1–2 hrs).
4. **"What does an HOA management company do" / "what to look for"** — *Why:* top-of-funnel awareness content that feeds the topic cluster. *Format:* resource articles. *Priority:* Medium. *Effort:* Quick win.
5. **FAQ blocks with `FAQPage` schema on service pages** — *Why:* the service pages already have FAQ accordions; marking them up can win People-Also-Ask / rich results. *Priority:* Medium. *Effort:* Quick win.
6. **Testimonials / reviews / case studies** — *Why:* trust signals + fresh, keyword-rich content; competitors lean on this heavily. *Priority:* Medium. *Effort:* Moderate (needs client input).
7. **Topic-cluster structure** — *Why:* turn the 10 resource articles into a "California HOA Compliance" pillar with internal links radiating out; concentrates topical authority. *Priority:* Medium. *Effort:* Moderate.

---

## Technical SEO Checklist

| Check | Status | Details |
|---|---|---|
| robots.txt | **Fail** | Returns 404 — file does not exist. Add one that allows crawling and points to the sitemap. |
| XML sitemap | **Fail** | `sitemap.xml` returns 404. Create one listing all 17 pages; reference it in robots.txt and submit in Search Console. |
| Search Console verification / indexation | **Fail (verify)** | Site does not appear in searches for its own niche; no sign it's verified or submitted. **This is the critical unlock.** Verify + request indexing. |
| Structured data | **Fail** | No JSON-LD on any page. Add LocalBusiness/RealEstateAgent, Article, Breadcrumb, FAQPage. |
| HTTPS | **Pass (confirm toggle)** | Site loads over HTTPS. Confirm **Settings → Pages → Enforce HTTPS** is ticked (noted as pending in PROJECT_GUIDE). |
| Canonical tags | **Fail** | None present; add self-referencing canonicals (custom-domain vs github.io duplicate risk). |
| Open Graph / social | **Fail** | No OG/Twitter tags or share image. |
| Mobile-friendliness | **Warning (verify)** | Responsive layer + hamburger exist in code; verify on a real device / Google's mobile test — layout uses inline styles with `!important` overrides. |
| Page speed / Core Web Vitals | **Warning** | Static, lightweight, no framework = good baseline. Watch render-blocking Google Fonts and the CSS-gradient hero; recheck once real images are added (size them + lazy-load). |
| Broken links | **Warning** | PROJECT_GUIDE notes `/listings` 404s and there's no "Apply Now" destination yet; audit outbound/internal links before submitting sitemap. |
| Image alt text | **N/A (yet)** | No `<img>` elements exist. Becomes required the moment real photos are added. |
| Duplicate/old copy | **Warning** | An older `WPM-website-copy-6-23-26.html` exists in the Downloads copy — ensure stray HTML isn't published/crawlable. |

---

## Competitor Comparison Summary

Representative established competitors from search: **PPM / hoappm.com**, **KPPM (Keystone)**, **Menas**, **Partners CM** (HOA side); **Moss & Company**, **LBPM**, **FirstService Residential** (residential/commercial side). All are established, content-rich, high-authority domains; Welcome PM is brand new with a minimal search footprint.

| Dimension | Welcome PM | PPM (hoappm.com) | Moss & Company / FSR | Winner |
|---|---|---|---|---|
| Indexed / discoverable | No (not surfacing) | Yes, ranks p.1 | Yes, ranks p.1 | Competitors |
| On-page fundamentals | **Strong** (titles/desc/H1/structure) | Good | Good | ~Tie (WPM competitive) |
| Resource/blog depth | 10 CA-specific articles (good, niche) | Moderate | **Deep** (FSR huge library) | Competitors (volume), WPM (specificity) |
| Structured data / schema | None | Typically present | Present | Competitors |
| Local signals (GBP, reviews, NAP) | Minimal / none visible | Established | Established | Competitors |
| Domain authority / backlinks | Near zero (new) | Established | High | Competitors |
| Technical (sitemap/robots/schema) | Missing | Present | Present | Competitors |
| Site speed / modern build | **Lightweight static** | Heavier CMS | Heavier CMS | WPM |

**Takeaway:** You can't out-authority these firms head-on yet, but your on-page quality and clean fast build are already competitive, and your California-specific compliance articles are more focused than most. Compete on **local + long-tail + compliance depth**, not broad head terms.

---

## Prioritized Action Plan

### Quick Wins (do this week — each under ~2 hours)
1. **Add `robots.txt` + `sitemap.xml`** and **verify in Google Search Console + Bing Webmaster Tools, then request indexing.** *(Impact: High — this is the unlock. Nothing else matters until Google can find and index the pages.)*
2. **Create / claim the Google Business Profile** — correct name, address, phone `(424) 371-2761`, service areas, categories (Property management company, HOA). *(Impact: High for local.)*
3. **Add a consistent business address (NAP)** to the footer of all pages. *(Impact: High for local; dependency for #2 consistency.)*
4. **Trim all meta descriptions to ≤160 chars** and **shorten the SB 326 title to ≤60 chars.** *(Impact: Medium — better SERP display/CTR.)*
5. **Confirm "Enforce HTTPS"** is on in repo Pages settings. *(Impact: Medium.)*
6. **Rework the resources.html H1** to include a target keyword. *(Impact: Low–Medium.)*
7. **Publish "How to switch HOA management companies in California"** using the existing resource template. *(Impact: Medium, high commercial intent.)*

### Strategic Investments (plan for this quarter)
1. **Structured data sitewide** — LocalBusiness/RealEstateAgent + Article (resources) + BreadcrumbList + FAQPage. *(Impact: High for local + rich results. Dependency: NAP/GBP set first.)*
2. **City-specific landing pages** for 3–5 real service cities. *(Impact: High — most winnable local rankings.)*
3. **HOA management pricing/fees guide.** *(Impact: High — captures proven informational demand.)*
4. **Add real photography + headshot with keyword-aware alt text**, plus testimonials/reviews. *(Impact: Medium — trust, image SEO, freshness.)*
5. **Open Graph/Twitter cards + canonical tags** across all pages. *(Impact: Medium.)*
6. **Ongoing content cadence** on question keywords; build the "California HOA Compliance" topic cluster around the existing articles. *(Impact: Medium–High, compounding.)*
7. **Local citations / backlinks** — SoCal Rental Housing Assoc. directory, CAI, Yelp, BBB, local chambers, Buildium/industry listings. *(Impact: Medium — builds the authority you currently lack.)*

---

### Suggested next steps I can take for you
- Generate the actual `robots.txt` + `sitemap.xml` files and drop them into the repo (ready for you to commit).
- Write the `LocalBusiness` JSON-LD block and the canonical/OG tags, and add them to each page's `<head>`.
- Trim the meta descriptions + fix the SB 326 title in place.
- Draft the pricing guide and the "how to switch HOA managers" article using your existing resource-page template.

Just say which and I'll start — the robots.txt + sitemap + Search Console path is the one I'd do first.
