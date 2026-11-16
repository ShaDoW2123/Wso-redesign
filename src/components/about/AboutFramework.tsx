"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { ShieldCheck, Award, Users, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLAR_ICONS = [ShieldCheck, Award, Users, Building2, TrendingUp];

export default function AboutFramework() {
  const { selectionFramework } = aboutContent;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      const cards = gridRef.current?.querySelectorAll(".framework-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25, scale: 0.96 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selection-framework"
      className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {selectionFramework.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {selectionFramework.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink italic leading-relaxed max-w-2xl mx-auto font-serif mb-6">
            {selectionFramework.quote}
          </p>

          <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed max-w-xl mx-auto">
            {selectionFramework.subtext}
          </p>
        </div>

        {/* 5 Pillars Grid (Elevated Bento Spotlight Cards) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {selectionFramework.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <SpotlightCard
                key={pillar.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className={`framework-card p-8 bg-docshield-subtle/50 border border-docshield-border hover:border-docshield-accent/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-border group-hover:bg-docshield-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-docshield-accent">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-docshield-ink mb-3 leading-snug group-hover:text-docshield-primary transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-docshield-border mt-6 flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Criterion</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
