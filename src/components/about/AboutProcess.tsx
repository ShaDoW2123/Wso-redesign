"use client";

import { aboutContent } from "@/data/aboutContent";
import { CheckCircle2 } from "lucide-react";

export default function AboutProcess() {
  const { admissionProcess } = aboutContent;

  return (
    <section id="admission-process" className="py-24 sm:py-32 bg-docshield-subtle/40 border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {admissionProcess.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {admissionProcess.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {admissionProcess.subtext}
          </p>
        </div>

        {/* 3 Numbered Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {admissionProcess.steps.map((item, idx) => (
            <div
              key={item.step}
              className="rounded-3xl p-8 bg-white border border-docshield-border hover:border-docshield-primary-light hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono font-bold text-docshield-accent px-3 py-1 rounded-full bg-docshield-lavender border border-docshield-primary-light/40">
                    Step {item.step}
                  </span>
                  <span className="text-xs text-docshield-ink-muted font-medium">
                    {idx === 0 ? "Initial Audit" : idx === 1 ? "Documentation" : "Clearance & Travel"}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-3.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-docshield-border flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-docshield-subtle text-docshield-ink border border-docshield-border"
                  >
                    <CheckCircle2 className="w-3 h-3 text-docshield-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
