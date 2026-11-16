import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TwainCopy from "@/components/twain-copy";

export const metadata = {
  title: "Twain Scroll Showcase | We Study Overseas",
  description:
    "WSO clinical-blue adaptation of the Twain scroll-driven card cascade, narrative panel, and 3D flip showcase.",
};

export default function TwainCopyPreviewPage() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-white">
      <Navbar />
      {/* Top breathing room below the fixed floating capsule navigation */}
      <div className="pt-20 sm:pt-24">
        <TwainCopy />
      </div>
      <Footer />
    </main>
  );
}
