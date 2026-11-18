import React from 'react';
import { motion } from 'motion/react';

export const RoyalCrown: React.FC<{ className?: string; glowing?: boolean }> = ({
  className = '',
  glowing = true,
}) => {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${glowing ? 'drop-shadow-[0_0_24px_rgba(245,215,142,0.55)]' : ''} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crownGold" x1="18" y1="20" x2="122" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5D6" />
          <stop offset="45%" stopColor="#F5D78E" />
          <stop offset="100%" stopColor="#D6A449" />
        </linearGradient>
        <linearGradient id="crownGemPink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE2EE" />
          <stop offset="100%" stopColor="#F078A2" />
        </linearGradient>
      </defs>

      {/* Back arches */}
      <path
        d="M36 66C36 42 54 24 70 24C86 24 104 42 104 66"
        stroke="#E6BE68"
        strokeWidth="3"
        strokeOpacity="0.65"
      />
      {/* Main Crown Body */}
      <path
        d="M24 74L16 36L45 52L70 22L95 52L124 36L116 74H24Z"
        fill="url(#crownGold)"
        stroke="#FFF9E6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Filigree Base Band */}
      <rect x="22" y="72" width="96" height="12" rx="5" fill="url(#crownGold)" stroke="#FFF5D6" strokeWidth="1.2" />

      {/* Crown Peak Pearls */}
      <circle cx="16" cy="34" r="4.2" fill="#FFF9F2" />
      <circle cx="70" cy="19" r="5.5" fill="#FFF9F2" />
      <circle cx="124" cy="34" r="4.2" fill="#FFF9F2" />
      <circle cx="45" cy="50" r="3" fill="#FFF5D6" />
      <circle cx="95" cy="50" r="3" fill="#FFF5D6" />

      {/* Center Heart Jewel */}
      <path
        d="M70 67C70 67 60 60.5 60 54C60 50.8 62.4 48.5 65.4 48.5C67.3 48.5 68.9 49.5 70 51.2C71.1 49.5 72.7 48.5 74.6 48.5C77.6 48.5 80 50.8 80 54C80 60.5 70 67 70 67Z"
        fill="url(#crownGemPink)"
        stroke="#FFF5D6"
        strokeWidth="1"
      />
      {/* Band Jewels */}
      <circle cx="44" cy="78" r="2.8" fill="#C8B6FF" />
      <circle cx="70" cy="78" r="3.4" fill="#F7B8D0" />
      <circle cx="96" cy="78" r="2.8" fill="#C8B6FF" />
    </svg>
  );
};

