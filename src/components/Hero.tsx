import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

interface Props {
  onOpenAi: () => void;
  onOpenProof: (id: string) => void;
  onOpenResumeSummary: () => void;
  onSelectSection: (key: string) => void;
}

export const Hero: React.FC<Props> = ({ 
  onOpenAi, 
  onOpenProof, 
  onOpenResumeSummary,
  onSelectSection
}) => {
  const [hoveredStatIndex, setHoveredStatIndex] = useState<number | null>(null);

  const handleExploreTrackRecord = () => {
    sound.playClick();
    onSelectSection('experience');
    const el = document.getElementById('dossier-hub');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative pt-24 pb-6 md:pt-32 md:pb-8 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Executive Verified Credential Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-750 mb-5 shadow-xl backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">
              Masters' Union Scholar • Ex-Linc • Ex-Zomato • Venture Founder
            </span>
          </motion.div>

          {/* Main Editorial Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.12] mb-4"
          >
            International Growth &{' '}
            <span className="italic font-normal bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200 bg-clip-text text-transparent">
              Commercial Strategy
            </span>
          </motion.h1>

          {/* Concrete Executive Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-7 max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-4">
              High-velocity commercial growth leader and Masters' Union Scholar with an unbroken record of commercial execution. Led global product launches across 50+ countries driving ₹2 Cr+ revenue at Linc, maintained 100% quota attainment delivering 7–10X merchant ROAS at Zomato, scaled 7-figure cross-border e-commerce in Europe, and founded OmniSpend AI spend tracker & ORA Gourmand Perfumes (taken from 0 to 1, crossing ₹2.5 Lakh in revenue in 30 days; live at <a href="https://www.oraperfumes.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline font-semibold">www.oraperfumes.in</a>).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "100% Quota Attainment (Zomato)",
                "50+ Export Countries (Linc)",
                "7–10X Merchant ROAS",
                "₹2 Cr+ Incremental Launch Rev",
                "ORA Perfumes (0 to 1 • ₹2.5L+ in 30 Days)",
                "OmniSpend AI Founder",
                "First Class B.Com Finance (7.85 CGPA)"
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  ✓ {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Core Action Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
          >
            <button
              id="hero-explore-work-btn"
              onClick={handleExploreTrackRecord}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Track Record</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-ai-chat-btn"
              onClick={() => {
                sound.playClick();
                onOpenAi();
              }}
              className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-750 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span>Ask My AI Digital Twin</span>
            </button>

            <button
              id="hero-resume-summary-btn"
              onClick={() => {
                sound.playClick();
                onOpenResumeSummary();
              }}
              className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-indigo-300 border border-slate-750 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Official Résumé</span>
            </button>

            <button
              id="hero-proofs-btn"
              onClick={() => {
                sound.playClick();
                onOpenProof('doc-linc-appointment');
              }}
              className="px-4 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
              title="Inspect verified documentation"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Proofs</span>
            </button>
          </motion.div>
        </div>

        {/* Live Executive Metrics Grid with Interactive Verification Tooltips */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredStatIndex(i)}
              onMouseLeave={() => setHoveredStatIndex(null)}
              onClick={() => {
                sound.playClick();
                handleExploreTrackRecord();
              }}
              className="bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/50 p-3.5 sm:p-4 rounded-2xl transition-all group backdrop-blur-sm shadow-sm cursor-pointer relative"
            >
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-indigo-300 transition-colors block mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-200 block mb-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 font-mono block leading-tight">
                {stat.sub}
              </span>

              {/* Interactive micro badge on hover */}
              <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-emerald-400">Audited</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-indigo-400">→</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


