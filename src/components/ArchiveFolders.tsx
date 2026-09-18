import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ArrowLeft,
  Bookmark,
  Volume2,
  VolumeX,
  FolderClosed,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Folder01Ventures } from './folders/Folder01Ventures';
import { Folder02Strategy } from './folders/Folder02Strategy';
import { Folder03Products } from './folders/Folder03Products';
import { Folder04Archive } from './folders/Folder04Archive';
import { SteppedFolderRack } from './SteppedFolderRack';
import { sound } from '../utils/audioEffects';

interface Props {
  activeFolderIndex: number | null;
  onSelectFolder: (index: number) => void;
  onCloseFolder?: () => void;
  onOpenProof?: (proofId: string) => void;
}

export interface FolderMeta {
  index: number;
  tabLabel: string;
  shortLabel: string;
  fullTitle: string;
  category: string;
  docketCode: string;
  description: string;
  highlights: string[];
}

export const ARCHIVE_FOLDERS: FolderMeta[] = [
  {
    index: 0,
    tabLabel: "01 / Projects & Ventures",
    shortLabel: "01 / Projects",
    fullTitle: "Part 1: All Projects & Builds",
    category: "Projects",
    docketCode: "DOC-2026-01-PROJECTS",
    description: "Autonomous AI spend parser, mass-premium fragrance brand & cross-border e-commerce.",
    highlights: ["OmniSpend AI", "ORA Gourmand", "Door Step Essentials"]
  },
  {
    index: 1,
    tabLabel: "02 / Work Experience",
    shortLabel: "02 / Experience",
    fullTitle: "Part 2: Work Experience & Roles",
    category: "Experience",
    docketCode: "DOC-2025-02-EXPERIENCE",
    description: "Enterprise P&L expansion, multi-market international rollouts, and 100% target achievement throughout tenure.",
    highlights: ["Linc Ltd (50+ Countries)", "Zomato (100% Target Achievement)", "7–10X ROAS"]
  },
  {
    index: 2,
    tabLabel: "03 / Extra-Curriculars",
    shortLabel: "03 / Leadership",
    fullTitle: "Part 3: Extra-Curriculars & Impact",
    category: "Leadership",
    docketCode: "DOC-2024-03-LEADERSHIP",
    description: "Grassroots civic service, student body governance, and national case championships.",
    highlights: ["Leo Club President (5,000+ Fed)", "XCMS Society Treasurer", "SRCC Top 10"]
  },
  {
    index: 3,
    tabLabel: "04 / Studies & Background",
    shortLabel: "04 / Studies",
    fullTitle: "Part 4: Studies & Academic Background",
    category: "Academics",
    docketCode: "DOC-2026-04-STUDIES",
    description: "Quantitative finance rigor, empirical econometrics research, and institutional business training.",
    highlights: ["Masters' Union Merit Scholar", "St. Xavier's (First Class)", "Women CEOs Thesis"]
  }
];

