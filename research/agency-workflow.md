# Agency-Grade SEO Platform: Research Brief

Built for a Thai media agency managing external clients + in-house brands. Focus: what an agency platform must do that a freelancer/in-house tool does not.

---

## 1. Multi-Client / Multi-Tenant Architecture

**How leaders do it.** AgencyAnalytics is the de facto reference: one **Client = one website/brand**, each with its own connected integrations, dashboards, reports, tasks and goals. Clients can be grouped into **Folders** for portfolio views, and staff switch between accounts without re-login ([AgencyAnalytics KB](https://help.agencyanalytics.com/en/articles/10344666-create-and-manage-clients)). Whatagraph uses **Spaces** to group reports, dashboards and integrations, plus **linked templates** so a change rolls out across every client report ([Whatagraph Agency Dashboard](https://whatagraph.com/agency-dashboard)). SE Ranking exposes each managed site as a **Project** under one workspace ([SE Ranking Agencies](https://seranking.com/se-ranking-for-agencies.html)).

**Pitfalls.** Treating "client" and "site" as the same when a client owns multiple brands; not isolating data when an agency leaves; flat permissions that leak Client A reports to Client B's user.

**Recommended.** Three-tier model: **Agency (tenant) > Client (brand/account) > Project (site/property)**. Folders or tags for portfolio grouping. Hard row-level isolation in the DB, every query scoped by `agency_id` + `client_id`.

---

## 2. Role-Based Access Control

**How leaders do it.** AgencyAnalytics splits **Staff** vs **Client** users and lets you tune per-user toggles (Billing, Bulk Actions, integration connect rights) ([AgencyAnalytics roles](https://help.agencyanalytics.com/en/articles/4141469-staff-and-client-users-overview)). HighLevel ships role-templates like Admin, Account Manager, User and read-only Client roles ([HighLevel roles](https://help.gohighlevel.com/support/solutions/articles/155000002543-agency-managing-user-roles-permissions)). AIOSEO formalised the **SEO Manager** (sitewide settings) vs **SEO Editor** (per-page only) split for on-site work ([AIOSEO Access Controls](https://aioseo.com/features/access-controls/)).

**Recommended six roles.**
| Role | Sees | Can do |
|---|---|---|
| Owner / Admin | Everything across agency | Billing, add clients, manage staff |
| Account Manager | Assigned clients only | Reports, tasks, comms, approvals |
| SEO Specialist | Assigned projects | Audits, rank tracking, on-page changes |
| Content Writer | Briefs + drafts | Edit own drafts, submit for review |
| Client (View) | Own brand only | View dashboards/reports, comment |
| Client (Edit) | Own brand only | Approve content, request changes |

**Pitfalls.** Single "Client" role that's either too open (sees costs) or too closed (can't approve drafts). Bake **per-feature toggles** on top of role templates.

---

## 3. White-Label / Branded Client Portal

**How leaders do it.** SE Ranking's **Agency Pack** ($50/mo on annual Pro/Business) gives **Level-2 white label**: custom domain (e.g. `seo.youragency.com`), custom logo + colour palette, custom email sender, vendor branding fully hidden — clients log in to a live dashboard, not just a branded PDF ([SE Ranking Agency Pack](https://seranking.com/agency-pack.html), [White Label Overview](https://help.seranking.com/hc/en-us/articles/16332652286492-White-Label-Overview)). Whatagraph applies **global themes** at the workspace level so every export is on-brand automatically.

**Minimum portal kit.** Custom subdomain (CNAME), favicon, logo, primary/secondary colour, email-from address + SPF/DKIM setup, login page copy, removal of "Powered by" mentions.

**Pitfalls.** Forgetting SSL on custom domains; leaving vendor metadata in PDF exports; not white-labelling system email (password reset emails are the usual leak).

**Recommended.** Two tiers — basic (logo + colour on reports) on entry plans, full domain white-label as an agency add-on. Critical for a Thai market where clients expect a local-feeling brand.

---

## 4. Automated Reporting

**How leaders do it.** Monthly is the dominant cadence — ~70% of agencies use it as the primary touchpoint because SEO trends need 4-6 weeks to be statistically meaningful ([NextGrowth](https://nextgrowth.ai/seo-reports-for-clients/), [AgencyAnalytics SEO KPIs](https://agencyanalytics.com/blog/seo-kpis)). Automation cuts report production from **2-4 hours to under 40 minutes per client** ([Fusedash guide](https://fusedash.ai/blog/post/automate-client-seo-reports)).

**Standard KPI set.** Organic sessions, engagement rate, conversions from organic, keyword rankings + visibility, GSC impressions/clicks, backlink delta, technical health score, content performance.

**Delivery.** One-page exec summary (PDF/email) **plus** live dashboard link. Weekly snapshots internally; monthly to client.

**Recommended.** Scheduled PDF + always-on live URL + Slack/LINE digest. Make the exec-summary block AI-generated commentary tied to KPI deltas, not just charts.

---

## 5. Task / Workflow Management

**How leaders do it.** Agencies typically run a hybrid: **AgencyAnalytics tasks** for SEO-specific work (audit findings, on-page tickets) and **ClickUp / Asana** for cross-functional production ([ClickUp SEO](https://clickup.com/blog/ai-content-brief-generators/), [Cloudwards SEO PM](https://www.cloudwards.net/seo-project-management-software/)). ClickUp dominates for content workflows because of native brief templates and writer assignment.

**Pitfalls.** Two task systems = nothing gets done. Pure SEO-tool tasks lack dependency/Gantt features writers need.

**Recommended.** Build **lightweight native tasks** (audit-to-ticket auto-creation, content brief objects) AND ship **two-way sync to ClickUp/Asana** + webhook out. Content briefs should be first-class objects (target keyword, SERP analysis, outline, internal links, status: brief / draft / review / published).

---

## 6. Client Onboarding Flow

**How leaders do it.** Standard checklist: connect GSC, GA4, GBP, the site's CMS, and ad accounts if relevant. GSC + GA4 setup runs ~30-50 minutes combined ([GrowthSpree](https://www.growthspreeofficial.com/blogs/gsc-mcp-ga4-mcp-seo-analytics-saas)). But **meaningful data takes 48-72 hours to populate** in GA4 from GSC; first useful report lands at the end of week 1, full baseline by day 30 ([UpGrowth 90 Days](https://upgrowth.in/seo-agency-first-90-days-breakdown/)).

**Recommended onboarding.** Magic-link invite to client > guided OAuth wizard for GSC/GA4/GBP > CMS connection (WP plugin / Webflow API / Shopify app) > seed keyword list import > auto-baseline audit > "Day 7 First Report" auto-generated. Include a **client-facing onboarding checklist** (kickoff call, brand assets, competitor list) — Thai agencies often handle this over LINE, so build a LINE notification path.

---

## 7. Pricing Models

**How leaders do it.** AgencyAnalytics: tiered + **per-additional-client** ($59 Freelancer / 5 clients, $179 Agency / 10, $349 Pro / 15, then **$20 per extra client**), rank tracker as an add-on **$41.67/mo per 500 keywords** ([AgencyAnalytics Pricing](https://agencyanalytics.com/pricing), [Reporting Ninja breakdown](https://www.reportingninja.com/blog/agency-analytics-pricing)). SE Ranking: per-project + keyword volume, white-label as paid add-on. Unlimited staff seats is standard at agency tier.

**Pitfalls.** Per-seat pricing punishes agency growth; pure per-keyword punishes ecommerce sites. Hidden white-label fees erode trust.

**Recommended for Thailand.** Tiered base (1 / 10 / 25 / 50 clients) with **unlimited staff seats**, keyword tracking sold in 500-unit packs, white-label included from mid-tier upward. Price in THB with annual discount; offer a freelancer tier under ฿1,500/mo to seed market.

---

## 8. Integrations Agencies Actually Need

**Must-haves.** GSC, GA4, Google Business Profile, Looker Studio (native GSC/GA4 connectors; GBP via Windsor.ai), WordPress, Webflow, Shopify ([SE Ranking on Looker connectors](https://seranking.com/blog/looker-studio-connectors/), [SalesHive on GSC](https://saleshive.com/blog/google-search-console-platforms-integrate/)).

**Communication layer.** Slack and Discord via incoming webhooks are trivial; **LINE Messaging API** is non-negotiable for Thailand — push rank alerts, audit issues, weekly summaries to a LINE group with the client ([Local SEO Guide on Slack](https://www.localseoguide.com/the-best-seo-slack-apps-integrations/)).

**Nice-to-haves.** HubSpot (for lead-conversion attribution), Ahrefs/Semrush data import, Zapier/Make for the long tail.

**Recommended.** Ship GSC + GA4 + GBP + WordPress + LINE in v1. Webflow, Shopify, Slack, Looker Studio in v2.

---

## 9. Client Communication

**How leaders do it.** Sprout Social, Planable and Cloud Campaign all converged on **comments-on-the-asset** + **stage-gated approval** (Draft > In Review > Approved > Published) with **audit-trail logging** of every comment and timestamp ([Planable](https://planable.io/blog/social-media-approval-process/), [Moxo](https://www.moxo.com/blog/marketing-approval-workflow)). 92% of marketers cite approval delays as their #1 deadline killer.

**Recommended.** Per-report and per-content-piece comment threads, @mentions, approval stamps with timestamp + IP, change-request type ("typo / SEO concern / brand voice / legal"), and a notifications digest so clients aren't drowned. Mirror conversations to LINE for Thai clients.

---

## 10. Billing / Contracts

**How leaders do it.** Most SEO platforms don't bill — they integrate. Productive, Ravetree and ChargeOver provide **QuickBooks + Xero two-way sync** for invoicing and retainer balance tracking ([Ravetree](https://www.ravetree.com/blog/best-agency-billing-software-streamline-invoicing-and-improve-cash-flow), [ChargeOver](https://chargeover.com/payment-solutions/marketing-agencies)). Retainer tools alert when hours/scope approach depletion.

**Pitfalls.** Building a full invoicing engine — don't. Thai VAT (7%) and withholding tax (3% on services) need local handling.

**Recommended.** Skip building billing v1; integrate with **Xero (popular in Thailand)** + **FlowAccount / PEAK** (local Thai accounting). Track **retainer hours and scope-creep flags inside the platform**, then push invoice line items to the accounting tool. Add Stripe/Omise for credit card collection.

---

## Top Strategic Takeaways for the Thai Agency Platform

1. **Three-tier data model** (Agency > Client > Project) is non-negotiable.
2. **LINE integration** is the single biggest local differentiator vs AgencyAnalytics/SE Ranking.
3. **White-label from mid-tier**, not as a $50 gate — Thai SMB agencies are price-sensitive.
4. **Don't rebuild ClickUp** — build first-class content briefs + sync out.
5. **Don't rebuild Xero** — integrate to FlowAccount/PEAK/Xero for local tax compliance.
6. **Day-7 auto-baseline report** beats competitors' 30-day onboarding lag.

## Sources

- [AgencyAnalytics — Create and manage Clients](https://help.agencyanalytics.com/en/articles/10344666-create-and-manage-clients)
- [AgencyAnalytics — Staff and Client users](https://help.agencyanalytics.com/en/articles/4141469-staff-and-client-users-overview)
- [AgencyAnalytics — Agency Tools](https://agencyanalytics.com/features/agency-tools)
- [AgencyAnalytics — Pricing](https://agencyanalytics.com/pricing)
- [AgencyAnalytics Pricing breakdown — Reporting Ninja](https://www.reportingninja.com/blog/agency-analytics-pricing)
- [SE Ranking — Agency Pack](https://seranking.com/agency-pack.html)
- [SE Ranking — White Label Overview](https://help.seranking.com/hc/en-us/articles/16332652286492-White-Label-Overview)
- [SE Ranking — Looker Studio Connectors](https://seranking.com/blog/looker-studio-connectors/)
- [Whatagraph — Agency Dashboard](https://whatagraph.com/agency-dashboard)
- [HighLevel — User Roles & Permissions](https://help.gohighlevel.com/support/solutions/articles/155000002543-agency-managing-user-roles-permissions)
- [AIOSEO — Access Controls](https://aioseo.com/features/access-controls/)
- [NextGrowth — SEO Reports for Clients](https://nextgrowth.ai/seo-reports-for-clients/)
- [AgencyAnalytics — SEO KPIs Guide](https://agencyanalytics.com/blog/seo-kpis)
- [Fusedash — Automate Client SEO Reports](https://fusedash.ai/blog/post/automate-client-seo-reports)
- [UpGrowth — SEO Agency First 90 Days](https://upgrowth.in/seo-agency-first-90-days-breakdown/)
- [GrowthSpree — GSC + GA4 MCP setup](https://www.growthspreeofficial.com/blogs/gsc-mcp-ga4-mcp-seo-analytics-saas)
- [ClickUp — AI Content Brief Generators](https://clickup.com/blog/ai-content-brief-generators/)
- [Cloudwards — SEO Project Management Software](https://www.cloudwards.net/seo-project-management-software/)
- [SalesHive — GSC Integrations](https://saleshive.com/blog/google-search-console-platforms-integrate/)
- [Local SEO Guide — Best SEO Slack Apps](https://www.localseoguide.com/the-best-seo-slack-apps-integrations/)
- [Planable — Social Media Approval Process](https://planable.io/blog/social-media-approval-process/)
- [Moxo — Marketing Approval Workflow](https://www.moxo.com/blog/marketing-approval-workflow)
- [Ravetree — Agency Billing Software](https://www.ravetree.com/blog/top-agency-billing-software-streamline-invoicing-and-improve-cash-flow)
- [ChargeOver — Marketing Agencies](https://chargeover.com/payment-solutions/marketing-agencies)
