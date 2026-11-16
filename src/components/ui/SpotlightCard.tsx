'use client';

import React, { useEffect, useRef } from 'react';

export type SpotlightShape = 'circle' | 'beam';

export type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  spotlightColor?: string;
  intensity?: number;
  spotlightSize?: number;
  softness?: number;
  shape?: SpotlightShape;
  borderGlow?: number;
  proximity?: number;
  smoothing?: number;
  ambient?: boolean;
  flare?: boolean;
  grain?: number;
  theme?: 'dark' | 'light';
};

type Palette = { surface: string; border: string; shadow: string; light: string; fill: number; edge: number };

type Settings = {
  shape: SpotlightShape;
  fill: string;
  edge: string;
  size: number;
  intensity: number;
  borderGlow: number;
  proximity: number;
  smoothing: number;
  ambient: boolean;
  flare: boolean;
  grain: number;
};

const THEMES: Record<'dark' | 'light', Palette> = {
  dark: {
    surface: '#000B33',
    border: 'rgba(191, 215, 255, 0.15)',
    shadow: '0 24px 48px -24px rgba(0, 11, 51, 0.6)',
    light: '#BFD7FF',
    fill: 0.35,
    edge: 0.8
  },
  light: {
    surface: '#FFFFFF',
    border: 'rgba(76, 109, 166, 0.14)',
    shadow: '0 2px 8px -2px rgba(0, 11, 51, 0.05), 0 16px 32px -16px rgba(0, 11, 51, 0.08)',
    light: '#4C6DA6',
    fill: 0.2,
    edge: 0.65
  }
};

const SHAPES: SpotlightShape[] = ['circle', 'beam'];

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const falloff = (color: string, softness: number) => {
  const soft = clamp(softness, 0, 1);
  const core = (1 - soft) ** 1.5 * 0.85;
  const stop = (alpha: number, at: number) =>
    `color-mix(in srgb, ${color} ${(alpha * 100).toFixed(2)}%, transparent) ${(at * 100).toFixed(2)}%`;
  const list = [stop(1, 0)];
  for (let i = 0; i <= 14; i++) {
    const t = core + ((1 - core) * i) / 14;
    const g = (t - core) / (1 - core);
    const smooth = 1 - g * g * (3 - 2 * g);
    const glow = Math.exp(-4.6 * g * g) * (1 - g ** 6);
    list.push(stop(smooth + (glow - smooth) * soft, t));
  }
  return list.join(', ');
};

const CARD =
  'relative isolate overflow-hidden rounded-2xl p-6 sm:p-8 [background-color:var(--spotlight-card-surface)] [box-shadow:var(--spotlight-card-shadow)] transition-shadow duration-300';

