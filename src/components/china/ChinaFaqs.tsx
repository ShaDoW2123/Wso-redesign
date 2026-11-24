"use client";

import { useState } from "react";
import { chinaContent } from "@/data/chinaContent";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { ChevronDown, Search } from "lucide-react";

export default function ChinaFaqs() {
  const { faqs } = chinaContent;
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Eligibility & NEET",
    "Fees & Living",
    "Universities & NMC",
    "Internship & Licensing",
  ];

  const getFaqCategory = (q: string) => {
    const qLower = q.toLowerCase();
    if (qLower.includes("neet") || qLower.includes("eligibility") || qLower.includes("age limit") || qLower.includes("ielts") || qLower.includes("documents")) {
      return "Eligibility & NEET";
    }
    if (qLower.includes("cost") || qLower.includes("fee") || qLower.includes("scholarship") || qLower.includes("hostel") || qLower.includes("living") || qLower.includes("food")) {
      return "Fees & Living";
    }
    if (qLower.includes("nmc") || qLower.includes("who") || qLower.includes("moe") || qLower.includes("best") || qLower.includes("safe") || qLower.includes("intake") || qLower.includes("admission start") || qLower.includes("how many")) {
      return "Universities & NMC";
    }
    if (qLower.includes("internship") || qLower.includes("fmge") || qLower.includes("next") || qLower.includes("practice") || qLower.includes("english") || qLower.includes("work part-time")) {
      return "Internship & Licensing";
    }
    return "Universities & NMC";
  };

  const filteredFaqs = faqs.items.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      activeCategory === "All" || getFaqCategory(item.question) === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-[#F8FAFD] border-t border-[#E6EFF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
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
            All 33 official queries answered regarding NMC FMGL guidelines, fee schedules, HSK-4 Mandarin requirements, and campus safety.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 33 questions (e.g. NMC, NEET, fees, internship, HSK)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink placeholder:text-slate-400 focus:outline-none focus:border-[#4C6DA6] shadow-xs transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#000B33] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#E6EFF8] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-docshield-ink leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-docshield-lavender flex items-center justify-center text-docshield-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#000B33] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-docshield-ink-muted leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
