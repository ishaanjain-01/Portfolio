import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Instagram,
  FileText, 
  Check, 
  Copy,
  Sparkles,
  Bot,
  Volume2,
  VolumeX,
  Search,
  Command
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

interface Props {
  onOpenResume?: () => void;
  onSelectFolder?: (folderIndex: number) => void;
  onOpenAi?: () => void;
  onOpenCommandPalette?: () => void;
}

export const HeaderHero: React.FC<Props> = ({ onOpenResume, onSelectFolder, onOpenAi, onOpenCommandPalette }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(() => sound.isEnabled());

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

  const handleCopyEmail = () => {
    sound.playSuccessChime();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="w-full">
      {/* Top Status & Utility Bar (Sticky) */}
      <nav className="w-full border-b border-[#D8C498] bg-[#F5EBD0]/95 backdrop-blur-md sticky top-0 z-40 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#09090B]" />
            <span className="font-mono text-xs font-medium tracking-tight text-[#09090B]">
              ISHAAN JAIN
            </span>
            <span className="text-[#A48E62] text-xs">/</span>
            <span className="font-mono text-[11px] text-[#7A6136] hidden sm:inline">
              ARCHIVE 2026
            </span>
          </div>

          {/* Center Search Command Palette Trigger */}
          {onOpenCommandPalette && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenCommandPalette();
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#544122] border border-[#D8C498] text-xs font-mono transition-all shadow-xs hover:shadow group cursor-pointer"
              title="Search Archive (Cmd + K or Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#8A6726] group-hover:scale-110 transition-transform" />
              <span className="text-[#6B5328] hidden sm:inline">Search archive...</span>
              <span className="text-[#6B5328] sm:hidden">Search</span>
              <kbd className="hidden sm:inline-flex px-1.5 py-0.5 rounded bg-[#EFE4CC] border border-[#CCA771] text-[10px] text-[#3D2C11] font-bold">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Top Right Utilities: Audio Toggle & Ask Ishaan AI */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={handleToggleSound}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#544122] border border-[#D8C498] text-xs font-mono font-medium transition-all shadow-sm cursor-pointer"
              title={isSoundOn ? "Tactile Audio Active (Click to Mute)" : "Audio Muted (Click to Unmute)"}
            >
              {isSoundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#8A6726] animate-pulse" />
                  <span className="hidden sm:inline">Sound: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#A48E62]" />
                  <span className="hidden sm:inline">Sound: Off</span>
                </>
              )}
            </button>

            {onOpenAi && (
              <button
                onClick={() => {
                  sound.playAiPing();
                  onOpenAi();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1917] hover:bg-[#292524] text-[#FDF8EE] border border-[#BFA267] text-xs font-mono font-medium transition-all shadow-sm hover:shadow group cursor-pointer"
                title="Open Ishaan AI Assistant"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ECC964] group-hover:rotate-12 transition-transform" />
                <span>Ask Ishaan AI</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Minimalist Hero (Scrollable, Not Sticky) */}
      <section className="w-full border-b border-[#D8C498] bg-[#F5EBD0]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-16 sm:pb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Identity Eyebrow */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#7A6136] uppercase tracking-wide-caps mb-3">
              <span>Growth Strategist &amp; Venture Builder</span>
              <span>·</span>
              <span>Masters' Union Merit Scholar</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight-editorial text-[#09090B] leading-[1.08] mb-4">
              Ishaan Jain
            </h1>

            {/* Crisp Executive Introduction */}
            <div className="mb-6 max-w-2xl">
              <p className="text-base sm:text-lg text-[#2E2310] font-sans font-medium leading-relaxed">
                Commercial growth strategist and venture builder combining corporate finance rigor with 0-to-1 execution across international consumer brands, enterprise sales, and consumer tech.
              </p>
            </div>

            {/* High-Signal Metrics Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8C498] text-[#3D2E14] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span><strong className="font-semibold">50+ Countries</strong> Expansion · Linc</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8C498] text-[#3D2E14] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span><strong className="font-semibold">100% Target Achievement throughout employment tenure</strong> · Zomato</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8C498] text-[#3D2E14] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span><strong className="font-semibold">₹2.5L+ in 30 Days</strong> · ORA D2C</span>
              </span>
            </div>

            {/* Quick Links Styled as Compact Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FAF4E6] border border-[#D8C498] text-xs font-medium text-[#27272A] hover:text-[#09090B] transition-all shadow-sm hover:shadow group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#7A6136] group-hover:text-[#09090B] transition-colors" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#A48E62] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FAF4E6] border border-[#D8C498] text-xs font-medium text-[#27272A] hover:text-[#09090B] transition-all shadow-sm hover:shadow group"
              >
                <Instagram className="w-3.5 h-3.5 text-[#7A6136] group-hover:text-[#E1306C] transition-colors" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-[#A48E62] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FAF4E6] border border-[#D8C498] text-xs font-medium text-[#27272A] hover:text-[#09090B] transition-all shadow-sm hover:shadow cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#7A6136]" />
                    <span>Email</span>
                    <Copy className="w-3 h-3 text-[#A48E62]" />
                  </>
                )}
              </button>

              {onOpenAi && (
                <button
                  onClick={() => {
                    sound.playAiPing();
                    onOpenAi();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C1917] hover:bg-[#292524] text-[#FDF8EE] border border-[#BFA267] text-xs font-mono font-medium transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5 text-[#ECC964]" />
                  <span>Ishaan AI</span>
                </button>
              )}

              {onOpenResume && (
                <button
                  onClick={() => {
                    sound.playModalOpen();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#09090B] hover:bg-[#27272A] text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-white/80" />
                  <span>Executive CV</span>
                </button>
              )}

              {onSelectFolder && (
                <button
                  onClick={() => {
                    sound.playClick();
                    const el = document.getElementById('archive-folders-container');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else onSelectFolder(0);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E3] hover:bg-[#EFE4CB] text-[#3D2E14] text-xs font-mono font-medium transition-all border border-[#D8C498] cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-[#8A6726]" />
                  <span>Explore 4 Dossiers ↓</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </header>
  );
};
