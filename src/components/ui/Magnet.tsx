'use client';

import React, { useRef, useState, useEffect, type ReactNode, type HTMLAttributes } from 'react';

export interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  magnetStrength?: number;
  activeDistance?: number;
  className?: string;
  disabled?: boolean;
}

export const Magnet = ({
  children,
  magnetStrength = 0.35,
  activeDistance = 60,
  className = '',
  disabled = false,
  ...rest
}: MagnetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < activeDistance + rect.width / 2) {
        const deltaX = (e.clientX - centerX) * magnetStrength;
        const deltaY = (e.clientY - centerY) * magnetStrength;
        setPosition({ x: deltaX, y: deltaY });
        setIsHovered(true);
      } else {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [magnetStrength, activeDistance, disabled]);

  return (
    <div
      ref={containerRef}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.45s ease-out',
      }}
      className={`inline-block will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Magnet;
