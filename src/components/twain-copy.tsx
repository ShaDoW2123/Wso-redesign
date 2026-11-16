"use client";

import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, GraduationCap, RotateCw, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface QuoteSegment {
  text: string;
  highlight?: boolean;
}

interface TwainCardData {
  id: string;
  chip: string;
  metric: string;
  caption: string;
  university: string;
  institutionBadge: "hospital" | "shield" | "cap";
  quoteParagraphs: QuoteSegment[][];
  authorName: string;
  authorInitials: string;
  authorRole: string;
  theme: {
    gradient: string;
    chipBg: string;
    mutedColor: string;
    inkColor: string;
    quoteMarkColor: string;
    highlightBg: string;
    highlightLine: string;
    avatarBg: string;
  };
}

const TWAIN_CARDS: TwainCardData[] = [
  {
    id: "clinical-exposure",
    chip: "Clinical exposure",
    metric: "8,000+ beds",
    caption: "Affiliated government teaching hospitals",
    university: "Bashkir State",
    institutionBadge: "hospital",
    quoteParagraphs: [
      [
        { text: "Before counseling with WSO, every brochure looked identical and ignored ward depth. Now we train across " },
        { text: "8,000+ hospital beds", highlight: true },
        { text: " with supervised " },
        { text: "daily ward rounds", highlight: true },
        { text: " in major clinics." },
      ],
      [
        { text: "Across six semesters here, our diagnostic confidence grew faster than we ever imagined." },
      ],
    ],
    authorName: "Aditi Sharma",
    authorInitials: "AS",
    authorRole: "4th Year MBBS · Bashkir State",
    theme: {
      gradient: "linear-gradient(180deg, #EAF2FF 0%, #DCE9FF 100%)",
      chipBg: "rgba(47, 78, 130, 0.09)",
      mutedColor: "#2F4E82",
      inkColor: "#000B33",
      quoteMarkColor: "#4C6DA6",
      highlightBg: "rgba(191, 215, 255, 0.85)",
      highlightLine: "#4C6DA6",
      avatarBg: "#D2E3FF",
    },
  },
  {
    id: "academic-standards",
    chip: "Academic standards",
    metric: "100% English",
    caption: "NMC 2021 Gazette compliant curriculum",
    university: "Tbilisi State",
    institutionBadge: "shield",
    quoteParagraphs: [
      [
        { text: "Most abroad agencies push unverified seats without checking licensure rules." },
      ],
      [
        { text: "WSO’s " },
        { text: "verified audit", highlight: true },
        { text: " checked every term against " },
        { text: "NMC & NExT rules", highlight: true },
        { text: ", covering 54 months study and internship." },
      ],
      [
        { text: "It’s the only guidance transparent enough for doctors’ families." },
      ],
    ],
    authorName: "Rahul Mehra",
    authorInitials: "RM",
    authorRole: "2nd Year MBBS · Tbilisi State",
    theme: {
      gradient: "linear-gradient(180deg, #E8F4F8 0%, #D9ECF3 100%)",
      chipBg: "rgba(28, 113, 138, 0.09)",
      mutedColor: "#1C718A",
      inkColor: "#000B33",
      quoteMarkColor: "#1C718A",
      highlightBg: "rgba(186, 224, 237, 0.85)",
      highlightLine: "#1C718A",
      avatarBg: "#CFE8F0",
    },
  },
  {
    id: "admission-timeline",
    chip: "Admission speed",
    metric: "14 days",
    caption: "Direct university seat & visa readiness",
    university: "Samarkand State",
    institutionBadge: "cap",
    quoteParagraphs: [
      [
        { text: "With WSO managing apostille, invitations, and embassy filings, our seat confirmation took " },
        { text: "just 14 days", highlight: true },
        { text: " instead of months of uncertainty." },
      ],
      [
        { text: "Zero hidden consultancy markups—just a " },
        { text: "direct fee ledger", highlight: true },
        { text: " straight from the dean’s office and guided hostel arrival." },
      ],
    ],
    authorName: "Sneha Nair",
    authorInitials: "SN",
    authorRole: "3rd Year MBBS · Samarkand State",
    theme: {
      gradient: "linear-gradient(180deg, #F2F7FF 0%, #E6EEF9 100%)",
      chipBg: "rgba(59, 94, 155, 0.09)",
      mutedColor: "#3B5E9B",
      inkColor: "#000B33",
      quoteMarkColor: "#3B5E9B",
      highlightBg: "rgba(210, 227, 255, 0.9)",
      highlightLine: "#3B5E9B",
      avatarBg: "#DCE8FA",
    },
  },
];

