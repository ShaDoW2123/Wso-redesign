"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DocshieldLottieStage from "./DocshieldLottieStage";

export default function VisionSection() {
  // 7 pills: 5 from user's screenshot + 2 authentic additions ("Clinical acumen", "Global perspectives")
  const floatingPills = [
    { text: "Personal development", pos: "left-[4%] top-[24%] lg:left-[6%] lg:top-[30%]", delay: "0s" },
    { text: "Professional growth", pos: "left-[14%] top-[12%] lg:left-[22%] lg:top-[14%]", delay: "0.5s" },
    { text: "Global knowledge", pos: "right-[4%] top-[20%] lg:right-[7%] lg:top-[22%]", delay: "1s" },
    { text: "Deep understanding", pos: "left-[10%] bottom-[24%] lg:left-[14%] lg:top-[68%]", delay: "3s" },
    { text: "Lifelong learning", pos: "right-[12%] bottom-[28%] lg:right-[18%] lg:top-[60%]", delay: "2.5s" },
    { text: "Clinical acumen", pos: "left-[5%] bottom-[12%] lg:left-[6%] lg:bottom-[12%]", delay: "2s" },
    { text: "Global perspectives", pos: "right-[5%] bottom-[12%] lg:right-[6%] lg:bottom-[12%]", delay: "1.5s" },
  ];

  return (
    <section id="vision" className="w-full px-4 sm:px-8 lg:px-10 py-10 sm:py-16 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl space-y-16 sm:space-y-24">
        
        {/* ── PART 1: THE TOP SKY DOME ("One partner, Your Journey") ── */}
        <div className="relative flex min-h-[580px] lg:min-h-[640px] items-center justify-center rounded-t-[40px] bg-gradient-to-b from-[#4C6DA6] to-white pb-36 pt-24 text-center lg:py-28 overflow-hidden">
          
          {/* Subtle top atmospheric sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-t-[40px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />

          {/* Floating Satellite Pills (borderless, soft frosted translucent) */}
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1400px]">
            {floatingPills.map((pill) => (
              <div
                key={pill.text}
                className={`absolute transition-transform duration-1000 ease-linear ${pill.pos}`}
                style={{
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: pill.delay,
                  willChange: "transform",
                }}
              >
                <span className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm lg:px-6 lg:py-3.5 lg:text-[17px] font-normal text-white select-none transition-all">
                  {pill.text}
                </span>
              </div>
            ))}
          </div>

          {/* Central Hero Stage: Perfectly centered, clean typography */}
          <div className="relative z-10 mx-auto px-4 max-w-[780px]">
            <h2 className="mb-4 text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[110%] text-white tracking-tight">
              One partner, Your Journey
            </h2>

            <p className="mx-auto max-w-[620px] text-base sm:text-lg lg:text-[20px] font-light leading-[140%] text-white/95 mb-9">
              Medical education is extends beyond just earning a degree. It includes:
            </p>

            <div className="flex items-center justify-center">
              <Link
                href="#counselling"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-normal leading-none text-docshield-ink transition-all hover:bg-gray-100 shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Schedule Confidential Counseling</span>
                <ArrowRight className="w-4 h-4 text-docshield-ink" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── PART 2: MIDDLE TRANSITION AREA ── */}
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-center justify-center gap-4 text-center px-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[115%] text-docshield-ink tracking-tight">
            Your Future Is Bigger Than<br />One Destination
          </h3>

          <p className="w-full max-w-[620px] text-base sm:text-lg text-docshield-ink-muted leading-relaxed font-normal">
            We Study Overseas is here to help students to make the best decision of their life with clarity, confidence, preparation and real knowledge.
          </p>
        </div>

        {/* ── PART 3: THE LOWER HORIZON STADIUM WITH EXACT DOCSHIELD ORB ANIMATION ── */}
        <div className="relative w-full overflow-hidden rounded-[40px]">
          <div className="overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#FFF_12.69%,#94AEDA_40.35%,#2F4E82_77.67%)] pb-12 pt-6 sm:pt-10 px-4 sm:px-8">
            {/* The Live Smooth Animated Stage */}
            <div className="relative z-10 w-full">
              <DocshieldLottieStage />
            </div>
          </div>
        </div>

      </div>

      {/* Global CSS float keyframe for floating satellite pills */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
