import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { FolderGit2, FileText, ArrowRight } from "lucide-react";

export default function KnowledgeNetworkSection() {
  const { knowledgeNetwork } = homeContent;

  return (
    <section id="knowledge-network" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {knowledgeNetwork.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
            {knowledgeNetwork.title}
          </h2>
          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
            {knowledgeNetwork.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {knowledgeNetwork.directories.map((dir) => (
            <div
              key={dir.category}
              className="rounded-3xl p-7 bg-docshield-subtle/50 border border-docshield-border hover:border-docshield-primary-light transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-docshield-border">
                  <FolderGit2 className="w-5 h-5 text-docshield-accent" />
                  <h3 className="text-lg font-semibold text-docshield-ink">
                    {dir.category}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  {dir.items.map((item) => (
                    <Link
                      key={item}
                      href="#counselling"
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-docshield-ink hover:text-docshield-accent transition-colors group"
                    >
                      <FileText className="w-3.5 h-3.5 text-docshield-ink-muted group-hover:text-docshield-accent shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#counselling"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-docshield-primary hover:text-docshield-accent transition-colors pt-3 border-t border-docshield-border"
              >
                <span>Access all {dir.category}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
