import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, FileText, ArrowUpRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, VENTURES } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenProof?: (proofId: string) => void;
}

export const EditorialResumeModal: React.FC<Props> = ({ isOpen, onClose, onOpenProof }) => {
  useEffect(() => {
    if (isOpen) {
      sound.playModalOpen();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    sound.playModalClose();
    onClose();
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 14 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="relative w-full max-w-3xl bg-white border border-[#E4E4E7] rounded-3xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#F9F9FB] px-6 py-4 border-b border-[#E4E4E7] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase text-[#09090B] px-2.5 py-1 rounded bg-white border border-[#E4E4E7]">
                Executive Curriculum Vitae
              </span>
              <span className="text-xs text-[#71717A] font-mono hidden sm:inline">
                Ishaan Jain · 2026 Archive
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7] text-xs font-mono text-[#27272A] transition-colors cursor-pointer"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#71717A]" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full hover:bg-[#E4E4E7] text-[#71717A] hover:text-[#09090B] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Document */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto font-sans text-[#27272A]">
            {/* Header Identity */}
            <div className="border-b border-[#E4E4E7] pb-6 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-[#09090B]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[#71717A]">
                {PERSONAL_INFO.tagline}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#52525B] pt-2">
                <span>{PERSONAL_INFO.email}</span>
                <span>·</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>·</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wide text-[#71717A] border-b border-[#E4E4E7] pb-1.5">
                Corporate Track Record &amp; Commercial Experience
              </h2>

              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-bold text-[#09090B]">
                      {exp.role} — <span className="font-normal text-[#52525B]">{exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#71717A] shrink-0">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#52525B] list-disc list-inside">
                    {exp.description.slice(0, 4).map((desc, i) => (
                      <li key={i} className="leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Ventures */}
            <div className="space-y-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wide text-[#71717A] border-b border-[#E4E4E7] pb-1.5">
                Founding Ventures &amp; Product Architecture
              </h2>

              {VENTURES.map((v) => (
                <div key={v.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-bold text-[#09090B]">
                      {v.name} — <span className="font-normal text-[#52525B]">{v.category}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#71717A] shrink-0">
                      {v.period} · {v.revenueOrImpact}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                    {v.description[0]}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wide text-[#71717A] border-b border-[#E4E4E7] pb-1.5">
                Academics &amp; Higher Qualifications
              </h2>

              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-[#09090B]">
                      {edu.degree} — <span className="font-normal text-[#52525B]">{edu.institution}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#71717A] shrink-0">
                      {edu.period} · {edu.grade}
                    </span>
                  </div>
                  {edu.highlights && edu.highlights[0] && (
                    <p className="text-xs text-[#52525B]">
                      {edu.highlights[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#F9F9FB] px-6 py-4 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#71717A]">
            <span>Ishaan Jain Executive Profile</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#09090B] text-white text-xs font-medium hover:bg-[#27272A] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
