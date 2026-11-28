"use client";

import { useState } from "react";
import { contactContent } from "@/data/contactContent";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { ChevronDown, Search } from "lucide-react";

export default function ContactFaqs() {
  const { faqs } = contactContent;
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Counseling", "Documentation", "Visits", "General"];

  const filteredFaqs = faqs.list.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="contact-faqs" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {faqs.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {faqs.title}
            </h2>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
            {faqs.subtitle}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-docshield-ink-muted" />
          <input
            type="text"
            placeholder="Search questions about fees, counseling, documents, or office visits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#F8FAFD] border border-docshield-border text-sm text-docshield-ink placeholder:text-docshield-ink-muted focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-docshield-ink text-white shadow-xs"
                  : "bg-docshield-lavender/60 text-docshield-ink-muted hover:text-docshield-ink hover:bg-docshield-lavender border border-docshield-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-docshield-border bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-docshield-lavender/30 transition-colors"
                  >
                    <span className="text-base font-bold text-docshield-ink leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-docshield-ink transition-transform duration-200 shrink-0 ${
                        isOpen
                          ? "rotate-180 bg-docshield-lavender text-docshield-accent"
                          : "bg-slate-100"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-docshield-ink-muted leading-relaxed border-t border-docshield-border/50 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-docshield-ink-muted text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Call our helpline directly at{" "}
              <a href="tel:+919876543210" className="text-docshield-accent font-semibold underline">
                +91 98765 43210
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
