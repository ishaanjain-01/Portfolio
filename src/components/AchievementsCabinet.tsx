import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  Medal, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle,
  Flame,
  PartyPopper
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

interface Props {
  onOpenProof: (id: string) => void;
}

export const AchievementsCabinet: React.FC<Props> = ({ onOpenProof }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#3b82f6', '#10b981', '#f59e0b'],
    });
  };

  const categories = ['All', 'Finance', 'Rebranding & Marketing', 'Corporate Milestone', 'National Case Comp', 'Academics'];

  const filtered = ACHIEVEMENTS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return Trophy;
      case 'Medal': return Medal;
      case 'Flame': return Flame;
      case 'ShieldAlert': return ShieldAlert;
      case 'TrendingUp': return TrendingUp;
      case 'CheckCircle': return CheckCircle;
      default: return Award;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Case Competitions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Trophy Cabinet & <span className="italic font-normal text-indigo-300">Verified Honors</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              id="trigger-celebrate-confetti-btn"
              onClick={triggerConfetti}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              <PartyPopper className="w-4 h-4" />
              <span>Celebrate Wins!</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded mb-1">
                      {item.rank}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-medium text-slate-300 mb-1">
                    {item.event}
                  </p>
                  <p className="text-[11px] text-slate-400 mb-4">
                    {item.organizer}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  {item.proofId ? (
                    <button
                      id={`inspect-honor-${item.id}`}
                      onClick={() => onOpenProof(item.proofId!)}
                      className="w-full py-1.5 px-3 rounded-lg bg-slate-950 hover:bg-amber-950/30 text-amber-300 hover:text-amber-200 border border-slate-800 hover:border-amber-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Inspect Verified Trophy</span>
                    </button>
                  ) : (
                    <span className="text-[11px] text-slate-400 block text-center py-1">
                      Verified National Finalist
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
