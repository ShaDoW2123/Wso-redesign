'use client';

import React, { useRef, useState, type ReactNode } from 'react';

export interface BorderGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}

export const BorderGlow = ({
  children,
  className = '',
  glowColor = 'rgba(76, 109, 166, 0.45)',
  borderRadius = '1rem',
}: BorderGlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCursorPos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ borderRadius }}
      className={`relative p-px overflow-hidden group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: cursorPos.opacity,
          background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, ${glowColor}, transparent 60%)`,
          borderRadius,
        }}
      />
      <div
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
        className="relative h-full w-full bg-white z-[1]"
      >
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
