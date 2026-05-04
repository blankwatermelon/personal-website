import { HeroSection } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const hasExperience = portfolioData.experience.length > 0;

  return (
    <div className="flex flex-col gap-0">
      <HeroSection />

      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 xl:px-24">
          {hasExperience ? (
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="flex-1">
                <ExperienceSection />
              </div>
              <div className="flex-1">
                <TechStack />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <TechStack />
            </div>
          )}
        </div>
      </section>

      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
