import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ChinaHero from "@/components/china/ChinaHero";
import ChinaQuickHighlights from "@/components/china/ChinaQuickHighlights";
import ChinaIntroductionAndWhy from "@/components/china/ChinaIntroductionAndWhy";
import ChinaTopUniversities from "@/components/china/ChinaTopUniversities";
import ChinaFeesAndCost from "@/components/china/ChinaFeesAndCost";
import ChinaEligibilityAndAdmission from "@/components/china/ChinaEligibilityAndAdmission";
import ChinaCampusLifeAndAcademics from "@/components/china/ChinaCampusLifeAndAcademics";
import ChinaNmcAndLicensing from "@/components/china/ChinaNmcAndLicensing";
import ChinaStrategicReview from "@/components/china/ChinaStrategicReview";
import ChinaFaqs from "@/components/china/ChinaFaqs";
import InteractiveAdvisoryTerminal from "@/components/interactive/InteractiveAdvisoryTerminal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MBBS in China for Indian Students | 45 MOE Approved Universities",
  description:
    "Comprehensive guide to English-medium MBBS in China for Indian students. Explore NMC compliance, fees, eligibility, top medical universities, and NExT / FMGE opportunities.",
};

export default function ChinaUniversityPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        {/* 1. Global Capsule Navigation with China Dropdown */}
        <Navbar />

        {/* 2. China Atmospheric Hero */}
        <ChinaHero />

        {/* 3. Quick Highlights Spec Ledger */}
        <ChinaQuickHighlights />

        {/* 4. Introduction & Motivation Factors */}
        <ChinaIntroductionAndWhy />

        {/* 5. Top 8 MOE Medical Universities */}
        <ChinaTopUniversities />

        {/* 6. Fees Structure & Interactive 6-Year Budget Estimator */}
        <ChinaFeesAndCost />

        {/* 7. Eligibility Criteria, 7-Step Process, Documents & 6-Year Journey */}
        <ChinaEligibilityAndAdmission />

        {/* 8. Medium of Instruction, Mandatory HSK-4 & Campus Life */}
        <ChinaCampusLifeAndAcademics />

        {/* 9. NMC Regulations (2021 Gazette) & Licensure Roadmap (FMGE / NExT) */}
        <ChinaNmcAndLicensing />

        {/* 10. Strategic Review (Worth It?), Country Comparisons, Career Pathways & WSO Expert Opinion */}
        <ChinaStrategicReview />

        {/* 11. All 33 Frequently Asked Questions with Search */}
        <ChinaFaqs />

        {/* 12. Direct Profile Evaluation & Advisory Terminal */}
        <InteractiveAdvisoryTerminal />

        {/* 13. Master Production Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
