import { homeContent } from "@/data/homeContent";
import { ShieldCheck, UtensilsCrossed, Stethoscope, CheckCircle2, XCircle } from "lucide-react";

export default function ParentAndCompareSection() {
  const { parentGuide, comparisons } = homeContent;

  const guideIcons = [ShieldCheck, UtensilsCrossed, Stethoscope];

  return (
    <section id="parent-guide" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Parent Guide Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {parentGuide.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {parentGuide.title}
          </h2>
          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {parentGuide.subtext}
          </p>
        </div>

        {/* 3 Pillar Cards for Parents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-28">
          {parentGuide.highlights.map((item, idx) => {
            const Icon = guideIcons[idx % guideIcons.length];
            return (
              <div
                key={item.title}
                className="rounded-3xl p-8 bg-docshield-lavender/50 border border-docshield-primary-light/50 hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-docshield-accent mb-6 border border-docshield-border">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-docshield-ink mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-docshield-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Engine */}
        <div id="comparisons" className="rounded-3xl p-8 sm:p-12 bg-docshield-subtle/70 border border-docshield-border-card/70">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {comparisons.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-docshield-ink tracking-tight mb-3">
              {comparisons.title}
            </h2>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-xl mx-auto">
              {comparisons.subtext}
            </p>
          </div>

          {/* Comparison Table / Matrix */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-docshield-border text-xs sm:text-sm font-semibold text-docshield-ink uppercase tracking-wider">
                  <th className="py-4 px-4 w-1/3">Evaluation Metric</th>
                  <th className="py-4 px-4 w-1/3 text-red-700 bg-red-50/50 rounded-t-xl">India Private Medical Seats</th>
                  <th className="py-4 px-4 w-1/3 text-docshield-primary bg-docshield-lavender/60 rounded-t-xl">Abroad Govt Universities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-docshield-border text-xs sm:text-sm">
                {comparisons.comparisonPoints.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-docshield-ink">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-docshield-ink-muted bg-red-50/30">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.indiaPrivate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-docshield-ink bg-docshield-lavender/30">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.abroadGovt}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
