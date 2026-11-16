# We Study Overseas (WSO) - Antigravity Project Documentation (`antigrav.md`)

*Last Updated: November 11, 2026*  
*Protocol: This file documents the project definition, decided tech stack, architecture, implemented features, and must be updated after every feature addition or revision.*

---

## 1. What the Project Is

**We Study Overseas (WSO)** is an ultra-modern, high-converting educational consultancy and medical advisory web platform for Indian medical aspirants planning to pursue MBBS abroad (in premier government medical universities across Russia, Uzbekistan, Kazakhstan, Georgia, and more).

### Core Objectives:
1. **Redesign from Legacy**: Modernize the legacy multi-page static structure (`Wso-v3-main` / `home.html`) into a responsive, high-performance web application.
2. **Design Language & System**: Combine the atmospheric, clinical precision of **Docshield** with the interactive, scroll-driven choreographies of **Twain.ai**.
3. **Strict Visual System (`DESIGN.md`)**:
   - **Zero foreign colors**: Strict ban on orange, peach, neon green, and random pastels.
   - **Clinical Palette**:
     - Midnight Navy: `#000B33` (Primary typography and key accents)
     - Clinical Blues: `#4C6DA6`, `#2F4E82`, `#1C718A`
     - Soft Sky & Accent Blues: `#BFD7FF`, `#D2E3FF`, `#94AEDA`, `#6D88B4`
     - Clean Canvases: `#FFFFFF` (Pure white), `#F2F7FF` (Lavender surface), `#F8F8F8` (Subtle off-white)
4. **100% Content & Copy Fidelity**: Every single institutional statistic, hospital bed metric, NMC regulatory guideline, tuition figure, testimonial, and all 15 FAQs from `src/data/homeContent.ts` are preserved verbatim.
5. **Protected Sections Policy**: Under no circumstances alter or regrow changes on protected sections:
   - Study Destinations (`DestinationsSection.tsx`)
   - Success Stories / Reviews
   - Our Experience / Difference (`DifferenceSection.tsx` & `MetricsSection.tsx`)
   - Official Options / Regulatory (`RegulatorySection.tsx`)
   - Trusted Universities (`UniversitiesSection.tsx`)
   - Global Network (`KnowledgeNetworkSection.tsx`)
   - One Partner, Your Journey (`VisionSection.tsx`)
   - Footer (`Footer.tsx`)

---

## 2. Decided Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | React Server Components, fast SSR/SSG, optimized asset delivery |
| **Language** | **TypeScript** | Strict type safety, clean component interfaces, zero runtime errors |
| **Styling** | **Tailwind CSS v3** | Design token implementation according to `DESIGN.md` |
| **Animation Engine** | **GSAP (GreenSock) + ScrollTrigger** | Scroll-pinned stages, card stacking math, letter-shattering physics |
| **Smooth Scroll** | **Lenis (`lenis`)** | Inertia wheel smoothing synced with GSAP `ScrollTrigger` & ticker |
| **3D & WebGL** | **Three.js (`three`, `@types/three`)** | 3D medical interactive scenes, coordinate grids, and shaders |
| **Vector Animation** | **Lottie React (`lottie-react`)** | Fluid micro-interactions and vector graphics |
| **Icons** | **Lucide React (`lucide-react`)** | Minimalist clinical icons (Stethoscope, Building2, RotateCw, etc.) |
| **Font System** | Sans-Serif + Monospace Accents | Tabular numeric alignment for medical statistics & data chips |

---

## 3. What Has Been Built So Far

### Core Sections & Features
1. **Floating Capsule Navigation (`Navbar.tsx`)**:
   - Frosted glassmorphism capsule with official WSO logo.
   - Smooth navigation anchors (`#destinations`, `#featured-universities`, `#faqs`, `#blog`).
   - High-contrast dual-pill CTA (`APPLY NOW` / `Contact Us`).

2. **Atmospheric Hero Stage (`Hero.tsx`)**:
   - Dynamic 2026/2027 Admissions Open pulse badge.
   - Dual-pill action buttons for instant profile evaluation and destination explorer.
   - Verified regulatory compliance tags: *NMC Compliant*, *WHO Recognized*, *English Medium*, *Direct Admission Support*.

3. **Accreditation Smooth Marquee (`PartnerTicker.tsx`)**:
   - Continuous marquee displaying official global recognition (NMC, WHO, ECFMG, FAIMER, WDOMS, MSHE).

