import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#24529E]"
      style={{ isolation: "isolate" }}
    >
      {/* Authentic Docshield Celestial Atmosphere Gradient Background (Layered directly inside section) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base rich sky-to-light vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C478F] via-[#4875BA] via-60% to-[#E8F1FC]" />

        {/* Top-left deep atmospheric royal/cobalt blue glow */}
        <div
          className="absolute blur-[80px] md:blur-[140px]"
          style={{
            width: "min(1400px, 160vw)",
            height: "min(850px, 100vh)",
            left: "-200px",
            top: "-220px",
            background:
              "linear-gradient(180deg, #092868 0%, #153F8D 50%, #4673B8 100%)",
            borderRadius: "9999px",
            opacity: 0.95,
          }}
        />

        {/* Top-right ambient azure glow */}
        <div
          className="absolute blur-[90px] md:blur-[150px]"
          style={{
            width: "min(1000px, 120vw)",
            height: "min(700px, 80vh)",
            right: "-150px",
            top: "-120px",
            background:
              "radial-gradient(circle, #25529F 0%, #537FBF 60%, transparent 100%)",
            opacity: 0.85,
          }}
        />

        {/* Bottom-right warm peach glow (Docshield signature light) */}
        <div
          className="absolute rounded-full blur-3xl md:blur-[100px]"
          style={{
            width: "min(700px, 80vw)",
            height: "min(600px, 70vh)",
            right: "-60px",
            bottom: "0px",
            background: "#FFDFCB",
            opacity: 0.65,
          }}
        />

        {/* Bottom white horizon blend into the next section */}
        <div
          className="absolute rounded-full blur-2xl md:blur-[90px]"
          style={{
            width: "min(1400px, 150vw)",
            height: "min(350px, 40vh)",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-60px",
            background: "#FFFFFF",
            opacity: 0.95,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10">
        {/* Pill Badge Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm mb-6 animate-in fade-in duration-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {hero.badge}
          </span>
        </div>

        {/* Hero Headline - Crisp Bold White with Subtle Depth */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 drop-shadow-md">
          {hero.headline}
        </h1>

        {/* Lead Paragraph - Soft Luminous White */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-sm">
          {hero.subtext}
        </p>

        {/* Dual Pill CTA Buttons (Docshield Style: White Primary + Soft Blue Secondary) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-14 w-full sm:w-auto">
          <Link
            href="#destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-docshield-primary hover:bg-gray-100 font-semibold text-sm sm:text-base transition-all shadow-lg active:scale-95 group"
          >
            <span>{hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-docshield-primary" />
          </Link>
          <Link
            href="#counselling"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-docshield-primary-light text-docshield-primary hover:bg-docshield-primary-light-hover font-semibold text-sm sm:text-base transition-all shadow-md active:scale-95"
          >
            {hero.secondaryCta}
          </Link>
        </div>

        {/* Reverted Hero Center Visual - Wide High-Impact Frame (max-w-3xl aspect-[16/10] sm:aspect-[16/9]) */}
        <div className="relative w-full max-w-3xl mx-auto mt-2">
          {/* Main Card Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src="/assets/hero-img.png"
              alt="MBBS Medical Student"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Soft gradient overlay at bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-docshield-primary/70 via-transparent to-transparent" />

            {/* Bottom Card Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-docshield-primary-light" />
                </span>
                <span className="text-xs sm:text-sm font-medium drop-shadow-md">
                  Over 10,000+ Indian Aspirants Guided Overseas
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                <span>Admissions 2027 Active</span>
              </div>
            </div>
          </div>

          {/* Floating Trust Pill - Top Left */}
          <div className="hidden sm:flex absolute -top-4 -left-6 glass-pill px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-docshield-ink border border-white animate-in slide-in-from-left duration-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>NMC & WHO Compliant</span>
          </div>

          {/* Floating Trust Pill - Top Right */}
          <div className="hidden sm:flex absolute -top-4 -right-6 glass-pill px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-xs font-semibold text-docshield-ink border border-white animate-in slide-in-from-right duration-700">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>100% English Medium</span>
          </div>
        </div>
      </div>
    </section>
  );
}
