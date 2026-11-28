"use client";

import { useState } from "react";
import { contactContent } from "@/data/contactContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  CheckCircle2,
  ShieldCheck,
  Send,
  Calendar,
  Sparkles,
  Check,
} from "lucide-react";

export default function ContactFormTerminal() {
  const { terminal } = contactContent;

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    destination: terminal.destinations[0],
    neetStatus: terminal.neetStatusOptions[0],
    mode: terminal.modes[0],
    budget: terminal.budgetOptions[0],
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="advisory-terminal"
      className="py-24 sm:py-32 bg-[#F8FAFD] border-y border-[#E6EFF8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Section Header for Balanced Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {terminal.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4 leading-tight">
              {terminal.title}
            </h2>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
            {terminal.subtitle}
          </p>
        </div>

        {/* Equal-Height Two-Column Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ── LEFT COLUMN: REASSURANCE & AUDIT DOSSIER ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4 flex-1 justify-between">
              {terminal.reassurancePoints.map((point) => (
                <div
                  key={point.title}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E6EFF8] shadow-xs flex items-start gap-4 hover:border-[#BFD7FF] transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-docshield-ink mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Assurance Box Anchored Cleanly at Bottom */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-docshield-primary to-[#182C54] text-white space-y-2.5 shadow-md">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#BFD7FF]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Zero Compromise Transparency</span>
              </div>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                We never take donations or hidden convenience markups. Our
                counselors evaluate government university rankings, verified
                hospital bed strength, and FMGE first-attempt passing records.
              </p>
              <div className="pt-1 text-[11px] text-[#BFD7FF]/80 font-mono">
                Advisory Queue: Priority Response Active
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: INTERACTIVE CONSULTATION TERMINAL ── */}
          <div className="lg:col-span-7 flex">
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.35}
              className="w-full p-7 sm:p-10 bg-white rounded-3xl border border-[#BFD7FF]/80 shadow-xl flex flex-col justify-between"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-5">
                    <div className="border-b border-docshield-border pb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-docshield-ink mb-1.5 flex items-center gap-2.5">
                        <Calendar className="w-5 h-5 text-docshield-accent shrink-0" />
                        <span>Request Your Advisory Slot</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-docshield-ink-muted">
                        Fill out your details to receive an institutional fee audit and eligibility report.
                      </p>
                    </div>

                    {/* Row 1: Student Name & Parent Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          Student Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.studentName}
                          onChange={(e) =>
                            setFormData({ ...formData, studentName: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          Parent / Guardian Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. S.K. Sharma"
                          value={formData.parentName}
                          onChange={(e) =>
                            setFormData({ ...formData, parentName: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          WhatsApp / Contact Phone <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul.sharma@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Destination & NEET Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          Preferred Country / Hub
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({ ...formData, destination: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all cursor-pointer"
                        >
                          {terminal.destinations.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          NEET Qualification Status
                        </label>
                        <select
                          value={formData.neetStatus}
                          onChange={(e) =>
                            setFormData({ ...formData, neetStatus: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all cursor-pointer"
                        >
                          {terminal.neetStatusOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Mode of Consultation & Budget Preference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          Mode of Consultation
                        </label>
                        <select
                          value={formData.mode}
                          onChange={(e) =>
                            setFormData({ ...formData, mode: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all cursor-pointer"
                        >
                          {terminal.modes.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                          Total 6-Year Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all cursor-pointer"
                        >
                          {terminal.budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Notes / Specific Queries */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-docshield-ink mb-2">
                        Specific Inquiries or University Preferences
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Looking for English-medium universities in Russia or China with Indian mess, under ₹30 Lakhs package."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-docshield-border bg-[#F8FAFD] text-sm text-docshield-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-docshield-accent/20 focus:border-docshield-accent transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full bg-docshield-primary text-white font-medium text-sm sm:text-base hover:bg-docshield-primary-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Assigning Senior Advisor...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#BFD7FF]" />
                          <span>Confirm Advisory Session (100% Free)</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-docshield-ink-muted mt-3">
                      🔒 Your contact information is strictly confidential. No spam or unsolicited third-party calls.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-12 px-4 space-y-6 my-auto animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold block mb-1">
                      SESSION REQUEST CONFIRMED
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-docshield-ink mb-2">
                      Thank You, {formData.studentName || "Student"}!
                    </h3>
                    <p className="text-sm text-docshield-ink-muted max-w-md mx-auto leading-relaxed">
                      A senior MBBS abroad advisory counselor has been assigned to your request for{" "}
                      <span className="font-semibold text-docshield-ink">{formData.destination}</span>.
                      We will connect with you via WhatsApp/Phone at{" "}
                      <span className="font-mono font-semibold text-docshield-ink">{formData.phone}</span> shortly.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F2F7FF] border border-[#BFD7FF] max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="font-bold text-docshield-ink">Next Steps:</div>
                    <ul className="space-y-1.5 text-docshield-ink-muted">
                      <li>• Keep digital copies of your 10th and 12th marksheets ready.</li>
                      <li>• A customized fee breakdown comparison PDF will be shared with you.</li>
                      <li>• For immediate inquiries, call our desk directly at <span className="font-mono text-docshield-ink font-semibold">+91 98765 43210</span>.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
