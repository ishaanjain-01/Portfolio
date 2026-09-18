import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Linkedin, 
  ArrowUpRight, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioEffects';

interface Props {
  onOpenResume?: () => void;
}

export const FooterColophon: React.FC<Props> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    sound.playSuccessChime();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="archive-colophon" className="w-full border-t border-[#D8C498] bg-[#F5EBD0] pt-14 pb-12 sm:pt-20 sm:pb-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Large Direct Editorial CTA */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#7A6136] uppercase tracking-wide-caps">
            <span className="w-1.5 h-1.5 rounded-full bg-[#09090B]" />
            <span>Advisory &amp; Venture Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight-editorial text-[#09090B] leading-[1.1]">
            Let's build something enduring.
          </h2>

          <p className="text-base sm:text-lg text-[#4A3B20] leading-relaxed max-w-2xl font-normal">
            Available for commercial growth strategy, multi-market retail distribution advisory, and high-velocity zero-to-one venture architecture.
          </p>

          {/* Copy-Email Button with Clipboard-Copied Micro-Interaction */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#09090B] hover:bg-[#27272A] text-white text-xs sm:text-sm font-mono font-medium transition-all shadow-md active:scale-[0.98] cursor-pointer"
              title="Click to copy primary email"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied to clipboard ({PERSONAL_INFO.email})</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-white/80" />
                  <span>{PERSONAL_INFO.email}</span>
                  <Copy className="w-3.5 h-3.5 text-white/60 ml-1" />
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#FAF3E3] hover:bg-[#EFE4CB] text-[#3D2E14] text-xs sm:text-sm font-mono font-medium transition-colors border border-[#D8C498]"
            >
              <span>Direct Mail</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6136]" />
            </a>

            {onOpenResume && (
              <button
                onClick={() => {
                  sound.playModalOpen();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-white hover:bg-[#FAF4E6] text-[#27272A] text-xs sm:text-sm font-mono font-medium transition-colors border border-[#D8C498] cursor-pointer"
              >
                <span>Curriculum Vitae</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6136]" />
              </button>
            )}
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="w-full h-px bg-[#D8C498]" />

        {/* Footer Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 text-xs text-[#7A6136] pt-2">
          {/* Social Links */}
          <div className="md:col-span-6 space-y-2">
            <span className="font-mono font-semibold text-[#09090B] uppercase tracking-wide block">
              Digital Footprint
            </span>
            <ul className="space-y-1.5 font-mono">
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A48E62]" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram ({PERSONAL_INFO.instagramHandle})</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A48E62]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.oraperfumes.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] transition-colors inline-flex items-center gap-1"
                >
                  <span>ORA Gourmand Perfumes</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A48E62]" />
                </a>
              </li>
              <li>
                <a
                  href="https://omnispendtracker.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] transition-colors inline-flex items-center gap-1"
                >
                  <span>OmniSpend AI</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A48E62]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Copyright */}
          <div className="md:col-span-6 space-y-2 sm:text-right">
            <span className="font-mono font-semibold text-[#09090B] uppercase tracking-wide block">
              Geographic Base
            </span>
            <div className="flex items-center gap-1.5 text-[#4A3B20] sm:justify-end">
              <MapPin className="w-3.5 h-3.5 text-[#7A6136]" />
              <span>Gurgaon, India · Hometown: Kolkata</span>
            </div>
            <p className="pt-2 text-[#7A6136] font-mono text-[11px]">
              © {new Date().getFullYear()} Ishaan Jain. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
