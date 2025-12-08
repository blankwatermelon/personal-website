"use client";

import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.role,
    description: portfolioData.about,
    url: "https://personal-website-two-pi-35.vercel.app",
    sameAs: portfolioData.social
      .filter((s) => s.platform !== "Email")
      .map((s) => s.url),
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Machine Learning",
      "Software Engineering",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.name} Portfolio`,
    description: portfolioData.about,
    url: "https://personal-website-two-pi-35.vercel.app",
    author: {
      "@type": "Person",
      name: portfolioData.name,
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-11-20",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      name: portfolioData.name,
      description: portfolioData.about,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
