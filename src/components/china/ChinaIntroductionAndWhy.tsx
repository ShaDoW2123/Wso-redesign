"use client";

import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  Banknote,
  Users,
  Building2,
  Globe2,
  ShieldCheck,
  Stethoscope,
  Lock,
  GraduationCap,
} from "lucide-react";

export default function ChinaIntroductionAndWhy() {
  const { introduction, whyChoosingChina, whyStudyDetails } = chinaContent;

  const reasonIcons = [Banknote, Users, Building2];
  const factorIcons = [Users, Banknote, Globe2, Stethoscope];
  const pillarIcons = [ShieldCheck, Stethoscope, Lock, GraduationCap];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── PART 1: INTRODUCTION & 3 KEY REASONS ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {introduction.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-5">
              {introduction.title}
            </h2>
          </MaskedReveal>

          {introduction.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* 3 Key Reason Cards with Verbatim Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {introduction.keyReasons.map((reason, idx) => {
            const Icon = reasonIcons[idx % reasonIcons.length];
            return (
              <SpotlightCard
                key={reason.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className="p-8 bg-docshield-lavender/40 border border-docshield-border rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-docshield-accent mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-docshield-ink mb-4">
                    {reason.title}
                  </h3>
                  <div className="space-y-3">
                    {reason.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* ── PART 2: WHY INDIAN STUDENTS ARE CHOOSING CHINA ── */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-docshield-subtle/80 border border-docshield-border mb-24">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {whyChoosingChina.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {whyChoosingChina.title}
              </h2>
            </MaskedReveal>

            <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed">
              {whyChoosingChina.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyChoosingChina.factors.map((factor, idx) => {
              const Icon = factorIcons[idx % factorIcons.length];
              return (
                <div
                  key={factor.title}
                  className="p-7 bg-white rounded-2xl border border-[#E8EEF5] shadow-xs hover:shadow-card-soft transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-docshield-ink">
                      {factor.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PART 3: 4 QUALITY & INSTITUTIONAL PILLARS ── */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {whyStudyDetails.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {whyStudyDetails.title}
              </h2>
            </MaskedReveal>

            <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed">
              {whyStudyDetails.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyDetails.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <SpotlightCard
                  key={pillar.title}
                  theme="light"
                  spotlightColor="#BFD7FF"
                  intensity={0.3}
                  className="p-7 bg-white rounded-3xl border border-[#E8EEF5] flex flex-col justify-between hover:shadow-card-soft transition-all duration-300"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-docshield-lavender border border-docshield-primary-light/50 flex items-center justify-center text-docshield-accent mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-docshield-ink mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                      {pillar.content}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
