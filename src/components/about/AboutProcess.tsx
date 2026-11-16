"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutProcess() {
  const { admissionProcess } = aboutContent;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

      const cards = stepsRef.current?.querySelectorAll(".process-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
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
      id="admission-process"
      className="py-24 sm:py-32 bg-docshield-subtle/40 border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {admissionProcess.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {admissionProcess.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {admissionProcess.subtext}
          </p>
        </div>

        {/* 3 Numbered Pipeline Cards with Connected Flow */}
        <div ref={stepsRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {admissionProcess.steps.map((item, idx) => (
            <SpotlightCard
              key={item.step}
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className="process-card p-8 bg-white border border-docshield-border hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono font-bold text-docshield-accent px-3 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40 group-hover:bg-docshield-accent group-hover:text-white transition-colors duration-300">
                    Step {item.step}
                  </span>
                  <span className="text-xs text-docshield-ink-muted font-medium">
                    {idx === 0 ? "Initial Audit" : idx === 1 ? "Documentation" : "Clearance & Travel"}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-3.5 group-hover:text-docshield-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-docshield-border flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-docshield-subtle text-docshield-ink border border-docshield-border group-hover:border-docshield-accent/30 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-docshield-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
