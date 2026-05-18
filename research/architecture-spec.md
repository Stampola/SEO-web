# SearchFit Platform — Architecture & Tech Stack Spec

วันที่ 17 พ.ค. 2026
สำหรับ Thai media agency SEO platform

---

## ภาพรวม

แพลตฟอร์ม SEO สำหรับ media agency ที่ทำ SEO ทั้งให้ลูกค้าและตัวเอง — multi-tenant, white-label, automation-first, รองรับ AI search era

---

## Data Model — 3-Tier

```
Agency (tenant)
 └── Client (brand/account)
      └── Project (site/property)
           ├── Keywords
           ├── Audits
           ├── Backlinks
           ├── Content Briefs / Pages
           ├── Tasks
           └── Reports
```

ทุก query ต้อง scope ด้วย `agency_id` + `client_id` เพื่อ row-level isolation

---

## Role Matrix (6 roles)

| Role | Scope | Permissions |
|---|---|---|
| **Owner** | All agency | Billing, staff, all clients, white-label settings |
| **Account Manager** | Assigned clients | Reports, tasks, comms, approvals, no billing |
| **SEO Specialist** | Assigned projects | Audits, rank tracking, on-page changes, run automations |
| **Content Writer** | Assigned briefs | Edit own drafts, submit for review |
| **Client (View)** | Own brand only | View dashboards/reports, comment |
| **Client (Edit)** | Own brand only | Approve content, request changes, upload assets |

---

## Tech Stack

### Frontend
- **Next.js 15** (App Router) + React 19 — SSR for marketing, SPA for app
- **TypeScript** strict
- **Tailwind CSS 4** + shadcn/ui — design system
- **TanStack Query** — data fetching/caching
- **Recharts** — charts, **MapLibre** — local grid maps
- **i18next** — Thai/English bilingual

### Backend
- **Node.js 22** + **Hono** หรือ **Fastify** (เลือก Hono เพราะ edge-deployable)
- **PostgreSQL 16** (Neon หรือ Supabase) — main DB with row-level security
- **Redis** — cache, rate limit, queue priority
- **BullMQ** — job queue (audit crawls, AI prompt portfolios, report generation)
- **S3-compatible object storage** (Cloudflare R2 — เร็ว+ถูกในเอเชีย) — reports, screenshots, exports
- **ClickHouse** — time-series ranking/traffic data (เร็วกว่า Postgres เมื่อ scale)
- **Better Auth** — auth + multi-factor + session

### Crawl & Render
- **Puppeteer/Playwright** workers — JS rendering parity check
- **Crawler workers** (Go หรือ Rust optional) — site audit fastpath
- **PSI API** + **CrUX API** — Core Web Vitals

### AI / LLM
- **Claude Sonnet 4** หรือ **Opus** — content briefs, AI summaries, schema validation
- **OpenAI / Perplexity / Gemini APIs** — GEO prompt portfolio testing across engines
- **PyThaiNLP** (microservice) — Thai tokenization, keyword segmentation
- **Embeddings** (Voyage หรือ OpenAI text-embedding-3) — content similarity, dedup

### Third-Party Data
- **Google Search Console API** — impressions, clicks, queries
- **Google Analytics 4 Data API** — sessions, conversions
- **Google Business Profile API** — local
- **PageSpeed Insights API** — CWV
- **DataForSEO** หรือ **SerpAPI** — SERP data, rank tracking
- **Bright Data** / **ScrapingBee** — backlink data licensing
- **Pantip API/scraper** — Thai mention tracking
- **LINE Messaging API** — alerts/notifications
- **Stripe** + **Omise** — billing (TH-friendly)
- **Xero / FlowAccount / PEAK** — invoicing sync

### Infrastructure
- **Vercel** หรือ **Cloudflare Pages** — frontend
- **Railway / Fly.io / DigitalOcean** — backend workers (อยู่ใกล้ตลาดเอเชีย)
- **GitHub Actions** — CI/CD
- **Sentry** + **PostHog** + **OpenTelemetry** — observability
- **Cloudflare WAF** + DDoS

---

## Automation Engine

ทุก automation เป็น "Rule" ที่เก็บใน DB + ทำงานผ่าน BullMQ jobs:

### Triggers
- **Time-based**: cron schedules (daily/weekly/monthly + ad-hoc)
- **Event-based**: ranking drop > N positions, audit score change, new backlink found, GSC alert, CWV regression
- **Manual**: kicked off by user

### Actions
- Run site audit
- Run rank check
- Generate weekly/monthly report (PDF + email + LINE)
- Create task ticket
- Send alert (LINE group, Slack, email)
- Update content brief status
- Sync to ClickUp/Asana
- Run AI prompt portfolio check
- Generate AI summary commentary
- Auto-update schema markup
- Submit URL to GSC for re-indexing