4. **Study Destinations Section (`DestinationsSection.tsx`)**:
   - Premier medical education hubs: Russia, Uzbekistan, Kazakhstan, Georgia.
   - Verified total package pricing, ECTS credit alignments, and hospital network counts.

5. **The WSO Difference Section (`DifferenceSection.tsx`)**:
   - Docshield-inspired pinned curved-arc testimonial card scroll choreography displaying 5 student cards (Russia, Uzbekistan, Kazakhstan, Georgia, Kyrgyzstan) powered by **Lenis** (`SmoothScrollProvider.tsx`) and **GSAP ScrollTrigger** (`pin: true`, `scrub: 0.25`) over scrolling watermark typography.
   - Cards sweep in from bottom-right with clockwise rotation, peak upright at center, and exit off the bottom-left with counter-clockwise rotation while the giant `"THE WSO DIFFERENCE"` background watermark glides horizontally in sync (with `prefers-reduced-motion` static layout fallback).

6. **Giant Impact Metrics (`MetricsSection.tsx`)**:
   - Verified student placements, FMGE first-attempt passing statistics, and affiliated bed capacities.

7. **Regulatory Framework Section (`RegulatorySection.tsx`)**:
   - Comprehensive audit of NMC 2021 Gazette rules: 54-month curricular validation, 12-month compulsory rotating internship, and NExT licensing requirements.

8. **Featured Medical Universities Section (`UniversitiesSection.tsx`)**:
   - Direct directory of accredited partner institutions with tuition breakdowns, clinical bed counts, and admission criteria.

9. **Section 9: Why Indian Students Prefer MBBS Abroad (`WhyAbroadSection.tsx`) - Twain.ai Scroll Choreography**:
   - **Phase 1 (Front Row)**: 3 Twain-style cards (352px × 424px, 36px border radius, clinical blues):
     - Card 1: *Clinical Exposure* • **8,000+ Beds** • Bashkir State Medical University, Russia
     - Card 2: *Academic Standards* • **100% English** • Tbilisi State Medical University, Georgia
     - Card 3: *Life Competence* • **Self-Growth** • Samarkand State Medical University, Uzbekistan
   - **Phase 2 (Scroll-Pinned Stage & Shatter Title)**:
     - Left column: Dynamic letter-shattering physics on scroll for the title *"To every Indian student, the journey is the transformation"*. Letters physically scatter with gravity acceleration.
     - Center column: Compact 3-card stacked deck (Screenshot 5 fidelity) with scale, rotation, and micro-parallax.
     - Right column: 4 illuminated narrative chapters with smooth dimming of inactive paragraphs and active highlight pills.
   - **Phase 3 (Back Row & 3D Flip)**:
     - Interactive 3D 180° flip (`rotateY(180deg)`) revealing doctor testimonials, credentials, and FMGE 1st-attempt records.
     - Top toggle controls (`Front Face (Metrics)` / `Back Face (Stories)`).

10. **Financial Ledger & Scholarships (`FinancialSection.tsx`)**:
    - Transparent year-by-year fee schedules with zero hidden consultancy costs.

11. **Parent's Guide & Comparison Engine (`ParentAndCompareSection.tsx`)**:
    - Honest comparison between Indian private medical college donations (₹1Cr+) vs. top government universities abroad.

12. **Student Reviews & Video Audits (`MediaSection.tsx`)**:
    - Verified video interviews and clinical testimonials.

13. **Licensing Pathways & Editorial (`PathwaysAndBlogSection.tsx`)**:
    - Step-by-step guidance for NExT, USMLE (USA), and PLAB (UK).

14. **Advisory Terminal & FAQs (`AdvisoryTerminal.tsx`, `FaqSection.tsx`)**:
    - Instant eligibility calculator and all 15 official FAQs preserved verbatim.

15. **Vision & Global Network (`VisionSection.tsx`, `KnowledgeNetworkSection.tsx`)**:
    - Institutional mission statement and interactive hospital network display.

16. **Footer (`Footer.tsx`)**:
    - Clean regulatory notices, verified address blocks, and directory links.

---

## 4. Multi-Workspace Synchronization Protocol

