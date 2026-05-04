"use client";

import React from "react";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TbBriefcase, TbBrandLinkedin, TbExternalLink } from "react-icons/tb";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

export const ExperienceSection = React.memo(function ExperienceSection() {
  const [groupRef, groupRevealed] = useReveal<HTMLDivElement>();

  return (
    <div className="h-full">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey"
        center={false}
      />

      {portfolioData.experience.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">
            Currently looking for opportunities to contribute and grow.
          </p>
        </div>
      ) : (
        <div
          ref={groupRef}
          className={cn(
            "relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12",
            groupRevealed && "is-revealed"
          )}
        >
          {portfolioData.experience.map((exp, index) => (
          <div
            key={index}
            className="reveal-up relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-slate-950 border-2 border-primary" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
              <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <TbBriefcase size={16} />
              <span className="font-medium">{exp.company}</span>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
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
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Icon size={16} />
                  {isLinkedIn ? "Read the LinkedIn post" : "Read more"}
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
