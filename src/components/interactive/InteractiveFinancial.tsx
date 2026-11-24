"use client";

import { useState } from "react";
import { homeContent } from "@/data/homeContent";
import {
  Receipt,
  Home,
  Utensils,
  ShieldPlus,
  Plane,
  Award,
  Building2,
  Landmark,
  Calculator,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";

export default function InteractiveFinancial() {
  const { financialPlanning, scholarships } = homeContent;
  const [budgetLakhs, setBudgetLakhs] = useState<number>(28);

  const costIcons = [Receipt, Home, Utensils, ShieldPlus, Plane];
  const scholarshipIcons = [Award, Building2, Landmark];

  // Dynamic breakdown math based on total 6-year budget
  const tuitionEst = (budgetLakhs * 0.62).toFixed(1);
  const hostelEst = (budgetLakhs * 0.20).toFixed(1);
  const livingEst = (budgetLakhs * 0.12).toFixed(1);
  const visaInsEst = (budgetLakhs * 0.06).toFixed(1);

  return (
    <section id="financial-planning" className="py-24 sm:py-32 bg-docshield-subtle/50 border-y border-docshield-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cost Ledger Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {financialPlanning.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>
          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {financialPlanning.title}
            </h2>
          </MaskedReveal>
          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {financialPlanning.subtext}
          </p>
        </div>

        {/* ── NEW INTERACTION: REAL-TIME 6-YEAR BUDGET ESTIMATOR ── */}
        <div className="mb-20">
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.4}
            spotlightSize={500}
            className="p-8 sm:p-10 bg-white border border-[#BFD7FF] shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 pb-6 border-b border-docshield-border">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-primary-light/50">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink">
                    Interactive 6-Year Budget Planner
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted">
                    Drag the slider to preview realistic total all-inclusive medical education expenses
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-docshield-ink-muted block font-semibold">
                  Estimated Total Budget
                </span>
                <span className="text-3xl sm:text-4xl font-normal text-[#000B33] tracking-tight">
                  ₹{budgetLakhs} Lakhs
                </span>
              </div>
            </div>

            {/* Slider Control */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-semibold text-docshield-ink-muted mb-2">
                <span>₹18 Lakhs (Economy Hubs)</span>
                <span className="text-docshield-accent font-bold">Selected: ₹{budgetLakhs}L All-Inclusive</span>
                <span>₹50 Lakhs (Premium Capitals)</span>
              </div>
              <input
                type="range"
                min="18"
                max="50"
                step="1"
                value={budgetLakhs}
                onChange={(e) => setBudgetLakhs(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2F4E82]"
              />
            </div>

            {/* Breakdown Chips Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">6-Year Tuition (~62%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{tuitionEst}L</span>
              </div>
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">Campus Hostel (~20%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{hostelEst}L</span>
              </div>
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">Living & Meals (~12%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{livingEst}L</span>
              </div>
              <div className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border text-center">
                <span className="text-xs text-docshield-ink-muted block mb-1">Insurance & Visa (~6%)</span>
                <span className="text-lg font-bold text-[#000B33]">₹{visaInsEst}L</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* 5 Cost Cards with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {financialPlanning.cards.map((card, idx) => {
            const Icon = costIcons[idx % costIcons.length];
            return (
              <SpotlightCard
                key={card.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.3}
                className="p-7 bg-white border border-docshield-border-card/60 hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-primary mb-5 border border-docshield-primary-light/40">
                  <Icon className="w-5 h-5 text-docshield-accent" />
                </div>
                <h3 className="text-lg font-semibold text-docshield-ink mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {card.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Scholarships Sub-section */}
        <div id="scholarships" className="pt-8 border-t border-docshield-border">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {scholarships.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
                {scholarships.title}
              </h2>
            </MaskedReveal>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {scholarships.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {scholarships.cards.map((item, idx) => {
              const Icon = scholarshipIcons[idx % scholarshipIcons.length];
              return (
                <SpotlightCard
                  key={item.title}
                  theme="light"
                  spotlightColor="#BFD7FF"
                  intensity={0.35}
                  className="p-7 bg-white border border-docshield-border-card/60 hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-primary mb-5 border border-docshield-primary-light/40">
                    <Icon className="w-5 h-5 text-docshield-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-docshield-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