export const ArchiveFolders: React.FC<Props> = ({
  activeFolderIndex,
  onSelectFolder,
  onCloseFolder,
  onOpenProof
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const prevIndexRef = useRef<number | null>(activeFolderIndex);
  const [direction, setDirection] = useState<number>(1);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(() => sound.isEnabled());

  // Velvele Deck Fan Animation Variants (Direct Pinterest Match: dimensional fan glide & tilt)
  const velveleDeckVariants = {
    enter: (dir: number) => ({
      x: dir * 42,
      y: 55,
      rotateZ: dir * 2.2,
      rotateX: 7,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      y: 0,
      rotateZ: 0,
      rotateX: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 24 },
        y: { type: "spring", stiffness: 320, damping: 24 },
        rotateZ: { type: "spring", stiffness: 300, damping: 22 },
        rotateX: { type: "spring", stiffness: 300, damping: 22 },
        opacity: { duration: 0.18 },
        scale: { type: "spring", stiffness: 320, damping: 24 }
      }
    },
    exit: (dir: number) => ({
      x: dir * -42,
      y: -28,
      rotateZ: dir * -1.8,
      rotateX: -5,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.16, ease: "easeIn" }
    })
  };

  // Listen for audio toggle state changes across app
  useEffect(() => {
    const handleAudioSync = (e: any) => {
      setIsSoundOn(e.detail !== undefined ? e.detail : sound.isEnabled());
    };
    window.addEventListener('portfolio-sound-change', handleAudioSync);
    return () => window.removeEventListener('portfolio-sound-change', handleAudioSync);
  }, []);

  const handleToggleSound = () => {
    const nextState = sound.toggleSound();
    setIsSoundOn(nextState);
  };

  // Track folder transition direction and play synchronized physical sound effects
  useEffect(() => {
    if (activeFolderIndex !== prevIndexRef.current) {
      const prev = prevIndexRef.current ?? 0;
      const curr = activeFolderIndex ?? 0;
      const newDir = curr >= prev ? 1 : -1;
      setDirection(newDir);
      prevIndexRef.current = activeFolderIndex;

      if (activeFolderIndex !== null) {
        // 1. Play realistic paper sliding and folder shuffle sound
        sound.playFolderSwitch(newDir);

        // 2. Play clamp snap as the metallic brass fastener settles into place
        const clampTimer = setTimeout(() => {
          sound.playClampSnap();
        }, 95);

        // 3. Play rubber stamp imprint sound as authentication mark drops
        const stampTimer = setTimeout(() => {
          sound.playStamp();
        }, 165);

        return () => {
          clearTimeout(clampTimer);
          clearTimeout(stampTimer);
        };
      } else {
        sound.playFolderSwitch(-1);
      }
    }
  }, [activeFolderIndex]);

  // Keyboard navigation between folders (Arrow keys Left/Right & Keys 1-4 only)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'Escape' && activeFolderIndex !== null) {
        handleCloseFolder();
        return;
      }

      if (activeFolderIndex !== null) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          if (activeFolderIndex < ARCHIVE_FOLDERS.length - 1) {
            handleTabClick(activeFolderIndex + 1);
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          if (activeFolderIndex > 0) {
            handleTabClick(activeFolderIndex - 1);
          }
        }
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        handleTabClick(0);
      }

      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (idx >= 0 && idx < ARCHIVE_FOLDERS.length) {
          handleTabClick(idx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeFolderIndex, onSelectFolder]);

  const handleTabClick = (index: number) => {
    sound.playTabClick();
    onSelectFolder(index);
    // Never jump or scroll to top so the user can freely inspect and analyze the animations in-place
  };

  const handleCloseFolder = () => {
    sound.playFolderSwitch(-1);
    if (onCloseFolder) {
      onCloseFolder();
    } else {
      onSelectFolder(activeFolderIndex ?? 0);
    }
  };

  const currentFolder = activeFolderIndex !== null ? ARCHIVE_FOLDERS[activeFolderIndex] : null;

  const renderFolderContent = (index: number) => {
    switch (index) {
      case 0:
        return <Folder01Ventures onOpenProof={onOpenProof} />;
      case 1:
        return <Folder02Strategy onOpenProof={onOpenProof} />;
      case 2:
        return <Folder03Products onOpenProof={onOpenProof} />;
      case 3:
        return <Folder04Archive onOpenProof={onOpenProof} />;
      default:
        return <Folder01Ventures onOpenProof={onOpenProof} />;
    }
  };

  return (
    <section 
      id="archive-folders-container" 
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 py-8 sm:py-16 scroll-mt-20"
      aria-label="The Archive Folders"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10 pb-4 border-b border-[#D8C498]">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-[#09090B]">
            The Archive Folders
          </h2>
        </div>

        {/* Audio Toggle and Keyboard hint pills */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleToggleSound}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5ECD6] hover:bg-[#EFE3C4] border border-[#D8C498] text-[11px] font-mono text-[#544122] transition-colors cursor-pointer"
            title={isSoundOn ? "Tactile Audio Active (Click to Mute)" : "Audio Muted (Click to Unmute)"}
          >
            {isSoundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#8A6726] animate-pulse" />
                <span>Tactile Audio: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#A48E62]" />
                <span>Audio: Muted</span>
              </>
            )}
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#7A6136] bg-[#F5ECD6] px-3 py-1.5 rounded-full border border-[#D8C498]">
            <span>Keys:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#D5C29A] text-[#09090B] font-semibold text-[10px]">
              1–4
            </kbd>
            {activeFolderIndex !== null && (
              <>
                <span>or</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#D5C29A] text-[#09090B] font-semibold text-[10px]">
                  Esc
                </kbd>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PHYSICAL STEPPED MANILA FOLDER SYSTEM (INSPIRED BY REFERENCE ARCHIVE) */}
      {/* ========================================================================= */}
      <div className="w-full">
        {/* The 4 Staggered & Stepped Folder Layers from Back to Front */}
        <SteppedFolderRack
          folders={ARCHIVE_FOLDERS}
          activeFolderIndex={activeFolderIndex}
          hoveredIndex={hoveredTabIndex}
          onSelectFolder={handleTabClick}
          onHoverFolder={(idx) => {
            setHoveredTabIndex(idx);
            if (idx !== null && idx !== activeFolderIndex) {
              sound.playTabHover();
            }
          }}
        />

        {/* Physical Manila Folder Jacket Body (Dossier Interior) */}
        <motion.div 
          layout
          key={activeFolderIndex !== null ? `manila-jacket-open-${activeFolderIndex}` : 'manila-jacket-closed'}
          initial={{ y: 5, scale: 0.996 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          role="tabpanel"
          id={activeFolderIndex !== null ? `manila-panel-${activeFolderIndex}` : 'manila-panel-closed'}
          aria-labelledby={activeFolderIndex !== null ? `stepped-tab-${activeFolderIndex}` : undefined}
          style={{ perspective: '1400px' }}
          className={`relative bg-gradient-to-b from-[#F5EBD0] via-[#EFE1C0] to-[#E2CD9D] border border-[#C2A770] rounded-b-2xl sm:rounded-b-3xl rounded-t-xl sm:rounded-t-2xl shadow-manila-folder transition-all z-10 -mt-2 sm:-mt-3 ${
            activeFolderIndex === null 
              ? 'p-4 sm:p-6 lg:p-8 cursor-pointer group hover:border-[#B89858]' 
              : 'p-3 sm:p-7 lg:p-9'
          }`}
          onClick={activeFolderIndex === null ? () => handleTabClick(0) : undefined}
        >
          {/* Manila Front Cover Die-Cut Rim & Scored Fold (Shown when folder is open) */}
          {activeFolderIndex !== null && currentFolder && (
            <div className="relative mb-3 sm:mb-7 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 px-2.5 sm:px-4 py-2 rounded-lg bg-[#EAD8AF]/80 border border-[#D5BF8F] shadow-[inset_0_1px_2px_rgba(100,75,25,0.08)]">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] text-[#544122]">
                <Bookmark className="w-3.5 h-3.5 text-[#8A6726] shrink-0" />
                <span className="font-bold tracking-tight uppercase">MANILA FILE</span>
                <span>//</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentFolder.docketCode}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="font-semibold tracking-wider text-[#2A2113]"
                  >
                    {currentFolder.tabLabel} · {currentFolder.docketCode}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] text-[#544122] self-end xs:self-auto">
                <span className="hidden md:inline text-[#7A6136]">CLASSIFICATION: UNRESTRICTED</span>
                
                {/* Stepper with Previous/Next Arrows */}
                <div className="inline-flex items-center rounded bg-[#FFFDF5] border border-[#D5C29B] font-bold text-[#3B2D16] overflow-hidden">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (activeFolderIndex > 0) handleTabClick(activeFolderIndex - 1);
                    }}
                    disabled={activeFolderIndex === 0}
                    className="px-1.5 py-0.5 hover:bg-[#F4EBD7] disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed border-r border-[#D5C29B] transition-colors cursor-pointer"
                    title="Previous folder (←)"
                    aria-label="Previous Folder"
                  >
                    <ChevronLeft className="w-3 h-3 text-[#544122]" />
                  </button>
                  <span className="px-2 py-0.5 whitespace-nowrap">
                    SECTION {activeFolderIndex + 1} OF 04
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (activeFolderIndex < ARCHIVE_FOLDERS.length - 1) handleTabClick(activeFolderIndex + 1);
                    }}
                    disabled={activeFolderIndex === ARCHIVE_FOLDERS.length - 1}
                    className="px-1.5 py-0.5 hover:bg-[#F4EBD7] disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed border-l border-[#D5C29B] transition-colors cursor-pointer"
                    title="Next folder (→)"
                    aria-label="Next Folder"
                  >
                    <ChevronRight className="w-3 h-3 text-[#544122]" />
                  </button>
                </div>

                <button
                  onClick={handleCloseFolder}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#E4D1A7] hover:bg-[#DBC394] text-[#3D2C0E] border border-[#C6AB76] font-mono text-[11px] font-semibold transition-colors cursor-pointer"
                  title="Collapse folder (Esc)"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Collapse</span>
                </button>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* 4. The Interior Content Area: Open Folder Sheet OR Collapsed Jacket */}
          {/* ================================================================= */}
          {activeFolderIndex !== null && currentFolder ? (
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`dossier-document-${activeFolderIndex}`}
                custom={direction}
                variants={velveleDeckVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative bg-[#FCFBF8] border border-[#DED4C0] rounded-xl sm:rounded-2xl shadow-document-sheet p-3.5 sm:p-10 lg:p-12 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Dynamic Light Sheen across incoming document */}
                <motion.div
                  key={`paper-sheen-${activeFolderIndex}`}
                  initial={{ x: direction > 0 ? '-100%' : '200%', opacity: 0.35 }}
                  animate={{ x: direction > 0 ? '220%' : '-100%', opacity: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="absolute inset-y-0 w-1/3 pointer-events-none bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 z-20"
                />

                {/* Authentic Metallic Brass Two-Prong Archival Fastener with Snap Animation */}
                <div className="flex flex-col items-center justify-center mb-5 sm:mb-9 select-none">
                  <motion.div 
                    initial={{ y: -14, scale: 1.12, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.08 }}
                    className="flex items-center justify-between px-2.5 sm:px-3 py-1 bg-gradient-to-r from-[#B99228] via-[#ECC964] to-[#B28C22] rounded-[3px] border border-[#94761B] shadow-[0_1px_3px_rgba(80,60,15,0.25)] w-32 sm:w-44 h-3.5 sm:h-4.5"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4A370A] shadow-inner" />
                    <span className="text-[7px] sm:text-[8px] font-mono font-bold text-[#3D2C06] tracking-[0.2em] uppercase">
                      ARCHIVAL CLAMP
                    </span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4A370A] shadow-inner" />
                  </motion.div>
                  <div className="w-36 sm:w-56 h-[1px] bg-[#E8DEC8] mt-1.5 sm:mt-2" />
                </div>

                {/* Document Header Stamp & Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 border-b border-[#E8DFC9] pb-3 sm:pb-4 mb-5 sm:mb-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <motion.span 
                      initial={{ scale: 1.45, rotate: -8, opacity: 0 }}
                      animate={{ scale: 1, rotate: -1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.12 }}
                      className="px-2 py-0.5 rounded border border-rose-900/30 bg-rose-50/70 font-mono text-[9px] sm:text-[10px] font-bold text-rose-900 tracking-wider uppercase inline-block shadow-sm shrink-0"
                    >
                      AUTHENTICATED RECORD
                    </motion.span>
                    <span className="font-mono text-[10px] sm:text-xs text-[#71717A]">
                      REF: #{currentFolder.docketCode}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-2.5 w-full sm:w-auto">
                    <div className="font-mono text-[11px] sm:text-xs text-[#71717A] mr-1 hidden xs:block">
                      <span className="text-[#8A6726] font-semibold">PHASE: </span>
                      <span className="font-bold text-[#09090B]">
                        {currentFolder.fullTitle}
                      </span>
                    </div>

                    {/* Left and Right Folder Switch Arrows */}
                    <div className="inline-flex items-center rounded-md border border-[#D5BF8F] bg-[#F4EBD7] p-0.5 shadow-xs shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (activeFolderIndex > 0) handleTabClick(activeFolderIndex - 1);
                        }}
                        disabled={activeFolderIndex === 0}
                        className="p-1 sm:px-1.5 rounded hover:bg-[#EBDDC3] text-[#544122] disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                        title={activeFolderIndex > 0 ? `Previous: ${ARCHIVE_FOLDERS[activeFolderIndex - 1].tabLabel} (←)` : 'Beginning of archive'}
                        aria-label="Previous folder"
                      >
                        <ChevronLeft className="w-3.5 h-3.5 text-[#544122]" />
                      </button>
                      <div className="w-[1px] h-3.5 bg-[#D5BF8F] mx-0.5" />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (activeFolderIndex < ARCHIVE_FOLDERS.length - 1) handleTabClick(activeFolderIndex + 1);
                        }}
                        disabled={activeFolderIndex === ARCHIVE_FOLDERS.length - 1}
                        className="p-1 sm:px-1.5 rounded hover:bg-[#EBDDC3] text-[#544122] disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                        title={activeFolderIndex < ARCHIVE_FOLDERS.length - 1 ? `Next: ${ARCHIVE_FOLDERS[activeFolderIndex + 1].tabLabel} (→)` : 'End of archive'}
                        aria-label="Next folder"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#544122]" />
                      </button>
                    </div>

                    <button
                      onClick={handleCloseFolder}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F4EBD7] hover:bg-[#EBDDC3] text-[#544122] text-xs font-mono border border-[#D5BF8F] transition-colors cursor-pointer shrink-0"
                      title="Collapse this folder (Esc)"
                    >
                      <FolderClosed className="w-3.5 h-3.5 text-[#8A6726]" />
                      <span className="hidden xs:inline">Collapse</span>
                    </button>
                  </div>
                </div>

                {/* Dossier Content */}
                <div>
                  {renderFolderContent(activeFolderIndex)}
                </div>

                {/* Document Footer: Next / Previous / Collapse Dossier Controls */}
                <div className="mt-10 sm:mt-14 pt-4 sm:pt-6 border-t border-[#E8DFC9] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="w-full sm:w-auto flex items-center justify-start">
                    {activeFolderIndex > 0 ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(activeFolderIndex - 1);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-[#F7F2E4] hover:bg-[#EFE7D3] border border-[#DCD0B7] text-xs font-mono font-medium text-[#3B2D16] transition-colors shadow-sm cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 text-[#6E5528]" />
                        <span>Previous: {ARCHIVE_FOLDERS[activeFolderIndex - 1].tabLabel}</span>
                      </button>
                    ) : <div />}
                  </div>

                  <div className="w-full sm:w-auto flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCloseFolder();
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF2DF] hover:bg-[#EFE3C4] border border-[#D5C29B] text-xs font-mono font-medium text-[#544122] transition-colors shadow-xs cursor-pointer"
                    >
                      <FolderClosed className="w-3.5 h-3.5 text-[#8A6726]" />
                      <span>Collapse Folder</span>
                    </button>
                  </div>

                  <div className="w-full sm:w-auto flex items-center justify-end">
                    {activeFolderIndex < ARCHIVE_FOLDERS.length - 1 ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(activeFolderIndex + 1);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4.5 py-2 rounded-xl bg-[#09090B] hover:bg-[#27272A] text-white text-xs font-mono font-medium transition-colors shadow-sm cursor-pointer"
                      >
                        <span>Next: {ARCHIVE_FOLDERS[activeFolderIndex + 1].tabLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          sound.playClick();
                          const el = document.getElementById('archive-colophon');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4.5 py-2 rounded-xl bg-[#09090B] hover:bg-[#27272A] text-white text-xs font-mono font-medium transition-colors shadow-sm cursor-pointer"
                      >
                        <span>Contact &amp; Inquiries</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* ================================================================= */
            /* 4B. CLOSED MANILA FOLDER COVER (Displayed when folders are closed) */
            /* ================================================================= */
            <div 
              className="flex flex-col items-center justify-center py-7 sm:py-10 select-none text-center"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabClick(0);
                }
              }}
              aria-label="Closed Archival Dossier. Click to expand folder."
            >
              {/* Authentic Red Cardstock Washer & Brass Eyelet String-Tie Closure */}
              <div className="relative mb-4 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8A2D23] border-2 border-[#5E1F18] shadow-md flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#ECC964] via-[#C9A23E] to-[#8C6418] border border-[#6B4B0C] shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B2507] shadow-inner" />
                  </div>
                </div>
                {/* Wound Archival Twine Graphic */}
                <div className="absolute -bottom-1 left-7 w-7 h-[2px] bg-[#E8D8B5] shadow-xs rotate-12 pointer-events-none" />
              </div>

              <div className="text-center px-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EAD8AF]/80 border border-[#D5BF8F] font-mono text-[11px] sm:text-xs font-bold text-[#4A3714] tracking-wider uppercase mb-1.5 shadow-xs">
                  Archival Career Dossiers Sealed
                </span>
                <p className="font-mono text-xs text-[#7A6136] tracking-tight group-hover:text-[#3B2D16] transition-colors flex items-center justify-center gap-1.5">
                  <span>Click any folder tab or click here to expand</span>
                  <span className="text-xs transition-transform group-hover:translate-y-0.5">↓</span>
                </p>
              </div>
            </div>
          )}

          {/* 5. Authentic Scored Manila Expansion Creases at the Folder Base */}
          <div className="mt-5 sm:mt-7 pt-3 sm:pt-5 border-t border-[#D5BE8A]/60 flex flex-col gap-1 sm:gap-1.5 opacity-85 select-none">
            <div className="h-[1px] bg-[#C4A76E] shadow-[0_1px_0_#FFF8E6]" />
            <div className="h-[1px] bg-[#C4A76E] shadow-[0_1px_0_#FFF8E6]" />
            <div className="h-[1px] bg-[#C4A76E] shadow-[0_1px_0_#FFF8E6]" />
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#7A6031] pt-1.5 tracking-wider uppercase">
              <span>MANILA ARCHIVE DOSSIER · 14 PT CARDSTOCK</span>
              <span className="hidden sm:inline">PATENT NO. 4,188,294 · ISHAAN JAIN PORTFOLIO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
