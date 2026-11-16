"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data/aboutContent";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutCountryUniversities() {
  const { countryKnowledgeHub } = aboutContent;
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

      const cards = gridRef.current?.querySelectorAll(".country-card");
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
      id="destinations"
      className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {countryKnowledgeHub.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {countryKnowledgeHub.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {countryKnowledgeHub.subtext}
          </p>
        </div>

        {/* 6 Country Dossier Cards (Elevated Spotlight Cards) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {countryKnowledgeHub.countries.map((c) => (
            <SpotlightCard
              key={c.name}
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className="country-card p-7 sm:p-8 bg-docshield-subtle/50 border border-docshield-border hover:border-docshield-accent/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-7 rounded-md overflow-hidden shadow-xs border border-docshield-border">
                      <Image
                        src={c.flag}
                        alt={`${c.name} Flag`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-docshield-ink group-hover:text-docshield-primary transition-colors">
                      {c.name}
                    </h3>
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-docshield-lavender text-docshield-accent border border-docshield-primary-light/40">
                    {c.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed font-normal mb-6">
                  {c.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-docshield-border flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  NMC Recognized
                </span>

                <Link
                  href="/#featured-universities"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-docshield-primary hover:text-docshield-accent transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>View Universities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
