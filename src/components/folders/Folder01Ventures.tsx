import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Globe, 
  Layers, 
  Zap, 
  ExternalLink,
  ShieldCheck, 
  TrendingUp,
  Boxes,
  Sparkles,
  ShoppingBag,
  Cpu,
  PackageCheck
} from 'lucide-react';
import { VENTURES } from '../../data/portfolioData';
import { sound } from '../../utils/audioEffects';

interface Props {
  onOpenProof?: (proofId: string) => void;
}

export const Folder01Ventures: React.FC<Props> = ({ onOpenProof }) => {
  const omniSpendVenture = VENTURES.find(v => v.id === 'omnispend-tracker') || VENTURES[0];
  const oraVenture = VENTURES.find(v => v.id === 'ora-gourmand') || VENTURES[1];
  const amazonVenture = VENTURES.find(v => v.id === 'doorstep-essentials') || VENTURES[2];

  return (
    <article className="space-y-12 sm:space-y-16">
      {/* Folder Header Note */}
      <div className="border-b border-[#E4E4E7] pb-6">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#71717A] uppercase tracking-wide-caps mb-2">
          <span>Folder Docket // 01</span>
          <span>·</span>
          <span>Part 1: All Projects &amp; Entrepreneurial Builds</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] mb-2 font-sans">
          Projects, Ventures &amp; Builds
        </h2>
        <p className="text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
          From autonomous AI consumer fintech and mass premium artisanal fragrance houses to cross-border European e-commerce: 0-to-1 ventures founded, formulated, and scaled with relentless execution and uncompromising unit economics.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* Project 01: OmniSpend AI Spend Tracker */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
            Project 01 · 2026 · AI &amp; Consumer FinTech
          </span>
          <span className="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Web Application
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context & Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#09090B] tracking-tight">
              OmniSpend AI Spend Tracker
            </h3>

            <p className="font-mono text-xs text-[#71717A] uppercase tracking-wide">
              Founder &amp; Product Architect · Autonomous Parser &amp; Subscriptions Engine
            </p>

            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              Engineered an autonomous personal finance tool deployed at <a href="https://omnispendtracker.lovable.app" target="_blank" rel="noopener noreferrer" className="text-[#09090B] underline font-medium hover:text-indigo-600">omnispendtracker.lovable.app</a> that eliminates manual bookkeeping. Automatically extracts debit notifications directly from Gmail inboxes and raw SMS text alerts, transforming unformatted transaction strings into intelligent category breakdowns.
            </p>

            <div className="space-y-2.5 pt-1 text-sm text-[#3F3F46]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#A1A1AA] font-mono text-xs mt-1">01</span>
                <p>
                  <strong className="text-[#09090B]">Natural Language Receipt Ingestion:</strong> Deployed NLP parsing to interpret erratic bank SMS patterns and merchant billing formats across HDFC, ICICI, SBI, and digital UPI gateways.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#A1A1AA] font-mono text-xs mt-1">02</span>
                <p>
                  <strong className="text-[#09090B]">Predictive Recurring Expense Engine:</strong> Automatically detects billing cadences for software and lifestyle subscriptions (Netflix, Spotify, AWS, Gym, utilities), forecasting monthly cash outflows and warning of renewal spikes.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#A1A1AA] font-mono text-xs mt-1">03</span>
                <p>
                  <strong className="text-[#09090B]">Zero-Manual Friction:</strong> Users avoid manual expense entry by simply connecting receipt channels, with instant dynamic visualizations of discretionary versus non-discretionary burn.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://omnispendtracker.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09090B] hover:bg-[#27272A] text-white text-xs font-mono font-medium transition-all shadow-sm group"
              >
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Launch omnispendtracker.lovable.app</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Outcomes & Architecture */}
          <div className="lg:col-span-5 bg-white border border-[#E4E4E7] rounded-2xl p-6 shadow-card-subtle space-y-5">
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span className="font-mono text-xs font-semibold text-[#09090B] uppercase">
                  Technical Architecture
                </span>
              </div>
              <span className="font-mono text-[11px] text-emerald-600 font-medium">Production</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#F9F9FB] border border-[#E4E4E7]/70">
                <span className="text-[10px] text-[#71717A] uppercase block">Ingestion Pipeline</span>
                <strong className="text-xs text-[#09090B] font-semibold">Gmail API &amp; SMS Ingestion Regex</strong>
              </div>
              <div className="p-3 rounded-lg bg-[#F9F9FB] border border-[#E4E4E7]/70">
                <span className="text-[10px] text-[#71717A] uppercase block">Categorization Logic</span>
                <strong className="text-xs text-[#09090B] font-semibold">Real-Time NLP Intent Extraction</strong>
              </div>
              <div className="p-3 rounded-lg bg-[#F9F9FB] border border-[#E4E4E7]/70">
                <span className="text-[10px] text-[#71717A] uppercase block">Financial Engine</span>
                <strong className="text-xs text-[#09090B] font-semibold">Autonomous Subscription Cadence Detection</strong>
              </div>
            </div>

            <div className="space-y-2 border-t border-[#F4F4F5] pt-3">
              <span className="font-mono text-[11px] text-[#71717A] uppercase block">
                Keywords &amp; Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['AI App', 'FinTech', 'Gmail Parsing', 'NLP Categorization', 'Subscription Engine', 'React'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[11px] font-mono text-[#3F3F46] border border-[#E4E4E7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E4E4E7]" />

      {/* ===================================================================== */}
      {/* Project 02: ORA Gourmand Perfumes (Mass Premium D2C Showcase) */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
            Project 02 · 2026 · Mass Premium D2C Fragrance
          </span>
          <span className="font-mono text-xs text-amber-700 font-medium">
            ● Live at oraperfumes.in
          </span>
        </div>

        {/* Flagship Visual Card */}
        <div className="bg-[#09090B] text-white rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Top Tag & Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-medium">
                  0 to 1 Founded &amp; Scaled
                </span>
                <span className="text-xs font-mono text-white/60">
                  Artisanal Mass Premium Brand
                </span>
              </div>

              <a
                href="https://www.oraperfumes.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#09090B] hover:bg-neutral-200 text-xs font-mono font-semibold transition-all shadow-md group"
              >
                <span>Visit www.oraperfumes.in</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Product Headline & Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                  Artisanal Mass Premium Fragrance Brand
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
                  ORA Gourmand Perfumes
                </h3>
                <p className="text-base text-white/80 leading-relaxed font-normal">
                  Founded, formulated, and scaled from zero to one. ORA represents an uncompromising pursuit of decadent, hyper-indulgent olfactory profiles—pairing rich Madagascar bourbon vanilla, toasted hazelnut, and dark tonka bean with heavy French flacon glass and a bespoke unboxing ritual.
                </p>

                <div className="space-y-2 pt-2 text-sm text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono text-xs mt-1">01</span>
                    <p>
                      Spearheaded complete fragrance compounding, regulatory safety clearances, custom glass mold sourcing, and premium magnetic cap design.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono text-xs mt-1">02</span>
                    <p>
                      Built an omnichannel direct-to-consumer acquisition engine across Shopify, micro-influencer gifting pipelines, and niche perfume enthusiast community engagement.
                    </p>
                  </div>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-2">
                  {['Madagascar Bourbon Vanilla', 'Roasted Hazelnut', 'Warm Tonka & Amber', 'Heavy Glass Flacons', 'Shopify D2C Stack'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/10 text-white/80 text-xs font-mono border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Card: Commercial Metric Callout */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-5">
                <span className="font-mono text-xs text-amber-300 uppercase tracking-wide block">
                  0-to-1 Commercial Ledger
                </span>

                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <span className="text-xs font-mono text-white/60 block mb-0.5">
                      First 30 Days Top-Line
                    </span>
                    <span className="text-3xl font-bold font-sans text-white">
                      ₹2.5 Lakh+
                    </span>
                    <span className="text-xs font-mono text-amber-300 block mt-0.5">
                      Early customer acquisition &amp; pre-orders
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-xs font-mono text-white/60 block">Incubator</span>
                      <strong className="text-sm text-white">Masters' Union</strong>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/60 block">Primary Target</span>
                      <strong className="text-sm text-white">Urban D2C &amp; GCC</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://www.oraperfumes.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#09090B] font-mono text-xs font-bold transition-colors"
                    >
                      <span>Explore Fragrance Lineup</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E4E4E7]" />

      {/* ===================================================================== */}
      {/* Project 03: Door Step Essentials EU (Firetech) - Dropshipping */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F4F4F5] text-[#52525B] border border-[#E4E4E7]">
            Project 03 · 2020 – 2023 · Bootstrapped Cross-Border E-Commerce
          </span>
          <span className="font-mono text-xs text-emerald-600 font-medium">
            ● Scaled &amp; Exited
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context & Role */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight">
              Door Step Essentials EU (Firetech)
            </h3>

            <p className="font-mono text-xs text-[#71717A] uppercase tracking-wide">
              Founder &amp; Managing Director · Cross-Border E-Commerce &amp; Dropshipping
            </p>

            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              Founded and scaled a multi-marketplace European e-commerce enterprise during university. Operated across Germany, the UK, France, Italy, Spain, the Netherlands, and Poland under the trade name Firetech, driven by granular data analytics and market intelligence.
            </p>

            <div className="space-y-2 pt-1 text-sm text-[#3F3F46]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#A1A1AA] font-mono text-xs mt-1">01</span>
                <p>
                  Conducted deep market research and competitor gap analysis across European categories to identify high-velocity winning products with unmet consumer demand.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#A1A1AA] font-mono text-xs mt-1">02</span>
                <p>
                  Engineered dynamic price positioning to sell at the optimal profit-maximizing point while delivering rapid, five-star customer service across all 7 European countries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Outcomes, Metrics & Tactile Card */}
          <div className="lg:col-span-6 bg-white border border-[#E4E4E7] rounded-2xl p-6 sm:p-7 shadow-card-subtle space-y-6">
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#71717A]" />
                <span className="font-mono text-xs font-semibold text-[#09090B] uppercase tracking-wide">
                  Key Performance Ledger
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#71717A]">
                7 EU Marketplaces
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F9F9FB] border border-[#E4E4E7]/80">
                <span className="font-mono text-[11px] text-[#71717A] uppercase block mb-1">
                  Net Global Revenue
                </span>
                <span className="text-2xl font-bold font-sans text-[#09090B] tracking-tight">
                  ₹35L+
                </span>
                <span className="text-xs text-[#71717A] block mt-0.5 font-mono">
                  €20,000+ top-line
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#F9F9FB] border border-[#E4E4E7]/80">
                <span className="font-mono text-[11px] text-[#71717A] uppercase block mb-1">
                  Operating Health
                </span>
                <span className="text-2xl font-bold font-sans text-[#09090B] tracking-tight">
                  2-Digit
                </span>
                <span className="text-xs text-[#71717A] block mt-0.5 font-mono">
                  Net profit margin
                </span>
              </div>
            </div>

            <div className="space-y-2 border-t border-[#F4F4F5] pt-4">
              <span className="font-mono text-[11px] text-[#71717A] uppercase block">
                Core Capabilities Deployed
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Market Research', 'Competitor Analysis', 'Product Selection', 'Dynamic Pricing', 'Customer Service', 'Cross-Border Operations'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[11px] font-mono text-[#3F3F46] border border-[#E4E4E7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
