import React from 'react';
import { motion } from 'motion/react';

interface CharacterProps {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * Glowing crescent moon with a fluffy white kitten sleeping peacefully on its curve.
 */
export const SleepingMoonKitten: React.FC<CharacterProps> = ({ className = '' }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_28px_rgba(245,215,142,0.38)]"
      >
        <defs>
          <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF1C9" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#F5D78E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F5D78E" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="moonBody" x1="40" y1="30" x2="175" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF9EC" />
            <stop offset="55%" stopColor="#F8E2A6" />
            <stop offset="100%" stopColor="#E6BE68" />
          </linearGradient>
          <linearGradient id="kittenFur" x1="70" y1="80" x2="135" y2="145" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5ECFF" />
          </linearGradient>
        </defs>

        {/* Soft ambient aura */}
        <circle cx="110" cy="110" r="102" fill="url(#moonHalo)" />

        {/* Crescent Moon */}
        <path
          d="M142 36C101 38 68 72 68 114C68 156 102 190 144 190C158 190 171 186 182 179C168 181 154 178 142 170C115 154 104 119 114 88C121 67 136 50 156 41C151 38 147 36 142 36Z"
          fill="url(#moonBody)"
        />
        {/* Subtle moon craters */}
        <circle cx="92" cy="118" r="5" fill="#E6BE68" fillOpacity="0.25" />
        <circle cx="105" cy="146" r="3.5" fill="#E6BE68" fillOpacity="0.22" />
        <circle cx="114" cy="70" r="3" fill="#E6BE68" fillOpacity="0.2" />

        {/* Sleeping White Kitten curled inside the moon */}
        <g className="animate-float-slow" style={{ transformOrigin: '122px 134px' }}>
          {/* Tail gently swaying */}
          <g className="animate-tail-sway" style={{ transformOrigin: '146px 146px' }}>
            <path
              d="M145 147C162 148 172 138 168 128C165 121 156 124 156 131"
              stroke="#FFFFFF"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>

          {/* Curled body */}
          <ellipse cx="126" cy="144" rx="26" ry="17" fill="url(#kittenFur)" />
          {/* Little pink ribbon around neck */}
          <path
            d="M107 134C112 139 122 140 128 135"
            stroke="#F7B8D0"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Kitten head */}
          <circle cx="109" cy="127" r="16" fill="#FFFFFF" />
          {/* Left & Right Ears */}
          <path d="M96 118L94 103L106 113Z" fill="#FFFFFF" />
          <path d="M97.5 115L96.5 106.5L103.5 112.5Z" fill="#FFD6E6" />
          <path d="M113 113L122 102L123 117Z" fill="#FFFFFF" />
          <path d="M115 112.5L120.5 105.5L121.2 114.5Z" fill="#FFD6E6" />

          {/* Tiny golden crown resting sweetly */}
          <path
            d="M101 108L104 100L109 105L114 100L117 108Z"
            fill="#F5D78E"
            stroke="#FFF1C9"
            strokeWidth="0.8"
          />

          {/* Sleeping closed eyes */}
          <path d="M100 127C102 129.5 105 129.5 107 127" stroke="#53376B" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M112 127C114 129.5 117 129.5 119 127" stroke="#53376B" strokeWidth="1.6" strokeLinecap="round" />
          {/* Rosy cheeks */}
          <ellipse cx="98.5" cy="130.5" rx="3" ry="1.8" fill="#F7B8D0" fillOpacity="0.65" />
          <ellipse cx="119.5" cy="130.5" rx="3" ry="1.8" fill="#F7B8D0" fillOpacity="0.65" />
          {/* Tiny pink nose */}
          <path d="M108 130H111L109.5 132Z" fill="#F48FB1" />
          {/* Cute tucked paw */}
          <ellipse cx="103" cy="144" rx="6.5" ry="4.5" fill="#FFF9FE" stroke="#EADDFB" strokeWidth="1" />
        </g>

        {/* Tiny floating dream stars */}
        <circle cx="155" cy="88" r="1.8" fill="#FFF1C9" opacity="0.85" />
        <circle cx="168" cy="76" r="1.2" fill="#F7B8D0" opacity="0.8" />
      </svg>
    </div>
  );
};

/**
 * Adorable white kitten wearing a pink satin bow ribbon and a tiny golden crown.
 * Blinks naturally, sways tail, and waves gently when tapped.
 */
