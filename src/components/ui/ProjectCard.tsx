"use client";

import React from "react";

import { Project } from "@/data/portfolio";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

function isYouTube(url: string) {
  return /(?:youtube\.com|youtu\.be)/.test(url);
}

/**
 * Typographic poster fallback for projects without a thumbnail.
 * Renders the primary tech tag as a large display-font headline over a
 * crimson→near-black gradient. Replaced the moment a real screenshot is
 * dropped into public/images/projects/ and wired up via project.thumbnail.
 */
function ProjectPoster({ tech }: { tech: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/80 via-[#3a0a14] to-black">
      {/* subtle grain via radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.08),transparent_55%)]" />
      {/* faint gridline texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <span
          className="font-bold text-slate-100/95 leading-none tracking-tight text-center break-words"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2rem, 6vw, 3.25rem)",
          }}
        >
          {tech}
        </span>
      </div>
      <div className="absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-[0.25em] text-slate-300/70">
        Preview · screenshot pending
      </div>
    </div>
  );
}

export const ProjectCard = React.memo(function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const primaryTech = project.techStack[0] ?? "Project";
  const liveLabel =
    project.link && isYouTube(project.link) ? "Demo Video" : "Live Demo";

  return (
    <div
      className="reveal-up group relative bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {project.thumbnail ? (
        <div className="relative aspect-video w-full overflow-hidden flex-shrink-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <ProjectPoster tech={primaryTech} />
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <TbBrandGithub size={16} /> Code
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <TbExternalLink size={16} /> {liveLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});
