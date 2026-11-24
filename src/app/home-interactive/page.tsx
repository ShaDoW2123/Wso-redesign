import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import InteractiveHero from "@/components/interactive/InteractiveHero";
import PartnerTicker from "@/components/PartnerTicker";
import PinnedHorizontalDestinations from "@/components/interactive/PinnedHorizontalDestinations";
import DifferenceSection from "@/components/DifferenceSection";
import InteractiveMetrics from "@/components/interactive/InteractiveMetrics";
import RegulatorySection from "@/components/RegulatorySection";
import InteractiveUniversities from "@/components/interactive/InteractiveUniversities";
import TwainCopy from "@/components/twain-copy";
import InteractiveFinancial from "@/components/interactive/InteractiveFinancial";
import InteractiveParentCompare from "@/components/interactive/InteractiveParentCompare";
import MediaSection from "@/components/MediaSection";
import PathwaysAndBlogSection from "@/components/PathwaysAndBlogSection";
import InteractiveAdvisoryTerminal from "@/components/interactive/InteractiveAdvisoryTerminal";
import KnowledgeNetworkSection from "@/components/KnowledgeNetworkSection";
import FaqSection from "@/components/FaqSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

export default function HomeInteractivePreview() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        {/* 1. Floating Capsule Navigation */}
        <Navbar />

        {/* 2. Interactive Parallax Hero Stage with Masked Headline Reveal */}
        <InteractiveHero />

        {/* 3. Partner / Regulatory Recognition Ticker */}
        <PartnerTicker />

        {/* 4. NK Studio Pinned Horizontal Destinations Showcase */}
        <PinnedHorizontalDestinations />

        {/* 5. The WSO Difference (Curved-Arc GSAP Scroll Stage) */}
        <DifferenceSection />

        {/* 6. Live Rolling Odometer Metrics Section */}
        <InteractiveMetrics />

        {/* 7. Regulatory Framework (NMC, FMGE & NExT) */}
        <RegulatorySection />

        {/* 8. Interactive Filtered Medical Universities */}
        <InteractiveUniversities />

        {/* 9. Key Benefits / Twain.ai Interactive Choreography */}
        <TwainCopy />

        {/* 10. Real-Time 6-Year Budget Estimator & Cost Ledger */}
        <InteractiveFinancial />

        {/* 11. Interactive Parent's Guide & Comparison Engine */}
        <InteractiveParentCompare />

        {/* 12. Student Reviews & Video Audits */}
        <MediaSection />

        {/* 13. Life After MBBS & Editorial Desk */}
        <PathwaysAndBlogSection />

        {/* 14. Interactive Advisory Terminal & Eligibility Form */}
        <InteractiveAdvisoryTerminal />

        {/* 15. Knowledge Network Directory */}
        <KnowledgeNetworkSection />

        {/* 16. Frequently Asked Questions (All 15) */}
        <FaqSection />

        {/* 17. Guiding Visionary Anchor */}
        <VisionSection />

        {/* 18. Master Production Inset Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
