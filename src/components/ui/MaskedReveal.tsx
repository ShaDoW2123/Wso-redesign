"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MaskedRevealProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  duration?: number;
  yOffset?: number | string;
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "p" | "span" | "section";
}

export function MaskedReveal({
  children,
  className = "",
  innerClassName = "",
  delay = 0,
  duration = 0.95,
  yOffset = "105%",
  as: Component = "div",
}: MaskedRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!innerRef.current || !containerRef.current) return;

      gsap.fromTo(
        innerRef.current,
        {
          y: yOffset,
          opacity: 0.15,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset]);

  return (
    <Component
      ref={containerRef as any}
      className={`overflow-hidden block ${className}`}
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div ref={innerRef} className={`will-change-transform ${innerClassName}`}>
        {children}
      </div>
    </Component>
  );
}
