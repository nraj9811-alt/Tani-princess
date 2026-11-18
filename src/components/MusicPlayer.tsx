import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, Music2 } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  onPlaybackChange?: (actuallyPlaying: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

/**
 * Single consistent audio controller for "Snowfall" — Øneheart & reidenshi.
 * Attempts immediate playback on load, and automatically unlocks audio on the
 * very first touch/click anywhere on the screen if the browser blocked initial autoplay.
 */
export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  onToggle,
  onPlaybackChange,
  audioRef,
}) => {
  const [hasMp3Error, setHasMp3Error] = useState(false);
  const [needsInteractionUnlock, setNeedsInteractionUnlock] = useState(false);
  const intendedPlayRef = useRef(isPlaying);
  intendedPlayRef.current = isPlaying;

  // Attempt playback whenever isPlaying turns true, with graceful first-touch unlock
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || hasMp3Error) return;

    audio.volume = 0.6;

    const tryPlay = () => {
      if (!intendedPlayRef.current) return;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setNeedsInteractionUnlock(false);
            onPlaybackChange?.(true);
          })
          .catch(() => {
            // Browser blocked autoplay until first user gesture
            setNeedsInteractionUnlock(true);
          });
      }
    };

    if (isPlaying) {
      tryPlay();
    } else {
      audio.pause();
      setNeedsInteractionUnlock(false);
    }
  }, [isPlaying, hasMp3Error, audioRef, onPlaybackChange]);

  // Global first-gesture unlock if browser blocked initial autoplay on page load
  useEffect(() => {
    if (!needsInteractionUnlock || !isPlaying || hasMp3Error) return;

    const unlockOnGesture = () => {
      const audio = audioRef.current;
      if (!audio || !intendedPlayRef.current) return;
      audio.volume = 0.6;
      audio
        .play()
        .then(() => {
          setNeedsInteractionUnlock(false);
          onPlaybackChange?.(true);
        })
        .catch(() => {});
    };

    window.addEventListener('pointerdown', unlockOnGesture, { passive: true });
    window.addEventListener('touchstart', unlockOnGesture, { passive: true });
    window.addEventListener('keydown', unlockOnGesture, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', unlockOnGesture);
      window.removeEventListener('touchstart', unlockOnGesture);
      window.removeEventListener('keydown', unlockOnGesture);
    };
  }, [needsInteractionUnlock, isPlaying, hasMp3Error, audioRef, onPlaybackChange]);

  const showPlayingIcon = isPlaying && !needsInteractionUnlock;

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/aistudio/_neheart_x_reidenshi_-_snowfall_8cac0ef6.mp3"
        autoPlay
        loop
        preload="auto"
        playsInline
        onError={() => setHasMp3Error(true)}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-label={showPlayingIcon ? 'Pause Snowfall by Øneheart & reidenshi' : 'Play Snowfall by Øneheart & reidenshi'}
        className="group flex items-center gap-2.5 min-h-[44px] px-3.5 py-1.5 rounded-full bg-[#1a0f33]/80 hover:bg-[#251647]/90 border border-[#e2d4ff]/20 backdrop-blur-md text-[#fff9f2] shadow-[0_8px_24px_rgba(8,4,18,0.45)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d78e] whitespace-nowrap shrink-0 cursor-pointer"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#f7b8d0]/25 to-[#f5d78e]/25 border border-[#f5d78e]/40 text-[#f5d78e]">
          {showPlayingIcon ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 translate-x-[0.5px]" />
          )}
        </span>

        <span className="flex items-center gap-1.5 text-xs tracking-wide text-[#f8efe6]/90">
          <Music2 className="w-3.5 h-3.5 text-[#f7b8d0] shrink-0" />
          <span className="font-medium">
            {needsInteractionUnlock ? 'Tap for Snowfall' : 'Snowfall'}
          </span>
          <span className="hidden sm:inline text-[#c8b6ff]/70">· Øneheart &amp; reidenshi</span>
        </span>
      </button>
    </>
  );
};
