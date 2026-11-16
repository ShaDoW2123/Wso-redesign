'use client';

import React, { useRef, useState, type ReactNode, type CSSProperties } from 'react';

export interface TiltedCardProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  glare?: boolean;
  glareColor?: string;
  borderRadius?: string;
}

export const TiltedCard = ({
  children,
  className = '',
  style,
  rotateAmplitude = 12,
  scaleOnHover = 1.02,
  glare = true,
  glareColor = 'rgba(191, 215, 255, 0.4)',
  borderRadius = '1.25rem',
}: TiltedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotY = ((x - centerX) / centerX) * rotateAmplitude;

    setRotateX(rotX);
    setRotateY(rotY);

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.65,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className={`relative inline-block w-full transition-transform duration-300 ease-out ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? scaleOnHover : 1})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
          borderRadius,
          ...style,
        }}
        className="relative will-change-transform overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        {children}

        {glare && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor} 0%, transparent 60%)`,
              borderRadius,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TiltedCard;