export const RoyalRibbonKitten: React.FC<CharacterProps> = ({
  className = '',
  isActive = false,
  onClick,
}) => {
  return (
    <motion.div
      className={`relative select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileTap={onClick ? { scale: 0.96 } : undefined}
      animate={isActive ? { y: [0, -7, 0] } : { y: [0, -3, 0] }}
      transition={{ duration: isActive ? 0.8 : 4.2, repeat: isActive ? 0 : Infinity, ease: 'easeInOut' }}
    >
      {/* Floating tiny hearts around kitten */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 absolute -top-1 right-3 text-[#F7B8D0] animate-rise-heart pointer-events-none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(13,7,26,0.45)]"
      >
        <defs>
          <radialGradient id="whiteCatFur" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="80%" stopColor="#F7F0FF" />
            <stop offset="100%" stopColor="#E9DCF9" />
          </radialGradient>
          <linearGradient id="ribbonPink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6E6" />
            <stop offset="100%" stopColor="#F48FB1" />
          </linearGradient>
        </defs>

        {/* Soft floor shadow */}
        <ellipse cx="90" cy="162" rx="42" ry="8" fill="#080412" fillOpacity="0.45" />

        {/* Wagging tail */}
        <g className="animate-tail-sway" style={{ transformOrigin: '115px 142px' }}>
          <path
            d="M116 144C140 144 152 124 143 108C138 100 128 105 131 114"
            stroke="#FBF7FF"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </g>

        {/* Body */}
        <ellipse cx="90" cy="131" rx="31" ry="29" fill="url(#whiteCatFur)" />
        {/* Chest fluff */}
        <ellipse cx="90" cy="122" rx="16" ry="14" fill="#FFFFFF" />

        {/* Paws */}
        <ellipse cx="74" cy="154" rx="10" ry="7" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1" />
        <ellipse cx="106" cy="154" rx="10" ry="7" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1" />

        {/* Waving Right Paw */}
        <motion.g
          animate={isActive ? { rotate: [0, -24, 14, -18, 0] } : { rotate: [0, -10, 0] }}
          transition={{ duration: isActive ? 0.9 : 3.4, repeat: isActive ? 1 : Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '116px 124px' }}
        >
          <ellipse cx="122" cy="116" rx="9" ry="7" transform="rotate(-25 122 116)" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1" />
          <circle cx="122" cy="115" r="2.2" fill="#FFD6E6" />
        </motion.g>

        {/* Head */}
        <ellipse cx="90" cy="84" rx="34" ry="29" fill="url(#whiteCatFur)" />

        {/* Ears */}
        <path d="M62 72L57 42L81 60Z" fill="#FFFFFF" />
        <path d="M64 67L61 48L77 59Z" fill="#FFD6E6" />
        <path d="M118 72L123 42L99 60Z" fill="#FFFFFF" />
        <path d="M116 67L119 48L103 59Z" fill="#FFD6E6" />

        {/* Tiny Golden Royal Crown */}
        <g transform="translate(72, 34)">
          <path
            d="M4 22L2 8L12 15L18 3L24 15L34 8L32 22Z"
            fill="#F5D78E"
            stroke="#FFF1C9"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="15" r="2.5" fill="#F48FB1" />
          <circle cx="9" cy="17" r="1.6" fill="#C8B6FF" />
          <circle cx="27" cy="17" r="1.6" fill="#C8B6FF" />
        </g>

        {/* Blinking Eyes */}
        <g className="animate-eye-blink">
          <ellipse cx="76" cy="84" rx="4.8" ry="5.5" fill="#2A173B" />
          <circle cx="74.5" cy="82" r="1.8" fill="#FFFFFF" />
          <circle cx="77.5" cy="85.8" r="0.9" fill="#FFFFFF" opacity="0.8" />

          <ellipse cx="104" cy="84" rx="4.8" ry="5.5" fill="#2A173B" />
          <circle cx="102.5" cy="82" r="1.8" fill="#FFFFFF" />
          <circle cx="105.5" cy="85.8" r="0.9" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Rosy Blush */}
        <ellipse cx="67" cy="91" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.65" />
        <ellipse cx="113" cy="91" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.65" />

        {/* Cute Nose & Smile */}
        <path d="M87.5 89H92.5L90 92Z" fill="#F48FB1" />
        <path d="M85.5 94C87 96 89.5 95.5 90 93.2C90.5 95.5 93 96 94.5 94" stroke="#6E4B85" strokeWidth="1.4" strokeLinecap="round" />

        {/* Pink Satin Ribbon Collar & Bow */}
        <path d="M69 109C79 114 101 114 111 109" stroke="url(#ribbonPink)" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M90 113L78 106V120L90 113Z" fill="#F48FB1" />
        <path d="M90 113L102 106V120L90 113Z" fill="#F7B8D0" />
        <circle cx="90" cy="113" r="3.8" fill="#FFF1C9" stroke="#F48FB1" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

interface TeddyProps extends CharacterProps {
  variant?: 'lavender' | 'blush' | 'cream';
  withRoseAndGift?: boolean;
}

/**
 * Cute fluffy teddy bear cradling a glowing pink heart.
 * Gently breathes, blinks, and hugs its heart closer when tapped or animated.
 */
export const HeartTeddyBear: React.FC<TeddyProps> = ({
  className = '',
  isActive = false,
  onClick,
  variant = 'cream',
  withRoseAndGift = false,
}) => {
  const palette = {
    cream: { furLight: '#FFF3E8', furDark: '#E9CBB8', ear: '#F7B8D0' },
    blush: { furLight: '#FFE6F0', furDark: '#EBB6CC', ear: '#FFF1C9' },
    lavender: { furLight: '#F4ECFF', furDark: '#D2C0F0', ear: '#F7B8D0' },
  }[variant];

  return (
    <motion.div
      className={`relative select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileTap={onClick ? { scale: 0.96 } : undefined}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Floating heart particle */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 absolute -top-1 left-1/2 -translate-x-1/2 text-[#F7B8D0] animate-rise-heart pointer-events-none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      <svg
        viewBox={withRoseAndGift ? '0 0 220 185' : '0 0 180 180'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(10,5,20,0.45)]"
      >
        <defs>
          <radialGradient id={`teddyFur-${variant}`} cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor={palette.furLight} />
            <stop offset="100%" stopColor={palette.furDark} />
          </radialGradient>
          <linearGradient id="teddyHeart" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6E6" />
            <stop offset="55%" stopColor="#F7B8D0" />
            <stop offset="100%" stopColor="#E87EA4" />
          </linearGradient>
        </defs>

        <g transform={withRoseAndGift ? 'translate(20, 4)' : ''}>
          {/* Shadow */}
          <ellipse cx="90" cy="162" rx="42" ry="8" fill="#080412" fillOpacity="0.45" />

          {/* Round Bear Ears */}
          <circle cx="62" cy="56" r="14" fill={`url(#teddyFur-${variant})`} />
          <circle cx="62" cy="56" r="8" fill={palette.ear} fillOpacity="0.65" />
          <circle cx="118" cy="56" r="14" fill={`url(#teddyFur-${variant})`} />
          <circle cx="118" cy="56" r="8" fill={palette.ear} fillOpacity="0.65" />

          {/* Plump Body */}
          <ellipse cx="90" cy="128" rx="34" ry="31" fill={`url(#teddyFur-${variant})`} />
          {/* Tummy patch */}
          <ellipse cx="90" cy="130" rx="20" ry="19" fill="#FFF9F5" fillOpacity="0.55" />

          {/* Feet */}
          <ellipse cx="68" cy="154" rx="13" ry="9" fill={`url(#teddyFur-${variant})`} />
          <ellipse cx="68" cy="154" rx="7" ry="4.5" fill={palette.ear} fillOpacity="0.55" />
          <ellipse cx="112" cy="154" rx="13" ry="9" fill={`url(#teddyFur-${variant})`} />
          <ellipse cx="112" cy="154" rx="7" ry="4.5" fill={palette.ear} fillOpacity="0.55" />

          {/* Head */}
          <ellipse cx="90" cy="82" rx="35" ry="30" fill={`url(#teddyFur-${variant})`} />
          {/* Snout */}
          <ellipse cx="90" cy="89" rx="13" ry="10" fill="#FFF9F5" />
          <ellipse cx="90" cy="85.5" rx="4.2" ry="2.8" fill="#68436A" />
          <path d="M86 91C87.5 93 89.5 92.5 90 90.5C90.5 92.5 92.5 93 94 91" stroke="#68436A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Blinking Eyes */}
          <g className="animate-eye-blink">
            <circle cx="75" cy="77" r="4.2" fill="#2A173B" />
            <circle cx="73.6" cy="75.5" r="1.4" fill="#FFFFFF" />
            <circle cx="105" cy="77" r="4.2" fill="#2A173B" />
            <circle cx="103.6" cy="75.5" r="1.4" fill="#FFFFFF" />
          </g>

          {/* Cheeks */}
          <ellipse cx="66" cy="85" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.7" />
          <ellipse cx="114" cy="85" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.7" />

          {/* Glowing Pink Heart Held in Center */}
          <motion.g
            animate={isActive ? { scale: [1, 1.18, 1.06] } : { scale: [1, 1.05, 1] }}
            transition={{ duration: isActive ? 0.55 : 2.8, repeat: isActive ? 0 : Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '90px 128px' }}
          >
            <path
              d="M90 145C90 145 70 132.5 70 119.5C70 113.5 74.8 109 80.5 109C84.2 109 87.5 111 90 114.2C92.5 111 95.8 109 99.5 109C105.2 109 110 113.5 110 119.5C110 132.5 90 145 90 145Z"
              fill="url(#teddyHeart)"
              stroke="#FFF1C9"
              strokeWidth="1.2"
            />
            <path d="M77 116.5C78.5 114.2 81.2 113.5 83.2 114.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
          </motion.g>

          {/* Hugging Arms */}
          <motion.ellipse
            cx="65"
            cy="125"
            rx="12"
            ry="8"
            transform="rotate(24 65 125)"
            fill={`url(#teddyFur-${variant})`}
            animate={isActive ? { x: [0, 4, 0] } : undefined}
            transition={{ duration: 0.5 }}
          />
          <motion.ellipse
            cx="115"
            cy="125"
            rx="12"
            ry="8"
            transform="rotate(-24 115 125)"
            fill={`url(#teddyFur-${variant})`}
            animate={isActive ? { x: [0, -4, 0] } : undefined}
            transition={{ duration: 0.5 }}
          />
        </g>

        {/* Optional Rose & Tiny Gift Box Companion */}
        {withRoseAndGift && (
          <>
            {/* Little Rose on left */}
            <g transform="translate(8, 128)">
              <path d="M16 32C15 22 17 15 19 10" stroke="#7EB894" strokeWidth="2.4" strokeLinecap="round" />
              <ellipse cx="13" cy="22" rx="4.5" ry="2.2" transform="rotate(-25 13 22)" fill="#7EB894" />
              <circle cx="19" cy="9" r="6.5" fill="#F48FB1" />
              <path d="M15 9C16.5 6 21.5 6 23 9C21.5 11.5 16.5 11.5 15 9Z" fill="#FFD6E6" />
            </g>
            {/* Tiny Golden Gift Box on right */}
            <g transform="translate(168, 134)">
              <rect x="4" y="10" width="28" height="22" rx="3" fill="#F7B8D0" stroke="#F5D78E" strokeWidth="1.2" />
              <rect x="2" y="5" width="32" height="7" rx="2" fill="#FFD6E6" stroke="#F5D78E" strokeWidth="1.2" />
              <rect x="15.5" y="5" width="5" height="27" fill="#F5D78E" />
              <path d="M18 5C14 0 9 2 13 5H18ZM18 5C22 0 27 2 23 5H18Z" fill="#F5D78E" />
            </g>
          </>
        )}
      </svg>
    </motion.div>
  );
};

/**
 * Luminous lavender & champagne butterfly with gently fluttering wings.
 */
export const AnimatedButterfly: React.FC<{ className?: string; color?: 'lavender' | 'pink' }> = ({
  className = '',
  color = 'lavender',
}) => {
  const wingPrimary = color === 'lavender' ? '#C8B6FF' : '#F7B8D0';
  const wingSecondary = color === 'lavender' ? '#F5D78E' : '#FFD6E6';

  return (
    <svg
      viewBox="0 0 64 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <g className="animate-wing-flutter" style={{ transformOrigin: '32px 27px' }}>
        {/* Left Wings */}
        <path
          d="M31 25C22 8 6 6 8 20C9 27 18 29 31 28Z"
          fill={wingPrimary}
          fillOpacity="0.88"
          stroke="#FFF1C9"
          strokeWidth="0.9"
        />
        <path
          d="M31 29C20 30 12 40 18 46C24 50 30 40 31 32Z"
          fill={wingSecondary}
          fillOpacity="0.82"
          stroke="#FFF1C9"
          strokeWidth="0.8"
        />
        {/* Right Wings */}
        <path
          d="M33 25C42 8 58 6 56 20C55 27 46 29 33 28Z"
          fill={wingPrimary}
          fillOpacity="0.88"
          stroke="#FFF1C9"
          strokeWidth="0.9"
        />
        <path
          d="M33 29C44 30 52 40 46 46C40 50 34 40 33 32Z"
          fill={wingSecondary}
          fillOpacity="0.82"
          stroke="#FFF1C9"
          strokeWidth="0.8"
        />
      </g>
      {/* Body & Antennae */}
      <ellipse cx="32" cy="29" rx="1.8" ry="9" fill="#FFF9F2" />
      <path d="M31 20C29 14 26 12 24 12" stroke="#FFF1C9" strokeWidth="1" strokeLinecap="round" />
      <path d="M33 20C35 14 38 12 40 12" stroke="#FFF1C9" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
};

/**
 * Cute peeking white kitten holding tiny pink tulips/flowers for the corner of the Royal Letter.
 */
export const PeekingFlowerKitten: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 130 125" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Ears */}
        <path d="M35 44L30 16L54 32Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <path d="M37 40L34 22L50 32Z" fill="#FFD6E6" />
        <path d="M95 44L100 16L76 32Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <path d="M93 40L96 22L80 32Z" fill="#FFD6E6" />

        {/* Tiny Crown */}
        <path d="M54 27L57 17L65 23L73 17L76 27Z" fill="#F5D78E" stroke="#FFF1C9" strokeWidth="1" />

        {/* Round Head */}
        <ellipse cx="65" cy="56" rx="33" ry="27" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />

        {/* Blinking Sparkly Eyes */}
        <g className="animate-eye-blink">
          <circle cx="51" cy="55" r="4.5" fill="#2A173B" />
          <circle cx="49.5" cy="53.3" r="1.6" fill="#FFFFFF" />
          <circle cx="79" cy="55" r="4.5" fill="#2A173B" />
          <circle cx="77.5" cy="53.3" r="1.6" fill="#FFFFFF" />
        </g>

        {/* Blush & Nose */}
        <ellipse cx="42" cy="62" rx="5" ry="2.6" fill="#F7B8D0" fillOpacity="0.65" />
        <ellipse cx="88" cy="62" rx="5" ry="2.6" fill="#F7B8D0" fillOpacity="0.65" />
        <path d="M63 60H67L65 62.5Z" fill="#F48FB1" />
        <path d="M61 64.5C62.5 66 64.5 65.8 65 63.8C65.5 65.8 67.5 66 69 64.5" stroke="#6E4B85" strokeWidth="1.3" strokeLinecap="round" />

        {/* Tiny Paws Resting on Letter Edge */}
        <ellipse cx="46" cy="84" rx="9" ry="6" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <ellipse cx="84" cy="84" rx="9" ry="6" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />

        {/* Mini Pink Bouquet Held by Paw */}
        <g transform="translate(26, 62)">
          <path d="M16 28L12 10" stroke="#7AC29A" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M18 28L22 12" stroke="#6BB18A" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="11" cy="10" r="6" fill="#F48FB1" />
          <circle cx="11" cy="9" r="3" fill="#FFD6E6" />
          <circle cx="22" cy="12" r="5.5" fill="#F7B8D0" />
          <circle cx="22" cy="11" r="2.6" fill="#FFF0F5" />
        </g>
      </svg>
    </motion.div>
  );
};

/**
 * Adorable wide-eyed kitten holding a big pink blossom ("FOR YOU ♡") for the Royal Keepsake Card.
 */
export const ForYouFlowerKitten: React.FC<{ className?: string; isActive?: boolean }> = ({
  className = '',
  isActive = false,
}) => {
  return (
    <motion.div
      animate={isActive ? { scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] } : { y: [0, -3, 0] }}
      transition={{ duration: isActive ? 0.65 : 3.8, repeat: isActive ? 0 : Infinity, ease: 'easeInOut' }}
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 210 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Cute "FOR YOU" Banner Accent */}
        <path d="M36 22C33 19 30 22 33 26L36 29L39 26C42 22 39 19 36 22Z" fill="#F48FB1" />
        <path d="M136 24C133 21 130 24 133 28L136 31L139 28C142 24 139 21 136 24Z" fill="#F48FB1" />

        {/* Kitten Body */}
        <ellipse cx="80" cy="120" rx="34" ry="22" fill="#FFFDF9" stroke="#3D244C" strokeWidth="2.4" />
        {/* Ears */}
        <path d="M48 64L42 36L66 50Z" fill="#FFFDF9" stroke="#3D244C" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M49 58L46 43L60 51Z" fill="#FFD6E6" />
        <path d="M112 64L118 36L94 50Z" fill="#FFFDF9" stroke="#3D244C" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M111 58L114 43L100 51Z" fill="#FFD6E6" />

        {/* Head */}
        <ellipse cx="80" cy="78" rx="39" ry="30" fill="#FFFDF9" stroke="#3D244C" strokeWidth="2.4" />

        {/* Big Sparkly Eyes */}
        <g className="animate-eye-blink">
          <circle cx="63" cy="78" r="6" fill="#2A173B" />
          <circle cx="61" cy="75.8" r="2.2" fill="#FFFFFF" />
          <circle cx="65" cy="80" r="1.1" fill="#FFFFFF" />
          <circle cx="97" cy="78" r="6" fill="#2A173B" />
          <circle cx="95" cy="75.8" r="2.2" fill="#FFFFFF" />
          <circle cx="99" cy="80" r="1.1" fill="#FFFFFF" />
        </g>

        {/* Rosy Cheeks & Happy Mouth */}
        <ellipse cx="52" cy="87" rx="6.5" ry="3.5" fill="#F7B8D0" fillOpacity="0.8" />
        <ellipse cx="108" cy="87" rx="6.5" ry="3.5" fill="#F7B8D0" fillOpacity="0.8" />
        <path d="M76 86C78 89 80 88 80 86C80 88 82 89 84 86" stroke="#3D244C" strokeWidth="2" strokeLinecap="round" />

        {/* Stem & Big Pink Blossom */}
        <path d="M126 130C128 106 138 82 152 60" stroke="#7AC29A" strokeWidth="4.5" strokeLinecap="round" />
        <ellipse cx="122" cy="108" rx="9" ry="4.5" transform="rotate(-24 122 108)" fill="#7AC29A" stroke="#3D244C" strokeWidth="1.6" />
        <ellipse cx="144" cy="106" rx="9" ry="4.5" transform="rotate(24 144 106)" fill="#6BB18A" stroke="#3D244C" strokeWidth="1.6" />

        {/* Paws holding the stem */}
        <ellipse cx="108" cy="112" rx="10" ry="7" fill="#FFFDF9" stroke="#3D244C" strokeWidth="2.2" />

        {/* Big Flower Petals */}
        <g transform="translate(154, 58)">
          <circle cx="0" cy="-22" r="13" fill="#F7B8D0" stroke="#3D244C" strokeWidth="2" />
          <circle cx="21" cy="-7" r="13" fill="#FFD6E6" stroke="#3D244C" strokeWidth="2" />
          <circle cx="13" cy="18" r="13" fill="#F7B8D0" stroke="#3D244C" strokeWidth="2" />
          <circle cx="-13" cy="18" r="13" fill="#FFD6E6" stroke="#3D244C" strokeWidth="2" />
          <circle cx="-21" cy="-7" r="13" fill="#F7B8D0" stroke="#3D244C" strokeWidth="2" />
          <circle cx="0" cy="0" r="11" fill="#F5D78E" stroke="#3D244C" strokeWidth="2" />
        </g>
      </svg>
    </motion.div>
  );
};

