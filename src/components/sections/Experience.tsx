"use client";

import React from "react";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TbBriefcase, TbBrandLinkedin, TbExternalLink } from "react-icons/tb";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

const formatDescription = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-slate-200">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const ExperienceSection = React.memo(function ExperienceSection() {
  const [groupRef, groupRevealed] = useReveal<HTMLDivElement>();

  return (
    <div className="h-full">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and industry impact."
        center={false}
      />

      {portfolioData.experience.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg font-light">
            Currently looking for opportunities to contribute and grow.
          </p>
        </div>
      ) : (
        <div
          ref={groupRef}
          className={cn(
            "relative border-l border-white/5 ml-4 pl-10 space-y-16",
            groupRevealed && "is-revealed"
          )}
        >
          {portfolioData.experience.map((exp, index) => (
          <div
            key={index}
            className="reveal-up relative group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline Indicator */}
            <span className="absolute -left-[45px] top-1.5 h-2 w-2 bg-primary rotate-45 group-hover:scale-150 transition-transform duration-500" />

            <div className="flex flex-col gap-1 mb-6">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">
                {exp.period}
              </span>
              <h3 
                className="text-2xl font-bold text-slate-100 tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <span className="text-sm tracking-wide">@ {exp.company}</span>
              </div>
            </div>

            <ul className="space-y-4 text-slate-500 font-light leading-relaxed">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                  <span className="text-sm md:text-base">
                    {formatDescription(desc)}
                  </span>
                </li>
              ))}
            </ul>

            {exp.link && (() => {
              const isLinkedIn = /linkedin\.com/i.test(exp.link);
              const Icon = isLinkedIn ? TbBrandLinkedin : TbExternalLink;
              return (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors py-2 border-b border-transparent hover:border-primary/20"
                >
                  <Icon size={14} />
                  {isLinkedIn ? "View LinkedIn Details" : "Project Source"}
                </a>
              );
            })()}
          </div>
        ))}
        </div>
      )}
    </div>
  );
});
