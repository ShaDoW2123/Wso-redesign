"use client";

import { contactContent } from "@/data/contactContent";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  MapPin,
  Train,
  Clock,
  Navigation,
  Car,
  CalendarCheck,
} from "lucide-react";

export default function ContactMapLocator() {
  const hq = contactContent.offices.list.find((o) => o.isHQ) || contactContent.offices.list[0];

  return (
    <section className="py-20 sm:py-28 bg-[#F2F7FF]/50 border-t border-docshield-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#BFD7FF]/70 shadow-lg p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                    CENTRAL HEADQUARTERS
                  </span>
                  <div className="w-8 h-px bg-docshield-accent/30" />
                </div>

                <MaskedReveal yOffset="105%" duration={0.9}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
                    Visiting Our Bhubaneswar Office
                  </h2>
                </MaskedReveal>

                <p className="text-sm text-docshield-ink-muted leading-relaxed">
                  Located in the educational and commercial hub of Bhubaneswar, Odisha, our headquarters provides private, dedicated counseling suites for students and families.
                </p>
              </div>

              {/* Address details */}
              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#E6EFF8] space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-docshield-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-docshield-ink">
                      {hq.city}
                    </h3>
                    <p className="text-xs text-docshield-ink-muted mt-0.5 leading-relaxed">
                      {hq.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-docshield-ink pl-8">
                  <Clock className="w-4 h-4 text-docshield-accent shrink-0" />
                  <span>{hq.hours}</span>
                </div>
              </div>

              {/* Transit & Accessibility */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-docshield-ink">
                  Transit & Accessibility:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-docshield-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-docshield-ink block">Rail & Air Connectivity</span>
                      <span className="text-[11px] text-docshield-ink-muted">10 mins from Bhubaneswar Railway Station & 15 mins from Airport</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-docshield-ink block">Visitor Parking</span>
                      <span className="text-[11px] text-docshield-ink-muted">Dedicated visitor parking available on premises</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Bhubaneswar,Odisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-docshield-primary text-white text-xs font-medium hover:bg-docshield-primary-hover transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href="#advisory-terminal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-docshield-lavender text-docshield-accent text-xs font-semibold hover:bg-docshield-primary-light/40 transition-colors border border-docshield-border"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Schedule In-Person Meeting</span>
                </a>
              </div>
            </div>

            {/* Right Embedded Interactive Google Map */}
            <div className="lg:col-span-6 flex">
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#BFD7FF] shadow-inner bg-[#EBF3FC] min-h-[380px] lg:min-h-full">
                <iframe
                  title="We Study Overseas - Bhubaneswar, Odisha Location"
                  src="https://maps.google.com/maps?q=Bhubaneswar,Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[380px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