const HEADING_LINES = [
  "To an Indian aspirant,",
  "the university is",
  "the foundation",
];

const STORY_PARAGRAPHS = [
  {
    id: "p1",
    body: "Families rarely see past the brochure. Not the hidden hostel markups, not the bilingual ward shifts, not the NMC Gazette gaps left unverified.",
    verdict: null,
  },
  {
    id: "p2",
    body: "They see one degree certificate at graduation. That credential is the entire foundation of your medical career. If the university falls short, none of it counts.",
    verdict: null,
  },
  {
    id: "p3",
    body: "Everything depends on the choice you get right once. You invest six years of effort, yet agents still pitch commission-heavy seats.",
    verdict: null,
  },
  {
    id: "p4",
    body: "Auditing 50+ global medical faculties alone is exhausting, so students risk outdated guides or vague promises.",
    verdict: "Both cost years.",
  },
];

function deterministicScatter(charIndex: number) {
  const seedA = ((charIndex * 37 + 13) % 29) - 14;
  const seedB = (charIndex * 53 + 7) % 19;
  const seedC = ((charIndex * 71 + 19) % 40) - 20;
  return {
    dx: seedA * 6.5,
    dy: 130 + seedB * 14,
    rot: seedC * 1.4,
    staggerOffset: (charIndex % 11) * 0.014,
  };
}

function PartnerMark({
  badge,
  label,
  color,
}: {
  badge: TwainCardData["institutionBadge"];
  label: string;
  color: string;
}) {
  const Icon =
    badge === "hospital"
      ? Building2
      : badge === "shield"
        ? ShieldCheck
        : GraduationCap;

  return (
    <div
      className="flex items-center gap-2 font-sans text-[15px] font-semibold tracking-tight opacity-85"
      style={{ color }}
    >
      <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.9} />
      <span>{label}</span>
    </div>
  );
}

function QuoteGlyph({ color }: { color: string }) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
      className="mb-2 block shrink-0"
      style={{ color }}
    >
      <path
        d="M8.9 0.8L5.7 7.7H8.8V15.2H0.9V7.9L4.4 0.8H8.9ZM20.9 0.8L17.7 7.7H20.8V15.2H12.9V7.9L16.4 0.8H20.9Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
    </svg>
  );
}

