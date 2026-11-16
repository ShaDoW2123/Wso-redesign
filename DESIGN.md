---
version: 1.0.0
name: we-study-overseas-design-system
description: The official design system specification for We Study Overseas (WSO / Westudy Abroad) — India's premier international medical education and MBBS abroad advisory platform. Engineered with a calm clinical blue aesthetic, high-trust healthcare credibility, and frictionless student counseling. The design language pairs a signature atmospheric sky-to-slate gradient hero with high-contrast midnight navy typography, friendly soft-blue pill CTAs, frosted-glass floating navigation, and spacious rounded-3xl lavender surface cards.

colors:
  primary: "#000b33"
  primary-hover: "#4c6da6"
  primary-light: "#bfd7ff"
  primary-light-hover: "#d2e3ff"
  ambient-blue: "#6d88b4"
  accent-blue: "#3b5e9b"
  accent-cyan: "#1c718a"
  sky-mid: "#94aeda"
  slate-deep: "#2f4e82"
  ink: "#000b33"
  ink-secondary: "#282624"
  ink-muted: "#6f7c86"
  ink-steel: "#a9b1b7"
  canvas: "#ffffff"
  canvas-lavender: "#f2f7ff"
  canvas-subtle: "#f8f8f8"
  canvas-border: "#efefef"
  canvas-border-card: "#d2d2d2"
  on-primary: "#ffffff"
  on-light: "#000b33"
  pill-white: "#ffffff"
  pill-white-hover: "#f3f4f6"

typography:
  display-hero:
    fontFamily: "Catalogue, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.6px
    fontFeature: normal
  display-stat-giant:
    fontFamily: "Catalogue, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.5px
    fontFeature: normal
  display-watermark:
    fontFamily: "Catalogue, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 171px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -3.0px
    fontFeature: normal
  display-lg:
    fontFamily: "Catalogue, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.48px
    fontFeature: normal
  display-md:
    fontFamily: "Catalogue, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.32px
    fontFeature: normal
  heading-section:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.2px
    fontFeature: normal
  heading-sm:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: normal
  body-lead:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: normal
  body-default:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: normal
  body-sm:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: normal
  button-md:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: normal
  button-sm:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: normal
  quote-serif:
    fontFamily: "__Merriweather_1836d9, Merriweather, Georgia, serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
    fontFeature: normal
  caption:
    fontFamily: "__Inter_f367f3, Inter, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: normal

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  3xl: 24px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px
  massive: 112px

components:
  nav-floating-capsule:
    backgroundColor: "rgba(255, 255, 255, 0.65)"
    backdropBlur: "16px"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    border: "1px solid rgba(255, 255, 255, 0.6)"
    boxShadow: "0 10px 30px -10px rgba(0, 11, 51, 0.08)"
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-dark-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-soft-blue:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-soft-blue-hover:
    backgroundColor: "{colors.primary-light-hover}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-hero-white:
    backgroundColor: "{colors.pill-white}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-hero-white-hover:
    backgroundColor: "{colors.pill-white-hover}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  card-feature-lavender:
    backgroundColor: "{colors.canvas-lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.body-default}"
    rounded: "{rounded.3xl}"
    padding: "32px"
  card-destination-split:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-default}"
    rounded: "{rounded.3xl}"
    padding: "0px"
    border: "1px solid rgba(0, 11, 51, 0.08)"
  card-accreditation-logo:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "12px 20px"
  accordion-faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-sm}"
    rounded: "{rounded.xs}"
    padding: "24px 0px"
  footer-compact:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "64px 24px"
---

## Overview

The **We Study Overseas (WSO / Westudy Abroad)** design system is engineered around high medical education credibility, tranquility, and academic trust. Designed for aspiring Indian medical students and their families navigating MBBS abroad, the brand balances aspirational global opportunities with absolute regulatory clarity (NMC / WHO / NExT compliance).

