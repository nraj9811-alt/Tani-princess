import React, { useEffect, useRef } from 'react';
import { AnimatedButterfly, SleepingMoonKitten } from './CuteCharacters';

interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  tint: string;
}

interface FloatingHeart {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  wobblePhase: number;
  wobbleSpeed: number;
  opacity: number;
  outlined: boolean;
  color: string;
}

interface DustParticle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  phase: number;
}

interface RosePetal {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  angle: number;
  spin: number;
  opacity: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
  maxLife: number;
}

interface NightSkyBackdropProps {
  showMoon?: boolean;
  dimmed?: boolean;
}

/**
 * Persistent layered midnight-purple fairytale atmosphere rendered across all screens.
 * Optimized for 60fps on iPhone/mobile Safari (avoids expensive ctx.shadowBlur per particle
 * and ignores minor Safari address-bar height changes to prevent starfield flicker).
 */
export const NightSkyBackdrop: React.FC<NightSkyBackdropProps> = ({
  showMoon = true,
  dimmed = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const applyCanvasSize = (w: number, h: number) => {
      width = w;
      height = h;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    applyCanvasSize(width, height);

    const onResize = () => {
      const nextW = window.innerWidth;
      const nextH = window.innerHeight;
      // Ignore small height fluctuations from mobile browser URL bars
      if (nextW !== width || Math.abs(nextH - height) > 130) {
        applyCanvasSize(nextW, nextH);
      }
    };
    window.addEventListener('resize', onResize, { passive: true });

    const isMobile = width < 640;
    const starCount = isMobile ? 140 : 240;
    const heartCount = isMobile ? 16 : 26;
    const dustCount = isMobile ? 24 : 42;
    const petalCount = isMobile ? 9 : 14;

    const starTints = ['#FFF9F2', '#FFF1C9', '#E2D4FF', '#FFD6E6'];
    const heartColors = ['#F7B8D0', '#FFD6E6', '#F48FB1', '#E8A5B2', '#C8B6FF'];
    const petalColors = ['#F7B8D0', '#F48FB1', '#E8A5B2'];

    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.45 + 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.018 + 0.008,
      tint: starTints[Math.floor(Math.random() * starTints.length)],
    }));

    const hearts: FloatingHeart[] = Array.from({ length: heartCount }, () => {
      const depth = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: 6 + depth * 11,
        vy: -(0.22 + depth * 0.38),
        vx: (Math.random() - 0.5) * 0.16,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.012 + Math.random() * 0.014,
        opacity: 0.18 + depth * 0.34,
        outlined: Math.random() > 0.5,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
      };
    });

    const dust: DustParticle[] = Array.from({ length: dustCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.9 + 0.8,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18 - 0.08,
      alpha: Math.random() * 0.42 + 0.16,
      phase: Math.random() * Math.PI * 2,
    }));

    const petals: RosePetal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4.8 + 3.8,
      vy: 0.26 + Math.random() * 0.28,
      vx: (Math.random() - 0.35) * 0.28,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.018,
      opacity: 0.22 + Math.random() * 0.24,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));

    const shootingStars: ShootingStar[] = [];
    let nextMeteorTimer = 180;

    const drawHeart = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number,
      outlined: boolean
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      const s = size * 0.5;
      ctx.moveTo(0, s * 0.35);
      ctx.bezierCurveTo(-s * 0.15, -s * 0.45, -s * 1.15, -s * 0.35, -s * 1.1, s * 0.35);
      ctx.bezierCurveTo(-s * 1.05, s * 0.95, -s * 0.25, s * 1.25, 0, s * 1.55);
      ctx.bezierCurveTo(s * 0.25, s * 1.25, s * 1.05, s * 0.95, s * 1.1, s * 0.35);
      ctx.bezierCurveTo(s * 1.15, -s * 0.35, s * 0.15, -s * 0.45, 0, s * 0.35);
      ctx.closePath();

      if (outlined) {
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      } else {
        // Soft outer halo without expensive shadowBlur
        ctx.globalAlpha = opacity * 0.32;
        ctx.fillStyle = color;
        ctx.save();
        ctx.scale(1.35, 1.35);
        ctx.fill();
        ctx.restore();

        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.fill();
      }
      ctx.restore();
    };

    let rafId = 0;
    let tick = 0;

    const render = () => {
      tick += 1;
      ctx.clearRect(0, 0, width, height);

      // 1. Twinkling Stars
      for (const s of stars) {
        if (!prefersReduced) s.phase += s.speed;
        const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.phase));
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = s.tint;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Occasional Shooting Stars
      if (!prefersReduced) {
        nextMeteorTimer -= 1;
        if (nextMeteorTimer <= 0) {
          shootingStars.push({
            x: Math.random() * width * 0.72 + width * 0.12,
            y: Math.random() * height * 0.3,
            vx: 6.5 + Math.random() * 3.2,
            vy: 2.2 + Math.random() * 1.6,
            len: 70 + Math.random() * 50,
            life: 0,
            maxLife: 46,
          });
          nextMeteorTimer = 260 + Math.floor(Math.random() * 240);
        }
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const m = shootingStars[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life += 1;
        const progress = m.life / m.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

        ctx.globalAlpha = 1;
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 10, m.y - m.vy * 10);
        grad.addColorStop(0, `rgba(255, 241, 201, ${Math.max(0, alpha * 0.9)})`);
        grad.addColorStop(1, 'rgba(200, 182, 255, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - (m.vx / 7) * m.len, m.y - (m.vy / 7) * m.len);
        ctx.stroke();

        if (m.life >= m.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      // 3. Golden Dust Particles (soft double-circle glow, zero shadowBlur jank)
      for (const d of dust) {
        if (!prefersReduced) {
          d.x += d.vx;
          d.y += d.vy;
          d.phase += 0.024;
          if (d.y < -10) d.y = height + 10;
          if (d.x < -10) d.x = width + 10;
          if (d.x > width + 10) d.x = -10;
        }
        const a = d.alpha * (0.55 + 0.45 * Math.sin(d.phase));
        ctx.fillStyle = '#F5D78E';
        ctx.globalAlpha = a * 0.28;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Delicate Floating Rose Petals
      for (const p of petals) {
        if (!prefersReduced) {
          p.y += p.vy;
          p.x += p.vx + Math.sin(tick * 0.015 + p.angle) * 0.16;
          p.angle += p.spin;
          if (p.y > height + 15) {
            p.y = -15;
            p.x = Math.random() * width;
          }
          if (p.x > width + 15) p.x = -15;
          if (p.x < -15) p.x = width + 15;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.62, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 5. Layered Floating Hearts
      for (const h of hearts) {
        if (!prefersReduced) {
          h.y += h.vy;
          h.wobblePhase += h.wobbleSpeed;
          h.x += h.vx + Math.sin(h.wobblePhase) * 0.22;
          if (h.y < -28) {
            h.y = height + 24;
            h.x = Math.random() * width;
          }
        }
        drawHeart(h.x, h.y, h.size, h.color, h.opacity, h.outlined);
      }

      ctx.globalAlpha = 1;
      if (!prefersReduced) {
        rafId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-700"
      style={{ opacity: dimmed ? 0.65 : 1, transform: 'translateZ(0)' }}
      aria-hidden="true"
    >
      {/* Deep Midnight Purple Royal Sky Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 12%, rgba(69, 39, 126, 0.52) 0%, rgba(25, 13, 52, 0.92) 50%, #0a0515 100%)',
        }}
      />

      {/* Soft Drifting Nebula Clouds */}
      <div
        className="absolute -top-12 -left-1/4 w-[150%] h-72 rounded-full bg-[#C8B6FF]/[0.05] blur-3xl animate-cloud-drift"
        style={{ willChange: 'transform' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[120%] h-80 rounded-full bg-[#F7B8D0]/[0.045] blur-3xl animate-cloud-drift"
        style={{ animationDelay: '-11s', willChange: 'transform' }}
      />

      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Glowing Crescent Moon + Sleeping Kitten */}
      {showMoon && (
        <div className="absolute top-11 right-3 sm:top-12 sm:right-12 w-28 h-28 sm:w-40 sm:h-40 opacity-90">
          <SleepingMoonKitten className="w-full h-full" />
        </div>
      )}

      {/* Gentle Passing Background Butterflies */}
      <div
        className="hidden sm:block absolute top-[26%] left-[7%] w-9 h-9 opacity-65 animate-float-slow"
        style={{ animationDuration: '7.5s' }}
      >
        <AnimatedButterfly color="lavender" />
      </div>
      <div
        className="absolute bottom-[22%] right-[8%] w-8 h-8 opacity-60 animate-float-slow"
        style={{ animationDuration: '8.5s', animationDelay: '-3s' }}
      >
        <AnimatedButterfly color="pink" />
      </div>
    </div>
  );
};
