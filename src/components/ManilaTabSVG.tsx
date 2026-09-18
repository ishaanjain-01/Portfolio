import React from 'react';
import { motion } from 'motion/react';

interface ManilaTabProps {
  index: number;
  label: string;
  shortLabel?: string;
  category: string;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/**
 * Splits folder tab label into two clean lines for phone screens so the entire
 * header text is 100% visible on mobile devices without any cutoffs or truncation.
 */
const getMobileLines = (text: string): [string, string] => {
  if (text.includes("01 / Projects & Ventures")) return ["01 / Projects", "& Ventures"];
  if (text.includes("02 / Work Experience")) return ["02 / Work", "Experience"];
  if (text.includes("03 / Extra-Curriculars")) return ["03 / Extra-", "Curriculars"];
  if (text.includes("04 / Studies & Background")) return ["04 / Studies", "& Background"];

  if (text.includes(" / ")) {
    const [num, rest] = text.split(" / ");
    const words = rest.split(" ");
    if (words.length >= 2) {
      return [`${num} / ${words[0]}`, words.slice(1).join(" ")];
    }
  }
  const words = text.split(" ");
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
};

/**
 * Realistic Manila Folder Tab matching classic 1/4-cut staggered file folders:
 * Cut 0: Left-cut tab with rounded top-left and right S-curve shoulder
 * Cut 1: Center-left tab with left S-curve shoulder and right S-curve shoulder
 * Cut 2: Center-right tab with left S-curve shoulder and right S-curve shoulder
 * Cut 3: Right-cut tab with left S-curve shoulder and rounded top-right
 */
export const ManilaTab: React.FC<ManilaTabProps> = ({
  index,
  label,
  category,
  isActive,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  // SVG Path geometries for 1/4-cut staggered folder tabs (viewBox="0 0 260 48")
  const getTabPath = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        // Left Cut: straight up left edge, rounded top-left, flat top, right S-curve shoulder to baseline
        return "M 0,48 L 0,8 Q 0,0 8,0 L 202,0 Q 214,0 222,14 L 236,34 Q 244,48 260,48 L 0,48 Z";
      case 1:
        // Center-Left Cut: left S-curve shoulder up, flat top, right S-curve shoulder down
        return "M 0,48 Q 16,48 24,34 L 38,14 Q 46,0 58,0 L 202,0 Q 214,0 222,14 L 236,34 Q 244,48 260,48 L 0,48 Z";
      case 2:
        // Center-Right Cut: left S-curve shoulder up, flat top, right S-curve shoulder down
        return "M 0,48 Q 16,48 24,34 L 38,14 Q 46,0 58,0 L 202,0 Q 214,0 222,14 L 236,34 Q 244,48 260,48 L 0,48 Z";
      case 3:
      default:
        // Right Cut: left S-curve shoulder up, flat top, rounded top-right, down right edge
        return "M 0,48 Q 16,48 24,34 L 38,14 Q 46,0 58,0 L 252,0 Q 260,0 260,8 L 260,48 L 0,48 Z";
    }
  };

  // Staggered horizontal layout offsets across the folder top width
  const getTabStyle = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        return { left: '0%', width: '27.5%' };
      case 1:
        return { left: '23.5%', width: '28.5%' };
      case 2:
        return { left: '48%', width: '28.5%' };
      case 3:
      default:
        return { left: '72%', width: '28%' };
    }
  };

  const pathD = getTabPath(index);
  const positionStyle = getTabStyle(index);
  const [mobileLine1, mobileLine2] = getMobileLines(label);

  return (
    <motion.button
      type="button"
      role="tab"
      id={`manila-tab-${index}`}
      aria-selected={isActive}
      aria-controls={`manila-panel-${index}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      animate={{
        y: isActive ? -7 : isHovered ? -3 : 2,
        scale: isActive ? 1.025 : 1,
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={positionStyle}
      className={`absolute bottom-0 h-11 sm:h-13 group cursor-pointer focus:outline-none transition-all ${
        isActive ? 'z-30' : isHovered ? 'z-20' : 'z-10'
      }`}
    >
      {/* Tab Silhouette SVG with Authentic Manila Paper Gradients & Strokes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_-2px_4px_rgba(90,65,20,0.12)]"
        viewBox="0 0 260 48"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Active Manila Cardstock Gradient */}
          <linearGradient id={`manila-grad-active-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FAF2DF" />
            <stop offset="25%" stopColor="#F5E8CC" />
            <stop offset="70%" stopColor="#EFE0BE" />
            <stop offset="100%" stopColor="#E9D6AC" />
          </linearGradient>

          {/* Inactive Background Manila Cardstock Gradient */}
          <linearGradient id={`manila-grad-inactive-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EDE0C1" />
            <stop offset="35%" stopColor="#E6D4B0" />
            <stop offset="100%" stopColor="#D9C49A" />
          </linearGradient>

          {/* Hover Manila Cardstock Gradient */}
          <linearGradient id={`manila-grad-hover-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7EED6" />
            <stop offset="30%" stopColor="#EFE1C2" />
            <stop offset="100%" stopColor="#E3CE9F" />
          </linearGradient>
        </defs>

        {/* Outer Manila Tab Body */}
        <path
          d={pathD}
          fill={`url(#${
            isActive
              ? `manila-grad-active-${index}`
              : isHovered
              ? `manila-grad-hover-${index}`
              : `manila-grad-inactive-${index}`
          })`}
          stroke={isActive ? "#BA9D66" : "#C4AA74"}
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Sunlit Cut-Edge Highlight along the top rim */}
        <path
          d={pathD}
          fill="none"
          stroke={isActive ? "#FFFDF5" : "#F4EBD4"}
          strokeWidth="0.9"
          className="opacity-80"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Tactile Printed Tab Label Tape */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-0.5 sm:px-2 md:px-3 pb-1">
        <div
          className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-[3px] transition-all w-full max-w-[98%] sm:max-w-[95%] ${
            isActive
              ? 'bg-[#FFFDF7] border border-[#CFBB8E] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(100,75,25,0.12)]'
              : 'bg-[#F9F4E5]/85 border border-[#D5C29A]/80 text-[#5C4B2E]'
          }`}
        >
          {/* Active Folder Indicator Dot */}
          <span
            className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0 transition-colors ${
              isActive ? 'bg-[#996515] ring-1 sm:ring-2 ring-[#996515]/20' : 'bg-[#BAA47A]'
            }`}
          />

          {/* Desktop/Laptop Display: Full header text on single line, zero truncation */}
          <span
            className={`hidden sm:inline font-mono text-[9.5px] md:text-[10.5px] lg:text-xs select-none whitespace-nowrap ${
              isActive ? 'font-bold text-[#2A2113]' : 'font-medium text-[#4D3D22]'
            }`}
          >
            {label}
          </span>

          {/* Phone Display: Full header text cleanly stacked across two lines so nothing is cut off */}
          <div
            className={`sm:hidden flex flex-col items-center justify-center leading-[1.08] select-none text-center ${
              isActive ? 'font-bold text-[#2A2113]' : 'font-medium text-[#4D3D22]'
            }`}
          >
            <span className="font-mono text-[7.5px] xs:text-[8.5px] tracking-tight whitespace-nowrap">
              {mobileLine1}
            </span>
            <span className="font-mono text-[7px] xs:text-[8px] tracking-tight whitespace-nowrap opacity-90">
              {mobileLine2}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
};
