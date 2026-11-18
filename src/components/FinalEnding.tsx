import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FairytaleCastle } from './RoyalIllustrations';
import { HeartTeddyBear, RoyalRibbonKitten } from './CuteCharacters';

interface FinalEndingProps {
  onRevisit: () => void;
}

export const FinalEnding: React.FC<FinalEndingProps> = ({ onRevisit }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setStep(4);
      return;
    }

    const timers = [
      window.setTimeout(() => setStep(1), 350),
      window.setTimeout(() => setStep(2), 1400),
      window.setTimeout(() => setStep(3), 2550),
      window.setTimeout(() => setStep(4), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative z-10 min-h-[100dvh] w-full px-5 sm:px-8 pt-20 pb-28 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="relative max-w-2xl mx-auto flex flex-col items-center">
        {/* Moonlit Castle Stage */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-64 sm:w-80 mx-auto mb-6 sm:mb-8"
        >
          <FairytaleCastle className="w-full h-auto drop-shadow-[0_16px_40px_rgba(8,4,18,0.7)]" />
          <div className="absolute -bottom-1 -left-2 w-20 h-20">
            <HeartTeddyBear variant="lavender" />
          </div>
          <div className="absolute -bottom-1 -right-2 w-20 h-20">
            <RoyalRibbonKitten />
          </div>
        </motion.div>

        {/* Staggered Emotional Finale Messages */}
        <div className="space-y-5 sm:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 12 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-display italic text-2xl sm:text-3xl text-[#e2d4ff]"
          >
            Never forget how special you are.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 14,
              scale: step >= 2 ? 1 : 0.98,
            }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#fff9f2] via-[#f7b8d0] to-[#f5d78e] leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Happy National Princess Day, Tani.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 12 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#f8efe6]/85 max-w-md mx-auto leading-relaxed"
          >
            With lots of affection, from someone who wanted to make your day a little more magical.{' '}
            <span className="text-[#f7b8d0]">♡</span>
          </motion.p>
        </div>

        {/* Final Revisit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 14 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={onRevisit}
            className="inline-flex items-center justify-center min-h-[50px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f5d78e] via-[#f7c8d6] to-[#f5d78e] text-[#1a0d30] font-medium text-sm sm:text-base shadow-[0_10px_34px_rgba(247,184,208,0.34)] hover:shadow-[0_12px_40px_rgba(245,215,142,0.52)] active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff1c9] whitespace-nowrap"
          >
            <span>Revisit Your Kingdom ✨</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
