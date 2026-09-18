import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Briefcase, 
  Layers, 
  Cpu, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Sliders, 
  Mail,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  ArrowUp,
  Sparkles,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../utils/audioEffects';

export type SectionKey = 
  | 'story'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'academics'
  | 'achievements'
  | 'leadership'
  | 'simulator'
  | 'contact';

export interface SectionMeta {
  key: SectionKey;
  label: string;
  shortLabel: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SECTIONS: SectionMeta[] = [
  {
    key: 'story',
    label: 'Narrative & Career Journey',
    shortLabel: 'Story & Journey',
    badge: '5 Chapters',
    description: 'Trajectory from St. Xavier\'s Finance Honors, European E-commerce to Masters\' Union',
    icon: BookOpen,
  },
  {
    key: 'experience',
    label: 'Corporate Track Record',
    shortLabel: 'Experience',
    badge: 'Zomato & Linc',
    description: '100% Sales attainment across 4 quarters at Zomato and ₹2Cr+ global trade at Linc',
    icon: Briefcase,
  },
  {
    key: 'projects',
    label: 'Flagship Ventures & Projects',
    shortLabel: 'Projects & Ventures',
    badge: '5 Ventures',
    description: 'ORA Gourmand Perfumes, Amazon EU E-Commerce, 9% Match Thesis & Civic Relief',
    icon: Layers,
  },
  {
    key: 'skills',
    label: 'Skills & Technical Matrix',
    shortLabel: 'Skills & Tech',
    badge: 'Dials & Radar',
    description: 'Interactive radial gauges, polar radar competencies, and operational tech stacks',
    icon: Cpu,
  },
  {
    key: 'academics',
    label: 'Academics & Research',
    shortLabel: 'Academics',
    badge: '1st Class Distinction',
    description: 'Masters\' Union PGP-TBM, St. Xavier\'s B.Com (Hons in Finance) & 91% Original Thesis',
    icon: GraduationCap,
  },
  {
    key: 'achievements',
    label: 'Honors & Trophy Cabinet',
    shortLabel: 'Honors',
    badge: '100% Attainment',
    description: 'Zomato All-Quarter Sales Attainment, District Best Club citations & academic awards',
    icon: Award,
  },
  {
    key: 'leadership',
    label: 'Civic Leadership & Governance',
    shortLabel: 'Leadership',
    badge: 'Leo Club President',
    description: 'Led humanitarian relief feeding 5,000+ citizens, youth mobilization, and collegiate finance',
    icon: ShieldCheck,
  },
  {
    key: 'simulator',
    label: 'Interactive ROAS Simulator',
    shortLabel: 'ROAS Tool',
    badge: 'Scenario Tool',
    description: 'Model ad spend, customer LTV, restaurant dining covers, and payback velocity in real time',
    icon: Sliders,
  },
  {
    key: 'contact',
    label: 'Connect & Collaboration',
    shortLabel: 'Contact',
    badge: 'Direct Connect',
    description: 'Direct ingestion contact form, official phone, Masters\' Union email, and LinkedIn network',
    icon: Mail,
  },
];

interface Props {
  activeSection: SectionKey;
  onSelectSection: (key: SectionKey) => void;
  children: React.ReactNode;
}

// Subtle, professional fade-in and slide-up entrance animation variants
const mainContentVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier deceleration curve
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const headerBannerVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

export const SectionDossierNav: React.FC<Props> = ({
  activeSection,
  onSelectSection,
  children
}) => {
  const currentIndex = SECTIONS.findIndex(s => s.key === activeSection);
  const currentMeta = SECTIONS[currentIndex] || SECTIONS[0];

  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  const scrollToContentTop = () => {
    const el = document.getElementById('dossier-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToIndexTop = () => {
    const el = document.getElementById('portfolio-dossier-index');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectFromIndex = (key: SectionKey) => {
    sound.playClick();
    if (key !== activeSection) {
      onSelectSection(key);
    }
    setTimeout(() => {
      scrollToContentTop();
    }, 50);
  };

  const handleSelectFromSticky = (key: SectionKey) => {
    sound.playClick();
    if (key !== activeSection) {
      onSelectSection(key);
    }
    scrollToContentTop();
  };

  const handleSelect = handleSelectFromSticky;
  const scrollToSectionTop = scrollToContentTop;

  return (
    <div id="dossier-hub" className="relative bg-[#070a14] pt-2 pb-20 border-t border-slate-800/80">
      {/* Ambient background accents */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Portfolio Dossier Index — Shifted to the top, directly below the introduction */}
      <div id="portfolio-dossier-index" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase font-mono">
                  Portfolio Dossier Index
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  09 Verified Chapters
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Direct chapter index to explore audited commercial results, venture blueprints, quantitative models, and academic credentials.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="jump-to-active-content-btn"
              onClick={scrollToContentTop}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Current Chapter: 0{currentIndex + 1} ({currentMeta.shortLabel})</span>
              <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>

        {/* 9 Dossier Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SECTIONS.map((sec, idx) => {
            const Icon = sec.icon;
            const isSelected = sec.key === activeSection;

            return (
              <button
                key={sec.key}
                id={`dossier-index-card-${sec.key}`}
                onClick={() => handleSelectFromIndex(sec.key)}
                className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 group relative cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-950/50 border-indigo-500 shadow-xl shadow-indigo-600/20 ring-1 ring-indigo-500/40'
                    : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 transition-colors ${
                  isSelected 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                    : 'bg-slate-900 text-slate-400 group-hover:text-indigo-400 group-hover:bg-slate-850'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-500 shrink-0">
                        0{idx + 1}
                      </span>
                      <span className={`text-xs font-bold truncate transition-colors ${
                        isSelected ? 'text-indigo-300' : 'text-white group-hover:text-indigo-300'
                      }`}>
                        {sec.label}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                      isSelected 
                        ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-400/40' 
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}>
                      {sec.badge}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-2.5">
                    {sec.description}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className={isSelected ? 'text-indigo-400 font-semibold' : 'text-slate-500 group-hover:text-slate-300'}>
                      {isSelected ? '● Currently Active' : 'Explore Chapter →'}
                    </span>
                    <span className="text-slate-600 group-hover:text-indigo-400 transition-colors">
                      {sec.shortLabel}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sticky Section Navigator Bar */}
      <div className="sticky top-14 sm:top-16 z-30 bg-[#070a14]/95 backdrop-blur-xl border-y border-slate-800/90 shadow-2xl py-3 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Section Indicator Pill & Return to Index */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="back-to-index-btn"
              onClick={scrollToIndexTop}
              className="p-2 sm:px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all shadow-sm"
              title="Jump up to Portfolio Dossier Index"
            >
              <LayoutGrid className="w-4 h-4 text-indigo-400" />
              <span className="hidden md:inline">Index Top ↑</span>
            </button>

            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 border-l border-slate-800 pl-3">
              <span className="text-indigo-400 font-bold">0{currentIndex + 1}</span>
              <span>/</span>
              <span>0{SECTIONS.length}</span>
            </div>
          </div>

          {/* Horizontal Scrolling Pill Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = section.key === activeSection;

              return (
                <button
                  key={section.key}
                  id={`tab-btn-${section.key}`}
                  onClick={() => handleSelectFromSticky(section.key)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all relative shrink-0 ${
                    isActive
                      ? 'text-white bg-indigo-600 shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/80 hover:bg-slate-850 border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{section.shortLabel}</span>
                  {isActive && (
                    <span className="hidden lg:inline text-[10px] font-mono bg-white/20 text-white px-1.5 py-0.5 rounded">
                      {section.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Prev / Next Controls */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              id="prev-section-mini-btn"
              disabled={!prevSection}
              onClick={() => prevSection && handleSelectFromSticky(prevSection.key)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title={prevSection ? `Previous: ${prevSection.label}` : 'At first section'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="next-section-mini-btn"
              disabled={!nextSection}
              onClick={() => nextSection && handleSelectFromSticky(nextSection.key)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title={nextSection ? `Next: ${nextSection.label}` : 'At last section'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Section Header Banner */}
      <div id="dossier-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/70 pb-4">
          <div className="min-h-[72px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${activeSection}`}
                variants={headerBannerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                  <span>SECTION 0{currentIndex + 1} OF 0{SECTIONS.length}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px]">
                    {currentMeta.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {currentMeta.label}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {currentMeta.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            {prevSection && (
              <button
                onClick={() => handleSelect(prevSection.key)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev: {prevSection.shortLabel}</span>
                <span className="sm:hidden">Prev</span>
              </button>
            )}
            {nextSection && (
              <button
                onClick={() => handleSelect(nextSection.key)}
                className="px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-medium text-indigo-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span className="hidden sm:inline">Next: {nextSection.shortLabel}</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Render Active Section Main Content with Subtle Fade-In & Slide-Up */}
      <div id="section-main-content-area" className="relative z-10 w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={mainContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section Footer Navigation Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="bg-slate-950/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Navigation Controls
            </span>
            <h4 className="text-base font-serif font-bold text-white">
              Finished exploring {currentMeta.shortLabel}?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Jump directly to any section above, or continue through Ishaan's portfolio sequentially.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {prevSection && (
              <button
                onClick={() => handleSelect(prevSection.key)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous: {prevSection.shortLabel}</span>
              </button>
            )}

            <button
              onClick={scrollToIndexTop}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Return to Portfolio Dossier Index"
            >
              <LayoutGrid className="w-4 h-4 text-indigo-400" />
              <span>Dossier Index ↑</span>
            </button>

            <button
              onClick={scrollToSectionTop}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Return to Section Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Section Top</span>
            </button>

            {nextSection && (
              <button
                onClick={() => handleSelect(nextSection.key)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition-all"
              >
                <span>Next: {nextSection.shortLabel}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
