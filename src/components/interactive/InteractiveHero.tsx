"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { MaskedReveal } from "@/components/ui/MaskedReveal";

export default function InteractiveHero() {
  const { hero } = homeContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
    const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: xNorm * 30, y: yNorm * 30 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#24529E]"
      style={{ isolation: "isolate" }}
    >
      {/* Living Atmospheric Parallax Lighting */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
        }}
      >
        {/* Base rich sky-to-light vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C478F] via-[#4875BA] via-60% to-[#E8F1FC]" />

        {/* Top-left deep atmospheric royal/cobalt blue glow */}
        <div
          className="absolute blur-[80px] md:blur-[140px] transition-transform duration-500 ease-out"
          style={{
            width: "min(1400px, 160vw)",
            height: "min(850px, 100vh)",
            left: "-200px",
            top: "-220px",
            background: "linear-gradient(180deg, #092868 0%, #153F8D 50%, #4673B8 100%)",
            borderRadius: "9999px",
            opacity: 0.95,
            transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0)`,
          }}
        />

        {/* Top-right ambient azure glow */}
        <div
          className="absolute blur-[90px] md:blur-[150px] transition-transform duration-500 ease-out"
          style={{
            width: "min(1000px, 120vw)",
            height: "min(700px, 80vh)",
            right: "-150px",
            top: "-120px",
            background: "radial-gradient(circle, #25529F 0%, #537FBF 60%, transparent 100%)",
            opacity: 0.85,
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          }}
        />

        {/* Bottom-right warm peach glow */}
        <div
          className="absolute rounded-full blur-3xl md:blur-[100px]"
          style={{
            width: "min(700px, 80vw)",
            height: "min(600px, 70vh)",
            right: "-60px",
            bottom: "0px",
            background: "#FFDFCB",
            opacity: 0.65,
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm mb-6 hover:bg-white/25 transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {hero.badge}
          </span>
        </div>

        {/* Hero Headline - Masked Typography Reveal */}
        <MaskedReveal yOffset="105%" duration={1.1} className="max-w-4xl mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] drop-shadow-md">
            {hero.headline}
          </h1>
        </MaskedReveal>

        {/* Lead Paragraph - Soft Luminous White */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-sm">
          {hero.subtext}
        </p>

        {/* Dual Pill CTA Buttons with Micro Sliding Arrow */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto">
          <Link
            href="#destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-docshield-primary hover:bg-gray-100 font-semibold text-sm sm:text-base transition-all shadow-lg active:scale-95 group relative overflow-hidden"
          >
            <span>{hero.primaryCta}</span>
            <span className="relative inline-flex items-center justify-center overflow-hidden w-4 h-4 shrink-0">
              <ArrowRight className="w-4 h-4 text-docshield-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />
              <ArrowRight className="w-4 h-4 text-docshield-accent absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-full group-hover:translate-x-0" />
            </span>
          </Link>

          <Link
            href="#counselling"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3B5E9B]/50 hover:bg-[#3B5E9B]/70 text-white border border-[#BFD7FF]/40 font-semibold text-sm sm:text-base transition-all shadow-md active:scale-95 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#BFD7FF]" />
            <span>{hero.secondaryCta}</span>
          </Link>
        </div>

        {/* Hero Center Visual - Wide High-Impact Frame with Subtle 3D Depth & Floating Trust Badges */}
        <div className="relative w-full max-w-3xl mx-auto mt-2 mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white aspect-[16/10] sm:aspect-[16/9] transition-transform duration-500 ease-out hover:scale-[1.01]">
            <Image
              src="/assets/hero-img.png"
              alt="MBBS Medical Student"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Soft gradient overlay at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-docshield-primary/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Card Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white z-10">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[#BFD7FF]" />
                </span>
                <span className="text-xs sm:text-sm font-medium drop-shadow-md">
                  Over 10,000+ Indian Aspirants Guided Overseas
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                <span>Admissions 2027 Active</span>
              </div>
            </div>
          </div>

          {/* Floating Trust Pill - Top Left */}
          <div className="hidden sm:flex absolute -top-4 -left-6 glass-pill px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-docshield-ink border border-white animate-in slide-in-from-left duration-700 hover:scale-105 transition-transform bg-white/90 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>NMC & WHO Compliant</span>
          </div>

          {/* Floating Trust Pill - Top Right */}
          <div className="hidden sm:flex absolute -top-4 -right-6 glass-pill px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-docshield-ink border border-white animate-in slide-in-from-right duration-700 hover:scale-105 transition-transform bg-white/90 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>100% English Medium</span>
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
