"use client";

import { useState } from "react";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function RegulatorySection() {
  const { regulatory } = homeContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const chips = [
    "NMC 2021 Gazette",
    "54 Months Theory & Clinicals",
    "12 Months Internship",
    "English Medium Instruction",
    "FMGE & NExT Alignment",
    "Host Country License",
  ];

  const metaConfig = [
    {
      category: "REGULATORY BODY",
      authority: "National Medical Commission Act 2019",
      icon: <ShieldCheck className="w-5 h-5 text-[#3B5E9B]" />,
      badge: "bg-[#EEF3FA] text-[#2F4E82] border-[#D0DDF2]",
      highlight: "from-[#3B5E9B]/10 via-transparent to-transparent",
    },
    {
      category: "SCREENING SYSTEM",
      authority: "National Board of Examinations (NBE)",
      icon: <Award className="w-5 h-5 text-[#1C3260]" />,
      badge: "bg-[#EAEFF8] text-[#1C3260] border-[#BAC9E5]",
      highlight: "from-[#1C3260]/10 via-transparent to-transparent",
    },
    {
      category: "FUTURE FRAMEWORK",
      authority: "Unified Medical Licensure Directive",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      highlight: "from-amber-500/10 via-transparent to-transparent",
    },
  ];

  const currentCard = regulatory.cards[activeIndex];
  const currentMeta = metaConfig[activeIndex];

  return (
    <section
      id="regulatory-framework"
      className="py-24 sm:py-32 bg-white border-y border-docshield-border relative overflow-hidden"
    >
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#EBF3FF]/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {regulatory.badge}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {regulatory.title}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {regulatory.description}
          </p>
        </div>

        {/* ── SMOOTH PILL SWITCHER ── */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#F4F6FA] border border-[#E4E8F0] shadow-inner gap-1 sm:gap-2">
            {regulatory.cards.map((card, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={card.acronym}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#000B33] text-white shadow-md scale-[1.02]"
                      : "text-docshield-ink-muted hover:text-docshield-ink hover:bg-white/70"
                  }`}
                >
                  <span className="font-bold tracking-tight">{card.acronym}</span>
                  <span className="hidden md:inline-block text-[11px] opacity-75 font-normal">
                    · {card.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MINIMALIST BIG TYPOGRAPHY SPOTLIGHT CARD ── */}
        <div className="relative rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_20px_60px_-15px_rgba(0,11,51,0.06)] overflow-hidden transition-all duration-500 mb-14">
          {/* Subtle top accent gradient */}
          <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${currentMeta.highlight}`} />

          {/* Giant Typographic Watermark Background */}
          <div className="absolute right-4 bottom-2 sm:right-8 sm:bottom-0 text-[120px] sm:text-[220px] font-black text-slate-900/[0.03] select-none pointer-events-none leading-none tracking-tighter">
            {currentCard.acronym}
          </div>

          <div className="p-8 sm:p-12 md:p-16 relative z-10">
            {/* Top Meta Line */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-[#F0F2F6]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] font-semibold text-[#6E7B8B]">
                  {currentMeta.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${currentMeta.badge}`}>
                  {currentCard.tagline}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% GAZETTE COMPLIANT
              </span>
            </div>

            {/* Big Headline Block */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                <h3 className="text-4xl sm:text-6xl font-bold text-docshield-ink tracking-tight">
                  {currentCard.acronym}
                </h3>
                <span className="text-xl sm:text-2xl font-semibold text-docshield-ink/80">
                  — {currentCard.name}
                </span>
              </div>

              {/* Verbatim Description */}
              <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-3xl">
                {currentCard.description}
              </p>
            </div>

            {/* 3 Key Points in Ultra-Clean Cards */}
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-mono font-semibold text-[#8A95A5] mb-4">
                Statutory Mandates & Directives
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentCard.points.map((pt, pIdx) => (
                  <div
                    key={pt}
                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E9EFF7] hover:border-[#BFD7FF] hover:bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#000B33] text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                        {pIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-docshield-ink leading-relaxed">
                        {pt}
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 text-right pt-2 border-t border-slate-200/50">
                      MANDATE 0{pIdx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Citation Footnote */}
            <div className="mt-8 pt-6 border-t border-[#F0F2F6] flex flex-wrap items-center justify-between text-xs text-docshield-ink-muted">
              <span>Authority Framework: {currentMeta.authority}</span>
              <span className="font-mono text-[11px]">VERIFIED FOR 2026-2027 INTAKE</span>
            </div>
          </div>
        </div>

        {/* ── GAZETTE COMPLIANCE CHIPS ── */}
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-docshield-ink-muted mb-4">
            Official Gazette Compliance Directives
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#F4F7FC] border border-[#DCE4F0] text-docshield-ink shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{chip}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── DOWNLOAD CTA ── */}
        <div className="text-center space-y-3">
          <div>
            <Link
              href="#counselling"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#000B33] text-white hover:bg-[#3B5E9B] font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
              <span>Download Official NMC Compliance Guide</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
          <p className="text-xs text-docshield-ink-muted">
            Compliant with National Medical Commission Foreign Medical Graduate Licentiate (FMGL) Regulations 2021
          </p>
        </div>

      </div>
    </section>
  );
}
