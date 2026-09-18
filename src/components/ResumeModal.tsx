import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileDown, Printer, ShieldCheck, Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, VENTURES, ACHIEVEMENTS, LEADERSHIP } from '../data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenProof: (id: string) => void;
}

export const ResumeModal: React.FC<Props> = ({ isOpen, onClose, onOpenProof }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        id="resume-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="resume-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#0d121f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Controls */}
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                Executive Résumé
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Verified Career & Academic Record
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="print-resume-btn"
                onClick={handlePrint}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                id="close-resume-modal-btn"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto bg-[#0a0e1a] text-slate-200">
            {/* Header / Name */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider mb-2">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs sm:text-sm text-indigo-300 font-medium mb-3">
                {PERSONAL_INFO.tagline}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">{PERSONAL_INFO.email}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                    linkedin.com/in/ishaan-jain-b99033201
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                    instagram.com/ishaanjain01
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-slate-800/80 pb-1">
                Work Experience
              </h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="font-bold text-white text-sm">{exp.role}</span>
                        <span className="text-xs text-indigo-300 ml-2 font-semibold">@ {exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{exp.period} | {exp.location}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {exp.description.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-slate-800/80 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="font-bold text-white text-sm">{edu.institution}</span>
                      <span className="text-xs font-mono text-slate-400">{edu.period} | {edu.location}</span>
                    </div>
                    <p className="text-xs text-indigo-300">{edu.degree} — <span className="text-slate-300 font-semibold">{edu.grade}</span></p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-slate-500">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Ventures & Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-slate-800/80 pb-1">
                Projects & Entrepreneurship
              </h2>
              <div className="space-y-3">
                {VENTURES.map((v) => (
                  <div key={v.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">{v.name} ({v.tagline})</span>
                      <span className="text-xs font-mono text-emerald-400">{v.revenueOrImpact}</span>
                    </div>
                    <p className="text-xs text-slate-400">{v.description[0]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Honors & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-slate-800/80 pb-1">
                Selected Honors & Podium Finishes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {ACHIEVEMENTS.slice(0, 6).map((ach) => (
                  <div key={ach.id} className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                    <span className="font-bold text-white block">{ach.title}</span>
                    <span className="text-slate-400 block text-[11px]">{ach.event} ({ach.rank})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
