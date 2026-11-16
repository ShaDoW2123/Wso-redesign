"use client";

import { aboutContent } from "@/data/aboutContent";
import { CheckCircle2 } from "lucide-react";

export default function AboutJourney() {
  const { studentJourney } = aboutContent;

  return (
    <section id="journey" className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {studentJourney.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {studentJourney.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {studentJourney.subtext}
          </p>
        </div>

        {/* 8-Stage Interactive Alternating Step Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {studentJourney.stages.map((st) => (
            <div
              key={st.stage}
              className="rounded-3xl p-7 bg-docshield-subtle/50 border border-docshield-border hover:border-docshield-primary-light hover:shadow-card-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-docshield-accent px-3 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40">
                    {st.stage}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-docshield-ink mb-2.5">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-docshield-border text-[11px] font-mono text-docshield-ink-muted">
                Step Verified
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