### Examples (built-in rule templates)
1. *"แจ้งใน LINE ทันทีถ้า keyword ติดอันดับลดลงเกิน 5 อันดับ"*
2. *"รัน audit ทุกวันจันทร์ 6:00 — ถ้าคะแนนตก > 10 จุด สร้าง task ให้ specialist"*
3. *"ทุกสิ้นเดือน 25 — generate รายงาน + ส่ง email ลูกค้า + แชร์ใน LINE OA group"*
4. *"ทุกวันศุกร์ — เช็ค AI Overview citation, ถ้าหลุดให้ flag เพิ่ม brief ใหม่"*

---

## Scoring System

### SearchFit Score (0-100)
Weighted composite:
- **On-Page (25%)** — title, meta, headings, content quality, alt, internal links
- **Technical (20%)** — crawlability, indexation, sitemap, robots, schema, HTTPS, lang
- **Performance (15%)** — Core Web Vitals (INP, LCP, CLS) + page speed
- **Content (15%)** — depth, freshness, E-E-A-T signals, originality
- **Off-Page (15%)** — backlink quality, referring domains, mentions
- **AI Visibility (10%)** — citations in ChatGPT/Claude/Gemini/Perplexity/AIO

### Per-Pillar Drill-Down
- คะแนนรายหัวข้อ + delta vs last week/month
- แต่ละ issue มี priority (Critical/Warning/Info)
- ทุก issue link ไป "fix recipe" (วิธีแก้ทีละขั้น + auto-create task)

---

## API Design

REST + GraphQL hybrid:
- **REST** สำหรับ public/integration endpoints (`/api/v1/...`)
- **GraphQL** สำหรับ dashboard internal (Apollo)
- **Webhooks out** ทุก event (audit done, ranking change, report ready)
- **Public API** สำหรับลูกค้า enterprise ดึง data ออกไปใช้

---

## Security & Compliance

- Row-level security ใน Postgres
- SSO (Google, Microsoft, SAML สำหรับ enterprise)
- 2FA mandatory สำหรับ Owner/AM
- API rate limiting + per-key quota
- PDPA-compliant (ลูกค้าไทย)
- Audit log สำหรับทุกการเปลี่ยนแปลง (PDPA + agency transparency)
- Backups daily + point-in-time recovery
- SOC 2 Type 2 roadmap

---

## Deployment Phases

### Phase 1 — MVP (เดือน 1-3)
- 3-tier data model + auth + 6 roles
- Project setup wizard + GSC/GA4 OAuth
- Site audit + SearchFit Score
- Keyword tracker (manual upload) + daily SERP fetch (DataForSEO)
- Content brief object + writer flow
- Schema generator + JSON-LD library
- Programmatic SEO page builder
- White-label basic (logo + colors on reports)
- PDF report generator
- Stripe + Omise billing
- LINE notification

### Phase 2 — Automation + AI (เดือน 4-6)
- Automation engine + rule builder UI
- AI Overview citation tracker
- GEO prompt portfolio (ChatGPT/Claude/Gemini/Perplexity)
- AI Summary on reports
- Backlink monitoring (DataForSEO/Bright Data)
- Local SEO grid scanner (3x3 → 11x11)
- GBP integration + audit
- Approval workflows
- ClickUp/Asana sync

### Phase 3 — Scale & Differentiation (เดือน 7-12)
- Full white-label (custom domain, SPF/DKIM, branded email)
- AI Crawler Access Auditor (GPTBot, ClaudeBot, etc.)
- Entity Graph Builder + Author schema
- Pantip/Wongnai mention tracking
- LINE OA integration deep
- FlowAccount/PEAK/Xero sync
- Public API + Zapier
- Mobile companion app
- Enterprise SSO + SAML

---

## Pricing Model (THB-native)

| Tier | Price/mo | Clients | Staff seats | Keywords | White-label |
|---|---|---|---|---|---|
| **Starter** (Freelancer) | ฿1,490 | 3 | 2 | 250 | Basic logo |
| **Agency** | ฿4,990 | 15 | Unlimited | 2,500 | Full |
| **Pro** | ฿14,990 | 50 | Unlimited | 10,000 | Full + custom domain |
| **Enterprise** | ติดต่อ | Unlimited | Unlimited | Custom | All + SSO + dedicated CSM |

- Annual: -20%
- Extra keywords: ฿500 per 500
- Extra clients (Starter only): ฿299/client/mo
- Free trial: 14 วัน ไม่ต้องใส่บัตร

---

## Summary

ใช้ stack ที่ proven แต่ optimize สำหรับเอเชีย (CDN ใกล้, billing local, ภาษาท้องถิ่น) + ของพิเศษอยู่ที่ **automation engine + AI visibility + Thai data sources** ซึ่งทำเป็น moat ได้ยากที่ Ahrefs/Semrush จะลอกตามได้เร็ว
