"use client";

import { useState } from "react";
import { homeContent } from "@/data/homeContent";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const { faqsSection } = homeContent;
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ open by default

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const half = Math.ceil(faqsSection.faqs.length / 2);
  const col1 = faqsSection.faqs.slice(0, half);
  const col2 = faqsSection.faqs.slice(half);

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-docshield-subtle/40 border-y border-docshield-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {faqsSection.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {faqsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {faqsSection.subtitle}
          </p>
        </div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Column 1 */}
          <div className="space-y-4">
            {col1.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-docshield-border-card/60 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-docshield-subtle/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-docshield-ink leading-snug">
                      {item.question}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-docshield-lavender flex items-center justify-center shrink-0 text-docshield-primary">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-docshield-ink-muted leading-relaxed border-t border-docshield-border pt-4 animate-in fade-in duration-200">
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
                  className="rounded-2xl border border-docshield-border-card/60 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-docshield-subtle/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-docshield-ink leading-snug">
                      {item.question}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-docshield-lavender flex items-center justify-center shrink-0 text-docshield-primary">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-docshield-ink-muted leading-relaxed border-t border-docshield-border pt-4 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}