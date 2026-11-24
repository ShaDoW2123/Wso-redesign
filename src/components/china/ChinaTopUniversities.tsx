"use client";

import { useState } from "react";
import Link from "next/link";
import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { SlidingArrowButton } from "@/components/ui/SlidingArrowButton";
import {
  Building2,
  CircleDollarSign,
  MapPin,
  ShieldCheck,
  LayoutGrid,
  Table,
} from "lucide-react";

export default function ChinaTopUniversities() {
  const { topUniversities } = chinaContent;
  const { universities, pill, title, intro } = topUniversities;

  const cities = ["All", ...Array.from(new Set(universities.map((u) => u.city)))];
  const [selectedCity, setSelectedCity] = useState("All");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const filtered =
    selectedCity === "All"
      ? universities
      : universities.filter((u) => u.city === selectedCity);

  return (
    <section
      id="top-universities"
      className="py-24 sm:py-32 bg-[#F8FAFD] border-y border-[#E6EFF8] relative overflow-hidden"
    >
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[500px] bg-[#BFD7FF]/25 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {title}
            </h2>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        {/* ── CITY FILTER PILLS & VIEW TOGGLE ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* City Filter Pills */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm gap-1">
            {cities.map((city) => {
              const isActive = selectedCity === city;
              const count =
                city === "All"
                  ? universities.length
                  : universities.filter((u) => u.city === city).length;

              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#000B33] text-white shadow-xs scale-102"
                      : "text-slate-600 hover:text-docshield-ink hover:bg-slate-100"
                  }`}
                >
                  <span>{city}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/25 text-white" : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "cards"
                  ? "bg-[#000B33] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "table"
                  ? "bg-[#000B33] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* ── VIEW 1: DETAILED CARDS ── */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-14">
            {filtered.map((uni) => (
              <SpotlightCard
                key={uni.name}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className="p-7 sm:p-8 bg-white rounded-3xl border border-[#E6EFF8] shadow-[0_4px_24px_-4px_rgba(0,11,51,0.04)] hover:shadow-card-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: City + Rank Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F7FC] text-docshield-ink border border-[#DCE4F0]">
                      <MapPin className="w-3 h-3 text-[#2F4E82]" />
                      <span>{uni.city}</span>
                    </span>

                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {uni.rank}
                    </span>
                  </div>

                  {/* University Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-2.5 leading-snug">
                    {uni.name}
                  </h3>

                  {/* Highlight */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {uni.highlight}
                  </p>

                  {/* Tuition Ledger Box */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] mb-5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">
                        ESTIMATED ANNUAL TUITION
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#000B33] block mt-0.5">
                        {uni.tuition}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE4F0] flex items-center justify-center text-[#2F4E82]">
                      <CircleDollarSign className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Details: Location + Recognition */}
                  <div className="space-y-2 text-xs text-docshield-ink-muted mb-6 border-t border-slate-100 pt-4">
                    <div className="flex items-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#2F4E82] shrink-0 mt-0.5" />
                      <span>{uni.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{uni.recognition}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-2 border-t border-slate-100">
                  <SlidingArrowButton
                    href="#counselling"
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    Check Eligibility & Admission
                  </SlidingArrowButton>
                </div>
              </SpotlightCard>
            ))}
          </div>
        ) : (
          /* ── VIEW 2: OFFICIAL AUDIT LEDGER TABLE ── */
          <div className="bg-white rounded-3xl border border-[#E6EFF8] shadow-md overflow-hidden mb-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FAFD] border-b border-[#E6EFF8] text-slate-600 font-mono uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="py-4 px-6">University Name</th>
                    <th className="py-4 px-6">City</th>
                    <th className="py-4 px-6">World / National Rank</th>
                    <th className="py-4 px-6">Approx. Tuition / Year</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((uni) => (
                    <tr key={uni.name} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-docshield-ink">
                        {uni.name}
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        {uni.city}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {uni.rank}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-[#000B33]">
                        {uni.tuition}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          href="#counselling"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#2F4E82] hover:text-[#000B33]"
                        >
                          <span>Apply</span>
                          <span>→</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