export const FairytaleCastle: React.FC<{ className?: string; silhouetteOnly?: boolean }> = ({
  className = '',
  silhouetteOnly = false,
}) => {
  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="castleWall" x1="220" y1="60" x2="220" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={silhouetteOnly ? '#241447' : '#3E256E'} />
          <stop offset="100%" stopColor={silhouetteOnly ? '#140B29' : '#211240'} />
        </linearGradient>
        <linearGradient id="castleRoof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9D85D8" />
          <stop offset="100%" stopColor="#583994" />
        </linearGradient>
        <radialGradient id="castleGlow" cx="50%" cy="65%" r="50%">
          <stop offset="0%" stopColor="#F5D78E" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#C8B6FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#140B29" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Aura Behind Castle */}
      <circle cx="220" cy="180" r="165" fill="url(#castleGlow)" />

      {/* Misty Hill Base */}
      <path
        d="M20 296C85 268 150 264 220 264C290 264 355 268 420 296V312H20V296Z"
        fill="#190E33"
      />

      {/* Far Left & Right Outer Towers */}
      <rect x="64" y="168" width="40" height="118" fill="url(#castleWall)" />
      <path d="M58 168L84 114L110 168H58Z" fill="url(#castleRoof)" stroke="#F5D78E" strokeOpacity="0.45" strokeWidth="1" />
      <path d="M84 114V98" stroke="#F5D78E" strokeWidth="1.5" />
      <path d="M84 99L100 104L84 109Z" fill="#F7B8D0" />

      <rect x="336" y="168" width="40" height="118" fill="url(#castleWall)" />
      <path d="M330 168L356 114L382 168H330Z" fill="url(#castleRoof)" stroke="#F5D78E" strokeOpacity="0.45" strokeWidth="1" />
      <path d="M356 114V98" stroke="#F5D78E" strokeWidth="1.5" />
      <path d="M356 99L372 104L356 109Z" fill="#F7B8D0" />

      {/* Inner Flanking Turrets */}
      <rect x="122" y="128" width="48" height="156" fill="url(#castleWall)" />
      <path d="M115 128L146 66L177 128H115Z" fill="url(#castleRoof)" stroke="#F5D78E" strokeOpacity="0.55" strokeWidth="1.2" />
      <path d="M146 66V50" stroke="#F5D78E" strokeWidth="1.6" />
      <path d="M146 51L164 56L146 61Z" fill="#F5D78E" />

      <rect x="270" y="128" width="48" height="156" fill="url(#castleWall)" />
      <path d="M263 128L294 66L325 128H263Z" fill="url(#castleRoof)" stroke="#F5D78E" strokeOpacity="0.55" strokeWidth="1.2" />
      <path d="M294 66V50" stroke="#F5D78E" strokeWidth="1.6" />
      <path d="M294 51L312 56L294 61Z" fill="#F5D78E" />

      {/* Connecting Curtain Walls */}
      <rect x="96" y="206" width="248" height="82" fill="url(#castleWall)" />

      {/* Central Grand Keep & Tallest Spire */}
      <rect x="176" y="96" width="88" height="190" fill="url(#castleWall)" stroke="#9D85D8" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M168 96L220 22L272 96H168Z" fill="url(#castleRoof)" stroke="#F5D78E" strokeOpacity="0.7" strokeWidth="1.4" />
      <path d="M220 22V6" stroke="#FFF1C9" strokeWidth="1.8" />
      <path d="M220 7L242 13L220 19Z" fill="#F7B8D0" />

      {/* Warm Glowing Castle Windows */}
      <g className="animate-window-glow">
        <path d="M210 132C210 123 230 123 230 132V150H210V132Z" fill="#FFE7A6" />
        <path d="M140 162C140 156 152 156 152 162V176H140V162Z" fill="#FFE7A6" />
        <path d="M288 162C288 156 300 156 300 162V176H288V162Z" fill="#FFE7A6" />
        <path d="M78 196C78 191 90 191 90 196V208H78V196Z" fill="#FFD6E6" />
        <path d="M350 196C350 191 362 191 362 196V208H350V196Z" fill="#FFD6E6" />
        <path d="M194 186C194 180 206 180 206 186V198H194V186Z" fill="#FFE7A6" />
        <path d="M234 186C234 180 246 180 246 186V198H234V186Z" fill="#FFE7A6" />
      </g>

      {/* Grand Arched Palace Gate */}
      <path
        d="M198 288V244C198 228 242 228 242 244V288H198Z"
        fill="#FFF1C9"
        fillOpacity="0.22"
        stroke="#F5D78E"
        strokeWidth="1.5"
      />

      {/* Delicate Blooming Roses at Base (when not pure silhouette) */}
      {!silhouetteOnly && (
        <g>
          <circle cx="118" cy="284" r="6" fill="#F48FB1" />
          <circle cx="129" cy="287" r="5" fill="#FFD6E6" />
          <circle cx="140" cy="285" r="5.5" fill="#F7B8D0" />
          <circle cx="300" cy="285" r="5.5" fill="#F7B8D0" />
          <circle cx="311" cy="287" r="5" fill="#FFD6E6" />
          <circle cx="322" cy="284" r="6" fill="#F48FB1" />
        </g>
      )}
    </svg>
  );
};

