"use client";

import { useState } from "react";
import Image from "next/image";
import { homeContent } from "@/data/homeContent";
import { CheckCircle2, Send, Lock } from "lucide-react";

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

export default function AdvisoryTerminal() {
  const { counselling } = homeContent;
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
            {/* Architectural Editorial Eyebrow matching UniversitiesSection */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                GLOBAL NETWORK
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>

            {/* Section Headline - Single Midnight Navy Color, No Double Color */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-docshield-ink tracking-tight leading-[1.15] mb-4">
              Top Countries for MBBS Abroad
            </h2>

            {/* Sub-heading Copy */}
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed mb-8 max-w-lg">
              We connect you to some of the best options, so you can choose your
              dream university overseas and complete your medical education with
              fully verified documentation, consular approval and proper financial
              planning.
            </p>

            {/* 4 Flag Cards */}
            <div className="grid grid-cols-2 min-[420px]:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
              {DESTINATION_CARDS.map((dest) => (
                <a
                  key={dest.name}
                  href={dest.href}
                  className="bg-white rounded-2xl border border-[#EFEFEF] shadow-[0_4px_16px_-4px_rgba(0,11,51,0.04)] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-card-soft hover:border-[#BFD7FF] transition-all duration-200 group"
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-2xs border border-[#EFEFEF] mb-2.5 transition-transform group-hover:scale-105">
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
                </a>
              ))}
            </div>

            {/* Explore Button (DESIGN.md button-md specification) */}
            <div>
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EFEFEF] text-xs sm:text-sm font-semibold text-[#000B33] hover:bg-[#F2F7FF] hover:border-[#BFD7FF] shadow-xs transition-all group"
              >
                <span>Explore All Destinations</span>
                <span className="text-[#4C6DA6] group-hover:translate-x-0.5 transition-transform font-bold">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Evaluation Form (Preserved Intact with DESIGN.md styling) ── */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full rounded-3xl p-7 sm:p-9 bg-white border border-[#EFEFEF] shadow-card-soft">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#000B33] mb-1.5">
                  {counselling.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F7C86] leading-relaxed">
                  Submit your academic details below to connect with a senior admission counselor today.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#F2F7FF] rounded-2xl border border-[#BFD7FF]">
                  <CheckCircle2 className="w-12 h-12 text-[#2F4E82] mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-[#000B33] mb-1">
                    Evaluation Request Submitted!
                  </h4>
                  <p className="text-xs text-[#4C6DA6]">
                    A senior We Study Overseas counselor will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#000B33] mb-1.5">
                      Student Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border border-[#EFEFEF] text-sm text-[#000B33] placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#000B33] mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border border-[#EFEFEF] text-sm text-[#000B33] placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#000B33] mb-1.5">
                        Preferred Destination
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border border-[#EFEFEF] text-sm text-[#000B33] focus:outline-none focus:border-[#4C6DA6] focus:bg-white transition-all"
                      >
                        <option value="" disabled>Select Country</option>
                        <option value="russia">MBBS in Russia</option>
                        <option value="uzbekistan">MBBS in Uzbekistan</option>
                        <option value="kazakhstan">MBBS in Kazakhstan</option>
                        <option value="kyrgyzstan">MBBS in Kyrgyzstan</option>
                        <option value="undecided">Help Me Choose</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#000B33] mb-1.5">
                      NEET Score / Anticipated Score
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Qualified (320 / 720)"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border border-[#EFEFEF] text-sm text-[#000B33] placeholder:text-[#A9B1B7] focus:outline-none focus:border-[#4C6DA6] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Primary Dark Button from DESIGN.md: bg #000B33, hover #4C6DA6 */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#000B33] hover:bg-[#4C6DA6] text-white text-sm font-semibold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Request Callback</span>
                    <Send className="w-4 h-4 text-[#BFD7FF]" />
                  </button>

                  <p className="text-[11px] text-center text-[#6F7C86] pt-2 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#4C6DA6]" />
                    <span>100% Confidential. Your data is never shared.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
