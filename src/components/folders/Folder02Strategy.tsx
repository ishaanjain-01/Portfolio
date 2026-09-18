import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  Briefcase, 
  ShieldCheck, 
  ArrowUpRight,
  Globe2,
  CheckCircle2,
  Target,
  Award
} from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';
import { sound } from '../../utils/audioEffects';

interface Props {
  onOpenProof?: (proofId: string) => void;
}

export const Folder02Strategy: React.FC<Props> = ({ onOpenProof }) => {
  const lincExp = EXPERIENCES.find(e => e.id === 'linc-deputy-manager') || EXPERIENCES[0];
  const zomatoExp = EXPERIENCES.find(e => e.id === 'zomato-kam') || EXPERIENCES[1];
  const zomatoIntern = EXPERIENCES.find(e => e.id === 'zomato-intern') || EXPERIENCES[2];

  return (
    <article className="space-y-12 sm:space-y-16">
      {/* Folder Header Note */}
      <div className="border-b border-[#E4E4E7] pb-6">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#71717A] uppercase tracking-wide-caps mb-2">
          <span>Folder Docket // 02</span>
          <span>·</span>
          <span>Part 2: Commercial &amp; Enterprise Work Experience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] mb-2 font-sans">
          Work Experience &amp; Leadership
        </h2>
        <p className="text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
          Operating at the intersection of enterprise P&amp;L growth, multi-market international distribution, high-value client acquisitions, and quantitative merchant return engines.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* Experience 01: Linc Limited */}
      {/* ===================================================================== */}
      <div className="bg-white border border-[#E4E4E7] rounded-2xl p-6 sm:p-8 shadow-card-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4F4F5] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-semibold text-[#09090B] uppercase">
                Role 01 // Global Expansion &amp; Product Growth
              </span>
              <span className="text-[#A1A1AA]">·</span>
              <span className="font-mono text-xs text-[#71717A]">
                Mar 2025 – Jun 2026
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B]">
              Linc Limited · Deputy Manager – Product Growth &amp; Market Development
            </h3>
            <p className="text-xs text-[#71717A] font-mono mt-0.5">
              Corporate &amp; MISMAT Department · Kolkata HO · Full-Time
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#3F3F46]">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Multi-Country Rollout (50+ Nations)
            </span>
            <p className="leading-relaxed">
              Led end-to-end commercial product introductions across 50+ countries spanning APAC, MEA, Europe, and LATAM. Synchronized localized regulatory compliance, export SKU design, and custom packaging across distinct consumer markets.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              ₹2 Cr+ Incremental Revenue
            </span>
            <p className="leading-relaxed">
              Delivered over ₹2 Cr in incremental top-line within 3 quarters of FY 2025-26. Negotiated high-stakes agreements with international trade partners and exhibition delegates, reducing commercial overhead by ₹35 Lakhs.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Global Modern Trade Channel
            </span>
            <p className="leading-relaxed">
              Expanded retail shelf presence for the flagship Pentonic brand across European Modern Trade chains, orchestrating ATL, BTL, and trade marketing campaigns alongside regional distribution partners.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#F4F4F5] flex flex-wrap gap-2">
          {lincExp.coreSkills.map(skill => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[11px] font-mono text-[#3F3F46]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* Experience 02: Eternal Limited (Zomato) - Key Accounts Manager */}
      {/* ===================================================================== */}
      <div className="bg-white border border-[#E4E4E7] rounded-2xl p-6 sm:p-8 shadow-card-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4F4F5] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-semibold text-[#09090B] uppercase">
                Role 02 // High-Growth Enterprise Revenue
              </span>
              <span className="text-[#A1A1AA]">·</span>
              <span className="font-mono text-xs text-[#71717A]">
                Sep 2023 – Mar 2025
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B]">
              Eternal Limited (Formerly Zomato) · Key Accounts Manager
            </h3>
            <p className="text-xs text-[#71717A] font-mono mt-0.5">
              Dining Out &amp; Supply Department · Kolkata Hub · Full-Time
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#3F3F46]">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              100% Target Achievement Throughout Employment Tenure
            </span>
            <p className="leading-relaxed">
              Achieved 100% sales targets across every quarter throughout employment tenure at Zomato. Formally recognized as the sole individual in the entire 12-member Kolkata sales team to maintain this unbroken benchmark.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              7–10X ROAS &amp; 20% City Ad Share
            </span>
            <p className="leading-relaxed">
              Managed Kolkata's top enterprise dining portfolios, positioning ad inventory as a measurable return engine. Generated ~20% of the city's total dining ad revenue while maintaining 7–10X merchant ROAS.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Historic FTE Conversion &amp; Retention
            </span>
            <p className="leading-relaxed">
              Started as top-performing merchant onboarding intern (onboarding 100+ dining partners) and earned the first intern-to-full-time conversion in Zomato Kolkata history, maintaining 90%+ advertiser renewal rates.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#F4F4F5] flex flex-wrap gap-2">
          {zomatoExp.coreSkills.map(skill => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[11px] font-mono text-[#3F3F46]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