export const EnchantedRose: React.FC<{ bloomed: boolean; className?: string }> = ({
  bloomed,
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="roseOuter" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFD6E6" />
          <stop offset="65%" stopColor="#F48FB1" />
          <stop offset="100%" stopColor="#B84B78" />
        </radialGradient>
        <radialGradient id="roseInner" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#F7B8D0" />
        </radialGradient>
      </defs>

      {/* Stem & Leaves */}
      <path d="M60 130C59 105 61 88 60 72" stroke="#7AC29A" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M60 105C44 98 38 106 46 113C52 117 58 111 60 105Z" fill="#6BB18A" />
      <path d="M60 95C76 88 82 96 74 103C68 107 62 101 60 95Z" fill="#7AC29A" />

      {/* Outer Opening Petals */}
      <motion.g
        animate={{ scale: bloomed ? 1.15 : 0.72, y: bloomed ? -2 : 4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: '60px 58px' }}
      >
        <ellipse cx="44" cy="54" rx="18" ry="20" transform="rotate(-24 44 54)" fill="url(#roseOuter)" />
        <ellipse cx="76" cy="54" rx="18" ry="20" transform="rotate(24 76 54)" fill="url(#roseOuter)" />
        <ellipse cx="60" cy="46" rx="19" ry="21" fill="url(#roseOuter)" />
      </motion.g>

      {/* Mid & Inner Petals */}
      <motion.g
        animate={{ scale: bloomed ? 1.05 : 0.78 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: '60px 55px' }}
      >
        <ellipse cx="52" cy="52" rx="12" ry="15" transform="rotate(-12 52 52)" fill="url(#roseInner)" />
        <ellipse cx="68" cy="52" rx="12" ry="15" transform="rotate(12 68 52)" fill="url(#roseInner)" />
        <circle cx="60" cy="50" r="10" fill="#FFE6F0" />
        <path d="M55 49C57 45 63 45 65 49C63 53 57 53 55 49Z" fill="#F48FB1" />
      </motion.g>

      {/* Calyx */}
      <path d="M48 70L60 76L72 70L60 66Z" fill="#6BB18A" />
    </svg>
  );
};

export const RoyalMirror: React.FC<{ shimmerKey?: number; className?: string }> = ({
  shimmerKey = 0,
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 120 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mirrorFrame" x1="20" y1="10" x2="100" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5D6" />
          <stop offset="50%" stopColor="#E6BE68" />
          <stop offset="100%" stopColor="#B88735" />
        </linearGradient>
        <radialGradient id="mirrorGlass" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#432874" />
          <stop offset="55%" stopColor="#26154A" />
          <stop offset="100%" stopColor="#140A29" />
        </radialGradient>
        <clipPath id="mirrorGlassClip">
          <ellipse cx="60" cy="58" rx="31" ry="40" />
        </clipPath>
      </defs>

      {/* Ornate Handle */}
      <path d="M55 103H65L63 136C63 139 57 139 57 136L55 103Z" fill="url(#mirrorFrame)" />
      <circle cx="60" cy="140" r="5" fill="#F5D78E" />

      {/* Outer Gold Oval Frame */}
      <ellipse cx="60" cy="58" rx="38" ry="47" fill="url(#mirrorFrame)" />
      {/* Top Tiny Crown Accent */}
      <path d="M51 12L55 5L60 10L65 5L69 12Z" fill="#FFF1C9" />
      <circle cx="60" cy="13" r="2.5" fill="#F48FB1" />

      {/* Enchanted Glass Surface */}
      <ellipse cx="60" cy="58" rx="31" ry="40" fill="url(#mirrorGlass)" stroke="#FFF1C9" strokeWidth="1" />

      {/* Animated Shimmer Sweep */}
      <g clipPath="url(#mirrorGlassClip)">
        <motion.rect
          key={shimmerKey}
          x="-50"
          y="10"
          width="36"
          height="110"
          fill="#FFF1C9"
          fillOpacity="0.28"
          transform="rotate(20 60 58)"
          initial={{ x: -50 }}
          animate={{ x: 140 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
        <circle cx="48" cy="40" r="2" fill="#FFF9F2" opacity="0.7" />
        <circle cx="74" cy="72" r="1.4" fill="#F7B8D0" opacity="0.75" />
      </g>
    </svg>
  );
};
