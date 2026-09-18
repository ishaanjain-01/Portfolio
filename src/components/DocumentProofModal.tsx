import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Calendar, Building, FileText, CheckCircle, ExternalLink, Award } from 'lucide-react';
import { ProofDocument } from '../types';

interface Props {
  document: ProofDocument | null;
  onClose: () => void;
}

export const DocumentProofModal: React.FC<Props> = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <AnimatePresence>
      <div 
        id="proof-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="proof-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#111827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 p-6 border-b border-slate-800 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified Credential
                  </span>
                  {document.referenceNumber && (
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      {document.referenceNumber}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {document.title}
                </h3>
              </div>
            </div>
            <button
              id="close-proof-modal-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Meta Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Building className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Issuing Authority</span>
                  <span className="font-medium text-slate-200">{document.issuer}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Date / Record Timeline</span>
                  <span className="font-medium text-slate-200">{document.issueDate}</span>
                </div>
              </div>
            </div>

            {/* Badges */}
            {document.metadataBadges && document.metadataBadges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {document.metadataBadges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Verified Key Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" /> Key Verified Findings & Clauses
              </h4>
              <ul className="space-y-2.5">
                {document.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Narrative Summary */}
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/80 text-sm text-slate-300 leading-relaxed">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Document Overview & Authentication Context
              </span>
              <p>{document.fullSummary}</p>
            </div>

            {/* Source Document File Ref */}
            {document.fileLabel && (
              <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 font-mono truncate">
                  <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate">{document.fileLabel}</span>
                </div>
                <span className="text-emerald-400 font-medium shrink-0 ml-2">Authenticated File</span>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Matches attached physical records & academic credentials
            </span>
            <button
              id="confirm-proof-viewed-btn"
              onClick={onClose}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
            >
              Done Viewing
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
