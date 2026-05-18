# SearchFit Pro — Feature Inventory & Pricing Plan

เอกสารสรุปสำหรับ Media Agency Co. · v1.0 · 18 พ.ค. 2026

---

## ส่วนที่ 1 — เว็บไซต์ของเรา (Public-facing)

ทุกหน้าเข้าได้โดยไม่ต้อง login ใช้สำหรับขาย + ให้ความรู้

| หน้า | จุดประสงค์ | ใช้ตอนไหน |
|---|---|---|
| `index.html` | Landing hub รวมลิงก์ทุกอย่าง | คนเปิดเว็บครั้งแรก |
| `preview.html` | Live demo 7 จุดกดทำงานจริง + 11 mockup | โชว์ลูกค้าที่ยังไม่ตัดสินใจ |
| `proposal.html` | เอกสารนำเสนอ 11 sections — ทำไม, จุดต่าง, pricing, roadmap | ส่งให้คนตัดสินใจซื้อ |
| `tools.html` | 4 เครื่องมือใช้งานได้จริง — Audit, Keyword, Schema, pSEO | ลูกค้าลองก่อนสมัคร |
| `playbook.html` | 40+ งาน SEO แยกรายวัน/สัปดาห์/เดือน + impact | ทีม internal + ลูกค้าที่อยากรู้ละเอียด |
| `help.html` | Help Center · glossary 25+ คำ · ตาราง benchmark ครบ | ลูกค้าหลังสมัคร |

---

## ส่วนที่ 2 — เว็บแอป (Login-only)

### 2.1 ฝั่ง Agency (พนักงาน 4 บทบาท)

#### 🟣 Owner (เจ้าของ — `stamp@acme.co`)
**เห็นทุกอย่าง:**
- **Dashboard** — MRR ฿285,400, Avg Score 76, Keyword Top-10 2,847, Automations success 99.4%, kanban พนักงานวันนี้
- **Clients** — ลูกค้าทั้งหมด 15 ราย (สถานะ, score, retainer, AM ที่ดูแล)
- **Team** — workload, roles, audit log, leave balance
- **Team Tasks (CEO view)** — เช็คว่าพนักงานแต่ละคนทำ daily/weekly tasks ครบหรือยัง
- **Reports** — รายงานทุกลูกค้า + auto monthly PDF + retainer billing
- **Settings · White-label** — โลโก้, custom domain, สี brand, integrations (GSC, GA4, GBP, LINE, FlowAccount)
- **Install Snippets** — 14 snippet copy-paste ส่งให้ลูกค้า (GA4, GTM, Pixel, TikTok, LINE, schema, robots.txt, llms.txt, ฯลฯ)
- **+ ทุกอย่างที่ AM/Specialist เห็น**

#### 🟢 Account Manager (AM — `nong@acme.co`)
- **Dashboard** เห็นเฉพาะลูกค้าที่ตัวเองดูแล
- **Approvals queue**, **Content Pipeline** (brief → review → publish)
- **Reports** ส่งให้ลูกค้า + ขอ comment
- **Team Tasks** ของตัวเอง
- **เครื่องมือทั้งหมด** ของลูกค้า — All Metrics, AI Visibility, Rank Tracker, Backlinks, Local Grid
- **ไม่เห็น:** MRR ทั้งบริษัท, billing ลูกค้าคนอื่น, settings

#### 🟡 SEO Specialist (`pim@acme.co`)
- **Project Detail** — audit, ผลคะแนน, แก้ปัญหา CWV / Schema
- **All Metrics, Rank Tracker, Backlinks, Local Grid, AI Visibility, Automations**
- **Content Pipeline** (view + brief)
- **ไม่เห็น:** Team, Reports ของลูกค้าอื่น, Settings, Billing

#### 🟠 Writer (`max@acme.co`)
- **Content Pipeline เท่านั้น** — draft, edit, ส่ง review
- ไม่เห็น metrics / billing / ลูกค้าอื่น

---

### 2.2 ฝั่งลูกค้า (white-label — ลูกค้าเห็นแบรนด์ Media Agency Co. ไม่เห็นว่าใช้ SearchFit Pro)

ลูกค้าแต่ละคน **เห็นเฉพาะข้อมูลของแบรนด์ตัวเอง** — ไม่เห็นลูกค้าคนอื่นแน่นอน

#### 👁 Client View-only (เช่น `doctor@healthwise.com`)
**สำหรับลูกค้าที่อยากดูอย่างเดียว ไม่ต้องตัดสินใจ:**
- **My Dashboard** — score การเติบโต, traffic chart, ranking ที่สำคัญ
- **All Metrics** — GSC (clicks/impressions/CTR/position) + GA4 (sessions/engagement) + CWV (LCP/INP/CLS) + AI Visibility ครบในที่เดียว พร้อม benchmark
- **AI Visibility** — เห็นว่าแบรนด์ติด ChatGPT/Claude/Gemini/Perplexity/AI Overview กี่ครั้ง
- **Rank Tracker** — keyword ที่ทำ ranking ปัจจุบัน + 14-day trend
- **Backlinks** — link ใหม่ที่ได้มา + link ที่หาย
- **Reports** — รายงานรายเดือนสะสม download PDF ได้
- **Scoring Reference** — เกณฑ์มาตรฐานว่าคะแนนเท่าไหร่ถึงดี
- **Help Center** เปิดได้
- **คอมเมนต์**ในรายงานได้ แต่ approve content ไม่ได้

