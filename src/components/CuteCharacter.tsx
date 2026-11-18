import React, { useState } from 'react';

export type CuteCharacterVariant = 'teddy' | 'kitten' | 'both';

interface CuteCharacterProps {
  variant?: CuteCharacterVariant;
  className?: string;
  interactive?: boolean;
}

/**
 * CuteCharacter component featuring a fluffy teddy bear hugging a pink heart
 * and an adorable white kitten with a pink ribbon and tiny crown.
 * Powered by smooth CSS animations for blinking, tail-swaying, and gentle floating.
 */
export const CuteCharacter: React.FC<CuteCharacterProps> = ({
  variant = 'both',
  className = '',
  interactive = true,
}) => {
  const [popped, setPopped] = useState(false);

  const handleTap = () => {
    if (!interactive) return;
    setPopped(true);
    window.setTimeout(() => setPopped(false), 650);
  };

  const renderTeddy = () => (
    <div className="relative flex items-center justify-center animate-float-slow">
      {/* Floating mini heart above teddy */}
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 absolute -top-1 left-1/2 -translate-x-1/2 text-[#F7B8D0] animate-rise-heart pointer-events-none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(10,5,20,0.45)]"
        aria-label="Fluffy teddy bear holding a pink heart"
      >
        <defs>
          <radialGradient id="cuteCharTeddyFur" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF5EC" />
            <stop offset="65%" stopColor="#F2D7C4" />
            <stop offset="100%" stopColor="#DFB6A0" />
          </radialGradient>
          <linearGradient id="cuteCharHeart" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6E6" />
            <stop offset="55%" stopColor="#F7B8D0" />
            <stop offset="100%" stopColor="#E87EA4" />
          </linearGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="90" cy="162" rx="40" ry="7.5" fill="#080412" fillOpacity="0.42" />

        {/* Fluffy round ears */}
        <circle cx="60" cy="54" r="15" fill="url(#cuteCharTeddyFur)" />
        <circle cx="60" cy="54" r="8.5" fill="#F7B8D0" fillOpacity="0.65" />
        <circle cx="120" cy="54" r="15" fill="url(#cuteCharTeddyFur)" />
        <circle cx="120" cy="54" r="8.5" fill="#F7B8D0" fillOpacity="0.65" />

        {/* Plush body */}
        <ellipse cx="90" cy="128" rx="35" ry="31" fill="url(#cuteCharTeddyFur)" />
        <ellipse cx="90" cy="130" rx="20" ry="18" fill="#FFF9F5" fillOpacity="0.6" />

        {/* Soft feet */}
        <ellipse cx="67" cy="154" rx="13" ry="9" fill="url(#cuteCharTeddyFur)" />
        <ellipse cx="67" cy="154" rx="7" ry="4.5" fill="#F7B8D0" fillOpacity="0.55" />
        <ellipse cx="113" cy="154" rx="13" ry="9" fill="url(#cuteCharTeddyFur)" />
        <ellipse cx="113" cy="154" rx="7" ry="4.5" fill="#F7B8D0" fillOpacity="0.55" />

        {/* Fluffy head */}
        <ellipse cx="90" cy="82" rx="36" ry="31" fill="url(#cuteCharTeddyFur)" />

        {/* Snout */}
        <ellipse cx="90" cy="89" rx="13" ry="10" fill="#FFF9F5" />
        <ellipse cx="90" cy="85.5" rx="4.2" ry="2.8" fill="#68436A" />
        <path
          d="M86 91C87.5 93 89.5 92.5 90 90.5C90.5 92.5 92.5 93 94 91"
          stroke="#68436A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* CSS Blinking Eyes */}
        <g className="animate-eye-blink">
          <circle cx="75" cy="77" r="4.3" fill="#2A173B" />
          <circle cx="73.5" cy="75.5" r="1.4" fill="#FFFFFF" />
          <circle cx="105" cy="77" r="4.3" fill="#2A173B" />
          <circle cx="103.5" cy="75.5" r="1.4" fill="#FFFFFF" />
        </g>

        {/* Rosy cheeks */}
        <ellipse cx="66" cy="85" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.72" />
        <ellipse cx="114" cy="85" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.72" />

        {/* Pulsing Pink Heart held in center */}
        <g className="animate-heart-soft">
          <path
            d="M90 146C90 146 69 133 69 119.5C69 113.2 74 108.5 80 108.5C84 108.5 87.4 110.6 90 114C92.6 110.6 96 108.5 100 108.5C106 108.5 111 113.2 111 119.5C111 133 90 146 90 146Z"
            fill="url(#cuteCharHeart)"
            stroke="#FFF1C9"
            strokeWidth="1.3"
          />
          <path
            d="M76.5 116.5C78 114.2 80.8 113.5 82.8 114.5"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>

        {/* Hugging paws */}
        <ellipse cx="65" cy="126" rx="12" ry="8" transform="rotate(24 65 126)" fill="url(#cuteCharTeddyFur)" />
        <ellipse cx="115" cy="126" rx="12" ry="8" transform="rotate(-24 115 126)" fill="url(#cuteCharTeddyFur)" />
      </svg>
    </div>
  );

  const renderKitten = () => (
    <div
      className="relative flex items-center justify-center animate-float-slow"
      style={{ animationDelay: '-1.8s' }}
    >
      {/* Floating mini heart near kitten */}
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 absolute -top-1 right-3 text-[#F7B8D0] animate-rise-heart pointer-events-none"
        style={{ animationDelay: '-1.2s' }}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(10,5,20,0.45)]"
        aria-label="Cute white kitten wearing a pink ribbon"
      >
        <defs>
          <radialGradient id="cuteCharCatFur" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="78%" stopColor="#F7F0FF" />
            <stop offset="100%" stopColor="#E9DCF9" />
          </radialGradient>
          <linearGradient id="cuteCharRibbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6E6" />
            <stop offset="100%" stopColor="#F48FB1" />
          </linearGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="90" cy="162" rx="40" ry="7.5" fill="#080412" fillOpacity="0.42" />

        {/* CSS Tail Swaying */}
        <g className="animate-tail-sway" style={{ transformOrigin: '115px 142px' }}>
          <path
            d="M116 144C140 144 152 124 143 108C138 100 128 105 131 114"
            stroke="#FBF7FF"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </g>

        {/* Kitten body */}
        <ellipse cx="90" cy="131" rx="31" ry="29" fill="url(#cuteCharCatFur)" />
        <ellipse cx="90" cy="122" rx="16" ry="14" fill="#FFFFFF" />

        {/* Paws */}
        <ellipse cx="74" cy="154" rx="10" ry="7" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1" />
        <ellipse cx="106" cy="154" rx="10" ry="7" fill="#FFFFFF" stroke="#EADDFB" strokeWidth="1" />

        {/* Head */}
        <ellipse cx="90" cy="84" rx="34" ry="29" fill="url(#cuteCharCatFur)" />

        {/* Ears */}
        <path d="M62 72L57 42L81 60Z" fill="#FFFFFF" />
        <path d="M64 67L61 48L77 59Z" fill="#FFD6E6" />
        <path d="M118 72L123 42L99 60Z" fill="#FFFFFF" />
        <path d="M116 67L119 48L103 59Z" fill="#FFD6E6" />

        {/* Tiny Golden Crown */}
        <g transform="translate(72, 34)">
          <path
            d="M4 22L2 8L12 15L18 3L24 15L34 8L32 22Z"
            fill="#F5D78E"
            stroke="#FFF1C9"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="15" r="2.4" fill="#F48FB1" />
        </g>

        {/* CSS Blinking Eyes */}
        <g className="animate-eye-blink">
          <ellipse cx="76" cy="84" rx="4.8" ry="5.5" fill="#2A173B" />
          <circle cx="74.5" cy="82" r="1.8" fill="#FFFFFF" />
          <ellipse cx="104" cy="84" rx="4.8" ry="5.5" fill="#2A173B" />
          <circle cx="102.5" cy="82" r="1.8" fill="#FFFFFF" />
        </g>

        {/* Rosy cheeks & tiny nose */}
        <ellipse cx="67" cy="91" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.68" />
        <ellipse cx="113" cy="91" rx="5.5" ry="3" fill="#F7B8D0" fillOpacity="0.68" />
        <path d="M87.5 89H92.5L90 92Z" fill="#F48FB1" />
        <path
          d="M85.5 94C87 96 89.5 95.5 90 93.2C90.5 95.5 93 96 94.5 94"
          stroke="#6E4B85"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Pink Satin Ribbon Collar & Bow */}
        <path d="M69 109C79 114 101 114 111 109" stroke="url(#cuteCharRibbon)" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M90 113L78 106V120L90 113Z" fill="#F48FB1" />
        <path d="M90 113L102 106V120L90 113Z" fill="#F7B8D0" />
        <circle cx="90" cy="113" r="3.8" fill="#FFF1C9" stroke="#F48FB1" strokeWidth="1" />
      </svg>
    </div>
  );

  return (
    <div
      onClick={handleTap}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTap();
              }
            }
          : undefined
      }
      aria-label={
        interactive
          ? variant === 'teddy'
            ? 'Fluffy teddy bear holding a heart'
            : variant === 'kitten'
              ? 'Cute white kitten with a pink ribbon'
              : 'Fluffy teddy bear and cute ribbon kitten'
          : undefined
      }
      className={`inline-flex items-center justify-center select-none transition-transform duration-300 ${
        interactive ? 'cursor-pointer hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7b8d0] rounded-2xl' : ''
      } ${popped ? 'scale-110' : ''} ${className}`}
    >
      {variant === 'teddy' && renderTeddy()}
      {variant === 'kitten' && renderKitten()}
      {variant === 'both' && (
        <div className="flex items-end justify-center gap-2">
          <div className="w-1/2">{renderTeddy()}</div>
          <div className="w-1/2">{renderKitten()}</div>
        </div>
      )}
    </div>
  );
};
