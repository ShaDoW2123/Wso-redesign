"use client";

import Image from "next/image";
import Link from "next/link";
import { chinaContent } from "@/data/chinaContent";
import { CheckCircle2, Sparkles, Building2, ShieldCheck } from "lucide-react";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { SlidingArrowButton } from "@/components/ui/SlidingArrowButton";

export default function ChinaHero() {
  const { hero } = chinaContent;

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#24529E]"
      style={{ isolation: "isolate" }}
    >
      {/* Authentic Docshield Celestial Atmosphere Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base rich sky-to-light vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C478F] via-[#4875BA] via-60% to-[#E8F1FC]" />

        {/* Top-left deep atmospheric royal/cobalt blue glow */}
        <div
          className="absolute blur-[80px] md:blur-[140px]"
          style={{
            width: "min(1400px, 160vw)",
            height: "min(850px, 100vh)",
            left: "-200px",
            top: "-220px",
            background:
              "linear-gradient(180deg, #092868 0%, #153F8D 50%, #4673B8 100%)",
            borderRadius: "9999px",
            opacity: 0.95,
          }}
        />

        {/* Top-right ambient azure glow */}
        <div
          className="absolute blur-[90px] md:blur-[150px]"
          style={{
            width: "min(1000px, 120vw)",
            height: "min(700px, 80vh)",
            right: "-150px",
            top: "-120px",
            background:
              "radial-gradient(circle, #25529F 0%, #537FBF 60%, transparent 100%)",
            opacity: 0.85,
          }}
        />

        {/* Bottom white horizon blend into the next section */}
        <div
          className="absolute rounded-full blur-2xl md:blur-[90px]"
          style={{
            width: "min(1400px, 150vw)",
            height: "min(350px, 40vh)",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-60px",
            background: "#FFFFFF",
            opacity: 0.95,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10">
        {/* Pill Badge Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm mb-6 cursor-default">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {hero.badge}
          </span>
        </div>

        {/* Hero Headline - Single Midnight Navy / Clean White with Masked Typography Reveal */}
        <MaskedReveal yOffset="105%" duration={1.0} className="max-w-4xl mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] drop-shadow-md">
            {hero.title}
          </h1>
        </MaskedReveal>

        {/* Lead Paragraph - Soft Luminous White */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed mb-10 font-normal drop-shadow-sm">
          {hero.subtext}
        </p>

        {/* Dual Pill CTA Buttons with Micro Sliding Arrow */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto">
          <SlidingArrowButton
            href="#top-universities"
            variant="white"
            size="md"
            className="w-full sm:w-auto"
          >
            {hero.primaryCta}
          </SlidingArrowButton>

          <Link
            href="#eligibility"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3B5E9B]/50 hover:bg-[#3B5E9B]/70 text-white border border-[#BFD7FF]/40 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#BFD7FF]" />
            <span>{hero.secondaryCta}</span>
          </Link>
        </div>

        {/* Hero Center Visual - Wide High-Impact Frame with Floating Trust Badges */}
        <div className="relative w-full max-w-3xl mx-auto mt-2 mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white aspect-[16/10] sm:aspect-[16/9] transition-transform duration-500 ease-out hover:scale-[1.01]">
            <Image
              src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80"
              alt="Medical Education in China"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Soft gradient overlay at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-docshield-primary/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Card Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white z-10">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <Building2 className="w-4 h-4 text-[#BFD7FF]" />
                </span>
                <span className="text-xs sm:text-sm font-medium drop-shadow-md">
                  45 MOE-Approved English Medium Medical Universities
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                <span>Autumn & Spring Intakes</span>
              </div>
            </div>
          </div>

          {/* Floating Trust Pill - Top Left */}
          <div className="hidden sm:flex absolute -top-4 -left-6 glass-pill px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-docshield-ink border border-white animate-in slide-in-from-left duration-700 hover:scale-105 transition-transform bg-white/90 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>NMC FMGL 2021 Compliant</span>
          </div>

          {/* Floating Trust Pill - Top Right */}
          <div className="hidden sm:flex absolute -top-4 -right-6 glass-pill px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-docshield-ink border border-white animate-in slide-in-from-right duration-700 hover:scale-105 transition-transform bg-white/90 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>WHO & WDOMS Recognized</span>
          </div>
        </div>

        {/* Verified Regulatory Badges with Interactive Hover Lift */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl">
          {hero.trustTags.map((signal) => (
            <div
              key={signal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-docshield-ink border border-white shadow-sm text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
