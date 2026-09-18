import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FolderMeta } from './ArchiveFolders';

interface SteppedFolderRackProps {
  folders: FolderMeta[];
  activeFolderIndex: number | null;
  hoveredIndex: number | null;
  onSelectFolder: (index: number) => void;
  onHoverFolder: (index: number | null) => void;
}

interface TierConfig {
  tabLeftPct: number;
  tabWidthPct: number;
  mobileTabLeftPct: number;
  mobileTabWidthPct: number;
  borderColor: string;
  gradStops: {
    top: string;
    mid: string;
    bot: string;
    activeTop: string;
  };
}

// Staggered tab placements directly inspired by the user's reference photograph:
// Tier 1 (Back): Tab on the left (matches "it's not performing")
// Tier 2: Tab on the right (matches "if I post it again?")
// Tier 3: Tab on the center-left (matches "is it still trending?")
// Tier 4 (Front): Tab on the right-center (matches "let's change something")
const TIER_CONFIGS: TierConfig[] = [
  {
    tabLeftPct: 3,
    tabWidthPct: 38,
    mobileTabLeftPct: 2,
    mobileTabWidthPct: 70,
    borderColor: '#D4BD88',
    gradStops: {
      top: '#FAF3E2',
      mid: '#F4E5C4',
      bot: '#E9D4A4',
      activeTop: '#FFFDF7'
    }
  },
  {
    tabLeftPct: 54,
    tabWidthPct: 42,
    mobileTabLeftPct: 28,
    mobileTabWidthPct: 70,
    borderColor: '#CCB076',
    gradStops: {
      top: '#F7ECD0',
      mid: '#EFE0BB',
      bot: '#E2C793',
      activeTop: '#FFFDF7'
    }
  },
  {
    tabLeftPct: 12,
    tabWidthPct: 40,
    mobileTabLeftPct: 3,
    mobileTabWidthPct: 72,
    borderColor: '#C5A566',
    gradStops: {
      top: '#F5E6C6',
      mid: '#EADBAB',
      bot: '#DFC085',
      activeTop: '#FFFDF7'
    }
  },
  {
    tabLeftPct: 48,
    tabWidthPct: 46,
    mobileTabLeftPct: 26,
    mobileTabWidthPct: 72,
    borderColor: '#C2A770',
    gradStops: {
      top: '#F5EBD0',
      mid: '#EFE1C0',
      bot: '#E2CD9D',
      activeTop: '#FFFDF7'
    }
  }
];

