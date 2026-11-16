import {
  FileCheck2,
  Globe,
  BookOpenCheck,
  Award,
  Landmark,
  GraduationCap,
  Building2,
  ShieldCheck,
} from "lucide-react";

const accreditations = [
  {
    name: "NMC India",
    label: "National Medical Commission",
    status: "Gazette Compliant",
    icon: FileCheck2,
    iconColor: "text-emerald-600",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "WHO Geneva",
    label: "World Health Organization",
    status: "Global Standards",
    icon: Globe,
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "WDOMS Listed",
    label: "World Directory of Medical Schools",
    status: "Verified Registry",
    icon: BookOpenCheck,
    iconColor: "text-indigo-600",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    name: "ECFMG USA",
    label: "USMLE Eligibility Pathway",
    status: "Direct Access",
    icon: Award,
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "UNESCO",
    label: "International Education Protocol",
    status: "Accredited Hubs",
    icon: Landmark,
    iconColor: "text-sky-600",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    name: "FAIMER",
    label: "Advancement of International Medical Ed",
    status: "Global License",
    icon: GraduationCap,
    iconColor: "text-teal-600",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    name: "Ministry of Health",
    label: "Host Country Statutory Health Ministry",
    status: "Govt Certified",
    icon: Building2,
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    name: "NBE India",
    label: "National Board of Examinations",
    status: "FMGE / NExT Roadmap",
    icon: ShieldCheck,
    iconColor: "text-rose-600",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function PartnerTicker() {
  // Duplicated for a seamless 360-degree perpetual loop
  const tickerItems = [...accreditations, ...accreditations];

  return (
    <section className="py-12 border-y border-docshield-border/70 bg-gradient-to-b from-white via-docshield-lavender/30 to-white overflow-hidden relative">
      {/* Header Eyebrow with Active Verification Status Dot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-7 flex items-center justify-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-docshield-ink/75 text-center">
          Recognized By Global Statutory Medical Councils & Governing Authorities
        </p>
      </div>

      {/* Concept 1: Infinite Smooth Marquee with Left & Right Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="animate-marquee flex items-center gap-5 sm:gap-6 py-2">
          {tickerItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white hover:bg-docshield-lavender/70 border border-docshield-border/80 hover:border-docshield-primary-light shadow-xs hover:shadow-card-soft transition-all duration-300 shrink-0 cursor-default group"
              >
                {/* Emblem Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-docshield-lavender flex items-center justify-center shrink-0 border border-docshield-primary-light/50 transition-transform group-hover:scale-105">
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>

                {/* Authority Information */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-docshield-ink group-hover:text-docshield-accent transition-colors">
                      {item.name}
                    </span>
                    <span
                      className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <span className="text-[11px] text-docshield-ink-muted leading-tight mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
