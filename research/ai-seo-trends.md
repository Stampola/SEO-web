# SEO in 2026: Deep Research Brief for Post-AI-Search Platform

*Compiled May 2026 — for platform product strategy*

The center of gravity in SEO has shifted from "rank on 10 blue links" to "get cited by machines that answer for the user." Below: 10 areas, each with state, recent shifts, tooling needs, and platform feature ideas.

---

## 1. AI Overviews / SGE / Google AI Mode

**Current state.** AI Overviews now appear on ~48% of queries; only 38% of AIO citations come from top-10 organic results (down from 76%), so classic rank no longer guarantees citation. Google AI Mode launched globally May 2025, hit 200+ countries / 35 languages, and uses a "query fan-out" technique issuing up to 16 sub-queries — AI Mode and AIO overlap on cited URLs only 13.7% of the time.

**What changed.** Gemini 3 upgrade (Jan 2026) made AIO + AI Mode handoff seamless. Citation signals that matter: semantic completeness, multi-modal content (156% higher selection), structured data (73% boost), entity density (15+ entities = 4.8x selection), freshness (under 3 months = 3x more likely cited).

**Tooling needed.** AIO/AI Mode citation tracking per query, semantic-completeness scoring, entity density audits, freshness monitors.
**Platform features.** "AIO Citation Tracker" with per-keyword citation status; "Extractability Score" rating paragraphs for AI quote-readiness (2–4 sentence chunks); entity coverage heatmap; AI Mode fan-out simulator showing which sub-queries your page could answer.

