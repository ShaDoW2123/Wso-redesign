"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { DollarSign, Award, ShieldAlert, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutComplianceFinance() {
  const { financeAndScholarships, visaKnowledgeBase, nmcGuidelines } = aboutContent;
  const sectionRef = useRef<HTMLElement>(null);
  const part1Ref = useRef<HTMLDivElement>(null);
  const part2Ref = useRef<HTMLDivElement>(null);
  const part3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(part1Ref.current, {
        scrollTrigger: {
          trigger: part1Ref.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(part2Ref.current, {
        scrollTrigger: {
          trigger: part2Ref.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(part3Ref.current, {
        scrollTrigger: {
          trigger: part3Ref.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="compliance-finance"
      className="py-24 sm:py-32 bg-docshield-subtle/30 border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ── PART 1: SCHOLARSHIPS & FINANCIAL PLANNING ── */}
        <div ref={part1Ref}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {financeAndScholarships.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {financeAndScholarships.headline}
            </h2>

            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {financeAndScholarships.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Educational Expenses (SpotlightCard) */}
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className="p-8 sm:p-10 bg-white border border-docshield-border shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-docshield-border">
                <div className="w-10 h-10 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-docshield-ink">
                    {financeAndScholarships.expensesTitle}
                  </h3>
                  <p className="text-xs text-docshield-ink-muted">
                    {financeAndScholarships.expensesLead}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {financeAndScholarships.expenses.map((exp) => (
                  <div
                    key={exp}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-docshield-accent/40 hover:bg-white transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-docshield-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-docshield-ink leading-relaxed">
                      {exp}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Scholarship Avenues (SpotlightCard with Soft Lavender/Blue Surface) */}
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.4}
              className="p-8 sm:p-10 bg-[#F2F7FF] border border-[#BFD7FF] shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#BFD7FF]/60">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-docshield-accent shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#000B33]">
                    {financeAndScholarships.scholarshipsTitle}
                  </h3>
                  <p className="text-xs text-docshield-ink-muted">
                    {financeAndScholarships.scholarshipsLead}
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {financeAndScholarships.scholarships.map((sch) => (
                  <div
                    key={sch}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#BFD7FF]/70 hover:border-docshield-accent/50 hover:shadow-xs transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#000B33] leading-relaxed font-normal">
                      {sch}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* ── PART 2: STUDENT VISA KNOWLEDGE BASE ── */}
        <div ref={part2Ref}>
          <SpotlightCard
            theme="light"
            spotlightColor="#BFD7FF"
            intensity={0.35}
            spotlightSize={500}
            className="p-8 sm:p-12 bg-white border border-docshield-border-card/60 shadow-xl"
          >
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                  {visaKnowledgeBase.pill}
                </span>
                <div className="w-8 h-px bg-docshield-accent/30" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-docshield-ink mb-2">
                {visaKnowledgeBase.headline}
              </h3>

              <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                {visaKnowledgeBase.subtext}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {visaKnowledgeBase.documents.map((doc, idx) => (
                <div
                  key={doc}
                  className="p-4 rounded-xl bg-docshield-subtle/70 border border-docshield-border hover:border-docshield-accent/50 hover:bg-white hover:shadow-xs transition-all duration-200 flex items-start gap-3.5 group cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-mono font-bold text-docshield-accent shrink-0 shadow-xs border border-docshield-border group-hover:bg-docshield-accent group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-docshield-ink font-medium leading-snug group-hover:text-docshield-primary transition-colors">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* ── PART 3: UNDERSTANDING NMC GUIDELINES ── */}
        <div ref={part3Ref}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {nmcGuidelines.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {nmcGuidelines.headline}
            </h2>

            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {nmcGuidelines.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-10">
            {nmcGuidelines.pillars.map((pil) => (
              <SpotlightCard
                key={pil.title}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.35}
                className="p-7 bg-white border border-docshield-border hover:border-docshield-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent mb-4 border border-docshield-primary-light/50 group-hover:bg-docshield-accent group-hover:text-white transition-colors">
                    <ShieldAlert className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-bold text-docshield-ink mb-2 group-hover:text-docshield-primary transition-colors">
                    {pil.title}
                  </h3>

                  <p className="text-xs text-docshield-ink-muted leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-docshield-border text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Mandatory Rule
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* NExT Reality Highlight Card (Dark Theme SpotlightCard) */}
          <SpotlightCard
            theme="dark"
            spotlightColor="#BFD7FF"
            intensity={0.3}
            spotlightSize={500}
            className="p-8 sm:p-10 bg-[#000B33] text-white border border-[#3B5E9B]/30 shadow-2xl"
          >
            <div className="max-w-3xl">
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-widest text-[#BFD7FF] mb-3">
                CRITICAL LICENSING NOTICE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                {nmcGuidelines.nextRealityTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {nmcGuidelines.nextRealityText}
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
