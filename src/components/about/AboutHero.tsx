"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data/aboutContent";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 bg-docshield-hero overflow-hidden border-b border-[#EFEFEF]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-white/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-20">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {hero.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* Single Solid Midnight Navy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-docshield-ink tracking-tight leading-[1.12] mb-6">
              {hero.headline}
            </h1>

            {/* Verbatim Description */}
            <p className="text-base sm:text-lg text-docshield-ink/80 leading-relaxed max-w-2xl font-normal mb-8">
              {hero.description}
            </p>

            {/* Dual Pill CTA Architecture */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
              <Link
                href="#evaluation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-docshield-ink font-semibold text-sm hover:bg-[#F3F4F6] transition-all shadow-[0_10px_25px_-5px_rgba(0,11,51,0.12)] active:scale-95 group"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-docshield-accent group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="#destinations"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-docshield-primary-light text-docshield-ink font-semibold text-sm hover:bg-docshield-primary-light-hover transition-all border border-[#BFD7FF]/80 active:scale-95"
              >
                <span>{hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/40 text-xs font-medium text-docshield-ink/75">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-docshield-accent" />
                100% Unbiased Advisory
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-docshield-accent" />
                No University Commissions
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-docshield-accent" />
                NMC Gazette 2021 Compliant
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Student Portrait with Organic Glass Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,11,51,0.2)] border border-white/60 bg-white/50 backdrop-blur-md">
              <Image
                src="/assets/about hero img.png"
                alt="We Study Overseas Student Advisory"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000B33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xs">
                <p className="text-xs font-semibold text-docshield-ink">
                  Student-First Medical Counseling
                </p>
                <p className="text-[11px] text-docshield-ink-muted">
                  Direct admission to premier government institutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── IMPACT STAT BAR (Glass Frosted Floating Ribbon) ── */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_15px_40px_-10px_rgba(0,11,51,0.07)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70">
            {hero.stats.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col text-center ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-docshield-ink mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-docshield-ink-muted">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