#### ✏️ Client Edit (เช่น `ceo@coffeeco.th`)
ทุกอย่างของ View-only **+:**
- **Approvals** — อนุมัติ/ขอแก้ content ที่ทีม SEO ส่งมา
- **Content Pipeline** — เห็นทุก content ที่กำลังทำให้, comment ได้
- **Settings** — อัปโหลด brand asset (logo, สี, รูปสินค้า)

---

## ส่วนที่ 3 — Feature Map (รายการเครื่องมือทั้งหมด)

| # | Feature | ใครเห็น | สถานะ |
|---|---|---|---|
| 1 | **SEO Audit** (fetch URL จริง + ตรวจ 16 จุด) | ทุกคน (tools.html, public) | ✅ ใช้ได้จริง |
| 2 | **Keyword Research + Clustering** | ทุกคน (tools.html) | ✅ ใช้ได้จริง |
| 3 | **Schema Generator** (JSON-LD 10 ประเภท) | ทุกคน (tools.html) | ✅ ใช้ได้จริง |
| 4 | **Programmatic SEO Builder** (CSV → bulk pages) | ทุกคน (tools.html) | ✅ ใช้ได้จริง |
| 5 | **Rank Tracker** (daily SERP + 14-day trend) | Agency + Client | ✅ UI ครบ |
| 6 | **Backlinks Monitor** (new + lost weekly) | Agency + Client | ✅ UI ครบ |
| 7 | **AI Visibility** (5 engines tracking) | Agency + Client | ✅ UI ครบ |
| 8 | **Local Grid Scanner** (3×3 ถึง 21×21) | Agency only | ✅ UI ครบ |
| 9 | **Content Pipeline** (brief → draft → review → publish) | Agency + Client-edit | ✅ UI ครบ |
| 10 | **Automations** (20+ recipes · LINE/Slack alerts) | Agency only | ✅ UI ครบ |
| 11 | **All Metrics Dashboard** (GSC+GA4+CWV+AI รวม) | Agency + Client | ✅ UI ครบ |
| 12 | **Reports** (auto monthly PDF + live portal) | Agency + Client | ✅ UI ครบ |
| 13 | **Scoring Reference** (12 benchmarks) | ทุกคน | ✅ ครบ |
| 14 | **Install Snippets** (14 ก้อนพร้อม copy) | Agency only | ✅ ครบ |
| 15 | **White-label Portal** (custom domain + logo + สี) | Owner config | ✅ UI ครบ |
| 16 | **Team Management** (CEO view ดูพนักงาน) | Owner + AM | ✅ UI ครบ |

---

## ส่วนที่ 4 — เก็บรายเดือนลูกค้าได้มั้ย?

**ได้ครับ** — ระบบมีโครงสร้างพร้อมแล้ว:

1. ฟิลด์ `retainer` ในข้อมูลลูกค้าอยู่แล้ว (ปัจจุบันมี ฿15,000 / 18,000 / 22,000 / 25,000 / 28,000 / 35,000)
2. **MRR** บน Dashboard คำนวณรวมจาก retainer ของทุกลูกค้า (ตอนนี้ ฿285,400/เดือน)
3. มี integration กับ **FlowAccount** ใน Settings (ออกใบกำกับภาษีอัตโนมัติได้)
4. รายงานรายเดือนระบบสร้างให้อัตโนมัติ → ส่งให้ลูกค้าพร้อมบิล

ที่ต้องเพิ่ม (ถ้าจะเก็บเงินจริง): payment gateway (Omise / 2C2P / Stripe) เพื่อตัดบัตรอัตโนมัติ

---

## ส่วนที่ 5 — แพ็กเกจสำหรับลูกค้า (Agency → Clients)

นี่คือราคาที่ **Agency เรียกเก็บจากลูกค้าของตัวเอง** อิงจาก retainer ที่มีอยู่ในระบบ + benchmark ตลาดไทย

### 🥉 Starter — ฿15,000 / เดือน
**สำหรับ:** ธุรกิจขนาดเล็ก, ร้านท้องถิ่น, แบรนด์เริ่มต้น
- ติดตาม keyword **20 keyword**
- SEO Audit หน้าหลัก 5 หน้า (re-scan รายสัปดาห์)
- Content **2 บทความ/เดือน** (700–1,000 คำ)
- Monthly report (PDF + live link)
- Client portal · view-only
- Help Center + Scoring Reference
- Email/LINE support · ตอบใน 2 วันทำการ
- **ตัวอย่าง:** EduStudio (฿15,000)

