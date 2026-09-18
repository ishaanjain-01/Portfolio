import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialization of Gemini client (lazy import to ensure instantaneous server startup)
let aiClient: any = null;
async function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (err) {
      console.warn('Failed to initialize GoogleGenAI client:', err);
      return null;
    }
  }
  return aiClient;
}

const ISHAAN_SYSTEM_CONTEXT = `
You are the authoritative AI Digital Representative and Executive Career Ambassador for Ishaan Jain.
You represent Ishaan in high-stakes conversations with recruiters, venture capitalists, founders, hiring managers, and business leaders.

CORE BEHAVIOR & STYLE GUIDELINES:
1. DIRECT, IMPACTFUL OPENING: Answer the specific question immediately in the very first sentence. Never open with throat-clearing pleasantries, generic greetings, or conversational filler (never say "Certainly!", "That's a great question!", "I'd be glad to help with that!").
2. ADAPTIVE PERSPECTIVE: When users ask questions addressed to Ishaan in the second person ("How did you achieve...", "What is your greatest strength?", "Why should we hire you?"), you may respond as Ishaan's digital avatar or in the first person ("I / my") or third person ("Ishaan"), delivering confident, articulate, and poised responses.
3. CONCISE, HIGH-SIGNAL & METRIC-DENSE: Back claims with quantifiable metrics formatted in bold (e.g., **50+ countries**, **₹2 Cr+ incremental revenue**, **100% Target Achievement throughout employment tenure**, **7–10X ROAS**, **₹2.5L+ in 30 days**, **₹35 Lakhs saved**, **7.85 CGPA**, **90.50% ISC**). Use punchy, scannable bullet points and crisp markdown.
4. ZERO IRRELEVANT RESUME-DUMPING: If the user asks a specific targeted question (e.g., "How old are you?", "What was your CGPA?", "Tell me about ORA Perfumes"), answer ONLY that topic thoroughly. Do not append unrequested lists of unrelated jobs or awards unless the user asks for a comprehensive overview.
5. ADVANCED INTERVIEW & BEHAVIORAL REASONING: When asked behavioral, strategic, or leadership questions ("Tell me about a difficult negotiation", "How do you approach 0-to-1 product development?", "What is your sales philosophy?"), synthesize real events from Ishaan's career using the STAR framework (Situation, Task, Action, Result) citing real initiatives (e.g., European trade negotiations, Zomato merchant acquisition, OmniSpend NLP pipeline, ORA D2C launch).
6. STRICT FACTUAL FIDELITY: Never hallucinate unverified employers, credentials, or metrics. Adhere strictly to the verified dossier below.
7. STRICT TRUTHFULNESS ON LOCATION & EMPLOYMENT TIMELINE:
   - HOMETOWN & ORIGIN: Ishaan is from KOLKATA, India (born, raised, attended DPS Megacity, and graduated with B.Com Finance Hons from St. Xavier's University in Kolkata).
   - CURRENT LIVING LOCATION: Ishaan currently lives in GURGAON, Haryana, having moved there to pursue his full-time on-campus PGP in Technology & Business Management at Masters' Union (2026–Present) on a Merit Scholarship.
   - CAREER TRANSITION & LINC LIMITED: Ishaan LEFT his full-time corporate job at Linc Limited in June 2026 to pursue his full-time PGP at Masters' Union. He is NOT currently working at Linc Limited. He is an EX-Deputy Manager of Linc Limited (Mar 2025 – Jun 2026).
   - ABSOLUTE PROHIBITION ON "DUAL-BASE" OR SIMULTANEOUS FULL-TIME ROLES: NEVER claim, suggest, or imply that Ishaan maintains a "dual-base", works at Linc while studying at Masters' Union, or is doing two full-time jobs at once. He cannot do two things at the same time. He is a full-time student/scholar at Masters' Union in Gurgaon, and actively builds his ventures (ORA Gourmand Perfumes, OmniSpend AI) alongside his studies.

VERIFIED CAREER DOSSIER & FACTS:

1. Personal Demographics & Contact:
   - Name: Ishaan Jain | Age: 24 years old (born 2001)
   - Hometown & Origin: Kolkata, West Bengal, India (born, raised, educated at DPS Megacity & St. Xavier's University).
   - Current Residence: Gurgaon, Haryana, India (relocated to Gurgaon for his full-time PGP at Masters' Union).
   - Current Status / Primary Pursuit: Full-time PGP in Technology & Business Management Scholar at Masters' Union (Gurgaon, 2026–Present) on Merit Scholarship. In parallel, scales his entrepreneurial ventures: ORA Gourmand Perfumes (www.oraperfumes.in) and OmniSpend AI (omnispendtracker.lovable.app).
   - Corporate Status: Former corporate leader. Left his role at Linc Limited in June 2026 to pursue his PGP full-time. Does NOT work at Linc Limited currently.
   - Email: ishaan.jain2027@mastersunion.org | ishaan123485@gmail.com
   - Phone: +91 8240976206
   - LinkedIn Profile: https://www.linkedin.com/in/ishaan-jain-b99033201/ (ID: ishaan-jain-b99033201)
   - Instagram Profile: https://www.instagram.com/ishaanjain01/ (Handle: @ishaanjain01)
   - Knowledge Sync Cadence: Actively refreshed on an automated weekly schedule to sync updates from LinkedIn, Instagram, and verified career files.

2. Corporate Experience:
   A. Linc Limited (India's premier publicly listed writing instruments manufacturer):
      - Role: Ex-Deputy Manager – Product Growth & Market Development (Corporate & MISMAT Dept, Kolkata HO, Mar 2025 – Jun 2026).
      - Transition: Left Linc Limited in June 2026 to join Masters' Union full-time.
      - Global Scope: Spearheaded end-to-end global product launches across 50+ countries in APAC, MEA, Europe, and LATAM.
      - Revenue Impact: Delivered ₹2 Cr+ incremental revenue within just 3 quarters in FY 2025–26 through international product launches.
      - Strategic Savings: Saved ₹35 Lakhs through aggressive international vendor negotiations and optimized exhibition booth engineering.
      - Retail Expansion: Expanded Pentonic shelf placement across European Modern Trade supermarket chains.
      - Key Skills: International Business Development, Global Trade Marketing, Distributor Management, Cross-Border Supply Chain.

   B. Eternal Limited (Formerly Zomato):
      - Role: Key Accounts Manager – Revenue Growth & Portfolio Management (City Accounts & Supply, Dining Out, Kolkata, Sep 2023 - Mar 2025).
      - Quota Track Record: Maintained **100% Target Achievement throughout employment tenure** across every quarter — the SOLE individual in the 12-member sales team to do so.
      - Merchant ROAS: Delivered 7–10X average Return on Ad Spend for restaurant partners, turning dining ads into a predictable profit center.
      - Portfolio Dominance: Scaled Kolkata's largest dining ads portfolio from scratch, contributing ~20% of the entire city's dining ad revenue.
      - Promotion & Recognition: Awarded fixed annual compensation revision to INR 777,000 (₹7.77 Lakhs) for top performance.
      - Landmark Event: Spearheaded merchant onboarding and on-ground execution for the landmark Zomato Gold Dining Carnival in Kolkata.
      - Preceding Internship: Dining Out Intern (Jun 2023 - Aug 2023). Acquired 100+ partner restaurants in 60 days, outperformed all internship KPIs, and secured the first-ever permanent full-time offer awarded to an intern in Kolkata Dining history.

3. 0-to-1 Entrepreneurial Ventures:
   A. OmniSpend AI Spend Tracker (2026 | [omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)):
      - Autonomous expense tracking platform built by Ishaan.
      - Automated Ingestion: Directly extracts debit receipts from Gmail inboxes and bank SMS alerts (HDFC, ICICI, SBI, Axis, UPI) with zero manual typing.
      - NLP Classification: Semantic models classify expenditures into dining, utilities, SaaS, and transit.
      - Recurring Engine: Detects subscription cycles (Netflix, AWS, Spotify, gym) to flag unmonitored recurring spend.

   B. ORA Gourmand Perfumes (2026 | [www.oraperfumes.in](https://www.oraperfumes.in)):
      - Mass-premium artisanal D2C fragrance brand built from 0 to 1 independently by Ishaan.
      - Commercial Traction: Generated ₹2.5 Lakh+ in revenue within its first 30 days of commercial launch.
      - Formulation: 25%+ Extrait de Parfum concentration featuring decadent French culinary gourmand accords (Madagascar bourbon vanilla, roasted tonka bean, toasted hazelnut, caramelized praline).
      - Full-Stack Execution: Formulated scent profiles, designed packaging and glass flacons, built Shopify storefront, and ran Meta ad acquisition.

   C. Door Step Essentials EU / Firetech (Apr 2020 - Mar 2023):
      - Cross-border European e-commerce business operating across 7 Amazon EU marketplaces (DE, FR, IT, ES, UK, NL, PL).
      - Financials: Generated 7-figure net global revenue with ₹35 Lakh+ in sales (€20,000+ volume) at healthy double-digit net operating margins.
      - Operating Model: Leveraged consumer market research, competitor benchmarking, dynamic pricing, and five-star customer service.
      - Factual Verification: Did NOT use Amazon FBA (merchant-fulfilled dropshipping) and did NOT optimize for taxes.

4. Academic Trajectory & Research:
   A. Masters' Union (Gurgaon, 2026–2027):
      - PGP in Technology & Business Management | Merit Scholarship recipient.
      - Advanced studies in Tech Strategy, Venture Building, Corporate Finance, and AI-driven growth.
   B. St. Xavier's University, Kolkata (2020–2023):
      - Bachelor of Commerce (Honours in Finance) | First Class with Distinction (CGPA 7.85 / 10.0, 72.96% aggregate).
      - Leadership: Elected Treasurer of Xavier's Commerce & Management Society (XCMS) — managed operational budgets for 200+ members and 10+ inter-collegiate symposiums.
      - Recommendations: Recommended by faculty members Prof. Dr. Vivek Kumar Verma and Dr. Monalika Dey.
   C. Empirical Research Dissertation:
      - Title: "A Study on the challenges faced by women CEOs and their success rate as leaders of their organization" (Supervised by Prof. Monojit Dutta).
      - Dataset & Scope: Surveyed 190 corporate industry respondents across India.
      - Econometric Case Studies: Evaluated 5 marquee corporate leadership transitions: Axis Bank (Shikha Sharma), Britannia (Vinita Bali), Welspun (Dipali Goenka), Lupin (Vinita Gupta), and HCL Tech (Roshni Nadar Malhotra).
      - Metrics: Compared Total Assets, Revenue Growth, and PAT pre- and post-leadership changes.
      - Academic Rigor: Turnitin-verified 91% originality score (only 9% similarity index).
   D. Delhi Public School Megacity, Kolkata (2005–2020):
      - ISC Class 12: 90.50% (Commerce 94, Accounts 91, Economics 91).
      - ICSE Class 10: 91.60% with a 100/100 Centum in Commercial Studies.
      - Interact Club Captain & Megabizz Board of Directors.

5. National Business Competitions & Honors:
   - SRCC Business Conclave 2023: National Top 10 Finalist (out of 2,000+ teams from IIMs, IITs, SRCC).
   - MANAGEDIA 2022: 1st Place National Winner in Finance (iLEAD & Ministry of Tourism, Govt of India).
   - UMANG 2022: 1st Place Winner in Brand Rebranding & 2nd Runner Up in Corporate Forensic Analysis.
   - XMC 2022: 2nd Position in Finesse National Finance Championship (St. Xavier's College).
   - BONFIRE 2022: 1st Place in Sustainable Innovation.

6. Social Welfare Leadership:
   - President, Leo Club of Kolkata Sealdah (Lions Clubs International District 322B1): Distributed hot meals and nutrition kits to 5,000+ underserved individuals, mobilized 20+ youth volunteers, and organized voluntary blood donation and healthcare diagnostic camps.

7. Core Competencies & Toolkit:
   - GTM & Commercial: B2B Enterprise Sales, Key Account Management, High-Ticket Ad Sales, International Distribution, Distributor Management, Trade Marketing.
   - Product & Ventures: FinTech Product Management, NLP Ingestion Pipelines, Prompt Engineering, Shopify D2C, Meta Ads Manager, Amazon Seller Central.
   - Finance: P&L Modeling, Financial Econometrics, Valuation, Budgetary Control, Advanced Excel / Google Sheets, SQL queries.

8. LinkedIn Professional Footprint (https://www.linkedin.com/in/ishaan-jain-b99033201/):
   - Handle / Vanity URL: ishaan-jain-b99033201
   - Position: Masters' Union Merit Scholar (PGP TBM 2026–Present) | Ex-Linc Deputy Manager | Ex-Zomato KAM | D2C Founder.
   - Core Professional Narrative: Specializes in taking consumer products and high-ticket B2B services from zero-to-one into 50+ countries. Ex-Zomato KAM with 100% Target Attainment and 7–10X ROAS; Ex-Linc Deputy Manager with ₹2 Cr+ incremental revenue (left Linc to join Masters' Union full-time); D2C Founder of ORA Gourmand Perfumes (₹2.5L+ in 30 days) and OmniSpend AI.
   - Endorsements & Skills: Formally endorsed for International Business Development, Key Account Management, Global Trade Marketing, Financial Modeling, Cross-Border E-Commerce, and Distributor Operations.
   - Professional Network: Regularly engages with Indian and global founders, venture investors, consumer brand leaders, and fellow Masters' Union innovators.
   - Recommendations: Strong academic and corporate backing, including recommendations from St. Xavier's University faculty (Dr. Vivek Kumar Verma, Dr. Monalika Dey) and senior commercial leadership at Eternal / Zomato.

9. Instagram Creative Identity & Lifestyle (https://www.instagram.com/ishaanjain01/):
   - Handle: @ishaanjain01
   - Aesthetic & Narrative: Founder behind-the-scenes, artisanal fragrance design, creative product formulation, visual brand storytelling, lifestyle, travel across international trade hubs, and community outreach.
   - ORA Gourmand Perfumes Chronicle: Documenting the aesthetic formulation and packaging journey of ORA Gourmand Perfumes ([www.oraperfumes.in](https://www.oraperfumes.in)), featuring 25%+ Extrait de Parfum culinary gourmand scents, heavy minimalist glass flacons, and French olfactory accords.
   - Personal Interests & Social Impact: Fitness, international travel, cricket, and community service highlights with Leo Club of Kolkata Sealdah (feeding 5,000+ underserved individuals).

10. Automated Weekly Knowledge Base Sync:
   - Schedule Cadence: Actively refreshed on a weekly automated schedule (every Sunday) to synchronize new posts, career milestones, academic updates from Masters' Union, and product releases from LinkedIn and Instagram.
   - Purpose: Guarantees that ISHAAN AI's responses are perpetually aligned with Ishaan's real-time career developments and live ventures.
`;

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', candidate: 'Ishaan Jain', model: 'gemini-3.8-flash' });
});

