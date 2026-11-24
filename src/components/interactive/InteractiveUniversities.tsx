"use client";

import { useState } from "react";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { ArrowRight, CheckCircle2, Building2, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { SlidingArrowButton } from "@/components/ui/SlidingArrowButton";

export default function InteractiveUniversities() {
  const { featuredUniversitiesSection } = homeContent;
  const { universities, pill, title, subtext } = featuredUniversitiesSection;

  const countryFlags: Record<string, string> = {
    Georgia: "🇬🇪",
    Russia: "🇷🇺",
    Uzbekistan: "🇺🇿",
    Kazakhstan: "🇰🇿",
    Kyrgyzstan: "🇰🇬",
  };

  const countries = ["All", ...Array.from(new Set(universities.map((u) => u.country)))];
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredUnis =
    selectedCountry === "All"
      ? universities
      : universities.filter((u) => u.country === selectedCountry);

  return (
    <section
      id="featured-universities"
      className="py-24 sm:py-32 bg-[#FBFBFD] border-y border-docshield-border relative overflow-hidden"
    >
      {/* Subtle ambient gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E8F0FE]/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {title}
            </h2>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {subtext}
          </p>
        </div>

        {/* ── INTERACTIVE COUNTRY FILTER TABS ── */}
        <div className="flex justify-center mb-12 sm:mb-14">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm gap-1 sm:gap-1.5">
            {countries.map((country) => {
              const isActive = selectedCountry === country;
              const count =
                country === "All"
                  ? universities.length
                  : universities.filter((u) => u.country === country).length;

              return (
                <button
                  key={country}
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#000B33] text-white shadow-md scale-105"
                      : "text-docshield-ink-muted hover:text-docshield-ink hover:bg-[#F4F6FA]"
                  }`}
                >
                  {country !== "All" && <span>{countryFlags[country] || "🌐"}</span>}
                  <span>{country}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── INTERACTIVE INSTITUTION LEDGER GRID WITH SPOTLIGHT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16">
          {filteredUnis.map((uni) => (
            <SpotlightCard
              key={uni.name}
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className="p-7 sm:p-8 bg-white border border-docshield-border hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge: Country & Flag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-docshield-lavender text-docshield-accent border border-docshield-primary-light/50">
                    <span>{countryFlags[uni.country] || "🌐"}</span>
                    <span>{uni.country}</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-docshield-accent transition-colors">
                    NMC COMPLIANT
                  </span>
                </div>

                {/* University Name */}
                <h3 className="text-xl font-bold text-docshield-ink tracking-tight mb-2 group-hover:text-docshield-primary transition-colors">
                  {uni.name}
                </h3>

                {/* Country and Est Year */}
                <p className="text-xs text-docshield-ink-muted flex items-center gap-1.5 mb-5">
                  <Building2 className="w-3.5 h-3.5 text-docshield-accent shrink-0" />
                  <span>{uni.country}</span>
                  <span className="text-slate-300">•</span>
                  <span>Est. {uni.estYear}</span>
                </p>

                {/* Tuition Chip */}
                <div className="p-3.5 rounded-xl bg-docshield-subtle/70 border border-docshield-border mb-6 group-hover:border-docshield-primary-light/60 transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-docshield-ink-muted block font-semibold mb-0.5">
                    Estimated Annual Tuition
                  </span>
                  <span className="text-lg font-bold text-[#000B33]">
                    {uni.tuition}
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 mb-6">
                  {uni.highlights?.map((hl) => (
                    <div key={hl} className="flex items-start gap-2 text-xs text-docshield-ink">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-docshield-border flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Direct Admission
                </span>
                <Link
                  href="#counselling"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-docshield-primary hover:text-docshield-accent transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Global Directory Link with Sliding Arrow */}
        <div className="text-center">
          <SlidingArrowButton
            href="#counselling"
            variant="primary"
            size="lg"
          >
            Explore Complete 150+ University Catalog
          </SlidingArrowButton>
        </div>
      </div>
    </section>
  );
}