export const SteppedFolderRack: React.FC<SteppedFolderRackProps> = ({
  folders,
  activeFolderIndex,
  hoveredIndex,
  onSelectFolder,
  onHoverFolder
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => 
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fan angles for Velvele Deck Fan effect (Pinterest Match)
  const getFanRotation = (index: number, isHovered: boolean, isActive: boolean) => {
    if (isMobile) return 0;
    const baseAngles = [-2.2, -0.75, 0.75, 2.2];
    const angle = baseAngles[index % baseAngles.length] || 0;
    if (isActive) return 0;
    if (isHovered) return angle * 1.5;
    return angle;
  };

  const isAnyActive = activeFolderIndex !== null;

  const getMotionProps = (index: number, isActive: boolean, isHovered: boolean) => {
    const fanRotate = getFanRotation(index, isHovered, isActive);
    if (isActive) {
      return {
        y: -18,
        x: 0,
        rotateZ: 0,
        scale: 1.015,
        opacity: 1,
        transition: { type: "spring", stiffness: 320, damping: 22 }
      };
    }
    if (isHovered) {
      return {
        y: -14,
        x: index === 0 ? -4 : index === 3 ? 4 : 0,
        rotateZ: fanRotate,
        scale: 1.01,
        opacity: 1,
        transition: { type: "spring", stiffness: 400, damping: 20 }
      };
    }
    return {
      y: isAnyActive ? 4 : 0,
      x: 0,
      rotateZ: fanRotate,
      scale: 1,
      opacity: isAnyActive ? 0.88 : 1,
      transition: { type: "spring", stiffness: 320, damping: 24 }
    };
  };

  return (
    <div 
      className="relative w-full select-none pt-1"
      style={{ perspective: '1200px' }}
    >
      {/* 
        Container for the 4 stepped folder layers.
        Each layer sits in front of the previous one (increasing z-index)
        and is stepped downward, revealing the tab and shoulder of the folder behind it.
      */}
      <div 
        role="tablist"
        aria-label="Physical Stepped Manila Archive Folders"
        className="relative w-full flex flex-col"
      >
        {folders.map((folder, index) => {
          const isActive = folder.index === activeFolderIndex;
          const isHovered = folder.index === hoveredIndex;
          const tier = TIER_CONFIGS[index % TIER_CONFIGS.length];

          const tabLeft = isMobile ? tier.mobileTabLeftPct : tier.tabLeftPct;
          const tabWidth = isMobile ? tier.mobileTabWidthPct : tier.tabWidthPct;

          // Increasing z-index from back to front (Tier 1 = 10, Tier 4 = 40)
          // When active or hovered, elevated slightly
          const baseZ = (index + 1) * 10;
          const zIndex = isActive ? 50 : isHovered ? baseZ + 5 : baseZ;

          // Vertical stepping: negative top margin creates the physical overlapping stepped cardstock look from the image
          const isFirst = index === 0;
          const motionProps = getMotionProps(index, isActive, isHovered);

          return (
            <motion.div
              key={folder.index}
              style={{ zIndex, transformStyle: 'preserve-3d' }}
              animate={motionProps}
              className={`relative w-full ${!isFirst ? '-mt-7 sm:-mt-9' : ''}`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectFolder(folder.index);
                }}
                onMouseEnter={() => onHoverFolder(folder.index)}
                onMouseLeave={() => onHoverFolder(null)}
                role="tab"
                aria-selected={isActive}
                id={`stepped-tab-${folder.index}`}
                aria-controls={`manila-panel-${folder.index}`}
                className="group relative w-full text-left focus:outline-none cursor-pointer block"
              >
                {/* 
                  1. SVG Die-Cut Folder Contour with S-Curve Fillet Shoulders
                  Matches the authentic organic folder tab shape from the reference photograph.
                */}
                <div className="relative w-full h-[62px] sm:h-[76px] drop-shadow-[0_4px_8px_rgba(70,45,15,0.13)]">
                  <svg
                    viewBox="0 0 1000 70"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id={`grad-stepped-${folder.index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop 
                          offset="0%" 
                          stopColor={isActive ? tier.gradStops.activeTop : tier.gradStops.top} 
                        />
                        <stop 
                          offset="45%" 
                          stopColor={isActive ? '#FAF3E2' : tier.gradStops.mid} 
                        />
                        <stop 
                          offset="100%" 
                          stopColor={isActive ? '#F5EAD0' : tier.gradStops.bot} 
                        />
                      </linearGradient>
                    </defs>

                    {/* 
                      Folder Contour:
                      Shoulder line at Y=22.
                      Tab rises up to Y=2 with smooth rounded shoulders (S-curves).
                      Bottom line at Y=70 where it overlaps the next tier.
                    */}
                    <path
                      d={getFolderContourPath(tabLeft, tabWidth)}
                      fill={`url(#grad-stepped-${folder.index})`}
                      stroke={isActive ? '#996515' : isHovered ? '#B88628' : tier.borderColor}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      strokeLinejoin="round"
                    />

                    {/* Scored Fold Line beneath the tab */}
                    <line
                      x1="0"
                      y1="22"
                      x2="1000"
                      y2="22"
                      stroke={isActive ? '#D8B878' : '#D0BA8A'}
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      opacity="0.6"
                    />
                  </svg>

                  {/* 
                    2. Content within the Raised Tab Area
                    Aligned exactly over the tab's horizontal span
                  */}
                  <div 
                    className="absolute top-0 flex items-center pointer-events-none"
                    style={{
                      left: `${tabLeft}%`,
                      width: `${tabWidth}%`,
                      height: '24px' // height of the raised tab area
                    }}
                  >
                    <div className="w-full h-full flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4">
                      {/* Tactile Tab Indicator Dot */}
                      <span
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 transition-all ${
                          isActive
                            ? 'bg-[#996515] ring-2 ring-[#996515]/30 shadow-xs'
                            : isHovered
                            ? 'bg-[#A87B28]'
                            : 'bg-[#BCA373]'
                        }`}
                      />

                      {/* Tab Label in Current Font Style */}
                      <span
                        className={`font-mono text-[10px] sm:text-[12px] md:text-[13px] tracking-tight whitespace-nowrap truncate select-none transition-colors ${
                          isActive
                            ? 'font-bold text-[#1F170B]'
                            : 'font-semibold text-[#3B2D16] group-hover:text-[#1F170B]'
                        }`}
                      >
                        {folder.tabLabel}
                      </span>
                    </div>
                  </div>

                  {/* 
                    3. Context along the Folder Shoulder Area
                    Displays category, docket reference code, or status badge in current font style
                  */}
                  <div 
                    className="absolute bottom-1 sm:bottom-2 inset-x-3 sm:inset-x-6 flex items-center justify-between pointer-events-none font-mono text-[9px] sm:text-[11px] text-[#695229]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#4A381A] opacity-90 hidden sm:inline">
                        {folder.category}
                      </span>
                      <span className="opacity-50 hidden sm:inline">·</span>
                      <span className="truncate max-w-[180px] md:max-w-md opacity-80">
                        {folder.highlights.slice(0, 2).join(' · ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive ? (
                        <span className="px-2 py-0.5 rounded bg-[#996515] text-[#FFFDF8] font-bold text-[9px] sm:text-[10px] shadow-xs">
                          ACTIVE DOSSIER
                        </span>
                      ) : (
                        <span className="hidden xs:inline-block px-1.5 py-0.5 rounded bg-[#EAD7AA]/70 border border-[#D0B880] text-[9px] text-[#544122]">
                          REF #{folder.docketCode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Calculates SVG path for a continuous folder with a raised tab at [tabLeftPct, tabLeftPct + tabWidthPct]
 * across 1000 coordinate units.
 * Shoulder line at Y=22, Tab top at Y=2, Folder base at Y=70.
 */
function getFolderContourPath(tabLeftPct: number, tabWidthPct: number): string {
  const scale = 10; // 100% = 1000 units
  const tL = Math.max(10, tabLeftPct * scale);
  const tR = Math.min(990, (tabLeftPct + tabWidthPct) * scale);
  const sY = 22; // shoulder Y
  const tY = 2;  // tab top Y
  const bY = 70; // bottom Y
  const r = 16;  // fillet radius for smooth S-curve

  return [
    `M 0 ${sY}`,
    // Flat left shoulder
    `L ${tL - r} ${sY}`,
    // Smooth fillet up to tab top (S-curve left shoulder)
    `C ${tL - r / 2} ${sY}, ${tL} ${sY - 4}, ${tL + 4} ${tY + 8}`,
    `C ${tL + 7} ${tY + 2}, ${tL + 12} ${tY}, ${tL + r} ${tY}`,
    // Flat top of tab
    `L ${tR - r} ${tY}`,
    // Smooth fillet down to right shoulder (S-curve right shoulder)
    `C ${tR - 12} ${tY}, ${tR - 7} ${tY + 2}, ${tR - 4} ${tY + 8}`,
    `C ${tR} ${sY - 4}, ${tR + r / 2} ${sY}, ${tR + r} ${sY}`,
    // Flat right shoulder to end
    `L 1000 ${sY}`,
    // Right edge down
    `L 1000 ${bY}`,
    // Bottom edge across
    `L 0 ${bY}`,
    // Close back to start
    'Z'
  ].join(' ');
}
