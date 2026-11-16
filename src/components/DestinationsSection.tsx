"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { ArrowRight, CheckCircle2, Sparkles, MapPin, ChevronRight } from "lucide-react";

export default function DestinationsSection() {
  const { destinationsSection } = homeContent;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header: Architectural Lead-in + Balanced Heading + Right Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-docshield-border/60">
          <div className="max-w-3xl">
            {/* Architectural Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {destinationsSection.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* High-Impact Headline - Uniform Single Midnight Navy */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight leading-[1.15] text-balance mb-4">
              Top Countries for MBBS Study Abroad
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl font-normal">
              {destinationsSection.subtext}
            </p>
          </div>

          {/* Docshield Solid Midnight Navy Pill CTA */}
          <Link
            href="#featured-universities"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-docshield-primary text-white hover:bg-docshield-primary-hover text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 self-start md:self-auto shrink-0 group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Option A: Expanding Horizontal Accordion Showcase (Cinematic Split Stage) */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 w-full h-auto lg:h-[590px]">
          {destinationsSection.destinations.map((dest, idx) => {
            const isExpanded = activeIdx === idx;
            const indexNumber = `0${idx + 1}`;

            return (
              <div
                key={dest.country}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isExpanded
                    ? "lg:flex-[3.8] bg-docshield-lavender border-2 border-docshield-primary-light/80 shadow-2xl p-5 sm:p-7"
                    : "lg:flex-[1] min-h-[140px] lg:min-h-0 cursor-pointer shadow-md hover:shadow-xl border border-docshield-border group"
                }`}
              >
                {/* ================= EXPANDED CARD VIEW (Cinematic Split Stage) ================= */}
                {isExpanded ? (
                  <div className="flex flex-col md:flex-row h-full gap-6 sm:gap-8 items-stretch animate-in fade-in duration-500">
                    {/* Left Frame: Cinematic Full-Height Photo */}
                    <div className="relative w-full md:w-[270px] lg:w-[300px] shrink-0 h-[220px] md:h-full rounded-2xl overflow-hidden shadow-lg border-2 border-white/80">
                      {dest.image && (
                        <Image
                          src={dest.image}
                          alt={`MBBS in ${dest.country}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover"
                          priority
                        />
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-docshield-primary/75 via-transparent to-black/20 pointer-events-none" />

                      {/* Top Bar: Country Flag + Index Badge */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/40 backdrop-blur-md text-white border border-white/20">
                          {indexNumber}
                        </span>
                        {dest.flag && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-white bg-white/30 backdrop-blur-md">
                            <Image
                              src={dest.flag}
                              alt={`${dest.country} Flag`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>

                      {/* Location Pin at Bottom of Photo */}
                      <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow-md">
                        <MapPin className="w-3.5 h-3.5 text-docshield-primary-light" />
                        <span>{dest.country}</span>
                      </div>
                    </div>

                    {/* Right Content Panel: Complete Editorial Content (100% Verbatim) */}
                    <div className="flex flex-col justify-between flex-1 py-1 overflow-hidden">
                      <div>
                        {/* Status Chip & Estimated Package Badge */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-docshield-accent border border-docshield-border shadow-xs">
                            {dest.badge}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-docshield-primary-light text-docshield-ink shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-docshield-accent" />
                            <span>{dest.tuition}</span>
                          </span>
                        </div>

                        {/* Country Heading */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-docshield-ink tracking-tight mb-2.5">
                          MBBS in {dest.country}
                        </h3>

                        {/* Full Description (100% Intact) */}
                        <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-5">
                          {dest.description}
                        </p>

                        {/* 4 Feature Bullet Points in 2-Column Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                          {dest.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-xs text-docshield-ink bg-white/80 rounded-xl px-3 py-2 border border-docshield-border/70"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="font-medium leading-snug">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action CTA Pill */}
                      <div className="pt-2">
                        <Link
                          href={dest.href}
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-docshield-primary hover:bg-docshield-primary-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 group/btn"
                        >
                          <span>{dest.action}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ================= COLLAPSED CARD VIEW (Sleek Architectural Strip) ================= */
                  <div className="relative w-full h-full min-h-[140px] lg:min-h-full">
                    {/* Background Landmark Image */}
                    {dest.image && (
                      <Image
                        src={dest.image}
                        alt={`MBBS in ${dest.country}`}
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    )}
                    {/* Dark Dramatic Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-docshield-primary/95 via-docshield-primary/40 to-black/35 group-hover:from-docshield-primary/85 transition-colors" />

                    {/* Top Section: Index Number & Flag */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-black/40 backdrop-blur-md text-white border border-white/20">
                        {indexNumber}
                      </span>
                      {dest.flag && (
                        <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-md border-2 border-white/90 bg-white/30 backdrop-blur-md">
                          <Image
                            src={dest.flag}
                            alt={`${dest.country} Flag`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Desktop Vertical Strip Country Label */}
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
                      <span
                        className="text-white/90 text-sm font-bold tracking-widest uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 drop-shadow-md group-hover:text-white transition-colors"
                      >
                        MBBS in {dest.country}
                      </span>
                    </div>

                    {/* Mobile Horizontal Bar Label */}
                    <div className="flex lg:hidden absolute bottom-3.5 left-3.5 right-3.5 items-center justify-between z-10">
                      <span className="text-white font-bold text-base drop-shadow-md">
                        MBBS in {dest.country}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Desktop Bottom Peek Pill */}
                    <div className="hidden lg:flex absolute bottom-4 inset-x-3 justify-center z-10">
                      <span className="w-full text-center px-2 py-1.5 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/25 truncate group-hover:bg-white group-hover:text-docshield-primary transition-all">
                        {dest.country}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