Sources: [ALM Corp](https://almcorp.com/blog/google-ai-overview-citations-drop-top-ranking-pages-2026/), [Averi](https://www.averi.ai/blog/google-ai-overviews-optimization-how-to-get-featured-in-2026), [Wellows](https://wellows.com/blog/google-ai-overviews-ranking-factors/), [Stackmatix](https://www.stackmatix.com/blog/google-ai-mode-vs-ai-overview).

---

## 2. GEO (Generative Engine Optimization)

**Current state.** AI-referred sessions grew 527% YoY in early 2025. ChatGPT 800M WAU, Gemini 750M MAU, Perplexity 45M, Claude 30M. GEO = engineering content to be cited by these engines, distinct from ranking.

**What changed.** GEO matured into a tooling category in 2025–2026. Frase, Geoptie, Zerply, Semrush Enterprise AIO, and Bluefish all ship multi-engine visibility tracking (ChatGPT, Claude, Gemini, Perplexity, AIO, Copilot, Grok, DeepSeek).

**Tooling needed.** Prompt-set monitoring (track a basket of brand/topic prompts across engines), citation/mention extraction, sentiment + favorability scoring, competitive share-of-voice, model-version drift detection.
**Platform features.** "Prompt Portfolio" — user uploads 50–500 prompts, platform queries all major engines on schedule; share-of-voice dashboard vs competitor brands; "Why am I not cited?" diff explainer (what cited pages have that yours doesn't); sentiment alerts when AI describes brand negatively.

Sources: [SearchEngineLand](https://searchengineland.com/what-is-generative-engine-optimization-geo-444418), [Geoptie](https://geoptie.com/blog/best-geo-tools), [Bluefish](https://www.bluefishai.com/blog/the-10-best-geo-platforms), [Frase](https://www.frase.io/blog/what-is-generative-engine-optimization-geo).

---

## 3. AEO (Answer Engine Optimization)

**Current state.** Zero-click searches ~60% of Google queries; Gartner projects classic search volume falling 25% by end of 2026. Featured snippets remain the gateway — they feed voice assistants and seed AIO answers.

**What changed.** AEO converged with GEO; the same Q&A-formatted, 40–60 word answers under H2/H3 question headings now power both. FAQ-rich-result eligibility narrowed (Google restricted FAQ rich results in 2023 but the schema still signals to AI).

**Tooling needed.** PAA mining, snippet-eligible content detector, voice-answer simulator, question-cluster mapping.
**Platform features.** "Question Surface" tool — scrapes PAA + Reddit/Quora/Pantip for real questions per topic; "Snippet Format Linter" that flags answers >60 words or buried in prose; voice readback test (TTS preview of how Alexa/Google reads your answer); H2-question coverage report.

Sources: [Surfer SEO](https://surferseo.com/blog/answer-engine-optimization/), [Similarweb](https://www.similarweb.com/blog/marketing/geo/answer-engine-optimization/), [CXL](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/).

---

## 4. E-E-A-T in 2026

**Current state.** 96% of AIO citations come from sources with strong E-E-A-T signals. Google added a dedicated **Authors** section to Search Central documentation on Feb 1, 2026 — authorship transparency is now an explicit quality consideration.

**What changed.** AI systems run "entity resolution" — linking a byline to LinkedIn, conference appearances, papers, sameAs identifiers — to verify a real person stands behind content. Sites that added structured author pages with verifiable credentials saw measurable ranking lifts within weeks of the Feb 2026 update.

**Tooling needed.** Author entity audits, sameAs graph builders, off-site mention monitoring (the "external recognition" axis), credential verification.
**Platform features.** "Author Entity Graph" — visualizes each author's sameAs links, citations, press; auto-generates Person + ProfilePage schema; off-site authority monitor (industry mentions, podcast appearances, citations); "missing credentials" linter on author pages.

Sources: [LeadGen Economy](https://www.leadgen-economy.com/blog/eeat-author-entity-verification-ai-overviews/), [Digital Applied](https://www.digitalapplied.com/blog/e-e-a-t-march-2026-google-rewards-experience-content-guide), [Keywords Everywhere](https://keywordseverywhere.com/blog/google-e-e-a-t-guidelines-an-overview/).

---

## 5. Helpful Content / HCU Aftermath

**Current state.** March 2026 core update was the largest quality update since HCU itself. Affiliate roundup sites averaged -54%; "best X for Y" templated pages effectively dead without hands-on proof. Sites with proprietary data, case studies, first-party experience gained +15–25% (some topical authority sites +400%).

**What changed.** Templated AI-output sites dropped 60–90% near-overnight. **Programmatic SEO is NOT dead** — it survives if each page answers a distinct query backed by unique structured data (directory verified listings, live pricing comparison, real travel inventory). Google penalizes low value, not automation.

**Tooling needed.** Page-level value-add detection, duplicate intent detection across pSEO pages, originality scoring (vs the corpus), AI-content fingerprinting.
**Platform features.** "pSEO Auditor" — flags template pages with <15% unique content vs siblings; intent-overlap detector (which of your pages compete with each other); first-party data inventory checker (does each page have a stat, quote, image, or dataset unique to it?); HCU-risk score.

Sources: [SerpNap](https://serpnap.com/blog/seo/google-march-2026-core-update), [Amsive](https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/), [Digital Applied](https://www.digitalapplied.com/blog/programmatic-seo-after-march-2026-surviving-scaled-content-ban).

---

## 6. Core Web Vitals 2026

**Current state.** INP replaced FID in March 2024. Thresholds: **INP <200ms good, 200–500ms needs improvement, >500ms poor.** LCP <2.5s, CLS <0.1. 43% of sites fail INP — most-failed CWV in 2026.

**What changed.** Per Google's March 18, 2026 Search Central post, INP moved from supplementary to equal-weight ranking signal alongside LCP and CLS. Still a tiebreaker, not a primary factor — content quality dominates — but sites passing all three see 24% lower bounce.

**Tooling needed.** Real-user INP monitoring (CrUX + RUM), interaction-cost profiling, third-party script auditing.
**Platform features.** Page-by-page INP heatmap from CrUX; "INP debugger" identifying which event handlers exceed 200ms; third-party tag impact estimator; CWV regression alerts tied to deploys.

Sources: [Nitropack](https://nitropack.io/blog/most-important-core-web-vitals-metrics/), [Digital Applied](https://www.digitalapplied.com/blog/core-web-vitals-2026-inp-lcp-cls-optimization-guide), [corewebvitals.io](https://www.corewebvitals.io/core-web-vitals).

---

## 7. Schema Markup Evolution

**Current state.** Schema's role shifted: **from rich-snippet trigger to AI trust/entity-verification signal.** JSON-LD is the universal format all major engines (Google, Bing, Perplexity, ChatGPT) parse. Sites with proper schema get cited in AI responses 3.2x more often.

**What changed.** Entity-depth schema is the 2026 unlock: chain Product → Manufacturer → Organization → Founder → Person with sameAs/knowsAbout linking to authoritative external IDs (Wikidata, LinkedIn, official registries). Five types cover 80% of needs: Organization, Article, FAQPage, BreadcrumbList, Product/Service. Newer: SpeakableSpecification (for voice), Dataset (for original research citation).

**Tooling needed.** Entity-graph schema generator, sameAs verification, AI-citation-impact reporting (not just rich-result eligibility).
**Platform features.** "Entity Graph Builder" — visual editor for chained schema with sameAs autocomplete to Wikidata/LinkedIn; schema validator that scores AI-extractability vs just Google validity; AI-citation correlation report (which schema additions led to more AI citations).

Sources: [Digital Applied](https://www.digitalapplied.com/blog/schema-markup-after-march-2026-structured-data-strategies), [Stackmatix](https://www.stackmatix.com/blog/structured-data-ai-search), [Rankeo](https://rankeo.io/blog/schema-markup-complete-guide).

---

## 8. Local SEO 2026

**Current state.** AI Overviews expanded into local results in 2026, often appearing **above** the Map Pack. Top map-pack result still gets 44–58% of clicks. Pack businesses get 126% more traffic and 93% more actions vs positions 4–10.

**What changed.** Google intensified GBP spam enforcement in 2026 — suspensions for keyword-stuffed business names spiked. Grid-rank tracking (geo-grid coverage), review velocity (consistent cadence > spike), and GBP-as-active-channel (posts, Q&A, products) are now table stakes.

**Tooling needed.** Geo-grid rank tracking, review velocity analytics, GBP audit + spam-risk scoring, GBP post scheduling, AIO-for-local monitoring.
**Platform features.** Grid rank visualizer (e.g., 7x7 or 11x11 around target location); review-velocity normalcy detector (flag bot reviews); GBP-content-calendar; local-AIO citation tracker showing whether your GBP gets quoted in local AI answers.

Sources: [MapRanks](https://www.mapranks.com/2026/01/12/how-google-business-profile-rankings-impact-local-seo-in-2026/), [Sterling Sky](https://www.sterlingsky.ca/google-local-changes/), [ALM Corp](https://almcorp.com/blog/google-maps-seo/).

---

## 9. Crawl & Indexation 2026

**Current state.** Two crawler classes: **training crawlers** (GPTBot, ClaudeBot, Google-Extended) and **retrieval crawlers** (OAI-SearchBot, Claude-User/SearchBot, PerplexityBot, GoogleBot). Most AI crawlers **do not execute JavaScript** — they parse raw HTML, so JS SPAs are invisible to them.

**What changed.** llms.txt: massive dev-community adoption (Anthropic, Mintlify, Cursor, GitBook) but **major LLMs don't fetch it in meaningful volume** as of May 2026; analysis of 94K cited URLs shows no citation uplift. It's a B2A (business-to-agent) play, not SEO. Cloudflare/Fastly/AWS WAF default "AI Scraper" rules can silently block retrieval crawlers — frequent silent culprit.

**Tooling needed.** Bot-by-bot crawl log analytics, WAF/CDN rule auditor, robots.txt validator with AI-bot awareness, SSR/pre-render checker.
**Platform features.** "AI Crawler Access Auditor" — fetches your page as each AI bot, reports what they see; WAF-rule sanity check; robots.txt diff against best-practice configs (allow retrieval, choose on training); JS-rendering parity report (HTML vs rendered DOM); llms.txt generator for the optionality.

Sources: [Tencent Cloud](https://www.tencentcloud.com/techpedia/143900?lang=en), [Discovered Labs](https://discoveredlabs.com/blog/crawlability-indexing-for-ai-search-ensuring-llms-can-access-and-understand-your-content), [Codersera](https://codersera.com/blog/llms-txt-complete-guide-2026/), [AEO Press](https://www.aeo.press/ai/the-state-of-llms-txt-in-2026).

---

## 10. Thai-Market SEO Peculiarities

**Current state.** Google.co.th holds 97%+ search share. Thai consumers triangulate across Google, LINE, TikTok, and ChatGPT pre-purchase. 90%+ mobile, "near me" Thai queries +150% YoY, 35% of Bangkok users use voice search weekly.

**What changed.** Google's MUM now natively handles Thai tokenization (no word spacing) — old hacks like inserting zero-width spaces are obsolete. **Pantip** is a top citation source for tech/consumer research; **Wongnai** drives F&B local relevance; **LINE OA** is the primary post-click engagement channel. .co.th ccTLD gives local relevance lift.

**Tooling needed.** Thai-aware keyword tokenization, Pantip/Wongnai mention tracking, LINE OA integration, bilingual (Thai/English) content gap detection, Thai SERP feature monitoring.
**Platform features.** Thai tokenizer-aware keyword tool (PyThaiNLP-backed); Pantip/Wongnai citation tracker as a local "GEO" surface; LINE-share button + LINE-OA-friendly OG tags; Thai/English hreflang automation; SERP feature monitor for Thai-specific elements (Thai PAA, GBP in Thai, AIO in Thai).

Sources: [Asia Media Studio](https://asiamediastudio.com/insights/seo-in-thailand-the-complete-guide-for-businesses-in-2026), [SEO Bangkok](https://www.seobangkok.com/blog/thai-english-seo-both-languages.html), [Ranktracker](https://www.ranktracker.com/blog/a-complete-guide-for-doing-seo-in-thailand/), [Phoenix Media](https://www.phoenixmedia.co.th/local-seo-in-thailand-strategies-for-thai-businesses/).

---

## Platform Differentiator Synthesis

The post-AI-search SEO platform that wins in 2026 ships **three core surfaces** that legacy tools (Ahrefs/Semrush of 2020) don't natively own:

1. **Multi-engine citation tracking** — prompt portfolios across ChatGPT, Claude, Gemini, Perplexity, AIO, AI Mode, with share-of-voice and sentiment.
2. **Entity & authorship graph tooling** — sameAs builders, off-site recognition tracking, schema chained to Knowledge Graph.
3. **AI-crawler access intelligence** — bot-by-bot rendering parity, WAF rule audits, llms.txt scaffolding.

Plus the Thai-market wedge: Pantip/Wongnai/LINE coverage that no global tool ships. That's defensible territory.
