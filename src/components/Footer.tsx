import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { footer } = homeContent;

  return (
    <footer className="w-full px-4 sm:px-8 lg:px-10 py-10 sm:py-16 bg-white">
      <div className="mx-auto w-full max-w-screen-2xl">
        {/* Exact Docshield Gradient Container with expanded height (min-h-[600px] lg:min-h-[660px]) */}
        <div className="flex w-full flex-col-reverse gap-16 rounded-[24px] bg-gradient-to-tr from-[#FFE5D9] via-[#A5BDE5] to-[#4C6DA6] px-6 py-14 sm:px-10 sm:py-18 lg:px-14 lg:py-20 lg:flex-row lg:justify-between 2xl:px-16 shadow-sm overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[660px]">
          
          {/* ── LEFT COLUMN: NAVIGATION & BRAND WORDMARK ── */}
          <div className="flex w-full flex-col justify-between gap-16 sm:gap-24 lg:gap-[240px] 2xl:gap-[300px]">
            
            {/* Top Navigation Links in Clean Columns */}
            <nav className="flex flex-wrap gap-8 sm:gap-14">
              {/* Col 1: Quick Navigation */}
              <ul className="min-w-[130px] space-y-3">
                <li className="text-[11px] font-mono uppercase tracking-widest text-white/75 font-bold mb-3.5">
                  EXPLORE
                </li>
                <li>
                  <Link 
                    href="/" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#impact" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    About WSO
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#featured-universities" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Featured Universities
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#financial-planning" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Real Cost Ledger
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#faqs" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Student FAQs
                  </Link>
                </li>
              </ul>

              {/* Col 2: Study Destinations */}
              <ul className="min-w-[130px] space-y-3">
                <li className="text-[11px] font-mono uppercase tracking-widest text-white/75 font-bold mb-3.5">
                  DESTINATIONS
                </li>
                <li>
                  <Link 
                    href="#destinations" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    MBBS in Russia
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#destinations" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    MBBS in Uzbekistan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#destinations" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    MBBS in Kazakhstan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#destinations" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    MBBS in Kyrgyzstan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#destinations" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    MBBS in Georgia
                  </Link>
                </li>
              </ul>

              {/* Col 3: Resources & Compliance */}
              <ul className="min-w-[130px] space-y-3">
                <li className="text-[11px] font-mono uppercase tracking-widest text-white/75 font-bold mb-3.5">
                  RESOURCES
                </li>
                <li>
                  <Link 
                    href="#regulatory-framework" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    NMC Compliance Gazette
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#financial-planning" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Fee Transparency Guide
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#parent-guide" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Parents Handbook
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#blog" 
                    className="inline-flex items-center text-sm text-white/95 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Editorial Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms-and-conditions" 
                    className="inline-flex items-center text-sm text-white/70 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy-policy" 
                    className="inline-flex items-center text-sm text-white/70 hover:text-[#FFE5D9] hover:translate-x-1 transition-all duration-200 font-normal"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Bottom-Left: Brand Typography (LOGO PRIMARY BLUE) & Copyright */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#112C73] select-none hover:opacity-90 transition-opacity">
                {footer.brandName}
              </h2>
              <p className="text-[11px] text-white/65 font-mono pt-1">
                {footer.copyright}
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN: COMPLETE GUIDANCE & CONTACT INFO ── */}
          <div className="flex w-full max-w-[460px] flex-col justify-between gap-12 sm:gap-20 lg:gap-[240px] 2xl:gap-[300px] shrink-0">
            
            {/* Top-Right: Headline & Overlapping Placeholder Avatar Circles */}
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight block">
                Complete guidance for every stage of your medical journey
              </span>

              {/* Overlapping 3 Circular Frames (Placeholder for user's custom images) */}
              <div className="mt-6 flex items-center">
                <figure className="-ml-3.5 flex items-center first:ml-0">
                  <div className="size-[42px] lg:size-[52px] rounded-full border-2 border-white bg-white/35 backdrop-blur-md shadow-xs transition-transform hover:scale-110" />
                </figure>
                <figure className="-ml-3.5 flex items-center first:ml-0">
                  <div className="size-[42px] lg:size-[52px] rounded-full border-2 border-white bg-white/45 backdrop-blur-md shadow-xs transition-transform hover:scale-110" />
                </figure>
                <figure className="-ml-3.5 flex items-center first:ml-0">
                  <div className="size-[42px] lg:size-[52px] rounded-full border-2 border-white bg-white/55 backdrop-blur-md shadow-xs transition-transform hover:scale-110" />
                </figure>
              </div>
            </div>

            {/* Bottom-Right: Contact Info (with warm peach hover & micro-transition) */}
            <div className="flex flex-col justify-end gap-3.5 text-start">
              <a
                className="group flex items-center justify-start gap-3 text-left text-sm text-white hover:text-[#FFE5D9] transition-all duration-200 font-normal"
                href={`tel:${footer.contactInfo.phone.replace(/\s+/g, "")}`}
              >
                <Phone className="size-4 shrink-0 text-white group-hover:text-[#FFE5D9] group-hover:scale-110 transition-all duration-200" />
                <span>{footer.contactInfo.phone}</span>
              </a>

              <a
                className="group flex items-center justify-start gap-3 text-left text-sm text-white hover:text-[#FFE5D9] transition-all duration-200 font-normal"
                href={`mailto:${footer.contactInfo.email}`}
              >
                <Mail className="size-4 shrink-0 text-white group-hover:text-[#FFE5D9] group-hover:scale-110 transition-all duration-200" />
                <span>{footer.contactInfo.email}</span>
              </a>

              <div className="flex items-center justify-start gap-3 text-left text-sm text-white/90 font-light">
                <MapPin className="size-4 shrink-0 text-white/80" />
                <span>{footer.contactInfo.address}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
