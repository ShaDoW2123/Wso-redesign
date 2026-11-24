"use client";

import { useState } from "react";
import Image from "next/image";
import { homeContent } from "@/data/homeContent";
import { CheckCircle2, Send, Lock, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { SlidingArrowButton } from "@/components/ui/SlidingArrowButton";

const DESTINATION_CARDS = [
  {
    name: "Russia",
    flag: "https://flagcdn.com/w160/ru.png",
    href: "#destinations",
  },
  {
    name: "Uzbekistan",
    flag: "https://flagcdn.com/w160/uz.png",
    href: "#destinations",
  },
  {
    name: "Kazakhstan",
    flag: "https://flagcdn.com/w160/kz.png",
    href: "#destinations",
  },
  {
    name: "Kyrgyzstan",
    flag: "https://flagcdn.com/w160/kg.png",
    href: "#destinations",
  },
];

export default function InteractiveAdvisoryTerminal() {
  const { counselling } = homeContent;
  const [selectedCountry, setSelectedCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="counselling"
      className="py-20 sm:py-28 bg-[#F8F8F8] relative overflow-hidden border-t border-[#EFEFEF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ── LEFT COLUMN: Global Network & Destination Showcase ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Architectural Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                GLOBAL NETWORK
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* Section Headline with Masked Reveal */}
            <MaskedReveal yOffset="105%" duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-docshield-ink tracking-tight leading-[1.15] mb-4">
                {counselling.title}
              </h2>
            </MaskedReveal>

            {/* Sub-heading Copy */}
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed mb-8 max-w-lg">
              We connect you to some of the best options, so you can choose your
              dream university overseas and complete your medical education with
              fully verified documentation, consular approval and proper financial
              planning.
            </p>

            {/* 4 Interactive Flag Cards */}
            <div className="grid grid-cols-2 min-[420px]:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
              {DESTINATION_CARDS.map((dest) => (
                <button
                  key={dest.name}
                  type="button"
                  onClick={() => setSelectedCountry(dest.name)}
                  className={`bg-white rounded-2xl border p-3.5 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group ${
                    selectedCountry === dest.name
                      ? "border-[#4C6DA6] shadow-md ring-2 ring-[#BFD7FF] scale-105"
                      : "border-[#EFEFEF] shadow-[0_4px_16px_-4px_rgba(0,11,51,0.04)] hover:shadow-card-soft hover:border-[#BFD7FF]"
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-2xs border border-[#EFEFEF] mb-2.5 transition-transform group-hover:scale-110">
                    <Image
                      src={dest.flag}
                      alt={`${dest.name} Flag`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#000B33]">
                    {dest.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Explore Button with Sliding Arrow */}
            <div>
              <SlidingArrowButton
                href="#destinations"
                variant="white"
                size="sm"
              >
                Explore All Destinations
              </SlidingArrowButton>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Interactive Form with SpotlightCard ── */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.4}
              spotlightSize={450}
              className="w-full max-w-[540px] bg-white rounded-3xl border border-[#EFEFEF] shadow-[0_20px_50px_-12px_rgba(0,11,51,0.08)] p-6 sm:p-9"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-docshield-ink mb-2">
                    Profile Received
                  </h3>
                  <p className="text-sm text-docshield-ink-muted max-w-xs mx-auto">
                    An advisory doctor is reviewing your qualifications and will reach out shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl sm:text-[26px] font-bold text-docshield-ink tracking-tight">
                        {counselling.formTitle}
                      </h3>
                      {selectedCountry && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2F4E82] px-2.5 py-0.5 rounded-full bg-docshield-lavender border border-docshield-primary-light/50 animate-in fade-in">
                          <Sparkles className="w-3 h-3 text-docshield-accent" />
                          {selectedCountry} Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-docshield-ink-muted">
                      {counselling.formDescription}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        required
                        placeholder="Student First Name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:ring-2 focus:ring-[#BFD7FF]/30 transition-all"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:ring-2 focus:ring-[#BFD7FF]/30 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:ring-2 focus:ring-[#BFD7FF]/30 transition-all"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Your State / City"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:ring-2 focus:ring-[#BFD7FF]/30 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number (WhatsApp Preferred)"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:ring-2 focus:ring-[#BFD7FF]/30 transition-all"
                      />
                    </div>

                    <div>
                      <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm text-docshield-ink focus:outline-none focus:border-[#4C6DA6] focus:ring-2 focus:ring-[#BFD7FF]/30 transition-all"
                      >
                        <option value="">Select Interested Country...</option>
                        <option value="Russia">Russia (100% English & Govt Super-Specialties)</option>
                        <option value="Uzbekistan">Uzbekistan (Direct Flights & Affordable Budget)</option>
                        <option value="Kazakhstan">Kazakhstan (Modern Clinical Simulation Hubs)</option>
                        <option value="Kyrgyzstan">Kyrgyzstan (High-Yield Practical Training)</option>
                        <option value="Georgia">Georgia (European ECTS Credit System)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group w-full py-4 rounded-xl bg-[#000B33] hover:bg-[#2F4E82] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <span>Request Callback</span>
                      <span className="relative inline-flex items-center justify-center overflow-hidden w-4 h-4 shrink-0">
                        <Send className="w-4 h-4 text-[#BFD7FF] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />
                        <Send className="w-4 h-4 text-[#BFD7FF] absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-full group-hover:translate-x-0" />
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-docshield-ink-muted">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Confidential. Your data is never shared.</span>
                    </div>
                  </form>
                </>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
