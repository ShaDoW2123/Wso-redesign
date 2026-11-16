"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { aboutContent } from "@/data/aboutContent";
import { ChevronDown, Search, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Magnet } from "@/components/ui/Magnet";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutFaqAnthem() {
  const { faqsSection, anthemCta } = aboutContent;
  const { faqs } = faqsSection;

  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const anthemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 25,
        duration: 0.75,
        ease: "power2.out",
      });

      gsap.from(anthemRef.current, {
        scrollTrigger: {
          trigger: anthemRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 35,
        scale: 0.98,
        duration: 0.85,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = search.trim()
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(search.toLowerCase()) ||
          f.answer.toLowerCase().includes(search.toLowerCase())
      )
    : faqs;

  const mid = Math.ceil(filteredFaqs.length / 2);
  const col1 = filteredFaqs.slice(0, mid);
  const col2 = filteredFaqs.slice(mid);

  return (
    <section ref={sectionRef} id="faqs" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* ── PART 1: FAQS SECTION (ALL 30 VERBATIM Q&As) ── */}
        <div>
          <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {faqsSection.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {faqsSection.headline}
            </h2>

            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto mb-8">
              {faqsSection.subtext}
            </p>

            {/* Instant Search Rail with Focus Glow */}
            <div className="max-w-xl mx-auto relative group">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-docshield-accent transition-colors" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search FAQs (e.g. Russia, NMC, Visa, Cost, FMGE)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#F8F8F8] border border-[#EFEFEF] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:bg-white focus:shadow-md transition-all duration-200"
              />
            </div>
          </div>

          {/* 2-Column Responsive Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Column 1 */}
            <div className="space-y-4">
              {col1.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-docshield-accent/40 bg-white shadow-md"
                        : "border-docshield-border bg-white hover:border-docshield-accent/25 hover:bg-slate-50/50"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono font-bold text-docshield-accent shrink-0 mt-0.5">
                          {item.num}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-docshield-ink leading-snug">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-docshield-accent shrink-0 transition-transform duration-300 mt-1 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-docshield-ink-muted leading-relaxed border-t border-slate-100 bg-slate-50/40">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {col2.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-docshield-accent/40 bg-white shadow-md"
                        : "border-docshield-border bg-white hover:border-docshield-accent/25 hover:bg-slate-50/50"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono font-bold text-docshield-accent shrink-0 mt-0.5">
                          {item.num}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-docshield-ink leading-snug">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-docshield-accent shrink-0 transition-transform duration-300 mt-1 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-docshield-ink-muted leading-relaxed border-t border-slate-100 bg-slate-50/40">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── PART 2: ANTHEM GLOBAL CTA (Elevated Dark SpotlightCard + Magnet) ── */}
        <div ref={anthemRef} id="evaluation">
          <SpotlightCard
            theme="dark"
            spotlightColor="#BFD7FF"
            intensity={0.35}
            spotlightSize={600}
            className="p-8 sm:p-12 lg:p-16 bg-[#000B33] text-white relative overflow-hidden shadow-2xl border border-[#3B5E9B]/30"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B5E9B]/25 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="inline-block text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#BFD7FF] mb-4">
                {anthemCta.pill}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.15] mb-6">
                {anthemCta.headline}
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium mb-4 max-w-2xl">
                {anthemCta.lead}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
                {anthemCta.subtext}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                <Magnet magnetStrength={0.25} activeDistance={50}>
                  <Link
                    href="/#evaluation"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#000B33] font-semibold text-sm hover:bg-[#F3F4F6] transition-all shadow-xl active:scale-95 group"
                  >
                    <span>{anthemCta.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 text-docshield-accent group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Magnet>

                <Magnet magnetStrength={0.2} activeDistance={50}>
                  <a
                    href="tel:+918000000000"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/20 active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4 text-[#BFD7FF]" />
                    <span>{anthemCta.secondaryCta}</span>
                  </a>
                </Magnet>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#BFD7FF]" />
                  100% Confidential Consultation
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#BFD7FF]" />
                  Direct Admission Protocol
                </span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