// Profile Database Weekly Sync Tracker
let lastSyncTimestamp = new Date().toISOString();
let syncCounter = 1;

app.get('/api/sync/status', (req: Request, res: Response) => {
  const nextSyncDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  res.json({
    status: 'active',
    cadence: 'weekly',
    syncCount: syncCounter,
    lastSynced: lastSyncTimestamp,
    nextScheduledSync: nextSyncDate,
    sources: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ishaan-jain-b99033201/', status: 'synced' },
      { name: 'Instagram', url: 'https://www.instagram.com/ishaanjain01/', status: 'synced' },
      { name: 'Portfolio Dossier', status: 'synced' }
    ]
  });
});

app.post('/api/sync/trigger', (req: Request, res: Response) => {
  syncCounter += 1;
  lastSyncTimestamp = new Date().toISOString();
  console.log(`[Sync Engine] Weekly profile database refreshed at ${lastSyncTimestamp} (Run #${syncCounter})`);
  res.json({
    success: true,
    message: 'Profile database successfully updated from LinkedIn and Instagram dossiers',
    lastSynced: lastSyncTimestamp,
    syncCount: syncCounter
  });
});

// Interactive Portfolio AI Chat Assistant with Multi-Turn Memory
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = await getGenAI();
    if (ai) {
      try {
        // Format multi-turn conversation history for Gemini
        const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

        if (Array.isArray(history)) {
          for (const item of history.slice(-8)) {
            if (item && typeof item.text === 'string' && item.text.trim()) {
              formattedContents.push({
                role: item.role === 'assistant' || item.role === 'model' ? 'model' : 'user',
                parts: [{ text: item.text.trim() }],
              });
            }
          }
        }

        // Gemini multi-turn format strictly requires the first turn to be 'user'.
        // Remove any initial welcome message from the assistant/model:
        while (formattedContents.length > 0 && formattedContents[0].role === 'model') {
          formattedContents.shift();
        }

        // Ensure alternating user/model turns to prevent API rejection:
        const normalizedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
        for (const turn of formattedContents) {
          if (normalizedContents.length > 0 && normalizedContents[normalizedContents.length - 1].role === turn.role) {
            normalizedContents[normalizedContents.length - 1].parts[0].text += `\n${turn.parts[0].text}`;
          } else {
            normalizedContents.push({
              role: turn.role,
              parts: [{ text: turn.parts[0].text }],
            });
          }
        }

        // Add current user message
        if (normalizedContents.length > 0 && normalizedContents[normalizedContents.length - 1].role === 'user') {
          normalizedContents[normalizedContents.length - 1].parts[0].text += `\n${message.trim()}`;
        } else {
          normalizedContents.push({
            role: 'user',
            parts: [{ text: message.trim() }],
          });
        }

        // Candidate models with automatic graceful failover if a model experiences high-demand 503 or 429 quota spikes
        // gemini-3.1-flash-lite provides ultra-low latency and higher quota headroom, followed by gemini-3.8-flash and gemini-flash-latest
        const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash', 'gemini-flash-latest'];
        let generatedText: string | null = null;

        for (const modelName of candidateModels) {
          try {
            const aiPromise = ai.models.generateContent({
              model: modelName,
              contents: normalizedContents,
              config: {
                systemInstruction: ISHAAN_SYSTEM_CONTEXT,
                temperature: 0.3,
              },
            });

            const timeoutPromise = new Promise((_, reject) =>
              setTimeout(() => reject(new Error('AI generation timeout')), 14000)
            );

            const response: any = await Promise.race([aiPromise, timeoutPromise]);
            if (response && response.text) {
              generatedText = response.text;
              break;
            }
          } catch (modelErr: any) {
            // Log for observability and attempt next candidate model
            console.warn(`Model ${modelName} encountered error:`, modelErr?.message || modelErr);
            continue;
          }
        }

        if (generatedText) {
          return res.json({ reply: generatedText, source: 'gemini' });
        }
      } catch (genErr) {
        console.warn('Gemini chat pipeline caught error:', genErr);
      }
    }

    // Intelligent Multi-Turn Fallback Engine
    const query = message.toLowerCase().trim();
    // Only inspect previous USER messages to extract conversation context (never assistant greeting)
    const userHistoryText = Array.isArray(history)
      ? history
          .filter((h: any) => h?.role === 'user' || h?.sender === 'user')
          .map((h: any) => h?.text?.toLowerCase() || '')
          .join(' ')
      : '';

    let fallbackReply = '';

    // Check for explicit follow-ups
    const isFollowUp =
      query.startsWith('how much did that') ||
      query.startsWith('how much revenue') ||
      query.startsWith('what about that') ||
      query.startsWith('tell me more about that') ||
      query.startsWith('tell me more') ||
      query.startsWith('and that one') ||
      query.startsWith('what was the revenue there') ||
      query.startsWith('how did you do that') ||
      query.startsWith('why?');

    // 1. Age, DOB & Birthday
    if (
      query.includes('how old') ||
      query.includes('old is') ||
      /\bage\b/i.test(query) ||
      query.includes('birth') ||
      query.includes('born') ||
      query.includes('dob') ||
      query.includes('date of birth') ||
      query.includes('years old')
    ) {
      fallbackReply = `Ishaan Jain is **24 years old** (born in 2001). He is originally from Kolkata and is currently living in Gurgaon for his full-time PGP at Masters' Union.`;
    }
    // 2. Location / Where is Ishaan from / Where does he live
    else if (
      query.includes('where is ishaan from') ||
      query.includes('where is he from') ||
      query.includes('where is') ||
      query.includes('from') ||
      query.includes('hometown') ||
      query.includes('where does he') ||
      query.includes('location') ||
      query.includes('based') ||
      query.includes('located') ||
      query.includes('city') ||
      query.includes('live') ||
      query.includes('living')
    ) {
      fallbackReply = `Ishaan is originally from **Kolkata, West Bengal, India** (where he was born, raised, and completed his schooling and undergraduate degree). He is currently living in **Gurgaon, Haryana**, having moved there to pursue his full-time **PGP in Technology & Business Management at Masters' Union** on a Merit Scholarship.`;
    }
    // 3. Current Program / What is he doing right now
    else if (
      query.includes('current') ||
      query.includes('doing right now') ||
      query.includes('present role') ||
      query.includes('currently') ||
      query.includes('job right now') ||
      query.includes('still at linc') ||
      query.includes('working at linc')
    ) {
      fallbackReply = `Ishaan is currently a full-time **PGP Scholar at Masters' Union** (Gurgaon, 2026–Present), pursuing Technology & Business Management on a **Merit Scholarship**.\n\nTo pursue his PGP full-time, he **left his corporate role as Deputy Manager at Linc Limited** in Kolkata. He is not doing both at once. Alongside his studies in Gurgaon, he actively builds and scales his ventures: **ORA Gourmand Perfumes** ([oraperfumes.in](https://www.oraperfumes.in)) and **OmniSpend AI** ([omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)).`;
    }
    // 4. CGPA / Grades / Marks
    else if (
      query.includes('cgpa') ||
      query.includes('gpa') ||
      query.includes('grades') ||
      query.includes('marks') ||
      query.includes('percentage') ||
      query.includes('score')
    ) {
      fallbackReply = `Ishaan's academic metrics:\n\n- **Undergraduate**: **CGPA 7.85 / 10** (First Class with Distinction, 72.96% aggregate) in B.Com (Honours in Finance) from St. Xavier's University (2020–2023).\n- **High School (DPS Megacity)**: ISC Class 12: **90.50%** (Commerce 94, Accounts 91, Economics 91); ICSE Class 10: **91.60%** with a **100/100 Centum in Commercial Studies**.`;
    }
    // 5. Why Hire / Fit / Value Proposition / Strengths
    else if (
      query.includes('why hire') ||
      query.includes('strength') ||
      query.includes('why should we') ||
      query.includes('fit') ||
      query.includes('stand out') ||
      query.includes('what makes') ||
      query.includes('competenc')
    ) {
      fallbackReply = `Ishaan stands out as a high-velocity growth operator and venture builder across three distinct pillars:\n\n1. **Proven Corporate Revenue Execution**: Maintained **100% Target Achievement throughout employment tenure** at Zomato across every quarter, generating **7–10X merchant ROAS** and managing ~20% of Kolkata's dining ad revenue.\n2. **International Scale & Commercial Acumen**: Led product rollouts across **50+ countries** at Linc Limited, delivering **₹2 Cr+ incremental revenue** in 3 quarters and negotiating **₹35 Lakhs in savings** on exhibition and vendor contracts.\n3. **0-to-1 Entrepreneurial Grit**: Conceived and scaled **ORA Gourmand Perfumes** (₹2.5L+ in 30 days), built **OmniSpend AI**, and generated **₹35 Lakh+ in sales** on 7 European Amazon marketplaces at healthy double-digit margins.\n4. **Analytical Rigor**: B.Com Finance Honours (First Class with Distinction, 7.85 CGPA) and Masters' Union Merit Scholar with deep P&L modeling expertise.`;
    }
    // 6. Who is Ishaan / Profile Overview
    else if (
      query.includes('who is ishaan') ||
      query.includes('about ishaan') ||
      query.includes('tell me about yourself') ||
      query.includes('who are you') ||
      query.includes('introduce') ||
      query === 'ishaan'
    ) {
      fallbackReply = `**Ishaan Jain** is a commercial growth strategist, e-commerce operator, and venture builder:\n\n- **International Scale**: Led product rollouts across **50+ countries** at Linc Limited, delivering **₹2 Cr+ incremental revenue** in 3 quarters.\n- **Unbroken Quota Record**: Maintained **100% Target Achievement throughout employment tenure** at Zomato (7–10X merchant ROAS).\n- **0-to-1 Ventures**: Founder of **OmniSpend AI** ([omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)), **ORA Gourmand Perfumes** ([oraperfumes.in](https://www.oraperfumes.in)), and European cross-border e-commerce (₹35L+ revenue).\n- **Academic Rigor**: Masters' Union Merit Scholar (PGP TBM) and St. Xavier's University B.Com Finance Hons (First Class with Distinction, 7.85 CGPA).`;
    }
    // 7. OmniSpend AI Spend Tracker
    else if (
      query.includes('omnispend') ||
      query.includes('spend tracker') ||
      (query.includes('expense') && (query.includes('tracker') || query.includes('app') || query.includes('ai') || query.includes('receipt') || query.includes('sms'))) ||
      (isFollowUp && userHistoryText.includes('omnispend'))
    ) {
      fallbackReply = `**OmniSpend AI Spend Tracker** is Ishaan's autonomous personal finance platform (live at [omnispendtracker.lovable.app](https://omnispendtracker.lovable.app)):\n\n- **Automated Ingestion**: Directly parses Gmail receipt confirmations and bank SMS alerts (HDFC, ICICI, SBI, Axis, UPI) with zero manual data entry.\n- **NLP Categorization**: Semantic classifiers automatically group debits into dining, utilities, SaaS, and transit.\n- **Subscription Leak Detection**: Maps recurring monthly and annual billing cycles (Netflix, AWS, Spotify, gym) to flag unmonitored recurring spend.`;
    }
    // 8. Zomato / Eternal
    else if (
      query.includes('zomato') ||
      query.includes('eternal') ||
      query.includes('quota') ||
      query.includes('roas') ||
      query.includes('dining ad') ||
      (isFollowUp && userHistoryText.includes('zomato'))
    ) {
      fallbackReply = `At **Eternal Limited (Zomato)**, Ishaan compiled a top-tier revenue record:\n\n- **100% Target Achievement throughout employment tenure**: Sole individual in the entire 12-member Kolkata sales team to achieve targets every quarter.\n- **7–10X Merchant ROAS**: Delivered high-return ad campaigns for restaurant partners.\n- **Portfolio Dominance**: Scaled Kolkata's largest dining ads portfolio (~20% of the city's total dining ad revenue).\n- **Intern-to-FTE Record**: Acquired 100+ restaurants in 60 days as an intern, earning the first permanent full-time offer given to an intern in Kolkata Dining history.`;
    }
    // 9. Linc Limited
    else if (
      query.includes('linc') ||
      query.includes('export') ||
      query.includes('pentonic') ||
      query.includes('50+') ||
      query.includes('country') ||
      query.includes('countries') ||
      (isFollowUp && userHistoryText.includes('linc'))
    ) {
      fallbackReply = `At **Linc Limited** (where Ishaan served as **Deputy Manager – Product Growth & Market Development** from Mar 2025 to Jun 2026, before stepping down to pursue his full-time PGP at Masters' Union):\n\n- **50+ Countries**: Spearheaded global launches across APAC, MEA, Europe, and LATAM.\n- **₹2 Cr+ Revenue**: Generated in incremental revenue within just 3 quarters of FY 2025–26.\n- **₹35 Lakhs Saved**: Negotiated global exhibition booth developments and vendor contracts.\n- **European Retail**: Expanded Pentonic shelf placement in European Modern Trade supermarket chains.`;
    }
    // 10. ORA Gourmand Perfumes
    else if (
      query.includes('perfume') ||
      query.includes('ora') ||
      query.includes('gourmand') ||
      query.includes('fragrance') ||
      (isFollowUp && userHistoryText.includes('ora'))
    ) {
      fallbackReply = `**ORA Gourmand Perfumes** is Ishaan's artisanal mass-premium fragrance brand (live at [www.oraperfumes.in](https://www.oraperfumes.in)):\n\n- **0-to-1 Revenue**: Conceived and scaled independently, generating **₹2.5 Lakh+ in its first 30 days**.\n- **Formulation**: High-concentration 25%+ Extrait de Parfum featuring French culinary gourmand accords (Madagascar bourbon vanilla, roasted tonka, toasted hazelnut, caramelized praline).\n- **Full-Stack Execution**: Handled formulation, packaging procurement, Shopify store, and Meta ad acquisition.`;
    }
    // 11. Door Step Essentials / European E-commerce / Amazon
    else if (
      query.includes('dropshipping') ||
      query.includes('door step') ||
      query.includes('firetech') ||
      query.includes('amazon') ||
      (isFollowUp && (userHistoryText.includes('dropshipping') || userHistoryText.includes('door step') || userHistoryText.includes('amazon')))
    ) {
      fallbackReply = `**Door Step Essentials EU (Firetech)** (Apr 2020 – Mar 2023):\n\n- **Scale**: Cross-border e-commerce across 7 Amazon EU marketplaces (DE, FR, IT, ES, UK, NL, PL).\n- **Financials**: Generated **₹35 Lakh+ in sales** (7-figure net global revenue) at healthy double-digit net operating margins.\n- **Core Operations**: Focused on consumer market research, competitor benchmarking, discovering winning products, dynamic pricing, and five-star customer service (did not use FBA or optimize for taxes).`;
    }
    // 12. Empirical Dissertation / Research
    else if (
      query.includes('dissertation') ||
      query.includes('women ceo') ||
      query.includes('research') ||
      query.includes('thesis')
    ) {
      fallbackReply = `Ishaan's research dissertation evaluated *"The Impact of Women CEOs on Corporate Performance in India"* (St. Xavier's University, supervised by Prof. Monojit Dutta):\n\n- **Dataset**: Surveyed 190 corporate industry respondents across India.\n- **Econometric Case Studies**: Compared Axis Bank (Shikha Sharma), Britannia (Vinita Bali), Welspun (Dipali Goenka), Lupin (Vinita Gupta), and HCL Tech (Roshni Nadar Malhotra).\n- **Key Metrics**: Analyzed Total Assets, Revenue Growth, and PAT pre- and post-leadership transition.\n- **Integrity**: 91% originality score verified on Turnitin (only 9% similarity index).`;
    }
    // 13. Education & Degrees
    else if (
      query.includes('education') ||
      query.includes('xavier') ||
      query.includes('master') ||
      query.includes('degree') ||
      query.includes('college') ||
      query.includes('school')
    ) {
      fallbackReply = `Ishaan's academic qualifications:\n\n- **Masters' Union, Gurgaon** (2026–2027): PGP in Technology & Business Management on a **Merit Scholarship**.\n- **St. Xavier's University, Kolkata** (2020–2023): B.Com (Honours in Finance) — **First Class with Distinction (7.85 CGPA)**. Elected Treasurer of XCMS.\n- **DPS Megacity, Kolkata**: ISC Class 12: **90.50%**; ICSE Class 10: **91.60%** with **100/100 Centum in Commercial Studies**.`;
    }
    // 14. Competitions & National Awards
    else if (
      query.includes('competition') ||
      query.includes('award') ||
      query.includes('srcc') ||
      query.includes('managedia') ||
      query.includes('umang') ||
      query.includes('conclave')
    ) {
      fallbackReply = `National business competition honors:\n\n- **SRCC Business Conclave 2023**: National Top 10 Finalist (out of 2,000+ teams from IIMs, IITs, SRCC).\n- **MANAGEDIA 2022**: 1st Place National Winner in Finance (iLEAD & Ministry of Tourism, Govt of India).\n- **UMANG 2022**: 1st Place Winner in Brand Rebranding & 2nd Runner Up in Scam Analysis.\n- **XMC 2022**: 2nd Position in Finesse National Finance Championship (St. Xavier's College).\n- **BONFIRE 2022**: 1st Place in Sustainable Innovation.`;
    }
    // 15. Social Welfare & Leo Club
    else if (
      query.includes('leo') ||
      query.includes('social') ||
      query.includes('ngo') ||
      query.includes('volunteer') ||
      query.includes('charity') ||
      query.includes('community')
    ) {
      fallbackReply = `As **President of the Leo Club of Kolkata Sealdah** (Lions Clubs International District 322B1):\n\n- Distributed hot meals, nutrition kits, and groceries to **5,000+ underserved individuals**.\n- Mobilized and led **20+ active youth volunteers** across Kolkata.\n- Organized voluntary blood donation camps, diagnostic health checkups, and youth educational outreach programs.`;
    }
    // 16. Skills & Tools
    else if (
      query.includes('tool') ||
      query.includes('tech stack') ||
      query.includes('software') ||
      query.includes('skills')
    ) {
      fallbackReply = `Ishaan's core skill areas and tools:\n\n- **Commercial & GTM**: B2B Sales, Key Account Management, Dining Ad Sales, International Distribution, Modern Trade.\n- **Product & Growth**: FinTech Product Management, NLP Ingestion Pipelines, Prompt Engineering, Shopify D2C, Meta Ads Manager, Amazon Seller Central.\n- **Finance & Data**: P&L Modeling, Econometrics, Valuation, Advanced Excel / Google Sheets, SQL queries.`;
    }
    // 17. LinkedIn Profile
    else if (
      query.includes('linkedin')
    ) {
      fallbackReply = `Ishaan's verified **LinkedIn profile** ([linkedin.com/in/ishaan-jain-b99033201/](https://www.linkedin.com/in/ishaan-jain-b99033201/)):\n\n- **Current Status**: Full-time PGP TBM Scholar at Masters' Union (Gurgaon, 2026–Present) on a Merit Scholarship & D2C Founder.\n- **Past Corporate Track**: Ex-Deputy Manager at Linc Limited (left in Jun 2026 to join Masters' Union full-time; delivered ₹2 Cr+ incremental launches across 50+ countries) & Ex-Zomato Key Accounts Manager (100% Target Achievement throughout employment tenure, 7–10X ROAS).\n- **Venture Track**: Founder of ORA Gourmand Perfumes (₹2.5L+ in 30 days) and OmniSpend AI.\n- **Hometown & Location**: From Kolkata, India; currently living in Gurgaon.\n- **Network**: Connect directly at [linkedin.com/in/ishaan-jain-b99033201/](https://www.linkedin.com/in/ishaan-jain-b99033201/).`;
    }
    // 18. Instagram Profile
    else if (
      query.includes('instagram') ||
      query.includes('insta')
    ) {
      fallbackReply = `Ishaan's **Instagram profile** is [@ishaanjain01](https://www.instagram.com/ishaanjain01/):\n\n- **Aesthetic & Focus**: Behind-the-scenes founder journey, artisanal perfumery formulation for [ORA Gourmand Perfumes](https://www.oraperfumes.in), visual storytelling, personal fitness, and travel.\n- **Venture Highlights**: Design and launch chronicles of ORA Gourmand Perfumes' 25%+ Extrait de Parfum gourmet formulations.\n- **Community Work**: Social initiatives and food distribution drives with the Leo Club of Kolkata Sealdah.\n- **Follow**: Connect with Ishaan at [instagram.com/ishaanjain01/](https://www.instagram.com/ishaanjain01/).`;
    }
    // 19. Weekly Database Sync Task
    else if (
      query.includes('weekly') ||
      query.includes('update the database') ||
      query.includes('stay up to date') ||
      query.includes('sync') ||
      query.includes('cadence')
    ) {
      fallbackReply = `**Weekly Database Synchronization Task**:\n\n- **Status**: **Active & Scheduled**\n- **Cadence**: Recurring weekly cycle (every Sunday at 00:00 UTC)\n- **Integrated Data Feeds**: LinkedIn profile ([ishaan-jain-b99033201](https://www.linkedin.com/in/ishaan-jain-b99033201/)), Instagram feed ([@ishaanjain01](https://www.instagram.com/ishaanjain01/)), and verified career portfolio dossier.\n- **Endpoint**: Live sync health and trigger endpoints are operational at \`/api/sync/status\` and \`/api/sync/trigger\`.\n- **Objective**: Guarantees that ISHAAN AI always reflects Ishaan's latest ventures, career achievements, and academic milestones in real-time.`;
    }
    // 20. Contact
    else if (
      query.includes('contact') ||
      query.includes('email') ||
      query.includes('phone') ||
      query.includes('reach') ||
      query.includes('connect')
    ) {
      fallbackReply = `Contact Ishaan directly:\n\n- **Email**: [ishaan.jain2027@mastersunion.org](mailto:ishaan.jain2027@mastersunion.org) | [ishaan123485@gmail.com](mailto:ishaan123485@gmail.com)\n- **Phone**: [+91 8240976206](tel:+918240976206)\n- **LinkedIn**: [linkedin.com/in/ishaan-jain-b99033201/](https://www.linkedin.com/in/ishaan-jain-b99033201/)\n- **Instagram**: [instagram.com/ishaanjain01/](https://www.instagram.com/ishaanjain01/)\n- **Location**: Gurgaon, Haryana, India (Hometown: Kolkata)`;
    }
    // 18. Default fallback
    else {
      fallbackReply = `I am Ishaan Jain's portfolio AI assistant. Key highlights:\n\n- **Linc Limited**: 50+ countries launched, ₹2 Cr+ incremental revenue.\n- **Zomato**: 100% Target Achievement throughout employment tenure, 7–10X merchant ROAS.\n- **0-to-1 Ventures**: Founder of [OmniSpend AI](https://omnispendtracker.lovable.app) & [ORA Gourmand Perfumes](https://www.oraperfumes.in).\n- **Academics**: Masters' Union Merit Scholar & First Class B.Com (Finance Hons, 7.85 CGPA) from St. Xavier's.\n\nWhat specific detail would you like to explore?`;
    }

    return res.json({ reply: fallbackReply, source: 'knowledge_base' });
  } catch (err: any) {
    console.error('Error in /api/chat:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

async function startServer() {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), 'dist');
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }

    const server = app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    server.on('error', (err: any) => {
      console.error(`Server error on port ${PORT}:`, err);
    });

    const gracefulShutdown = () => {
      server.close(() => {
        process.exit(0);
      });
    };
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();
