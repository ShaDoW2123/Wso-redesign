"use client";

import { useState } from "react";
import Link from "next/link";
import { aboutContent } from "@/data/aboutContent";
import { ChevronDown, Search, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export default function AboutFaqAnthem() {
  const { faqsSection, anthemCta } = aboutContent;
  const { faqs } = faqsSection;

  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

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
    <section id="faqs" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ── PART 1: FAQS SECTION (ALL 30 VERBATIM Q&As) ── */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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

            {/* Instant Search Rail */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search FAQs (e.g. Russia, NMC, Visa, Cost, FMGE)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#F8F8F8] border border-[#EFEFEF] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:bg-white shadow-xs transition-all"
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
                    className="rounded-2xl border border-docshield-border bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors"
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
                        className={`w-4 h-4 text-docshield-accent shrink-0 transition-transform duration-200 mt-1 ${
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
                    className="rounded-2xl border border-docshield-border bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors"
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
                        className={`w-4 h-4 text-docshield-accent shrink-0 transition-transform duration-200 mt-1 ${
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

        {/* ── PART 2: ANTHEM GLOBAL CTA ── */}
        <div id="evaluation" className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#000B33] text-white relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B5E9B]/30 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFD7FF]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#BFD7FF]">
                {anthemCta.pill}
              </span>
              <div className="w-8 h-px bg-[#BFD7FF]/30" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-6">
              {anthemCta.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-4">
              {anthemCta.lead}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-10">
              {anthemCta.subtext}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/#counselling"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#000B33] hover:bg-[#F3F4F6] font-semibold text-sm transition-all shadow-md active:scale-95 group"
              >
                <span>{anthemCta.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#4C6DA6] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="tel:+919583315005"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#1A3660] text-white hover:bg-[#2F4E82] font-semibold text-sm transition-all border border-white/20 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#BFD7FF]" />
                <span>{anthemCta.secondaryCta}</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential profile review by certified senior MBBS counselors</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