All changes are maintained and mirrored across both active workspace directories:
1. `C:\Users\USER\Desktop\WSO redesign\WSO-redesign-v1\`
2. `C:\Users\USER\Desktop\WSO-redesign-v1\`

---

## 5. Changelog & Feature Updates

*Entries are appended here after every feature update.*

- **2026-10-24**: Integrated Twain.ai Phase 1, Phase 2 (letter shatter + stacked card deck + sequential chapter illumination), and Phase 3 (3D 180° flip doctor cards) into Section 9 (`WhyAbroadSection.tsx`). Strictly eliminated all orange/green colors in compliance with `DESIGN.md`.
- **2026-11-10**: Verified and hosted live preview on port 3000 (WSO Redesign) and port 3003 (Twain Reference Mirror).
- **2026-11-11**: Initialized this master documentation file (`antigrav.md`) to track project definitions, tech stack choices, build progress, and ongoing feature updates.
- **2026-11-11**: Installed `lenis` (`^1.3.27`), wired `SmoothScrollProvider.tsx` into `layout.tsx` synced with GSAP `ScrollTrigger`, and rebuilt `DifferenceSection.tsx` with the pinned curved-arc card scroll animation per user request.
- **2026-11-11**: Expanded `studentVoices.stories` in `src/data/homeContent.ts` and `DifferenceSection.tsx` from 3 to 5 testimonial cards (added Georgia and Kyrgyzstan), scaled ScrollTrigger pin distance proportionally, and added synchronized horizontal scroll parallax to the giant `"THE WSO DIFFERENCE"` background watermark.
- **2026-11-11**: Created `src/components/twain-copy.tsx` and preview route `/twain-copy` (`src/app/twain-copy/page.tsx`) recreating the 3-phase Twain.ai scroll choreography (Front metric cascade -> Rounded narrative stage with heading staircase, typographic scatter, and sequential paragraph/verdict illumination -> Deck convergence, horizontal fan-out + 180° 3D flip with animated quote highlights), strictly adapted to WSO clinical blues and MBBS abroad copy with zero 3D paper-plane or dustbin elements.
- **2026-11-14**: Refined Phase 1 front cards scroll UX in `twain-copy.tsx` to match the exact 5-screenshot sequence provided from Twain.ai:
  - **Stage 1 (Rest)**: Level, upright, 3-column row above the offscreen rounded panel.
  - **Stage 2 (Early scroll)**: Panel begins rising into the viewport; Card 1 initiates subtle downward dive relative to Cards 2 & 3.
  - **Stage 3 (Mid-scroll)**: Harmonic staircase — Card 1 ~30% submerged with metric 100% visible and -3.5° tilt; Card 2 touching panel rim; Card 3 floating safely below navbar with +2.8° tilt.
  - **Stage 4 (Late-mid scroll)**: Card 1 ~80% submerged with pill peeking; Card 2 ~45% submerged with metric reading above the rim; Card 3 descending inward.
  - **Stage 5 (Late scroll)**: Card 1 fully submerged; Card 2 ~85% submerged; Card 3 ~50% submerged; all three converging inward into the compact stacked deck behind `#F2F7FF`.
  - Replaced abrupt piecewise keyframes with a unified, continuous timeline (`ease: "power1.inOut"`, `scrub: 0.5`) and realistic relative travel (`getDiveY = painCenter - rowCenter + staggerOffset`), verified via headless Chrome image captures at each stage.
- **2026-11-16**: Integrated `TwainCopy` into the main website homepage (`src/app/page.tsx`), cleanly replacing the legacy Section 9 Key Benefits / Why Abroad section (`WhyAbroadSection.tsx`) with zero errors. All anchor targets (`#why-abroad`) and responsive breakpoints verified on `http://localhost:3000/`.
- **2026-11-16**: Redesigned `AdvisoryTerminal` ([AdvisoryTerminal.tsx](file:///c:/Users/USER/Desktop/WSO-home/src/components/AdvisoryTerminal.tsx)) according to the 2-column layout and strictly aligned with the `DESIGN.md` clinical blue palette:
  - Left column: `GLOBAL NETWORK` pill (white with `#4C6DA6` pulse dot and midnight navy text), bold heading with signature `#4C6DA6` accent on `MBBS Abroad`, clinical `#6F7C86` subtext, 4 circular flag destination cards (Russia, Uzbekistan, Kazakhstan, Kyrgyzstan) on `#EFEFEF` borders with `#BFD7FF` hover elevation, and rounded pill "Explore All Destinations →" button.
  - Right column: Clean white card container holding the evaluation form with untouched inputs, validation, and functionality, using Midnight Navy (`#000B33`) primary button with `#4C6DA6` hover and `#BFD7FF` send accent. Zero pink or neon foreign colors. All builds and checks verified with 0 errors.
