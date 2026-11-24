"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { homeContent } from "@/data/homeContent";
import { CheckCircle2, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { SlidingArrowButton } from "@/components/ui/SlidingArrowButton";

export default function PinnedHorizontalDestinations() {
  const { destinationsSection } = homeContent;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only apply horizontal pin scroll on desktop (lg and up)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!sectionRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + 120;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount() * 1.2}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#FAFCFF] overflow-hidden border-b border-[#E8EEF5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 lg:mb-14">
        {/* Section Header: Masked Typography Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8EEF5]">
          <div>
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {destinationsSection.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* Masked Headline Reveal */}
            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight">
                {destinationsSection.title}
              </h2>
            </MaskedReveal>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl font-normal mt-3">
              {destinationsSection.subtext}
            </p>
          </div>

          {/* Desktop Showcase Progress Tracker & Action */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="hidden lg:flex flex-col items-end gap-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#2F4E82]">
                <span>01</span>
                <div className="w-24 h-1 bg-[#BFD7FF]/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#000B33] transition-all duration-150 ease-out rounded-full"
                    style={{ width: `${Math.max(10, progress * 100)}%` }}
                  />
                </div>
                <span>0{destinationsSection.destinations.length}</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-600">
                Scroll to Explore
              </span>
            </div>

            <SlidingArrowButton
              href="#featured-universities"
              variant="primary"
              size="md"
            >
              View All Destinations
            </SlidingArrowButton>
          </div>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar px-4 sm:px-6 lg:px-12">
        <div
          ref={trackRef}
          className="flex flex-row gap-6 lg:gap-8 w-max pb-6 lg:pb-0 will-change-transform"
        >
          {destinationsSection.destinations.map((dest, idx) => (
            <div
              key={dest.country}
              className="w-[320px] sm:w-[420px] lg:w-[500px] shrink-0 bg-white rounded-3xl border border-[#E8EEF5] shadow-[0_10px_35px_-10px_rgba(0,11,51,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(0,11,51,0.12)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image Stage with Hover Scale */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-slate-100">
                {dest.image && (
                  <Image
                    src={dest.image}
                    alt={`MBBS in ${dest.country}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 320px, 500px"
                  />
                )}
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Country Pill + Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md">
                    {dest.flag && (
                      <div className="relative w-5 h-5 rounded-full overflow-hidden shadow-2xs">
                        <Image
                          src={dest.flag}
                          alt={`${dest.country} flag`}
                          fill
                          className="object-cover"
                          sizes="20px"
                        />
                      </div>
                    )}
                    <span className="text-xs font-bold text-[#000B33]">
                      {dest.country}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/90 text-white backdrop-blur-md shadow-xs">
                    {dest.badge}
                  </span>
                </div>

                {/* Index Watermark */}
                <div className="absolute bottom-3 left-4 text-white/90 text-xs font-mono font-bold tracking-wider">
                  DESTINATION 0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Tuition Chip */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-docshield-lavender border border-docshield-primary-light/60 text-[#2F4E82] text-xs font-bold mb-3.5">
                    <Sparkles className="w-3.5 h-3.5 text-docshield-accent" />
                    <span>{dest.tuition}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#000B33] mb-2.5">
                    MBBS in {dest.country}
                  </h3>

                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-5">
                    {dest.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {dest.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-xs text-docshield-ink font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sliding Arrow CTA */}
                <div className="pt-2 border-t border-slate-100">
                  <SlidingArrowButton
                    href={dest.href}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    {dest.action}
                  </SlidingArrowButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
