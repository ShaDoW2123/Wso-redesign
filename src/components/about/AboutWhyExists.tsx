"use client";

import { aboutContent } from "@/data/aboutContent";
import { AlertCircle, HelpCircle, ShieldAlert } from "lucide-react";

export default function AboutWhyExists() {
  const { whyExists } = aboutContent;

  return (
    <section id="why-exists" className="py-24 sm:py-32 bg-docshield-subtle/40 border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {whyExists.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {whyExists.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {whyExists.description}
          </p>
        </div>

        {/* 4 Diagnostic Trap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-10">
          {whyExists.traps.map((trap) => (
            <div
              key={trap.num}
              className="rounded-3xl p-7 bg-white border border-docshield-border hover:border-docshield-primary-light hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-docshield-accent px-2.5 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40">
                    {trap.num}
                  </span>
                  <AlertCircle className="w-4 h-4 text-slate-400 group-hover:text-docshield-accent transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-docshield-ink mb-3">
                  {trap.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {trap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 5TH CRITICAL BLINDSPOT FULL-WIDTH CARD ── */}
        <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white border border-[#EFEFEF] shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Blindspot title & description */}
            <div className="lg:col-span-6">
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-widest text-docshield-accent px-3 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40 mb-4">
                {whyExists.criticalBlindspot.tag}
              </span>

              <h3 className="text-2xl sm:text-3xl font-normal text-docshield-ink tracking-tight mb-4">
                {whyExists.criticalBlindspot.title}
              </h3>

              <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed mb-6 font-normal">
                {whyExists.criticalBlindspot.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-docshield-ink">
                <ShieldAlert className="w-4 h-4 text-docshield-accent" />
                <span>We Study Overseas provides guaranteed statutory licensing verification</span>
              </div>
            </div>

            {/* Right: The 3 Critical Student Questions */}
            <div className="lg:col-span-6 space-y-3.5">
              {whyExists.criticalBlindspot.questions.map((q) => (
                <div
                  key={q}
                  className="p-4 sm:p-5 rounded-2xl bg-docshield-subtle/70 border border-docshield-border hover:border-docshield-primary-light transition-all flex items-start gap-3.5"
                >
                  <HelpCircle className="w-5 h-5 text-docshield-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-docshield-ink leading-snug">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
