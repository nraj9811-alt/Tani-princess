import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { HeartTeddyBear, PeekingFlowerKitten } from './CuteCharacters';

interface SpecialLetterProps {
  onNext: () => void;
  onBack: () => void;
}

const LETTER_PARAGRAPHS = [
  'Dear Tani,',
  'I wanted to make something quiet and thoughtful for you today—something that wasn’t just a quick message, because you deserve more effort than that.',
  'Somewhere along the way, you found a really special place in my heart. Even on ordinary, unremarkable days, your presence has a way of making things feel warmer and a little bit different in the best possible way.',
  'I hope you never underestimate how genuinely special you are. Not because of anything grand you have to prove, but simply because of who you are—the kindness you carry, the warmth in how you show up, and the light you bring without even trying.',
  'You deserve real happiness, quiet peace, sincere appreciation, and all the beautiful moments life can offer. Always.',
  'This little kingdom is just a small reflection of the affection and care that went into wanting to see you smile today.',
  'Happy National Princess Day, Tani. ♡',
];

const FULL_LETTER_TEXT = LETTER_PARAGRAPHS.join('\n\n');

type LetterPhase = 'sealed' | 'opening' | 'unfolded';

export const SpecialLetter: React.FC<SpecialLetterProps> = ({ onNext, onBack }) => {
  const [phase, setPhase] = useState<LetterPhase>('sealed');
  const [typedCount, setTypedCount] = useState(0);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [teddyHug, setTeddyHug] = useState(false);
  const timerRef = useRef<number | null>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);

  const clearTypingTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (phase !== 'unfolded') return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setTypedCount(FULL_LETTER_TEXT.length);
      setIsDoneTyping(true);
      return;
    }

    let index = typedCount;
    if (index >= FULL_LETTER_TEXT.length) {
      setIsDoneTyping(true);
      return;
    }

    const stepNextChar = () => {
      index += 1;
      setTypedCount(index);

      if (index >= FULL_LETTER_TEXT.length) {
        setIsDoneTyping(true);
        return;
      }

      const justTyped = FULL_LETTER_TEXT[index - 1];
      let delay = 28;
      if (justTyped === ',' || justTyped === '—') delay = 140;
      else if (justTyped === '.' || justTyped === '!' || justTyped === '♡') delay = 240;
      else if (justTyped === '\n') delay = 190;

      timerRef.current = window.setTimeout(stepNextChar, delay);
    };

    timerRef.current = window.setTimeout(stepNextChar, 320);

    return () => clearTypingTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const handleOpenEnvelope = () => {
    if (phase !== 'sealed') return;
    setPhase('opening');
    setTeddyHug(true);
    window.setTimeout(() => {
      setPhase('unfolded');
      setTeddyHug(false);
    }, 1550);
  };

  const handleReplay = () => {
    clearTypingTimer();
    setTypedCount(0);
    setIsDoneTyping(false);
    setPhase('sealed');
  };

  const visibleText = FULL_LETTER_TEXT.slice(0, typedCount);
  const visibleParagraphs = visibleText.split('\n\n');

  return (
    <section className="relative z-10 min-h-[100dvh] w-full px-5 sm:px-8 pt-20 pb-28 max-w-4xl mx-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 sm:mb-10 space-y-2"
      >
        <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#f5d78e]/90 font-medium">
          A Royal Note · Sealed With Care
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-medium text-[#fff9f2]">
          A Letter for <span className="italic text-[#f7b8d0]">Tani</span>
        </h2>
      </motion.div>

      <AnimatePresence mode="wait">
        {phase !== 'unfolded' ? (
          <motion.div
            key="envelope-stage"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{
              opacity: 1,
              scale: phase === 'opening' ? 1.05 : 1,
              y: phase === 'opening' ? -8 : 0,
            }}
            exit={{ opacity: 0, scale: 0.96, y: -14 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center w-full max-w-md mx-auto"
          >
            <div className="relative w-full flex items-center justify-center py-6">
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#f7b8d0]/20 via-[#f5d78e]/15 to-[#c8b6ff]/20 blur-3xl animate-pulse-glow pointer-events-none" />

              {/* Interactive Envelope */}
              <button
                type="button"
                onClick={handleOpenEnvelope}
                aria-label="Open sealed royal letter for Tani"
                className="group relative w-[290px] sm:w-[340px] h-[200px] sm:h-[225px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e] rounded-2xl"
                style={{ perspective: '1000px' }}
              >
                {/* Sliding Inner Letter Preview */}
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={
                    phase === 'opening'
                      ? { y: -74, opacity: 1 }
                      : { y: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-5 right-5 top-4 h-36 rounded-lg parchment-surface border border-[#e6be68]/50 shadow-lg z-10 pointer-events-none flex flex-col items-center justify-center px-4"
                >
                  <span className="font-display italic text-lg text-[#5d3354]">Dear Tani,</span>
                  <div className="w-24 h-[1px] bg-[#d48c9c]/40 mt-2" />
                </motion.div>

                {/* Envelope Back Base */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f8c4d8] via-[#f2adc9] to-[#e490b4] border border-[#fff1c9]/50 shadow-[0_20px_50px_rgba(8,4,18,0.65)] overflow-hidden">
                  <svg viewBox="0 0 340 225" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 0L170 122L340 0V225H0V0Z" fill="#F4B2CD" fillOpacity="0.45" />
                    <path d="M0 225L170 108L340 225H0Z" fill="#FAD2E2" fillOpacity="0.88" />
                    <path d="M0 225L170 108L340 225" stroke="#E6BE68" strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
                  </svg>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="font-display italic text-xl sm:text-2xl text-[#4a223f] tracking-wide drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
                      For Tani
                    </span>
                  </div>
                </div>

                {/* Top Triangular Flap */}
                <motion.div
                  animate={{ rotateX: phase === 'opening' ? -175 : 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                  className="absolute top-0 left-0 right-0 h-[126px] z-30 pointer-events-none"
                >
                  <svg viewBox="0 0 340 126" className="w-full h-full drop-shadow-md" preserveAspectRatio="none" aria-hidden="true">
                    <path
                      d="M2 2C2 2 162 118 170 122C178 118 338 2 338 2H2Z"
                      fill="#FCE0EC"
                      stroke="#E6BE68"
                      strokeOpacity="0.7"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.div>

                {/* Golden Wax Seal */}
                <motion.div
                  animate={
                    phase === 'opening'
                      ? {
                          scale: [1, 1.24, 0.85],
                          opacity: [1, 1, 0],
                          filter: ['brightness(1)', 'brightness(1.45)', 'brightness(1)'],
                        }
                      : { scale: [1, 1.04, 1] }
                  }
                  transition={
                    phase === 'opening'
                      ? { duration: 0.65, ease: 'easeOut' }
                      : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }
                  className="absolute top-[98px] sm:top-[106px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#fff1c9] via-[#e6be68] to-[#b9852f] shadow-[0_0_24px_rgba(245,215,142,0.7)] border border-[#fff9e6]/70 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#8f6219]/35 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#754911]" fill="currentColor" aria-hidden="true">
                        <path d="M12 20.6l-1.35-1.23C5.8 14.95 2.6 12.05 2.6 8.5 2.6 5.6 4.88 3.4 7.75 3.4c1.62 0 3.17.76 4.25 1.96C13.08 4.16 14.63 3.4 16.25 3.4 19.12 3.4 21.4 5.6 21.4 8.5c0 3.55-3.2 6.45-8.05 10.87L12 20.6z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </button>

              {/* Special Teddy Bear Holding a Small Heart Beside the Envelope */}
              <div className="hidden sm:block absolute -right-14 bottom-2 w-28 h-28 z-20">
                <HeartTeddyBear
                  variant="cream"
                  isActive={teddyHug}
                  onClick={() => {
                    setTeddyHug(true);
                    window.setTimeout(() => setTeddyHug(false), 850);
                  }}
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3">
              <div className="sm:hidden w-20 h-20">
                <HeartTeddyBear variant="cream" isActive={teddyHug} />
              </div>
              <p className="text-sm text-[#e2d4ff]/85 tracking-wide">
                {phase === 'opening' ? 'Unfolding your letter…' : 'Tap the golden seal to open your letter'}
              </p>
              <button
                type="button"
                onClick={onBack}
                className="mt-2 inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-[#e2d4ff]/20 text-xs text-[#e2d4ff]/80 hover:text-[#fff9f2] hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Treasures</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter-paper"
            ref={paperRef}
            initial={{ opacity: 0, y: 28, scaleY: 0.88 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top center' }}
            className="relative w-full max-w-2xl mx-auto mt-4"
          >
            {/* Cute Peeking Kitten with Pink Bouquet at Top-Right Corner */}
            <div className="absolute -top-12 -right-2 sm:-top-14 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 z-20">
              <PeekingFlowerKitten className="w-full h-full" />
            </div>

            {/* Special Teddy Bear sitting tenderly at bottom corner of the letter */}
            <div className="hidden md:block absolute -right-20 -bottom-6 w-28 h-28 z-20">
              <HeartTeddyBear variant="cream" isActive={isDoneTyping} />
            </div>

            <div className="relative parchment-surface text-[#2c1934] rounded-3xl px-6 py-8 sm:px-11 sm:py-11 shadow-[0_24px_70px_rgba(6,3,16,0.75)] border border-[#e6be68]/45">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#d48c9c]/25 pr-16 sm:pr-20">
                <span className="font-display italic text-base sm:text-lg text-[#7d4967]">
                  For Princess Tani
                </span>
                <span className="text-xs tracking-[0.16em] uppercase text-[#9c6f82]">
                  November 18
                </span>
              </div>

              {/* Typed Paragraphs */}
              <div className="space-y-4 min-h-[380px] sm:min-h-[410px]">
                {visibleParagraphs.map((paragraph, idx) => {
                  const isLastVisible = idx === visibleParagraphs.length - 1;
                  const isSalutation = idx === 0;
                  const isClosing = idx === LETTER_PARAGRAPHS.length - 1;

                  return (
                    <p
                      key={idx}
                      className={
                        isSalutation || isClosing
                          ? 'font-display italic text-2xl sm:text-[26px] text-[#4c2445] leading-snug'
                          : 'font-body text-[15px] sm:text-base text-[#351f3d]/95 leading-[1.75]'
                      }
                    >
                      {paragraph}
                      {isLastVisible && !isDoneTyping && (
                        <span
                          aria-hidden="true"
                          className="inline-block w-[2px] h-[1.05em] bg-[#b8567e] ml-0.5 align-middle animate-cursor-blink"
                        />
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Embossed Golden Circular Royal Seal Stamp once letter finishes */}
              <AnimatePresence>
                {isDoneTyping && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75, rotate: -14 }}
                    animate={{ opacity: 1, scale: 1, rotate: -8 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 flex justify-end"
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#c79535]/60 flex items-center justify-center p-1 bg-[#f5d78e]/10">
                      <div className="w-full h-full rounded-full border border-[#c79535]/50 flex flex-col items-center justify-center text-center leading-none">
                        <span className="text-[8px] tracking-[0.14em] uppercase text-[#8a5d14] font-semibold">
                          Royal Love
                        </span>
                        <span className="text-base my-0.5 text-[#b88022]">♛</span>
                        <span className="text-[7px] tracking-[0.12em] uppercase text-[#8a5d14]">
                          For Tani
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="mt-6 pt-5 border-t border-[#d48c9c]/25 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="md:hidden w-12 h-12 -my-2">
                    <HeartTeddyBear variant="cream" isActive={isDoneTyping} />
                  </div>
                  <button
                    type="button"
                    onClick={onBack}
                    className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-full border border-[#9c6f82]/30 text-[#5b3353] hover:bg-[#f7b8d0]/20 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-[#9c6f82]/35 text-[#5b3353] hover:bg-[#f7b8d0]/20 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Replay</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex items-center gap-2 min-h-[46px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4b276b] to-[#6f3574] text-[#fff9f2] hover:opacity-95 text-sm font-medium shadow-md active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Your Royal Surprise</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
