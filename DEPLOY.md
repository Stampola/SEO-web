# Deploy SearchFit Pro บน Cloudflare Pages

คู่มือ deploy เว็บนี้ขึ้น Cloudflare Pages — ฟรี ไม่จำกัด bandwidth มี edge node ในกรุงเทพฯ

## สิ่งที่จะได้
- URL ฟรี: `https://<project-name>.pages.dev` (เช่น `https://searchfit-pro.pages.dev`)
- HTTPS อัตโนมัติ (Let's Encrypt)
- DDoS protection ฟรี
- Auto-deploy ทุกครั้งที่ push เข้า branch `main` บน GitHub
- Preview URL สำหรับทุก branch (เผื่อทำ feature branch)

---

## ขั้นตอน (15 นาที)

### 1. สมัคร Cloudflare (ถ้ายังไม่มี)
- เปิด https://dash.cloudflare.com/sign-up
- ใช้ email อะไรก็ได้ ไม่ต้องใส่บัตรเครดิต ไม่ต้องใส่ domain

### 2. สร้าง Pages project
- เข้า https://dash.cloudflare.com → เมนูซ้าย **Workers & Pages** → tab **Pages**
- กดปุ่ม **Create application** → tab **Pages** → **Connect to Git**
- กด **Connect GitHub** → Authorize → เลือก install เฉพาะ repo `Stampola/SEO-web` (หรือเลือก All repos)

### 3. ตั้งค่า build
หน้า "Set up builds and deployments":

| Field | ใส่ค่า |
|---|---|
| Project name | `searchfit-pro` (จะเป็น URL: `searchfit-pro.pages.dev`) |
| Production branch | `main` |
| Framework preset | **None** |
| Build command | (ว่างไว้) |
| Build output directory | `/` |

กด **Save and Deploy** → รอ 30-60 วินาที

### 4. เปิดเว็บ
- หลัง deploy เสร็จ จะเห็น URL `https://searchfit-pro.pages.dev`
- กดเปิดเช็คว่าทุกหน้าโหลดถูกต้อง

---

## หลัง deploy แล้ว — แก้ URL จาก placeholder

ตอนนี้ทุกหน้ายังใช้ `https://example.com` ใน meta tags (canonical, og:url), sitemap, robots, llms.txt

รันคำสั่งนี้ใน PowerShell แทนที่ด้วย URL จริงของคุณ:

```powershell
cd D:\Code\Capresso\SEO-web
.\set-domain.ps1 https://searchfit-pro.pages.dev
git add .
git commit -m "Set production domain"
git push
```

Cloudflare จะ auto-deploy ตัวใหม่ภายใน 1 นาทีหลัง push

---

## ตั้งค่าเพิ่ม (ทำเมื่อพร้อม)

### ตั้ง custom domain ภายหลัง

1. ซื้อ domain (`.com` แนะนำ Namecheap / Porkbun; `.co.th` แนะนำ T.H.NIC)
2. ใน Cloudflare Pages project → tab **Custom domains** → **Set up a custom domain**
3. ใส่ domain → Cloudflare จะบอก DNS record ที่ต้องตั้ง:
   - **ถ้า domain อยู่บน Cloudflare แล้ว**: แค่กด Activate
   - **ถ้าอยู่ที่อื่น**: copy CNAME ไปใส่ที่ DNS provider เก่า หรือย้าย nameserver มา Cloudflare (ง่ายกว่า)
4. HTTPS ติดอัตโนมัติภายใน 5-15 นาที
5. รัน `set-domain.ps1 https://yourdomain.com` อีกรอบเพื่ออัปเดต meta

### ส่ง sitemap ให้ Google
1. https://search.google.com/search-console → Add property → URL prefix → ใส่ `https://searchfit-pro.pages.dev`
2. Verify ด้วย HTML tag (copy ไปวางใน `<head>` ของ `index.html`)
3. เมนู Sitemaps → ใส่ `sitemap.xml` → Submit

### ส่ง sitemap ให้ Bing
1. https://www.bing.com/webmasters → Sign in ด้วย Google account
2. Import จาก Google Search Console ได้ทันที (สะดวกสุด)

### ดูสถิติ
- Cloudflare Pages project → tab **Analytics**: เห็น page views, top countries, top URLs
- เพิ่ม **Web Analytics** (ฟรี ไม่ track user) ใน Cloudflare dashboard → Analytics & Logs → Web Analytics

---

## Troubleshooting

**Build failed?**
- เช็คว่า Build output directory = `/` (ไม่ใช่ `dist` หรือ `build`)
- เช็คว่า Framework preset = None

**ทุกหน้าโชว์ 404?**
- เช็คว่ามี `index.html` ที่ root ของ repo (ไม่ใช่ใน subfolder)

**Custom domain ไม่ทำงาน?**
- รอ 15 นาทีให้ DNS propagate
- เช็คที่ https://dnschecker.org/ ว่า CNAME ขึ้นทั่วโลกหรือยัง

**ราคา/Limit ที่ต้องรู้:**
- Free plan: 500 builds/เดือน, ไม่จำกัด bandwidth, ไม่จำกัด requests
- ปกติเว็บนี้ build ครั้งละ <30 วินาที + commit ไม่บ่อย → ใช้ฟรีตลอดได้

---

## คำสั่งสรุป (ทำตามลำดับ)

```powershell
# 1. ตอนนี้ commit + push ก่อน (Cloudflare จะ deploy อัตโนมัติ)
cd D:\Code\Capresso\SEO-web
git add .
git commit -m "Add Cloudflare Pages config"
git push

# 2. ไปทำขั้นตอน 1-4 ด้านบนบนเว็บ Cloudflare (15 นาที)

# 3. หลังเห็น URL .pages.dev แล้ว — อัปเดต meta tags
.\set-domain.ps1 https://searchfit-pro.pages.dev
git add .
git commit -m "Set production domain"
git push

# 4. ส่ง sitemap ให้ Google Search Console (ขั้นถัดไป)
```
