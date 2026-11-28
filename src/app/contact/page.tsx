import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactFormTerminal from "@/components/contact/ContactFormTerminal";
import ContactMapLocator from "@/components/contact/ContactMapLocator";
import ContactFaqs from "@/components/contact/ContactFaqs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | We Study Overseas (WSO) - Official MBBS Abroad Advisory",
  description:
    "Get in touch with We Study Overseas. Schedule a free 1-on-1 profile evaluation, connect with senior MBBS abroad advisors, or visit our headquarters in Bhubaneswar, Odisha.",
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        {/* Global Floating Frosted Nav Capsule */}
        <Navbar />

        {/* 1. Atmospheric Celestial Contact Hero */}
        <ContactHero />

        {/* 2. Direct Communication Channels */}
        <ContactChannels />

        {/* 3. Interactive 1-on-1 Profile Evaluation & Advisory Booking Terminal */}
        <ContactFormTerminal />

        {/* 4. Headquarters Visitor Guide & Transit Map */}
        <ContactMapLocator />

        {/* 5. Frequently Asked Questions Regarding Counseling & Visits */}
        <ContactFaqs />

        {/* Global Docshield Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
