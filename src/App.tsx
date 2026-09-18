import React, { useState, useEffect } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { ArchiveFolders } from './components/ArchiveFolders';
import { FooterColophon } from './components/FooterColophon';
import { EditorialDocumentModal } from './components/EditorialDocumentModal';
import { EditorialResumeModal } from './components/EditorialResumeModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { Sparkles, Command } from 'lucide-react';

export default function App() {
  const [activeFolderIndex, setActiveFolderIndex] = useState<number | null>(null);
  const [selectedProofId, setSelectedProofId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string | undefined>(undefined);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K and '/' to open Command Palette)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInputFocused = target && (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      );

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      } else if (e.key === '/' && !isInputFocused) {
        e.preventDefault();
        setIsPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Parse URL hash if someone loads e.g. #ventures, #strategy, #products, #archive
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'ventures' || hash === 'foundations') {
      setActiveFolderIndex(0);
    } else if (hash === 'strategy' || hash === 'leadership' || hash === 'mba') {
      setActiveFolderIndex(1);
    } else if (hash === 'products' || hash === 'brands' || hash === 'ora') {
      setActiveFolderIndex(2);
    } else if (hash === 'archive' || hash === 'notes' || hash === 'research') {
      setActiveFolderIndex(3);
    }
  }, []);

  const handleOpenAi = (prompt?: string) => {
    setAiInitialPrompt(prompt);
    setIsAiOpen(true);
  };

  const handleSelectFolder = (idx: number) => {
    // If clicking the currently open folder, collapse it; otherwise open it
    setActiveFolderIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-[#EFE1C0] text-[#1C1917] font-sans antialiased selection:bg-[#2C210E] selection:text-[#FFF8E7] flex flex-col justify-between relative">
      {/* 1. Header / Hero (Minimalist) */}
      <HeaderHero
        onOpenResume={() => setIsResumeOpen(true)}
        onSelectFolder={(idx) => setActiveFolderIndex(idx)}
        onOpenAi={() => handleOpenAi()}
        onOpenCommandPalette={() => setIsPaletteOpen(true)}
      />

      {/* 2. Main Content & Core Interactive Archive Folders */}
      <main className="flex-1 w-full">
        <ArchiveFolders
          activeFolderIndex={activeFolderIndex}
          onSelectFolder={handleSelectFolder}
          onCloseFolder={() => setActiveFolderIndex(null)}
          onOpenProof={(proofId) => setSelectedProofId(proofId)}
        />
      </main>

      {/* 3. Footer */}
      <FooterColophon
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Bottom Quick Action Dock: Search & Ask Ishaan AI */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        {/* Mobile / Floating Cmd+K Trigger */}
        <button
          onClick={() => setIsPaletteOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-[#FAF5E6] hover:bg-white text-[#1C1917] border border-[#BFA267] font-mono text-xs font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Open Command Palette"
          title="Quick Switcher (Cmd + K)"
        >
          <Command className="w-3.5 h-3.5 text-[#70582D]" />
          <span>⌘K</span>
        </button>

        {/* Floating "Ask Ishaan AI" Trigger Button */}
        <button
          onClick={() => handleOpenAi()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#2C2623] text-[#FDF8EE] border border-[#BFA267] font-mono text-xs font-semibold shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer group"
          aria-label="Open Ishaan AI Assistant"
        >
          <Sparkles className="w-4 h-4 text-[#ECC964] group-hover:rotate-12 transition-transform" />
          <span>Ask Ishaan AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Command Palette Spotlight Search Modal */}
      <CommandPaletteModal
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelectFolder={(idx) => setActiveFolderIndex(idx)}
        onOpenProof={(proofId) => setSelectedProofId(proofId)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAi={(prompt) => handleOpenAi(prompt)}
      />

      {/* Minimalist Modals for Verification & Executive CV & Ishaan AI */}
      <EditorialDocumentModal
        documentId={selectedProofId}
        onClose={() => setSelectedProofId(null)}
      />

      <EditorialResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenProof={(proofId) => {
          setIsResumeOpen(false);
          setSelectedProofId(proofId);
        }}
      />

      <AiAssistantModal
        isOpen={isAiOpen}
        onClose={() => {
          setIsAiOpen(false);
          setAiInitialPrompt(undefined);
        }}
        initialPrompt={aiInitialPrompt}
      />
    </div>
  );
}
