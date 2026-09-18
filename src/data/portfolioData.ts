import { 
  ExperienceItem, 
  EducationItem, 
  VentureItem, 
  AchievementItem, 
  LeadershipItem, 
  TestimonialItem, 
  ProofDocument,
  NarrativeStage,
  ProjectShowcaseItem,
  SkillCategoryItem
} from '../types';

export const PERSONAL_INFO = {
  name: "Ishaan Jain",
  tagline: "International Business & Growth Professional | Masters' Union Scholar",
  subheadline: "Scaling consumer brands from zero-to-one into 50+ countries. Ex-Zomato KAM (100% Target Attainment & 7-10X ROAS), Ex-Linc Deputy Manager (₹2 Cr+ launches), and D2C Founder.",
  bio: "I am a high-velocity commercial growth strategist, e-commerce operator, and Masters' Union Merit Scholar with a sharp blend of financial analytical rigor and creative market intuition. Over the past 5 years, I've led multi-country export product launches across 50+ countries at Linc Limited, delivered ₹2 Cr+ incremental revenue in 3 quarters, scaled Kolkata's largest dining advertising portfolio at Zomato with unbroken 100% target attainment, and built a 7-figure cross-border e-commerce business in Europe. Today, I took ORA Gourmand Perfumes (www.oraperfumes.in) from 0 to 1, crossing ₹2.5 Lakh in revenue within its first 30 days, alongside building autonomous tools like OmniSpend.",
  email: "ishaan.jain2027@mastersunion.org",
  secondaryEmail: "ishaan123485@gmail.com",
  phone: "+91 8240976206",
  location: "Gurgaon, India (Hometown: Kolkata)",
  linkedin: "https://www.linkedin.com/in/ishaan-jain-b99033201/",
  linkedinHandle: "ishaan-jain-b99033201",
  instagram: "https://www.instagram.com/ishaanjain01/",
  instagramHandle: "@ishaanjain01",
  mastersUnionRoll: "PGP TBM 2026-Present",
  stats: [
    { label: "Global Reach", value: "50+ Countries", sub: "APAC, MEA, Europe & LATAM launches" },
    { label: "Incremental Launch Revenue", value: "₹2 Cr+", sub: "In 3 quarters at Linc Limited" },
    { label: "Zomato Sales Attainment", value: "100%", sub: "Only person in 12-member sales team" },
    { label: "Average Merchant ROAS", value: "7-10X", sub: "20% of Kolkata dining ad revenue" },
    { label: "ORA Perfumes (0 to 1)", value: "₹2.5L+ / 30 Days", sub: "Live at www.oraperfumes.in" },
    { label: "Cross-Border Venture Rev", value: "₹35 Lakh+", sub: "7-Figure net EU dropshipping" },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "linc-deputy-manager",
    company: "Linc Limited",
    role: "Deputy Manager – Product Growth & Market Development",
    department: "Corporate & MISMAT Department, Kolkata HO",
    location: "Kolkata, India",
    period: "Mar 2025 – Jun 2026",
    type: "Full-time",
    highlightMetric: "₹2 Cr+ Incremental Revenue & 50+ Countries",
    proofId: "doc-linc-appointment",
    proofName: "Appointment Letter & CTC Annexure",
    description: [
      "Led end-to-end global product launches of multiple writing instrument and stationery categories across 50+ countries in APAC, MEA, Europe, and LATAM.",
      "Coordinated with cross-functional teams (R&D, manufacturing, regulatory, logistics) to deliver new product introductions strictly aligned with international market demands.",
      "Generated ₹2 Cr+ incremental revenue through international product launch initiatives within 3 quarters in FY 2025-26.",
      "Orchestrated integrated ATL, BTL, and digital brand campaigns to maximize market awareness and accelerate consumer adoption.",
      "Customized product portfolios and bespoke packaging solutions to meet distinct regional and cultural compliance requirements across continents.",
      "Partnered closely with international distributors, regional sales agents, and commercial stakeholders to roll out localized trade marketing campaigns.",
      "Negotiated with international vendors and B2B/B2C exhibition partners, reducing global trade exhibition costs by ₹35 Lakhs.",
      "Expanded Pentonic's retail presence by securing increased shelf space and premium visibility within Modern Trade chains across European markets."
    ],
    coreSkills: [
      "International Business Development",
      "Global Trade Marketing",
      "Distributor Management",
      "Pricing & Packaging Strategy",
      "Vendor Negotiations",
      "Cross-Border Supply Chain"
    ]
  },
  {
    id: "zomato-kam",
    company: "Eternal Limited (Formerly Zomato)",
    role: "Key Accounts Manager – Revenue Growth & Portfolio Management",
    department: "City Accounts & Supply Team, Kolkata",
    location: "Kolkata, India",
    period: "Sep 2023 – Mar 2025",
    type: "Full-time",
    highlightMetric: "100% Target Attainment & 20% City Ad Share",
    proofId: "doc-zomato-experience",
    proofName: "Experience Letter & Compensation Revision",
    description: [
      "Built a strategic restaurant partner portfolio from zero to one, achieving an unbroken 100% target attainment throughout the entire work tenure (sole achiever across a 12-member sales team).",
      "Delivered an average ROAS of 7-10X on ad spends for restaurant partners, turning advertising into a predictable high-margin revenue engine.",
      "Built and scaled Kolkata dining team's largest monthly ads portfolio from scratch, directly contributing approximately 20% of the entire city's dining ad revenue.",
      "Spearheaded the on-ground execution and merchant onboarding for the landmark 2024 Zomato Gold Dining Carnival in Kolkata.",
      "Consulted restaurant owners and key hospitality accounts on pricing architecture, promotional calendar design, and customer retention dynamics.",
      "Drove rapid merchant adoption of multiple new products on the dining platform through structured cross-selling and upselling frameworks.",
      "Promoted with an annual fixed compensation revision to INR 777,000 in recognition of exceptional performance and continued commitment to Eternal's growth."
    ],
    coreSkills: [
      "Key Account Management",
      "ROAS & Media Optimization",
      "Revenue Growth & P&L",
      "Client Relationship Management",
      "Merchant Negotiation",
      "Product Upselling"
    ]
  },
  {
    id: "zomato-intern",
    company: "Eternal Limited (Formerly Zomato)",
    role: "Dining Out Intern",
    department: "Supply Team, Kolkata",
    location: "Kolkata, India",
    period: "Jun 2023 – Sep 2023",
    type: "Internship",
    highlightMetric: "100+ Restaurants Onboarded & 1st Full-Time Conversion",
    proofId: "doc-zomato-intern-cert",
    proofName: "Zomato Internship Experience Certificate",
    description: [
      "Expanded Zomato's Kolkata dining partner footprint by personally acquiring and onboarding 100+ high-potential restaurants through direct merchant outreach.",
      "Achieved 100%+ target completion consistently and outperformed all core internship KPI benchmarks week over week.",
      "Awarded an internship extension and subsequently secured the first-ever full-time job offer ever awarded to an intern in the history of the Zomato Kolkata Dining Team."
    ],
    coreSkills: [
      "Merchant Acquisition",
      "Cold Outreach & Pitching",
      "Field Sales Execution",
      "Market Mapping",
      "Onboarding Operations"
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "masters-union",
    institution: "Masters' Union",
    degree: "Post Graduate Programme (PGP) in Technology & Business Management",
    period: "2026 – Present",
    location: "Gurgaon, India",
    grade: "Merit Scholarship Holder",
    highlights: [
      "Recipient of competitive Merit Scholarship recognizing demonstrated business leadership and commercial excellence.",
      "Founder of ORA Gourmand Perfumes—a mass premium direct-to-consumer fragrance brand scaled from 0 to 1, crossing ₹2.5L+ in its first 30 days.",
      "Advanced coursework in Tech Strategy, Venture Building, Commercial Finance, and AI-driven growth models."
    ]
  },
  {
    id: "st-xaviers",
    institution: "St. Xavier's University, Kolkata",
    degree: "Bachelor of Commerce (Honours) in Finance",
    period: "2020 – 2023",
    location: "Kolkata, India",
    grade: "CGPA 7.85 / 10.0 (First Class, 72.96% Aggregate)",
    highlights: [
      "Elected Treasurer of Xavier's Commerce & Management Society (XCMS) directing society budgeting for 200+ members.",
      "Authored a 24-page empirical research dissertation: 'A Study on the challenges faced by women CEOs and their success rate as leaders of their organization' under Prof. Monojit Dutta.",
      "Secured 5 podium finishes at national-level inter-college business and finance case competitions.",
      "Earned glowing letters of recommendation from Dr. Vivek Kumar Verma and Dr. Monalika Dey."
    ],
    proofId: "doc-sxuk-transcript",
    subjectsOrCourses: [
      { name: "Financial Accounting", score: "97/100", grade: "O (10)" },
      { name: "Cost Accounting", score: "86/100", grade: "A+ (9)" },
      { name: "Management Accounting", score: "86/100", grade: "A+ (9)" },
      { name: "Management Principles & Apps", score: "84/100", grade: "A+ (9)" },
      { name: "E-Commerce (Theory & Practical)", score: "84/100", grade: "A+ (9)" },
      { name: "Business Maths & Stats I", score: "83/100", grade: "A+ (9)" },
      { name: "Macro Economics", score: "82/100", grade: "A+ (9)" },
      { name: "Income Tax Law & Practice", score: "82/100", grade: "A+ (9)" },
      { name: "Computer Applications in Business", score: "81/100", grade: "A+ (9)" },
      { name: "Principles of Marketing", score: "72/100", grade: "A (8)" },
      { name: "Indirect Tax Law", score: "72/100", grade: "A (8)" },
      { name: "Business Research Methods", score: "72/100", grade: "A (8)" }
    ]
  },
  {
    id: "dps-megacity",
    institution: "Delhi Public School Megacity, Kolkata",
    degree: "High School (ISC & ICSE Commerce)",
    period: "2005 – 2020",
    location: "Kolkata, India",
    grade: "ISC Class 12: 90.50% | ICSE Class 10: 91.60%",
    highlights: [
      "Scored a perfect 100/100 in Commercial Studies in ICSE Class 10 board exams.",
      "Scored 94 in Commerce, 91 in Accounts, and 91 in Economics in ISC Class 12 board exams.",
      "Served as Captain of the Interact Club (Social Wing) spearheading community welfare initiatives.",
      "Selected as 1 of 8 Board of Directors for Megabizz 2019 inter-school business fest.",
      "Active player on the school cricket team."
    ],
    proofId: "doc-icse-isc"
  }
];

export const VENTURES: VentureItem[] = [
  {
    id: "omnispend-tracker",
    name: "OmniSpend AI Spend Tracker",
    tagline: "Autonomous AI-Powered Gmail & SMS Spend Extraction, Categorization & Recurring Subscription Engine",
    period: "2026 – Present",
    status: "Live Web Application",
    category: "AI & Consumer FinTech",
    revenueOrImpact: "Deployed at omnispendtracker.lovable.app",
    description: [
      "Conceived, built, and launched OmniSpend (https://omnispendtracker.lovable.app), an autonomous spend tracker that automatically extracts debit receipts directly from Gmail inboxes and raw SMS/text alerts.",
      "Engineered an automated categorization system using natural language parsing to eliminate manual spreadsheet tracking and provide real-time category spending health charts.",
      "Built an intelligent recurring expense engine that automatically detects subscription cycles (Netflix, Spotify, AWS, Gym, utilities) and warns users of upcoming renewals."
    ],
    metrics: [
      { label: "Live App", value: "omnispendtracker.lovable.app" },
      { label: "Core Tech", value: "AI NLP & Gmail Parsing" },
      { label: "Key Feature", value: "Auto-Recurring Spend Engine" }
    ],
    tags: ["AI App", "FinTech", "Gmail Parsing", "NLP Categorization", "Recurring Engine"]
  },
  {
    id: "ora-gourmand",
    name: "ORA Gourmand Perfumes",
    tagline: "Artisanal Mass Premium Gourmand Fragrance Brand · ₹2.5L+ in First 30 Days",
    period: "2026 – Present",
    status: "Live Brand (www.oraperfumes.in)",
    category: "Mass Premium D2C Fragrance",
    revenueOrImpact: "₹2.5 Lakh+ in First 30 Days",
    description: [
      "Direct-to-consumer mass premium perfume brand focusing on decadent gourmand olfactory profiles (rich vanilla, toasted hazelnut, roasted tonka bean, amber florals).",
      "Conceived, formulated, and taken from 0 to 1 independently by Ishaan, crossing ₹2.5 Lakh in revenue in its first 30 days of commercial launch.",
      "Engineered sensory-first visual branding, sustainable glass flacons, bespoke packaging, and the live D2C storefront at www.oraperfumes.in."
    ],
    metrics: [
      { label: "Traction", value: "₹2.5L+ in 30 Days" },
      { label: "Category", value: "Mass Premium Gourmand" },
      { label: "Storefront", value: "www.oraperfumes.in" }
    ],
    tags: ["Mass Premium D2C", "Artisanal Formulation", "E-Commerce", "0-to-1 Scale"]
  },
  {
    id: "doorstep-essentials",
    name: "Door Step Essentials EU (Firetech)",
    tagline: "Cross-Border Amazon E-Commerce Enterprise across Germany, France, Italy & UK",
    period: "Apr 2020 – Mar 2023",
    status: "Successfully Scaled & Exited",
    category: "Cross-Border E-Commerce & Dropshipping",
    revenueOrImpact: "₹35 Lakh+ / 7-Figure Net Global Revenue",
    proofId: "doc-amazon-seller",
    description: [
      "Founded and bootstrapped a multi-marketplace European e-commerce business operating on Amazon Europe (DE, FR, IT, ES, UK, NL, PL) under the legal name Firetech.",
      "Spearheaded rigorous market research and competitor benchmarking to uncover high-demand product niches and untapped consumer needs.",
      "Mastered dynamic price positioning to balance sales velocity with healthy double-digit operating margins while competing effectively in crowded European categories.",
      "Prioritized exceptional buyer satisfaction and customer service across 7 European countries, maintaining high seller ratings and low return rates."
    ],
    metrics: [
      { label: "Net Revenue", value: "₹35 Lakhs+ / €20K+" },
      { label: "Marketplaces", value: "Germany, UK, France, Italy, Spain, NL, Poland" },
      { label: "Operating Margin", value: "Healthy Double-Digit Net" }
    ],
    tags: ["Market Research", "Competitor Analysis", "Product Selection", "Dynamic Pricing", "Customer Service"]
  },
  {
    id: "women-ceo-research",
    name: "Women CEOs & Corporate Performance in India",
    tagline: "24-Page Empirical Academic Dissertation at St. Xavier's University",
    period: "2022 – 2023",
    status: "Published Undergrad Thesis",
    category: "Financial Economics & Corporate Governance",
    revenueOrImpact: "190 Validated Survey Responses + 5 Public Firms",
    proofId: "doc-dissertation",
    description: [
      "Rigorous study examining the impact of female CEO leadership on company financial metrics (Total Income, PAT, Total Assets) following transitions from male predecessors.",
      "Researched 5 marquee Indian corporate case studies: Axis Bank (Shikha Sharma), Britannia (Vinita Bali), Welspun India (Dipali Goenka), Lupin (Vinita Gupta), and HCL Tech (Roshni Nadar Malhotra).",
      "Surveyed 190 validated industry professionals to investigate institutional barriers, work-life pressures, and structural biases in executive leadership.",
      "Turnitin verified originality with just 9% similarity index under academic supervision of Prof. Monojit Dutta."
    ],
    metrics: [
      { label: "Survey Sample", value: "190 Validated Respondents" },
      { label: "Originality Index", value: "91% Original (9% Match)" },
      { label: "Case Studies", value: "Axis, Britannia, Welspun, Lupin, HCL" }
    ],
    tags: ["Financial Econometrics", "Corporate Governance", "Primary Research", "Gender Equity"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-zomato-attainment",
    title: "100% Target Attainment Across Entire Tenure",
    event: "Sales Excellence Recognition",
    organizer: "Eternal Limited (Formerly Zomato)",
    rank: "Sole 100% Achiever",
    year: "2023 - 2025",
    category: "Corporate Milestone",
    description: "The only individual in the entire 12-member Kolkata sales team to maintain 100% quota attainment across every single quarter, driving 20% of total city dining ad revenue with 7-10X ROAS.",
    iconName: "TrendingUp",
    proofId: "doc-zomato-experience"
  },
  {
    id: "ach-managedia-finance",
    title: "1st Place Winner – Finance Event",
    event: "MANAGEDIA 2022 ('Serendipity: Nothing is a Coincidence')",
    organizer: "iLEAD in association with Ministry of Tourism, Govt of India",
    rank: "Winner (1st Place)",
    year: "May 2022",
    category: "Finance",
    description: "Secured first prize in the national-level collegiate finance challenge solving complex valuation, portfolio risk, and capital budgeting problems.",
    iconName: "Award",
    proofId: "doc-award-managedia"
  },
  {
    id: "ach-umang-rebranding",
    title: "Winner – 'Naam Wahi Pechaan Nayi' (Brand Rebranding)",
    event: "UMANG 2022 ('India 75+75')",
    organizer: "The Bhawanipur Education Society College",
    rank: "Winner (1st Place)",
    year: "2022",
    category: "Rebranding & Marketing",
    description: "Won 1st place for redesigning an established consumer brand identity, crafting a comprehensive go-to-market pivot, visual overhaul, and narrative campaign.",
    iconName: "Trophy",
    proofId: "doc-award-umang-rebranding"
  },
  {
    id: "ach-srcc-top10",
    title: "Top 10 Finalist Nationally",
    event: "SRCC Business Conclave 2023",
    organizer: "Shri Ram College of Commerce (SRCC), Delhi",
    rank: "Top 10 Nationally (out of 2,000+ teams)",
    year: "2023",
    category: "National Case Comp",
    description: "Evaluated among more than 2,000 premier undergraduate and business school teams across India, navigating rigorous consulting and corporate strategy rounds.",
    iconName: "Flame"
  },
  {
    id: "ach-xmc-finesse",
    title: "2nd Position – 'Finesse' (Finance Championship)",
    event: "XMC '22",
    organizer: "Xavier's Management Society, St. Xavier's College (Autonomous)",
    rank: "2nd Position (Runner Up)",
    year: "April 2022",
    category: "Finance",
    description: "Awarded 2nd position in 'Finesse', a grueling 2-day national finance event testing equities research, mergers & acquisitions modeling, and stress testing.",
    iconName: "Medal",
    proofId: "doc-award-xmc"
  },
  {
    id: "ach-umang-scam",
    title: "2nd Runner Up – 'Garbar Ghotala' (Corporate Forensic Analysis)",
    event: "UMANG 2022",
    organizer: "The Bhawanipur Education Society College",
    rank: "2nd Runner Up",
    year: "2022",
    category: "Finance",
    description: "Investigated and presented forensic financial breakdowns of major corporate accounting scandals, fraudulent shell networks, and auditing failures.",
    iconName: "ShieldAlert",
    proofId: "doc-award-umang-scam"
  },
  {
    id: "ach-bonfire-waste",
    title: "1st Place – 'Best Out of Waste' Sustainable Innovation",
    event: "BONFIRE '22 Inter-College Management Fest",
    organizer: "Dept of Business Administration, The Bhawanipur Education Society",
    rank: "1st Place",
    year: "2022",
    category: "Rebranding & Marketing",
    description: "Pioneered a functional circular-economy commercial model transforming post-industrial scrap into high-utility lifestyle goods.",
    iconName: "Sparkles",
    proofId: "doc-award-bonfire"
  },
  {
    id: "ach-perfect-commerce",
    title: "100/100 Perfect Score in Commercial Studies",
    event: "ICSE Class X National Board Examination",
    organizer: "Council for the Indian School Certificate Examinations (CISCE)",
    rank: "Perfect 100",
    year: "2018",
    category: "Academics",
    description: "Attained a centum (100 out of 100) in Commercial Studies with a 91.60% overall board exam aggregate.",
    iconName: "CheckCircle",
    proofId: "doc-icse-isc"
  }
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    id: "lead-leo-club",
    organization: "Leo Club of Kolkata Sealdah (Lions Clubs District 322B1)",
    role: "President",
    period: "Aug 2024 – Sep 2024",
    impactMetrics: "5,000+ meals distributed & 20+ volunteers mobilized",
    proofId: "doc-leo-club",
    responsibilities: [
      "Chartered and led the Leo Club as President under Lions Clubs International.",
      "Spearheaded large-scale food distribution drives providing essential warm nutrition to over 5,000 underserved individuals in Kolkata.",
      "Mobilized and coordinated a passionate team of 20+ young active volunteers for grassroots civic impact.",
      "Organized community blood donation drives, health check-up camps, and educational awareness sessions with neighborhood welfare authorities."
    ]
  },
  {
    id: "lead-xcms",
    organization: "Xavier's Commerce and Management Society (XCMS)",
    role: "Treasurer (2022-23) & Sub-Committee Member (2021-22)",
    period: "2021 – 2023",
    impactMetrics: "200+ members & 10+ inter-collegiate flagship events",
    proofId: "doc-xcms-cert",
    responsibilities: [
      "Elected Treasurer among 200+ competitive peers to manage all institutional society finances, budgeting, and event sponsorships.",
      "Audited departmental expenditure statements and allocated funds for national symposiums and business case meets.",
      "Previously served as an active Sub-Committee member (2021-22), curating academic workshops and student engagement panels."
    ]
  },
  {
    id: "lead-interact",
    organization: "Interact Club of DPS Megacity",
    role: "Captain (Social Wing)",
    period: "2018 – 2020",
    impactMetrics: "Multi-school outreach & donation campaigns",
    responsibilities: [
      "Led the youth social wing of Rotary International at DPS Megacity.",
      "Coordinated clothing drives, primary education tutoring, and disaster relief collections."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-monalika",
    author: "Dr. Monalika Dey",
    designation: "Assistant Professor & Secretary, Board of Studies for B.M.S.",
    institution: "Faculty of Commerce & Management, St. Xavier's University",
    date: "May 2023",
    proofId: "doc-lor-monalika",
    quote: "Ishaan has displayed particular interest in several discussions held in the classroom pertaining to trends in Management and Marketing. He possesses rare qualities like innovative thinking, problem solving, creativity, entrepreneurial spirit, leadership, confidence, and the self-belief to try something new. He would bring unique optimism, skill, and passion along with his creativity into any institution."
  },
  {
    id: "test-vivek",
    author: "Dr. Vivek Kumar Verma",
    designation: "Assistant Professor, Faculty of Commerce & Management",
    institution: "St. Xavier's University, Kolkata",
    date: "May 2023",
    proofId: "doc-lor-vivek",
    quote: "Mr. Jain has proven himself to be a hardworking, enthusiastic, dedicated, and committed student to his professors as well as a helpful student to his peers. He has performed exceptionally well in his academics and demonstrated that he is efficient and can multitask well. He has the depth of understanding concepts and can put theory into practice."
  },
  {
    id: "test-zomato",
    author: "Daminee Sawhney",
    designation: "VP, Operations",
    institution: "Eternal Limited (Formerly Zomato)",
    date: "April 2025",
    proofId: "doc-zomato-experience",
    quote: "Ishaan was working at Eternal Limited from 08-Sep-2023 to 13-Mar-2025 as Key Accounts Manager in the Supply team. We thank him for his contribution and wish him the very best in all his future endeavors."
  }
];

export const PROOF_DOCUMENTS: Record<string, ProofDocument> = {
  "doc-linc-appointment": {
    id: "doc-linc-appointment",
    title: "Official Appointment Letter & Compensation Contract",
    issuer: "Linc Limited (Aurora Waterfront, Kolkata)",
    issueDate: "17th March 2025",
    category: "work",
    referenceNumber: "Ref: Offer 21st Feb 2025 / Kolkata HO",
    fileLabel: "Linc_Appointment_Ishaan_Jain.pdf",
    metadataBadges: ["Verified Employment", "CTC: ₹13,46,000", "Deputy Manager"],
    highlights: [
      "Appointed as Deputy Manager in the Corporate & MISMAT Department at Kolkata Head Office.",
      "Fixed CTC of ₹13,44,000 + Product Coupon ₹2,000 = Total Annual CTC of ₹13,46,000.",
      "Monthly Gross Salary of ₹1,02,008 with Net Take Home exceeding ₹1,00,000/month.",
      "Signed and authenticated by R.N. Mishra, Manager Admin, Linc Limited."
    ],
    fullSummary: "Complete 10-page verified corporate appointment contract issued by Linc Limited, confirming Ishaan Jain's appointment as Deputy Manager - Corporate & MISMAT at the Kolkata Head Office. The annexure outlines the full compensation structure of ₹13.46 LPA and role parameters covering global writing instrument portfolio growth."
  },
  "doc-zomato-experience": {
    id: "doc-zomato-experience",
    title: "Experience Certificate & Full-Time Service Record",
    issuer: "Eternal Limited (Formerly known as Zomato Limited)",
    issueDate: "16th April 2025",
    category: "work",
    referenceNumber: "Emp ID: Z23556",
    fileLabel: "Eternal_Zomato_Relieving_Experience.pdf",
    metadataBadges: ["Key Accounts Manager", "Supply Team", "Verified Tenure"],
    highlights: [
      "Certifies employment at Eternal Limited (Zomato) from 08-Sep-2023 to 13-Mar-2025 as Key Accounts Manager.",
      "Confirmed unbroken 100% target attainment throughout tenure, managing the highest-yield dining ads portfolio in Kolkata.",
      "Accompanied by July 2024 Compensation Plan revising annual fixed salary to INR 777,000.",
      "Endorsed by Daminee Sawhney, VP Operations, Zomato Limited."
    ],
    fullSummary: "Official experience certificate and compensation revision letters confirming Ishaan Jain's tenure as Key Accounts Manager in the Supply & Dining Out team at Eternal / Zomato, along with the July 2024 increment letter confirming fixed compensation revision to ₹7,77,000."
  },
  "doc-zomato-intern-cert": {
    id: "doc-zomato-intern-cert",
    title: "Internship Certificate & Full-Time Conversion Record",
    issuer: "Zomato Limited",
    issueDate: "23rd October 2023",
    category: "work",
    referenceNumber: "Intern ID: ZI1840",
    fileLabel: "Zomato_Internship_Certificate.pdf",
    metadataBadges: ["Dining Out Intern", "100+ Onboardings", "Full-Time Conversion"],
    highlights: [
      "Completed internship in the Supply Team from 06-Jun-2023 to 07-Sep-2023.",
      "Exceeded all KPIs, onboarded 100+ dining merchants, and earned the first-ever full-time conversion in Kolkata Dining history."
    ],
    fullSummary: "Formal certification of internship completion at Zomato Limited, leading to direct selection and conversion as Key Accounts Manager."
  },
  "doc-sxuk-transcript": {
    id: "doc-sxuk-transcript",
    title: "Official Academic Transcript & Degree Records",
    issuer: "St. Xavier's University, Kolkata",
    issueDate: "20th July 2023",
    category: "education",
    referenceNumber: "Transcript No: XK-01/02-31/00737-23 | Roll No: 1122",
    fileLabel: "SXUK_Official_Transcript_BCom_Finance.pdf",
    metadataBadges: ["CGPA: 7.85 / 10.0", "First Class (Class I)", "Total: 1897 / 2600"],
    highlights: [
      "Bachelor of Commerce (Honours) in Finance with First Class distinction.",
      "High marks: Financial Accounting (97/100 - Grade O/10), Cost Accounting (86/100 - Grade A+), Management Accounting (86/100 - Grade A+).",
      "Earned 148 total credits across 6 semesters with peak semester SGPA of 9.00.",
      "Signed by Controller of Examinations and Vice Chancellor."
    ],
    fullSummary: "Comprehensive 4-page official university transcript listing every course, internal continuous assessment marks, semester-end marks, credit weightings, and cumulative grade point average of 7.85/10.0."
  },
  "doc-mu-scholarship": {
    id: "doc-mu-scholarship",
    title: "Masters' Union — Official Merit Scholarship Award Letter & Docket",
    issuer: "Masters' Union School of Business (DLF Cyberpark, Gurugram)",
    issueDate: "June 2025",
    category: "education",
    referenceNumber: "Ref: MU/PGP-TBM/2026-27/MS-042",
    fileLabel: "Masters_Union_Merit_Scholarship_Letter.pdf",
    metadataBadges: ["Merit Scholarship", "PGP TBM Cohort", "Business Leadership"],
    highlights: [
      "Awarded prestigious Institutional Merit Scholarship for Flagship Post Graduate Programme in Technology & Business Management (PGP TBM).",
      "Recognized demonstrated 0-to-1 entrepreneurial capability, cross-border European e-commerce scale, and commercial enterprise leadership.",
      "Conferred by the Academic Council & Admissions Directorate, Masters' Union School of Business."
    ],
    fullSummary: "Official letter of scholarship and admission award from Masters' Union, recognizing Ishaan Jain's commercial track record and awarding a competitive Merit Scholarship for the PGP TBM cohort."
  },
  "doc-dissertation": {
    id: "doc-dissertation",
    title: "Undergraduate Dissertation: 'A Study on Challenges Faced by Women CEOs in India'",
    issuer: "Dept of Commerce, St. Xavier's University",
    issueDate: "May 2023",
    category: "education",
    referenceNumber: "Reg No. XK01-1112-0641-20 / Roll 1122",
    fileLabel: "Ishaan_Jain_Dissertation_Women_CEOs.pdf",
    metadataBadges: ["24 Pages", "190 Survey Sample", "Turnitin 91% Score"],
    highlights: [
      "In-depth empirical research on challenges faced by women CEOs and post-appointment financial impact.",
      "Case studies and balance sheet trend analysis for Axis Bank (Shikha Sharma), Britannia (Vinita Bali), Welspun (Dipali Goenka), Lupin (Vinita Gupta), HCL Tech (Roshni Nadar Malhotra).",
      "Surveyed 190 validated participants examining access to capital, bias, networking, and leadership stereotypes.",
      "Originality verification via Turnitin originality report showing 91% score (9% similarity index)."
    ],
    fullSummary: "Complete 24-page research study comprising conceptual framework, literature review of 15 papers, empirical survey analysis, corporate financial graphs, and policy recommendations."
  },
  "doc-amazon-seller": {
    id: "doc-amazon-seller",
    title: "Amazon Services Europe Seller Central Statements (Firetech)",
    issuer: "Amazon Services Europe S.à r.l.",
    issueDate: "Apr 2020 – Mar 2023",
    category: "venture",
    referenceNumber: "Store: doorstepessentialseu / Legal: Firetech",
    fileLabel: "Amazon_Seller_Statements_DE_UK_FR_IT_PL.pdf",
    metadataBadges: ["7-Figure Net Revenue", "€20,000+ EU Volume", "₹35 Lakh+ Sales"],
    highlights: [
      "Official seller account statements across Amazon Germany (EUR), Amazon UK (GBP), Amazon France (EUR), Amazon Italy (EUR), and Amazon Poland (PLN).",
      "Disbursement and revenue breakdown documenting over ₹35 Lakhs+ in cross-border e-commerce sales.",
      "Driven by granular market research, competitor gap analysis, dynamic pricing, and high-standard customer service."
    ],
    fullSummary: "Official Amazon Services Europe seller financial statements reflecting verified multi-currency sales, rigorous product selection, healthy unit economics, and customer satisfaction ratings across EU marketplaces."
  },
  "doc-award-managedia": {
    id: "doc-award-managedia",
    title: "Winner Trophy & Certificate – Finance at MANAGEDIA 2022",
    issuer: "iLEAD in assoc. with Ministry of Tourism, Govt of India",
    issueDate: "May 2022",
    category: "award",
    fileLabel: "Managedia_2022_Winner_Finance.jpg",
    metadataBadges: ["1st Place Trophy", "Ministry of Tourism Recognized"],
    highlights: [
      "Adjudged Winner for Finance at MANAGEDIA 2022 ('Serendipity: Nothing is a Coincidence').",
      "Signed by Pradip Chopra, Chairman, and Pragya Chopra, Executive Director, iLEAD."
    ],
    fullSummary: "Trophy and Certificate awarded to Ishaan Jain of St. Xavier's University for securing 1st place in the national finance championship."
  },
  "doc-award-umang-rebranding": {
    id: "doc-award-umang-rebranding",
    title: "Winner Trophy – 'Naam Wahi Pechaan Nayi' (Rebranding)",
    issuer: "The Bhawanipur Education Society College (UMANG 2022)",
    issueDate: "2022",
    category: "award",
    fileLabel: "Umang_2022_Winner_Rebranding.jpg",
    metadataBadges: ["Winner Trophy", "Brand Strategy"],
    highlights: [
      "1st Prize in brand strategy and corporate rebranding at UMANG 2022."
    ],
    fullSummary: "Official winner trophy presented to Ishaan Jain for winning the flagship brand turnaround competition."
  },
  "doc-award-umang-scam": {
    id: "doc-award-umang-scam",
    title: "2nd Runner Up Trophy – 'Garbar Ghotala' (Corporate Forensic Analysis)",
    issuer: "The Bhawanipur Education Society College (UMANG 2022)",
    issueDate: "2022",
    category: "award",
    fileLabel: "Umang_2022_Scam_RunnerUp.jpg",
    metadataBadges: ["Podium Finish", "Financial Forensics"],
    highlights: [
      "2nd Runner Up trophy for forensic evaluation of corporate fraud and balance sheet manipulation."
    ],
    fullSummary: "Official podium trophy awarded for forensic investigation of corporate governance breakdowns."
  },
  "doc-award-xmc": {
    id: "doc-award-xmc",
    title: "Certificate of Merit – 2nd Position in 'Finesse' (Finance)",
    issuer: "Xavier's Management Society, St. Xavier's College (Autonomous)",
    issueDate: "9th-10th April 2022",
    category: "award",
    fileLabel: "XMC_2022_Finesse_2nd_Position.jpg",
    metadataBadges: ["Certificate of Merit", "National Finance Event"],
    highlights: [
      "Secured 2nd position in 'Finesse - A Finance Event' at XMC '22.",
      "Endorsed by Rev. Fr. Peter Arockiam, Vice Principal, and Dr. Sukanya Sarkhel, Deputy President."
    ],
    fullSummary: "Certificate of Merit presented to Ishaan Jain representing St. Xavier's University at St. Xavier's College Autonomous."
  },
  "doc-award-bonfire": {
    id: "doc-award-bonfire",
    title: "Certificate of Achievement – 1st in 'Best Out of Waste'",
    issuer: "The Bhawanipur Education Society College (BONFIRE '22)",
    issueDate: "2022",
    category: "award",
    fileLabel: "Bonfire_2022_Best_Out_Of_Waste.jpg",
    metadataBadges: ["1st Place", "Circular Innovation"],
    highlights: [
      "Awarded 1st place in the Inter-College Management Fest BONFIRE '22 for sustainable product conceptualization."
    ],
    fullSummary: "Official Certificate of Achievement endorsed by Director General Prof. Dr. Suman K. Mukerjee and Department heads."
  },
  "doc-lor-monalika": {
    id: "doc-lor-monalika",
    title: "Letter of Academic & Professional Recommendation",
    issuer: "Dr. Monalika Dey (Secretary, Board of Studies for B.M.S., SXUK)",
    issueDate: "23rd May 2023",
    category: "recommendation",
    fileLabel: "LOR_Dr_Monalika_Dey.pdf",
    metadataBadges: ["Faculty Recommendation", "Leadership & Optimism"],
    highlights: [
      "Praised Ishaan's 'innovative thinking, problem solving, creativity, entrepreneurial spirit, leadership, and confidence'.",
      "Endorsed his ability to quickly put strategic theory into tangible execution."
    ],
    fullSummary: "Official signed Letter of Recommendation on University letterhead endorsing Ishaan Jain for advanced postgraduate programs."
  },
  "doc-lor-vivek": {
    id: "doc-lor-vivek",
    title: "Letter of Academic Recommendation",
    issuer: "Dr. Vivek Kumar Verma (Assistant Professor, Commerce & Management, SXUK)",
    issueDate: "10th May 2023",
    category: "recommendation",
    fileLabel: "LOR_Dr_Vivek_Verma.pdf",
    metadataBadges: ["Faculty Recommendation", "Analytical Rigor"],
    highlights: [
      "Recognized Ishaan as a 'hardworking, enthusiastic, dedicated, and committed student' who can multitask and put theory into practice.",
      "Highlighted his active contributions to university-level social units (Xaverians in Action) and Xavier's Commerce & Management Society."
    ],
    fullSummary: "Official signed recommendation letter on faculty letterhead attesting to academic excellence and ethical leadership."
  },
  "doc-xcms-cert": {
    id: "doc-xcms-cert",
    title: "Certificates of Appreciation – XCMS Treasurer & Sub-Committee",
    issuer: "Xavier's Commerce and Management Society (XCMS)",
    issueDate: "2021 – 2023",
    category: "award",
    fileLabel: "XCMS_Treasurer_Appreciation.jpg",
    metadataBadges: ["Society Treasurer", "Budgeting for 200+ Members"],
    highlights: [
      "Certificate of Appreciation for being the Treasurer in 2022-23.",
      "Certificate of Appreciation for active Sub-Committee membership in 2021-22.",
      "Signed by Dr. Somak Maitra, Dean, and Dr. Monalika Dey, Professor In-Charge."
    ],
    fullSummary: "Official certificates presented by St. Xavier's University recognizing Ishaan's financial leadership of the commerce society."
  },
  "doc-leo-club": {
    id: "doc-leo-club",
    title: "Leo Club of Kolkata Sealdah Charter & Organization Report",
    issuer: "Lions Clubs International (District 322B1)",
    issueDate: "August 2024",
    category: "award",
    fileLabel: "Leo_Club_Sealdah_Charter.pdf",
    metadataBadges: ["Club President", "5,000+ Meals", "District 322B1"],
    highlights: [
      "Ishaan Jain listed and signed as Leo Club President.",
      "Sponsored by Lions Club of Calcutta Sealdah.",
      "Led community outreach impacting over 5,000 underprivileged citizens."
    ],
    fullSummary: "Official organizational report submitted to Lions Clubs International headquarters confirming Ishaan Jain as Charter President of Leo Club of Kolkata Sealdah."
  },
  "doc-icse-isc": {
    id: "doc-icse-isc",
    title: "ICSE & ISC Board Exam Statements of Marks & Pass Certificates",
    issuer: "Council for the Indian School Certificate Examinations (CISCE)",
    issueDate: "2018 & 2020",
    category: "education",
    referenceNumber: "Unique ID: 6671179 / DPS Megacity Kolkata",
    fileLabel: "ICSE_ISC_Mark_Statements_Ishaan_Jain.pdf",
    metadataBadges: ["100/100 Commercial Studies", "ISC 90.50%", "ICSE 91.60%"],
    highlights: [
      "ICSE Class 10 (2018): 100/100 in Commercial Studies, 96 in HCG, 92 in Hindi, 91.60% aggregate.",
      "ISC Class 12 (2020): 94 in Commerce, 91 in Accounts, 91 in Economics, 90.50% aggregate.",
      "SUPW & Community Service: Grade A across both board examinations."
    ],
    fullSummary: "Official national board mark sheets and pass certificates issued by CISCE, New Delhi, verifying Ishaan's academic foundation in commerce, accountancy, and economics."
  }
};

export const SKILLS_DATA = [
  {
    category: "Commercial Strategy & Global Growth",
    skills: [
      { name: "International Business Development", level: 95, context: "Expanded Linc writing instruments to 50+ countries" },
      { name: "Global Trade Marketing & Distributors", level: 94, context: "Distributor partnerships across APAC, MEA, Europe & LATAM" },
      { name: "Key Account Management (KAM)", level: 98, context: "100% quota attainment across entire tenure at Zomato" },
      { name: "Export Product Launches", level: 92, context: "₹2 Cr+ incremental revenue in 3 quarters" },
      { name: "Pricing, Packaging & Regional Customization", level: 90, context: "Bespoke packaging compliance across global territories" },
      { name: "High-Stakes Vendor Negotiation", level: 93, context: "Saved ₹35 Lakhs in international exhibition contracts" }
    ]
  },
  {
    category: "Performance Marketing & E-Commerce",
    skills: [
      { name: "ROAS & Media Optimization", level: 96, context: "Delivered 7-10X average ROAS on Zomato dining ad portfolios" },
      { name: "Cross-Border Amazon Operations", level: 92, context: "Bootstrapped Firetech EU in DE, FR, IT, UK to 7-figure revenue" },
      { name: "0-to-1 D2C Brand Creation", level: 88, context: "Founding & scaling ORA Gourmand Perfumes to ₹2.5L+ in 30 days" },
      { name: "Marketplace SEO & Algorithmic Ranking", level: 90, context: "Organic & sponsored search capture on Amazon Seller Central" },
      { name: "Merchant Onboarding & Retention", level: 95, context: "Acquired 100+ dining merchants, executed Gold Carnival" }
    ]
  },
  {
    category: "Financial Rigor & Quantitative Modeling",
    skills: [
      { name: "Advanced Microsoft Excel (365 Certified)", level: 96, context: "Financial modeling, dynamic pivot tables & sensitivity analysis" },
      { name: "P&L Analysis & Margin Engineering", level: 94, context: "First Class B.Com in Finance, 97/100 Financial Accounting" },
      { name: "Empirical Business Research & Econometrics", level: 90, context: "Author of 24-page study on Women CEOs with 190 sample size" },
      { name: "Corporate Budgeting & Treasury", level: 92, context: "Managed annual budget for 200+ members as XCMS Treasurer" }
    ]
  }
];

export const NARRATIVE_STAGES: NarrativeStage[] = [
  {
    id: "stage-1-spark",
    chapterNumber: "01",
    title: "The Quantitative Spark & Academic Rigor",
    period: "2005 – 2023",
    location: "Kolkata, India",
    tagline: "Uncompromising academic discipline and an early fascination with commercial systems.",
    badge: "Foundation & First Principles",
    iconName: "GraduationCap",
    narrativeParagraphs: [
      "My affinity for numbers and commerce was never merely theoretical; it was an innate framework for understanding how the world creates value. From scoring a perfect 100/100 in Commercial Studies in high school (91.60% ICSE and 90.50% ISC) to graduating with a First Class Honours in Finance from St. Xavier's University (CGPA 7.85), I sought to master the mechanics of capital and corporate governance.",
      "At St. Xavier's, I didn't just study balance sheets—I authored a 24-page empirical research dissertation investigating the financial performance of women CEOs across India's premier public firms (Axis Bank, Britannia, Welspun, Lupin, HCL) with 190 verified respondents and a 91% Turnitin score. Concurrently, as Treasurer of Xavier's Commerce & Management Society, I managed real institutional funds, learning that numbers are only as powerful as the ethical stewardship behind them."
    ],
    milestones: [
      "Perfect 100/100 in Commercial Studies (ICSE Board)",
      "B.Com (Hons in Finance) First Class with Distinction (7.85 CGPA / 1897 Marks)",
      "Published 24-page Empirical Corporate Governance Dissertation (91% Originality)",
      "Elected Treasurer of Xavier's Commerce & Management Society (200+ Members)"
    ],
    personalityTraits: [
      "Analytical Discipline",
      "Empirical Inquisitiveness",
      "Fiscal Accountability",
      "Methodical Research"
    ],
    quote: "True commercial intelligence begins when you respect both the rigor of financial mathematics and the human incentives behind every decision.",
    quoteAuthor: "Ishaan Jain — On Academic Discipline"
  },
  {
    id: "stage-2-bootstrap",
    chapterNumber: "02",
    title: "Global E-Commerce Crucible & Cross-Border Grit",
    period: "2020 – 2023",
    location: "Pan-Europe & Kolkata",
    tagline: "Bootstrapping an Amazon cross-border business from a dorm room into Germany, UK & France.",
    badge: "Operational Audacity",
    iconName: "Globe2",
    narrativeParagraphs: [
      "While completing university during the global pandemic, I chose to test market theory in the unforgiving arena of international trade. I founded and bootstrapped Door Step Essentials EU (operating under Firetech), establishing active seller nodes across Amazon Germany, the United Kingdom, France, Italy, Spain, the Netherlands, and Poland.",
      "Over three intense years, I learned the granular reality of international commerce: conducting continuous market research, decoding competitor pricing strategies, identifying high-demand winning products, optimizing price points for sustainable margins, and delivering exceptional customer service. The enterprise generated ₹35 Lakhs+ (€20,000+) in cumulative top-line revenue with healthy double-digit margins."
    ],
    milestones: [
      "₹35 Lakhs+ (€20,000+) Net Cross-Border Turnover Generated",
      "Direct Operations across 7 European Amazon Marketplaces (DE, UK, FR, IT, ES, NL, PL)",
      "Rigorous Market Research, Competitor Analysis & Dynamic Pricing",
      "100% Bootstrapped with Healthy Double-Digit Net Operating Margins"
    ],
    personalityTraits: [
      "Entrepreneurial Resourcefulness",
      "Self-Directed Tenacity",
      "Multi-Currency Risk Tolerance",
      "Supply Chain Agility"
    ],
    quote: "Shipping products into Berlin, Milan, and London from India taught me that global trade isn't magic—it's systematic problem-solving under uncertainty.",
    quoteAuthor: "Ishaan Jain — On Bootstrapping Firetech EU"
  },
  {
    id: "stage-3-crucible",
    chapterNumber: "03",
    title: "Hyper-Growth, ROAS Engineering & The Quota Crucible",
    period: "2023 – 2025",
    location: "Kolkata, India",
    tagline: "Anchoring the city's largest dining ads portfolio at Zomato with unbroken 100% quota attainment.",
    badge: "Commercial Dominance",
    iconName: "TrendingUp",
    narrativeParagraphs: [
      "Joining Eternal Limited (Zomato) as Key Accounts Manager for Dining Out thrust me into one of India's most demanding hyper-growth tech environments. In a business where merchant trust is fiercely contested, I treated advertising not as a vanity line-item, but as an algorithmically dialed profit center for restaurateurs.",
      "By designing high-conversion ad architectures, optimizing dining carousels, and leading the flagship 2024 Zomato Gold Dining Carnival, I scaled Kolkata's largest dining ads portfolio to generate ~20% of the entire city's dining ad revenue. Most significantly, across every single quarter of my tenure, I remained the sole individual in a 12-member sales team to achieve 100% target attainment, consistently delivering 7-10X ROAS for marquee food & beverage partners."
    ],
    milestones: [
      "Sole 100% Sales Quota Attainment in a 12-Member Key Accounts Team across entire tenure",
      "Delivered ~20% of Kolkata's Total City Dining Ad Revenue",
      "Consistently achieved 7-10X Average ROAS for high-end bistros and microbreweries",
      "Spearheaded Merchant Acquisition for Zomato Gold Dining Carnival 2024"
    ],
    personalityTraits: [
      "Commercial Drive",
      "High-Empathy Negotiation",
      "Analytical Performance Pacing",
      "Extreme Accountability"
    ],
    quote: "Sales quota isn't just a quota—it's a sacred commitment between you, your merchants' unit economics, and your company's growth.",
    quoteAuthor: "Ishaan Jain — At Zomato"
  },
  {
    id: "stage-4-expansion",
    chapterNumber: "04",
    title: "Continental Expansion & Global Market Development",
    period: "2025",
    location: "Kolkata & Global Trade Routes",
    tagline: "Taking Indian manufacturing to 50+ countries as Deputy Manager at Linc Limited.",
    badge: "Global Strategy",
    iconName: "Compass",
    narrativeParagraphs: [
      "At Linc Limited (one of India's premier public writing instrument manufacturers), I stepped into the role of Deputy Manager in Product Growth & Market Development. My mission was straightforward yet complex: accelerate international export product adoption and penetrate lucrative Modern Trade chains across the globe.",
      "In just three quarters, our team spearheaded product launches across 50+ countries spanning APAC, MEA, Europe, and LATAM, delivering ₹2 Cr+ in incremental revenue. I championed customized retail packaging to meet stringent European compliance laws, negotiated high-stakes international exhibition contracts to save ₹35 Lakhs, and represented the brand at Paperworld Frankfurt. This chapter cemented my conviction that Indian brands can compete and win on the world stage."
    ],
    milestones: [
      "Expanded Linc Writing Products into 50+ Countries across APAC, MEA, Europe & LATAM",
      "Delivered ₹2 Cr+ in Incremental Product Launch Revenue in 3 Quarters",
      "Saved ₹35 Lakhs through Rigorous Vendor & Exhibition Negotiation",
      "Established European Modern Trade Distribution Channels compliant with EU packaging"
    ],
    personalityTraits: [
      "Cross-Cultural Acumen",
      "Strategic GTM Vision",
      "Tough Commercial Negotiation",
      "Global Trade Fluency"
    ],
    quote: "Taking a domestic legacy brand into 50+ countries requires more than translation—it requires deep cultural empathy and impeccable supply chain reliability.",
    quoteAuthor: "Ishaan Jain — At Linc Limited"
  },
  {
    id: "stage-5-vanguard",
    chapterNumber: "05",
    title: "Venture Alchemy, Masters' Union & Future Ambitions",
    period: "2026 – Present & Forward",
    location: "Gurgaon, India",
    tagline: "Scaling ORA Gourmand Perfumes (0 to 1 • ₹2.5L+ in 30 Days) on Merit Scholarship, with a hunger to build global consumer empires.",
    badge: "The Next Horizon",
    iconName: "Sparkles",
    narrativeParagraphs: [
      "Today, as a Merit Scholarship scholar in the Post Graduate Programme (PGP TBM) at Masters' Union, I am synthesizing every skill I've forged—quantitative finance, performance ad engines, European cross-border logistics, and enterprise sales—into building high-growth ventures.",
      "I founded ORA Gourmand Perfumes (live at www.oraperfumes.in), taking it from 0 to 1 and crossing ₹2.5 Lakh in revenue within its initial 30 days of launch. An artisanal mass premium fragrance brand engineered around rich culinary and olfactory gourmand notes (roasted tonka bean, Madagascar vanilla, toasted hazelnut, amber florals). Alongside venture creation, my civic grounding remains strong: having led hunger relief for 5,000+ citizens as President of Leo Club of Kolkata Sealdah, I believe true business leadership must always uplift society."
    ],
    milestones: [
      "Awarded Prestigious Merit Scholarship at Masters' Union (PGP TBM)",
      "Founded ORA Gourmand Perfumes (www.oraperfumes.in) — Taken 0 to 1, ₹2.5L+ Rev in 30 Days",
      "Led Civic Hunger Relief Missions for 5,000+ Citizens (Leo Club President)",
      "Prepared for Global Leadership Roles in Commercial Strategy & Multi-Country Expansion"
    ],
    personalityTraits: [
      "Sensory Brand Intuition",
      "Civic Responsibility",
      "Venture Builder Mindset",
      "Boundless Long-Term Ambition"
    ],
    futureAmbitionPointers: [
      "Scale ORA Gourmand Perfumes into a premier international D2C fragrance brand across India, the GCC, and Europe.",
      "Lead cross-border expansion and commercial growth for iconic consumer conglomerates or high-growth tech ventures.",
      "Bridge Indian manufacturing excellence with global premium consumer and institutional retail channels.",
      "Continue driving impactful social welfare initiatives, scaling hunger relief and educational access for underprivileged youth."
    ],
    quote: "My ambition is clear: to build and scale iconic consumer enterprises that combine quantitative precision, world-class design, and enduring societal value.",
    quoteAuthor: "Ishaan Jain — Future Vision"
  }
];

export const SKILL_CATEGORIES_DATA: SkillCategoryItem[] = [
  {
    id: "cat-commercial",
    name: "Strategic Commercial & Growth Leadership",
    shortLabel: "Commercial GTM",
    iconName: "Target",
    description: "Battle-tested enterprise sales execution, 100% quota attainment track record, international distributor negotiations, and multi-country product launch orchestration.",
    skills: [
      { name: "Key Account Management (KAM)", level: 98, context: "Anchored Kolkata's largest dining portfolio at Zomato", toolType: "discipline" },
      { name: "Sales Quota Attainment & Pacing", level: 100, context: "Sole achiever across 12-member sales team (100% all quarters)", toolType: "discipline" },
      { name: "International Distributor Pitching", level: 94, context: "Partnered across APAC, MEA, Europe, and LATAM", toolType: "discipline" },
      { name: "High-Stakes Contract Negotiation", level: 93, context: "Negotiated vendor contracts, saving ₹35 Lakhs at Linc", toolType: "discipline" },
      { name: "Modern Trade & Retail Merchandising", level: 91, context: "Launched compliant export retail lines across Europe", toolType: "discipline" }
    ]
  },
  {
    id: "cat-ecommerce",
    name: "Digital Performance & Cross-Border E-Commerce",
    shortLabel: "E-Commerce & Ads",
    iconName: "Globe2",
    description: "Hands-on operational mastery of multi-country Amazon marketplace mechanics, performance ad bidding, and algorithmic ranking to drive 7-10X merchant ROAS.",
    skills: [
      { name: "ROAS & Media Optimization", level: 96, context: "Delivered 7-10X average ROAS on Zomato ad portfolios", toolType: "analytics" },
      { name: "Amazon Europe Seller Central", level: 93, context: "Managed live operations in DE, FR, IT, UK, ES, NL, PL", toolType: "platform" },
      { name: "Market Research & Competitor Analysis", level: 93, context: "Category gap assessment, demand elasticity & product selection", toolType: "discipline" },
      { name: "Dynamic Pricing & Customer Experience", level: 92, context: "Margin optimization, competitive pricing & 5-star customer service", toolType: "discipline" },
      { name: "Marketplace SEO & PPC Bidding", level: 92, context: "Sponsored Products, keyword harvesting & conversion pacing", toolType: "platform" },
      { name: "0-to-1 D2C Brand Building & Scaling", level: 89, context: "Founding ORA Gourmand Perfumes and scaling to ₹2.5L+ in 30 days", toolType: "discipline" }
    ]
  },
  {
    id: "cat-finance",
    name: "Financial Rigor & Quantitative Modeling",
    shortLabel: "Financial Modeling",
    iconName: "BarChart3",
    description: "Academic foundation in First Class Finance from St. Xavier's University paired with practical commercial P&L engineering and empirical econometric research.",
    skills: [
      { name: "Advanced Financial Modeling (Excel 365)", level: 96, context: "Certified Microsoft Office Specialist; dynamic scenario modeling", toolType: "software" },
      { name: "P&L Ownership & Unit Economics", level: 94, context: "First Class B.Com in Finance; 97/100 in Financial Accounting", toolType: "discipline" },
      { name: "Empirical Econometric Research", level: 91, context: "Author of 24-page study on Women CEOs with 190 sample size", toolType: "analytics" },
      { name: "Cost & Management Accounting", level: 92, context: "Scored 86/100 in Cost & Management Accounting coursework", toolType: "discipline" },
      { name: "Corporate Budgeting & Treasury", level: 92, context: "Treasurer of Xavier's Commerce & Management Society (XCMS)", toolType: "discipline" }
    ]
  },
  {
    id: "cat-tools",
    name: "Platforms, Data Tech & Creative Suite",
    shortLabel: "Tools & Analytics",
    iconName: "Layers",
    description: "Technical proficiency across enterprise platforms, advertising consoles, statistical regression software, and brand development toolchains.",
    skills: [
      { name: "Microsoft Excel 365 (Certified Specialist)", level: 98, context: "Complex nested formulas, Power Query, pivot modeling", toolType: "software" },
      { name: "Zomato Merchant Portal & Ad Manager", level: 97, context: "Campaign scheduling, bidding auctions, CPC algorithms", toolType: "platform" },
      { name: "Amazon Seller Central & Advertising Console", level: 94, context: "Inventory forecasting, buy-box algorithms, multi-country reports", toolType: "platform" },
      { name: "SPSS & Turnitin Research Tools", level: 89, context: "Survey regression, correlation testing, academic integrity verification", toolType: "software" },
      { name: "Brand Visuals & CAD Mockups", level: 87, context: "Sensory packaging design, flacon CAD modeling for ORA Perfumes", toolType: "software" }
    ]
  }
];

export const FLAGSHIP_PROJECTS: ProjectShowcaseItem[] = [
  {
    id: "project-omnispend-ai",
    title: "OmniSpend AI Spend Tracker",
    subtitle: "Autonomous AI-Powered Gmail & SMS Spend Extraction, Categorization & Recurring Subscription Engine",
    category: "AI & Consumer FinTech",
    status: "Live Web App (omnispendtracker.lovable.app)",
    period: "2026 – Present",
    impactBadge: "Live AI FinTech App",
    summary: "An intelligent autonomous spend tracker web application that extracts transactional debits directly from your Gmail inbox or via raw text/SMS message inputs, auto-categorizes expenses via AI, provides financial health analytics in a clean dashboard, and identifies recurring subscriptions.",
    detailedDescription: [
      "Conceived, built, and launched OmniSpend (https://omnispendtracker.lovable.app), an autonomous AI-powered personal financial tracker designed to eliminate tedious manual budget spreadsheets.",
      "Features zero-friction inbox integration: extracts transactional receipts, bank alerts, and order confirmations automatically from connected Gmail accounts, while also supporting instant paste for raw SMS or bank notification text.",
      "Leverages natural language AI models to parse messy transaction strings into structured metadata—extracting merchant identity, transaction amount, currency, timestamp, and intelligent category classification (Food & Dining, Travel, Tech & Subscriptions, Shopping, Healthcare, Utilities).",
      "Automated recurring spend detector identifies subscription cadences (monthly, annual, weekly) such as Netflix, Spotify, AWS, Gym memberships, and utility bills, logging them into a recurring obligations calendar with predictive billing alerts.",
      "Equipped with an intuitive executive financial dashboard featuring real-time categorical burn charts, monthly cash-flow health metrics, recurring spend vs discretionary spend ratios, and instant transaction search."
    ],
    technologies: [
      { name: "AI Natural Language Processing", category: "AI & ML" },
      { name: "Gmail Inbox Parsing API", category: "Integration" },
      { name: "Automated Transaction Categorization", category: "Algorithms" },
      { name: "Recurring Spend Detection Engine", category: "FinTech" },
      { name: "Real-Time Financial Analytics Dashboard", category: "Analytics" },
      { name: "Modern Responsive Web App", category: "Frontend" }
    ],
    liveUrl: "https://omnispendtracker.lovable.app",
    liveUrlLabel: "Launch Live OmniSpend App",
    gallery: [
      {
        title: "AI Inbox & Message Spend Parser Simulator",
        caption: "Interactive natural language extraction of merchant, amount, category, and recurring status from raw text or Gmail alerts.",
        type: "mockup",
        visualKey: "omnispend-parser"
      },
      {
        title: "Executive Financial Health Dashboard",
        caption: "Visual breakdown of monthly spend distribution, category breakdown, cash flow velocity, and budget pacing.",
        type: "chart",
        visualKey: "omnispend-dashboard"
      },
      {
        title: "Smart Recurring Spend & Subscription Engine",
        caption: "Auto-detects recurring payment patterns (Netflix, AWS, Rent, Gym) and manages upcoming renewal schedules.",
        type: "image",
        visualKey: "omnispend-recurring"
      }
    ],
    metrics: [
      { label: "Live Application", value: "omnispendtracker.lovable.app" },
      { label: "Input Channels", value: "Gmail API + Raw Text / SMS" },
      { label: "Categorization", value: "100% Autonomous AI" },
      { label: "Recurring Engine", value: "Auto-Pattern Detection" }
    ]
  },
  {
    id: "project-ora-perfumes",
    title: "ORA Gourmand Perfumes",
    subtitle: "Artisanal Mass Premium Fragrance Brand Founded & Scaled 0 to 1",
    category: "Mass Premium D2C Fragrance",
    status: "Live Brand (₹2.5L+ in 30 Days)",
    period: "2026 – Present",
    impactBadge: "0 to 1 • ₹2.5L+ Rev in 30 Days",
    liveUrl: "https://www.oraperfumes.in",
    liveUrlLabel: "Visit Live Store (www.oraperfumes.in)",
    summary: "Artisanal direct-to-consumer mass premium fragrance brand taken from 0 to 1, crossing ₹2.5 Lakh in revenue in its first 30 days. Engineered around rich culinary-inspired gourmand accords, bespoke glass flacons, and direct-to-consumer digital acquisition at www.oraperfumes.in.",
    detailedDescription: [
      "ORA Gourmand Perfumes was conceived, founded, and launched by Ishaan Jain, successfully taking the venture from 0 to 1 and crossing ₹2.5 Lakh in revenue within its first 30 days of launch.",
      "The flagship formulation weaves together top notes of roasted tonka bean and bitter almond, a heart of toasted hazelnut and Madagascar vanilla orchid, resting on a deep base of molten amber, white musk, and aged sandalwood (high-concentration 25%+ Extrait de Parfum).",
      "As founder, Ishaan managed end-to-end execution: formulation sourcing, bespoke flacon packaging, digital performance marketing, and developing the live e-commerce storefront at www.oraperfumes.in to achieve rapid market traction."
    ],
    technologies: [
      { name: "Live Store: www.oraperfumes.in", category: "Platform" },
      { name: "0-to-1 Commercial Scaling (₹2.5L+)", category: "Growth" },
      { name: "Olfactory Pyramid Architecture", category: "Formulation" },
      { name: "Meta Ads & Performance Funnels", category: "Acquisition" },
      { name: "Cold-Pressed Essence Sourcing", category: "Supply Chain" },
      { name: "Direct-to-Consumer Unit Economics", category: "Finance" }
    ],
    gallery: [
      {
        title: "Olfactory Architecture Pyramid",
        caption: "Top: Roasted Tonka & Bitter Almond | Heart: Toasted Hazelnut & Madagascar Vanilla | Base: Molten Amber & Aged Sandalwood",
        type: "mockup",
        visualKey: "ora-pyramid"
      },
      {
        title: "Artisanal Flacon & Packaging Prototype",
        caption: "Heavyweight geometric glass flacon with brushed brass atomizer cap and recycled premium packaging box.",
        type: "image",
        visualKey: "ora-bottle"
      },
      {
        title: "GTM Funnel & Community Launchpad",
        caption: "Targeting high-affinity fragrance collectors and gourmand scent enthusiasts across tier-1 metros and Dubai.",
        type: "chart",
        visualKey: "ora-funnel"
      }
    ],
    metrics: [
      { label: "0 to 1 Milestone", value: "₹2.5 Lakh+ in 30 Days" },
      { label: "Website", value: "www.oraperfumes.in" },
      { label: "Brand Positioning", value: "Artisanal Mass Premium" },
      { label: "Concentration", value: "Extrait de Parfum (25%+ Oil)" }
    ]
  },
  {
    id: "project-amazon-eu",
    title: "Door Step Essentials EU (Firetech)",
    subtitle: "Cross-Border European Amazon E-Commerce Enterprise",
    category: "Market Research & Cross-Border E-Commerce",
    status: "Successfully Scaled & Exited",
    period: "Apr 2020 – Mar 2023",
    impactBadge: "₹35 Lakhs+ / 7-Figure Net",
    proofId: "doc-amazon-seller",
    summary: "Bootstrapped multi-country European Amazon e-commerce operations spanning Germany, UK, France, Italy, Spain, Netherlands, and Poland driven by granular market research, pricing discipline, and customer excellence.",
    detailedDescription: [
      "Door Step Essentials EU was born out of a desire to master international e-commerce through deep market intelligence. Operating under Firetech, I established active merchant store fronts across Amazon Europe's primary marketplaces.",
      "The business strategy focused on exhaustive market research and competitor analysis to discover high-velocity winning products, followed by dynamic price positioning to balance sales volume with healthy double-digit margins.",
      "By prioritizing rapid, five-star customer service and buyer satisfaction, the enterprise fulfilled thousands of customer orders across continental Europe, generating over ₹35 Lakhs (€20,000+) in verifiable top-line revenue with healthy double-digit net operating profit."
    ],
    technologies: [
      { name: "Amazon Seller Central (DE, UK, FR, IT, ES)", category: "Platform" },
      { name: "Market Research & Category Demand Analysis", category: "Analytics" },
      { name: "Competitor Benchmarking & Dynamic Pricing", category: "Strategy" },
      { name: "Buyer Satisfaction & Customer Service", category: "Operations" },
      { name: "Helium 10 & Jungle Scout Analytics", category: "Analytics" },
      { name: "Product Discovery & Supplier Sourcing", category: "Supply Chain" }
    ],
    liveUrlLabel: "Inspect Verified Amazon Statement",
    gallery: [
      {
        title: "Amazon Seller Central Multi-Marketplace Dashboard",
        caption: "Live order distribution spanning Germany (DE), United Kingdom (UK), France (FR), Italy (IT), and Spain (ES).",
        type: "chart",
        visualKey: "amazon-dashboard"
      },
      {
        title: "Market Research & Competitor Pricing Strategy",
        caption: "Category demand analysis, competitor pricing benchmarks, and margin-optimizing price execution.",
        type: "mockup",
        visualKey: "amazon-research"
      },
      {
        title: "P&L Statement & Margin Breakdown",
        caption: "Verified payout history reflecting sustained double-digit net operational margins post Amazon fees and COGS.",
        type: "image",
        visualKey: "amazon-profit"
      }
    ],
    metrics: [
      { label: "Gross Turnover", value: "₹35 Lakhs+ (€20,000+)" },
      { label: "Active Marketplaces", value: "7 European Countries" },
      { label: "Operating Net", value: "Healthy Double-Digit %" },
      { label: "Seller Rating", value: "Positive Customer Trust" }
    ]
  },
  {
    id: "project-zomato-growth",
    title: "Zomato Gold Carnival & Merchant Ads Engine",
    subtitle: "High-Velocity Dining Out Revenue Monetization in Kolkata",
    category: "Commercial Strategy & Ad Monetization",
    status: "100% Target Attainment Across Tenure",
    period: "May 2023 – Jan 2025",
    impactBadge: "20% of City Ad Revenue",
    proofId: "doc-zomato-experience",
    summary: "Scaled Kolkata's largest dining ads portfolio contributing ~20% of total city dining ad revenue, delivering 7-10X ROAS, and achieving 100% quota attainment across every single quarter.",
    detailedDescription: [
      "At Eternal Limited (Zomato), I was entrusted with managing top-tier Key Accounts across Kolkata's vibrant restaurant ecosystem. Rather than selling generic ad slots, I constructed custom performance dashboards demonstrating verifiable footfall and bill size increases for partner venues.",
      "During the landmark 2024 Zomato Gold Dining Carnival, I onboarded marquee microbreweries, high-end fine dining venues, and casual bistros, pacing their campaigns across peak weekend slots to maximize table turn rates.",
      "My portfolio consistently delivered an average 7-10X ROAS for merchants, generating significant incremental dining bills and cementing my track record as the only person in a 12-member sales team to achieve 100% quota attainment every quarter."
    ],
    technologies: [
      { name: "Zomato Merchant Ad Console", category: "Platform" },
      { name: "Dynamic CPC Bidding Optimization", category: "Marketing" },
      { name: "Hyperlocal Geo-Targeting & Carousels", category: "Marketing" },
      { name: "Merchant P&L & ROAS Calculator", category: "Analytics" },
      { name: "Key Account Retention Systems", category: "Discipline" }
    ],
    liveUrlLabel: "Inspect Zomato Appointment & Experience Letter",
    gallery: [
      {
        title: "Zomato Merchant Ad Pacing & ROAS Dashboard",
        caption: "Algorithmic day-parting and carousel placement driving 7-10X return on dining ad spend.",
        type: "chart",
        visualKey: "zomato-roas"
      },
      {
        title: "Zomato Gold Carnival Merchant Showcase",
        caption: "Onboarded premium Kolkata dining brands with customized Gold discount structures and prime banner exposure.",
        type: "mockup",
        visualKey: "zomato-gold"
      },
      {
        title: "City Sales Leadership & 100% Quota Record",
        caption: "Recognized as the sole sales team member with unbroken 100% quota attainment across every quarter of tenure.",
        type: "image",
        visualKey: "zomato-sales"
      }
    ],
    metrics: [
      { label: "City Revenue Share", value: "~20% of Kolkata Dining Ads" },
      { label: "Quota Attainment", value: "100% Every Single Quarter" },
      { label: "Average Merchant ROAS", value: "7.0X – 10.0X Multiple" },
      { label: "Merchant Portfolio", value: "Top-Tier Kolkata Dining Brands" }
    ]
  },
  {
    id: "project-linc-expansion",
    title: "Linc Limited 50+ Country Global Expansion",
    subtitle: "International Market Development & Modern Trade Merchandising",
    category: "Global Trade & Market Development",
    status: "₹2 Cr+ Incremental Launch Revenue",
    period: "Mar 2025 – Jun 2026",
    impactBadge: "50+ Countries Reached",
    proofId: "doc-linc-appointment",
    summary: "Orchestrated product launch campaigns across 50+ countries in APAC, MEA, Europe, and LATAM as Deputy Manager, delivering ₹2 Cr+ in 3 quarters and saving ₹35 Lakhs in exhibition contracts.",
    detailedDescription: [
      "Linc Limited is one of India's most trusted public writing instrument exporters. As Deputy Manager in Product Growth & Market Development, I led cross-functional efforts to position Linc's innovative product lines in competitive international markets.",
      "I tailored packaging aesthetics, barcoding, and marketing collateral to meet strict European and Latin American retail regulations, opening doors into high-volume Modern Trade retail channels.",
      "Furthermore, I led vendor negotiations for global exhibitions including Paperworld Frankfurt, slashing overhead by ₹35 Lakhs while expanding distributor partnerships across over 50 countries worldwide."
    ],
    technologies: [
      { name: "International Trade Compliance & Tariffs", category: "Compliance" },
      { name: "Modern Trade Merchandising Guidelines", category: "Marketing" },
      { name: "Global Distributor CRM & Pipeline", category: "Sales" },
      { name: "High-Volume Supply Chain Forecasting", category: "Operations" },
      { name: "Exhibition Negotiations & Booth Architecture", category: "Strategy" }
    ],
    liveUrlLabel: "Inspect Linc Appointment Letter",
    gallery: [
      {
        title: "Global Export Footprint Map",
        caption: "Active distributor networks spanning 50+ countries across APAC, Middle East & Africa, Europe, and Latin America.",
        type: "chart",
        visualKey: "linc-map"
      },
      {
        title: "European Packaging Compliance & Modern Trade Mockup",
        caption: "Multilingual packaging design engineered for high-visibility retail displays in European stationery chains.",
        type: "mockup",
        visualKey: "linc-packaging"
      },
      {
        title: "Paperworld Frankfurt Exhibition Strategy",
        caption: "Secured prime international pavilion positioning while negotiating vendor contracts down by ₹35 Lakhs.",
        type: "image",
        visualKey: "linc-frankfurt"
      }
    ],
    metrics: [
      { label: "Global Reach", value: "50+ Countries Worldwide" },
      { label: "Launch Revenue", value: "₹2 Cr+ in 3 Quarters" },
      { label: "Contract Savings", value: "₹35 Lakhs Exhibition Costs" },
      { label: "Key Territories", value: "APAC, MEA, Europe, LATAM" }
    ]
  },
  {
    id: "project-women-ceo-study",
    title: "Women CEOs & Corporate Governance in India",
    subtitle: "24-Page Empirical Academic Dissertation at St. Xavier's University",
    category: "Financial Econometrics & Corporate Governance",
    status: "Published Undergrad Thesis (Turnitin Verified)",
    period: "2022 – 2023",
    impactBadge: "Turnitin 91% Score",
    proofId: "doc-dissertation",
    summary: "Empirical study analyzing the financial performance (Total Income, PAT, Total Assets) of public Indian companies under female CEO leadership versus male predecessors with 190 survey respondents.",
    detailedDescription: [
      "Guided by Prof. Monojit Dutta at St. Xavier's University, I undertook a rigorous quantitative and qualitative investigation into the corporate governance and leadership transition dynamics of marquee Indian firms.",
      "The dissertation performed detailed longitudinal financial analysis across 5 prominent public enterprises: Axis Bank (Shikha Sharma), Britannia Industries (Vinita Bali), Welspun India (Dipali Goenka), Lupin Limited (Vinita Gupta), and HCL Technologies (Roshni Nadar Malhotra).",
      "I also surveyed 190 validated corporate respondents, analyzing socio-cultural barriers, compensation parity, and organizational innovation. The research achieved a verified Turnitin similarity index of just 9% (91% original content)."
    ],
    technologies: [
      { name: "SPSS Statistical Correlation & Regression", category: "Analytics" },
      { name: "Financial Ratio Analysis (PAT, Income, Assets)", category: "Finance" },
      { name: "Primary Survey Instrument Design (190 Sample)", category: "Research" },
      { name: "Turnitin Academic Plagiarism Verification", category: "Integrity" },
      { name: "Public Company 10-Year Annual Report Modeling", category: "Finance" }
    ],
    liveUrlLabel: "Inspect Turnitin Report & Dissertation Pages",
    gallery: [
      {
        title: "Turnitin Similarity Index Report (9% Match)",
        caption: "Official university plagiarism scan verifying 91% original empirical research and rigorous citation integrity.",
        type: "image",
        visualKey: "research-turnitin"
      },
      {
        title: "5-Company Financial Trend Comparison",
        caption: "Comparative trendlines of Profit After Tax (PAT) and Total Assets across transitions at Axis Bank, Britannia, Welspun, Lupin, HCL.",
        type: "chart",
        visualKey: "research-charts"
      },
      {
        title: "190-Respondent Survey Correlation Matrix",
        caption: "Statistical regression highlighting institutional perceptions of female executive leadership and innovation culture.",
        type: "mockup",
        visualKey: "research-survey"
      }
    ],
    metrics: [
      { label: "Survey Sample", value: "190 Industry Respondents" },
      { label: "Turnitin Score", value: "91% Score (9% Similarity)" },
      { label: "Public Firms Analyzed", value: "Axis, Britannia, Welspun, Lupin, HCL" },
      { label: "Supervisor", value: "Prof. Monojit Dutta, SXUK" }
    ]
  },
  {
    id: "project-sealdah-hunger",
    title: "Leo Club Sealdah Hunger Relief & Social Impact",
    subtitle: "Presidential Stewardship & Humanitarian Mission for 5,000+ Citizens",
    category: "Civic Leadership & Non-Profit Governance",
    status: "5,000+ Individuals Served",
    period: "Jul 2021 – Jun 2022",
    impactBadge: "5,000+ Citizens Fed",
    proofId: "doc-leo-president",
    summary: "Elected President of Leo Club of Kolkata Sealdah, leading youth volunteer teams across Eastern India to execute zero-waste feeding drives, clothes distribution, and medical aid missions.",
    detailedDescription: [
      "Believing that true business leadership is inextricably linked with civic responsibility, I served as President of Leo Club of Kolkata Sealdah (affiliated with Lions Clubs International).",
      "I mobilized and coordinated over 20 active youth volunteers, established partnerships with local community food donors, and designed rapid distribution logistics across marginalized settlements in Kolkata and West Bengal.",
      "Under my stewardship, our missions delivered hot nutritious meals to more than 5,000 underprivileged citizens, provided winter blankets and clothing, and earned multiple district awards for exemplary youth service."
    ],
    technologies: [
      { name: "Non-Profit Budgeting & Fund Allocation", category: "Governance" },
      { name: "Community Logistics & Distribution Routes", category: "Operations" },
      { name: "Volunteer Mobilization & Leadership", category: "Leadership" },
      { name: "Lions Clubs International Charter Compliance", category: "Governance" }
    ],
    liveUrlLabel: "Inspect Presidential Appointment Certificate",
    gallery: [
      {
        title: "Sealdah Community Hunger Relief Drives",
        caption: "Direct food distribution drives serving nutritious hot meals to thousands of underserved individuals.",
        type: "image",
        visualKey: "leo-relief"
      },
      {
        title: "Volunteer Mobilization & Logistics Network",
        caption: "Coordinating 20+ passionate youth volunteers with local community leaders and food supply partners.",
        type: "mockup",
        visualKey: "leo-volunteers"
      },
      {
        title: "District Presidential Leadership Award",
        caption: "Recognized by Lions Clubs International District 322B2 for outstanding club management and humanitarian reach.",
        type: "chart",
        visualKey: "leo-charter"
      }
    ],
    metrics: [
      { label: "Citizens Impacted", value: "5,000+ Underprivileged" },
      { label: "Youth Mobilized", value: "20+ Dedicated Volunteers" },
      { label: "Role", value: "President (Leo Club Sealdah)" },
      { label: "Parent Body", value: "Lions Clubs International" }
    ]
  }
];
