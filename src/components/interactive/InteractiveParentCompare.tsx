"use client";

import { useState } from "react";
import { homeContent } from "@/data/homeContent";
import { ShieldCheck, UtensilsCrossed, Stethoscope, CheckCircle2, XCircle, SlidersHorizontal, Table } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function InteractiveParentCompare() {
  const { parentGuide, comparisons } = homeContent;
  const [activeMetricIdx, setActiveMetricIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"matrix" | "spotlight">("spotlight");

  const guideIcons = [ShieldCheck, UtensilsCrossed, Stethoscope];
  const activeMetric = comparisons.comparisonPoints[activeMetricIdx];

  return (
    <section id="parent-guide" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Parent Guide Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {parentGuide.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {parentGuide.title}
          </h2>
          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {parentGuide.subtext}
          </p>
        </div>

        {/* 3 Pillar Cards for Parents with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-28">
          {parentGuide.highlights.map((item, idx) => {
            const Icon = guideIcons[idx % guideIcons.length];
            return (
              <SpotlightCard
                key={item.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className="p-8 bg-docshield-lavender/50 border border-docshield-primary-light/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-docshield-accent mb-6 border border-docshield-border">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-docshield-ink mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-docshield-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Comparison Engine */}
        <div id="comparisons" className="rounded-3xl p-8 sm:p-12 bg-docshield-subtle/70 border border-docshield-border-card/70 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {comparisons.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
              {comparisons.title}
            </h2>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-xl mx-auto mb-6">
              {comparisons.subtext}
            </p>

            {/* Mode Switcher Pills */}
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-docshield-border shadow-xs gap-1">
              <button
                type="button"
                onClick={() => setViewMode("spotlight")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === "spotlight"
                    ? "bg-[#000B33] text-white shadow-xs"
                    : "text-docshield-ink-muted hover:text-docshield-ink"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Spotlight</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("matrix")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === "matrix"
                    ? "bg-[#000B33] text-white shadow-xs"
                    : "text-docshield-ink-muted hover:text-docshield-ink"
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Full Audit Table</span>
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: INTERACTIVE SPOTLIGHT COMPARISON */}
          {viewMode === "spotlight" && (
            <div className="space-y-6">
              {/* Metric Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {comparisons.comparisonPoints.map((row, idx) => (
                  <button
                    key={row.feature}
                    type="button"
                    onClick={() => setActiveMetricIdx(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                      activeMetricIdx === idx
                        ? "bg-[#2F4E82] text-white border-[#2F4E82] shadow-xs"
                        : "bg-white text-docshield-ink border-docshield-border hover:border-docshield-accent/50"
                    }`}
                  >
                    {row.feature}
                  </button>
                ))}
              </div>

              {/* Side-by-Side Dual Spotlight Cards for the selected metric */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Indian Private */}
                <div className="p-7 rounded-2xl bg-white border border-red-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-600 block mb-2">
                      INDIA PRIVATE MEDICAL SEATS
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {activeMetric.feature}
                    </h3>
                    <div className="p-4 rounded-xl bg-red-50/60 border border-red-100 flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {activeMetric.indiaPrivate}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">
                    High financial risk & arbitrary admission markups
                  </span>
                </div>

                {/* Abroad Government */}
                <SpotlightCard
                  theme="light"
                  spotlightColor="#BFD7FF"
                  intensity={0.4}
                  className="p-7 bg-[#F2F7FF] border border-[#BFD7FF] shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2F4E82] block mb-2">
                      ABROAD GOVT UNIVERSITIES
                    </span>
                    <h3 className="text-xl font-bold text-[#000B33] mb-4">
                      {activeMetric.feature}
                    </h3>
                    <div className="p-4 rounded-xl bg-white border border-[#BFD7FF]/80 flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-[#000B33] leading-relaxed font-semibold">
                        {activeMetric.abroadGovt}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 mt-6 pt-4 border-t border-[#BFD7FF]/60 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    NMC 2021 Gazette Verified Guarantee
                  </span>
                </SpotlightCard>
              </div>
            </div>
          )}

          {/* VIEW MODE 2: FULL AUDIT TABLE */}
          {viewMode === "matrix" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-docshield-border text-xs sm:text-sm font-semibold text-docshield-ink uppercase tracking-wider">
                    <th className="py-4 px-4 w-1/3">Evaluation Metric</th>
                    <th className="py-4 px-4 w-1/3 text-red-700 bg-red-50/50 rounded-t-xl">India Private Medical Seats</th>
                    <th className="py-4 px-4 w-1/3 text-docshield-primary bg-docshield-lavender/60 rounded-t-xl">Abroad Govt Universities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-docshield-border text-xs sm:text-sm">
                  {comparisons.comparisonPoints.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/80 transition-colors">
                      <td className="py-4 px-4 font-semibold text-docshield-ink">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-docshield-ink-muted bg-red-50/30">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{row.indiaPrivate}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium text-docshield-ink bg-docshield-lavender/30">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.abroadGovt}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
