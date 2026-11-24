"use client";

import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  ShieldCheck,
  Scale,
} from "lucide-react";

export default function ChinaNmcAndLicensing() {
  const { nmcGuidelines, nmcRegulationsDetailed, fmgeNextOpportunities } =
    chinaContent;

  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFD] border-y border-[#E6EFF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── PART 1: NMC GUIDELINES & APPROVED UNIVERSITIES ── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {nmcGuidelines.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
                {nmcGuidelines.title}
              </h2>
            </MaskedReveal>

            <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed">
              {nmcGuidelines.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {nmcGuidelines.guidelines.map((guide) => (
              <SpotlightCard
                key={guide.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className="p-8 bg-white rounded-3xl border border-[#E6EFF8] shadow-xs flex flex-col justify-between hover:shadow-card-soft transition-all"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-6 border border-docshield-primary-light/40">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-docshield-ink mb-3 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                    {guide.text}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* ── PART 2: 7 CRITICAL REGULATORY PILLARS (NMC 2021 GAZETTE) ── */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-white border border-[#E6EFF8] shadow-sm mb-24">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {nmcRegulationsDetailed.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {nmcRegulationsDetailed.title}
              </h2>
            </MaskedReveal>

            <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
              {nmcRegulationsDetailed.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nmcRegulationsDetailed.regulations.map((reg) => (
              <div
                key={reg.label}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] flex flex-col justify-between hover:border-[#BFD7FF] transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#2F4E82] uppercase tracking-wider block mb-2">
                    {reg.label}
                  </span>
                  <p className="text-xs sm:text-sm text-docshield-ink leading-relaxed">
                    {reg.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 3: FMGE & NExT LICENSING PATHWAYS ── */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {fmgeNextOpportunities.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-4">
                {fmgeNextOpportunities.title}
              </h2>
            </MaskedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {fmgeNextOpportunities.pathways.map((pw) => (
              <SpotlightCard
                key={pw.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.3}
                className="p-7 sm:p-8 bg-white rounded-3xl border border-[#E6EFF8] shadow-xs flex flex-col justify-between hover:shadow-card-soft transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-5">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-docshield-ink mb-3">
                    {pw.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                    {pw.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