function FrontMetricFace({
  card,
  className = "",
}: {
  card: TwainCardData;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-between rounded-[36px] p-7 xl:p-8 select-none ${className}`}
      style={{
        background: card.theme.gradient,
        boxShadow:
          "0 1.5px 0 0 #FFFFFF, inset 0 1px 0 0 rgba(47, 78, 130, 0.07), 0 18px 40px -22px rgba(0, 11, 51, 0.12)",
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="inline-flex items-center rounded-[28px] px-2.5 py-1 text-[13px] font-medium leading-[18px]"
          style={{
            backgroundColor: card.theme.chipBg,
            color: card.theme.mutedColor,
            boxShadow:
              "0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 1px 0 0 rgba(47, 78, 130, 0.08)",
          }}
        >
          {card.chip}
        </span>
      </div>

      <div className="my-auto pt-2">
        <h3
          className="font-serif text-[32px] xl:text-[36px] 2xl:text-[40px] font-normal leading-[1.02] tracking-[-0.025em] [font-variant-numeric:lining-nums_tabular-nums]"
          style={{ color: card.theme.inkColor }}
        >
          {card.metric}
        </h3>
        <p
          className="mt-2.5 font-sans text-[15px] leading-[1.45] opacity-90"
          style={{ color: card.theme.mutedColor }}
        >
          {card.caption}
        </p>
      </div>

      <div className="flex items-end justify-end pt-2">
        <PartnerMark
          badge={card.institutionBadge}
          label={card.university}
          color={card.theme.mutedColor}
        />
      </div>
    </div>
  );
}

function BackQuoteFace({
  card,
  animateHighlights = true,
  className = "",
}: {
  card: TwainCardData;
  animateHighlights?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-between rounded-[36px] p-6 xl:p-7 ${className}`}
      style={{
        background: card.theme.gradient,
        boxShadow:
          "0 1.5px 0 0 #FFFFFF, inset 0 1px 0 0 rgba(47, 78, 130, 0.07), 0 22px 46px -22px rgba(0, 11, 51, 0.14)",
      }}
    >
      <div className="pt-0.5">
        <QuoteGlyph color={card.theme.quoteMarkColor} />
        <div
          className="space-y-2.5 font-sans text-[14.5px] xl:text-[15.5px] 2xl:text-[16.5px] leading-[1.52]"
          style={{ color: card.theme.inkColor }}
        >
          {card.quoteParagraphs.map((para, pIdx) => (
            <p key={pIdx}>
              {para.map((segment, sIdx) =>
                segment.highlight ? (
                  <span
                    key={sIdx}
                    className="relative inline-block px-0.5 font-medium"
                  >
                    <span
                      aria-hidden="true"
                      className={`twain-quote-hl pointer-events-none absolute inset-x-0 bottom-[2px] top-[18%] -z-[0] rounded-[4px] ${
                        animateHighlights ? "origin-left" : ""
                      }`}
                      style={{
                        backgroundColor: card.theme.highlightBg,
                        borderBottom: `1.5px solid ${card.theme.highlightLine}`,
                      }}
                    />
                    <span className="relative z-[1]">{segment.text}</span>
                  </span>
                ) : (
                  <span key={sIdx}>{segment.text}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3.5 pt-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] font-sans text-[13px] font-semibold tracking-tight"
          style={{
            backgroundColor: card.theme.avatarBg,
            color: card.theme.inkColor,
            boxShadow:
              "0 1px 0 0 rgba(255, 255, 255, 0.65), inset 0 1px 0 0 rgba(47, 78, 130, 0.1)",
          }}
        >
          {card.authorInitials}
        </div>
        <div className="min-w-0">
          <p
            className="truncate font-sans text-[14.5px] font-semibold leading-snug"
            style={{ color: card.theme.inkColor }}
          >
            {card.authorName}
          </p>
          <p
            className="truncate font-sans text-[13px] leading-snug opacity-80"
            style={{ color: card.theme.mutedColor }}
          >
            {card.authorRole}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Recreates the 3-phase Twain.ai scroll-driven showcase adapted to We Study Overseas
 * clinical blue colors & MBBS abroad copy (without any 3D paper plane or dustbin).
 *
 * Phase 1: Three side-by-side metric cards that stagger and slide behind the rising narrative panel.
 * Phase 2: Rounded narrative stage with staircase-to-aligned heading, typographic shatter,
 *          and sequential paragraph illumination + verdict sweep.
 * Phase 3: Cascading card convergence into a tilted deck, pinning, horizontal fan-out + 180deg
 *          3D flip onto verified student testimonials with animated quote highlights.
 */
export default function TwainCopy() {
  const sectionId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  // Phase 1 refs
  const frontSectionRef = useRef<HTMLDivElement>(null);
  const frontRowRef = useRef<HTMLDivElement>(null);
  const frontCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Phase 2 refs
  const painSectionRef = useRef<HTMLDivElement>(null);
  const painWrapperRef = useRef<HTMLDivElement>(null);
  const headingLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const shatterCharRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const storyParaRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const verdictBarRef = useRef<HTMLSpanElement>(null);

  // Phase 3 refs
  const backSectionRef = useRef<HTMLDivElement>(null);
  const backPinRef = useRef<HTMLDivElement>(null);
  const backCascadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backSlotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backFlipperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileFlipped, setMobileFlipped] = useState<Record<string, boolean>>({});
  const [frontActiveDot, setFrontActiveDot] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const is2Xl = window.innerWidth >= 1536;
          const isXl = window.innerWidth >= 1280;
          const cardWidth = is2Xl ? 352 : isXl ? 332 : 300;
          const slotOffset = cardWidth + 16;

          // ── PHASE 1: Front Cards Descend Into Background of Narrative Panel ──
          if (frontSectionRef.current && frontRowRef.current && painSectionRef.current) {
            const frontCards = frontCardRefs.current.filter(
              Boolean
            ) as HTMLDivElement[];
            if (frontCards.length === 3) {
              const getLayoutTopInRoot = (el: HTMLElement) => {
                let top = 0;
                let cur: HTMLElement | null = el;
                while (cur && cur !== root) {
                  top += cur.offsetTop;
                  cur = cur.offsetParent as HTMLElement | null;
                }
                return top;
              };

              const getDiveY = (staggerOffset: number) => {
                const fRow = frontRowRef.current;
                const pSec = painSectionRef.current;
                if (!fRow || !pSec) return 740 + staggerOffset;
                const painHost = pSec.parentElement?.classList.contains("pin-spacer")
                  ? pSec.parentElement
                  : pSec;
                const rowCenter =
                  getLayoutTopInRoot(fRow) + fRow.offsetHeight * 0.5;
                // Use pSec.offsetHeight (actual panel height), NOT pin-spacer height.
                const painCenter =
                  getLayoutTopInRoot(painHost) + pSec.offsetHeight * 0.5;
                return painCenter - rowCenter + staggerOffset;
              };

              const convergeX = Math.max(cardWidth - 4, 260);
              gsap.set(frontCards[0], { zIndex: 1 });
              gsap.set(frontCards[1], { zIndex: 2 });
              gsap.set(frontCards[2], { zIndex: 3 });

              const diveTl = gsap.timeline({
                scrollTrigger: {
                  trigger: frontSectionRef.current,
                  start: "top 90px",
                  endTrigger: painSectionRef.current,
                  end: "center 55%",
                  scrub: 0.5,
                  invalidateOnRefresh: true,
                },
              });

              // Pure, organic staggered cascade matching Twain.ai 5-stage reference
              // Card 0 (Left: "8,000+ beds") dives first across 0 -> 0.82
              diveTl.to(
                frontCards[0],
                {
                  y: () => getDiveY(24),
                  x: convergeX,
                  rotateZ: -3.5,
                  scale: 0.94,
                  ease: "power1.inOut",
                  duration: 0.82,
                },
                0
              );

              // Card 1 (Center: "100% English") dives second
              // Early gentle float (0 -> 0.10), then main dive (0.10 -> 0.90)
              diveTl
                .to(
                  frontCards[1],
                  {
                    y: () => getDiveY(0) * 0.06,
                    x: 0,
                    rotateZ: -0.2,
                    scale: 0.99,
                    ease: "none",
                    duration: 0.1,
                  },
                  0
                )
                .to(
                  frontCards[1],
                  {
                    y: () => getDiveY(0),
                    x: 0,
                    rotateZ: -1.0,
                    scale: 0.97,
                    ease: "power1.inOut",
                    duration: 0.8,
                  },
                  0.1
                );

              // Card 2 (Right: "14 days") dives third (last)
              // Floating below navbar (0 -> 0.20), then main dive (0.20 -> 0.96)
              diveTl
                .to(
                  frontCards[2],
                  {
                    y: () => getDiveY(-24) * 0.12,
                    x: -convergeX * 0.04,
                    rotateZ: 0.5,
                    scale: 1,
                    ease: "none",
                    duration: 0.2,
                  },
                  0
                )
                .to(
                  frontCards[2],
                  {
                    y: () => getDiveY(-24),
                    x: -convergeX,
                    rotateZ: 2.8,
                    scale: 1,
                    ease: "power1.inOut",
                    duration: 0.76,
                  },
                  0.2
                );

              // Keep occluded behind #F2F7FF once fully inside its vertical bounds
              // so the pinned Phase 2 scroll never lifts them back into navbar space.
              diveTl.to(
                frontCards,
                {
                  autoAlpha: 0,
                  duration: 0.04,
                  ease: "none",
                },
                0.96
              );
            }
          }

          // ── PHASE 2A: Heading Staircase -> Left Flush Lock ──
          const headingLines = headingLineRefs.current.filter(
            Boolean
          ) as HTMLSpanElement[];
          if (painSectionRef.current && headingLines.length === 3) {
            gsap.set(headingLines[0], { x: 0 });
            gsap.set(headingLines[1], { x: 96 });
            gsap.set(headingLines[2], { x: 204 });

            gsap.to(headingLines, {
              x: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: painSectionRef.current,
                start: "top 92%",
                end: "top 24%",
                scrub: 0.35,
              },
            });
          }

          // ── PHASE 2B: Pinned Narrative Illumination + Typographic Shatter ──
          const paras = storyParaRefs.current.filter(
            Boolean
          ) as HTMLParagraphElement[];
          const chars = shatterCharRefs.current.filter(
            Boolean
          ) as HTMLSpanElement[];

          if (painSectionRef.current && paras.length > 0) {
            gsap.set(paras, { color: "#A7B8D0", opacity: 0.55 });
            if (verdictBarRef.current) {
              gsap.set(verdictBarRef.current, { scaleX: 0 });
            }

            const painTl = gsap.timeline({
              scrollTrigger: {
                trigger: painSectionRef.current,
                start: "center 55%",
                end: "+=1550",
                pin: true,
                scrub: 0.35,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // Sequential paragraph illumination across 0 -> 0.85
            paras.forEach((pEl, idx) => {
              const startAt = idx * 0.18;
              painTl.to(
                pEl,
                {
                  color: "#000B33",
                  opacity: 1,
                  duration: 0.2,
                  ease: "power1.out",
                },
                startAt
              );
            });

            // Verdict highlight bar under "Both cost years."
            if (verdictBarRef.current) {
              painTl.to(
                verdictBarRef.current,
                {
                  scaleX: 1,
                  duration: 0.15,
                  ease: "power2.out",
                },
                0.7
              );
            }

            // Organic letter scatter without any dustbin/plane
            chars.forEach((charEl, cIdx) => {
              const { dx, dy, rot, staggerOffset } =
                deterministicScatter(cIdx);
              painTl.to(
                charEl,
                {
                  x: dx,
                  y: dy,
                  rotateZ: rot,
                  opacity: 0,
                  duration: 0.38,
                  ease: "power2.in",
                },
                0.4 + staggerOffset
              );
            });
          }

          // ── PHASE 3: Cascading Convergence -> Deck -> Un-stack + 3D Flip -> Highlights ──
          const cascades = backCascadeRefs.current.filter(
            Boolean
          ) as HTMLDivElement[];
          const slots = backSlotRefs.current.filter(
            Boolean
          ) as HTMLDivElement[];
          const flippers = backFlipperRefs.current.filter(
            Boolean
          ) as HTMLDivElement[];
          const quoteHighlightBars = Array.from(
            root.querySelectorAll<HTMLElement>(
              ".twain-back-stage .twain-quote-hl"
            )
          );

          if (
            backSectionRef.current &&
            backPinRef.current &&
            cascades.length === 3 &&
            slots.length === 3 &&
            flippers.length === 3
          ) {
            // Initial pre-pin staggered cascade state emerging directly from beneath pain-story
            gsap.set(cascades[0], { y: -200 });
            gsap.set(cascades[1], { y: -290 });
            gsap.set(cascades[2], { y: -380 });

            // Deck posture inside center stage
            gsap.set(slots[0], {
              x: -16,
              y: -26,
              rotateZ: -3.5,
              scale: 0.94,
              zIndex: 1,
            });
            gsap.set(slots[1], {
              x: 0,
              y: -10,
              rotateZ: -1.0,
              scale: 0.97,
              zIndex: 2,
            });
            gsap.set(slots[2], {
              x: 16,
              y: 8,
              rotateZ: 2.8,
              scale: 1,
              zIndex: 3,
            });

            flippers.forEach((flipEl) => {
              gsap.set(flipEl, { rotateY: 0 });
            });

            if (quoteHighlightBars.length > 0) {
              gsap.set(quoteHighlightBars, { scaleX: 0 });
            }

            // Pre-pin emergence down out of pain-story bottom into tight tilted deck
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: backSectionRef.current,
                  start: "top 98%",
                  end: "top 18%",
                  scrub: 0.35,
                },
              })
              .to(cascades, { y: 0, ease: "power2.out", stagger: 0.04 }, 0);

            // Pinned deck un-stack + simultaneous 180deg 3D flip + quote highlight sweeps
            const backTl = gsap.timeline({
              scrollTrigger: {
                trigger: backPinRef.current,
                start: "center center",
                end: "+=1600",
                pin: true,
                scrub: 0.4,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // Brief beat holding stacked tilted deck cleanly in frame (0 -> 0.14)
            // Fan horizontally into 3 equal columns (0.14 -> 0.58)
            backTl
              .to(
                slots[0],
                {
                  x: -slotOffset,
                  y: 0,
                  rotateZ: 0,
                  scale: 1,
                  duration: 0.44,
                  ease: "power2.inOut",
                },
                0.14
              )
              .to(
                slots[1],
                {
                  x: 0,
                  y: 0,
                  rotateZ: 0,
                  scale: 1,
                  duration: 0.44,
                  ease: "power2.inOut",
                },
                0.14
              )
              .to(
                slots[2],
                {
                  x: slotOffset,
                  y: 0,
                  rotateZ: 0,
                  scale: 1,
                  duration: 0.44,
                  ease: "power2.inOut",
                },
                0.14
              );

            // Simultaneous staggered 180deg 3D flip (0.18 -> 0.62)
            flippers.forEach((flipEl, fIdx) => {
              backTl.to(
                flipEl,
                {
                  rotateY: 180,
                  duration: 0.42,
                  ease: "power2.inOut",
                },
                0.18 + fIdx * 0.025
              );
            });

            // Animated highlight bar sweeps inside flipped testimonial quotes (0.64 -> 0.94)
            quoteHighlightBars.forEach((bar, hIdx) => {
              backTl.to(
                bar,
                {
                  scaleX: 1,
                  duration: 0.12,
                  ease: "power2.out",
                },
                0.64 + hIdx * 0.045
              );
            });
          }

          return undefined;
        }
      );

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const paras = storyParaRefs.current.filter(
          Boolean
        ) as HTMLParagraphElement[];
        gsap.set(paras, { color: "#000B33", opacity: 1 });
        if (verdictBarRef.current) {
          gsap.set(verdictBarRef.current, { scaleX: 1 });
        }
        const quoteHighlightBars = root.querySelectorAll<HTMLElement>(
          ".twain-back-stage .twain-quote-hl"
        );
        gsap.set(quoteHighlightBars, { scaleX: 1 });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const handleFrontScrollSnap = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const width = el.clientWidth;
    if (width <= 0) return;
    const index = Math.min(
      TWAIN_CARDS.length - 1,
      Math.max(0, Math.round(el.scrollLeft / (width * 0.78)))
    );
    setFrontActiveDot(index);
  };

  const toggleMobileCard = (cardId: string) => {
    setMobileFlipped((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  let runningCharIdx = 0;

  return (
    <section
      id="why-abroad"
      ref={rootRef}
      aria-labelledby={sectionId}
      className="relative w-full overflow-x-clip bg-white text-[#000B33]"
    >
      {/* ════════════════════════════════════════════════════════════════
          PHASE 1: FRONT METRIC CARDS (Side-by-Side -> Staggered Slide)
          ════════════════════════════════════════════════════════════════ */}
      <div
        ref={frontSectionRef}
        className="relative z-[1] py-14 sm:py-16 lg:pb-[156px] lg:pt-[96px] xl:pb-[176px] xl:pt-[112px]"
      >
        {/* Desktop 3-column front stage */}
        <div
          ref={frontRowRef}
          className="mx-auto hidden max-w-[1440px] items-center justify-center gap-4 px-6 lg:flex"
        >
          {TWAIN_CARDS.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => {
                frontCardRefs.current[idx] = el;
              }}
              className="h-[390px] w-[300px] shrink-0 will-change-transform xl:h-[412px] xl:w-[332px] 2xl:h-[424px] 2xl:w-[352px]"
            >
              <FrontMetricFace card={card} />
            </div>
          ))}
        </div>

        {/* Mobile / Tablet horizontal snap strip */}
        <div className="lg:hidden">
          <div
            onScroll={handleFrontScrollSnap}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TWAIN_CARDS.map((card) => (
              <div
                key={card.id}
                className="h-[350px] w-[calc(100vw-56px)] max-w-[336px] shrink-0 snap-center"
              >
                <FrontMetricFace card={card} />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-center gap-2" aria-hidden="true">
            {TWAIN_CARDS.map((card, idx) => (
              <span
                key={card.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  frontActiveDot === idx
                    ? "w-5 bg-[#000B33]"
                    : "w-1.5 bg-[#BFD7FF]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          PHASE 2: ROUNDED NARRATIVE PANEL (No 3D Plane / No Dustbin)
          ════════════════════════════════════════════════════════════════ */}
      <div
        ref={painSectionRef}
        className="relative z-[2] px-3 sm:px-4"
        aria-label="Why university selection matters"
      >
        <div
          ref={painWrapperRef}
          className="relative overflow-hidden rounded-[40px] border border-[#DCE8FA] bg-[#F2F7FF] py-12 sm:rounded-[56px] sm:py-16 lg:rounded-[72px] lg:py-[68px] xl:py-[78px] 2xl:rounded-[84px] 2xl:py-[92px]"
          style={{
            boxShadow:
              "0 1.5px 0 0 #FFFFFF, inset 0 1px 0 0 rgba(47, 78, 130, 0.06)",
          }}
        >
          <div className="mx-auto flex w-full max-w-[1408px] flex-col items-stretch gap-8 px-5 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-12 xl:gap-[72px]">
            {/* Left Column: 3-line display title with smooth letter scatter */}
            <div className="shrink-0">
              <h2
                id={sectionId}
                aria-label="To an Indian aspirant, the university is the foundation"
                className="font-serif text-[29px] min-[410px]:text-[33px] font-normal leading-[1.08] tracking-[-0.025em] text-[#000B33] sm:text-[42px] lg:text-[46px] xl:text-[52px] 2xl:text-[58px] [font-variant-numeric:lining-nums_tabular-nums]"
              >
                {HEADING_LINES.map((line, lineIdx) => (
                  <span
                    key={lineIdx}
                    ref={(el) => {
                      headingLineRefs.current[lineIdx] = el;
                    }}
                    aria-hidden="true"
                    className="block whitespace-nowrap will-change-transform"
                  >
                    {Array.from(line).map((ch, localIdx) => {
                      if (ch === " ") {
                        return (
                          <span key={`sp-${lineIdx}-${localIdx}`}> </span>
                        );
                      }
                      const idx = runningCharIdx++;
                      return (
                        <span
                          key={`ch-${lineIdx}-${localIdx}`}
                          ref={(el) => {
                            shatterCharRefs.current[idx] = el;
                          }}
                          className="inline-block will-change-transform"
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </h2>
            </div>

            {/* Right Column: Sequential story illumination */}
            <div className="flex-1 space-y-4 font-sans text-[20px] leading-[1.34] tracking-[-0.015em] sm:text-[24px] lg:max-w-[660px] lg:space-y-4 lg:text-[25px] xl:max-w-[690px] xl:space-y-5 xl:text-[28px] 2xl:text-[31px]">
              {STORY_PARAGRAPHS.map((para, pIdx) => (
                <p
                  key={para.id}
                  ref={(el) => {
                    storyParaRefs.current[pIdx] = el;
                  }}
                  className="text-[#000B33] lg:text-[#A7B8D0]"
                >
                  {para.body}
                  {para.verdict && (
                    <>
                      <br />
                      <span className="relative mt-1 inline-block px-1 font-medium text-[#000B33]">
                        <span
                          ref={verdictBarRef}
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-[2px] top-[14%] -z-[0] origin-left rounded-[6px] border-b-2 border-[#2F4E82] bg-[#BFD7FF]/85"
                        />
                        <span className="relative z-[1]">{para.verdict}</span>
                      </span>
                    </>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          PHASE 3: CASCADE -> STACKED DECK -> UN-STACK + 3D FLIP BACKS
          ════════════════════════════════════════════════════════════════ */}
      <div
        ref={backSectionRef}
        className="twain-back-stage relative z-[1] pb-20 pt-2 lg:pb-28 lg:pt-2"
      >
        {/* Desktop 3D Pin Stage */}
        <div
          ref={backPinRef}
          className="hidden h-[560px] w-full items-center justify-center lg:flex motion-reduce:lg:hidden"
        >
          <div className="relative h-[390px] w-[300px] [perspective:1300px] xl:h-[412px] xl:w-[332px] 2xl:h-[424px] 2xl:w-[352px]">
            {TWAIN_CARDS.map((card, idx) => (
              <div
                key={card.id}
                ref={(el) => {
                  backCascadeRefs.current[idx] = el;
                }}
                className="pointer-events-none absolute inset-0 will-change-transform"
              >
                <div
                  ref={(el) => {
                    backSlotRefs.current[idx] = el;
                  }}
                  className="pointer-events-auto relative h-full w-full will-change-transform"
                >
                  <div
                    ref={(el) => {
                      backFlipperRefs.current[idx] = el;
                    }}
                    className="relative h-full w-full will-change-transform [transform-style:preserve-3d]"
                  >
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(0deg)]">
                      <FrontMetricFace card={card} />
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <BackQuoteFace card={card} animateHighlights />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Interactive 3D Flipped Story Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:hidden">
          {TWAIN_CARDS.map((card) => {
            const showFront = Boolean(mobileFlipped[card.id]);
            return (
              <div key={card.id} className="flex flex-col gap-2.5">
                <div className="h-[400px] w-full [perspective:1200px]">
                  <div
                    className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
                    style={{
                      transform: showFront
                        ? "rotateY(0deg)"
                        : "rotateY(180deg)",
                    }}
                  >
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(0deg)]">
                      <FrontMetricFace card={card} />
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <BackQuoteFace card={card} animateHighlights={false} />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleMobileCard(card.id)}
                  className="inline-flex items-center justify-center gap-1.5 self-center rounded-full border border-[#DCE8FA] bg-[#F2F7FF] px-4 py-1.5 font-sans text-[12.5px] font-medium text-[#2F4E82] transition-colors hover:bg-[#E2ECFC]"
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>
                    {showFront ? "Read Student Story" : "View Key Metric"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop Reduced-Motion Static Back Row Fallback */}
        <div className="hidden motion-reduce:lg:mx-auto motion-reduce:lg:flex motion-reduce:lg:max-w-[1120px] motion-reduce:lg:justify-center motion-reduce:lg:gap-4 motion-reduce:lg:px-6">
          {TWAIN_CARDS.map((card) => (
            <div
              key={card.id}
              className="h-[412px] w-[332px] shrink-0"
            >
              <BackQuoteFace card={card} animateHighlights={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TwainCopy };
