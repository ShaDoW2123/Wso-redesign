"use client";

import { useState } from "react";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  ShieldCheck 
} from "lucide-react";

export default function UniversitiesSection() {
  const { featuredUniversitiesSection } = homeContent;
  const { universities, pill, title, subtext } = featuredUniversitiesSection;

  // Country flags mapping
  const countryFlags: Record<string, string> = {
    Georgia: "🇬🇪",
    Russia: "🇷🇺",
    Uzbekistan: "🇺🇿",
    Kazakhstan: "🇰🇿",
    Kyrgyzstan: "🇰🇬",
  };

  // Distinct countries for filter tabs
  const countries = ["All", ...Array.from(new Set(universities.map((u) => u.country)))];
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredUnis = selectedCountry === "All" 
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {subtext}
          </p>
        </div>

        {/* ── INTERACTIVE COUNTRY FILTER TABS ── */}
        <div className="flex justify-center mb-12 sm:mb-14">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs gap-1 sm:gap-1.5">
            {countries.map((country) => {
              const isActive = selectedCountry === country;
              const count = country === "All" 
                ? universities.length 
                : universities.filter((u) => u.country === country).length;

              return (
                <button
                  key={country}
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#000B33] text-white shadow-sm"
                      : "text-docshield-ink-muted hover:text-docshield-ink hover:bg-[#F4F6FA]"
                  }`}
                >
                  {country !== "All" && <span>{countryFlags[country] || "🌐"}</span>}
                  <span>{country}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── CLINICAL INSTITUTION LEDGER GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16">
          {filteredUnis.map((uni) => (
            <div
              key={uni.name}
              className="group rounded-3xl bg-white border border-[#E2E8F0] p-7 sm:p-8 hover:border-[#BFD7FF] hover:shadow-[0_20px_50px_-15px_rgba(0,11,51,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top edge hairline */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#3B5E9B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Country + Est Year + Distinction Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F7FC] text-docshield-ink border border-[#DCE4F0]">
                      <span>{countryFlags[uni.country] || "🌐"}</span>
                      <span>{uni.country}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-600">
                      Est. {uni.estYear}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    {uni.badge}
                  </span>
                </div>

                {/* University Name */}
                <h3 className="text-xl font-bold text-docshield-ink mb-4 leading-snug group-hover:text-[#3B5E9B] transition-colors">
                  {uni.name}
                </h3>

                {/* 3-Column Clinical Ledger Specs Bar */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] mb-6 text-center">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-600 block">
                      TUITION
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-docshield-ink block mt-0.5">
                      {uni.tuition}
                    </span>
                  </div>

                  <div className="border-x border-slate-200/60">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-600 block">
                      DURATION
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-docshield-ink block mt-0.5">
                      {uni.duration}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-600 block">
                      MEDIUM
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-docshield-ink block mt-0.5">
                      English
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-7">
                  {uni.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-docshield-ink/85 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B5E9B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action Bar */}
              <div className="pt-5 border-t border-[#F0F2F6] flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  NMC AUDITED
                </span>

                <Link
                  href="#counselling"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#000B33] text-white hover:bg-[#3B5E9B] text-xs font-semibold transition-all duration-200 shadow-2xs group-hover:scale-[1.03]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3 h-3 text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── INSTITUTIONAL ASSURANCE FOOTNOTE BANNER ── */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EEF4FF] border border-[#BFD7FF] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-[#3B5E9B]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-docshield-ink">
                100% English Medium & On-Campus Hospital Training
              </p>
              <p className="text-xs text-docshield-ink-muted">
                Every partner medical university is verified for NMC 54-month coursework + 12-month internship compliance.
              </p>
            </div>
          </div>

          <Link
            href="#counselling"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4F7FC] hover:bg-[#EEF4FF] text-docshield-ink font-semibold text-xs border border-[#DCE4F0] transition-colors shrink-0"
          >
            <span>Request Full University Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 text-docshield-accent" />
          </Link>
        </div>

      </div>
    </section>
  );
}