The visual language is anchored by an **atmospheric sky-to-slate gradient**, transitioning from clean white at the top through soft periwinkle blue (`#94AEDA`), grounding into deep slate indigo (`#2F4E82`).

Against this tranquil clinical backdrop, high-contrast typography in **Midnight Navy** (`{colors.primary}` — `#000B33`) and crisp white (`#FFFFFF`) ensures effortless legibility and institutional authority. Approachable, high-radius **pill buttons** (`{rounded.pill}` 9999px) in solid white, soft baby blue (`#BFD7FF`), and dark midnight navy invite tactile interaction without corporate severity.

The design pairs **Catalogue** (an architectural humanist grotesk) for prominent display and headline tiers with **Inter** for clean UI copy and **Merriweather** for authentic student & doctor testimonial quotes.

**Key Visual Characteristics:**
- **Atmospheric Celestial Hero:** Vertical gradient transitioning `linear-gradient(180deg, #FFFFFF 12.69%, #94AEDA 40.35%, #2F4E82 77.67%)`, establishing an expansive horizon of global medical opportunities.
- **Floating Frosted Capsule Nav:** An extended top pill bar with `backdrop-blur-xl`, `bg-white/65`, and 1px translucent border that hugs content cleanly across viewport sizes.
- **Dual-Pill CTA Architecture:** Hero sections deploy high-contrast dual buttons: a solid white pill for primary action ("Explore Destinations") accompanied by a soft blue pill (`#BFD7FF`) for secondary consultation ("Book Free Counseling").
- **The Cinematic Split Stage:** Horizontal expanding destination accordions (Russia, Uzbekistan, Kazakhstan, Georgia) that give full photographic immersion alongside soft-lavender editorial facts.
- **32px Rounded Lavender Cards:** Feature and benefit cards live on `{colors.canvas-lavender}` (`#F2F7FF`) with generous 24px (`{rounded.3xl}`) border radii and 32px internal padding.
- **Watermark Display Typography:** Massive 171px watermark display headlines ("The WSO Difference") that stretch across screen widths as structural architectural anchors.
- **Accreditation Marquee:** Continuous, ultra-smooth marquee carousel featuring official medical regulatory credentials (NMC, WHO, ECFMG, FAIMER, WDOMS, Ministry of Science & Higher Education).

---

## Colors

> **Source Brand Reference:** We Study Overseas (WSO) Web Portal & Medical Advisory System.

### Brand & Core
- **Midnight Navy / Ink** (`{colors.primary}` — `#000B33`): The structural anchor. Used for primary CTA buttons, section headings, brand emblems, and deep-contrast credential panels.
- **Navy Hover Lift** (`{colors.primary-hover}` — `#4C6DA6`): The mid-blue transition state when hovering over midnight navy buttons.
- **Soft Light Blue** (`{colors.primary-light}` — `#BFD7FF`): Soft, approachable secondary button fill ("Book Free Counseling", "Download Syllabus") and accent chips.
- **Sky Blue Hover** (`{colors.primary-light-hover}` — `#D2E3FF`): Hover elevation state for light blue buttons.
- **Ambient Blue** (`{colors.ambient-blue}` — `#6D88B4`): Atmospheric mid-tone used for subtle icon fills, borders, and ambient glows.
- **Accent Slate** (`{colors.accent-blue}` — `#3B5E9B`): Subtitle text, active tab indicators, and bullet accents.

### Hero Gradient Stops
- **Canvas White** (`#FFFFFF` @ 12.69%): Clean sky apex behind the floating navigation.
- **Periwinkle Sky** (`{colors.sky-mid}` — `#94AEDA` @ 40.35%): Atmospheric horizon mid-tone.
- **Deep Slate Blue** (`{colors.slate-deep}` — `#2F4E82` @ 77.67%): Grounded hero base that cradles student imagery and credential cards.

