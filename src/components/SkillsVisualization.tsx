import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Globe2, 
  BarChart3, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Sliders, 
  Cpu, 
  Zap, 
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { SKILL_CATEGORIES_DATA } from '../data/portfolioData';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';

interface Props {
  onOpenProof?: (id: string) => void;
}

// Icon mapper for dynamic category icons
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Target':
      return <Target className="w-5 h-5 text-indigo-400" />;
    case 'Globe2':
      return <Globe2 className="w-5 h-5 text-emerald-400" />;
    case 'BarChart3':
      return <BarChart3 className="w-5 h-5 text-amber-400" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-cyan-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-violet-400" />;
  }
};

// SVG Animated Radial Progress Gauge Component
const RadialGauge: React.FC<{ 
  name: string; 
  level: number; 
  context: string; 
  toolType?: string;
  delay?: number;
}> = ({ name, level, context, toolType, delay = 0 }) => {
  const size = 110;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  // Determine gradient color based on level
  const getColor = () => {
    if (level >= 95) return { stroke: '#6366f1', text: 'text-indigo-400', glow: 'shadow-indigo-500/20' };
    if (level >= 92) return { stroke: '#10b981', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' };
    return { stroke: '#f59e0b', text: 'text-amber-400', glow: 'shadow-amber-500/20' };
  };

  const colorConfig = getColor();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 flex flex-col justify-between transition-all group hover:bg-slate-900 shadow-md"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            {toolType && (
              <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {toolType}
              </span>
            )}
            {level === 100 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                100% Attainment
              </span>
            )}
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
            {name}
          </h4>
        </div>

        {/* SVG Circular Dial */}
        <div className="relative w-[60px] h-[60px] shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
            {/* Background Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              className="text-slate-800 stroke-current"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Animated Gauge Ring */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={colorConfig.stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xs font-mono font-extrabold ${colorConfig.text}`}>
              {level}%
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-400 mt-2 leading-relaxed bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
        <span className="text-indigo-400 font-semibold mr-1">⚡ Focus:</span>
        {context}
      </p>
    </motion.div>
  );
};

// Animated Horizontal Skill Bar Component
const AnimatedSkillBar: React.FC<{
  name: string;
  level: number;
  context: string;
  toolType?: string;
  delay?: number;
}> = ({ name, level, context, toolType, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 hover:border-indigo-500/30 transition-all group"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
            {name}
          </span>
          {toolType && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
              {toolType}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-indigo-400">
            {level}%
          </span>
        </div>
      </div>

      {/* Progress Bar with Viewport Scroll Animation */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-2 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: delay + 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 rounded-full"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="truncate pr-2">{context}</span>
        <span className="text-[11px] font-mono text-slate-400 shrink-0">
          Verified Proficiency
        </span>
      </div>
    </motion.div>
  );
};

export const SkillsVisualization: React.FC<Props> = ({ onOpenProof }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(SKILL_CATEGORIES_DATA[0].id);
  const [displayMode, setDisplayMode] = useState<'gauges' | 'bars'>('gauges');

  const activeCategory = SKILL_CATEGORIES_DATA.find(c => c.id === selectedCategoryId) || SKILL_CATEGORIES_DATA[0];

  // Radar chart data comparing core functional pillars
  const radarData = [
    { subject: "Enterprise GTM", score: 96, fullMark: 100 },
    { subject: "Digital Ads & ROAS", score: 95, fullMark: 100 },
    { subject: "Cross-Border Trade", score: 92, fullMark: 100 },
    { subject: "Financial Modeling", score: 96, fullMark: 100 },
    { subject: "P&L & Accounting", score: 94, fullMark: 100 },
    { subject: "Sensory Formulation", score: 89, fullMark: 100 },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Execution Matrix & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Animated Skills & <span className="italic font-normal text-indigo-300">Competency Architecture</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-sans leading-relaxed">
            A rigorous balance of enterprise commercial quota discipline, financial accounting rigor, and hands-on international e-commerce operations.
          </p>
        </div>

        {/* Overview Bar: Macro Radar + Category Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Recharts Radar Polar Chart: High-Level Competency Geometry */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Multidisciplinary Radar
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                  94.2% Avg
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Commercial & Analytical Balance
              </h3>
              <p className="text-xs text-slate-400 mb-2">
                Evaluated across international deal structuring, financial modeling, and algorithmic ad optimization.
              </p>
            </div>

            {/* Radar Canvas */}
            <div className="w-full h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" tick={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="score"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                Empirical mastery
              </span>
              <span className="font-mono text-[11px] text-slate-300">
                100% target quota at Zomato
              </span>
            </div>
          </motion.div>

          {/* Category Selector Tabs & Description Card */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Category Navigation Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SKILL_CATEGORIES_DATA.map((cat) => {
                const isActive = cat.id === selectedCategoryId;
                return (
                  <button
                    key={cat.id}
                    id={`skill-cat-btn-${cat.id}`}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isActive 
                        ? 'bg-indigo-600/15 border-indigo-500/50 text-white shadow-lg shadow-indigo-500/10' 
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="mb-2">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold block leading-snug">
                        {cat.shortLabel}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {cat.skills.length} competencies
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Category Description Panel */}
            <motion.div 
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(activeCategory.iconName)}
                    <h3 className="text-lg font-bold text-white">
                      {activeCategory.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setDisplayMode('gauges')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        displayMode === 'gauges' 
                          ? 'bg-indigo-600 text-white shadow' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Show Radial Dial Charts"
                    >
                      Radial Dials
                    </button>
                    <button
                      onClick={() => setDisplayMode('bars')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        displayMode === 'bars' 
                          ? 'bg-indigo-600 text-white shadow' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Show Horizontal Progress Bars"
                    >
                      Linear Bars
                    </button>
                  </div>
                </div>

                {/* Brief text description for this skill category */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                  {activeCategory.description}
                </p>
              </div>

              {/* Applied Evidence Callout */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Scroll into view to trigger real-time animated value calculations
                </span>
                {onOpenProof && (
                  <button 
                    onClick={() => onOpenProof('doc-zomato-experience')}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Performance Proof</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Animated Skills Grid (Radial Gauges or Linear Bars) */}
        <AnimatePresence mode="wait">
          {displayMode === 'gauges' ? (
            <motion.div
              key={`gauges-${activeCategory.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <RadialGauge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  context={skill.context}
                  toolType={skill.toolType}
                  delay={index * 0.08}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`bars-${activeCategory.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {activeCategory.skills.map((skill, index) => (
                <AnimatedSkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  context={skill.context}
                  toolType={skill.toolType}
                  delay={index * 0.08}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Competency Highlights Footer */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Certified & Verified Quantitative Rigor
              </h4>
              <p className="text-xs text-slate-400">
                Microsoft Office Specialist Excel 365 Certified • First Class B.Com Finance • Turnitin Verified Research
              </p>
            </div>
          </div>
          {onOpenProof && (
            <button
              onClick={() => onOpenProof('doc-sxuk-transcript')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 transition-all shrink-0"
            >
              Inspect University Transcripts
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
