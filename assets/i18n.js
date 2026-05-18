/* SearchFit Pro — shared i18n engine
 * Default: EN. Toggle button (TH/EN) in fixed top-right corner.
 * Translation strategies (in order):
 *   1. data-en / data-th attributes on the element (textContent swap)
 *   2. data-en-html / data-th-html attributes (innerHTML swap, for <br/>, <strong>)
 *   3. data-placeholder-en / data-placeholder-th (for inputs)
 *   4. Dictionary lookup of trimmed text content (DICT below)
 * The dictionary covers common UI strings across pages so existing markup
 * doesn't need exhaustive attribute annotation.
 */
(function(){
  'use strict';
  const KEY = 'sfp_lang';
  // ────────────────────────────────────────────────────────────────
  // Dictionary: Thai → English fallback for unannotated text nodes
  // Keep this list curated, exact-trim, no leading/trailing spaces.
  // ────────────────────────────────────────────────────────────────
  const TH_TO_EN = {
    // Brand / tagline
    'SEO Platform for Thai Media Agencies': 'SEO Platform for Thai Media Agencies',
    // Navigation
    'หน้าแรก': 'Home',
    'แดชบอร์ด': 'Dashboard',
    'Dashboard': 'Dashboard',
    'เครื่องมือ': 'Tools',
    'คู่มือ': 'Guide',
    'คู่มือใช้งาน': 'User Guide',
    'ช่วยเหลือ': 'Help',
    'ลูกค้า': 'Clients',
    'รายงาน': 'Reports',
    'การตั้งค่า': 'Settings',
    'ออกจากระบบ': 'Sign out',
    'เข้าสู่ระบบ': 'Sign in',
    'เข้าใช้งาน': 'Open App',
    'เปิด Preview': 'Open Preview',
    'อ่าน Proposal': 'Read Proposal',
    'ลองใช้': 'Try it',
    'เปิดอันนี้ก่อน': 'Open this first',
    '⭐ เปิดอันนี้ก่อน': '⭐ Open this first',
    'แนะนำการดู': 'Recommended path',
    '💡 แนะนำการดู': '💡 Recommended path',
    // Common buttons
    'บันทึก': 'Save',
    'ยกเลิก': 'Cancel',
    'ลบ': 'Delete',
    'แก้ไข': 'Edit',
    'ดู': 'View',
    'ส่งออก': 'Export',
    'ดาวน์โหลด': 'Download',
    'ค้นหา': 'Search',
    'รันเลย': 'Run now',
    'เริ่ม audit': 'Start audit',
    'สร้าง': 'Generate',
    'คัดลอก': 'Copy',
    'คัดลอก JSON': 'Copy JSON',
    'คัดลอกทั้งหมด': 'Copy all',
    'รีเซ็ต': 'Reset',
    'ลองเลย': 'Try now',
    'ทดสอบ': 'Test',
    'เพิ่มลูกค้า': 'Add client',
    'เพิ่มงาน': 'Add task',
    'อ่านต่อ': 'Read more',
    // Hero / index
    'Webapp ทำ SEO': 'SEO Webapp',
    'ครบทุกด้าน': 'all-in-one',
    'เอกสารนำเสนอ + Interactive Prototype + MVP Tools ที่ใช้ได้จริง':
      'Proposal + Interactive Prototype + Working MVP Tools',
    'สำหรับ media agency ไทยที่จะทำ SEO ให้ลูกค้าและตัวเอง':
      'For Thai media agencies serving SEO to their clients (and themselves)',
    'หน้าเดียวจบ — ดูทุกอย่างที่เว็บแอปทำได้':
      'Single page — see everything the platform can do',
    '7 live demos กดทำงานจริง · 11 mockup screens · ครบในไฟล์เดียว ไม่ต้องเปิดหลายแท็บ':
      '7 working live demos · 11 mockup screens · all in one file, no tab juggling',
    '~ 5 นาทีดูทั้งหมด': '~5 min to walk through',
    'เอกสารนำเสนอแบบลึก — ทำไมต้องทำ, จุดต่าง, feature, automation, pricing, roadmap':
      'Deep proposal — why, differentiation, features, automation, pricing, roadmap',
    '11 sections · ~ 15 นาทีอ่าน': '11 sections · ~15 min read',
    'ระบบ login แยกบทบาท · admin เห็นทุกอย่าง · ลูกค้าเห็นเฉพาะของตัวเอง · white-label portal':
      'Role-based login · admin sees everything · clients see only their own · white-label portal',
    '11 users · 7 client accounts · demo login': '11 users · 7 client accounts · demo login',
    'เครื่องมือใช้ได้จริง 4 ตัว — Audit, Keyword, Schema, pSEO · ใส่ URL จริง audit ได้':
      '4 working tools — Audit, Keyword, Schema, pSEO · audit real URLs',
    'ทำงานได้จริงในเบราว์เซอร์ · ไม่มี backend': 'Runs in the browser · no backend',
    'คู่มือสำหรับลูกค้าและทีม': 'Guides for clients & team',
    'อธิบายค่าต่างๆ + งาน SEO ที่ต้องทำเพื่อเพิ่ม score':
      'Explains each metric + the SEO tasks needed to lift the score',
    'Help Center · คู่มือลูกค้า': 'Help Center · Client guide',
    'อธิบายทุกค่าในระบบ — SEO Score, INP, AI Visibility, Schema, Local Grid · FAQ · Glossary 25+ คำศัพท์':
      'Explains every score — SEO Score, INP, AI Visibility, Schema, Local Grid · FAQ · 25+ glossary terms',
    'Staff Playbook · งาน SEO ประจำ': 'Staff Playbook · Daily SEO tasks',
    '40+ งานที่ทีมต้องทำเพื่อเพิ่ม SEO score · Daily/Weekly/Monthly · แยกตาม role · มี time + impact ครบ':
      '40+ tasks to lift SEO score · Daily/Weekly/Monthly · split by role · with time + impact',
    'Research ที่อยู่เบื้องหลัง': 'Background research',
    'เอกสาร 4 ฉบับ · ความรู้รวม ~6,000 คำ · มีแหล่งอ้างอิงครบ':
      '4 documents · ~6,000 words · fully referenced',
    'SEO tools researched': 'SEO tools researched',
    'Strategic wedges': 'Strategic wedges',
    'Platform features': 'Platform features',
    'UI screens in prototype': 'UI screens in prototype',
    'เปิด': 'Open',
    'อ่าน': 'Read',
    'ถ้าอยากเข้าใจลึก — market, จุดต่าง, pricing, roadmap':
      'if you want depth — market, differentiation, pricing, roadmap',
    'มีหน้า login จริง · ลอง demo accounts หลายๆ role (admin, client) ดูว่าแต่ละคนเห็นอะไรต่างกัน':
      'real login page · try demo accounts in different roles (admin, client) to see what each sees',
    'ลองใช้กับ URL จริงของคุณ — audit, schema, pSEO':
      'try it on your real URLs — audit, schema, pSEO',
    'เอกสารและ prototype ทั้งหมดสร้างขึ้นเพื่อใช้นำเสนอ webapp ทำ SEO สำหรับ media agency ไทย':
      'All documents and prototypes created to present an SEO webapp for Thai media agencies',
    // Audit / Tools page
    'SEO Audit': 'SEO Audit',
    'ตรวจหน้าเว็บ': 'Audit a page',
    'ตรวจเว็บไซต์': 'Audit website',
    'วาง URL หรือ HTML': 'Paste URL or HTML',
    'คะแนน': 'Score',
    'คะแนนรวม': 'Overall score',
    'ผ่าน': 'Pass',
    'ไม่ผ่าน': 'Fail',
    'แก้ไขด่วน': 'Quick fixes',
    'คำแนะนำ': 'Recommendations',
    'ผลลัพธ์': 'Results',
    'ลำดับ': 'Rank',
    'คีย์เวิร์ด': 'Keyword',
    'กลุ่มคีย์เวิร์ด': 'Keyword clusters',
    'ปริมาณค้นหา': 'Search volume',
    'ความยาก': 'Difficulty',
    'เจตนาผู้ใช้': 'User intent',
    'ขยายคีย์เวิร์ด': 'Expand keywords',
    'Schema สร้าง': 'Schema generator',
    'สร้าง Schema': 'Generate schema',
    'ประเภท Schema': 'Schema type',
    'ชื่อ': 'Name',
    'คำอธิบาย': 'Description',
    'รูปภาพ': 'Image',
    'ราคา': 'Price',
    'หมวดหมู่': 'Category',
    'หน้าเว็บ': 'Page',
    // Playbook
    'งานประจำวัน': 'Daily tasks',
    'รายสัปดาห์': 'Weekly',
    'รายเดือน': 'Monthly',
    'งานทั้งหมด': 'All tasks',
    'ทั้งหมด': 'All',
    'งาน': 'Task',
    'เวลา': 'Time',
    'ผลกระทบ': 'Impact',
    'สูง': 'High',
    'กลาง': 'Medium',
    'ต่ำ': 'Low',
    'บทบาท': 'Role',
    'ทุกบทบาท': 'All roles',
    // Help / Glossary
    'อภิธานศัพท์': 'Glossary',
    'คำถามที่พบบ่อย': 'FAQ',
    'คะแนน SEO คืออะไร': 'What is SEO Score?',
    // Status pills
    'พร้อมใช้': 'Ready',
    'กำลังพัฒนา': 'In development',
    'เร็วๆ นี้': 'Coming soon',
    'ใหม่': 'New',
    // Proposal common
    'ภาพรวม': 'Overview',
    'จุดต่าง': 'Differentiation',
    'แผนงาน': 'Roadmap',
    'ราคา': 'Pricing',
    'รายเดือน': 'Monthly',
    'รายปี': 'Annually',
    'เริ่มต้น': 'Starter',
    'ธุรกิจ': 'Business',
    'องค์กร': 'Enterprise',
    // App / login
    'อีเมล': 'Email',
    'รหัสผ่าน': 'Password',
    'ลืมรหัสผ่าน?': 'Forgot password?',
    'จดจำฉัน': 'Remember me',
    'ค้นหาลูกค้า...': 'Search clients...',
    'ค้นหา...': 'Search...',
    // ─── app.html ───
    'ทำ SEO ให้': 'SEO for',
    'ลูกค้าและตัวเอง': 'clients and yourself',
    'ในที่เดียว': 'in one place',
    'Multi-client management · White-label client portal · Automation engine · AI Visibility tracking — ครบในแพลตฟอร์มเดียว':
      'Multi-client management · White-label client portal · Automation engine · AI Visibility tracking — all in one platform',
    '15 ลูกค้าใน workspace · 99.4% automation uptime': '15 clients in workspace · 99.4% automation uptime',
    'Role-based access · ลูกค้าเห็นเฉพาะของตัวเอง': 'Role-based access · clients see only their own',
    'White-label · ลูกค้าเห็นแบรนด์ agency ของคุณ': 'White-label · clients see your agency brand',
    'ยินดีต้อนรับกลับ 👋': 'Welcome back 👋',
    'ล็อกอินเพื่อเข้าสู่ workspace ของคุณ': 'Sign in to your workspace',
    'ลืมรหัส?': 'Forgot password?',
    'จำฉันไว้': 'Remember me',
    'ล็อกอิน': 'Sign in',
    'กดเพื่อ login เร็วๆ · password:': 'Click to sign in quickly · password:',
    'ยังไม่ใช่ลูกค้า?': 'Not a client yet?',
    'ดู Proposal': 'View Proposal',
    'retainer ของเดือนนี้': 'monthly retainer',
    'ภาพรวม 15 ลูกค้า': 'All 15 clients',
    'จาก 4,123': 'of 4,123',
    'Organic traffic (รวม 15 ลูกค้า)': 'Organic traffic (15 clients)',
    '90 วันย้อนหลัง': 'Last 90 days',
    '📋 พนักงานทำงานวันนี้': '📋 Today\'s team activity',
    'รายงาน real-time · sync กับ Staff Playbook': 'Real-time reporting · synced with Staff Playbook',
    'ดูทั้งหมด →': 'View all →',
    'เมล็ดกาแฟ': 'Coffee beans',
    'ตก #3 → #9': 'Dropped #3 → #9',
    '12 นาทีที่แล้ว · task สร้าง + LINE alert': '12 min ago · task created + LINE alert',
    'Monthly report ส่งสำเร็จ': 'Monthly report sent',
    '— Travel Roam · 24 หน้า + live link': '— Travel Roam · 24 pages + live link',
    '1 ชม.ที่แล้ว · ลูกค้าเปิด 2 ครั้ง': '1 hr ago · client opened 2x',
    '— HealthWise ติด ChatGPT:': '— HealthWise cited in ChatGPT:',
    '"คลินิกกายภาพ สีลม"': '"Physical therapy clinic Silom"',
    '3 ชม.ที่แล้ว · sentiment positive': '3 hr ago · sentiment positive',
    '— FashionBrand INP 580ms (เกิน threshold)': '— FashionBrand INP 580ms (over threshold)',
    '5 ชม.ที่แล้ว · dev ticket #2401 ใน ClickUp': '5 hr ago · dev ticket #2401 in ClickUp',
    '— Bangkok Spa: "วิธีดูแลผิวหน้าสปาที่บ้าน"': '— Bangkok Spa: "At-home facial care guide"',
    'เมื่อวาน · published + submit GSC': 'Yesterday · published + submitted to GSC',
    'ทุกสถานะ': 'All statuses',
    'ทุก AM': 'All AMs',
    '15 ลูกค้า · 23 active projects': '15 clients · 23 active projects',
    '30 วัน': '30 days',
    '3 หน้า': '3 pages',
    '⚡ Auto-fix ด้วย AI →': '⚡ AI Auto-fix →',
    '7 ลิงก์': '7 links',
    'ตามรอย citations ใน ChatGPT, Claude, Gemini, Perplexity, AI Overview':
      'Track citations in ChatGPT, Claude, Gemini, Perplexity, AI Overview',
    '7 วัน': '7 days',
    'update last 14 นาทีก่อน': 'updated 14 min ago',
    '+ เพิ่ม prompt': '+ Add prompt',
    '✕ ขาด author entity': '✕ missing author entity',
    'cited page มี Person schema + LinkedIn sameAs': 'cited page has Person schema + LinkedIn sameAs',
    // ─── tools.html ───
    'วิเคราะห์ on-page SEO ของหน้าเว็บใดๆ — ตรวจ title, meta, heading, alt, schema, canonical และอีกหลายอย่าง':
      'Analyze on-page SEO of any page — title, meta, headings, alt, schema, canonical and more',
    'URL ของหน้าที่ต้องการตรวจ': 'URL of the page to audit',
    'เริ่ม Audit': 'Start Audit',
    'เคล็ดลับ:': 'Tip:',
    'ถ้า fetch URL ไม่สำเร็จเพราะ CORS ให้กด': 'If URL fetch fails due to CORS, click',
    'วาง HTML เอง': 'Paste HTML manually',
    'ด้านล่าง — คัดลอกซอร์ส (View Source) จากหน้านั้นมาวางได้เลย':
      'below — copy View Source from that page and paste it here',
    'วาง HTML เอง (ใช้เมื่อ fetch ไม่ผ่าน)': 'Paste HTML manually (when fetch fails)',
    'วิเคราะห์ HTML ที่วาง': 'Analyze pasted HTML',
    'พร้อมตรวจสอบเว็บของคุณ': 'Ready to audit your site',
    'ใส่ URL ทางซ้าย เพื่อเริ่ม audit แบบครบจบ': 'Enter URL on the left to start a full audit',
    'กรอก seed keyword → ได้ keyword variations, search intent, topic clusters และ content brief':
      'Enter a seed keyword → get keyword variations, search intent, topic clusters, and a content brief',
    'Seed Keyword หรือหัวข้อ': 'Seed Keyword or topic',
    'ภาษา': 'Language',
    'ไทย': 'Thai',
    'ประเภทธุรกิจ': 'Business type',
    'สร้างแผน Keyword': 'Generate keyword plan',
    'เครื่องมือนี้สร้าง keyword variations ด้วยวิธี':
      'This tool generates keyword variations heuristically',
    '— ไม่ใช่ตัวเลข search volume จริง ควรนำไป cross-check กับ Google Search Console / Ahrefs / Semrush ก่อนใช้':
      '— not real search volume; cross-check with Google Search Console / Ahrefs / Semrush before using',
    'เริ่มต้นค้นคว้า Keyword': 'Start keyword research',
    'กรอก seed keyword ทางซ้าย เพื่อสร้าง content plan ครบชุด':
      'Enter a seed keyword on the left to build a full content plan',
    'สร้าง JSON-LD structured data ที่ Google เข้าใจ — copy แล้วเอาไปวางใน':
      'Generate JSON-LD structured data Google understands — copy and paste into',
    'ได้เลย': 'right away',
    'ประเภท Schema': 'Schema type',
    'Article (บทความ / ข่าว)': 'Article (article / news)',
    'Product (สินค้า + ราคา)': 'Product (item + price)',
    'FAQPage (คำถามที่พบบ่อย)': 'FAQPage (frequently asked questions)',
    'LocalBusiness (ร้าน/บริษัทท้องถิ่น)': 'LocalBusiness (local shop/company)',
    'Organization (องค์กร)': 'Organization (company)',
    'BreadcrumbList (เส้นทาง)': 'BreadcrumbList (navigation path)',
    'HowTo (วิธีทำ)': 'HowTo (how-to guide)',
    'Review (รีวิว)': 'Review (review)',
    'Event (อีเวนต์)': 'Event (event)',
    'VideoObject (วิดีโอ)': 'VideoObject (video)',
    'ตรวจสอบกับ Google Rich Results': 'Validate with Google Rich Results',
    'ใส่ใน': 'Place inside',
    'ภายใน': 'within',
    'ตรวจสอบกับ': 'Validate with',
    'ทุกครั้งก่อน deploy': 'every time before deploy',
    'ใช้ Schema กับเนื้อหาที่มีอยู่จริงในหน้าเท่านั้น — ห้ามสร้างขึ้นมาแบบ misleading':
      'Only use Schema for content that actually appears on the page — never fabricate misleading data',
    'สร้างหน้าเว็บแบบ scale จาก template + data — เหมาะกับ directory pages, comparison pages, location pages':
      'Generate pages at scale from template + data — for directory, comparison, and location pages',
    '1. ข้อมูล (CSV หรือ JSON)': '1. Data (CSV or JSON)',
    'อัปโหลด CSV': 'Upload CSV',
    'ใส่ข้อมูลตัวอย่าง': 'Load sample data',
    '(ใช้': '(use',
    'สร้างหน้าทั้งหมด': 'Generate all pages',
    'เริ่มสร้างหน้าเว็บแบบ scale': 'Start building pages at scale',
    'ใส่ข้อมูลและ template แล้วกด "สร้างหน้าทั้งหมด"': 'Enter data + template and click "Generate all pages"',
    'SEO Toolkit · สร้างขึ้นเพื่อทำ SEO ครบเซ็ต': 'SEO Toolkit · built for end-to-end SEO',
    'ทุก feature ทำงาน 100% ในเบราว์เซอร์ ไม่มีการเก็บข้อมูล':
      'Every feature runs 100% in the browser — no data is stored',
    // ─── playbook.html ───
    'SEO Task Playbook · งานประจำวันเพิ่ม SEO Score': 'SEO Task Playbook · Daily tasks to lift your SEO Score',
    'งานประจำวันที่ทำให้ score เพิ่มขึ้น': 'Daily tasks that move the score',
    'รวมงาน SEO ที่ทีมต้องทำ': 'All the SEO tasks your team needs to run',
    'เพื่อเพิ่ม score': 'to lift the score',
    '5 งาน daily · 11 งาน weekly · 14 งาน monthly · แยกตาม role · มี time estimate + impact + step-by-step ครบ — ทำตามได้เลย':
      '5 daily · 11 weekly · 14 monthly tasks · split by role · with time estimate + impact + step-by-step — ready to follow',
    '⚡ Daily (~30 นาที)': '⚡ Daily (~30 min)',
    '📅 Weekly (~3 ชม.)': '📅 Weekly (~3 hr)',
    '📆 Monthly (~1 วัน)': '📆 Monthly (~1 day)',
    '📊 ระดับ Impact': '📊 Impact levels',
    'เพิ่ม score 5-15 จุดใน 30 วัน': 'Lifts score 5–15 points in 30 days',
    'เพิ่ม score 2-5 จุดใน 30 วัน': 'Lifts score 2–5 points in 30 days',
    'เพิ่ม score 0-2 จุด · maintenance': 'Lifts score 0–2 points · maintenance',
    '🎯 ส่งผลต่อมิติ Score': '🎯 Affects Score dimensions',
    'งานประจำวัน · ทำตอนเช้า ~30 นาที': 'Daily tasks · run in the morning ~30 min',
    '1. เช็ค ranking ที่เปลี่ยนแปลง': '1. Review ranking changes',
    '⏱ 10 นาที': '⏱ 10 min',
    'ทำไม:': 'Why:',
    'ปัญหา ranking ตกที่เจอเร็วใน 24 ชม. แก้ได้ก่อนลามไปไกล':
      'Ranking drops caught within 24 h can be fixed before they spread',
    'เปิด Dashboard → ตาราง "Top moving keywords"': 'Open Dashboard → "Top moving keywords" table',
    '⏱ 5 นาที': '⏱ 5 min',
    'เป้าหมาย:': 'Goal:',
    '3. เช็ค comments/approvals จากลูกค้า': '3. Check client comments/approvals',
    '5. เช็ค AI Visibility ลูกค้าเด่นๆ': '5. Check AI Visibility for top clients',
    'AI citations เป็น': 'AI citations are a',
    'ranking factor ใหม่ที่คู่แข่งยังไม่ทำ': 'new ranking factor competitors haven\'t touched yet',
    '· ปรับเล็กน้อยได้ผลเยอะ': '· small changes, big results',
    'เริ่มใช้ Playbook นี้': 'Start using this Playbook',
    // ─── proposal.html ───
    'SearchFit Pro — SEO Platform Proposal สำหรับ Thai Media Agency':
      'SearchFit Pro — SEO Platform Proposal for Thai Media Agencies',
    'ทำไมตอนนี้': 'Why now',
    'จุดต่าง': 'Differentiation',
    'ฟีเจอร์': 'Features',
    'ดู Prototype': 'View Prototype',
    'Proposal v1.0 · ออกแบบสำหรับ Media Agency ไทย': 'Proposal v1.0 · designed for Thai media agencies',
    'Webapp ทำ SEO': 'SEO Webapp',
    'ที่เกิดมาเพื่อ': 'built for',
    'Agency ไทย': 'Thai agencies',
    'ครบทุกเครื่องมือที่ Ahrefs/Semrush มี': 'Every tool Ahrefs/Semrush has,',
    'ในราคาคิดเป็นบาท ไม่กลัวคอร์สหมดอายุ': 'priced in baht — no expiring credits',
    'ดู 5 จุดต่าง': 'See the 5 differentiators',
    'เปิด Prototype': 'Open Prototype',
    'ลองใช้เครื่องมือ MVP': 'Try the MVP tools',
    'queries มี AI Overview · top10 ไม่พอแล้ว': 'queries show AI Overview · top10 isn\'t enough anymore',
    'AI-referred traffic เพิ่ม YoY (2025)': 'AI-referred traffic YoY growth (2025)',
    'market share ของ Google.co.th': 'Google.co.th market share',
    'platform global ที่ support ภาษาไทยจริงจัง': 'global platforms with serious Thai support',
    'เกิดดีลตลาด': 'Three market trends',
    '3 ทาง': '3 directions',
    'โอกาสที่หน้าต่างจะปิด — ใครเข้าก่อนได้': 'A closing window — first movers win',
    'SEO เดิม optimize top-10 ไม่พอ': 'Old SEO can\'t just optimize top-10 anymore',
    'ต้อง optimize "ติดในคำตอบของ AI" — ทุก agency กำลังหา tool ที่ช่วย':
      'must optimize "being inside AI answers" — every agency is hunting for tools',
    'ใช้ไม่ได้เต็มที่': 'can\'t use them fully',
    'ตลาดยังว่าง': 'Market is still open',
    'มีโอกาสจับลูกค้าด้วย flat THB pricing': 'opportunity to win clients with flat THB pricing',
    'การ research จากเอกสาร': 'Based on research from',
    '30+ ฉบับ': '30+ documents',
    'รวมถึง Ahrefs, Semrush, Moz, Surfer, SE Ranking, AgencyAnalytics — ดูราคา/ฟีเจอร์ทั้งหมด':
      'including Ahrefs, Semrush, Moz, Surfer, SE Ranking, AgencyAnalytics — full pricing/features analyzed',
    'เกิดใหม่ปี 2025-2026': 'launched 2025–2026',
    '— Profound, Otterly, Bluefish, Gauge — ยังไม่มี player ไทย':
      '— Profound, Otterly, Bluefish, Gauge — no Thai player yet',
    'การเข้าตลาด': 'Go-to-market',
    'Agency มีลูกค้าจริง → เริ่มใช้กับตัวเองก่อน → ขยายขายต่อให้ agency อื่นเป็น':
      'Agency has real clients → use it on themselves first → expand by reselling to other agencies',
    '5 เรื่องที่': '5 things',
    'เราเด่นกว่า': 'where we win',
    'ลอกตามได้ยาก เพราะใช้ข้อมูล + เครือข่ายที่ player ระดับโลกไม่มี':
      'Hard to copy — relies on data + networks global players don\'t have',
    'Thai-language SEO ของจริง': 'Real Thai-language SEO',
    'Native tokenization ด้วย PyThaiNLP — เข้าใจคำไทยไม่มีช่องว่าง, transliteration "facebook = เฟซบุ๊ก = เฟสบุ๊ค", track':
      'Native tokenization with PyThaiNLP — understands word-break-less Thai, transliteration "facebook = เฟซบุ๊ก = เฟสบุ๊ค", tracks',
    'เป็น brand mention source — ของที่ Ahrefs ไม่มี': 'as a brand-mention source — something Ahrefs lacks',
    'ไม่มีใครทำ — ลอกยากเพราะต้องมีทีม TH': 'Nobody does this — hard to copy without a Thai team',
    'ติดตามว่าแบรนด์/หน้าเว็บลูกค้าถูก': 'Track whether your brand/pages get',
    'quote ใน ChatGPT / Claude / Gemini / Perplexity / AI Overview':
      'quoted by ChatGPT / Claude / Gemini / Perplexity / AI Overview',
    'หมวดใหม่ปี 2026 — รีบเข้า': 'New category for 2026 — move fast',
    'แต่': 'but',
    'ฝังในระบบ ไม่มีระบบ credit': 'built into the platform — no credit system',
    '— เหมาะกับร้านอาหาร, คลินิก, แฟรนไชส์ที่กระจายหลายสาขา + GBP optimization workflow + AI Overview-for-local tracking':
      '— ideal for restaurants, clinics, multi-location franchises + GBP optimization workflow + local AI Overview tracking',
    'Local Falcon เด่นแต่แยกตัว — รวมในนี้ดีกว่า': 'Local Falcon is great but siloed — better bundled here',
    // ─── preview.html ───
    'SearchFit Pro — Live Preview · ดูทุกอย่างที่เว็บแอปทำได้':
      'SearchFit Pro — Live Preview · See everything the platform can do',
    'Live Preview · เลื่อนลงเพื่อดู demo ทำงานจริง': 'Live Preview · scroll for working demos',
    'ดูทุกอย่าง': 'See everything',
    'ที่เว็บแอป SEO ของเรา': 'our SEO webapp',
    'จะทำได้': 'can do',
    'หน้าเดียวจบ — ลอง': 'One page — try',
    'ใส่ URL จริง': 'a real URL',
    'เลือก schema': 'pick a schema',
    'ใส่ keyword ไทย': 'enter a Thai keyword',
    'แล้วดูผลทันที': 'and see results live',
    'พร้อม screen ของ admin / client portal / automation builder ครบ':
      'plus admin / client portal / automation builder screens',
    'ลอง Live Demo ทันที': 'Try the live demo',
    'ดู feature ก่อน': 'See features first',
    'หน้าจอ admin/client': 'admin/client screens',
    'Live demos กด-ทำงานได้': 'Live demos · click to run',
    'ฟีเจอร์ทั้งหมด': 'All features',
    'จุดต่างจากคู่แข่ง': 'How we differ',
    '01 · เว็บแอปทำอะไรได้บ้าง': '01 · What the webapp can do',
    'ในตาเดียว': 'at a glance',
    '12 กลุ่มฟีเจอร์ — แต่ละกลุ่มมี mini-demo ด้านล่าง': '12 feature groups — each with a mini-demo below',
    'วินิจฉัยเว็บ 100+ จุด · SearchFit Score 0-100 · auto re-scan':
      '100+ checks · SearchFit Score 0–100 · auto re-scan',
    '3×3 ถึง 21×21 grid · GBP audit · review velocity': '3×3 to 21×21 grid · GBP audit · review velocity',
    'JSON-LD 10 ประเภท · entity-depth · AI-extractability score':
      '10 JSON-LD types · entity-depth · AI-extractability score',
    'CSV → template → หน้าเว็บจำนวนมาก · sitemap.xml export':
      'CSV → template → bulk pages · sitemap.xml export',
    'If-this-then-that สำหรับ SEO · 20+ recipes · LINE/Slack alerts':
      'If-this-then-that for SEO · 20+ recipes · LINE/Slack alerts',
    'White-label · custom domain · ลูกค้าเห็นแบรนด์ agency': 'White-label · custom domain · clients see your agency brand',
    'วินิจฉัยหน้าเว็บใดๆ ใน 10 วินาที — ตรวจ 16 มิติแล้วได้คะแนน + คำแนะนำชี้จุดแก้':
      'Audit any page in 10 seconds — 16 dimensions, score + fix recommendations',
    '6 มิติคะแนน (On-Page · Tech · CWV · Content · Off-Page · AI)':
      '6 score dimensions (On-Page · Tech · CWV · Content · Off-Page · AI)',
    '✓ 12 ผ่าน · ⚠ 3 เตือน · ✕ 1 fail': '✓ 12 pass · ⚠ 3 warn · ✕ 1 fail',
    'Meta description · ขาด': 'Meta description · missing',
    '💡 เพิ่ม 140-160 chars พร้อม keyword หลัก + CTA ·': '💡 Add 140–160 chars with primary keyword + CTA ·',
    '⚡ AI generate ให้': '⚡ AI generate it',
    'H1 · 1 ตัว': 'H1 · 1 found',
    'Schema markup · ขาด': 'Schema markup · missing',
    '💡 ใส่ Organization + Article schema ·': '💡 Add Organization + Article schema ·',
    '💡 ขาด og:image, og:description, og:url': '💡 Missing og:image, og:description, og:url',
    'รองรับ mobile · ระบุ canonical · lang="en"': 'Mobile-ready · canonical set · lang="en"',
    'เปิดเครื่องมือเต็ม (16 checks)': 'Open full tool (16 checks)',
    '⚡ สร้าง task แก้ทั้งหมด': '⚡ Create tasks to fix all',
    'ใส่หัวข้อ → ขยายเป็น 50+ keyword variations + แยก search intent + สร้าง content brief':
      'Enter a topic → expand to 50+ keyword variations + split by search intent + build a content brief',
    '📋 Content Brief สำหรับ pillar article': '📋 Content Brief for pillar article',
    'คู่มือฉบับสมบูรณ์: ทำ SEO (ฉบับปี 2026)': 'The complete guide: SEO (2026 edition)',
    '1,800-2,500 คำ': '1,800–2,500 words',
    '5-7 H2 จาก informational keywords': '5–7 H2s from informational keywords',
    '3-5 ไปยัง commercial keywords': '3–5 internal links to commercial keywords',
    'ตามรอยว่าแบรนด์ลูกค้าโดน': 'Track whether your client brand gets',
    'cite ใน AI engines': 'cited by AI engines',
    'หรือไม่ — ทำได้แต่ tool ของไทยตอนนี้': '— something no Thai tool does today',
    // ─── help.html ───
    'คู่มือใช้งาน · SearchFit Pro Help Center': 'User Guide · SearchFit Pro Help Center',
    '🎯 เริ่มต้น': '🎯 Getting started',
    '🚀 วิธีใช้งาน': '🚀 How to use',
    'เข้าใจตัวชี้วัด SEO, AI Visibility, Schema, Local Grid, และทุกค่าในระบบ — สำหรับลูกค้าที่ไม่จำเป็นต้องเป็น SEO expert':
      'Understand SEO metrics, AI Visibility, Schema, Local Grid, and every score — written for clients, no SEO expertise required',
    'SEO Score คืออะไร?': 'What is the SEO Score?',
    'ทุกอย่างที่คุณต้องรู้ก่อนเริ่ม': 'Everything you need to know before you start',
    '🚀 ระบบนี้คืออะไร?': '🚀 What is this system?',
    'SearchFit Pro คือเครื่องมือ SEO ที่': 'SearchFit Pro is the SEO platform your',
    'media agency ของคุณ': 'media agency',
    '🔐 บัญชีและการ login': '🔐 Account & login',
    'Agency จะส่ง': 'Your agency sends you',
    'email + ลิงก์ตั้งรหัส': 'an email + a password-set link',
    'ให้คุณ ใช้ login ได้ทันที': 'so you can sign in right away',
    'มี 2 ระดับสิทธิ์สำหรับลูกค้า:': 'There are 2 client roles:',
    'ดูได้อย่างเดียว — comment, download report': 'Read-only — comment, download report',
    'approve content, ขอแก้, อัปโหลด brand asset': 'approve content, request edits, upload brand assets',
    '👁 คุณเห็นอะไรในระบบ?': '👁 What do you see?',
    'คุณจะเห็น': 'You see',
    'เฉพาะข้อมูลของแบรนด์ตัวเอง': 'only your own brand\'s data',
    '— ไม่เห็นลูกค้าคนอื่นของ agency': '— never other clients of the agency',
    'หน้าหลักของคุณ:': 'Your main views:',
    '✅ Approvals — เนื้อหารออนุมัติ': '✅ Approvals — content awaiting review',
    '📄 Reports — รายงานเดือนสะสม': '📄 Reports — monthly archives',
    '🤖 AI Visibility — แบรนด์ปรากฏใน AI หรือไม่': '🤖 AI Visibility — is your brand showing up in AI',
    '💬 ติดต่อทีม': '💬 Contact the team',
    'ในหน้า My Dashboard จะเห็น': 'On My Dashboard you\'ll see the',
    'ที่ดูแลคุณอยู่ คลิก "📅 นัดประชุม" เพื่อจอง slot ได้ หรือ comment ใน thread รายงาน — เร็วและทุกอย่างถูกบันทึก':
      'AM looking after you — click "📅 Schedule" to book a slot, or comment in the report thread — fast and fully logged',
    'SearchFit Score · ตัวชี้วัดหลัก': 'SearchFit Score · the headline metric',
    'คะแนนรวม 0-100 ที่บอกสุขภาพ SEO ของเว็บคุณ': 'A 0–100 score showing your site\'s SEO health',
    'คะแนนรวมจาก': 'Aggregated from',
    '6 มิติ': '6 dimensions',
    '— บอกสุขภาพ SEO ในตัวเลขเดียวที่เข้าใจง่าย คล้ายกับเครดิตสกอร์การเงิน':
      '— SEO health in a single, easy-to-read number, like a credit score',
    'เกณฑ์': 'Thresholds',
    'ดีมาก / Excellent': 'Excellent',
    'ปานกลาง / Good': 'Good',
    'ต้องแก้ / Poor': 'Poor',
    'ตัวอย่าง': 'Example',
    'Coffee Co. มี': 'Coffee Co. has',
    '= ดีมาก': '= Excellent',
    'FashionBrand มี': 'FashionBrand has',
    '= ต้องเร่งแก้ปัญหา CWV': '= must fix CWV urgently',
    '6 มิติของคะแนน': 'The 6 dimensions',
    'ทำไมสำคัญ:': 'Why it matters:',
    'เป็นพื้นฐาน Google มอง ถ้า title/meta ดี = คะแนน 80+ ขึ้นไป':
      'Foundational for Google — solid title/meta = 80+',
    'เว็บไซต์ Google เข้าถึงได้ดีหรือไม่ — crawlability, indexation, sitemap, robots.txt, HTTPS, hreflang, lang attribute':
      'Can Google reach your site — crawlability, indexation, sitemap, robots.txt, HTTPS, hreflang, lang',
    'ถ้า Google เข้าไม่ได้ = ไม่ติดอันดับเลย แม้เนื้อหาดีแค่ไหน':
      'If Google can\'t reach it = no rankings, no matter how good the content',
    'ความเร็วเว็บ — Core Web Vitals: INP, LCP, CLS · ดูเพิ่ม': 'Site speed — Core Web Vitals: INP, LCP, CLS · more below',
  };
  // ────────────────────────────────────────────────────────────────
  const PLACEHOLDER_FALLBACKS = TH_TO_EN; // reuse map for inputs
  const SKIP_TAGS = new Set(['SCRIPT','STYLE','NOSCRIPT','CODE','PRE','TEXTAREA','SVG']);

  function getLang(){
    // 1) Explicit ?lang=th|en wins (so hreflang URLs from sitemap/Google work)
    try {
      const url = new URL(window.location.href);
      const q = url.searchParams.get('lang');
      if (q === 'th' || q === 'en') {
        try { localStorage.setItem(KEY, q); } catch(e){}
        return q;
      }
    } catch(e){}
    // 2) Persisted preference
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === 'th' || stored === 'en') return stored;
    } catch(e){}
    // 3) Browser language hint (Thai users get Thai)
    try {
      const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (nav.startsWith('th')) return 'th';
    } catch(e){}
    return 'en';
  }

  function setLang(lang){
    try { localStorage.setItem(KEY, lang); } catch(e){}
    document.documentElement.setAttribute('lang', lang === 'th' ? 'th' : 'en');
    document.documentElement.setAttribute('data-lang', lang);
    // Keep og:locale in sync for crawlers re-fetching SPA-style
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'th' ? 'th_TH' : 'en_US');
    apply(lang);
    updateToggleUI(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang }}));
  }

  function originalFor(el, attr){
    // Cache the original text content the first time we touch the element
    const key = '__sfp_orig_' + attr;
    if (!(key in el.dataset)) {
      el.dataset[key] = (attr === 'html') ? el.innerHTML : el.textContent;
    }
    return el.dataset[key];
  }

  function apply(lang){
    // 1) Elements with explicit data-en / data-th attributes
    document.querySelectorAll('[data-en],[data-th]').forEach(el => {
      const en = el.getAttribute('data-en');
      const th = el.getAttribute('data-th');
      if (lang === 'en' && en != null) el.textContent = en;
      else if (lang === 'th' && th != null) el.textContent = th;
    });
    document.querySelectorAll('[data-en-html],[data-th-html]').forEach(el => {
      const en = el.getAttribute('data-en-html');
      const th = el.getAttribute('data-th-html');
      if (lang === 'en' && en != null) el.innerHTML = en;
      else if (lang === 'th' && th != null) el.innerHTML = th;
    });
    // 2) Placeholders
    document.querySelectorAll('[data-placeholder-en],[data-placeholder-th]').forEach(el => {
      const en = el.getAttribute('data-placeholder-en');
      const th = el.getAttribute('data-placeholder-th');
      if (lang === 'en' && en != null) el.setAttribute('placeholder', en);
      else if (lang === 'th' && th != null) el.setAttribute('placeholder', th);
    });
    // 3) Dictionary fallback — walks text nodes and replaces full-trim matches
    walkAndTranslate(document.body, lang);
  }

  function walkAndTranslate(root, lang){
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-i18n-skip]')) return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-en],[data-th],[data-en-html],[data-th-html]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let n; while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(node => {
      const orig = (node.__sfp_orig_text != null) ? node.__sfp_orig_text : (node.__sfp_orig_text = node.nodeValue);
      if (lang === 'th') { node.nodeValue = orig; return; }
      // EN: try dictionary lookup on the trimmed text
      const trimmed = orig.trim();
      const leading = orig.match(/^\s*/)[0];
      const trailing = orig.match(/\s*$/)[0];
      if (TH_TO_EN[trimmed]) {
        node.nodeValue = leading + TH_TO_EN[trimmed] + trailing;
      } else {
        node.nodeValue = orig; // unchanged
      }
    });
    // Placeholders fallback
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (el.dataset.placeholderEn || el.dataset.placeholderTh) return;
      const k = '__sfp_orig_placeholder';
      if (!(k in el.dataset)) el.dataset[k] = el.getAttribute('placeholder');
      const origPh = el.dataset[k];
      if (lang === 'th') { el.setAttribute('placeholder', origPh); return; }
      const trimmed = origPh.trim();
      if (PLACEHOLDER_FALLBACKS[trimmed]) el.setAttribute('placeholder', PLACEHOLDER_FALLBACKS[trimmed]);
      else el.setAttribute('placeholder', origPh);
    });
  }

  // ────────────────────────────────────────────────────────────────
  // Toggle button (fixed top-right, can be repositioned via .sfp-lang-toggle override)
  // ────────────────────────────────────────────────────────────────
  let toggleEl = null;
  function injectStyles(){
    if (document.getElementById('sfp-lang-toggle-style')) return;
    const s = document.createElement('style');
    s.id = 'sfp-lang-toggle-style';
    s.textContent = `
      .sfp-lang-toggle{position:fixed;top:14px;right:14px;z-index:9999;display:inline-flex;
        align-items:center;background:rgba(15,23,42,.75);backdrop-filter:blur(12px);
        border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:4px;gap:2px;
        font-family:'Plus Jakarta Sans','Inter',ui-sans-serif,sans-serif;font-weight:700;
        font-size:11px;letter-spacing:.04em;box-shadow:0 8px 24px -8px rgba(0,0,0,.4)}
      .sfp-lang-toggle button{background:transparent;color:#cbd5e1;border:0;padding:6px 12px;
        border-radius:999px;cursor:pointer;line-height:1;transition:.15s}
      .sfp-lang-toggle button:hover{color:#fff}
      .sfp-lang-toggle button[aria-pressed="true"]{background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff}
      @media (max-width:640px){.sfp-lang-toggle{top:8px;right:8px;font-size:10px}}
    `;
    document.head.appendChild(s);
  }

  function buildToggle(){
    injectStyles();
    const wrap = document.createElement('div');
    wrap.className = 'sfp-lang-toggle';
    wrap.setAttribute('data-i18n-skip','');
    wrap.innerHTML = `
      <button type="button" data-lang="en" aria-label="English">EN</button>
      <button type="button" data-lang="th" aria-label="ภาษาไทย">TH</button>
    `;
    wrap.addEventListener('click', e => {
      const b = e.target.closest('button[data-lang]');
      if (!b) return;
      setLang(b.getAttribute('data-lang'));
    });
    document.body.appendChild(wrap);
    toggleEl = wrap;
  }

  function updateToggleUI(lang){
    if (!toggleEl) return;
    toggleEl.querySelectorAll('button').forEach(b => {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function init(){
    buildToggle();
    setLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  window.SFPi18n = { setLang, getLang, apply, addDict(more){ Object.assign(TH_TO_EN, more); apply(getLang()); } };
})();
