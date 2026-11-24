"use client";

import { useState } from "react";
import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  CheckCircle2,
  XCircle,
  ThumbsUp,
  Briefcase,
  HelpCircle,
  AlertTriangle,
  Check,
  ShieldCheck,
} from "lucide-react";

export default function ChinaStrategicReview() {
  const {
    worthItReview,
    advantages,
    challenges,
    countryComparisons,
    careerOpportunities,
    expertOpinion,
    conclusion,
  } = chinaContent;

  const [activeCompareCountry, setActiveCompareCountry] = useState("Russia");

  const selectedComparison =
    countryComparisons.comparisons.find(
      (c) => c.country.toLowerCase() === activeCompareCountry.toLowerCase()
    ) || countryComparisons.comparisons[0];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── PART 1: IS MBBS IN CHINA WORTH IT IN 2026? ── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {worthItReview.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
                {worthItReview.title}
              </h2>
            </MaskedReveal>

            <div className="space-y-2">
              {worthItReview.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Who Should Choose vs Who May Prefer Other Countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Who Should Choose */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFD] border border-[#E6EFF8] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-emerald-800">
                  <ThumbsUp className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-docshield-ink">
                    Who Should Choose China
                  </h3>
                </div>
                <div className="space-y-3">
                  {worthItReview.whoShouldChoose.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-docshield-ink font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Who May Prefer Other Countries */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFBF8] border border-[#FDE8D7] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-[#9A4C00]">
                  <HelpCircle className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-docshield-ink">
                    Who May Prefer Other Countries
                  </h3>
                </div>
                <div className="space-y-3">
                  {worthItReview.whoMayPreferOther.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-docshield-ink font-medium">
                      <XCircle className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pros vs Cons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-white border border-[#E6EFF8] shadow-xs">
              <h4 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Pros</span>
              </h4>
              <div className="space-y-2.5">
                {worthItReview.pros.map((pro) => (
                  <div key={pro} className="flex items-center gap-2.5 text-xs sm:text-sm text-docshield-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{pro}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E6EFF8] shadow-xs">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-slate-600" />
                <span>Cons</span>
              </h4>
              <div className="space-y-2.5">
                {worthItReview.cons.map((con) => (
                  <div key={con} className="flex items-center gap-2.5 text-xs sm:text-sm text-docshield-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verdict Box */}
          <div className="p-7 sm:p-8 rounded-3xl bg-docshield-lavender/50 border border-docshield-primary-light/50 space-y-2 text-xs sm:text-sm text-docshield-ink leading-relaxed">
            {worthItReview.verdict.map((v, idx) => (
              <p key={idx}>{v}</p>
            ))}
          </div>
        </div>

        {/* ── PART 2: ADVANTAGES & CHALLENGES DETAILED ── */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Advantages */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFD] border border-[#E6EFF8]">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#2F4E82] block mb-1">
                  {advantages.pill}
                </span>
                <h3 className="text-2xl font-bold text-docshield-ink mb-3">
                  {advantages.title}
                </h3>
                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {advantages.intro}
                </p>
              </div>

              <div className="space-y-4">
                {advantages.benefits.map((b) => (
                  <div key={b.title} className="p-5 rounded-2xl bg-white border border-[#E6EFF8]">
                    <h4 className="text-sm font-bold text-docshield-ink mb-1">
                      {b.title}
                    </h4>
                    <p className="text-xs text-docshield-ink-muted leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFD] border border-[#E6EFF8]">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-500 block mb-1">
                  {challenges.pill}
                </span>
                <h3 className="text-2xl font-bold text-docshield-ink mb-3">
                  {challenges.title}
                </h3>
                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {challenges.intro}
                </p>
              </div>

              <div className="space-y-4">
                {challenges.challenges.map((c) => (
                  <div key={c.title} className="p-5 rounded-2xl bg-white border border-[#E6EFF8]">
                    <h4 className="text-sm font-bold text-docshield-ink mb-1">
                      {c.title}
                    </h4>
                    <p className="text-xs text-docshield-ink-muted leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PART 3: MBBS IN CHINA VS OTHER COUNTRIES ── */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-docshield-subtle/80 border border-docshield-border mb-24">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {countryComparisons.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {countryComparisons.title}
              </h2>
            </MaskedReveal>

            <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
              {countryComparisons.intro}
            </p>
          </div>

          {/* Country Selection Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {countryComparisons.comparisons.map((c) => (
              <button
                key={c.country}
                type="button"
                onClick={() => setActiveCompareCountry(c.country)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCompareCountry.toLowerCase() === c.country.toLowerCase()
                    ? "bg-[#000B33] text-white shadow-xs scale-102"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-[#E2E8F0]"
                }`}
              >
                China vs {c.country}
              </button>
            ))}
          </div>

          {/* Active Comparison Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-6">
              {selectedComparison.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F4E82] block mb-2">
                  Cost Comparison
                </span>
                <p className="text-xs sm:text-sm text-docshield-ink leading-relaxed">
                  {selectedComparison.cost}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F4E82] block mb-2">
                  Admission Procedure
                </span>
                <p className="text-xs sm:text-sm text-docshield-ink leading-relaxed">
                  {selectedComparison.admission}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F4E82] block mb-2">
                  Infrastructure & Clinical Exposure
                </span>
                <p className="text-xs sm:text-sm text-docshield-ink leading-relaxed">
                  {selectedComparison.infrastructure}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── PART 4: CAREER OPPORTUNITIES AFTER MBBS IN CHINA ── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {careerOpportunities.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {careerOpportunities.title}
              </h2>
            </MaskedReveal>

            <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
              {careerOpportunities.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {careerOpportunities.careers.map((career) => (
              <SpotlightCard
                key={career.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.3}
                className="p-7 bg-white rounded-3xl border border-[#E8EEF5] shadow-xs flex flex-col justify-between hover:shadow-card-soft transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-docshield-ink mb-2">
                    {career.title}
                  </h4>
                  <p className="text-xs text-docshield-ink-muted leading-relaxed">
                    {career.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <p className="text-center text-xs text-docshield-ink-muted italic">
            {careerOpportunities.footer}
          </p>
        </div>

        {/* ── PART 5: EXPERT OPINION FROM WESTUDY OVERSEAS & CONCLUSION ── */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#000B33] text-white shadow-2xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFD7FF] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BFD7FF]">
                {expertOpinion.pill}
              </span>
              <div className="w-8 h-px bg-[#BFD7FF]/40" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight mb-4">
                {expertOpinion.title}
              </h2>
            </MaskedReveal>

            <div className="space-y-3">
              {expertOpinion.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* 5 Evaluation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expertOpinion.pillars.map((pil) => (
              <div
                key={pil.title}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#BFD7FF] mb-2">
                    {pil.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {pil.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed border-t border-white/15 pt-6 mb-12">
            {expertOpinion.summary}
          </p>

          {/* ── CONCLUSION & FINAL RECOMMENDATION ── */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white/10 border border-white/20">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#BFD7FF] block mb-2">
              {conclusion.pill}
            </span>
            <h3 className="text-2xl font-bold mb-3">
              {conclusion.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/85 mb-6">
              {conclusion.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {conclusion.reasons.map((r) => (
                <div key={r.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-bold text-[#BFD7FF] mb-1">
                    {r.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/15 border border-[#BFD7FF]/40 flex items-start gap-3 text-xs text-white">
              <ShieldCheck className="w-4 h-4 text-[#BFD7FF] shrink-0 mt-0.5" />
              <span>{conclusion.warning}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
