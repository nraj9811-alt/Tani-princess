import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FairytaleCastle } from './RoyalIllustrations';
import { CuteCharacter } from './CuteCharacter';

interface RoyalWelcomeProps {
  onNext: () => void;
}

export const RoyalWelcome: React.FC<RoyalWelcomeProps> = ({ onNext }) => {
  return (
    <section className="relative z-10 min-h-[100dvh] w-full flex flex-col justify-center px-5 sm:px-8 pt-20 pb-28 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Castle + CuteCharacter Companions Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#c8b6ff]/15 via-[#f7b8d0]/12 to-[#f5d78e]/15 blur-3xl pointer-events-none" />

            <FairytaleCastle className="w-full h-auto relative z-10 drop-shadow-[0_18px_38px_rgba(8,4,18,0.65)]" />

            {/* Fluffy Teddy Bear with Heart & Kitten with Pink Ribbon */}
            <div className="absolute -bottom-3 left-1 sm:left-4 w-24 h-24 sm:w-28 sm:h-28 z-20">
              <CuteCharacter variant="teddy" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-3 right-1 sm:right-4 w-24 h-24 sm:w-28 sm:h-28 z-20">
              <CuteCharacter variant="kitten" className="w-full h-full" />
            </div>
          </div>
        </motion.div>

        {/* Heartfelt Welcome Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-center lg:text-left space-y-6"
        >
          <div className="space-y-3">
            <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#f5d78e]/90 font-medium">
              November 18 · National Princess Day
            </p>
            <h2
              className="font-display text-3xl sm:text-5xl font-medium leading-[1.15] text-[#fff9f2]"
              style={{ textWrap: 'balance' }}
            >
              Welcome to your little kingdom,{' '}
              <span className="italic text-[#f7b8d0]">Princess Tani.</span>
            </h2>
          </div>

          <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[#e9defa]/90 max-w-xl mx-auto lg:mx-0">
            <p>
              Every star in this quiet sky, every glowing window in the castle, and every small detail
              here was made with one person in mind.
            </p>
            <p>
              You deserve a space that feels gentle, warm, and unmistakably yours—a little corner of
              the world built simply because you mean so much.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full bg-gradient-to-r from-[#f7b8d0] to-[#f5d78e] text-[#1a0d30] font-medium text-sm sm:text-base shadow-[0_8px_28px_rgba(247,184,208,0.3)] hover:shadow-[0_10px_32px_rgba(245,215,142,0.45)] active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff1c9] whitespace-nowrap"
            >
              <span>Step Inside Your Kingdom</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