/**
 * Kawaii snowy-white kitty wearing a satin pink bow & tiny golden tiara, holding a lush bouquet of roses.
 */
export const BouquetKitty: React.FC<CharacterProps> = ({ className = '', onClick, isActive = false }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={onClick ? { scale: 0.96 } : undefined}
      animate={isActive ? { y: [0, -8, 0] } : { y: [0, -4, 0] }}
      transition={{ duration: isActive ? 0.65 : 4.2, repeat: isActive ? 0 : Infinity, ease: 'easeInOut' }}
      className={`relative select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <svg viewBox="0 0 210 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_14px_28px_rgba(8,4,18,0.55)]">
        {/* Soft Shadow */}
        <ellipse cx="105" cy="204" rx="50" ry="9" fill="#080412" fillOpacity="0.45" />

        {/* Cute Dress & Feet */}
        <ellipse cx="86" cy="193" rx="14" ry="9" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <ellipse cx="124" cy="193" rx="14" ry="9" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <path d="M68 150C68 134 142 134 142 150L150 185C150 192 60 192 60 185L68 150Z" fill="#7D98E8" stroke="#C8B6FF" strokeWidth="1.5" />
        <path d="M84 134H126L130 156H80L84 134Z" fill="#FFF1C9" fillOpacity="0.35" />

        {/* Head */}
        <ellipse cx="105" cy="96" rx="52" ry="41" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        {/* Ears */}
        <path d="M62 72L54 34L86 56Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M64 67L59 42L80 56Z" fill="#FFD6E6" />
        <path d="M148 72L156 34L124 56Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M146 67L151 42L130 56Z" fill="#FFD6E6" />

        {/* Pink Satin Bow on Right Ear */}
        <g transform="translate(132, 46) rotate(16)">
          <ellipse cx="-12" cy="0" rx="11" ry="8" fill="#F48FB1" stroke="#FFD6E6" strokeWidth="1.2" />
          <ellipse cx="12" cy="0" rx="11" ry="8" fill="#F48FB1" stroke="#FFD6E6" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="5" fill="#FF77A8" stroke="#FFF1C9" strokeWidth="1.2" />
        </g>

        {/* Tiny Golden Tiara */}
        <path d="M90 54L94 40L105 49L116 40L120 54Z" fill="#F5D78E" stroke="#FFF9E6" strokeWidth="1.2" />
        <circle cx="105" cy="48" r="2.6" fill="#F48FB1" />

        {/* Blinking Kawaii Eyes & Golden Nose */}
        <g className="animate-eye-blink">
          <ellipse cx="82" cy="98" rx="4.8" ry="6.2" fill="#231433" />
          <circle cx="80.5" cy="95.8" r="1.6" fill="#FFFFFF" />
          <ellipse cx="128" cy="98" rx="4.8" ry="6.2" fill="#231433" />
          <circle cx="126.5" cy="95.8" r="1.6" fill="#FFFFFF" />
        </g>
        <ellipse cx="105" cy="105" rx="5.5" ry="3.8" fill="#F5D78E" />
        <ellipse cx="70" cy="107" rx="7" ry="3.5" fill="#F7B8D0" fillOpacity="0.65" />
        <ellipse cx="140" cy="107" rx="7" ry="3.5" fill="#F7B8D0" fillOpacity="0.65" />

        {/* Whiskers */}
        <path d="M46 95L60 97M45 104L59 104M48 113L61 110" stroke="#9B84B5" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M164 95L150 97M165 104L151 104M162 113L149 110" stroke="#9B84B5" strokeWidth="1.8" strokeLinecap="round" />

        {/* Rose Bouquet Wrapped in Blush Paper */}
        <g transform="translate(68, 128)">
          <path d="M12 24L37 64L62 24Z" fill="#FCE4EE" stroke="#E8A5B2" strokeWidth="1.4" />
          <path d="M22 40L37 46L52 40" stroke="#F48FB1" strokeWidth="4" strokeLinecap="round" />
          {/* Leaves */}
          <ellipse cx="16" cy="20" rx="8" ry="4" transform="rotate(-30 16 20)" fill="#7AC29A" />
          <ellipse cx="58" cy="20" rx="8" ry="4" transform="rotate(30 58 20)" fill="#7AC29A" />
          {/* Roses */}
          <circle cx="24" cy="20" r="11" fill="#E85D88" />
          <circle cx="24" cy="19" r="6" fill="#F7B8D0" />
          <circle cx="50" cy="20" r="11" fill="#F06D97" />
          <circle cx="50" cy="19" r="6" fill="#FFD6E6" />
          <circle cx="37" cy="13" r="12" fill="#D94B77" />
          <circle cx="37" cy="12" r="6.5" fill="#F7B8D0" />
          <circle cx="37" cy="28" r="10" fill="#F48FB1" />
        </g>

        {/* Paws Holding Bouquet */}
        <ellipse cx="75" cy="156" rx="10" ry="7.5" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <ellipse cx="135" cy="156" rx="10" ry="7.5" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
      </svg>
    </motion.div>
  );
};

/**
 * Cute kitty hugging a plush teddy bear, gift boxes, and heart balloons for the Surprise reveal.
 */
export const SweetGiftKitty: React.FC<CharacterProps> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_14px_28px_rgba(8,4,18,0.55)]">
        {/* Heart Balloons behind */}
        <path d="M52 72C48 92 60 110 74 128" stroke="#F5D78E" strokeWidth="1.4" strokeDasharray="3 3" />
        <path d="M50 68C50 68 35 58 35 47C35 41.5 39.5 37.5 44.5 37.5C47.5 37.5 49.5 39.5 50 41.5C50.5 39.5 52.5 37.5 55.5 37.5C60.5 37.5 65 41.5 65 47C65 58 50 68 50 68Z" fill="#F7B8D0" stroke="#FFF1C9" strokeWidth="1.2" />
        <path d="M170 60C170 60 156 51 156 41C156 36 160 32.5 164.5 32.5C167.2 32.5 169.2 34.2 170 36C170.8 34.2 172.8 32.5 175.5 32.5C180 32.5 184 36 184 41C184 51 170 60 170 60Z" fill="#C8B6FF" stroke="#FFF1C9" strokeWidth="1.2" />

        {/* Kitty Body & Head */}
        <ellipse cx="110" cy="166" rx="40" ry="30" fill="#7D98E8" stroke="#C8B6FF" strokeWidth="1.5" />
        <ellipse cx="110" cy="100" rx="50" ry="39" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        <path d="M68 78L60 40L91 61Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        <path d="M70 72L65 48L85 61Z" fill="#FFD6E6" />
        <path d="M152 78L160 40L129 61Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        <path d="M150 72L155 48L135 61Z" fill="#FFD6E6" />

        {/* Pink Bow */}
        <g transform="translate(136, 52) rotate(16)">
          <ellipse cx="-11" cy="0" rx="10" ry="7.5" fill="#F48FB1" />
          <ellipse cx="11" cy="0" rx="10" ry="7.5" fill="#F48FB1" />
          <circle cx="0" cy="0" r="4.5" fill="#FFF1C9" />
        </g>

        {/* Eyes & Nose */}
        <g className="animate-eye-blink">
          <ellipse cx="88" cy="102" rx="4.5" ry="5.8" fill="#231433" />
          <circle cx="86.5" cy="99.8" r="1.5" fill="#FFFFFF" />
          <ellipse cx="132" cy="102" rx="4.5" ry="5.8" fill="#231433" />
          <circle cx="130.5" cy="99.8" r="1.5" fill="#FFFFFF" />
        </g>
        <ellipse cx="110" cy="109" rx="5.2" ry="3.5" fill="#F5D78E" />
        <ellipse cx="76" cy="111" rx="6.5" ry="3.2" fill="#F7B8D0" fillOpacity="0.65" />
        <ellipse cx="144" cy="111" rx="6.5" ry="3.2" fill="#F7B8D0" fillOpacity="0.65" />

        {/* Plush Teddy Bear Cradled in Center */}
        <g transform="translate(82, 126)">
          <circle cx="14" cy="12" r="7" fill="#D49B6A" />
          <circle cx="42" cy="12" r="7" fill="#D49B6A" />
          <ellipse cx="28" cy="38" rx="18" ry="18" fill="#DFAA7B" />
          <circle cx="28" cy="20" r="16" fill="#E6B68A" />
          <ellipse cx="28" cy="24" rx="7" ry="5" fill="#FFF3E8" />
          <circle cx="28" cy="22.5" r="2.2" fill="#543321" />
          <circle cx="21" cy="18" r="2.2" fill="#2A173B" />
          <circle cx="35" cy="18" r="2.2" fill="#2A173B" />
          <path d="M28 45C28 45 20 40 20 35C20 32.5 22 30.8 24.4 30.8C25.8 30.8 27.1 31.6 28 32.8C28.9 31.6 30.2 30.8 31.6 30.8C34 30.8 36 32.5 36 35C36 40 28 45 28 45Z" fill="#F48FB1" />
        </g>

        {/* Mini Wrapped Gift Box on Side */}
        <g transform="translate(136, 146)">
          <rect x="4" y="8" width="32" height="26" rx="5" fill="#F7B8D0" stroke="#FFF1C9" strokeWidth="1.2" />
          <rect x="17" y="8" width="6" height="26" fill="#F5D78E" />
          <rect x="2" y="4" width="36" height="7" rx="3" fill="#FFD6E6" stroke="#FFF1C9" strokeWidth="1.2" />
        </g>

        {/* Kitty Paws Hugging */}
        <ellipse cx="78" cy="156" rx="10" ry="7.5" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <ellipse cx="142" cy="156" rx="10" ry="7.5" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
      </svg>
    </motion.div>
  );
};

/**
 * Happy blushing crowned kitty clapping/cheering when Tani places the missing crown!
 */
export const CheeringCrownKitty: React.FC<CharacterProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ scale: 0.78, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
      transition={{
        scale: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
        {/* Golden Crown Placed on Head */}
        <motion.path
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          d="M72 36L76 20L90 30L104 20L108 36Z"
          fill="#F5D78E"
          stroke="#FFF9E6"
          strokeWidth="1.5"
        />
        {/* Body */}
        <path d="M62 118C62 104 118 104 118 118L124 150C124 156 56 156 56 150L62 118Z" fill="#7D98E8" stroke="#C8B6FF" strokeWidth="1.5" />
        {/* Head */}
        <ellipse cx="90" cy="74" rx="44" ry="34" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        <path d="M54 55L48 24L75 43Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        <path d="M56 50L52 30L70 43Z" fill="#FFD6E6" />
        <path d="M126 55L132 24L105 43Z" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.4" />
        <path d="M124 50L128 30L110 43Z" fill="#FFD6E6" />

        {/* Pink Bow */}
        <g transform="translate(114, 38) rotate(16)">
          <ellipse cx="-9" cy="0" rx="8" ry="6" fill="#F48FB1" />
          <ellipse cx="9" cy="0" rx="8" ry="6" fill="#F48FB1" />
          <circle cx="0" cy="0" r="3.8" fill="#FFF1C9" />
        </g>

        {/* Happy Eyes */}
        <path d="M68 74C70 70 75 70 77 74" stroke="#231433" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M103 74C105 70 110 70 112 74" stroke="#231433" strokeWidth="2.4" strokeLinecap="round" />
        <ellipse cx="90" cy="81" rx="4.5" ry="3" fill="#F5D78E" />
        <ellipse cx="62" cy="83" rx="6" ry="3" fill="#F7B8D0" fillOpacity="0.75" />
        <ellipse cx="118" cy="83" rx="6" ry="3" fill="#F7B8D0" fillOpacity="0.75" />

        {/* Clasped Clapping Paws */}
        <ellipse cx="83" cy="126" rx="8.5" ry="6.5" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
        <ellipse cx="97" cy="126" rx="8.5" ry="6.5" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1.2" />
      </svg>
    </motion.div>
  );
};


