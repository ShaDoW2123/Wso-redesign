"use client";

import { aboutContent } from "@/data/aboutContent";
import { Target, Eye, CheckCircle2 } from "lucide-react";

export default function AboutMissionVision() {
  const { purpose } = aboutContent;
  const { mission, vision } = purpose;

  return (
    <section id="purpose" className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-docshield-lavender/60 border border-docshield-primary-light/60 hover:shadow-card-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                    {mission.pill}
                  </span>
                  <div className="w-8 h-px bg-docshield-accent/30" />
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-border">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal text-docshield-ink tracking-tight mb-4">
                {mission.title}
              </h2>

              <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed mb-8 font-normal">
                {mission.description}
              </p>

              <div className="space-y-5 pt-6 border-t border-docshield-primary-light/50">
                {mission.cards.map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-white border border-white/80 shadow-xs">
                    <h3 className="text-base font-semibold text-docshield-ink mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-docshield-accent" />
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white border border-docshield-border-card/70 hover:shadow-card-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                    {vision.pill}
                  </span>
                  <div className="w-8 h-px bg-docshield-accent/30" />
                </div>
                <div className="w-10 h-10 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-primary-light/40">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal text-docshield-ink tracking-tight mb-4">
                {vision.title}
              </h2>

              <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed mb-8 font-normal">
                {vision.description}
              </p>

              <div className="space-y-5 pt-6 border-t border-docshield-border">
                {vision.cards.map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-docshield-subtle/70 border border-docshield-border shadow-xs">
                    <h3 className="text-base font-semibold text-docshield-ink mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-docshield-accent" />
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
