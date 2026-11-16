import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Study Overseas | MBBS Abroad 2027 Admissions Open",
  description:
    "Get trusted guidance for placements at top NMC-recognized medical universities abroad. Explore MBBS in Russia, Uzbekistan, Kazakhstan, and Kyrgyzstan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased text-docshield-ink bg-white`}
      >
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}
