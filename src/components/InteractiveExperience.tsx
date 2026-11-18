import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { EnchantedRose, RoyalCrown, RoyalMirror } from './RoyalIllustrations';
import {
  AnimatedButterfly,
  CheeringCrownKitty,
  ForYouFlowerKitten,
  HeartTeddyBear,
  RoyalRibbonKitten,
} from './CuteCharacters';

interface InteractiveExperienceProps {
  onNext: () => void;
  onBack: () => void;
}

const MIRROR_COMPLIMENTS = [
  'You bring a quiet warmth that makes ordinary days feel worth remembering.',
  'There is something genuinely rare about the softness and grace you carry.',
  'Even on your quietest days, your presence leaves everything a little brighter.',
  'You deserve to be cherished gently, thoughtfully, and never as an afterthought.',
  'Never forget how effortlessly special you are—just by being yourself.',
];

// 9-tile (3x3) Royal Cushion Grid: index 4 (center) holds the missing crown slot
const TOTAL_CROWN_TILES = 9;
const CROWN_TILE_INDEX = 4;

export const InteractiveExperience: React.FC<InteractiveExperienceProps> = ({ onNext, onBack }) => {
  const [crownPlaced, setCrownPlaced] = useState(false);
  const [wrongTileIdx, setWrongTileIdx] = useState<number | null>(null);
  const [crownHint, setCrownHint] = useState('Find and tap the golden crown to place it');

  const [crownLit, setCrownLit] = useState(false);
  const [heartPulseCount, setHeartPulseCount] = useState(0);
  const [roseBloomed, setRoseBloomed] = useState(false);
  const [mirrorIdx, setMirrorIdx] = useState<number | null>(null);
  const [mirrorShimmer, setMirrorShimmer] = useState(0);
  const [butterflyFlight, setButterflyFlight] = useState(0);
  const [teddyHugging, setTeddyHugging] = useState(false);
  const [kittenGreeting, setKittenGreeting] = useState(false);
  const [ticketTapped, setTicketTapped] = useState(false);

  const handleCrownTileClick = (idx: number) => {
    if (idx === CROWN_TILE_INDEX) {
      setCrownPlaced(true);
      setWrongTileIdx(null);
      setCrownHint('Placed right where it belongs');
    } else {
      setWrongTileIdx(idx);
      setCrownHint('Not that cushion—tap the glowing golden crown in the grid!');
      window.setTimeout(() => setWrongTileIdx(null), 500);
    }
  };

  const resetCrownPuzzle = () => {
    setCrownPlaced(false);
    setWrongTileIdx(null);
    setCrownHint('Find and tap the golden crown to place it');
  };

  const triggerHeart = () => setHeartPulseCount((c) => c + 1);

  const triggerMirror = () => {
    setMirrorShimmer((s) => s + 1);
    setMirrorIdx((prev) => (prev === null ? 0 : (prev + 1) % MIRROR_COMPLIMENTS.length));
  };

  const triggerTeddy = () => {
    setTeddyHugging(true);
    window.setTimeout(() => setTeddyHugging(false), 900);
  };

  const triggerKitten = () => {
    setKittenGreeting(true);
    window.setTimeout(() => setKittenGreeting(false), 1000);
  };

  return (
    <section className="relative z-10 min-h-[100dvh] w-full px-5 sm:px-8 pt-20 pb-28 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-9 sm:mb-11 space-y-3"
      >
        <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#f5d78e]/90 font-medium">
          Little Enchantments
        </p>
        <h2
          className="font-display text-3xl sm:text-5xl font-medium text-[#fff9f2]"
          style={{ textWrap: 'balance' }}
        >
          Treasures made to <span className="italic text-[#f7b8d0]">tap &amp; awaken</span>
        </h2>
        <p className="text-sm sm:text-base text-[#d9ccf2]/80">
          Every keepsake in your garden holds a small surprise waiting for your touch.
        </p>
      </motion.div>

      {/* Featured Storybook Pair: 9-Tile Missing Crown Moment + Royal Keepsake Pass */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-6">
        {/* Interactive Feature A: 9-Tile (3x3) "One crown is missing, place it" */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#1a0f33]/72 backdrop-blur-md border border-[#f5d78e]/25 shadow-[0_14px_40px_rgba(8,4,18,0.45)] min-h-[360px]"
        >
          <div className="text-center space-y-1.5 mb-4">
            <h3 className="font-display italic text-2xl sm:text-3xl text-[#f7b8d0]">
              One crown is missing, place it
            </h3>
            <p className="text-xs sm:text-sm text-[#e2d4ff]/80 min-h-[20px]">
              {crownHint}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!crownPlaced ? (
              <motion.div
                key="crown-grid-9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-[270px] mx-auto w-full my-auto"
              >
                {Array.from({ length: TOTAL_CROWN_TILES }, (_, idx) => {
                  const isCrownTile = idx === CROWN_TILE_INDEX;
                  const isWrong = wrongTileIdx === idx;
                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      onClick={() => handleCrownTileClick(idx)}
                      animate={isWrong ? { x: [-5, 5, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.35 }}
                      aria-label={isCrownTile ? 'Place the golden crown' : 'Sparkle cushion'}
                      className={`aspect-square rounded-2xl flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e] ${
                        isCrownTile
                          ? 'bg-gradient-to-br from-[#341f5e] to-[#261448] border-2 border-[#f5d78e]/70 shadow-[0_0_18px_rgba(245,215,142,0.28)] hover:border-[#fff1c9]'
                          : isWrong
                            ? 'bg-[#3d1c3d]/70 border border-[#f48fb1]/55 text-[#f48fb1]'
                            : 'bg-[#221440]/65 hover:bg-[#2c1a52] border border-[#e2d4ff]/18 text-[#f5d78e]/75'
                      }`}
                    >
                      {isCrownTile ? (
                        <RoyalCrown className="w-12 h-9 sm:w-14 sm:h-10" />
                      ) : (
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="crown-placed"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center my-auto space-y-3"
              >
                <div className="w-32 h-32">
                  <CheeringCrownKitty className="w-full h-full" />
                </div>
                <p className="font-display italic text-2xl sm:text-3xl text-[#fff1c9]">
                  “The crown was always meant for you.”
                </p>
                <button
                  type="button"
                  onClick={resetCrownPuzzle}
                  className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-1.5 rounded-full border border-[#e2d4ff]/20 text-xs text-[#e2d4ff]/85 hover:text-[#fff9f2] hover:bg-white/[0.06] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Play Again</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Feature B: "Royal Keepsake Pass — For You ♡" */}
        <motion.button
          type="button"
          onClick={() => setTicketTapped((t) => !t)}
          whileTap={{ scale: 0.985 }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative flex flex-col justify-between text-left p-6 sm:p-8 rounded-3xl bg-[#1a0f33]/72 backdrop-blur-md border border-[#f7b8d0]/30 hover:border-[#f7b8d0]/55 shadow-[0_14px_40px_rgba(8,4,18,0.45)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7b8d0] min-h-[360px]"
        >
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#f7b8d0]/15">
            <span className="font-display italic text-xl sm:text-2xl text-[#f7b8d0]">
              Royal Keepsake
            </span>
            <span className="text-xs tracking-[0.16em] uppercase text-[#f5d78e]/85">
              For You ♡
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
            <div className="w-44 h-32 shrink-0 rounded-2xl bg-[#fff9f2]/95 p-2 shadow-inner border border-[#f5d78e]/45">
              <ForYouFlowerKitten isActive={ticketTapped} className="w-full h-full" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <p className="font-display italic text-xl text-[#fff9f2]">
                {ticketTapped
                  ? 'A gentle reminder that you are cherished today & always.'
                  : 'Tap to accept this little blossom'}
              </p>
              <p className="text-xs text-[#d9ccf2]/75 leading-relaxed">
                November 18 · Sealed with warmth for Princess Tani
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#f7b8d0]/15 flex flex-wrap items-center justify-between gap-2 text-xs text-[#e2d4ff]/80">
            <span>To: Princess Tani</span>
            <span aria-hidden="true">·</span>
            <span>Valid For: Always &amp; Forever</span>
          </div>
        </motion.button>
      </div>

      {/* Interactive 6-Moment Treasure Garden Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* 1. Floating Golden Crown */}
        <motion.button
          type="button"
          onClick={() => setCrownLit((v) => !v)}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-center justify-between text-center p-6 sm:p-7 rounded-3xl bg-[#1a0f33]/65 backdrop-blur-md border border-[#f5d78e]/20 hover:border-[#f5d78e]/45 transition-colors duration-300 min-h-[245px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e]"
        >
          <div className="relative flex items-center justify-center h-32 w-full">
            <motion.div
              animate={{
                scale: crownLit ? 1.12 : 1,
                y: crownLit ? -6 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {crownLit && (
                <div className="absolute inset-0 rounded-full bg-[#f5d78e]/30 blur-xl scale-150" />
              )}
              <RoyalCrown className="w-28 h-20 animate-float-slow relative z-10" />
            </motion.div>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl text-[#fff9f2]">The Royal Crown</h3>
            <p className="text-xs sm:text-sm text-[#e2d4ff]/80 min-h-[40px] flex items-center justify-center">
              {crownLit
                ? 'Always worn gracefully—never let yours tilt, Princess.'
                : 'Tap to awaken its golden glow'}
            </p>
          </div>
        </motion.button>

        {/* 2. Glowing Glass Heart */}
        <motion.button
          type="button"
          onClick={triggerHeart}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-center justify-between text-center p-6 sm:p-7 rounded-3xl bg-[#1a0f33]/65 backdrop-blur-md border border-[#f7b8d0]/20 hover:border-[#f7b8d0]/45 transition-colors duration-300 min-h-[245px] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7b8d0]"
        >
          <div className="relative flex items-center justify-center h-32 w-full">
            <AnimatePresence>
              {heartPulseCount > 0 && (
                <motion.div
                  key={heartPulseCount}
                  initial={{ opacity: 0.95, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 1.9 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute w-24 h-24 rounded-full border border-[#f7b8d0]/60 pointer-events-none"
                />
              )}
            </AnimatePresence>

            <motion.svg
              key={`heart-${heartPulseCount}`}
              viewBox="0 0 100 92"
              className="w-24 h-22 drop-shadow-[0_0_22px_rgba(247,184,208,0.55)]"
              initial={heartPulseCount > 0 ? { scale: 1.24 } : { scale: 1 }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: heartPulseCount > 0 ? 0.55 : 2.8, repeat: heartPulseCount > 0 ? 0 : Infinity }}
            >
              <defs>
                <radialGradient id="glassHeartGrad" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFF5FA" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#F7B8D0" stopOpacity="0.88" />
                  <stop offset="100%" stopColor="#D66894" stopOpacity="0.95" />
                </radialGradient>
              </defs>
              <path
                d="M50 86C50 86 10 61 10 33C10 19 20.5 9 33 9C40.5 9 46.8 12.8 50 18.6C53.2 12.8 59.5 9 67 9C79.5 9 90 19 90 33C90 61 50 86 50 86Z"
                fill="url(#glassHeartGrad)"
                stroke="#FFF1C9"
                strokeWidth="1.6"
              />
              <path
                d="M25 27C28 20 35 17 41 19"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
            </motion.svg>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl text-[#fff9f2]">Glass Heart</h3>
            <p className="text-xs sm:text-sm text-[#e2d4ff]/80 min-h-[40px] flex items-center justify-center">
              {heartPulseCount > 0
                ? 'Warmth sent gently across the distance ♡'
                : 'Tap to send a gentle pulse of warmth'}
            </p>
          </div>
        </motion.button>

        {/* 3. Enchanted Rose + Tiny Teddy Bear */}
        <motion.button
          type="button"
          onClick={() => setRoseBloomed((b) => !b)}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-center justify-between text-center p-6 sm:p-7 rounded-3xl bg-[#1a0f33]/65 backdrop-blur-md border border-[#e8a5b2]/20 hover:border-[#e8a5b2]/45 transition-colors duration-300 min-h-[245px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7b8d0]"
        >
          <div className="relative flex items-end justify-center h-32 w-full gap-1">
            <EnchantedRose bloomed={roseBloomed} className="w-24 h-28" />
            <HeartTeddyBear variant="blush" className="w-16 h-16 -ml-4 mb-1" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl text-[#fff9f2]">Enchanted Rose</h3>
            <p className="text-xs sm:text-sm text-[#e2d4ff]/80 min-h-[40px] flex items-center justify-center">
              {roseBloomed
                ? 'In full bloom—just for your corner of the garden.'
                : 'Tap to watch the petals bloom open'}
            </p>
          </div>
        </motion.button>

        {/* 4. Royal Mirror of Compliments */}
        <motion.button
          type="button"
          onClick={triggerMirror}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-center justify-between text-center p-6 sm:p-7 rounded-3xl bg-[#1a0f33]/65 backdrop-blur-md border border-[#f5d78e]/20 hover:border-[#f5d78e]/45 transition-colors duration-300 min-h-[245px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e]"
        >
          <div className="relative flex items-center justify-center h-32 w-full">
            <RoyalMirror shimmerKey={mirrorShimmer} className="w-24 h-30" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl text-[#fff9f2]">The Royal Mirror</h3>
            <p className="text-xs sm:text-sm text-[#f7d8e4]/90 min-h-[40px] flex items-center justify-center leading-snug">
              {mirrorIdx !== null
                ? `“${MIRROR_COMPLIMENTS[mirrorIdx]}”`
                : 'Tap to reveal a quiet truth'}
            </p>
          </div>
        </motion.button>

        {/* 5. Wandering Butterfly Path */}
        <motion.button
          type="button"
          onClick={() => setButterflyFlight((n) => n + 1)}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-center justify-between text-center p-6 sm:p-7 rounded-3xl bg-[#1a0f33]/65 backdrop-blur-md border border-[#c8b6ff]/20 hover:border-[#c8b6ff]/45 transition-colors duration-300 min-h-[245px] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8b6ff]"
        >
          <div className="relative flex items-center justify-center h-32 w-full">
            <svg viewBox="0 0 200 100" className="w-44 h-24 opacity-30" aria-hidden="true">
              <path
                d="M20 75 C 60 15, 130 90, 180 25"
                stroke="#C8B6FF"
                strokeWidth="1.4"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>
            <motion.div
              key={butterflyFlight}
              initial={butterflyFlight > 0 ? { x: -64, y: 20, rotate: -12 } : { x: 0, y: 0 }}
              animate={
                butterflyFlight > 0
                  ? {
                      x: [-64, -18, 22, 62, 0],
                      y: [20, -24, 14, -22, 0],
                      rotate: [-10, 12, -8, 10, 0],
                    }
                  : { y: [0, -7, 0] }
              }
              transition={{
                duration: butterflyFlight > 0 ? 2.4 : 4,
                repeat: butterflyFlight > 0 ? 0 : Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-14 h-12"
            >
              <AnimatedButterfly color="lavender" />
            </motion.div>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl text-[#fff9f2]">Moonlight Butterfly</h3>
            <p className="text-xs sm:text-sm text-[#e2d4ff]/80 min-h-[40px] flex items-center justify-center">
              {butterflyFlight > 0
                ? 'Following the stardust path across your sky'
                : 'Tap to guide its gentle flight'}
            </p>
          </div>
        </motion.button>

        {/* 6. Cute Companions (Hugging Teddy & Crowned Kitten) */}
        <motion.div className="relative flex flex-col items-center justify-between text-center p-6 sm:p-7 rounded-3xl bg-[#1a0f33]/65 backdrop-blur-md border border-[#f7b8d0]/20 min-h-[245px]">
          <div className="flex items-center justify-center gap-3 h-32 w-full">
            <button
              type="button"
              onClick={triggerTeddy}
              aria-label="Tap teddy bear to hug heart"
              className="w-24 h-24 rounded-2xl hover:bg-white/[0.04] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7b8d0]"
            >
              <HeartTeddyBear variant="lavender" isActive={teddyHugging} className="w-22 h-22" />
            </button>
            <button
              type="button"
              onClick={triggerKitten}
              aria-label="Tap royal kitten to wave"
              className="w-24 h-24 rounded-2xl hover:bg-white/[0.04] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e]"
            >
              <RoyalRibbonKitten isActive={kittenGreeting} className="w-22 h-22" />
            </button>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl text-[#fff9f2]">Royal Companions</h3>
            <p className="text-xs sm:text-sm text-[#e2d4ff]/80 min-h-[40px] flex items-center justify-center">
              {teddyHugging
                ? 'Sending you the softest hug ♡'
                : kittenGreeting
                  ? 'Your little kitten sends a royal wave!'
                  : 'Tap either companion to say hello'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Storybook Back / Next Navigation */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full border border-[#e2d4ff]/25 text-[#e2d4ff] hover:bg-white/[0.06] text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8b6ff] whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f7b8d0] to-[#f5d78e] text-[#1a0d30] font-medium text-sm sm:text-base shadow-[0_8px_28px_rgba(247,184,208,0.32)] hover:shadow-[0_10px_34px_rgba(245,215,142,0.48)] active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff1c9] whitespace-nowrap"
        >
          <Sparkles className="w-4 h-4" />
          <span>Open Your Royal Letter</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
