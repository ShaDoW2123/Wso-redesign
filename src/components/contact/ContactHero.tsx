"use client";

import { contactContent } from "@/data/contactContent";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { SlidingArrowButton } from "@/components/ui/SlidingArrowButton";
import { ShieldCheck, ArrowDown } from "lucide-react";

export default function ContactHero() {
  const { hero } = contactContent;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#E8F0FA] to-[#C7DBF5]">
      {/* Subtle Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000B33 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-docshield-border shadow-xs backdrop-blur-md mb-7">
            <span className="w-2 h-2 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {hero.pill}
            </span>
            <div className="w-6 h-px bg-docshield-accent/40" />
          </div>

          {/* Single-Color Midnight Navy Headline */}
          <MaskedReveal yOffset="110%" duration={0.9}>
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-normal text-docshield-ink tracking-tight mb-6 leading-[1.1]">
              {hero.title}
            </h1>
          </MaskedReveal>

          {/* Subtitle */}
          <MaskedReveal yOffset="100%" duration={0.8} delay={0.15}>
            <p className="text-base sm:text-lg lg:text-xl text-docshield-ink-muted leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
              {hero.description}
            </p>
          </MaskedReveal>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <SlidingArrowButton href="#advisory-terminal" variant="primary">
              Schedule Free Consultation
            </SlidingArrowButton>
            <a
              href="#contact-channels"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/95 hover:bg-white text-docshield-ink font-medium text-sm border border-docshield-border hover:border-docshield-accent/30 shadow-xs transition-all active:scale-95"
            >
              <span>Explore Contact Options</span>
              <ArrowDown className="w-4 h-4 text-docshield-accent" />
            </a>
          </div>

          {/* Balanced 4-Column Trust Badges Ribbon */}
          <div className="pt-8 border-t border-docshield-ink/10 max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {hero.trustBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-docshield-ink/85 whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-docshield-accent shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
