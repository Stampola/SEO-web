# SearchFit Pro

SEO platform for Thai media agencies — proposal, interactive prototype, and working MVP tools, all bilingual (EN default · TH toggle).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing hub linking to everything |
| `preview.html` | Live demo — 7 working interactive demos + 11 mockups |
| `proposal.html` | Sales proposal — 11 sections, market, differentiation, pricing, roadmap |
| `pricing.html` | SaaS pricing — **Free / Basic ฿10,000 / Advanced ฿30,000** · monthly or annual (17% off) |
| `signup.html` | Account creation — pick plan + billing cycle, business details (noindex) |
| `checkout.html` | Payment page — Thai QR PromptPay + credit card tabs (noindex) |
| `admin.html` | **SearchFit Pro internal admin console** — customer list, impersonation, billing, support, audit log (noindex) |
| `app.html` | Full webapp SPA with login + role-based views (customer-facing) |
| `tools.html` | 4 working SEO tools — Audit, Keyword, Schema, pSEO |
| `playbook.html` | Daily/weekly/monthly SEO tasks · 40+ items with impact + time |
| `help.html` | Help Center · client-friendly · glossary · benchmark tables |
| `404.html` | Custom not-found page |
| `assets/i18n.js` | Shared EN/TH toggle — picks up `?lang=th`, browser default, or localStorage |
| `business-plan.md` | Feature inventory + pricing packages |
| `research/` | Background research docs |

## Customer journey

1. Visitor lands on `index.html` → clicks **Start free** or **Pricing**
2. `pricing.html` → picks plan (Free / Basic / Advanced) + cycle (monthly / annual)
3. `signup.html?plan=basic&cycle=monthly` → fills in account form
4. Free plan: account created → straight to `app.html`. Paid plans: → `checkout.html`
5. `checkout.html` → pays via QR PromptPay or credit card → `app.html`

## SearchFit admin

`admin.html` is a separate console for the SearchFit Pro team to view any customer's account ("View as customer" / impersonation), issue refunds, change plans, suspend accounts, and respond to support tickets. Every admin action lands in the audit log.

## SEO infra files

| File | Purpose |
|---|---|
| `robots.txt` | Crawler rules + sitemap reference |
| `sitemap.xml` | All pages with hreflang alternates |
| `llms.txt` | Map for AI crawlers (ChatGPT, Claude, Perplexity) |
| `manifest.json` | PWA manifest |
| `favicon.svg` / `favicon.ico` / `apple-touch-icon.png` / `icon-192.png` / `icon-512.png` | Icons |
| `og-image.png` / `og-image.svg` | 1200×630 social card |

**Before going live:** open `robots.txt`, `sitemap.xml`, `llms.txt`, and every `*.html` and find-replace `https://example.com` with your real domain.

## App roles

- **Owner** — sees everything, agency-wide
- **Account Manager (AM)** — assigned clients only
- **SEO Specialist** — tooling for all clients (no billing)
- **Writer** — content pipeline only
- **Client (view)** — read-only own brand
- **Client (edit)** — approve content + upload assets

## Demo logins

All passwords are `demo`. See the login screen of `app.html` for the full list.

## Stack

Static HTML + Tailwind (CDN) + vanilla JS. No build step, no backend. Runs in any browser.

## Run

```bash
# any static file server
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```
