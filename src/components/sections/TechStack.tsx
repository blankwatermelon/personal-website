"use client";

import React from "react";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

const SkillCategory = React.memo(function SkillCategory({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string[];
  index: number;
}) {
  return (
    <div
      className="reveal-up bg-slate-800/30 p-6 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <h3 className="text-xl font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});

export const TechStack = React.memo(function TechStack() {
  const [gridRef, gridRevealed] = useReveal<HTMLDivElement>();

  return (
    <div className="h-full">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I work with"
        center={false}
      />

      <div
        ref={gridRef}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-6",
          gridRevealed && "is-revealed"
        )}
      >
        <SkillCategory index={0} title="Languages" skills={portfolioData.skills.languages} />
        <SkillCategory index={1} title="Libraries" skills={portfolioData.skills.libraries} />
        <SkillCategory index={2} title="Databases" skills={portfolioData.skills.web} />
        <SkillCategory index={3} title="Tools" skills={portfolioData.skills.tools} />
      </div>
    </div>
  );
});
