# SearchFit Pro

SEO platform for Thai media agencies — proposal, interactive prototype, and working MVP tools, all bilingual (EN default · TH toggle).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing hub linking to everything |
| `preview.html` | Live demo — 7 working interactive demos + 11 mockups |
| `proposal.html` | Sales proposal — 11 sections, market, differentiation, pricing, roadmap |
| `app.html` | Full webapp SPA with login + role-based views |
| `tools.html` | 4 working SEO tools — Audit, Keyword, Schema, pSEO |
| `playbook.html` | Daily/weekly/monthly SEO tasks · 40+ items with impact + time |
| `help.html` | Help Center · client-friendly · glossary · benchmark tables |
| `assets/i18n.js` | Shared EN/TH toggle — default EN, toggle persisted in localStorage |
| `business-plan.md` | Feature inventory + pricing packages |
| `research/` | Background research docs |

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
