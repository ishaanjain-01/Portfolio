import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Command,
  ArrowRight,
  Sparkles,
  ExternalLink,
  FileText,
  Briefcase,
  Rocket,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Volume2,
  VolumeX,
  Calculator,
  X,
  Check,
  CornerDownLeft,
  ArrowUpRight,
  ShieldCheck,
  FolderOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

export type PaletteCategory = 'all' | 'ventures' | 'experience' | 'academics' | 'actions';

export interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ventures' | 'experience' | 'academics' | 'actions';
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  keywords?: string[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectFolder: (folderIndex: number) => void;
  onOpenProof: (proofId: string) => void;
  onOpenResume: () => void;
  onOpenAi: (initialPrompt?: string) => void;
}

export const CommandPaletteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelectFolder,
  onOpenProof,
  onOpenResume,
  onOpenAi
}) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<PaletteCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(() => sound.isEnabled());

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sync sound state
  useEffect(() => {
    const handleAudioSync = (e: any) => {
      setIsSoundOn(e.detail !== undefined ? e.detail : sound.isEnabled());
    };
    window.addEventListener('portfolio-sound-change', handleAudioSync);
    return () => window.removeEventListener('portfolio-sound-change', handleAudioSync);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      sound.playModalOpen();
      setSearch('');
      setSelectedIndex(0);
      setActiveCategory('all');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    sound.playSuccessChime();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleToggleSound = () => {
    const next = sound.toggleSound();
    setIsSoundOn(next);
  };

  const commandItems: CommandItem[] = useMemo(() => {
    return [
      // --- VENTURES & PRODUCTS ---
      {
        id: 'venture-omnispend',
        title: 'OmniSpend AI Spend Tracker',
        subtitle: 'Live AI Expense Tracker · Gmail & Bank SMS NLP Engine · Zero Manual Entry',
        category: 'ventures',
        badge: 'Live App',
        icon: Rocket,
        keywords: ['omnispend', 'fintech', 'ai', 'expense', 'receipt', 'gmail', 'sms', 'tracker', 'lovable'],
        action: () => {
          onSelectFolder(0);
          onClose();
          window.open('https://omnispendtracker.lovable.app', '_blank');
        }
      },
      {
        id: 'venture-ora',
        title: 'ORA Gourmand Perfumes',
        subtitle: 'Artisanal Mass Premium Fragrance · ₹2.5L+ in 30 Days · Live D2C Store',
        category: 'ventures',
        badge: 'Live Store',
        icon: Rocket,
        keywords: ['ora', 'perfumes', 'fragrance', 'mass premium', 'd2c', 'vanilla', 'gourmand'],
        action: () => {
          onSelectFolder(0);
          onClose();
          window.open('https://www.oraperfumes.in', '_blank');
        }
      },
      {
        id: 'venture-amazon',
        title: 'Door Step Essentials EU (Firetech)',
        subtitle: 'Cross-Border Amazon Europe · ₹35L+ Sales · Market Research & Dynamic Pricing',
        category: 'ventures',
        badge: '7-Figure Net',
        icon: Rocket,
        keywords: ['amazon', 'dropshipping', 'europe', 'door step', 'firetech', 'germany', 'pricing', 'research', '35 lakh'],
        action: () => {
          onSelectFolder(0);
          onClose();
        }
      },
      {
        id: 'tool-roas-calc',
        title: 'Interactive ROAS & Margin Simulator',
        subtitle: 'Live Financial Calculator: Zomato Dining Ad ROAS & EU E-Commerce Run Rate',
        category: 'ventures',
        badge: 'Interactive Tool',
        icon: Calculator,
        keywords: ['roas', 'calculator', 'simulator', 'margin', 'zomato', 'ad spend', 'revenue', 'financial model'],
        action: () => {
          onSelectFolder(0);
          onClose();
          setTimeout(() => {
            const el = document.getElementById('roas-calculator-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      },

      // --- WORK EXPERIENCE ---
      {
        id: 'exp-linc',
        title: 'Linc Limited — Deputy Manager (Global Growth)',
        subtitle: 'International Rollout across 50+ Countries · ₹2 Cr+ Launch Revenue · ₹35L Savings',
        category: 'experience',
        badge: '50+ Countries',
        icon: Briefcase,
        keywords: ['linc', 'pentonic', 'deputy manager', '50 countries', '2 crore', 'corporate', 'stationery', 'export'],
        action: () => {
          onSelectFolder(1);
          onClose();
        }
      },
      {
        id: 'exp-zomato',
        title: 'Eternal Limited / Zomato — Key Accounts Manager',
        subtitle: '100% Quota Attainment in All Quarters · 7-10X ROAS · 20% City Ad Revenue',
        category: 'experience',
        badge: '100% Quota',
        icon: Briefcase,
        keywords: ['zomato', 'eternal', 'dining out', 'quota', 'roas', 'key accounts', 'kolkata', 'revenue', 'ad sales'],
        action: () => {
          onSelectFolder(1);
          onClose();
        }
      },

      // --- ACADEMICS & RESEARCH ---
      {
        id: 'acad-mu',
        title: 'Masters\' Union — PGP in Tech & Business Management',
        subtitle: 'Flagship PGP TBM (2025–26) · Merit Scholarship Recipient · Gurgaon',
        category: 'academics',
        badge: 'Merit Scholar',
        icon: GraduationCap,
        keywords: ['masters union', 'mba', 'pgp', 'scholarship', 'gurgaon', 'management', 'tech'],
        action: () => {
          onSelectFolder(3);
          onClose();
        }
      },
      {
        id: 'acad-sxuk',
        title: 'St. Xavier\'s University — B.Com (Hons in Finance)',
        subtitle: 'First Class with Distinction (7.85 CGPA) · Elected Treasurer of XCMS',
        category: 'academics',
        badge: 'First Class',
        icon: GraduationCap,
        keywords: ['xavier', 'st xavier', 'bcom', 'finance', 'cgpa', 'first class', 'xcms', 'kolkata'],
        action: () => {
          onSelectFolder(3);
          onClose();
        }
      },
      {
        id: 'acad-dissertation',
        title: 'Empirical Dissertation: Women CEOs in India',
        subtitle: '24-Page Financial Econometric Research · 190 Industry Survey · Turnitin 91%',
        category: 'academics',
        badge: 'Research Thesis',
        icon: FileText,
        keywords: ['dissertation', 'thesis', 'women ceo', 'shikha sharma', 'vinita bali', 'research', 'econometrics'],
        action: () => {
          onSelectFolder(3);
          onClose();
        }
      },
      {
        id: 'acad-dps',
        title: 'Delhi Public School Megacity — Academic Foundation',
        subtitle: 'ISC Class 12: 90.50% · ICSE Class 10: 91.60% with 100/100 Centum in Commerce',
        category: 'academics',
        badge: '100/100 Centum',
        icon: GraduationCap,
        keywords: ['dps', 'delhi public school', 'megacity', 'isc', 'icse', 'commerce', 'grades', 'score'],
        action: () => {
          onSelectFolder(3);
          onClose();
        }
      },

      // --- LEADERSHIP & SOCIAL CONTRIBUTION ---
      {
        id: 'lead-leo-club',
        title: 'Leo Club of Kolkata Sealdah — President',
        subtitle: '5,000+ Meals Distributed · 20+ Volunteers Mobilized · Lions Clubs District 322B1',
        category: 'academics',
        badge: 'President',
        icon: Award,
        keywords: ['leo club', 'lions club', 'president', 'meals', 'volunteers', 'social', 'leadership'],
        action: () => {
          onSelectFolder(2);
          onClose();
        }
      },
      {
        id: 'lead-xcms',
        title: 'Xavier\'s Commerce & Management Society — Treasurer',
        subtitle: 'Managed Operational Budgets for 200+ Members and 10+ Flagship Symposiums',
        category: 'academics',
        badge: 'Treasurer',
        icon: Award,
        keywords: ['xcms', 'treasurer', 'xavier', 'society', 'budget', 'symposium'],
        action: () => {
          onSelectFolder(2);
          onClose();
        }
      },
      {
        id: 'lead-case-comps',
        title: 'National Case Championships & Awards',
        subtitle: 'SRCC Business Conclave Top 10 · MANAGEDIA 1st Place · UMANG 1st Place',
        category: 'academics',
        badge: 'National Honors',
        icon: Award,
        keywords: ['srcc', 'managedia', 'umang', 'finesse', 'case competition', 'national', 'winner'],
        action: () => {
          onSelectFolder(2);
          onClose();
        }
      },

      // --- ACTIONS & FAST SHORTCUTS ---
      {
        id: 'action-resume',
        title: 'View Executive Dossier / Resume (CV)',
        subtitle: 'Printable, Comprehensive Professional Profile with Instant Verification Links',
        category: 'actions',
        badge: 'Executive CV',
        icon: FileText,
        keywords: ['resume', 'cv', 'curriculum vitae', 'dossier', 'download', 'pdf', 'profile'],
        action: () => {
          onClose();
          onOpenResume();
        }
      },
      {
        id: 'action-ai',
        title: 'Launch Ishaan AI Career Ambassador',
        subtitle: 'Grounded AI Console: Ask about revenue metrics, strategy, leadership, or dissertation',
        category: 'actions',
        badge: 'AI Assistant',
        icon: Sparkles,
        keywords: ['ai', 'ishaan ai', 'chat', 'ask', 'question', 'bot', 'gemini'],
        action: () => {
          onClose();
          onOpenAi();
        }
      },
      {
        id: 'action-copy-email',
        title: 'Copy Direct Email Address',
        subtitle: `${PERSONAL_INFO.email} (Instant clipboard copy)`,
        category: 'actions',
        badge: copiedEmail ? 'Copied!' : 'Action',
        icon: copiedEmail ? Check : Mail,
        keywords: ['email', 'copy email', 'mail', 'write', 'contact'],
        action: handleCopyEmail
      },
      {
        id: 'action-phone',
        title: 'Call Ishaan Jain Directly',
        subtitle: `${PERSONAL_INFO.phone} (Gurgaon, India · Hometown: Kolkata)`,
        category: 'actions',
        badge: 'Action',
        icon: Phone,
        keywords: ['call', 'phone', 'telephone', 'mobile', 'ring'],
        action: () => {
          onClose();
          window.location.href = `tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`;
        }
      },
      {
        id: 'action-linkedin',
        title: 'Visit LinkedIn Profile',
        subtitle: 'Connect with Ishaan Jain on LinkedIn · Read recommendations & network',
        category: 'actions',
        badge: 'External',
        icon: Linkedin,
        keywords: ['linkedin', 'profile', 'network', 'connect'],
        action: () => {
          onClose();
          window.open(PERSONAL_INFO.linkedin, '_blank');
        }
      },
      {
        id: 'action-instagram',
        title: 'Visit Instagram Profile (@ishaanjain01)',
        subtitle: 'Follow Ishaan on Instagram · Founder journeys, creative aesthetics & lifestyle',
        category: 'actions',
        badge: 'External',
        icon: Instagram,
        keywords: ['instagram', 'insta', 'social', 'lifestyle', 'perfume', 'photos'],
        action: () => {
          onClose();
          window.open(PERSONAL_INFO.instagram, '_blank');
        }
      },
      {
        id: 'action-toggle-sound',
        title: isSoundOn ? 'Mute Tactile Audio FX' : 'Enable Tactile Audio FX',
        subtitle: isSoundOn ? 'Disable paper flick and keyboard clicks' : 'Enable authentic tactile audio feedback',
        category: 'actions',
        badge: isSoundOn ? 'Sound: ON' : 'Sound: OFF',
        icon: isSoundOn ? Volume2 : VolumeX,
        keywords: ['sound', 'audio', 'mute', 'unmute', 'sfx', 'volume'],
        action: handleToggleSound
      }
    ];
  }, [copiedEmail, isSoundOn, onSelectFolder, onClose, onOpenProof, onOpenResume, onOpenAi]);

  // Filter items based on active category and query
  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();

    return commandItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Query filter
      if (!q) return true;

      const titleMatch = item.title.toLowerCase().includes(q);
      const subMatch = item.subtitle.toLowerCase().includes(q);
      const badgeMatch = item.badge?.toLowerCase().includes(q) || false;
      const keyMatch = item.keywords?.some((k) => k.toLowerCase().includes(q)) || false;

      return titleMatch || subMatch || badgeMatch || keyMatch;
    });
  }, [commandItems, activeCategory, search]);

  // Clamp selection index when items change
  useEffect(() => {
    setSelectedIndex(0);
  }, [search, activeCategory]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        sound.playClick();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        sound.playClick();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          sound.playClick();
          filteredItems[selectedIndex].action();
        } else if (search.trim()) {
          // If no item matched, open AI with current query
          sound.playAiPing();
          onClose();
          onOpenAi(search.trim());
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        sound.playModalClose();
        onClose();
      } else if (e.key === 'Tab') {
        e.preventDefault();
        // Cycle categories
        const categories: PaletteCategory[] = ['all', 'ventures', 'experience', 'academics', 'actions'];
        const currentIdx = categories.indexOf(activeCategory);
        const nextCat = categories[(currentIdx + 1) % categories.length];
        sound.playFolderSwitch(1);
        setActiveCategory(nextCat);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, search, activeCategory, onClose, onOpenAi]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 bg-[#09090B]/60 backdrop-blur-md"
        onClick={() => {
          sound.playModalClose();
          onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -12 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#FCF8EE] border-2 border-[#382B14] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[82vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Search Bar */}
          <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-[#D8C498] bg-[#F5EBD0]">
            <Search className="w-5 h-5 text-[#8A6726] shrink-0" />
            <input
              ref={inputRef}
              id="command-palette-search-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ventures, revenue, academics, grades, or type a question..."
              className="w-full bg-transparent text-[#1C1917] placeholder:text-[#8C764D] text-sm sm:text-base font-sans outline-none"
            />
            {search ? (
              <button
                onClick={() => {
                  setSearch('');
                  inputRef.current?.focus();
                }}
                className="p-1 rounded-md text-[#8C764D] hover:text-[#1C1917] hover:bg-[#EBDDBB] transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-[#8C764D] bg-[#EBE0C5] px-2 py-0.5 rounded border border-[#D8C498]">
                <span>ESC</span>
              </div>
            )}
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-[#E8DAC0] bg-[#FAF3E2] overflow-x-auto no-scrollbar text-xs font-mono">
            {[
              { id: 'all', label: 'All' },
              { id: 'ventures', label: 'Ventures' },
              { id: 'experience', label: 'Experience' },
              { id: 'academics', label: 'Academics' },
              { id: 'actions', label: 'Actions' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playFolderSwitch(1);
                  setActiveCategory(cat.id as PaletteCategory);
                }}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#1C1917] text-[#FAF5E6] font-semibold shadow-xs'
                    : 'bg-[#EDE2C9] text-[#6A5229] hover:bg-[#E3D4B6] hover:text-[#1C1917]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div ref={listRef} className="flex-1 overflow-y-auto p-2 divide-y divide-[#F0E5CE] max-h-[50vh]">
            {/* Dynamic AI Option if user types a query */}
            {search.trim().length > 0 && (
              <div
                onClick={() => {
                  sound.playAiPing();
                  onClose();
                  onOpenAi(search.trim());
                }}
                className="p-3 mb-1 rounded-xl bg-gradient-to-r from-[#1C1917] to-[#2D241C] text-[#FAF5E6] flex items-center justify-between cursor-pointer border border-[#BFA267] hover:border-[#E5C378] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ECC964]/20 border border-[#ECC964]/40 flex items-center justify-center text-[#ECC964] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                      <span>Ask Ishaan AI:</span>
                      <span className="font-normal text-[#ECC964] italic">"{search.trim()}"</span>
                    </div>
                    <div className="text-[11px] text-[#D8C498] font-mono">
                      Query Ishaan's digital ambassador with full career context
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-[#ECC964]/10 text-[#ECC964] px-2 py-1 rounded border border-[#ECC964]/30 shrink-0">
                  ↵ Enter
                </span>
              </div>
            )}

            {filteredItems.length === 0 ? (
              <div className="py-12 px-4 text-center">
                <p className="text-sm font-semibold text-[#1C1917] mb-1">No matching archive records found</p>
                <p className="text-xs text-[#7A6136] max-w-sm mx-auto mb-4">
                  Try searching for keywords like "Linc", "Zomato", "OmniSpend", "Dissertation", "Scholarship", or "Resume".
                </p>
                {search.trim() && (
                  <button
                    onClick={() => {
                      sound.playAiPing();
                      onClose();
                      onOpenAi(search.trim());
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C1917] text-[#FAF5E6] text-xs font-mono font-medium hover:bg-[#2C241B] transition-colors cursor-pointer border border-[#BFA267]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#ECC964]" />
                    <span>Ask Ishaan AI about "{search.trim()}"</span>
                  </button>
                )}
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    data-index={idx}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => {
                      sound.playClick();
                      item.action();
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#EBDDBD] text-[#1C1917]'
                        : 'hover:bg-[#F2E7CD] text-[#292215]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-[#1C1917] text-[#FAF5E6] border-[#1C1917]'
                            : 'bg-[#EDE2C7] text-[#634C24] border-[#D8C498]'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold truncate">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${
                                isSelected
                                  ? 'bg-[#1C1917] text-[#FAF5E6] border-[#1C1917]'
                                  : 'bg-[#E5D7B7] text-[#523E1C] border-[#D1BFA0]'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#6B5328] truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {isSelected && (
                        <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-[#70582D] bg-[#DFCFAC] px-1.5 py-0.5 rounded">
                          <span>Select</span>
                          <CornerDownLeft className="w-3 h-3" />
                        </div>
                      )}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 text-[#1C1917]' : 'text-[#A0885B]'}`} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Keyboard Hints */}
          <div className="px-4 py-2.5 bg-[#F0E4C8] border-t border-[#D8C498] flex items-center justify-between text-[11px] font-mono text-[#6A5229]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-[#E4D5B4] border border-[#CCA771] text-[#3D2C11] font-bold">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-[#E4D5B4] border border-[#CCA771] text-[#3D2C11] font-bold">↓</kbd>
                <span className="hidden sm:inline">Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-[#E4D5B4] border border-[#CCA771] text-[#3D2C11] font-bold">↵</kbd>
                <span className="hidden sm:inline">Open</span>
              </span>
              <span className="hidden md:flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-[#E4D5B4] border border-[#CCA771] text-[#3D2C11] font-bold">Tab</kbd>
                <span>Category</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[10px] text-[#8C764D]">Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#E4D5B4] border border-[#CCA771] text-[#3D2C11] font-bold">⌘K</kbd>
              <span className="hidden sm:inline text-[10px] text-[#8C764D]">anywhere</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
