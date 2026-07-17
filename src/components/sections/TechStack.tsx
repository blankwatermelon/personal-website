"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

interface SkillGroupProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillGroup = React.memo(function SkillGroup({
  title,
  skills,
  index,
}: SkillGroupProps) {
  return (
    <div 
      className="reveal-up py-4 border-b border-white/5 hover:border-primary/30 transition-colors duration-500 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
        <h3 className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] w-32 shrink-0">
          {title}
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-lg md:text-xl font-normal text-slate-400 group-hover:text-slate-200 transition-colors duration-300 hover:!text-primary cursor-default"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export const TechStack = React.memo(function TechStack() {
  const [containerRef, revealed] = useReveal<HTMLDivElement>();

  return (
    <section id="tech-stack" className="py-12">
      <SectionHeading
        title="Tech Stack"
        subtitle="What I actually build with day to day."
        center={false}
      />

      <div
        ref={containerRef}
        className={cn(
          "flex flex-col mt-4",
          revealed && "is-revealed"
        )}
      >
        <SkillGroup index={0} title="Languages" skills={portfolioData.skills.languages} />
        <SkillGroup index={1} title="Libraries" skills={portfolioData.skills.libraries} />
        <SkillGroup index={2} title="Databases" skills={portfolioData.skills.web} />
        <SkillGroup index={3} title="Tools" skills={portfolioData.skills.tools} />
      </div>
    </section>
  );
});
