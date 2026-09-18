import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  FileCheck, 
  Quote, 
  BookCheck, 
  Sparkles, 
  Building, 
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { EDUCATION_LIST, TESTIMONIALS } from '../data/portfolioData';

interface Props {
  onOpenProof: (id: string) => void;
}

export const EducationAndResearch: React.FC<Props> = ({ onOpenProof }) => {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section id="education" className="py-20 md:py-28 bg-[#0e1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Education, Rigor & <span className="italic font-normal text-indigo-300">Faculty Endorsements</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-sans leading-relaxed">
            Grounded in quantitative finance, corporate governance, and modern business technology from India's premier academic institutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {EDUCATION_LIST.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {edu.period}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {edu.institution}
                </h3>
                <p className="text-xs font-medium text-slate-300 mb-4">
                  {edu.degree}
                </p>

                <ul className="space-y-2 mb-6">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {edu.proofId && (
                <button
                  id={`edu-proof-btn-${edu.id}`}
                  onClick={() => onOpenProof(edu.proofId!)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-950 hover:bg-indigo-950/40 text-indigo-300 hover:text-indigo-200 border border-slate-800 hover:border-indigo-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Inspect Verified Marks / Transcript</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive St. Xavier's University Transcript Accordion */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Academic Deep Dive
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Roll No: 1122 | Total: 1897 / 2600 Marks
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                St. Xavier's University B.Com (Hons in Finance) Coursework & Scores
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                First Class with Distinction • 148 Academic & Co-Curricular Credits Earned
              </p>
            </div>
            <button
              id="toggle-transcript-table-btn"
              onClick={() => setShowTranscript(!showTranscript)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors shrink-0"
            >
              <span>{showTranscript ? 'Hide Subject Grades' : 'View Verified Marks Table'}</span>
              {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showTranscript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-slate-800"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {EDUCATION_LIST[1].subjectsOrCourses?.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-medium text-slate-300 block">
                        {sub.name}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Grade Point: {sub.grade}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {sub.score}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-850">
                <span>Pass Certificate Awarded 20/07/2023 by Vice Chancellor</span>
                <button
                  id="inspect-transcript-full-doc"
                  onClick={() => onOpenProof('doc-sxuk-transcript')}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2"
                >
                  View Full 4-Page Transcript Record
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Letters of Recommendation & Testimonials */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Quote className="w-5 h-5 text-indigo-400" />
            <span>Faculty Letters of Recommendation & Endorsements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 2).map((test) => (
              <div
                key={test.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-xl relative"
              >
                <div>
                  <Quote className="w-8 h-8 text-indigo-500/20 mb-3" />
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-end justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">{test.author}</h4>
                    <p className="text-xs text-indigo-300">{test.designation}</p>
                    <p className="text-[11px] text-slate-400">{test.institution}</p>
                  </div>
                  {test.proofId && (
                    <button
                      id={`view-lor-${test.id}`}
                      onClick={() => onOpenProof(test.proofId!)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold shrink-0"
                    >
                      View Signed LOR
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