### Surface & Canvas
- **Pure Canvas** (`{colors.canvas}` — `#FFFFFF`): Clean surface for content sections, data tables, and FAQ bands.
- **Lavender Canvas** (`{colors.canvas-lavender}` — `#F2F7FF`): Soft, tinted surface fill for benefit cards and comparative destination modules.
- **Subtle Surface** (`{colors.canvas-subtle}` — `#F8F8F8`): Muted background fill for alternating rows and data pills.
- **Border Hairline** (`{colors.canvas-border}` — `#EFEFEF`): Subtle 1px dividers on headers and form groups.
- **Card Border** (`{colors.canvas-border-card}` — `#D2D2D2`): Definition border for elevated comparison modules.

### Text & Accents
- **Ink Primary** (`{colors.ink}` — `#000B33`): Default dark body and heading color. Ensures uniform, high-contrast legibility.
- **On Dark / Pure White** (`{colors.on-primary}` — `#FFFFFF`): Text rendered over hero gradients and dark midnight navy buttons.
- **Ink Muted** (`{colors.ink-muted}` — `#6F7C86`): Secondary explanatory text, captions, and regulatory notes.
- **Steel Gray** (`{colors.ink-steel}` — `#A9B1B7`): Placeholder and inactive elements.
- **Emerald Pulse** (`#10B981`): Status indicator dot denoting 2026 Admissions Open and real-time counselor availability.

---

## Typography

### Font Families
- **Display & Headlines:** `Catalogue` (Catalogue Regular 400, Catalogue Medium 500, Catalogue Demi 600). A humanist grotesque that conveys authority, distinction, and medical stature without clinical coldness.
- **Interface & Body:** `Inter` (`__Inter_f367f3`), providing maximum digital legibility for admission requirements, fee structures, and course matrices.
- **Testimonial Quotes:** `Merriweather` (`__Merriweather_1836d9`), introducing editorial warmth and physician trust for student and alumni testimonials.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use in WSO |
|---|---|---|---|---|---|
| `{typography.display-watermark}` | 171px / 16vw | 400 | 0.95 | -3.0px | Giant structural background watermark ("The WSO Difference") |
| `{typography.display-stat-giant}` | 96px / 6rem | 400 | 1.05 | -1.5px | Big metric callout ("10,000+", "50+", "10+", "100%") |
| `{typography.display-hero}` | 60px / 3.75rem | 400 | 1.1 | -0.6px | Hero H1 headline on celestial gradient |
| `{typography.display-lg}` | 48px / 3rem | 400 | 1.15 | -0.48px | Section titles ("Top Study Destinations", "Everything You Need to Know") |
| `{typography.display-md}` | 32px / 2rem | 400 | 1.2 | -0.32px | Sub-section headings and modal titles |
| `{typography.heading-section}` | 30px / 1.875rem | 500 | 1.3 | -0.2px | Benefit card headlines and value propositions |
| `{typography.quote-serif}` | 30px / 1.875rem | 400 | 1.3 | 0 | Testimonial quotes from practicing medical alumni |
| `{typography.heading-sm}` | 20px / 1.25rem | 600 | 1.4 | 0 | FAQ accordion questions and university card titles |
| `{typography.body-lead}` | 18px / 1.125rem | 400 | 1.5 | 0 | Hero subtitle ("Discover top NMC-recognized medical universities...") |
| `{typography.body-default}` | 16px / 1rem | 400 | 1.5 | 0 | Default body paragraphs, university details, and advisory steps |
| `{typography.button-md}` | 16px / 1rem | 500 | 1.0 | 0 | Pill button labels ("APPLY NOW", "Explore Universities") |
| `{typography.body-sm}` | 14px / 0.875rem | 400 | 1.4 | 0 | Nav links, accreditation captions, footnote text |
| `{typography.caption}` | 12px / 0.75rem | 400 | 1.4 | 0 | Regulatory disclaimers, NMC Gazette notes, copyright notice |

---

## Layout & Architecture

