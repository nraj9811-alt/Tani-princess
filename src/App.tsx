import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Castle, Crown, Gift, Mail, Sparkles } from 'lucide-react';
import { NightSkyBackdrop } from './components/NightSkyBackdrop';
import { MusicPlayer } from './components/MusicPlayer';
import { OpeningEntrance } from './components/OpeningEntrance';
import { RoyalWelcome } from './components/RoyalWelcome';
import { InteractiveExperience } from './components/InteractiveExperience';
import { SpecialLetter } from './components/SpecialLetter';
import { RoyalSurprise } from './components/RoyalSurprise';
import { FinalEnding } from './components/FinalEnding';

type ScreenId = 'opening' | 'welcome' | 'experience' | 'letter' | 'surprise' | 'finale';

const KINGDOM_CHAPTERS: { id: Exclude<ScreenId, 'opening'>; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'welcome', label: 'Kingdom', icon: Castle },
  { id: 'experience', label: 'Treasures', icon: Sparkles },
  { id: 'letter', label: 'Letter', icon: Mail },
  { id: 'surprise', label: 'Surprise', icon: Gift },
  { id: 'finale', label: 'Finale', icon: Crown },
];

export default function App() {
  const [screen, setScreen] = useState<ScreenId>('opening');
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navigateTo = (next: ScreenId) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleEnterKingdom = () => {
    setIsMusicPlaying(true);
    navigateTo('welcome');
  };

  const handleToggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-[#0d071a] text-[#fff9f2] font-body">
      {/* Persistent Multi-Layered Animated Night Sky Across Every Screen */}
      <NightSkyBackdrop showMoon dimmed={screen === 'letter'} />

      {/* Minimal Top Bar: Single Consistent Music Player (Never restarts between screens) */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-safe py-3 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          {screen !== 'opening' && (
            <button
              type="button"
              onClick={() => navigateTo('welcome')}
              className="font-display italic text-lg sm:text-xl text-[#fff9f2]/90 hover:text-[#f7b8d0] transition-colors min-h-[44px] px-2 flex items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e] rounded-lg whitespace-nowrap"
            >
              Princess Tani ♡
            </button>
          )}
        </div>

        <div className="pointer-events-auto">
          <MusicPlayer
            isPlaying={isMusicPlaying}
            onToggle={handleToggleMusic}
            audioRef={audioRef}
          />
        </div>
      </header>

      {/* Main Screen Stage with Smooth Cinematic Transitions */}
      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {screen === 'opening' && <OpeningEntrance onEnter={handleEnterKingdom} />}
            {screen === 'welcome' && <RoyalWelcome onNext={() => navigateTo('experience')} />}
            {screen === 'experience' && (
              <InteractiveExperience
                onBack={() => navigateTo('welcome')}
                onNext={() => navigateTo('letter')}
              />
            )}
            {screen === 'letter' && (
              <SpecialLetter
                onBack={() => navigateTo('experience')}
                onNext={() => navigateTo('surprise')}
              />
            )}
            {screen === 'surprise' && (
              <RoyalSurprise
                onBack={() => navigateTo('letter')}
                onNext={() => navigateTo('finale')}
              />
            )}
            {screen === 'finale' && <FinalEnding onRevisit={() => navigateTo('opening')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Compact Thumb-Zone Chapter Navigation Dock (Only visible inside the kingdom) */}
      {screen !== 'opening' && (
        <nav
          aria-label="Kingdom chapters"
          className="fixed bottom-0 left-0 right-0 z-40 pb-safe px-3 pb-3 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 rounded-full bg-[#160c2c]/85 backdrop-blur-lg border border-[#e2d4ff]/15 shadow-[0_10px_30px_rgba(6,3,16,0.75)]">
            {KINGDOM_CHAPTERS.map((chapter) => {
              const Icon = chapter.icon;
              const active = screen === chapter.id;
              return (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => navigateTo(chapter.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-[54px] sm:min-w-[82px] min-h-[44px] px-2.5 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e] whitespace-nowrap ${
                    active
                      ? 'bg-gradient-to-r from-[#f7b8d0]/25 to-[#f5d78e]/25 text-[#fff9f2] border border-[#f5d78e]/35 shadow-sm'
                      : 'text-[#d9ccf2]/75 hover:text-[#fff9f2] hover:bg-white/[0.05]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-[#f5d78e]' : ''}`} />
                  <span>{chapter.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
