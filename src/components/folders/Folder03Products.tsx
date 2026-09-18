import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  Trophy, 
  Award, 
  ShieldCheck, 
  Medal, 
  Flame, 
  Sparkles, 
  Calendar,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { LEADERSHIP, ACHIEVEMENTS } from '../../data/portfolioData';
import { sound } from '../../utils/audioEffects';

interface Props {
  onOpenProof?: (proofId: string) => void;
}

export const Folder03Products: React.FC<Props> = ({ onOpenProof }) => {
  const leoClub = LEADERSHIP.find(l => l.id === 'lead-leo-club') || LEADERSHIP[0];
  const xcms = LEADERSHIP.find(l => l.id === 'lead-xcms') || LEADERSHIP[1];
  const interact = LEADERSHIP.find(l => l.id === 'lead-interact') || LEADERSHIP[2];

  const competitionWins = ACHIEVEMENTS.filter(a => a.id !== 'ach-zomato-attainment' && a.id !== 'ach-perfect-commerce');

  return (
    <article className="space-y-12 sm:space-y-16">
      {/* Folder Header Note */}
      <div className="border-b border-[#E4E4E7] pb-6">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#71717A] uppercase tracking-wide-caps mb-2">
          <span>Folder Docket // 03</span>
          <span>·</span>
          <span>Part 3: Extra-Curriculars &amp; Social Contribution</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] mb-2 font-sans">
          Extra-Curriculars, Leadership &amp; Social Impact
        </h2>
        <p className="text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
          Grounding business instincts in civic leadership, community welfare, and high-pressure inter-collegiate strategy championships.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* Section 01: Grassroots Civic & Social Contribution */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
            Civic Service &amp; Community Welfare
          </span>
          <span className="font-mono text-xs text-[#71717A]">
            Direct Grassroots Impact
          </span>
        </div>

        {/* Featured Impact Card: Leo Club Presidency */}
        <div className="bg-white border border-[#E4E4E7] rounded-2xl p-6 sm:p-8 shadow-card-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4F4F5] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span className="font-mono text-xs font-semibold text-rose-900 uppercase">
                  Lions Clubs International · District 322B1
                </span>
                <span className="text-[#A1A1AA]">·</span>
                <span className="font-mono text-xs text-[#71717A]">2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090B]">
                Leo Club of Kolkata Sealdah · President
              </h3>
              <p className="text-xs text-[#71717A] font-mono">
                Executive Leadership &amp; Community Welfare Operations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#3F3F46]">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
                5,000+ Nutrition Relief
              </span>
              <p className="leading-relaxed">
                Spearheaded large-scale food and nutrition distribution drives across Kolkata, providing essential warm meals and nutritional kits to over 5,000 underprivileged children, families, and street dwellers.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
                Volunteer Mobilization (20+)
              </span>
              <p className="leading-relaxed">
                Recruited, mobilized, and led an active volunteer cadre of 20+ youth leaders. Coordinated logistics, partner procurement, hygienic packaging, and crowd management across multiple wards.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
                Healthcare &amp; Blood Camps
              </span>
              <p className="leading-relaxed">
                Organized neighborhood voluntary blood donation camps in coordination with licensed blood banks and public healthcare clinics, aiding local hospital emergency reserves.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Social Leadership Cards */}
        <div className="grid grid-cols-1 gap-4">
          {/* XCMS Treasurer Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-2xl p-6 shadow-card-subtle space-y-4">
            <div className="border-b border-[#F4F4F5] pb-3">
              <span className="font-mono text-[10px] uppercase text-[#71717A] block">Campus Society</span>
              <h4 className="text-base font-bold text-[#09090B]">Xavier's Commerce &amp; Management Society</h4>
              <p className="text-xs font-mono text-[#52525B]">Elected Treasurer (2022–2023) · St. Xavier's University</p>
            </div>

            <p className="text-xs text-[#52525B] leading-relaxed">
              Elected by 200+ competitive peers to steward society capital, annual budgets, and corporate sponsorships. Managed financial auditing and vendor disbursements for 10+ inter-collegiate flagship symposiums and academic conclaves.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E4E4E7]" />

      {/* ===================================================================== */}
      {/* Section 02: National Business Competitions & Honors */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
              Championships &amp; Case Competitions
            </span>
            <span className="font-mono text-xs text-[#71717A]">
              Collegiate Honors
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitionWins.map((comp) => (
            <div
              key={comp.id}
              className="bg-white border border-[#E4E4E7] rounded-2xl p-5 shadow-card-subtle flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-[#F4F4F5] text-[10px] font-mono font-semibold text-[#09090B] border border-[#E4E4E7]">
                    {comp.rank}
                  </span>
                  <span className="font-mono text-[10px] text-[#71717A]">
                    {comp.year}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#09090B] leading-snug">
                  {comp.title}
                </h4>

                <p className="text-xs font-mono text-[#71717A]">
                  {comp.event} · {comp.organizer}
                </p>

                <p className="text-xs text-[#52525B] leading-relaxed pt-1">
                  {comp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
