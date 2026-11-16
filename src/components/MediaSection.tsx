import { homeContent } from "@/data/homeContent";
import { Play, Eye, Clock, Star } from "lucide-react";

export default function MediaSection() {
  const { reviews, videos } = homeContent;

  return (
    <section id="videos" className="py-24 sm:py-32 bg-docshield-subtle/50 border-y border-docshield-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Google Reviews Video Bar */}
        <div id="reviews" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {reviews.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {reviews.title}
            </h2>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {reviews.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.testimonials.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl overflow-hidden bg-white border border-docshield-border-card/60 hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                {/* Video Mock Thumbnail Container */}
                <div className="relative aspect-video bg-gradient-to-br from-docshield-primary via-docshield-accent to-docshield-ambient flex items-center justify-center p-6 text-center cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-docshield-primary flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full">
                    Video Review
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1 mb-2.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-docshield-ink mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-docshield-border flex items-center justify-between text-xs text-docshield-ink-muted">
                    <span className="font-medium text-docshield-ink">{item.student}</span>
                    <span>{item.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Documentary Videos */}
        <div className="pt-8 border-t border-docshield-border">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
                {videos.pill}
              </span>
              <div className="w-8 h-px bg-docshield-accent/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {videos.title}
            </h2>
            <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed max-w-2xl mx-auto">
              {videos.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {videos.featuredList.map((vid) => (
              <div
                key={vid.title}
                className="rounded-3xl overflow-hidden bg-white border border-docshield-border-card/60 hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#0B1B3D] to-[#1E3A68] flex items-center justify-center p-6 text-center cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-docshield-primary-light text-docshield-ink flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{vid.duration}</span>
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-docshield-ink mb-3 line-clamp-2">
                    {vid.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-docshield-ink-muted">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{vid.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
