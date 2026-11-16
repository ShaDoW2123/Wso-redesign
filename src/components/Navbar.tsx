"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav } = homeContent;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      {/* Extended Width, Frosted Glass Container with Enhanced Transparency */}
      <div className="pointer-events-auto w-[94%] max-w-7xl bg-white/65 backdrop-blur-xl rounded-full px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_10px_35px_-10px_rgba(0,11,51,0.08)] border border-white/70 transition-all duration-300">
        {/* Brand Logo - Pure Logo Image without text */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/assets/wso-logo-bg-removed.png"
            alt={nav.brandName}
            width={170}
            height={44}
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links with Adjusted Generous Spacing */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-docshield-ink/75 hover:text-docshield-ink tracking-tight transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Contact + APPLY NOW */}
        <div className="hidden sm:flex items-center gap-3 xl:gap-4">
          <Link
            href="#counselling"
            className="px-4 py-2 text-xs xl:text-sm font-medium text-docshield-ink hover:text-docshield-primary transition-colors"
          >
            {nav.contactText}
          </Link>
          <Link
            href="#counselling"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs xl:text-sm font-medium bg-docshield-primary text-white hover:bg-docshield-primary-hover rounded-full transition-all shadow-sm active:scale-95"
          >
            <span>{nav.applyText}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-docshield-ink hover:bg-black/5 rounded-full transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-docshield-border flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 lg:hidden">
          <div className="flex flex-col gap-2">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-docshield-ink hover:bg-docshield-lavender rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-docshield-border flex flex-col gap-2.5">
            <Link
              href="#counselling"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-docshield-ink bg-docshield-lavender hover:bg-docshield-primary-light rounded-full transition-colors"
            >
              {nav.contactText}
            </Link>
            <Link
              href="#counselling"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium bg-docshield-primary text-white hover:bg-docshield-primary-hover rounded-full transition-colors"
            >
              {nav.applyText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
