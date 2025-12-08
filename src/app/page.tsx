"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Home() {
  const hasExperience = portfolioData.experience.length > 0;
  const [showSections, setShowSections] = useState(false);

  return (
    <div className="flex flex-col gap-0">
      <HeroSection onAnimationComplete={() => setShowSections(true)} />
      
      {showSections && (
        <>
          <motion.section 
            id="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20"
          >
            <div className="container mx-auto px-4 xl:px-24">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div className="flex-1">
                  <ExperienceSection />
                </div>
                <div className="flex-1">
                  <TechStack />
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectsSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactSection />
          </motion.div>
        </>
      )}
    </div>
  );
}
