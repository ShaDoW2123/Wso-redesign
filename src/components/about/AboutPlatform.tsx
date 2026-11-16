"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { CheckCircle2, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPlatform() {
  const { platform } = aboutContent;
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger in left editorial column
      if (leftColRef.current?.children) {
        gsap.fromTo(
          Array.from(leftColRef.current.children),
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      // Stagger in right capability cards
      const items = cardsRef.current?.querySelectorAll(".capability-pill");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.94, y: 15 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
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
      id="platform"
      className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Platform Definition & Editorial Mission */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col justify-center">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {platform.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* Single Solid Midnight Navy Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-6">
              {platform.headline}
            </h2>

            {/* Lead Narrative */}
            <p className="text-lg sm:text-xl font-medium text-docshield-ink leading-relaxed mb-6">
              {platform.lead}
            </p>

            {/* In-depth Body Paragraph */}
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed font-normal mb-8">
              {platform.description}
            </p>

            {/* Quick Diagnostic Callout (Elevated Spotlight Card) */}
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.3}
              className="p-6 bg-docshield-lavender/70 border border-docshield-primary-light/50 flex items-start gap-4 hover:border-docshield-accent/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-docshield-border text-docshield-accent shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-docshield-ink mb-1 flex items-center gap-2">
                  Verified Institutional Due Diligence
                  <Sparkles className="w-3.5 h-3.5 text-docshield-accent" />
                </p>
                <p className="text-xs text-docshield-ink-muted leading-relaxed">
                  Every recommendation is backed by on-ground hospital inspections, faculty audits, and NMC 2021 Gazette compliance checks.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: 8-Capability Magic Bento Card with Spotlight */}
          <div className="lg:col-span-6">
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.4}
              spotlightSize={400}
              className="p-7 sm:p-9 bg-docshield-subtle/60 border border-docshield-border shadow-lg"
            >
              <div className="flex items-center justify-between gap-2.5 mb-6 pb-4 border-b border-docshield-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-docshield-primary text-white flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-docshield-ink">
                    {platform.capabilitiesCardTitle}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-docshield-accent px-2.5 py-1 rounded-full bg-white border border-docshield-border shadow-xs">
                  <ShieldCheck className="w-3 h-3 text-docshield-accent" />
                  Verified Scope
                </span>
              </div>

              <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {platform.capabilities.map((item, idx) => (
                  <div
                    key={item}
                    className="capability-pill p-4 rounded-xl bg-white border border-[#EFEFEF] hover:border-docshield-accent/50 hover:shadow-md transition-all duration-300 flex items-center gap-3 group cursor-default"
                  >
                    <span className="w-7 h-7 rounded-lg bg-docshield-lavender text-docshield-accent flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-docshield-accent group-hover:text-white transition-all duration-300">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-docshield-ink group-hover:text-docshield-primary transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-docshield-border flex items-center justify-between text-xs text-docshield-ink-muted">
                <span className="flex items-center gap-1.5 font-medium text-docshield-ink">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Full Student Lifecycle Support
                </span>
                <span className="font-medium text-docshield-accent">From Advisory to Graduation</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
