"use client";

import React, { useEffect, useRef, useState } from "react";

import { Project } from "@/data/portfolio";
import {
  TbBrandGithub,
  TbExternalLink,
  TbLayoutGrid,
  TbX,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";

function isYouTube(url: string) {
  return /(?:youtube\.com|youtu\.be)/.test(url);
}

/**
 * Typographic poster fallback for projects without a thumbnail.
 * Renders the primary tech tag as a large display-font headline over a
 * crimson→near-black gradient. 
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
    </div>
  );
}

/**
 * Fullscreen lightbox for a project's supplementary screenshots
 * (architecture diagrams, benchmark tables). Rendered into a portal so it
 * escapes the card's stacking/overflow context. Supports keyboard nav.
 */
function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: { src: string; caption: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowRight")
        onNavigate((index + 1) % images.length);
      if (hasMultiple && e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, images.length, hasMultiple, onClose, onNavigate]);

  const current = images[index];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshots"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-colors"
      >
        <TbX size={28} />
      </button>

      {hasMultiple && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
        >
          <TbChevronLeft size={40} />
        </button>
      )}

      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[75vh] flex items-center justify-center">
          {/* Screenshots vary in aspect ratio, so size to the natural image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.caption}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>
        <p className="mt-4 text-center text-sm text-slate-300 leading-relaxed max-w-2xl">
          {current.caption}
        </p>
        {hasMultiple && (
          <div className="mt-3 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => onNavigate(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {hasMultiple && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
        >
          <TbChevronRight size={40} />
        </button>
      )}
    </div>,
    document.body,
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

  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (i: number) => {
    setGalleryIndex(i);
    setGalleryOpen(true);
  };

  // Only offer "more" when the collapsed description actually overflows
  // its 3-line clamp; short blurbs stay static.
  useEffect(() => {
    const el = descriptionRef.current;
    if (el) setIsClamped(el.scrollHeight > el.clientHeight);
  }, []);

  const canExpand = isClamped || expanded;

  return (
    <div
      className={`reveal-up group flex flex-col h-full ${canExpand ? "cursor-pointer" : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={canExpand ? () => setExpanded((v) => !v) : undefined}
    >
      {/* Image Container: Border-less, slightly rounded, scale + grayscale hover */}
      <div
        className={`relative aspect-video w-full overflow-hidden flex-shrink-0 rounded-lg grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 ${hasGallery ? "cursor-zoom-in" : ""}`}
        onClick={
          hasGallery
            ? (e) => {
                e.stopPropagation();
                openGallery(0);
              }
            : undefined
        }
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <ProjectPoster tech={primaryTech} />
        )}
      </div>

      {/* Content: Floating below the image, no container padding */}
      <div className="py-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/80"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 
          className="text-2xl font-bold text-slate-100 mb-3 tracking-tight group-hover:text-primary transition-colors duration-300"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          {project.title}
        </h3>
        
        <p
          ref={descriptionRef}
          className={`text-slate-300 text-sm font-normal leading-relaxed ${expanded ? "" : "line-clamp-3"}`}
        >
          {project.description}
        </p>

        {canExpand && (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
            className="self-start mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-300 transition-colors"
          >
            {expanded ? "Less ↑" : "More ↓"}
          </button>
        )}

        <div className="flex items-center gap-6 mt-auto pt-6">
          {hasGallery && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openGallery(0);
              }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
            >
              <TbLayoutGrid size={18} /> View Details
            </button>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
            >
              <TbBrandGithub size={18} /> Code
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
            >
              <TbExternalLink size={18} /> {liveLabel}
            </Link>
          )}
        </div>
      </div>

      {galleryOpen && hasGallery && (
        <GalleryLightbox
          images={gallery}
          index={galleryIndex}
          onClose={() => setGalleryOpen(false)}
          onNavigate={setGalleryIndex}
        />
      )}
    </div>
  );
});