### 🥈 Growth — ฿25,000 / เดือน *(แพ็กเกจที่ขายดีที่สุด)*
**สำหรับ:** SMB ที่มีเว็บแล้วและอยากโต — น่าจะเหมาะลูกค้า 60–70%
- ติดตาม keyword **50 keyword**
- SEO Audit ทั่วเว็บ (re-scan รายสัปดาห์)
- Content **4 บทความ/เดือน** (1,200–1,800 คำ)
- **AI Visibility tracking** (5 engines, 10 prompts)
- **Rank Tracker** + competitor (top 3 competitors)
- **Backlinks Monitor**
- Schema markup ติดให้ครบ
- Monthly report + mid-month check-in
- Client portal · edit (approve content ได้)
- Support 1 วันทำการ
- **ตัวอย่าง:** Coffee Co. (฿25,000)

### 🥇 Pro — ฿45,000 / เดือน
**สำหรับ:** E-commerce, B2B SaaS, แบรนด์มีคู่แข่งเยอะ
- ติดตาม keyword **150 keyword**
- SEO Audit ครอบคลุม (auto-fix tasks สำหรับ dev)
- Content **8 บทความ/เดือน** + content brief สำหรับทีมลูกค้า
- **AI Visibility** (5 engines, 30 prompts, weekly)
- **Rank Tracker** + 5 competitors
- **Local Grid 7×7** (ถ้ามีหน้าร้าน)
- **Programmatic SEO** (รับ scale page 50+ หน้า/เดือน)
- pSEO + topic clusters
- Backlinks outreach (3–5 links/เดือน)
- Custom report + slack/LINE alerts
- Dedicated AM + weekly sync 30 นาที
- Support เร่งด่วน 4 ชม.
- **ตัวอย่าง:** Travel Roam (฿35,000), HealthWise (฿28,000)

### 💎 Enterprise — เริ่ม ฿80,000 / เดือน
**สำหรับ:** ลูกค้าหลายสาขา, แฟรนไชส์, แบรนด์ระดับชาติ
- **Keyword ไม่จำกัด**
- Multi-location (5+ สาขา) · **Local Grid 21×21**
- Content 15+ บทความ/เดือน + thought leadership
- AI Visibility · 100+ prompts · daily
- Dedicated team (1 AM + 1 Specialist + 1 Writer)
- Custom integration (GA4, GBP, ERP, CRM)
- Quarterly business review
- Priority support 1 ชม.

### Add-ons เก็บเงินเพิ่มได้
- หน้าใหม่ตัด ฿800–2,000/หน้า
- Backlinks outreach pack 10 link · ฿15,000
- Local Grid scan แบบ on-demand · ฿2,000/ครั้ง
- AI Visibility audit ครั้งเดียว · ฿8,000
- Schema implementation (per template) · ฿3,500
- Website migration audit · ฿25,000

---

## ส่วนที่ 6 — แพ็กเกจขาย SearchFit Pro ให้ Agency อื่น (ถ้าทำในอนาคต)

ถ้าวันหนึ่งอยากเปิดเป็น SaaS ขายให้ agency อื่นๆ ในไทย (จากที่ Proposal ก็ระบุเอาไว้ว่าตลาดยังว่าง):

| Plan | จำนวนลูกค้า | ผู้ใช้ | ราคา/เดือน |
|---|---|---|---|
| **Solo** | 5 clients | 1 user | ฿4,900 |
| **Studio** | 15 clients | 5 users | ฿12,900 |
| **Agency** | 50 clients | 15 users | ฿29,900 |
| **Network** | unlimited | unlimited | ฿79,900 + custom |

จุดเด่นที่ขายได้คือ flat THB pricing, Thai-language SEO ของจริง, รวม AI Visibility + Local Grid ในตัว ไม่ต้องซื้อหลายเครื่องมือ

---

## ส่วนที่ 7 — Quick Math (ทำให้เห็นภาพ)

**ปัจจุบัน 15 ลูกค้า → ฿285,400/เดือน → ฿3.42M/ปี**

ถ้าวางแพ็กเกจตามข้างบน mix ดีๆ:
- 5 Starter @ ฿15K = ฿75,000
- 7 Growth @ ฿25K = ฿175,000
- 2 Pro @ ฿45K = ฿90,000
- 1 Enterprise @ ฿80K = ฿80,000
- **รวม ฿420,000/เดือน → ฿5.04M/ปี** (มี headroom +47% จากแค่ปรับ pricing tier)

---

## ขั้นถัดไปแนะนำ
1. ตัดสินใจชื่อแพ็กเกจ (Starter/Growth/Pro/Enterprise หรือชื่ออื่น) + ราคาสุดท้าย
2. เพิ่มหน้า `pricing.html` แสดงแพ็กเกจให้ลูกค้าใหม่เห็น
3. เพิ่ม payment gateway ใน `view-settings` (Omise/2C2P)
4. ใส่ลิงก์ "Upgrade plan" ใน Client Portal เพื่อให้ลูกค้า upgrade เองได้
