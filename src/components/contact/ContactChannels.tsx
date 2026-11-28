"use client";

import { contactContent } from "@/data/contactContent";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import {
  Phone,
  Mail,
  MessageSquare,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";

const channelIcons = {
  Phone,
  Mail,
  MessageSquare,
  LifeBuoy,
};

export default function ContactChannels() {
  const { channels } = contactContent;

  return (
    <section id="contact-channels" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-docshield-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-docshield-accent">
              {channels.pill}
            </span>
            <div className="w-8 h-px bg-docshield-accent/30" />
          </div>

          <MaskedReveal yOffset="105%" duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-docshield-ink tracking-tight mb-4">
              {channels.title}
            </h2>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-docshield-ink-muted leading-relaxed">
            {channels.subtitle}
          </p>
        </div>

        {/* 4 Direct Communication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.list.map((ch) => {
            const IconComponent = channelIcons[ch.iconName] || Phone;
            const isExternal = ch.href.startsWith("http");

            return (
              <SpotlightCard
                key={ch.id}
                theme="light"
                spotlightColor="#BFD7FF"
                intensity={0.4}
                className="p-7 bg-[#F2F7FF]/60 hover:bg-[#F2F7FF] border border-[#BFD7FF]/50 rounded-3xl transition-all flex flex-col justify-between group shadow-xs hover:shadow-card-soft"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-docshield-accent border border-docshield-border shadow-xs group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-docshield-accent bg-white/90 px-2.5 py-1 rounded-full border border-[#BFD7FF]">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-docshield-ink mb-2">
                    {ch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-docshield-ink-muted mb-4 leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#BFD7FF]/40">
                  <span
                    className="block text-[13px] font-semibold text-docshield-ink mb-3.5 tracking-tight"
                    title={ch.value}
                  >
                    {ch.value}
                  </span>
                  <a
                    href={ch.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-full bg-docshield-primary text-white text-xs font-medium hover:bg-docshield-primary-hover transition-colors shadow-xs group-hover:shadow-sm"
                  >
                    <span>{ch.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
