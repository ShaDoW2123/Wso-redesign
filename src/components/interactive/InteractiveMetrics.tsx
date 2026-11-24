"use client";

import { homeContent } from "@/data/homeContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CountUp } from "@/components/ui/CountUp";

export default function InteractiveMetrics() {
  const { metricsSection } = homeContent;

  const cardBadges = [
    {
      badge: "Pioneer Guidance",
      code: "EST. 2012",
      icon: (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      ),
      glow: "from-blue-500/10 to-indigo-500/5",
    },
    {
      badge: "Government Campuses",
      code: "NMC AUDITED",
      icon: (
        <svg className="w-3.5 h-3.5 text-docshield-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      glow: "from-blue-400/10 to-cyan-500/5",
    },
    {
      badge: "Global Safety Index",
      code: "VETTED HUBS",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#1C718A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      glow: "from-sky-400/10 to-blue-500/5",
    },
    {
      badge: "Official Gazette",
      code: "100% VERIFIED",
      icon: (
        <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      glow: "from-emerald-500/10 to-teal-500/5",
    },
  ];

  return (
    <section id="impact" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white border-y border-docshield-border overflow-hidden">
      {/* Ambient Celestial Glow Behind the Cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-gradient-to-r from-blue-200/25 via-indigo-100/20 to-sky-200/25 blur-3xl rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {metricsSection.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {metricsSection.title}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
            {metricsSection.subtext}
          </p>
        </div>

        {/* 4 Interactive Spotlight Credential Cards with Live Rolling Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {metricsSection.metrics.map((metric, idx) => {
            const meta = cardBadges[idx % cardBadges.length];
            const hasDigits = /\d/.test(metric.value);
            const rawNumber = hasDigits ? parseInt(metric.value.replace(/[^0-9]/g, "")) || 0 : 0;
            const suffix = metric.value.includes("+") ? "+" : metric.value.includes("%") ? "%" : "";

            return (
              <SpotlightCard
                key={metric.label}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.4}
                className="group relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_15px_35px_-10px_rgba(0,11,51,0.06)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top Row: Status Chip & Code */}
                <div className="flex items-center justify-between gap-2 mb-8 relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-blue-100/80 shadow-xs text-xs font-semibold text-docshield-ink group-hover:border-docshield-accent/30 transition-colors">
                    {meta.icon}
                    <span>{meta.badge}</span>
                  </span>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-docshield-ink-muted/60 uppercase">
                    {meta.code}
                  </span>
                </div>

                {/* Big Rolling Metric Value */}
                <div className="mb-4 relative z-10">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-docshield-ink tracking-tight leading-none group-hover:text-docshield-primary transition-colors">
                    {hasDigits ? (
                      <CountUp end={rawNumber} suffix={suffix} duration={1.8 + idx * 0.2} />
                    ) : (
                      metric.value
                    )}
                  </div>
                </div>

                {/* Label and Explanatory Description */}
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-bold text-docshield-ink mb-1.5 leading-snug">
                    {metric.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed font-normal">
                    {metric.description}
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
