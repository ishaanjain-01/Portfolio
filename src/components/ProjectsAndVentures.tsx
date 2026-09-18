import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Sparkles, 
  ShoppingBag, 
  BookOpen, 
  ShieldCheck, 
  ExternalLink, 
  TrendingUp, 
  Globe, 
  CheckCircle,
  BarChart3,
  Layers
} from 'lucide-react';
import { VENTURES } from '../data/portfolioData';

interface Props {
  onOpenProof: (id: string) => void;
}

export const ProjectsAndVentures: React.FC<Props> = ({ onOpenProof }) => {
  const [activeVentureTab, setActiveVentureTab] = useState<'ora' | 'amazon' | 'research'>('ora');

  return (
    <section id="ventures" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Rocket className="w-3.5 h-3.5" />
              <span>Entrepreneurship & Ventures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projects, Ventures & Research
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base leading-relaxed">
            From bootstrapping a 7-figure cross-border European e-commerce enterprise to formulating mass premium D2C fragrances and authoring empirical corporate research.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <button
            id="tab-select-ora"
            onClick={() => setActiveVentureTab('ora')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
              activeVentureTab === 'ora'
                ? 'bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 text-slate-400'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold text-amber-400 block uppercase tracking-wider">
                0 to 1 • ₹2.5L+ in 30 Days
              </span>
              <span className="text-base font-bold text-white block">
                ORA Gourmand Perfumes
              </span>
              <span className="text-xs text-slate-400">Live at www.oraperfumes.in</span>
            </div>
            <Sparkles className={`w-5 h-5 ${activeVentureTab === 'ora' ? 'text-amber-400' : 'text-slate-600'}`} />
          </button>

          <button
            id="tab-select-amazon"
            onClick={() => setActiveVentureTab('amazon')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
              activeVentureTab === 'amazon'
                ? 'bg-gradient-to-r from-indigo-500/15 via-slate-900 to-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 text-slate-400'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold text-indigo-400 block uppercase tracking-wider">
                Cross-Border Amazon
              </span>
              <span className="text-base font-bold text-white block">
                Door Step Essentials EU
              </span>
              <span className="text-xs text-slate-400">₹35 Lakhs+ / 7-Figure Net</span>
            </div>
            <ShoppingBag className={`w-5 h-5 ${activeVentureTab === 'amazon' ? 'text-indigo-400' : 'text-slate-600'}`} />
          </button>

          <button
            id="tab-select-research"
            onClick={() => setActiveVentureTab('research')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
              activeVentureTab === 'research'
                ? 'bg-gradient-to-r from-emerald-500/15 via-slate-900 to-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 text-slate-400'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold text-emerald-400 block uppercase tracking-wider">
                Academic Research
              </span>
              <span className="text-base font-bold text-white block">
                Women CEOs in Corporate India
              </span>
              <span className="text-xs text-slate-400">24-Page Empirical Thesis</span>
            </div>
            <BookOpen className={`w-5 h-5 ${activeVentureTab === 'research' ? 'text-emerald-400' : 'text-slate-600'}`} />
          </button>
        </div>

        {/* Dynamic Venture Details */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {activeVentureTab === 'ora' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      0 to 1 Venture • Crossed ₹2.5L+ Revenue in 30 Days
                    </span>
                    <span className="text-xs text-slate-400">
                      Masters' Union Incubatee • 2026 – Present
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    ORA Gourmand Perfumes
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                    An artisanal mass premium fragrance brand bridging nuanced French gourmand accords with contemporary digital storytelling and direct-to-consumer merchandising at <span className="text-amber-400 font-semibold">www.oraperfumes.in</span>.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 flex-wrap">
                  <a
                    id="visit-ora-perfumes-btn"
                    href="https://www.oraperfumes.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-amber-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit www.oraperfumes.in</span>
                  </a>
                  <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-2 rounded-2xl border border-slate-800">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Founder & Creator</span>
                      <span className="text-xs font-bold text-white">Ishaan Jain</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traction Highlight Callout: 0 to 1 in 30 Days */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-950/20 to-slate-950 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-mono font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    PROVEN 0 TO 1 COMMERCIAL TRACTION
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Taken from 0 to 1 • Crossed ₹2.5 Lakh in Revenue in 30 Days
                  </h4>
                  <p className="text-xs text-slate-300 max-w-2xl">
                    Scaled from zero to revenue velocity: formulated artisanal gourmand olfactory notes, engineered premium packaging, launched the live D2C storefront at <a href="https://www.oraperfumes.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300 font-semibold">www.oraperfumes.in</a>, and acquired paying consumers across major tier-1 Indian metros.
                  </p>
                </div>
                <a
                  href="https://www.oraperfumes.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shrink-0"
                >
                  <span>Explore Live Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Fragrance Architecture Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                    Top Notes
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Crisp Opening
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Caramelized bergamot, toasted hazelnut nectar, and spiced almond blossoms providing an instant addictive greeting.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                    Heart Notes
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Rich Gourmand Body
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Madagascan bourbon vanilla orchid, dark cocoa butter, honeyed tobacco leaf, and velvety roasted tonka beans.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                    Base Notes
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Lingering Sillage
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Golden amber woods, creamy Mysore sandalwood, and clean white musk that anchors 10+ hour skin longevity.
                  </p>
                </div>
              </div>

              {/* Commercial & Go-To-Market Strategy */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-6 rounded-2xl border border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Strategic Commercial Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="space-y-1">
                    <strong className="text-white block">1. Sensory Direct-to-Consumer</strong>
                    <p className="text-slate-400">Discovery-kit-led customer acquisition with 100% redemption toward full-sized flacons.</p>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block">2. High-Margin Packaging</strong>
                    <p className="text-slate-400">Weighted zamak caps and bespoke magnetic rigid boxes engineered for international gifting markets.</p>
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block">3. Global Export Roadmap</strong>
                    <p className="text-slate-400">Leveraging Linc export learnings to build distribution pathways into the UAE, UK, and Southeast Asia.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeVentureTab === 'amazon' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Cross-Border Venture (2020 – 2023)
                    </span>
                    <span className="text-xs text-slate-400">
                      Store: doorstepessentialseu | Legal: Firetech
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Door Step Essentials EU / Firetech
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                    Scaled European e-commerce operations across Germany, France, Italy, Spain, and the UK, driven by deep market research, competitor analysis, dynamic pricing, and five-star customer support (₹35 Lakh+ net revenue).
                  </p>
                </div>
                <button
                  id="view-amazon-proof-btn"
                  onClick={() => onOpenProof('doc-amazon-seller')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Inspect Amazon Europe Statements</span>
                </button>
              </div>

              {/* Marketplace Settlement Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-lg font-bold text-white block">Amazon DE</span>
                  <span className="text-xs text-emerald-400 font-mono block mt-1">€15,859.60</span>
                  <span className="text-[10px] text-slate-400">Germany & Austria</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-lg font-bold text-white block">Amazon UK</span>
                  <span className="text-xs text-emerald-400 font-mono block mt-1">£2,199.84</span>
                  <span className="text-[10px] text-slate-400">United Kingdom</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-lg font-bold text-white block">Amazon FR</span>
                  <span className="text-xs text-emerald-400 font-mono block mt-1">€1,959.53</span>
                  <span className="text-[10px] text-slate-400">France & Benelux</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-lg font-bold text-white block">Amazon ES/IT</span>
                  <span className="text-xs text-emerald-400 font-mono block mt-1">€1,794.35</span>
                  <span className="text-[10px] text-slate-400">Italy & Spain</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center col-span-2 sm:col-span-1">
                  <span className="text-lg font-bold text-white block">Amazon SE/PL</span>
                  <span className="text-xs text-emerald-400 font-mono block mt-1">29.5k SEK / PLN</span>
                  <span className="text-[10px] text-slate-400">Nordic & Poland</span>
                </div>
              </div>

              {/* Operational Takeaways */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h5 className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Market Research & Product Selection
                  </h5>
                  <p className="text-slate-400">
                    Conducted extensive category demand studies and competitor gap analysis to discover high-velocity products with unmet European buyer demand.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h5 className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Dynamic Pricing & Customer Excellence
                  </h5>
                  <p className="text-slate-400">
                    Engineered competitive pricing algorithms to sell at the profit-maximizing sweet spot while delivering proactive, five-star buyer support across 7 European countries.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeVentureTab === 'research' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Academic Dissertation (2022 – 2023)
                    </span>
                    <span className="text-xs text-slate-400">
                      Under supervision of Prof. Monojit Dutta | St. Xavier's University
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    A Study on Challenges Faced by Women CEOs in India
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                    An empirical 24-page research study analyzing corporate performance metrics after women took helm of marquee Indian enterprises, backed by 190 validated surveys and econometric trend modeling.
                  </p>
                </div>
                <button
                  id="view-dissertation-proof-btn"
                  onClick={() => onOpenProof('doc-dissertation')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Inspect Dissertation Records (Turnitin 91% Score)</span>
                </button>
              </div>

              {/* Research Methodology Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono text-emerald-400 block mb-1">SAMPLE SIZE</span>
                  <span className="text-2xl font-black text-white block">190</span>
                  <span className="text-xs text-slate-400">Validated industry respondents (Likert scale & open-ended survey)</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 block mb-1">COMPANIES ANALYZED</span>
                  <span className="text-2xl font-black text-white block">5 Marquee</span>
                  <span className="text-xs text-slate-400">Axis Bank, Britannia, Welspun, Lupin, HCL Technologies</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono text-violet-400 block mb-1">ORIGINALITY INDEX</span>
                  <span className="text-2xl font-black text-white block">91% Score</span>
                  <span className="text-xs text-slate-400">High academic integrity verified via Turnitin originality report (9% similarity)</span>
                </div>
              </div>

              {/* 5 Case Studies Summary Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Empirical Case Findings Analyzed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs font-bold text-white block">Axis Bank (Shikha Sharma)</span>
                    <p className="text-xs text-slate-400 mt-1">Steered total income from ₹8,816 Cr to ₹27,436 Cr while navigating the global 2008 banking crisis and tripling total assets.</p>
                  </div>
                  <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs font-bold text-white block">Britannia (Vinita Bali)</span>
                    <p className="text-xs text-slate-400 mt-1">Doubled company total assets in 3 years (₹759 Cr to ₹1,234 Cr) in an aggressively competitive FMCG sector while stabilizing PAT.</p>
                  </div>
                  <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs font-bold text-white block">Welspun India (Dipali Goenka)</span>
                    <p className="text-xs text-slate-400 mt-1">Drove 86.16% total income increase, quadrupled PAT, and tripled total assets from 2006 to 2012.</p>
                  </div>
                  <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs font-bold text-white block">HCL Technologies (Roshni Nadar)</span>
                    <p className="text-xs text-slate-400 mt-1">Recorded 13.25% revenue growth and 24.50% jump in Profit After Tax upon appointment as chairperson.</p>
                  </div>
                  <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs font-bold text-white block">Lupin (Vinita Gupta)</span>
                    <p className="text-xs text-slate-400 mt-1">Expanded US pharma footprint with 34.13% total income growth before succession challenges demonstrated systemic industry headwinds.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