### Spacing System
- **Base Increment:** 4px / 8px.
- **Scale:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px · `{spacing.massive}` 112px.
- **Section Spacing:** 112px (`py-28`) on desktop; 64px (`py-16`) on mobile.
- **Container Max-Width:**
  - Hero & Floating Nav: `w-[94%] max-w-7xl` centered with smooth horizontal margins.
  - Content sections: `max-w-7xl` (1280px) centered with `px-4 sm:px-6 lg:px-8`.
  - Feature cards: `max-w-80` to `max-w-96` in responsive flex-row wrap.

---

## Elevation & Depth

| Level | CSS Treatment | Usage in WSO |
|---|---|---|
| **Flat** | `none` | Default white canvas sections |
| **Glass / Frosted** | `backdrop-blur: 16px; background: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.6)` | Floating header capsule, sticky counseling bar |
| **Card Lift** | `box-shadow: 0 10px 30px -10px rgba(0, 11, 51, 0.08)` | Interactive university cards, modal dialogs, destination splits |
| **Ambient Glow** | `box-shadow: inset 0px 3px 15px rgba(191, 215, 255, 0.6)` | Inset lighting on selected states and active search filters |
| **Celestial Gradient** | `linear-gradient(180deg, #FFFFFF 12.69%, #94AEDA 40.35%, #2F4E82 77.67%)` | Hero backdrop depth medium |

---

## Shapes & Geometry

### Border Radius Scale
- **`{rounded.xs}` (4px):** Checkboxes and micro badge borders.
- **`{rounded.sm}` (6px):** Form text inputs and university filter chips.
- **`{rounded.md}` (8px):** Dropdown menu popovers.
- **`{rounded.xl}` (16px):** University preview cards, fee matrix tables, video thumbnails.
- **`{rounded.3xl}` (24px):** Feature and benefit cards (`bg-[#F2F7FF]`), destination accordion panels.
- **`{rounded.pill}` (9999px):** All action buttons, accreditation seals, floating nav capsule, status chips.

### Visual Content Style
- **Portraits & Students:** Real Indian MBBS students, practicing doctors in white coats, and university campus grounds. Rendered in clean frames with subtle rounded-3xl corners.
- **Accreditation Seals:** Authentic, high-contrast monochrome and two-tone seals (NMC, WHO, ECFMG, FAIMER, WDOMS, MSHE) integrated into continuous marquee ribbons.
- **Editorial Eyebrows:** Architectural lead-ins (`dot + tracked uppercase label + hairline accent`) rather than generic bubbly chips.

---

## Components

### 1. Navigation Pill Capsule (`nav-floating-capsule`)
- Floating frosted glass capsule: `fixed top-5 z-50 mx-auto w-[94%] max-w-7xl rounded-full backdrop-blur-xl bg-white/65`.
- Border: `1px solid rgba(255, 255, 255, 0.6)` with gentle bottom shadow.
- Left: We Study Overseas (WSO) official logo mark (`h-9 sm:h-10 w-auto`).
- Center: Clean menu items (`Home`, `About`, `Universities`, `FAQs`, `Blogs`) in `{colors.ink}` with generous `gap-7 xl:gap-9`.
- Right: "Contact Us" anchor + "APPLY NOW" midnight navy pill button (`{colors.primary}`).

### 2. Action Buttons

#### `button-hero-white`
- Primary CTA over the celestial hero gradient.
- Background: `{colors.pill-white}` (`#FFFFFF`), Text: `{colors.primary}` (`#000B33`), Hover: `{colors.pill-white-hover}` (`#F3F4F6`).
- Padding: `16px 32px`, Radius: `{rounded.pill}`.

#### `button-soft-blue`
- Secondary advisory CTA ("Book Free Counseling", "Download Prospectus").
- Background: `{colors.primary-light}` (`#BFD7FF`), Text: `{colors.primary}` (`#000B33`), Hover: `{colors.primary-light-hover}` (`#D2E3FF`).
- Padding: `16px 24px`, Radius: `{rounded.pill}`.

