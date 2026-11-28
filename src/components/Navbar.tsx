"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileUniOpen, setMobileUniOpen] = useState(false);
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
          {nav.links.map((link) => {
            if (link.label === "Universities") {
              return (
                <div key={link.label} className="relative group py-1">
                  <Link
                    href="/#featured-universities"
                    className="flex items-center gap-1 text-xs xl:text-sm font-medium text-docshield-ink/75 hover:text-docshield-ink tracking-tight transition-colors py-1 cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu Card */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="w-72 bg-white/95 backdrop-blur-2xl rounded-2xl p-2 shadow-2xl border border-docshield-border flex flex-col gap-1">
                      <Link
                        href="/china"
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-docshield-lavender transition-colors group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">🇨🇳</span>
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-semibold text-docshield-ink">
                              MBBS in China
                            </span>
                            <span className="text-[10px] text-docshield-ink-muted">
                              45 MOE-Approved Universities
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          2026/27
                        </span>
                      </Link>

                      <Link
                        href="/#featured-universities"
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-docshield-lavender transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">🌐</span>
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-semibold text-docshield-ink">
                              All Universities
                            </span>
                            <span className="text-[10px] text-docshield-ink-muted">
                              Global Partner Directory
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-docshield-ink/75 hover:text-docshield-ink tracking-tight transition-colors py-1"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Contact + APPLY NOW */}
        <div className="hidden sm:flex items-center gap-3 xl:gap-4">
          <Link
            href="/contact"
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
            {nav.links.map((link) => {
              if (link.label === "Universities") {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileUniOpen(!mobileUniOpen)}
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-docshield-ink hover:bg-docshield-lavender rounded-xl transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileUniOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileUniOpen && (
                      <div className="pl-4 flex flex-col gap-1 mt-1 bg-docshield-lavender/40 rounded-xl p-2">
                        <Link
                          href="/china"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-docshield-ink hover:bg-white rounded-lg transition-colors"
                        >
                          <span>🇨🇳 MBBS in China</span>
                          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            2026/27
                          </span>
                        </Link>
                        <Link
                          href="/#featured-universities"
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-3 py-2 text-xs font-medium text-docshield-ink-muted hover:text-docshield-ink rounded-lg"
                        >
                          🌐 All Universities
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-docshield-ink hover:bg-docshield-lavender rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-docshield-border flex flex-col gap-2.5">
            <Link
              href="/contact"
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
