"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

const FEATURED_COUNT = 3;

function isYouTube(url: string) {
  return /(?:youtube\.com|youtu\.be)/.test(url);
}

export function ProjectsSection() {
  const featured = portfolioData.projects.slice(0, FEATURED_COUNT);
  const more = portfolioData.projects.slice(FEATURED_COUNT);
  const [gridRef, gridRevealed] = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="pt-10 pb-20">
      <div className="container mx-auto px-4 xl:px-24">
        <SectionHeading
          title="Featured Projects"
          subtitle="A focused selection — three projects that show range across real-time TypeScript, full-stack web, and ML."
          center={false}
        />

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            gridRevealed && "is-revealed"
          )}
        >
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
              More projects
            </h3>
            <ul className="divide-y divide-slate-800/80 border-t border-b border-slate-800/80">
              {more.map((project) => (
                <li
                  key={project.title}
                  className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-6"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-100 font-semibold truncate">
                      {project.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 truncate">
                      {project.techStack.join(" · ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors"
                      >
                        <TbBrandGithub size={16} /> Code
                      </Link>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <TbExternalLink size={16} />{" "}
                        {isYouTube(project.link) ? "Demo Video" : "Live Demo"}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
