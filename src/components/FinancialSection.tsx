import { homeContent } from "@/data/homeContent";
import { Receipt, Home, Utensils, ShieldPlus, Plane, Award, Building2, Landmark } from "lucide-react";

export default function FinancialSection() {
  const { financialPlanning, scholarships } = homeContent;

  const costIcons = [Receipt, Home, Utensils, ShieldPlus, Plane];
  const scholarshipIcons = [Award, Building2, Landmark];

  return (
    <section id="financial-planning" className="py-24 sm:py-32 bg-docshield-subtle/50 border-y border-docshield-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cost Ledger Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {financialPlanning.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {financialPlanning.title}
          </h2>
          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {financialPlanning.subtext}
          </p>
        </div>

        {/* 5 Cost Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {financialPlanning.cards.map((card, idx) => {
            const Icon = costIcons[idx % costIcons.length];
            return (
              <div
                key={card.title}
                className="rounded-3xl p-7 bg-white border border-docshield-border-card/60 hover:border-docshield-primary-light hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-primary mb-5 border border-docshield-primary-light/40">
                  <Icon className="w-5 h-5 text-docshield-accent" />
                </div>
                <h3 className="text-lg font-semibold text-docshield-ink mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Scholarships Sub-section */}
        <div id="scholarships" className="pt-8 border-t border-docshield-border">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {scholarships.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {scholarships.title}
            </h2>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {scholarships.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {scholarships.cards.map((item, idx) => {
              const Icon = scholarshipIcons[idx % scholarshipIcons.length];
              return (
                <div
                  key={item.title}
                  className="rounded-3xl p-7 bg-white border border-docshield-border-card/60 hover:border-docshield-primary-light hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-docshield-lavender flex items-center justify-center text-docshield-primary mb-5 border border-docshield-primary-light/40">
                    <Icon className="w-5 h-5 text-docshield-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-docshield-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
