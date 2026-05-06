"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { TbArrowRight, TbDownload } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const HeroSection = React.memo(function HeroSection() {
  const isMonogram = portfolioData.profileImage.endsWith(".svg");

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-start relative pt-12 md:pt-16 pb-10"
    >
      {/* Background Gradients (subtle ambient glow — kept) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-800/20 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="container mx-auto px-4 xl:px-24 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="blur-up text-primary font-medium mb-4 tracking-wide text-xl md:text-2xl"
              style={{ animationDelay: "0ms" }}
            >
              Hi, I am
            </p>
            <h1
              className="blur-up text-5xl md:text-7xl font-bold text-slate-100 mb-6"
              style={{ animationDelay: "80ms" }}
            >
              {portfolioData.name}
            </h1>
            <h2
              className="blur-up text-2xl md:text-4xl text-slate-300 mb-6 font-semibold"
              style={{ animationDelay: "180ms" }}
            >
              {portfolioData.role}
            </h2>

            <p
              className="blur-up text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left"
              style={{ animationDelay: "260ms" }}
            >
              {portfolioData.about}
            </p>

            <div
              className="blur-up flex flex-col items-center lg:items-start gap-8"
              style={{ animationDelay: "340ms" }}
            >
              {/* Social Media Icons */}
              <SocialIcons variant="default" />

              {/* Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="w-42 px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                >
                  Projects <TbArrowRight size={20} />
                </Link>

                <Link
                  href="/files/resume.pdf"
                  target="_blank"
                  className="w-42 px-8 py-3 border-2 border-slate-700 text-slate-300 font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Resume <TbDownload size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image — single accent: gradient border + soft outer glow.
              When profileImage is the KT.svg monogram, render it centered on a
              crimson→near-black gradient card. When it's a real raster headshot,
              render with object-cover. */}
          <div
            className="blur-up flex-1 flex justify-center lg:justify-end"
            style={{ animationDelay: "120ms" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              {/* Soft outer glow */}
              <div className="absolute inset-0 bg-primary/30 rounded-[2rem] scale-105 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Solid crimson border + main surface (gradient is reserved for SectionHeading underline) */}
              <div className="relative w-full h-full rounded-[2rem] p-[2px] bg-primary/80 shadow-2xl">
                <div className="w-full h-full rounded-[calc(2rem-2px)] overflow-hidden bg-slate-950 relative">
                  {isMonogram ? (
                    // Placeholder monogram — gradient card with KT.svg centered.
                    // Drop a real headshot at /images/profile.jpg (or similar) and
                    // change portfolioData.profileImage to take over this slot.
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-slate-950 to-black relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,20,60,0.18),transparent_60%)]" />
                      <Image
                        src={portfolioData.profileImage}
                        alt={`${portfolioData.name} monogram`}
                        width={180}
                        height={180}
                        className="relative z-10 opacity-90 transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                  ) : (
                    <Image
                      src={portfolioData.profileImage}
                      alt={portfolioData.name}
                      fill
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
