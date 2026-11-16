"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { X, Check, ShieldCheck, AlertTriangle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutAgencyCompare() {
  const { agencyComparison } = aboutContent;
  const { traditional, wso } = agencyComparison;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -25 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, x: 25 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="agency-compare"
      className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {agencyComparison.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {agencyComparison.headline}
          </h2>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {agencyComparison.subtext}
          </p>
        </div>

        {/* 2-Column Side-by-Side Audit Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Traditional Agencies (Muted Slate / Red Crosses) */}
          <div ref={leftColRef} className="h-full">
            <div className="h-full rounded-3xl p-8 sm:p-10 bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                      Traditional Agencies
                    </h3>
                    <span className="text-xs text-slate-500">
                      Commercial recruitment model
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100/90 text-red-700 border border-red-200">
                    {traditional.badge}
                  </span>
                </div>

                <div className="space-y-6">
                  {traditional.points.map((pt) => (
                    <div key={pt.title} className="flex items-start gap-3.5 group">
                      <div className="w-6 h-6 rounded-full bg-red-100/80 flex items-center justify-center shrink-0 mt-0.5 text-red-600">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 mb-1">
                          {pt.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>High risk of non-compliant universities & hidden commissions</span>
              </div>
            </div>
          </div>

          {/* We Study Overseas (Elevated Spotlight Card / Clinical Blues / Green Checks) */}
          <div ref={rightColRef} className="h-full">
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.45}
              spotlightSize={450}
              className="h-full p-8 sm:p-10 bg-[#F2F7FF] border border-[#BFD7FF] shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#4C6DA6]" />

              <div>
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#BFD7FF]/60">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#000B33]">
                      We Study Abroad
                    </h3>
                    <span className="text-xs text-docshield-accent font-medium">
                      Institutional medical advisory
                    </span>
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#000B33] text-white shadow-md">
                    {wso.badge}
                  </span>
                </div>

                <div className="space-y-6">
                  {wso.points.map((pt) => (
                    <div key={pt.title} className="flex items-start gap-3.5 group">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-700 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#000B33] mb-1">
                          {pt.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#BFD7FF]/60 flex items-center gap-2 text-xs font-semibold text-[#000B33]">
                <ShieldCheck className="w-4 h-4 text-[#2F4E82] shrink-0" />
                <span>Guaranteed 100% student-aligned counsel with legal contract</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
