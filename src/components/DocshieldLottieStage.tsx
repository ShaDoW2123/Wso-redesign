"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

export default function DocshieldLottieStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initLottie() {
      try {
        const [lottieModule, res] = await Promise.all([
          import("lottie-web"),
          fetch("/docshield-orb.json"),
        ]);

        const animationData = await res.json();
        const lottie = lottieModule.default || lottieModule;

        if (!isMounted || !containerRef.current) return;

        // Destroy previous instance if any
        if (animRef.current) {
          animRef.current.destroy();
        }

        animRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
          },
        });
      } catch (err) {
        console.error("Failed to initialize Lottie animation:", err);
      }
    }

    initLottie();

    return () => {
      isMounted = false;
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-full max-w-[1440px] h-[380px] sm:h-[540px] lg:h-[720px] flex items-center justify-center"
      />
    </div>
  );
}
