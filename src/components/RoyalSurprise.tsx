import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { RoyalCrown } from './RoyalIllustrations';
import { HeartTeddyBear, SweetGiftKitty } from './CuteCharacters';

interface RoyalSurpriseProps {
  onNext: () => void;
  onBack: () => void;
}

export const RoyalSurprise: React.FC<RoyalSurpriseProps> = ({ onNext, onBack }) => {
  const [opened, setOpened] = useState(false);
  const [revealStage, setRevealStage] = useState(0);

  const burstParticles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const angle = (i / 22) * Math.PI * 2 + (i % 3) * 0.14;
        const dist = 88 + (i % 4) * 38;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 24,
          isHeart: i % 2 === 0,
          size: 10 + (i % 3) * 5,
          delay: (i % 5) * 0.04,
        };
      }),
    []
  );

  const handleOpenGift = () => {
    if (opened) return;
    setOpened(true);
    window.setTimeout(() => setRevealStage(1), 650);
    window.setTimeout(() => setRevealStage(2), 1850);
  };

  const handleReset = () => {
    setOpened(false);
    setRevealStage(0);
  };

  return (
    <section className="relative z-10 min-h-[100dvh] w-full px-5 sm:px-8 pt-20 pb-28 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-2 mb-8 sm:mb-10"
      >
        <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#f5d78e]/90 font-medium">
          A Gift For My Princess
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-medium text-[#fff9f2]">
          The Royal <span className="italic text-[#f7b8d0]">Surprise</span>
        </h2>
      </motion.div>

      <div className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <div className="relative flex items-end justify-center min-h-[260px] w-full">
          {/* Bursting Hearts & Golden Particles */}
          <AnimatePresence>
            {opened &&
              burstParticles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: p.x,
                    y: p.y,
                    scale: [0.4, 1.15, 0.7],
                  }}
                  transition={{ duration: 1.8, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
                >
                  {p.isHeart ? (
                    <svg
                      viewBox="0 0 24 24"
                      style={{ width: p.size + 4, height: p.size + 4 }}
                      className="text-[#f7b8d0] drop-shadow-[0_0_10px_rgba(247,184,208,0.8)]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <div
                      style={{ width: p.size * 0.65, height: p.size * 0.65 }}
                      className="rounded-full bg-[#f5d78e] shadow-[0_0_14px_rgba(245,215,142,0.95)]"
                    />
                  )}
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Rising Royal Crown */}
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.55 }}
                animate={{ opacity: 1, y: -110, scale: 1.05 }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              >
                <div className="absolute inset-0 bg-[#f5d78e]/30 rounded-full blur-2xl scale-125" />
                <RoyalCrown className="w-28 h-20 relative z-10 animate-float-slow" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Royal Gift Box */}
          <button
            type="button"
            onClick={handleOpenGift}
            aria-label="Tap to open royal gift box"
            className="relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e] rounded-2xl p-4 cursor-pointer"
          >
            <div
              className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
                opened ? 'bg-[#f5d78e]/35 opacity-100' : 'bg-[#f7b8d0]/20 opacity-75 animate-pulse-glow'
              }`}
            />

            <div className="relative w-44 h-44 sm:w-48 sm:h-48">
              <motion.div
                animate={
                  opened
                    ? { y: -42, x: -12, rotate: -18, opacity: 0.9 }
                    : { y: [0, -4, 0] }
                }
                transition={
                  opened
                    ? { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
                    : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                }
                className="relative z-20"
              >
                <svg viewBox="0 0 200 76" className="w-full h-auto drop-shadow-lg" aria-hidden="true">
                  <path
                    d="M100 32C82 6 52 10 62 30C69 40 90 36 100 32Z"
                    fill="#F7B8D0"
                    stroke="#FFF1C9"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M100 32C118 6 148 10 138 30C131 40 110 36 100 32Z"
                    fill="#FFD6E6"
                    stroke="#FFF1C9"
                    strokeWidth="1.4"
                  />
                  <circle cx="100" cy="31" r="7" fill="#F5D78E" stroke="#FFF9E6" strokeWidth="1.2" />
                  <rect
                    x="14"
                    y="32"
                    width="172"
                    height="36"
                    rx="9"
                    fill="url(#giftGoldLid)"
                    stroke="#FFF1C9"
                    strokeWidth="1.5"
                  />
                  <rect x="86" y="32" width="28" height="36" fill="#F48FB1" />
                  <defs>
                    <linearGradient id="giftGoldLid" x1="14" y1="32" x2="186" y2="68" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFF2C6" />
                      <stop offset="50%" stopColor="#F5D78E" />
                      <stop offset="100%" stopColor="#D19D3E" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <svg viewBox="0 0 200 130" className="w-full h-auto -mt-3 relative z-10 drop-shadow-[0_18px_36px_rgba(8,4,18,0.65)]" aria-hidden="true">
                <defs>
                  <linearGradient id="giftGoldBase" x1="25" y1="0" x2="175" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F5D78E" />
                    <stop offset="55%" stopColor="#E1B258" />
                    <stop offset="100%" stopColor="#B8842E" />
                  </linearGradient>
                </defs>
                <rect
                  x="24"
                  y="6"
                  width="152"
                  height="112"
                  rx="14"
                  fill="url(#giftGoldBase)"
                  stroke="#FFF1C9"
                  strokeWidth="1.5"
                />
                <rect x="86" y="6" width="28" height="112" fill="#F48FB1" />
                <path
                  d="M100 72C100 72 86 63.5 86 54.5C86 49.8 89.6 46.5 94 46.5C96.7 46.5 98.9 48 100 50.2C101.1 48 103.3 46.5 106 46.5C110.4 46.5 114 49.8 114 54.5C114 63.5 100 72 100 72Z"
                  fill="#FFF9F2"
                  fillOpacity="0.92"
                />
              </svg>
            </div>
          </button>

          <div className="hidden sm:block w-36 h-32 -ml-4 mb-2">
            {opened ? (
              <SweetGiftKitty className="w-36 h-36 -mt-4" />
            ) : (
              <HeartTeddyBear variant="blush" withRoseAndGift isActive={opened} />
            )}
          </div>
        </div>

        {/* Revealed Royal Messages */}
        <div className="mt-6 min-h-[160px] flex flex-col items-center justify-center max-w-xl mx-auto space-y-5">
          {!opened ? (
            <div className="space-y-3">
              <div className="sm:hidden w-28 h-24 mx-auto">
                <HeartTeddyBear variant="blush" withRoseAndGift />
              </div>
              <p className="text-sm sm:text-base text-[#e2d4ff]/85">
                Tap the golden gift box to unwrap your surprise
              </p>
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-[#e2d4ff]/20 text-xs text-[#e2d4ff]/80 hover:text-[#fff9f2] hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Letter</span>
              </button>
            </div>
          ) : (
            <>
              <div className="sm:hidden w-32 h-32 mx-auto -mt-2">
                <SweetGiftKitty className="w-full h-full" />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: revealStage >= 1 ? 1 : 0, y: revealStage >= 1 ? 0 : 12 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="font-display italic text-2xl sm:text-3xl text-[#fff9f2] leading-snug"
                style={{ textWrap: 'balance' }}
              >
                “Some people deserve more than an ordinary wish. They deserve their own little
                magical world.”
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: revealStage >= 2 ? 1 : 0, y: revealStage >= 2 ? 0 : 12 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="text-base sm:text-lg text-[#f7b8d0] font-medium tracking-wide"
              >
                Today, this little kingdom belongs to you, Princess Tani.
              </motion.p>
            </>
          )}
        </div>

        {opened && revealStage >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 min-h-[46px] px-5 py-2.5 rounded-full border border-[#e2d4ff]/25 text-[#e2d4ff] hover:bg-white/[0.06] text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 min-h-[46px] px-5 py-2.5 rounded-full border border-[#e2d4ff]/25 text-[#e2d4ff] hover:bg-white/[0.06] text-sm transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Wrap Again</span>
            </button>

            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full bg-gradient-to-r from-[#f7b8d0] to-[#f5d78e] text-[#1a0d30] font-medium text-sm sm:text-base shadow-[0_8px_28px_rgba(247,184,208,0.32)] hover:shadow-[0_10px_34px_rgba(245,215,142,0.48)] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Continue to the Finale</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
