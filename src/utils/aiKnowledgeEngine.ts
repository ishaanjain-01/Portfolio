/**
 * Client-Side Knowledge Engine for Ishaan Jain's Portfolio
 * Provides instant, zero-latency grounded answers with conversational multi-turn context tracking.
 */

export interface ChatHistoryItem {
  sender: 'user' | 'assistant';
  text: string;
}

export function generateLocalAnswer(query: string, history?: ChatHistoryItem[]): string {
  const q = query.toLowerCase().trim();

  // Only inspect recent USER messages to resolve context (never assistant greetings)
  const recentUserHistory = history
    ? history.filter((h) => h.sender === 'user').slice(-5)
    : [];
  const userHistoryText = recentUserHistory.map((h) => h.text.toLowerCase()).join(' ');

  // Check if query is an explicit follow-up question
  const isFollowUp =
    q.startsWith('how much did that') ||
    q.startsWith('how much revenue') ||
    q.startsWith('what about that') ||
    q.startsWith('tell me more about that') ||
    q.startsWith('tell me more') ||
    q.startsWith('and that one') ||
    q.startsWith('what was the revenue there');

  // 1. Age, Birth & Personal Demographics
  if (
    q.includes('how old') ||
    q.includes('old is') ||
    /\bage\b/i.test(q) ||
    q.includes('birth') ||
    q.includes('born') ||
    q.includes('dob') ||
    q.includes('date of birth') ||
    q.includes('years old')
  ) {
    return `Ishaan Jain is **24 years old** (born in 2001). He is originally from Kolkata and is currently living in Gurgaon for his full-time PGP at Masters' Union.`;
  }

  // 2. Location / Where is Ishaan from / Where does he live
  if (
    q.includes('where is ishaan from') ||
    q.includes('where is he from') ||
    q.includes('where is') ||
    q.includes('from') ||
    q.includes('hometown') ||
    q.includes('where does he') ||
    q.includes('location') ||
    q.includes('based') ||
    q.includes('located') ||
    q.includes('city') ||
    q.includes('live') ||
    q.includes('living')
  ) {
    return `Ishaan is originally from **Kolkata, West Bengal, India** (where he was born, raised, and completed his schooling and undergraduate degree). He is currently living in **Gurgaon, Haryana**, having moved there to pursue his full-time **PGP in Technology & Business Management at Masters' Union** on a Merit Scholarship.`;
  }

  // 3. Current Program / Present Role / What is he doing right now
  if (
    q.includes('current') ||
    q.includes('doing right now') ||
    q.includes('present role') ||
    q.includes('currently') ||
    q.includes('job right now') ||
    q.includes('still at linc') ||
    q.includes('working at linc')
  ) {
    return `Ishaan is currently a full-time **PGP Scholar at Masters' Union** (Gurgaon, 2026–Present), pursuing Technology & Business Management on a **Merit Scholarship**.\n\nTo pursue his PGP full-time, he **left his corporate role as Deputy Manager at Linc Limited** in Kolkata. He is not doing both at once. Alongside his management studies in Gurgaon, he actively builds and scales his ventures: **ORA Gourmand Perfumes** ([oraperfumes.in](https://www.oraperfumes.in)) and **OmniSpend AI** ([omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)).`;
  }

  // 4. CGPA / Grades / Marks
  if (
    q.includes('cgpa') ||
    q.includes('gpa') ||
    q.includes('grades') ||
    q.includes('marks') ||
    q.includes('percentage') ||
    q.includes('score')
  ) {
    return `Ishaan's academic metrics:\n\n- **Undergraduate**: **CGPA 7.85 / 10** (First Class with Distinction) in B.Com (Honours in Finance) from St. Xavier's University (2020–2023).\n- **High School (DPS Megacity)**: ISC Class 12: **90.50%** (Commerce 94, Accounts 91, Economics 91); ICSE Class 10: **91.60%** with a **100/100 Centum in Commercial Studies**.`;
  }

  // 5. Who is Ishaan / Overview
  if (
    q.includes('who is ishaan') ||
    q.includes('about ishaan') ||
    q.includes('tell me about yourself') ||
    q.includes('who are you') ||
    q.includes('introduce') ||
    q === 'ishaan'
  ) {
    return `**Ishaan Jain** is a commercial growth strategist and venture builder:\n\n- **International Scale**: Led product launches across **50+ countries** at Linc Limited, driving **₹2 Cr+ incremental revenue** in 3 quarters.\n- **Unbroken Record**: Maintained **100% Target Achievement throughout employment tenure** at Zomato (7–10X merchant ROAS).\n- **0-to-1 Ventures**: Founder of **OmniSpend AI** ([omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)) and **ORA Gourmand Perfumes** ([oraperfumes.in](https://www.oraperfumes.in)).\n- **Academic Rigor**: Masters' Union Merit Scholar (PGP TBM) and St. Xavier's University B.Com Finance Hons (First Class with Distinction, 7.85 CGPA).`;
  }

  // 6. Folder structure & Archive Navigation
  if (
    q.includes('folder') ||
    q.includes('categor') ||
    q.includes('section') ||
    q.includes('part 1') ||
    q.includes('part 2') ||
    q.includes('part 3') ||
    q.includes('part 4') ||
    q.includes('structure') ||
    q.includes('directory')
  ) {
    return `The portfolio is organized into 4 archival folders:\n\n1. **Part 1: All Projects & Ventures**: Features **OmniSpend AI Spend Tracker** ([omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)), **ORA Gourmand Perfumes** ([oraperfumes.in](https://www.oraperfumes.in)), and **Door Step Essentials EU / Firetech** (Cross-border European Amazon e-commerce, ₹35L+ revenue).\n2. **Part 2: Work Experience**: Corporate revenue ownership at **Linc Limited** (Deputy Manager leading rollouts across 50+ countries, ₹2 Cr+ launch revenue) and **Eternal Limited (Zomato)** (Key Accounts Manager with 100% Target Achievement throughout employment tenure, 7-10X merchant ROAS).\n3. **Part 3: Extra-Curriculars & Social Contribution**: Leadership as **President of Leo Club of Kolkata Sealdah** (5,000+ individuals fed), **Treasurer of Xavier's Commerce & Management Society (XCMS)**, and National Case Honors (SRCC Conclave Top 10, MANAGEDIA 1st, UMANG 1st).\n4. **Part 4: Studies & Academic Background**: **Masters' Union** (PGP TBM, Merit Scholar), **St. Xavier's University** (B.Com Finance Hons, First Class 7.85 CGPA), **Empirical Research Dissertation on Women CEOs** (190 industry respondents), and **DPS Megacity** (ISC 90.50% & ICSE 100/100 centum in Commercial Studies).`;
  }

  // 7. OmniSpend AI Spend Tracker
  if (
    q.includes('omnispend') ||
    q.includes('spend tracker') ||
    (q.includes('expense') && (q.includes('tracker') || q.includes('app') || q.includes('ai') || q.includes('receipt') || q.includes('sms'))) ||
    (isFollowUp && userHistoryText.includes('omnispend'))
  ) {
    return `**OmniSpend AI Spend Tracker** is Ishaan's autonomous personal finance platform (live at [omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)):\n\n- **Automated Ingestion**: Ingests Gmail receipt confirmations and bank SMS debit alerts (HDFC, ICICI, SBI, UPI) in real time with zero manual entry.\n- **NLP Categorization**: Uses semantic embeddings to classify expenses into dining, groceries, SaaS, utilities, and transit.\n- **Subscription Leak Detection**: Automatically maps recurring monthly and annual billing cadences (Netflix, Spotify, AWS) to flag unnoticed spend.`;
  }

  // 8. Eternal Limited / Zomato
  if (
    q.includes('zomato') ||
    q.includes('eternal') ||
    q.includes('roas') ||
    q.includes('dining ad') ||
    q.includes('quota') ||
    (isFollowUp && (userHistoryText.includes('zomato') || userHistoryText.includes('eternal')))
  ) {
    return `At **Eternal Limited (Zomato)**, Ishaan compiled a top-tier revenue record:\n\n- **100% Target Achievement throughout employment tenure**: Sole individual in the entire 12-member sales team to achieve targets every quarter.\n- **7–10X Merchant ROAS**: Delivered high-return ad campaigns for restaurant partners.\n- **Portfolio Dominance**: Scaled Kolkata's largest dining ads portfolio (~20% of the city's total dining ad revenue).\n- **Intern-to-FTE Record**: Acquired 100+ restaurants in 60 days as an intern, earning the first permanent full-time offer given to an intern in Kolkata Dining history.`;
  }

  // 9. Linc Limited
  if (
    q.includes('linc') ||
    q.includes('export') ||
    q.includes('pentonic') ||
    q.includes('50+') ||
    q.includes('countries') ||
    q.includes('country') ||
    (isFollowUp && userHistoryText.includes('linc'))
  ) {
    return `At **Linc Limited** (where Ishaan served as **Deputy Manager – Product Growth & Market Development** from Mar 2025 to Jun 2026, before stepping down to pursue his full-time PGP at Masters' Union):\n\n- **50+ Countries**: Spearheaded global product launches across APAC, MEA, Europe, and LATAM.\n- **₹2 Cr+ Revenue**: Generated in incremental revenue within just 3 quarters of FY 2025–26.\n- **₹35 Lakhs Saved**: Negotiated global exhibition booth developments and vendor contracts.\n- **European Retail**: Expanded Pentonic shelf placement in European Modern Trade supermarket chains.`;
  }

  // 10. ORA Gourmand Perfumes
  if (
    q.includes('perfume') ||
    q.includes('ora') ||
    q.includes('gourmand') ||
    q.includes('fragrance') ||
    (isFollowUp && (userHistoryText.includes('ora') || userHistoryText.includes('perfume')))
  ) {
    return `**ORA Gourmand Perfumes** is Ishaan's artisanal mass-premium fragrance brand (live at [www.oraperfumes.in](https://www.oraperfumes.in)):\n\n- **0-to-1 Revenue**: Conceived and scaled independently, generating **₹2.5 Lakh+ in its first 30 days**.\n- **Formulation**: High-concentration 25%+ Extrait de Parfum featuring French culinary gourmand accords (Madagascar bourbon vanilla, roasted tonka, toasted hazelnut, caramelized praline).\n- **Full-Stack Execution**: Handled formulation, packaging procurement, Shopify store, and Meta ad acquisition.`;
  }

  // 11. European E-Commerce / Amazon
  if (
    q.includes('dropshipping') ||
    q.includes('door step') ||
    q.includes('firetech') ||
    q.includes('amazon') ||
    (isFollowUp && (userHistoryText.includes('dropshipping') || userHistoryText.includes('door step') || userHistoryText.includes('amazon')))
  ) {
    return `**Door Step Essentials EU (Firetech)** (Apr 2020 – Mar 2023):\n\n- **Scale**: Cross-border e-commerce across 7 Amazon EU marketplaces (DE, FR, IT, ES, UK, NL, PL).\n- **Financials**: Generated **₹35 Lakh+ in sales** (7-figure net global revenue) at healthy double-digit net operating margins.\n- **Core Operations**: Focused on consumer market research, competitor benchmarking, discovering winning products, dynamic pricing, and five-star customer service (did not use FBA or optimize for taxes).`;
  }

  // 12. Academic Trajectory / Degrees / Education
  if (
    q.includes('education') ||
    q.includes('xavier') ||
    q.includes('master') ||
    q.includes('degree') ||
    q.includes('college') ||
    q.includes('school')
  ) {
    return `Ishaan's academic qualifications:\n\n- **Masters' Union, Gurgaon** (2026–2027): PGP in Technology & Business Management on a **Merit Scholarship**.\n- **St. Xavier's University, Kolkata** (2020–2023): B.Com (Honours in Finance) — **First Class with Distinction (7.85 CGPA)**. Elected Treasurer of XCMS.\n- **DPS Megacity, Kolkata**: ISC Class 12: **90.50%**; ICSE Class 10: **91.60%** with **100/100 Centum in Commercial Studies**.`;
  }

  // 13. Empirical Research Dissertation
  if (
    q.includes('dissertation') ||
    q.includes('women ceo') ||
    q.includes('research') ||
    q.includes('study') ||
    q.includes('thesis') ||
    (isFollowUp && userHistoryText.includes('dissertation'))
  ) {
    return `Ishaan's research dissertation evaluated *"The Impact of Women CEOs on Corporate Performance in India"* (St. Xavier's University, supervised by Prof. Monojit Dutta):\n\n- **Dataset**: Surveyed 190 corporate industry respondents across India.\n- **Econometric Case Studies**: Compared Axis Bank (Shikha Sharma), Britannia (Vinita Bali), Welspun (Dipali Goenka), Lupin (Vinita Gupta), and HCL Tech (Roshni Nadar Malhotra).\n- **Key Metrics**: Analyzed Total Assets, Revenue Growth, and PAT pre- and post-leadership transition.\n- **Integrity**: 91% originality score verified on Turnitin (only 9% similarity index).`;
  }

  // 14. Competitions & National Awards
  if (
    q.includes('competition') ||
    q.includes('award') ||
    q.includes('srcc') ||
    q.includes('managedia') ||
    q.includes('umang') ||
    q.includes('conclave') ||
    q.includes('honor')
  ) {
    return `National business competition honors:\n\n- **SRCC Business Conclave 2023**: National Top 10 Finalist (out of 2,000+ teams from IIMs, IITs, SRCC).\n- **MANAGEDIA 2022**: 1st Place National Winner in Finance (iLEAD & Ministry of Tourism, Govt of India).\n- **UMANG 2022**: 1st Place Winner in Brand Rebranding & 2nd Runner Up in Scam Analysis.\n- **XMC 2022**: 2nd Position in Finesse National Finance Championship (St. Xavier's College).\n- **BONFIRE 2022**: 1st Place in Sustainable Innovation.`;
  }

  // 15. Social Work & Leo Club
  if (
    q.includes('leo') ||
    q.includes('social') ||
    q.includes('ngo') ||
    q.includes('volunteer') ||
    q.includes('charity') ||
    q.includes('community') ||
    q.includes('blood')
  ) {
    return `As **President of the Leo Club of Kolkata Sealdah** (Lions Clubs International District 322B1):\n\n- Distributed hot meals, nutrition kits, and groceries to **5,000+ underserved individuals**.\n- Mobilized and led **20+ active youth volunteers** across Kolkata.\n- Organized voluntary blood donation camps, diagnostic health checkups, and youth educational outreach programs.`;
  }

  // 16. Skills & Tools
  if (
    q.includes('tool') ||
    q.includes('tech stack') ||
    q.includes('software') ||
    q.includes('skills')
  ) {
    return `Ishaan's core skill areas and tools:\n\n- **Commercial & GTM**: B2B Sales, Key Account Management, Dining Ad Sales, International Distribution, Modern Trade.\n- **Product & Growth**: FinTech Product Management, NLP Ingestion Pipelines, Prompt Engineering, Shopify D2C, Meta Ads Manager, Amazon Seller Central.\n- **Finance & Data**: P&L Modeling, Econometrics, Valuation, Advanced Excel / Google Sheets, SQL queries.`;
  }

  // 17. Strengths / Why Hire / Fit
  if (
    q.includes('why hire') ||
    q.includes('strength') ||
    q.includes('fit') ||
    q.includes('competenc') ||
    q.includes('summary')
  ) {
    return `Why Ishaan stands out as a commercial growth and venture leader:\n\n1. **Proven Revenue Execution**: 100% Target Achievement throughout employment tenure at Zomato (7–10X merchant ROAS).\n2. **International Scale**: Headed product launches across 50+ countries at Linc Ltd, delivering ₹2 Cr+ incremental revenue in 3 quarters.\n3. **0-to-1 Venture Hustle**: Conceived and scaled OmniSpend AI, ORA Perfumes (₹2.5L+ in 30 days), and European cross-border e-commerce (₹35L+ revenue).\n4. **Finance Rigor**: First Class B.Com Finance Hons (7.85 CGPA) with full P&L accountability.`;
  }

  // 18. LinkedIn Profile
  if (q.includes('linkedin')) {
    return `Ishaan's verified **LinkedIn profile** is [linkedin.com/in/ishaan-jain-b99033201/](https://www.linkedin.com/in/ishaan-jain-b99033201/):\n\n- **Current Status**: Full-time PGP TBM Scholar at Masters' Union (Gurgaon, 2026–Present) on Merit Scholarship & D2C Founder.\n- **Past Corporate Track**: Ex-Deputy Manager at Linc Limited (left in Jun 2026 to join Masters' Union full-time; ₹2 Cr+ incremental launches across 50+ countries) & Ex-Zomato Key Accounts Manager (100% Target Achievement throughout employment tenure, 7–10X ROAS).\n- **Venture Track**: Founder of ORA Gourmand Perfumes (₹2.5L+ in 30 days) and OmniSpend AI.\n- **Endorsed Areas**: International Business Development, Global Trade Marketing, Key Account Management, Financial Modeling, Cross-Border E-Commerce.\n- **Hometown & Location**: From Kolkata, India; currently living in Gurgaon.\n- **Network**: Connect directly at [linkedin.com/in/ishaan-jain-b99033201/](https://www.linkedin.com/in/ishaan-jain-b99033201/).`;
  }

  // 19. Instagram Profile
  if (q.includes('instagram') || q.includes('insta')) {
    return `Ishaan's **Instagram profile** is [@ishaanjain01](https://www.instagram.com/ishaanjain01/):\n\n- **Aesthetic & Focus**: Behind-the-scenes founder journey, artisanal perfumery formulation for [ORA Gourmand Perfumes](https://www.oraperfumes.in), visual storytelling, personal fitness, and travel.\n- **Venture Highlights**: Design and launch chronicles of ORA Gourmand Perfumes' 25%+ Extrait de Parfum gourmet formulations.\n- **Community Work**: Social initiatives and food distribution drives with the Leo Club of Kolkata Sealdah.\n- **Follow**: Connect with Ishaan at [instagram.com/ishaanjain01/](https://www.instagram.com/ishaanjain01/).`;
  }

  // 20. Weekly Database Sync Task
  if (
    q.includes('weekly') ||
    q.includes('update the database') ||
    q.includes('stay up to date') ||
    q.includes('sync') ||
    q.includes('cadence')
  ) {
    return `**Weekly Database Synchronization Task**:\n\n- **Status**: **Active & Scheduled**\n- **Cadence**: Recurring weekly cycle (every Sunday at 00:00 UTC)\n- **Integrated Data Feeds**: LinkedIn profile ([ishaan-jain-b99033201](https://www.linkedin.com/in/ishaan-jain-b99033201/)), Instagram feed ([@ishaanjain01](https://www.instagram.com/ishaanjain01/)), and verified career portfolio dossier.\n- **Endpoint**: Live sync health and trigger endpoints are operational at \`/api/sync/status\` and \`/api/sync/trigger\`.\n- **Objective**: Guarantees that ISHAAN AI always reflects Ishaan's latest ventures, career achievements, and academic milestones in real-time.`;
  }

  // 21. Contact Details
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('reach') ||
    q.includes('connect')
  ) {
    return `Contact Ishaan directly:\n\n- **Email**: [ishaan.jain2027@mastersunion.org](mailto:ishaan.jain2027@mastersunion.org) | [ishaan123485@gmail.com](mailto:ishaan123485@gmail.com)\n- **Phone**: [+91 8240976206](tel:+918240976206)\n- **LinkedIn**: [linkedin.com/in/ishaan-jain-b99033201](https://www.linkedin.com/in/ishaan-jain-b99033201/)\n- **Instagram**: [instagram.com/ishaanjain01](https://www.instagram.com/ishaanjain01/)\n- **Location**: Gurgaon, Haryana, India (Hometown: Kolkata)`;
  }

  // 19. Default Context-Aware Overview
  return `I am Ishaan Jain's portfolio AI assistant. Key highlights:\n\n- **Linc Limited**: 50+ countries launched, ₹2 Cr+ incremental revenue.\n- **Zomato**: 100% Target Achievement throughout employment tenure, 7–10X merchant ROAS.\n- **0-to-1 Ventures**: Founder of [OmniSpend AI](https://omnispendtracker.lovable.app) & [ORA Gourmand Perfumes](https://www.oraperfumes.in).\n- **Academics**: Masters' Union Merit Scholar & First Class B.Com (Finance Hons, 7.85 CGPA) from St. Xavier's.\n\nWhat specific detail would you like to explore?`;
}

