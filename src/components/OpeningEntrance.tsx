import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FairytaleCastle, RoyalCrown } from './RoyalIllustrations';

interface OpeningEntranceProps {
  onEnter: () => void;
}

/**
 * Opening Screen — The Magical Entrance
 * Orchestrates a 9-step cinematic reveal before inviting Tani into her kingdom.
 */
export const OpeningEntrance: React.FC<OpeningEntranceProps> = ({ onEnter }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setStep(9);
      return;
    }

    const timings = [
      250,  // 1: Stars illuminate
      800,  // 2: Crescent moon & veil lift
      1350, // 3: Golden particles brighten
      1900, // 4: Royal crown appears with soft glow
      2450, // 5: Castle silhouette rises in horizon
      3100, // 6: "A little world…"
      4100, // 7: "Made for someone…"
      5100, // 8: "Truly special."
      6100, // 9: "For My Princess / Tani ♡" + Enter button
    ];

    const timers = timings.map((delay, idx) =>
      window.setTimeout(() => setStep((prev) => Math.max(prev, idx + 1)), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const revealAll = () => {
    if (step < 9) setStep(9);
  };

  return (
    <section
      onClick={revealAll}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-16 overflow-hidden select-none"
    >
      {/* Initial deep dark-purple veil that gradually opens */}
      <motion.div
        initial={{ opacity: 0.96 }}
        animate={{ opacity: step >= 2 ? 0.15 : step >= 1 ? 0.65 : 0.96 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="fixed inset-0 bg-[#06030d] pointer-events-none z-0"
      />

      {/* Magical castle silhouette rising gently along the bottom horizon */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: step >= 5 ? 0.5 : 0, y: step >= 5 ? 0 : 36 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[115%] max-w-2xl pointer-events-none z-0"
      >
        <FairytaleCastle silhouetteOnly className="w-full h-auto" />
      </motion.div>

      {/* Main Centered Reveal Stage */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        {/* Step 4: Royal Crown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.78, y: 12 }}
          animate={{
            opacity: step >= 4 ? 1 : 0,
            scale: step >= 4 ? 1 : 0.78,
            y: step >= 4 ? 0 : 12,
          }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full bg-[#f5d78e]/20 blur-2xl scale-125 animate-pulse-glow" />
          <RoyalCrown className="relative w-24 h-20 sm:w-28 sm:h-22" />
        </motion.div>

        {/* Steps 6-8: Staggered Handwritten-Style Poetic Phrases */}
        <div className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-9 min-h-[108px] flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 6 ? 1 : 0, y: step >= 6 ? 0 : 10 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="font-display italic text-xl sm:text-2xl text-[#e2d4ff]/90 tracking-wide"
          >
            A little world…
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 7 ? 1 : 0, y: step >= 7 ? 0 : 10 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="font-display italic text-xl sm:text-2xl text-[#f7b8d0]/95 tracking-wide"
          >
            Made for someone…
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 8 ? 1 : 0, y: step >= 8 ? 0 : 10 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="font-display italic text-2xl sm:text-3xl text-[#fff1c9] tracking-wide"
          >
            Truly special.
          </motion.p>
        </div>

        {/* Step 9: Grand Title Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.97 }}
          animate={{
            opacity: step >= 9 ? 1 : 0,
            y: step >= 9 ? 0 : 14,
            scale: step >= 9 ? 1 : 0.97,
          }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-9 sm:mb-11"
        >
          <p className="text-xs sm:text-sm tracking-[0.26em] uppercase text-[#e8a5b2] font-medium">
            For My Princess
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#fff9f2] via-[#ffe6f0] to-[#f5d78e] drop-shadow-[0_4px_24px_rgba(247,184,208,0.28)]">
            Tani <span className="text-[#f7b8d0]">♡</span>
          </h1>
        </motion.div>

        {/* Step 9: Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: step >= 9 ? 1 : 0, y: step >= 9 ? 0 : 14 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEnter();
            }}
            disabled={step < 9}
            className="group relative inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f5d78e] via-[#f7c8d6] to-[#f5d78e] text-[#1a0d30] font-medium text-sm sm:text-base tracking-wide shadow-[0_10px_34px_rgba(247,184,208,0.35)] hover:shadow-[0_12px_40px_rgba(245,215,142,0.5)] active:scale-[0.98] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff1c9] whitespace-nowrap"
          >
            <span>Enter Your Little Kingdom ✨</span>
          </button>
        </motion.div>

        {/* Subtle tap hint during early intro */}
        {step < 9 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            className="mt-10 text-xs text-[#c8b6ff]/70 tracking-wide"
          >
            Tap anywhere to continue
          </motion.p>
        )}
      </div>
    </section>
  );
};
