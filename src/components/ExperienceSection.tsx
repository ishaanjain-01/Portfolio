import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  ExternalLink,
  DollarSign,
  Globe2
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface Props {
  onOpenProof: (id: string) => void;
}

export const ExperienceSection: React.FC<Props> = ({ onOpenProof }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredExperiences = EXPERIENCES.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fulltime') return item.type === 'Full-time';
    if (activeFilter === 'zomato') return item.company.includes('Eternal') || item.company.includes('Zomato');
    if (activeFilter === 'linc') return item.company.includes('Linc');
    return true;
  });

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0e1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Work Experience & <span className="italic font-normal text-indigo-300">Commercial Impact</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-sans leading-relaxed">
            Hands-on corporate execution across global brand marketing, international exports, key account portfolio management, and revenue acceleration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { label: 'All Roles', value: 'all' },
            { label: 'Linc Limited (Global Exports)', value: 'linc' },
            { label: 'Eternal / Zomato (KAM & Dining)', value: 'zomato' },
            { label: 'Full-Time Leadership', value: 'fulltime' },
          ].map((tab) => (
            <button
              key={tab.value}
              id={`filter-exp-${tab.value}`}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === tab.value
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {filteredExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-all shadow-xl shadow-black/20"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                    {exp.company.includes('Linc') ? (
                      <Globe2 className="w-6 h-6" />
                    ) : (
                      <TrendingUp className="w-6 h-6 text-rose-400" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                        {exp.company}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                        {exp.type}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                        {exp.highlightMetric}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {exp.department}
                    </p>
                  </div>
                </div>

                {/* Date & Proof Action */}
                <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 shrink-0">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.location}
                    </span>
                  </div>

                  {exp.proofId && (
                    <button
                      id={`view-proof-${exp.id}`}
                      onClick={() => onOpenProof(exp.proofId!)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{exp.proofName || 'Verified Proof'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="py-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Key Deliverables & Quantified Outcomes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.description.map((desc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-slate-850"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs text-slate-400 mr-1">Core Competencies:</span>
                  {exp.coreSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
