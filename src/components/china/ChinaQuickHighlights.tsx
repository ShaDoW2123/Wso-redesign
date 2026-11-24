"use client";

import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  Clock,
  GraduationCap,
  Award,
  CircleDollarSign,
  Building,
  Languages,
  CheckCircle2,
  Wallet,
} from "lucide-react";

export default function ChinaQuickHighlights() {
  const { quickHighlights } = chinaContent;

  const featureIcons: Record<string, any> = {
    "Course Duration": Clock,
    "Eligibility": GraduationCap,
    "NEET Requirement": Award,
    "Tuition Fees": CircleDollarSign,
    "Hostel Fees": Building,
    "Medium of Instruction": Languages,
    "FMGE/NExT Eligibility": CheckCircle2,
    "Living Cost": Wallet,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {quickHighlights.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {quickHighlights.title}
            </h2>
          </MaskedReveal>
        </div>

        {/* Clinical Spec Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {quickHighlights.table.map((row) => {
            const Icon = featureIcons[row.feature] || CheckCircle2;

            return (
              <SpotlightCard
                key={row.feature}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className={`p-6 sm:p-7 bg-white rounded-3xl border border-[#E8EEF5] shadow-[0_4px_20px_-4px_rgba(0,11,51,0.04)] hover:shadow-card-soft transition-all duration-300 flex flex-col justify-between ${
                  row.feature === "FMGE/NExT Eligibility"
                    ? "md:col-span-2 lg:col-span-2"
                    : row.feature === "Living Cost"
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-docshield-lavender border border-docshield-primary-light/40 flex items-center justify-center text-docshield-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-500 block mb-1.5">
                    {row.feature}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#000B33] leading-snug">
                    {row.details}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
