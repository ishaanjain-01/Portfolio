import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Target, 
  Sparkles, 
  Globe2, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Quote, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Calendar, 
  Layers,
  Flame,
  Bookmark
} from 'lucide-react';
import { NARRATIVE_STAGES, PERSONAL_INFO } from '../data/portfolioData';
import { NarrativeStage } from '../types';

interface Props {
  onOpenProof?: (id: string) => void;
}

export const AboutAndPhilosophy: React.FC<Props> = ({ onOpenProof }) => {
  const [activeStageId, setActiveStageId] = useState<string>(NARRATIVE_STAGES[0].id);
  const [viewMode, setViewMode] = useState<'stream' | 'chapters'>('stream');

  const activeStage = NARRATIVE_STAGES.find(s => s.id === activeStageId) || NARRATIVE_STAGES[0];
  const activeIndex = NARRATIVE_STAGES.findIndex(s => s.id === activeStageId);

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      default:
        return <Target className="w-5 h-5 text-indigo-400" />;
    }
  };

  const nextStage = () => {
    if (activeIndex < NARRATIVE_STAGES.length - 1) {
      setActiveStageId(NARRATIVE_STAGES[activeIndex + 1].id);
    }
  };

  const prevStage = () => {
    if (activeIndex > 0) {
      setActiveStageId(NARRATIVE_STAGES[activeIndex - 1].id);
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Unfolding Narrative Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              The Journey: <span className="italic font-normal text-indigo-300">Milestones, Mindset & Ambition</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="bg-slate-900/90 border border-slate-800 p-1 rounded-xl flex items-center gap-1">
              <button
                id="view-stream-btn"
                onClick={() => setViewMode('stream')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'stream'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Continuous Story
              </button>
              <button
                id="view-chapters-btn"
                onClick={() => setViewMode('chapters')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'chapters'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Chapter Deep-Dive
              </button>
            </div>
          </div>
        </div>

        {/* Narrative Chapter Navigation Bar */}
        <div className="mb-14 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-3 min-w-[720px] sm:min-w-0 justify-between bg-slate-900/60 p-2.5 rounded-2xl border border-slate-800">
            {NARRATIVE_STAGES.map((stage, idx) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  id={`chapter-tab-${stage.id}`}
                  onClick={() => {
                    setActiveStageId(stage.id);
                    if (viewMode === 'stream') {
                      const el = document.getElementById(`narrative-card-${stage.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all text-left ${
                    isSelected
                      ? 'bg-indigo-600/20 border border-indigo-500/40 text-white'
                      : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {stage.chapterNumber}
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold block truncate">
                      {stage.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {stage.period}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chapter Deep-Dive View Mode */}
        {viewMode === 'chapters' && (
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
          >
            {/* Header / Chapter Marker */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  {getStageIcon(activeStage.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                      Chapter {activeStage.chapterNumber}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {activeStage.period}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {activeStage.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                {activeStage.badge}
              </span>
            </div>

            {/* Tagline Banner */}
            <div className="bg-slate-950/70 border-l-4 border-indigo-500 p-4 rounded-r-2xl mb-8">
              <p className="text-slate-200 text-base sm:text-lg font-serif italic leading-relaxed">
                "{activeStage.tagline}"
              </p>
            </div>

            {/* Narrative Prose Blocks */}
            <div className="space-y-4 mb-8 text-slate-300 leading-relaxed text-sm sm:text-base">
              {activeStage.narrativeParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Grid: Key Milestones + Personality Traits */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
              {/* Key Milestones */}
              <div className="md:col-span-7 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Key Milestones Achieved
                </h4>
                <div className="space-y-2.5">
                  {activeStage.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personality Traits & Strengths */}
              <div className="md:col-span-5 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Personality Traits & Strengths
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeStage.personalityTraits.map((trait, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700/80"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  ⚡ Defined by hands-on execution and high-accountability results.
                </div>
              </div>
            </div>

            {/* Special Future Ambitions Section for Chapter 5 */}
            {activeStage.futureAmbitionPointers && (
              <div className="bg-gradient-to-r from-violet-950/40 via-indigo-950/30 to-slate-950 p-6 rounded-2xl border border-indigo-500/30 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Future Ambitions & Long-Term Vision
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  {activeStage.futureAmbitionPointers.map((ambition, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{ambition}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mindset Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 flex items-start gap-3 mb-8">
              <Quote className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 italic mb-1">
                  "{activeStage.quote}"
                </p>
                <span className="text-[11px] text-indigo-400 font-mono">
                  — {activeStage.quoteAuthor}
                </span>
              </div>
            </div>

            {/* Chapter Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <button
                onClick={prevStage}
                disabled={activeIndex === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeIndex === 0
                    ? 'opacity-40 cursor-not-allowed text-slate-400'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Chapter</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                Chapter {activeIndex + 1} of {NARRATIVE_STAGES.length}
              </span>

              <button
                onClick={nextStage}
                disabled={activeIndex === NARRATIVE_STAGES.length - 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeIndex === NARRATIVE_STAGES.length - 1
                    ? 'opacity-40 cursor-not-allowed text-slate-400'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                }`}
              >
                <span>Next Chapter</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Continuous Scroll Story Mode */}
        {viewMode === 'stream' && (
          <div className="space-y-12 relative">
            {/* Connecting Vertical Story Spine */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-emerald-500 to-violet-500 opacity-40 pointer-events-none" />

            {NARRATIVE_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.id}
                id={`narrative-card-${stage.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="md:pl-20 relative group"
              >
                {/* Timeline Bead on the Spine */}
                <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-emerald-400 transition-all z-10">
                  <span className="text-[10px] font-mono font-bold text-indigo-300">
                    {stage.chapterNumber}
                  </span>
                </div>

                <div className="bg-slate-900/70 border border-slate-800/90 hover:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl transition-all">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                        Chapter {stage.chapterNumber}
                      </span>
                      <span className="text-slate-400 text-xs">•</span>
                      <span className="text-xs font-mono text-slate-400">
                        {stage.period}
                      </span>
                      <span className="text-slate-400 text-xs">•</span>
                      <span className="text-xs text-slate-400">
                        {stage.location}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                      {stage.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-6 italic bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    "{stage.tagline}"
                  </p>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stage.narrativeParagraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Milestones & Traits Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
                    <div className="lg:col-span-7 bg-slate-950/60 p-4 rounded-xl border border-slate-800/70">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block mb-2">
                        Key Milestones
                      </span>
                      <div className="space-y-1.5">
                        {stage.milestones.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-950/60 p-4 rounded-xl border border-slate-800/70 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-2">
                          Core Personality Traits
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.personalityTraits.map((trait, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Future Ambitions for Stage 5 */}
                  {stage.futureAmbitionPointers && (
                    <div className="bg-gradient-to-r from-violet-950/30 to-slate-950 p-5 rounded-2xl border border-violet-500/20 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2.5 flex items-center gap-1.5">
                        <Flame className="w-4 h-4" />
                        Future Ambitions & Horizon Outlook
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                        {stage.futureAmbitionPointers.map((pointer, ptIdx) => (
                          <div key={ptIdx} className="flex items-start gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{pointer}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quote Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="italic truncate pr-4">
                      "{stage.quote}"
                    </span>
                    <span className="text-indigo-400 font-mono text-[11px] shrink-0">
                      {stage.quoteAuthor}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
