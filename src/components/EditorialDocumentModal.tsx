import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Calendar, Building, CheckCircle, FileText, Download } from 'lucide-react';
import { PROOF_DOCUMENTS } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

interface Props {
  documentId: string | null;
  onClose: () => void;
}

export const EditorialDocumentModal: React.FC<Props> = ({ documentId, onClose }) => {
  useEffect(() => {
    if (documentId) {
      sound.playModalOpen();
    }
  }, [documentId]);

  if (!documentId) return null;
  const doc = PROOF_DOCUMENTS[documentId];
  if (!doc || !doc.actualDocumentUrl) return null;

  const handleClose = () => {
    sound.playModalClose();
    onClose();
  };

  const isImage = doc.actualDocumentUrl.match(/\.(jpg|jpeg|png|webp|svg)$/i);

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 14 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="relative w-full max-w-4xl bg-white border border-[#E4E4E7] rounded-3xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#F9F9FB] px-6 py-4 border-b border-[#E4E4E7] flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  <span>Original Document</span>
                </span>
                {doc.referenceNumber && (
                  <span className="font-mono text-[11px] text-[#71717A]">
                    {doc.referenceNumber}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-sans text-[#09090B]">
                {doc.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={doc.actualDocumentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7] text-xs font-mono text-[#27272A] transition-colors"
                title="Open in new window"
              >
                <Download className="w-3.5 h-3.5 text-[#71717A]" />
                <span className="hidden sm:inline">Open Original</span>
              </a>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full hover:bg-[#E4E4E7] text-[#71717A] hover:text-[#09090B] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actual Document Embed Body */}
          <div className="p-4 sm:p-6 bg-[#F4F4F5] flex items-center justify-center min-h-[60vh] max-h-[75vh] overflow-hidden">
            {isImage ? (
              <img
                src={doc.actualDocumentUrl}
                alt={doc.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md"
              />
            ) : (
              <iframe
                src={doc.actualDocumentUrl}
                title={doc.title}
                className="w-full h-[70vh] rounded-xl border border-[#E4E4E7] bg-white"
              />
            )}
          </div>

          {/* Footer */}
          <div className="bg-[#F9F9FB] px-6 py-3.5 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#71717A]">
            <span>{doc.issuer} · {doc.issueDate}</span>
            <button
              onClick={handleClose}
              className="px-4 py-1.5 rounded-full bg-[#09090B] text-white text-xs font-medium hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
