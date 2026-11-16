import Link from "next/link";
import { homeContent } from "@/data/homeContent";
import { Compass, Microscope, Stethoscope, Briefcase, Calendar, Clock, ArrowRight } from "lucide-react";

export default function PathwaysAndBlogSection() {
  const { lifeAfterMbbs, blog } = homeContent;

  const pathwayIcons = [Compass, Microscope, Stethoscope, Briefcase];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Life After MBBS */}
        <div id="life-after-mbbs" className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {lifeAfterMbbs.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {lifeAfterMbbs.title}
            </h2>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {lifeAfterMbbs.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAfterMbbs.pathways.map((path, idx) => {
              const Icon = pathwayIcons[idx % pathwayIcons.length];
              return (
                <div
                  key={path.title}
                  className="rounded-3xl p-7 bg-docshield-subtle/50 hover:bg-docshield-lavender/50 border border-docshield-border hover:border-docshield-primary-light transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-docshield-primary shadow-xs border border-docshield-border mb-5">
                      <Icon className="w-5 h-5 text-docshield-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-docshield-ink mb-2">
                      {path.title}
                    </h3>
                    <p className="text-xs text-docshield-ink-muted leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Desk Blog */}
        <div id="blog" className="pt-8 border-t border-docshield-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                  {blog.pill}
                </span>
                <div className="w-8 h-px bg-docshield-accent/30" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
                {blog.title}
              </h2>
              <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
                {blog.subtext}
              </p>
            </div>

            <Link
              href="#blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-docshield-primary hover:text-docshield-accent transition-colors self-start md:self-auto"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blog.posts.map((post) => (
              <div
                key={post.title}
                className="rounded-3xl p-7 bg-white border border-docshield-border-card/60 hover:border-docshield-primary-light hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs text-docshield-ink-muted">
                    <span className="px-2.5 py-1 rounded-full bg-docshield-lavender text-docshield-primary font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-docshield-ink mb-3 group-hover:text-docshield-accent transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-docshield-ink-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-docshield-border flex items-center justify-between text-xs">
                  <span className="text-docshield-ink-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="font-semibold text-docshield-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
