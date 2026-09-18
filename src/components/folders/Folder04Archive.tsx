import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Quote
} from 'lucide-react';
import { EDUCATION_LIST, VENTURES, TESTIMONIALS } from '../../data/portfolioData';
import { sound } from '../../utils/audioEffects';

interface Props {
  onOpenProof?: (proofId: string) => void;
}

export const Folder04Archive: React.FC<Props> = ({ onOpenProof }) => {
  const mastersUnion = EDUCATION_LIST.find(e => e.id === 'masters-union') || EDUCATION_LIST[0];
  const sxuk = EDUCATION_LIST.find(e => e.id === 'st-xaviers-university') || EDUCATION_LIST[1];
  const dps = EDUCATION_LIST.find(e => e.id === 'dps-megacity') || EDUCATION_LIST[2];
  const dissertation = VENTURES.find(v => v.id === 'women-ceo-research') || VENTURES[3];

  return (
    <article className="space-y-12 sm:space-y-16">
      {/* Folder Header Note */}
      <div className="border-b border-[#E4E4E7] pb-6">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#71717A] uppercase tracking-wide-caps mb-2">
          <span>Folder Docket // 04</span>
          <span>·</span>
          <span>Part 4: Studies, Academic Pedigree &amp; Research</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] mb-2 font-sans">
          Studies &amp; Academic Background
        </h2>
        <p className="text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
          Quantitative finance rigor, empirical econometrics research, and institutional business management credentials backed by verified university transcripts and merit honors.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* Education 01: Masters' Union */}
      {/* ===================================================================== */}
      <section className="bg-white border border-[#E4E4E7] rounded-2xl p-6 sm:p-8 shadow-card-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4F4F5] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-mono text-[11px] font-semibold">
                Merit Scholarship Recipient
              </span>
              <span className="text-[#A1A1AA]">·</span>
              <span className="font-mono text-xs text-[#71717A]">2026 – 2027</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B]">
              Masters' Union · PGP in Technology &amp; Business Management
            </h3>
            <p className="text-xs text-[#71717A] font-mono">
              Cyberpark, DLF Phase II, Gurugram, India
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#3F3F46]">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Merit Fellowship
            </span>
            <p className="leading-relaxed">
              Awarded competitive merit scholarship recognition based on prior cross-border enterprise track record and quantified corporate commercial metrics.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Curricular Focus
            </span>
            <p className="leading-relaxed">
              Advanced masterclasses in corporate finance, venture capital economics, quantitative product analytics, digital business architecture, and AI-assisted workflows.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Entrepreneurial Application
            </span>
            <p className="leading-relaxed">
              Applying cross-functional curriculum to venture building, quantitative unit economics, tech-enabled operations, and scaling commercial ventures.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* Education 02: St. Xavier's University, Kolkata */}
      {/* ===================================================================== */}
      <section className="bg-white border border-[#E4E4E7] rounded-2xl p-6 sm:p-8 shadow-card-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4F4F5] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-mono text-[11px] font-semibold">
                First Class with Distinction · CGPA 7.85 / 10
              </span>
              <span className="text-[#A1A1AA]">·</span>
              <span className="font-mono text-xs text-[#71717A]">2020 – 2023</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B]">
              St. Xavier's University, Kolkata · B.Com (Honours) in Finance
            </h3>
            <p className="text-xs text-[#71717A] font-mono">
              Faculty of Commerce &amp; Management · Action Area III, New Town, Kolkata
            </p>
          </div>
        </div>

        {/* Selected High-Performance Subject Ledger */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
            Academic Performance Ledger (Certified Official Marks)
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {sxuk.subjectsOrCourses?.slice(0, 8).map((course) => (
              <div
                key={course.name}
                className="p-3 rounded-lg bg-[#F9F9FB] border border-[#E4E4E7]/80 flex flex-col justify-between"
              >
                <span className="text-xs font-medium text-[#27272A] line-clamp-1">{course.name}</span>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#E4E4E7]/60">
                  <span className="font-mono text-xs font-bold text-[#09090B]">{course.score}</span>
                  <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    {course.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* Research Showcase: Women CEOs Empirical Dissertation */}
      {/* ===================================================================== */}
      <section className="bg-[#FAF9F5] border border-[#E6DEC9] rounded-2xl p-6 sm:p-8 shadow-card-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6DEC9] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 font-mono text-[11px] font-semibold">
                Empirical Research Dissertation
              </span>
              <span className="text-[#A1A1AA]">·</span>
              <span className="font-mono text-xs text-[#71717A]">Undergraduate Thesis</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B]">
              Impact of Women CEOs on Corporate Performance in India
            </h3>
            <p className="text-xs text-[#71717A] font-mono">
              Supervised by Prof. Monojit Dutta · Turnitin Originality: 91% (Only 9% Similarity Match)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#3F3F46]">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              190 Surveyed Respondents
            </span>
            <p className="leading-relaxed">
              Conducted primary fieldwork gathering 190 validated corporate responses across banking, IT, FMCG, and manufacturing to examine structural executive glass ceilings and organizational culture.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              5 Public Indian Corporate Cases
            </span>
            <p className="leading-relaxed">
              Analyzed multi-year post-transition financial performance (Total Revenue, PAT, Asset Growth) at Axis Bank (Shikha Sharma), Britannia (Vinita Bali), Welspun (Dipali Goenka), Lupin (Vinita Gupta), and HCL (Roshni Nadar Malhotra).
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#09090B] uppercase block">
              Quantitative Rigor
            </span>
            <p className="leading-relaxed">
              Deployed statistical hypothesis testing and paired sample analysis evaluating profitability and governance indicators across female leadership tenure versus previous male leadership.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* Faculty Testimonials & Endorsements */}
      {/* ===================================================================== */}
      <section className="space-y-4">
        <span className="font-mono text-xs font-bold text-[#71717A] uppercase tracking-wide block">
          Faculty Endorsements &amp; Academic Recommendations
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTIMONIALS.slice(0, 2).map((test) => (
            <div
              key={test.id}
              className="bg-white border border-[#E4E4E7] rounded-2xl p-6 shadow-card-subtle flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-[#A48E62]" />
                <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4F4F5]">
                <strong className="text-xs font-bold text-[#09090B] block">{test.author}</strong>
                <span className="text-[11px] text-[#71717A] block">{test.designation}</span>
                <span className="text-[10px] font-mono text-[#A1A1AA] block">{test.institution}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
