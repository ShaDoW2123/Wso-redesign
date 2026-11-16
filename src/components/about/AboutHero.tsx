"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data/aboutContent";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { TiltedCard } from "@/components/ui/TiltedCard";
import { Magnet } from "@/components/ui/Magnet";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CountUp } from "@/components/ui/CountUp";

export default function AboutHero() {
  const { hero } = aboutContent;
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 bg-docshield-hero overflow-hidden border-b border-[#EFEFEF]"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-white/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-20">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Architectural Eyebrow */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {hero.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* Single Solid Midnight Navy Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-docshield-ink tracking-tight leading-[1.12] mb-6"
            >
              {hero.headline}
            </h1>

            {/* Verbatim Description */}
            <p
              ref={textRef}
              className="text-base sm:text-lg text-docshield-ink/80 leading-relaxed max-w-2xl font-normal mb-8"
            >
              {hero.description}
            </p>

            {/* Dual Pill CTA Architecture with Magnet */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
              <Magnet magnetStrength={0.25} activeDistance={50}>
                <Link
                  href="#evaluation"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-docshield-ink font-semibold text-sm hover:bg-[#F3F4F6] transition-all shadow-[0_10px_25px_-5px_rgba(0,11,51,0.12)] active:scale-95 group"
                >
                  <span>{hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-docshield-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnet>

              <Magnet magnetStrength={0.2} activeDistance={50}>
                <Link
                  href="#destinations"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-docshield-primary-light text-docshield-ink font-semibold text-sm hover:bg-docshield-primary-light-hover transition-all border border-[#BFD7FF]/80 active:scale-95"
                >
                  <span>{hero.secondaryCta}</span>
                </Link>
              </Magnet>
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

          {/* Right Column: Authentic Student Portrait with ReactBits TiltedCard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TiltedCard
              rotateAmplitude={8}
              scaleOnHover={1.02}
              borderRadius="1.5rem"
              className="max-w-[420px]"
            >
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,11,51,0.18)] border border-white/70 bg-white/50 backdrop-blur-md">
                <Image
                  src="/assets/about hero img.png"
                  alt="We Study Overseas Student Advisory"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000B33]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <p className="text-xs font-semibold text-docshield-ink">
                    Student-First Medical Counseling
                  </p>
                  <p className="text-[11px] text-docshield-ink-muted">
                    Direct admission to premier government institutions
                  </p>
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>

        {/* ── IMPACT STAT BAR (Elevated ReactBits Spotlight Cards + CountUp) ── */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {hero.stats.map((stat, idx) => {
            const hasDigits = /\d/.test(stat.value);
            const rawNumber = hasDigits ? parseInt(stat.value.replace(/[^0-9]/g, "")) || 0 : 0;
            const suffix = stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : "";

            return (
              <SpotlightCard
                key={stat.label}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.4}
                className="p-6 text-center bg-white/90 backdrop-blur-xl border border-white/80 hover:border-docshield-accent/30 transition-all"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-1">
                    {hasDigits ? (
                      <CountUp end={rawNumber} suffix={suffix} duration={1.5 + idx * 0.2} />
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-docshield-ink mb-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-docshield-ink-muted">
                    {stat.desc}
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
