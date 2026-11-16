"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/aboutContent";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMissionVision() {
  const { purpose } = aboutContent;
  const { mission, vision } = purpose;
  const sectionRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (missionRef.current) {
        gsap.fromTo(
          missionRef.current,
          { opacity: 0, x: -30 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (visionRef.current) {
        gsap.fromTo(
          visionRef.current,
          { opacity: 0, x: 30 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
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
      id="purpose"
      className="py-24 sm:py-32 bg-white border-b border-[#EFEFEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card (Elevated Spotlight Card) */}
          <div ref={missionRef}>
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.45}
              spotlightSize={450}
              className="p-8 sm:p-10 lg:p-12 bg-docshield-lavender/50 border border-docshield-primary-light/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                      {mission.pill}
                    </span>
                    <div className="w-8 h-px bg-docshield-accent/30" />
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-border">
                    <Target className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-normal text-docshield-ink tracking-tight mb-4">
                  {mission.title}
                </h2>

                <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed mb-8 font-normal">
                  {mission.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-docshield-primary-light/50">
                  {mission.cards.map((item) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl bg-white/90 border border-white/80 hover:border-docshield-accent/40 hover:shadow-md transition-all duration-200 group cursor-default"
                    >
                      <h3 className="text-base font-semibold text-docshield-ink mb-1.5 flex items-center gap-2 group-hover:text-docshield-primary transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-docshield-accent" />
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Vision Card (Elevated Spotlight Card) */}
          <div ref={visionRef}>
            <SpotlightCard
              theme="light"
              spotlightColor="#BFD7FF"
              intensity={0.4}
              spotlightSize={450}
              className="p-8 sm:p-10 lg:p-12 bg-white border border-docshield-border-card/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                      {vision.pill}
                    </span>
                    <div className="w-8 h-px bg-docshield-accent/30" />
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-accent shadow-xs border border-docshield-primary-light/40">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-normal text-docshield-ink tracking-tight mb-4">
                  {vision.title}
                </h2>

                <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed mb-8 font-normal">
                  {vision.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-docshield-border">
                  {vision.cards.map((item) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl bg-docshield-subtle/70 border border-docshield-border hover:border-docshield-accent/40 hover:bg-white hover:shadow-md transition-all duration-200 group cursor-default"
                    >
                      <h3 className="text-base font-semibold text-docshield-ink mb-1.5 flex items-center gap-2 group-hover:text-docshield-primary transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-docshield-accent" />
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
