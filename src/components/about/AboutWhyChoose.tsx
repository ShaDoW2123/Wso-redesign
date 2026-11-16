"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutWhyChoose() {
  const { whyChoose } = aboutContent;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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

      const cards = gridRef.current?.querySelectorAll(".reason-card");
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

      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: quoteRef.current,
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
      id="why-choose"
      className="py-24 sm:py-32 bg-docshield-subtle/30 border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {whyChoose.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {whyChoose.headline}
          </h2>
        </div>

        {/* 5 Reasons Grid (Elevated Bento Spotlight Cards) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {whyChoose.reasons.map((item, idx) => (
            <SpotlightCard
              key={item.num}
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className={`reason-card p-8 bg-white border border-docshield-border hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-docshield-accent px-2.5 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40 inline-block mb-5 group-hover:bg-docshield-accent group-hover:text-white transition-colors duration-300">
                  {item.num}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-docshield-ink mb-3 leading-snug group-hover:text-docshield-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-docshield-border/60 flex items-center gap-2 text-xs font-medium text-docshield-ink">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified WSO Standard</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* ── FEATURE QUOTE BANNER (Spotlight Glass Panel) ── */}
        <div ref={quoteRef}>
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.4}
            spotlightSize={500}
            className="p-8 sm:p-12 lg:p-14 bg-white border border-docshield-border-card/60 shadow-xl text-center relative overflow-hidden"
          >
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-docshield-lavender border border-docshield-primary-light/50 text-docshield-accent text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-docshield-accent" />
                <span>{whyChoose.quote.badge}</span>
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl font-serif text-docshield-ink leading-relaxed mb-6 italic">
                {whyChoose.quote.text}
              </p>

              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-docshield-ink-muted font-semibold">
                {whyChoose.quote.tagline}
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
