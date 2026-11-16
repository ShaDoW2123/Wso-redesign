"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { AlertCircle, ShieldAlert } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutWhyExists() {
  const { whyExists } = aboutContent;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trapsRef = useRef<HTMLDivElement>(null);
  const blindspotRef = useRef<HTMLDivElement>(null);

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

      const cards = trapsRef.current?.querySelectorAll(".trap-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
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

      if (blindspotRef.current) {
        gsap.fromTo(
          blindspotRef.current,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: blindspotRef.current,
              start: "top 90%",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
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
      id="why-exists"
      className="py-24 sm:py-32 bg-docshield-subtle/40 border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {whyExists.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {whyExists.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {whyExists.description}
          </p>
        </div>

        {/* 4 Diagnostic Trap Cards (Elevated ReactBits Spotlight Cards) */}
        <div ref={trapsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-10">
          {whyExists.traps.map((trap) => (
            <SpotlightCard
              key={trap.num}
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className="trap-card p-7 bg-white border border-docshield-border hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-docshield-accent px-2.5 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40 group-hover:bg-docshield-accent group-hover:text-white transition-colors duration-300">
                    {trap.num}
                  </span>
                  <AlertCircle className="w-4 h-4 text-slate-400 group-hover:text-docshield-accent transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-semibold text-docshield-ink mb-3 group-hover:text-docshield-primary transition-colors">
                  {trap.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {trap.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* ── 5TH CRITICAL BLINDSPOT FULL-WIDTH SPOTLIGHT CARD ── */}
        <div ref={blindspotRef}>
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.4}
            spotlightSize={500}
            className="p-8 sm:p-10 lg:p-12 bg-white border border-[#EFEFEF] shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Blindspot title & description */}
              <div className="lg:col-span-6">
                <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-widest text-docshield-accent px-3 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40 mb-4">
                  {whyExists.criticalBlindspot.tag}
                </span>

                <h3 className="text-2xl sm:text-3xl font-normal text-docshield-ink tracking-tight mb-4">
                  {whyExists.criticalBlindspot.title}
                </h3>

                <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed mb-6 font-normal">
                  {whyExists.criticalBlindspot.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-docshield-ink">
                  <ShieldAlert className="w-4 h-4 text-docshield-accent" />
                  <span>We Study Overseas provides guaranteed statutory licensing verification</span>
                </div>
              </div>

              {/* Right: The 3 Critical Student Questions */}
              <div className="lg:col-span-6 space-y-3.5">
                {whyExists.criticalBlindspot.questions.map((q) => (
                  <div
                    key={q}
                    className="p-4 sm:p-5 rounded-2xl bg-docshield-subtle/80 border border-docshield-border hover:border-docshield-accent/50 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group cursor-default"
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-docshield-accent flex items-center justify-center text-xs font-bold shrink-0 border border-docshield-border mt-0.5 shadow-xs group-hover:bg-docshield-accent group-hover:text-white transition-all">
                      ?
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-docshield-ink leading-snug group-hover:text-docshield-primary transition-colors">
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
