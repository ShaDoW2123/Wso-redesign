"use client";

import { useState, useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutComparisons() {
  const { destinationMatchups } = aboutContent;
  const { matchups } = destinationMatchups;
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const activeMatchup = matchups[activeIdx];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 25,
        duration: 0.75,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards on tab change
  useEffect(() => {
    if (!stageRef.current) return;
    gsap.fromTo(
      stageRef.current.children,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeIdx]);

  return (
    <section
      ref={sectionRef}
      id="comparisons"
      className="py-24 sm:py-32 bg-docshield-subtle/30 border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {destinationMatchups.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {destinationMatchups.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto mb-8">
            {destinationMatchups.subtext}
          </p>

          {/* Interactive Matchup Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm gap-1 sm:gap-2">
            {matchups.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeIdx === idx
                    ? "bg-[#000B33] text-white shadow-md scale-[1.02]"
                    : "text-docshield-ink/70 hover:text-docshield-ink hover:bg-slate-100"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Side-by-Side Comparison Stage */}
        <div ref={stageRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Option A Card (SpotlightCard) */}
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.4}
            spotlightSize={450}
            className="p-8 sm:p-10 bg-white border border-[#EFEFEF] shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#EFEFEF]">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-docshield-accent block">
                    DESTINATION A
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-docshield-ink">
                    {activeMatchup.optionA.country}
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-docshield-lavender text-docshield-accent border border-docshield-primary-light/50">
                  Key Advantages
                </span>
              </div>

              <div className="space-y-4">
                {activeMatchup.optionA.advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-3.5 group">
                    <div className="w-5 h-5 rounded-full bg-docshield-lavender flex items-center justify-center shrink-0 mt-0.5 text-docshield-accent group-hover:bg-docshield-accent group-hover:text-white transition-colors duration-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-xs sm:text-sm text-docshield-ink/85 leading-relaxed font-normal">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#EFEFEF] text-xs text-docshield-ink-muted">
              NMC 2021 Gazette Compliant Program Structure
            </div>
          </SpotlightCard>

          {/* Option B Card (SpotlightCard with Soft Clinical Blue Tint) */}
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.45}
            spotlightSize={450}
            className="p-8 sm:p-10 bg-[#F2F7FF] border border-[#BFD7FF] shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#BFD7FF]/60">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-docshield-accent block">
                    DESTINATION B
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#000B33]">
                    {activeMatchup.optionB.country}
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-[#000B33] border border-[#BFD7FF] shadow-xs">
                  Key Advantages
                </span>
              </div>

              <div className="space-y-4">
                {activeMatchup.optionB.advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-3.5 group">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 text-[#2F4E82] shadow-xs group-hover:bg-[#2F4E82] group-hover:text-white transition-colors duration-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#000B33] leading-relaxed font-normal">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#BFD7FF]/60 text-xs text-docshield-ink-muted">
              NMC 2021 Gazette Compliant Program Structure
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
