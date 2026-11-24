"use client";

import { useState } from "react";
import { chinaContent } from "@/data/chinaContent";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  CheckCircle2,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export default function ChinaEligibilityAndAdmission() {
  const {
    eligibility,
    admissionProcess,
    documentsRequired,
    studentJourney,
  } = chinaContent;

  const [activeTab, setActiveTab] = useState<"eligibility" | "process" | "documents" | "journey">("eligibility");

  return (
    <section id="eligibility" className="py-24 sm:py-32 bg-[#F8FAFD] border-y border-[#E6EFF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              ADMISSION & ELIGIBILITY BLUEPRINT
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              Complete Admission & Regulatory Pathways
            </h2>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about academic eligibility, document notarization, visa issuance (JW202), and the 10-step student roadmap.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("eligibility")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "eligibility"
                  ? "bg-[#000B33] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              1. Eligibility & NMC Rules
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "process"
                  ? "bg-[#000B33] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              2. 7-Step Admission Process
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("documents")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "documents"
                  ? "bg-[#000B33] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              3. Required Documents
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("journey")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "journey"
                  ? "bg-[#000B33] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              4. 6-Year Journey Roadmap
            </button>
          </div>
        </div>

        {/* ── TAB 1: ELIGIBILITY & NMC RULES ── */}
        {activeTab === "eligibility" && (
          <div className="space-y-12">
            {/* Criteria Cards */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6EFF8] shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-2">
                {eligibility.title}
              </h3>
              <p className="text-xs sm:text-sm text-docshield-ink-muted mb-8">
                {eligibility.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eligibility.criteria.map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2F4E82] block mb-2">
                        {item.label}
                      </span>
                      <p className="text-xs sm:text-sm text-docshield-ink leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest NMC Rules */}
            <div className="rounded-3xl p-8 sm:p-10 bg-[#000B33] text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#BFD7FF]" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  {eligibility.nmcRulesTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eligibility.nmcRules.map((rule) => (
                  <div
                    key={rule.rule}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono font-bold text-[#BFD7FF] uppercase tracking-wider block mb-2">
                      {rule.rule}
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: 7-STEP ADMISSION PROCESS ── */}
        {activeTab === "process" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6EFF8] shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-2">
              {admissionProcess.title}
            </h3>
            <p className="text-xs sm:text-sm text-docshield-ink-muted mb-10 max-w-3xl">
              {admissionProcess.intro}
            </p>

            <div className="space-y-6">
              {admissionProcess.steps.map((st) => (
                <div
                  key={st.step}
                  className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] flex items-start gap-5 hover:border-[#BFD7FF] transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#000B33] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                    {st.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-docshield-ink mb-1">
                      {st.title}
                    </h4>
                    {st.description && (
                      <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-3">
                        {st.description}
                      </p>
                    )}
                    {st.points && (
                      <div className="space-y-1.5 pt-1">
                        {st.points.map((pt) => (
                          <div
                            key={pt}
                            className="flex items-start gap-2 text-xs text-docshield-ink"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: REQUIRED DOCUMENTS ── */}
        {activeTab === "documents" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6EFF8] shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-2">
              {documentsRequired.title}
            </h3>
            <p className="text-xs sm:text-sm text-docshield-ink-muted mb-8 max-w-3xl">
              {documentsRequired.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentsRequired.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] flex items-center gap-3.5 hover:border-[#BFD7FF] transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-docshield-ink">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 4: 6-YEAR STUDENT JOURNEY ── */}
        {activeTab === "journey" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6EFF8] shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-2">
              {studentJourney.title}
            </h3>
            <p className="text-xs sm:text-sm text-docshield-ink-muted mb-10 max-w-3xl">
              {studentJourney.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {studentJourney.steps.map((st) => (
                <div
                  key={st.step}
                  className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] flex items-start gap-4 hover:border-[#BFD7FF] transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2F4E82] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    {st.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-docshield-ink mb-1">
                      {st.title}
                    </h4>
                    <p className="text-xs text-docshield-ink-muted leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
