"use client";

import { chinaContent } from "@/data/chinaContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  Languages,
  BookOpen,
  Building,
  Shield,
  Wifi,
  UtensilsCrossed,
  Sun,
  PartyPopper,
  Train,
  Users2,
  AlertTriangle,
} from "lucide-react";

export default function ChinaCampusLifeAndAcademics() {
  const { mediumOfInstruction, hostelFacilities, studentLife } = chinaContent;

  const facilityIcons = [Building, Shield, Wifi, UtensilsCrossed];
  const aspectIcons = [Building, Sun, PartyPopper, Train, Shield, Users2];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── PART 1: MEDIUM OF INSTRUCTION & MANDATORY HSK-4 ── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {mediumOfInstruction.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
                {mediumOfInstruction.title}
              </h2>
            </MaskedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFD] border border-[#E6EFF8] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-6">
                  <Languages className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-4">
                  100% English-Medium Theory Instruction
                </h3>
                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-4">
                  {mediumOfInstruction.paragraphs[0]}
                </p>
                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {mediumOfInstruction.paragraphs[1]}
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#000B33] text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#BFD7FF] mb-6 border border-white/15">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Mandatory HSK-4 Proficiency for Clinical Internship
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                  {mediumOfInstruction.paragraphs[2]}
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {mediumOfInstruction.paragraphs[3]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── PART 2: HOSTEL & ACCOMMODATION FACILITIES ── */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-docshield-subtle/80 border border-docshield-border mb-24">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {hostelFacilities.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {hostelFacilities.title}
              </h2>
            </MaskedReveal>

            <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed">
              {hostelFacilities.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {hostelFacilities.facilities.map((fac, idx) => {
              const Icon = facilityIcons[idx % facilityIcons.length];
              return (
                <div
                  key={fac.title}
                  className="p-6 bg-white rounded-2xl border border-[#E8EEF5] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-docshield-ink mb-2">
                      {fac.title}
                    </h4>
                    <p className="text-xs text-docshield-ink-muted leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs sm:text-sm text-docshield-ink font-semibold">
            {hostelFacilities.summary}
          </p>
        </div>

        {/* ── PART 3: STUDENT LIFE IN CHINA ── */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {studentLife.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                {studentLife.title}
              </h2>
            </MaskedReveal>

            <p className="text-sm sm:text-base text-docshield-ink-muted leading-relaxed">
              {studentLife.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {studentLife.aspects.map((asp, idx) => {
              const Icon = aspectIcons[idx % aspectIcons.length];
              return (
                <SpotlightCard
                  key={asp.title}
                  theme="light"
                  spotlightColor="#BFD7FF"
                  intensity={0.3}
                  className="p-6 bg-white rounded-2xl border border-[#E8EEF5] shadow-xs hover:shadow-card-soft transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-docshield-ink">
                      {asp.title}
                    </h4>
                  </div>
                  <p className="text-xs text-docshield-ink-muted leading-relaxed">
                    {asp.text}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Warning Banner */}
          <div className="p-5 rounded-2xl bg-[#FFF9E6] border border-[#FFE082] flex items-start gap-3 text-xs sm:text-sm text-[#7F5B00] leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-[#B28200] shrink-0 mt-0.5" />
            <span>{studentLife.warning}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
