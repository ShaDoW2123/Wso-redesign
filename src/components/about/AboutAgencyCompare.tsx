"use client";

import { aboutContent } from "@/data/aboutContent";
import { X, Check, ShieldCheck, AlertTriangle } from "lucide-react";

export default function AboutAgencyCompare() {
  const { agencyComparison } = aboutContent;
  const { traditional, wso } = agencyComparison;

  return (
    <section id="agency-compare" className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {agencyComparison.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {agencyComparison.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {agencyComparison.subtext}
          </p>
        </div>

        {/* 2-Column Side-by-Side Audit Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Traditional Agencies (Red Crosses / Subdued Muted Card) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                    Traditional Agencies
                  </h3>
                  <span className="text-xs text-slate-500">
                    Commercial recruitment model
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100/80 text-red-700 border border-red-200">
                  {traditional.badge}
                </span>
              </div>

              <div className="space-y-6">
                {traditional.points.map((pt) => (
                  <div key={pt.title} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 text-red-600">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-1">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>High risk of non-compliant universities & hidden commissions</span>
            </div>
          </div>

          {/* We Study Overseas (Green Checkmarks / Elevated Clinical Card) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#F2F7FF] border border-[#BFD7FF] shadow-card-soft flex flex-col justify-between relative overflow-hidden">
            {/* Top highlight bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#4C6DA6]" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#BFD7FF]/60">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#000B33]">
                    We Study Abroad
                  </h3>
                  <span className="text-xs text-docshield-accent">
                    Institutional medical advisory
                  </span>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#000B33] text-white shadow-xs">
                  {wso.badge}
                </span>
              </div>

              <div className="space-y-6">
                {wso.points.map((pt) => (
                  <div key={pt.title} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-700">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#000B33] mb-1">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#BFD7FF]/60 flex items-center gap-2 text-xs font-semibold text-[#000B33]">
              <ShieldCheck className="w-4 h-4 text-[#2F4E82]" />
              <span>Guaranteed 100% student-aligned counsel with legal contract</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