export const SpotlightCard = ({
  children,
  className = '',
  style,
  spotlightColor,
  intensity = 0.25,
  spotlightSize = 320,
  softness = 0.7,
  shape = 'circle',
  borderGlow = 0.6,
  proximity = 80,
  smoothing = 0.3,
  ambient = false,
  flare = true,
  grain = 0,
  theme = 'light',
  ...rest
}: SpotlightCardProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLSpanElement>(null);
  const grainRef = useRef<HTMLSpanElement>(null);
  const edgeRef = useRef<HTMLSpanElement>(null);
  const wakeRef = useRef<(() => void) | null>(null);
  const palette = THEMES[theme] ?? THEMES.light;
  const color = spotlightColor ?? palette.light;
  const form = SHAPES.includes(shape) ? shape : 'circle';
  const settings: Settings = {
    shape: form,
    fill: falloff(color, softness),
    edge: falloff(color, 1),
    size: Math.max(20, spotlightSize),
    intensity: clamp(intensity, 0, 1) * palette.fill,
    borderGlow: clamp(borderGlow, 0, 1) * palette.edge,
    proximity: Math.max(0, proximity),
    smoothing: clamp(smoothing, 0, 1),
    ambient,
    flare,
    grain: clamp(grain, 0, 1)
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    wakeRef.current?.();
  });

  useEffect(() => {
    const root = rootRef.current;
    const light = lightRef.current;
    const noise = grainRef.current;
    const edge = edgeRef.current;
    if (!root || !light || !noise || !edge) return undefined;

    const state = { x: 0, y: 0, presence: 0, flare: 0, time: Math.random() * 60, pressed: false, visible: true };
    const pointer = { x: 0, y: 0, active: false };
    const drawn = { light: '', edge: '', noise: '' };
    let raf = 0;
    let last = 0;
    let alive = true;

    const gradient = (s: Settings, size: number, x: number, y: number, stops: string) => {
      if (s.shape === 'beam') {
        const reach = Math.max(size * 0.6, y + size * 0.55);
        return `radial-gradient(${(size * 0.55).toFixed(1)}px ${reach.toFixed(1)}px at ${x.toFixed(1)}px 0px, ${stops})`;
      }
      return `radial-gradient(circle ${(size * 0.5).toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, ${stops})`;
    };

    const paint = (s: Settings) => {
      const active = (s.ambient ? 0.35 : 0) + (1 - (s.ambient ? 0.35 : 0)) * state.presence;
      const boost = 1 + state.flare * 0.75;
      const alpha = active * boost;
      const fillOpacity = (s.intensity * alpha).toFixed(4);
      const edgeOpacity = (s.borderGlow * alpha).toFixed(4);

      if (fillOpacity !== drawn.light) {
        light.style.opacity = fillOpacity;
        drawn.light = fillOpacity;
      }
      if (edgeOpacity !== drawn.edge) {
        edge.style.opacity = edgeOpacity;
        drawn.edge = edgeOpacity;
      }

      const lightBg = gradient(s, s.size, state.x, state.y, s.fill);
      const edgeBg = gradient(s, s.size, state.x, state.y, s.edge);
      light.style.backgroundImage = lightBg;
      edge.style.backgroundImage = edgeBg;
    };

    const tick = (now: number) => {
      raf = 0;
      if (!alive) return;
      const s = settingsRef.current;
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 0.016;
      last = now;
      const rect = root.getBoundingClientRect();
      const px = pointer.x - rect.left;
      const py = pointer.y - rect.top;
      const inside = pointer.active && px >= 0 && px <= rect.width && py >= 0 && py <= rect.height;
      const near = pointer.active && s.proximity > 0 && px >= -s.proximity && px <= rect.width + s.proximity && py >= -s.proximity && py <= rect.height + s.proximity;
      const tx = inside || near ? px : rect.width / 2;
      const ty = inside || near ? py : rect.height / 2;

      const rate = 1 - Math.exp(-dt / (1 - s.smoothing * 0.9 + 0.02));
      state.x += (tx - state.x) * rate;
      state.y += (ty - state.y) * rate;

      const target = inside ? 1 : near ? 0.4 : 0;
      state.presence += (target - state.presence) * rate;

      paint(s);

      if (inside || near || state.presence > 0.01) {
        raf = requestAnimationFrame(tick);
      }
    };

    const wake = () => {
      if (raf || !alive) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    wakeRef.current = wake;

    const onMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      wake();
    };

    const onLeave = () => {
      pointer.active = false;
      wake();
    };

    const observer = new IntersectionObserver(entries => {
      state.visible = entries.some(entry => entry.isIntersecting);
      if (state.visible) wake();
    });
    observer.observe(root);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);
    wake();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`${CARD} ${className}`}
      style={
        {
          '--spotlight-card-surface': palette.surface,
          '--spotlight-card-border': palette.border,
          '--spotlight-card-shadow': palette.shadow,
          ...style
        } as React.CSSProperties
      }
      {...rest}
    >
      <span
        ref={lightRef}
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      <span
        ref={grainRef}
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-[length:160px_160px] opacity-0 mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
        aria-hidden="true"
      />
      {children}
      <span
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] border border-[var(--spotlight-card-border)]"
        aria-hidden="true"
      />
      <span
        ref={edgeRef}
        className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] border border-transparent opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
    </div>
  );
};

export default SpotlightCard;
