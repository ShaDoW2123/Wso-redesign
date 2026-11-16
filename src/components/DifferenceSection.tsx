"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeContent } from "@/data/homeContent";

gsap.registerPlugin(ScrollTrigger);

export default function DifferenceSection() {
  const { studentVoices } = homeContent;
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardMetadata = [
    {
      flag: "https://flagcdn.com/w80/ru.png",
      country: "Russia",
      badge: "Verified Student",
      year: "4th Year MBBS",
      bg: "bg-[#F2F7FF] border-[#D8E6FC]",
      accentColor: "text-[#2F4E82]",
      badgeBg: "bg-white/80 text-[#2F4E82] border-blue-200/60",
      avatarBg: "bg-[#000B33] text-white",
      staticRotation: "md:-rotate-2",
      quoteMark: "text-[#BFD7FF]/60",
    },
    {
      flag: "https://flagcdn.com/w80/uz.png",
      country: "Uzbekistan",
      badge: "NMC Compliant",
      year: "3rd Year MBBS",
      bg: "bg-white border-[#E5EBF5] shadow-[0_15px_35px_-10px_rgba(0,11,51,0.07)]",
      accentColor: "text-[#3B5E9B]",
      badgeBg: "bg-[#F2F7FF] text-[#000B33] border-blue-200/70",
      avatarBg: "bg-[#3B5E9B] text-white",
      staticRotation: "md:rotate-1 md:z-20",
      quoteMark: "text-gray-200",
    },
    {
      flag: "https://flagcdn.com/w80/kz.png",
      country: "Kazakhstan",
      badge: "Clinical Rotations",
      year: "5th Year MBBS",
      bg: "bg-[#FFF8F4] border-[#F7DFD0]",
      accentColor: "text-[#8A4A28]",
      badgeBg: "bg-white/80 text-[#8A4A28] border-[#F3CDBC]",
      avatarBg: "bg-[#282624] text-white",
      staticRotation: "md:rotate-3",
      quoteMark: "text-[#F8DDD0]/80",
    },
    {
      flag: "https://flagcdn.com/w80/ge.png",
      country: "Georgia",
      badge: "English Medium",
      year: "4th Year MBBS",
      bg: "bg-[#F0F8FA] border-[#CCE6EE]",
      accentColor: "text-[#1C718A]",
      badgeBg: "bg-white/85 text-[#1C718A] border-[#BEE0EA]",
      avatarBg: "bg-[#1C718A] text-white",
      staticRotation: "md:-rotate-2",
      quoteMark: "text-[#BDE0EB]/70",
    },
    {
      flag: "https://flagcdn.com/w80/kg.png",
      country: "Kyrgyzstan",
      badge: "FMGE Mentorship",
      year: "3rd Year MBBS",
      bg: "bg-[#F2F7FF] border-[#C9DDFD]",
      accentColor: "text-[#2F4E82]",
      badgeBg: "bg-white/85 text-[#000B33] border-[#BFD7FF]",
      avatarBg: "bg-[#000B33] text-white",
      staticRotation: "md:rotate-2",
      quoteMark: "text-[#BFD7FF]/60",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const watermark = watermarkRef.current;
    const track = trackRef.current;
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (!section || !track || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const animState = { progress: 0 };

        const positionCardsOnArc = (progress: number) => {
          const stageWidth = track.clientWidth || window.innerWidth;
          const cardWidth = cards[0].offsetWidth || 330;

          if (watermark) {
            const watermarkWidth = watermark.scrollWidth || stageWidth * 1.2;
            const maxWatermarkTravel = Math.max(
              stageWidth * 0.18,
              (watermarkWidth - stageWidth) * 0.5 + stageWidth * 0.08
            );
            const watermarkX = gsap.utils.interpolate(
              maxWatermarkTravel,
              -maxWatermarkTravel,
              progress
            );
            gsap.set(watermark, {
              x: watermarkX,
              force3D: true,
            });
          }

          // Circular arc centered far below the stage so cards sweep in from bottom-right,
          // peak upright at center, and sweep down off the bottom-left edge.
          const radius = Math.max(820, stageWidth * 1.22);
          const spacingPx =
            stageWidth >= 768
              ? Math.max(cardWidth + 30, Math.min(stageWidth * 0.285, cardWidth + 52))
              : cardWidth + 48;

          const stepAngle = Math.asin(Math.min(0.45, spacingPx / radius));
          const edgeOffsetPx = stageWidth / 2 + cardWidth / 2 + 100;
          const edgeAngle = Math.asin(Math.min(0.84, edgeOffsetPx / radius));

          const totalTravelAngle =
            2 * edgeAngle + Math.max(0, cards.length - 1) * stepAngle;

          cards.forEach((card, idx) => {
            const startAngle = edgeAngle + idx * stepAngle;
            const angle = startAngle - progress * totalTravelAngle;
            const absAngle = Math.abs(angle);

            // Extend linearly along the tangent beyond edgeAngle so off-screen cards
            // never curve back toward center on narrow screens.
            let x: number;
            let y: number;
            if (absAngle <= edgeAngle) {
              x = radius * Math.sin(angle);
              y = radius * (1 - Math.cos(angle));
            } else {
              const sign = Math.sign(angle);
              const excess = absAngle - edgeAngle;
              x =
                sign *
                radius *
                (Math.sin(edgeAngle) + Math.cos(edgeAngle) * excess);
              y =
                radius *
                (1 - Math.cos(edgeAngle) + Math.sin(edgeAngle) * excess);
            }

            const rotation = (angle * 180) / Math.PI * 0.9;
            const zIndex = 30 - Math.min(20, Math.round(absAngle * 15));

            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              x,
              y,
              rotation,
              zIndex,
              force3D: true,
            });
          });
        };

        positionCardsOnArc(0);
        gsap.set(track, { opacity: 1 });

        gsap.to(animState, {
          progress: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * (1.4 + cards.length * 0.3))}`,
            pin: true,
            scrub: 0.25,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => positionCardsOnArc(animState.progress),
          },
          onUpdate: () => positionCardsOnArc(animState.progress),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(track, { opacity: 1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[660px] h-screen max-h-[960px] motion-reduce:h-auto motion-reduce:max-h-none motion-reduce:py-24 overflow-hidden bg-white flex flex-col justify-between pt-20 pb-5 sm:pt-24 sm:pb-7 lg:pt-28 lg:pb-8"
    >
      {/* Giant Typography Background Watermark that glides horizontally on scroll */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.055] overflow-hidden z-0">
        <span
          ref={watermarkRef}
          className="inline-block text-[14vw] font-normal text-docshield-ink uppercase tracking-tight leading-none whitespace-nowrap will-change-transform"
        >
          The WSO Difference
        </span>
      </div>

      {/* Section Header */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10 shrink-0">
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
            {studentVoices.pill}
          </span>
          <div className="w-8 h-px bg-docshield-accent/30" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-2.5">
          The WSO Difference
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-docshield-ink-muted leading-relaxed">
          {studentVoices.subtext}
        </p>
      </div>

      {/* Curved Arc Card Stage (GSAP ScrollTrigger + Lenis) */}
      <div
        ref={trackRef}
        className="relative z-20 flex-1 w-full min-h-[320px] opacity-0 motion-reduce:opacity-100 motion-reduce:flex motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6 motion-reduce:max-w-6xl motion-reduce:mx-auto motion-reduce:px-4 motion-reduce:my-12"
      >
        {studentVoices.stories.map((story, idx) => {
          const meta = cardMetadata[idx % cardMetadata.length];

          return (
            <div
              key={story.name}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className={`motion-safe:absolute motion-safe:left-1/2 motion-safe:top-[44%] w-[300px] sm:w-[310px] xl:w-[340px] will-change-transform motion-reduce:w-full motion-reduce:md:w-[calc(50%-0.75rem)] motion-reduce:lg:w-[calc(33.333%-1rem)] ${meta.staticRotation}`}
            >
              <div
                className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(0,11,51,0.14)] ${meta.bg}`}
              >
                {/* Decorative Giant Quote Glyph */}
                <span
                  className={`absolute top-4 right-5 text-5xl sm:text-6xl font-serif select-none pointer-events-none leading-none font-bold ${meta.quoteMark}`}
                  aria-hidden="true"
                >
                  “
                </span>

                {/* Top Pill / Country Tag */}
                <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 border border-black/5 shadow-xs text-xs font-semibold text-docshield-ink whitespace-nowrap shrink-0">
                    <div className="relative w-4 h-3 rounded-xs overflow-hidden shrink-0 shadow-xs">
                      <Image
                        src={meta.flag}
                        alt={meta.country}
                        fill
                        className="object-cover"
                        sizes="16px"
                      />
                    </div>
                    <span>{meta.country}</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full border text-[10.5px] sm:text-[11px] font-semibold tracking-wide whitespace-nowrap shrink-0 ${meta.badgeBg}`}
                  >
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {meta.badge}
                  </span>
                </div>

                {/* 5 Golden Star Rating */}
                <div className="flex items-center gap-1 mb-2.5 relative z-10 text-amber-400">
                  {[...Array(5)].map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-semibold text-docshield-ink/80 ml-1.5 font-sans">
                    5.0
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-sm sm:text-[15px] text-docshield-ink leading-relaxed mb-4 sm:mb-5 relative z-10">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-3.5 border-t border-black/5 relative z-10">
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-xs ring-2 ring-white ${meta.avatarBg}`}
                  >
                    <span>{story.avatarInitials}</span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-docshield-ink text-sm sm:text-base truncate">
                      {story.name}
                    </span>
                    <span className="text-xs text-docshield-ink-muted leading-tight truncate">
                      {story.university}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Trust Micro-Bar */}
      <div className="px-4 text-center relative z-30 shrink-0">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-docshield-lavender/60 border border-docshield-primary-light/40 text-xs sm:text-sm text-docshield-ink">
          <span className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            100% Genuine Student Reviews
          </span>
          <span className="hidden sm:inline text-docshield-ink-muted/40">•</span>
          <span className="font-medium text-docshield-ink-muted">
            4.9/5 Rating Across 500+ Verified Aspirants
          </span>
        </div>
      </div>
    </section>
  );
}
