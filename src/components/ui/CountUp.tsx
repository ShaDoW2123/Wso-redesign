'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp = ({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: CountUpProps) => {
  const [val, setVal] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const startAnimation = () => {
      const obj = { value: start };
      gsap.to(obj, {
        value: end,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          setVal(Number(obj.value.toFixed(decimals)));
        },
      });
    };

    // If already in viewport on mount, trigger immediately
    const rect = elementRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      startAnimation();
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top 90%',
      once: true,
      onEnter: startAnimation,
    });

    return () => {
      trigger.kill();
    };
  }, [end, start, duration, decimals]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CountUp;
