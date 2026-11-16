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

17. **Redesigned About Us Page (`/about` & `src/components/about/`)**:
    - Complete modernization of the legacy `https://shadow2123.github.io/Wso-v3/about-us.html` page into Next.js App Router route (`src/app/about/page.tsx`).
    - **100% Verbatim Content Preservation**: Every heading, body paragraph, number, checklist item, quote, and all 30 authentic FAQs extracted directly from raw HTML and stored in `src/data/aboutContent.ts` with zero additions, modifications, or omissions.
    - **Strict Clinical Blues System (`DESIGN.md`)**:
      - Eyebrow pill: `• TRACKED LABEL —` with `#4C6DA6` pulse dot and tracking line.
      - Heading: Single Midnight Navy (`#000B33`) font color across every section — zero two-tone splits, zero foreign colors.
      - Body typography: Clinical muted navy (`#6F7C86` / `#2F4E82`) on crisp white (`#FFFFFF`) and lavender surface (`#F2F7FF`) cards.
    - **Modular Architecture (14 Component Modules in `src/components/about/`)**:
      - `AboutHero.tsx`: Atmospheric celestial gradient hero, single solid Midnight Navy headline, dual pill buttons (`button-hero-white`, `button-soft-blue`), student portrait card, and glass-frosted 4-metric impact ribbon.
      - `AboutPlatform.tsx`: Platform definition narrative + 8 interactive capability pills card.
      - `AboutWhyExists.tsx`: 4 diagnostic trap cards + full-width 5th critical blindspot card ("Career and Licensing Uncertainty") with 3 student questions.
      - `AboutMissionVision.tsx`: Institutional Mission & Vision 2-column cards.
      - `AboutWhyChoose.tsx`: 5 value reasons grid + authentic student success quote banner.
      - `AboutAgencyCompare.tsx`: Traditional Agencies vs We Study Abroad side-by-side audit matrix with red crosses vs green checks.
      - `AboutProcess.tsx`: 3-Step Admission Process (Profile Evaluation, Application & SOP, Visa & Departure) with stage tags.
      - `AboutFramework.tsx`: University Selection Framework with 5 quality evaluation pillars.
      - `AboutComparisons.tsx`: Interactive head-to-head destination comparison tabs (Russia vs Georgia, China vs Uzbekistan, Kazakhstan vs Kyrgyzstan).
      - `AboutJourney.tsx`: 8-Stage Student Journey step cards.
      - `AboutCountryUniversities.tsx`: 6 Country dossiers (Russia, Georgia, Kazakhstan, China, Uzbekistan, Kyrgyzstan).
      - `AboutComplianceFinance.tsx`: Financial expenses, scholarship avenues, 7 visa mandatory documents, and 4 NMC 2021 Gazette statutory pillars + NExT reality card.
      - `AboutFaqAnthem.tsx`: 30 authentic FAQs with search filtering and 2-column disclosure accordion + Global Anthem CTA ("Your path extends across the entire globe").

---

## 4. Multi-Workspace Synchronization Protocol

All changes are maintained and mirrored across active workspace directories:
1. `c:\Users\USER\Desktop\WSO-home\` (Active Development & Scratch)
2. `c:\Users\USER\Desktop\wso-home-v1\` (GitHub Repository linked to `https://github.com/ShaDoW2123/Wso-redesign.git`)

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
- **2026-11-16**: Redesigned About Us Page (`/about` route) from legacy `https://shadow2123.github.io/Wso-v3/about-us.html`:
  - Preserved 100% verbatim copy across all 16 sections (zero text modified, added, or deleted) into `src/data/aboutContent.ts`.
  - Implemented 13 modular components in `src/components/about/` conforming to `DESIGN.md`: uniform `• PILL —` eyebrow structure, single Midnight Navy `#000B33` headings (no two-tone splits), clinical blues `#4C6DA6` / `#2F4E82` / `#BFD7FF`, and soft lavender `#F2F7FF` surfaces.
  - Included interactive features: destination comparison tabs, 30 search-filterable expandable FAQs, step-by-step student journey tracker, and country dossiers.
  - Linked "About" in `Navbar.tsx` to `/about` and verified full Next.js production build (`npx next build` compiled with exit code 0).
- **2026-11-16**: Elevated About Us Page with **GSAP** (`gsap.com`) & **ReactBits** (`reactbits.dev`) Component Architecture:
  - Built core ReactBits UI primitives in `src/components/ui/`: `SpotlightCard.tsx` (pointer-reactive radial lighting with falloff), `TiltedCard.tsx` (3D perspective tilt with specular glare), `Magnet.tsx` (magnetic pull interaction for buttons/badges), `CountUp.tsx` (ScrollTrigger numeric counter), and `BorderGlow.tsx`.
  - Upgraded all 13 About page sections with fluid GSAP ScrollTrigger timelines, staggered entrance reveals, and `clearProps: "all"` for instant hydration safety.
  - Added Magic Bento grid layout to Platform capabilities (`AboutPlatform.tsx`), diagnostic spotlight audit cards (`AboutWhyExists.tsx`), interactive comparison stage (`AboutComparisons.tsx`), and dark spotlight anthem CTA with magnetic action buttons (`AboutFaqAnthem.tsx`).
  - Synced and verified full production build on `wso-home-v1` (exit code 0) and pushed to GitHub `https://github.com/ShaDoW2123/Wso-redesign.git`.
