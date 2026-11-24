"use client";

import { useState } from "react";
import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  Calculator,
  Receipt,
  Home,
  Utensils,
  Wallet,
  Wifi,
  Train,
  ShieldAlert,
} from "lucide-react";

export default function ChinaFeesAndCost() {
  const { feesStructure, costOfLiving } = chinaContent;
  const [budgetLakhs, setBudgetLakhs] = useState<number>(24);

  // Dynamic breakdown for China MBBS 6-year package (based on budget slider)
  const tuitionEst = (budgetLakhs * 0.62).toFixed(1);
  const hostelEst = (budgetLakhs * 0.18).toFixed(1);
  const foodLivingEst = (budgetLakhs * 0.14).toFixed(1);
  const visaAdminEst = (budgetLakhs * 0.06).toFixed(1);

  const breakdownIcons = [Receipt, Home, Utensils, Wallet];
  const livingIcons = [Home, Utensils, Train, Wifi];

  return (
    <section id="fees-structure" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {feesStructure.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {feesStructure.title}
            </h2>
          </MaskedReveal>

          <div className="space-y-2">
            {feesStructure.overview.map((p, idx) => (
              <p key={idx} className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* ── INTERACTIVE 6-YEAR BUDGET PLANNER SLIDER ── */}
        <div className="mb-20">
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.4}
            spotlightSize={500}
            className="p-8 sm:p-10 bg-white border border-[#BFD7FF] rounded-3xl shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 pb-6 border-b border-docshield-border">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-primary-light/50">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink">
                    Interactive China 6-Year Budget Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted">
                    Drag the slider to preview realistic total 6-year expenses (Tuition + Hostel + Living)
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <span className="text-xs font-mono uppercase tracking-wider text-docshield-ink-muted block">
                  Estimated Total Budget
                </span>
                <span className="text-3xl sm:text-4xl font-normal text-[#000B33] tracking-tight">
                  ₹{budgetLakhs} Lakhs
                </span>
              </div>
            </div>

            {/* Slider Control */}
            <div className="mb-8">
              <input
                type="range"
                min="18"
                max="40"
                step="1"
                value={budgetLakhs}
                onChange={(e) => setBudgetLakhs(Number(e.target.value))}
                className="w-full h-2.5 bg-docshield-lavender rounded-lg appearance-none cursor-pointer accent-docshield-primary"
              />
              <div className="flex justify-between text-xs text-docshield-ink-muted font-medium mt-3">
                <span>₹18 Lakhs (Economy Provincial Universities)</span>
                <span className="text-docshield-primary font-bold">Selected: ₹{budgetLakhs}L All-Inclusive</span>
                <span>₹40 Lakhs (Top Tier-1 Capital Campuses)</span>
              </div>
            </div>

            {/* Real-time Math Output Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">6-Year Tuition (~62%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{tuitionEst}L</span>
              </div>
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">Campus Hostel (~18%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{hostelEst}L</span>
              </div>
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">Food & Living (~14%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{foodLivingEst}L</span>
              </div>
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">Visa & Insurance (~6%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{visaAdminEst}L</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* ── 4 OFFICIAL BREAKDOWN CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {feesStructure.breakdown.map((item, idx) => {
            const Icon = breakdownIcons[idx % breakdownIcons.length];
            return (
              <SpotlightCard
                key={item.item}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.3}
                className="p-6 bg-white rounded-3xl border border-[#E8EEF5] flex flex-col justify-between hover:shadow-card-soft transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-docshield-ink mb-2">
                    {item.item}
                  </h4>
                  <p className="text-xs text-docshield-ink-muted leading-relaxed">
                    {item.cost}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Low-Budget Universities Table */}
        <div className="rounded-3xl p-8 sm:p-10 bg-docshield-subtle/80 border border-docshield-border mb-24">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-2">
              Low-Budget MOE Chinese Medical Universities
            </h3>
            <p className="text-xs sm:text-sm text-docshield-ink-muted">
              {feesStructure.lowBudgetUniversitiesIntro}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FAFD] border-b border-[#E2E8F0] text-slate-600 font-mono uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="py-3.5 px-6">University Name</th>
                    <th className="py-3.5 px-6">Location</th>
                    <th className="py-3.5 px-6">Approx. Tuition / Year</th>
                    <th className="py-3.5 px-6">Approx. Hostel / Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {feesStructure.lowBudgetUniversities.map((uni) => (
                    <tr key={uni.name} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-bold text-docshield-ink">
                        {uni.name}
                      </td>
                      <td className="py-3.5 px-6 text-slate-600">
                        {uni.location}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-[#000B33]">
                        {uni.tuition}
                      </td>
                      <td className="py-3.5 px-6 text-slate-700">
                        {uni.hostel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[11px] text-docshield-ink-muted italic">
            {feesStructure.footerNote}
          </p>
        </div>

        {/* ── PART 2: COST OF LIVING IN CHINA ── */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {costOfLiving.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {costOfLiving.title}
              </h2>
            </MaskedReveal>

            <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed">
              {costOfLiving.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {costOfLiving.categories.map((cat, idx) => {
              const Icon = livingIcons[idx % livingIcons.length];
              return (
                <div
                  key={cat.category}
                  className="p-6 bg-white rounded-3xl border border-[#E8EEF5] shadow-xs hover:shadow-card-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-docshield-ink mb-2">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-docshield-ink-muted leading-relaxed">
                    {cat.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Special Notes & Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {costOfLiving.notes.map((note, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-start gap-3 text-xs text-docshield-ink leading-relaxed"
              >
                <ShieldAlert className="w-4 h-4 text-[#2F4E82] shrink-0 mt-0.5" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
