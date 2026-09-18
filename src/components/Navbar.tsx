import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, FileCheck, ArrowUpRight, MessageSquareCode, Command } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

interface Props {
  onOpenAi: () => void;
  onOpenProof: (id: string) => void;
  onSelectSection?: (key: string) => void;
  onOpenCommandPalette?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<Props> = ({ 
  onOpenAi, 
  onOpenProof, 
  onSelectSection, 
  onOpenCommandPalette,
  activeSection 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', sectionKey: 'story' },
    { label: 'Experience', sectionKey: 'experience' },
    { label: 'Ventures & Projects', sectionKey: 'projects' },
    { label: 'Skills & Tech', sectionKey: 'skills' },
    { label: 'Academics', sectionKey: 'academics' },
    { label: 'Honors', sectionKey: 'achievements' },
    { label: 'ROAS Tool', sectionKey: 'simulator' },
    { label: 'Contact', sectionKey: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, sectionKey: string) => {
    e.preventDefault();
    sound.playClick();
    if (onSelectSection) {
      onSelectSection(sectionKey);
    }
    const el = document.getElementById('dossier-hub');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a14]/90 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          id="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 flex items-center justify-center text-white font-display font-bold text-base shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            IJ
          </div>
          <div>
            <span className="text-base font-serif font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-400 block font-mono">
              Masters' Union Scholar
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionKey;
            return (
              <button
                key={link.label}
                onClick={(e) => handleLinkClick(e, link.sectionKey)}
                className={`text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'text-white bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenCommandPalette && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenCommandPalette();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/40 text-slate-300 text-xs font-mono transition-all group"
              title="Open Command Palette (⌘K / Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300" />
              <span className="hidden md:inline">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">⌘K</kbd>
            </button>
          )}

          <button
            id="nav-open-ai-btn"
            onClick={() => {
              sound.playClick();
              onOpenAi();
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all shadow-sm group"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-12 transition-transform" />
            <span>Ask Ishaan AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </button>

          <button
            id="nav-quick-contact-btn"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-ai-btn"
            onClick={onOpenAi}
            className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300"
            aria-label="Open AI Assistant"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#070a14] border-b border-slate-800 px-5 pt-3 pb-6 space-y-3 mt-3 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={(e) => handleLinkClick(e, link.sectionKey)}
                className={`text-left text-sm font-medium py-2.5 px-3 rounded-lg border-b border-slate-850 flex items-center justify-between ${
                  activeSection === link.sectionKey ? 'text-indigo-400 font-bold bg-slate-900' : 'text-slate-300 hover:text-indigo-300'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.sectionKey && (
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                )}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              id="mobile-drawer-ai-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAi();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask Ishaan's AI Assistant</span>
            </button>
            <button
              id="mobile-drawer-contact-btn"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-white border border-slate-700"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