#### `button-primary-dark`
- Conversion action across white sections ("APPLY NOW", "Compare Universities").
- Background: `{colors.primary}` (`#000B33`), Text: `{colors.on-primary}` (`#FFFFFF`), Hover: `{colors.primary-hover}` (`#4C6DA6`).
- Padding: `16px 32px`, Radius: `{rounded.pill}`.

### 3. Study Destinations Accordion ("The Cinematic Split Stage")
- **Layout:** 4 cards in a row (`Russia`, `Uzbekistan`, `Kazakhstan`, `Georgia`).
- **Interaction:** One card is expanded by default (~60% width), revealing a split view:
  - Left side: Full photographic destination showcase with country flag and badge.
  - Right side: Soft-lavender editorial panel with headline, key stats (Tuition, Duration, Intake), and CTA.
- **Collapsed State:** Un-hovered cards compress into slender vertical photographic strips with country flag and vertical typography. Hovering dynamically shifts expansion smoothly with CSS `transition-all duration-500 ease-out`.

### 4. Regulatory & Compliance Modules
- Atmospheric blue container cards with floating chips highlighting official NMC Gazette regulations (54-month course + 12-month internship, English medium, license to practice).
- Side-by-side comparison tables with clear green/red verification checks.

### 5. Accordion FAQs (`accordion-faq-row`)
- Minimalist 2-column disclosure items with hairline bottom border (`#EFEFEF`), bold title in `{colors.ink}`, and smooth rotating chevron indicator.
- 100% text fidelity preserving all 15 authentic WSO advisory questions and answers.

---

## Do's and Don'ts

### Do
- Maintain the **atmospheric gradient** (`#FFF` → `#94AEDA` → `#2F4E82`) across the hero stage.
- Always use **`{rounded.pill}` (9999px)** for buttons; sharp rectangular buttons violate the friendly, approachable advisory tone.
- Pair a solid white pill with a soft blue pill (`#BFD7FF`) when presenting dual CTAs.
- Anchor all body and heading typography in **Midnight Navy** (`#000B33`) for authoritative, single-color legibility.
- Preserve all authentic copy, stats, disclaimers, and 15 FAQs verbatim with zero truncation.
- Preserve the 24px (`rounded-3xl`) radius on feature cards to maintain the organic card feel.

### Don't
- Never use harsh neon colors (e.g. electric green, hot magenta) — keep the palette restrained to cool sky, lavender, and midnight navy.
- Don't split headings into awkward mid-sentence colors unless explicitly directed; maintain uniform deep navy headlines.
- Don't use heavy drop shadows under buttons; rely on background color transitions and soft ring focus.
- Don't remove the `backdrop-blur` from the floating header pill; it ensures legibility over scrolling imagery.

---

## Responsive Behavior

| Breakpoint | Width | Adjustments |
|---|---|---|
| **Mobile** | `< 768px` | Display H1 scales 60px → 40px; CTA pills stack vertically; floating nav collapses into mobile hamburger pill; destination accordion switches to stacked carousel. |
| **Tablet** | `768px–1023px` | Display H1 at 50px; accreditation marquee glides continuously; feature cards wrap 2-up. |
| **Desktop** | `≥ 1024px` | Full floating pill nav visible; 4-card horizontal expanding destination accordion active; giant 171px watermark display enabled. |

---

## Verification & Iteration Checklist

1. **Text Integrity:** Verify 100% verbatim copy preservation from `src/data/homeContent.ts`.
2. **Design Tokens:** Reference design tokens directly (`{colors.primary}`, `{colors.primary-light}`, `{rounded.pill}`, `{typography.display-hero}`).
3. **Button Consistency:** Keep all button radii strictly set to `{rounded.pill}` (9999px).
4. **Local Verification:** Run validation and inspect against the live preview at `http://localhost:3000`.
