import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutPlatform from "@/components/about/AboutPlatform";
import AboutWhyExists from "@/components/about/AboutWhyExists";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutAgencyCompare from "@/components/about/AboutAgencyCompare";
import AboutProcess from "@/components/about/AboutProcess";
import AboutFramework from "@/components/about/AboutFramework";
import AboutComparisons from "@/components/about/AboutComparisons";
import AboutJourney from "@/components/about/AboutJourney";
import AboutCountryUniversities from "@/components/about/AboutCountryUniversities";
import AboutComplianceFinance from "@/components/about/AboutComplianceFinance";
import AboutFaqAnthem from "@/components/about/AboutFaqAnthem";

export const metadata: Metadata = {
  title: "About Us | We Study Overseas — India's Premier Medical Education Advisory",
  description:
    "Helping Students Build Global Futures. We provide genuine information, real data, and 100% student-aligned guidance for MBBS abroad.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Floating Frosted Navigation */}
      <Navbar />

      {/* 2. Atmospheric Hero & Impact Stats */}
      <AboutHero />

      {/* 3. Platform Definition & 8 Capabilities */}
      <AboutPlatform />

      {/* 4. Common Problems Faced by Students */}
      <AboutWhyExists />

      {/* 5. Institutional Mission & Vision */}
      <AboutMissionVision />

      {/* 6. Why Students Choose Us & Standard Quote */}
      <AboutWhyChoose />

      {/* 7. Traditional Agencies vs We Study Abroad */}
      <AboutAgencyCompare />

      {/* 8. 3-Step Admission Process */}
      <AboutProcess />

      {/* 9. University Selection Framework */}
      <AboutFramework />

      {/* 10. Destination Comparisons */}
      <AboutComparisons />

      {/* 11. The 8-Stage Student Journey */}
      <AboutJourney />

      {/* 12. Country Knowledge Hub */}
      <AboutCountryUniversities />

      {/* 13. Financial Planning, Visa & NMC Guidelines */}
      <AboutComplianceFinance />

      {/* 14. FAQs (All 30 Items) & Global Anthem CTA */}
      <AboutFaqAnthem />

      {/* 15. Institutional Footer */}
      <Footer />
    </main>
  );
}
