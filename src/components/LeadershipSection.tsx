import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Layers, 
  CheckCircle2,
  Calendar,
  Building
} from 'lucide-react';
import { LEADERSHIP, SKILLS_DATA } from '../data/portfolioData';

interface Props {
  onOpenProof: (id: string) => void;
}

export const LeadershipSection: React.FC<Props> = ({ onOpenProof }) => {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Civic Impact & Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Leadership, Civic Purpose & <span className="italic font-normal text-indigo-300">Governance</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-sans leading-relaxed">
            Stewardship of institutional budgets, leading civic hunger relief missions for 5,000+ citizens, and deep technical competencies.
          </p>
        </div>

        {/* Leadership Roles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {LEADERSHIP.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/70 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-violet-400" />
                    {item.period}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {item.impactMetrics}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-xs font-medium text-slate-300 mb-4">
                  {item.organization}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.proofId && (
                <button
                  id={`lead-proof-btn-${item.id}`}
                  onClick={() => onOpenProof(item.proofId!)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-950 hover:bg-violet-950/40 text-violet-300 hover:text-violet-200 border border-slate-800 hover:border-violet-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Inspect Charter / Certificate</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Civic Impact Summary & Community Governance */}
        <div className="bg-gradient-to-r from-violet-950/40 via-slate-900/60 to-indigo-950/40 border border-violet-500/20 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Civic Purpose: Empowering Communities at Scale
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Leading hunger relief missions serving 5,000+ citizens, managing 200+ member collegiate treasury, and championing ethical business leadership.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenProof('doc-leo-president')}
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-violet-600/20"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Inspect Leo Club Charter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
