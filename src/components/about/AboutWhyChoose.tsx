"use client";

import { aboutContent } from "@/data/aboutContent";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutWhyChoose() {
  const { whyChoose } = aboutContent;

  return (
    <section id="why-choose" className="py-24 sm:py-32 bg-docshield-subtle/30 border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {whyChoose.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {whyChoose.headline}
          </h2>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {whyChoose.reasons.map((item, idx) => (
            <div
              key={item.num}
              className={`rounded-3xl p-8 bg-white border border-docshield-border hover:border-docshield-primary-light hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-docshield-accent px-2.5 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40 inline-block mb-5">
                  {item.num}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-docshield-ink mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-docshield-border/60 flex items-center gap-2 text-xs font-medium text-docshield-ink">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified WSO Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── FEATURE QUOTE BANNER ── */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-white border border-docshield-border-card/60 shadow-card-soft text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-docshield-lavender border border-docshield-primary-light/50 text-docshield-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{whyChoose.quote.badge}</span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-docshield-ink leading-relaxed mb-6 italic">
              {whyChoose.quote.text}
            </p>

            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-docshield-ink-muted font-semibold">
              {whyChoose.quote.tagline}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
