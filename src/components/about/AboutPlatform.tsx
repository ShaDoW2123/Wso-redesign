"use client";

import { aboutContent } from "@/data/aboutContent";
import { CheckCircle2, Compass, Layers } from "lucide-react";

export default function AboutPlatform() {
  const { platform } = aboutContent;

  return (
    <section id="platform" className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Platform Definition & Editorial Mission */}
          <div className="lg:col-span-6 flex flex-col justify-center">
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

            {/* Quick Diagnostic Callout */}
            <div className="p-6 rounded-2xl bg-docshield-lavender border border-docshield-primary-light/50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-docshield-border text-docshield-accent shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-docshield-ink mb-1">
                  Verified Institutional Due Diligence
                </p>
                <p className="text-xs text-docshield-ink-muted leading-relaxed">
                  Every recommendation is backed by on-ground hospital inspections, faculty audits, and NMC 2021 Gazette compliance checks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 8-Capability Interactive Matrix Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-7 sm:p-9 bg-docshield-subtle/50 border border-docshield-border shadow-card-soft">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-docshield-border">
                <Layers className="w-4 h-4 text-docshield-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-docshield-ink">
                  {platform.capabilitiesCardTitle}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {platform.capabilities.map((item, idx) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-white border border-[#EFEFEF] hover:border-docshield-primary-light hover:shadow-xs transition-all duration-200 flex items-center gap-3 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-docshield-lavender text-docshield-accent flex items-center justify-center text-xs font-semibold shrink-0 group-hover:bg-docshield-primary group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-docshield-ink">
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
                <span>From Advisory to Graduation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
