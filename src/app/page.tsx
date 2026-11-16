import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerTicker from "@/components/PartnerTicker";
import DestinationsSection from "@/components/DestinationsSection";
import DifferenceSection from "@/components/DifferenceSection";
import MetricsSection from "@/components/MetricsSection";
import RegulatorySection from "@/components/RegulatorySection";
import UniversitiesSection from "@/components/UniversitiesSection";
import TwainCopy from "@/components/twain-copy";
import FinancialSection from "@/components/FinancialSection";
import ParentAndCompareSection from "@/components/ParentAndCompareSection";
import MediaSection from "@/components/MediaSection";
import PathwaysAndBlogSection from "@/components/PathwaysAndBlogSection";
import AdvisoryTerminal from "@/components/AdvisoryTerminal";
import KnowledgeNetworkSection from "@/components/KnowledgeNetworkSection";
import FaqSection from "@/components/FaqSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Floating Capsule Navigation */}
      <Navbar />

      {/* 2. Atmospheric Hero Section */}
      <Hero />

      {/* 3. Partner / Regulatory Recognition Ticker */}
      <PartnerTicker />

      {/* 4. Top Countries for MBBS Abroad */}
      <DestinationsSection />

      {/* 5. The WSO Difference (Docshield Tilted Quote Cards over Giant Typography) */}
      <DifferenceSection />

      {/* 6. Verified Giant Impact Metrics */}
      <MetricsSection />

      {/* 7. Regulatory Framework (NMC, FMGE & NExT) */}
      <RegulatorySection />

      {/* 8. Featured Medical Universities */}
      <UniversitiesSection />

      {/* 9. Key Benefits / Why Indian Students Prefer MBBS Abroad (Twain Interactive Choreography) */}
      <TwainCopy />

      {/* 10. Real Cost Ledger & Scholarships */}
      <FinancialSection />

      {/* 11. Parent's Guide & Comparison Engine */}
      <ParentAndCompareSection />

      {/* 12. Student Reviews & Video Audits */}
      <MediaSection />

      {/* 13. Life After MBBS & Editorial Desk */}
      <PathwaysAndBlogSection />

      {/* 14. Advisory Terminal (Radial Sunburst CTA & Evaluation Form) */}
      <AdvisoryTerminal />

      {/* 15. Knowledge Network Directory */}
      <KnowledgeNetworkSection />

      {/* 16. Frequently Asked Questions (All 15) */}
      <FaqSection />

      {/* 17. Guiding Visionary Anchor */}
      <VisionSection />

      {/* 18. Master Production Inset Footer */}
      <Footer />
    </main>
  );
}
