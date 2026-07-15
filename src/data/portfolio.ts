export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    languages: string[];
    libraries: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Kenney Tran",
  role: "CS @ Boston University '26 · Seeking new-grad SWE roles",
  about:
    "I'm a Boston University computer science graduate (Class of 2026) looking for new-grad software engineering roles. Most recently I was an ML engineer at BU Spark!, where I built an AI-assisted grading pipeline that cut professor grading time from 25+ minutes to 3 minutes per student. I like the space where engineering meets ambiguity—not just building something, but figuring out how it actually solves a human problem—and I care about systems that are accurate, reliable, and built to scale.",
  profileImage: "/icons/KT.svg",
  blogUrl: "",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/blankwatermelon",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kenney-tran-a0a469329/",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:kenney.tran02@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    languages: ["Python", "Java", "TypeScript", "JavaScript", "C", "SQL"],
    libraries: ["React", "Next.js", "Node.js", "FastAPI", "Spring Boot"],
    web: ["PostgreSQL", "Redis", "ChromaDB"],
    tools: ["Git", "Docker", "Azure", "GCP", "Postman"],
  },
  experience: [
    {
      company: "BU Spark!",
      role: "ML Engineer",
      period: "January 2026 – May 2026",
      description: [
        "Reduced professor grading time from **25+ minutes to 3 minutes per student (8x faster)** at **$0.04 per assessment** by architecting a multi-model pipeline using GPT-4o-mini, Gemini 2.5, and Claude Sonnet.",
        "Saved **~25 hours per 80-student course** by designing a RAG pipeline that retrieves lecture content as grading context, enabling evaluation of diagrams and images within PDFs.",
        "Improved grading accuracy by **15%** across assignment types by implementing rubric-based AI evaluation with few-shot calibration, eliminating grader-to-grader scoring variance.",
        "Built full-stack interface connecting Python ML backend to instructor-facing frontend, supporting **100+ student assessments** per grading cycle for CS 581 Health Informatics.",
      ],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7456175621602279424/",
    },
  ],
  education: [
    {
      school: "Boston University",
      degree: "BA in Computer Science",
      period: "Graduated 2026",
      details: [
        "Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Fullstack Development, Machine Learning, Cloud Computing.",
      ],
    },
  ],
  projects: [
    {
      title: "Steven Bot",
      description:
        "High-performance Discord music bot with slash commands. Streams directly from YouTube using yt-dlp and FFmpeg for optimal efficiency.",
      techStack: ["TypeScript", "Node.js", "Discord.js", "yt-dlp", "FFmpeg"],
      link: "",
      github: "https://github.com/blankwatermelon/steven-bot",
      thumbnail: "",
    },
    {
      title: "BU Transit Tracker Web Application",
      description:
        "Real-time campus bus tracker integrating Transloc & Google Maps APIs. Redis caching keeps API latency under 100ms and cut compute costs by 60%.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Redis",
        "Google Maps API",
        "Vercel",
      ],
      link: "",
      github: "https://github.com/blankwatermelon/bu-transit-tracker",
      thumbnail: "/images/projects/transit-tracker.png",
    },
    {
      title: "Airbnb Price Prediction Model",
      description:
        "ML pipeline predicting listing prices (R² = 0.71) using Random Forest. Features advanced engineering on 76K+ records.",
      techStack: [
        "Python",
        "scikit-learn",
        "pandas",
        "NumPy",
        "Matplotlib",
        "XGBoost",
      ],
      link: "",
      github: "https://github.com/blankwatermelon/Airbnb-Price-Prediction",
      thumbnail: "",
    },
    {
      title: "URL Shortener",
      description:
        "Clean URL shortener with custom aliases and analytics. Built with Next.js and MongoDB for persistent storage and management.",
      techStack: ["Next.js", "Tailwind", "MongoDB", "TypeScript", "Vercel"],
      link: "",
      github: "https://github.com/blankwatermelon/url-shortener",
      thumbnail: "",
    },
    {
      title: "Latent Semantic Analysis (LSA) Search Engine",
      description:
        "LSA search engine optimizing information retrieval. Uses dimensionality reduction to filter noise and rank results via cosine similarity.",
      techStack: ["Python", "Flask", "scikit-learn"],
      link: "https://youtu.be/NsGPjbT_1DE",
      github: "https://github.com/blankwatermelon/lsa-search-engine",
      thumbnail: "",
    },
    {
      title: "Multi-threaded Image Processing Server",
      description:
        "Thread-safe C server for concurrent image processing. Uses worker pools and synchronization to handle multiple client requests.",
      techStack: ["C", "POSIX Threads", "Sockets", "Semaphores"],
      link: "",
      github: "",
      thumbnail: "",
    },
    {
      title: "Microbial Abundance Prediction",
      description:
        "Predictive model for microbial abundance vs pH (R² = 0.63). Optimized with XGBoost and hyperparameter tuning for accuracy.",
      techStack: [
        "Python",
        "scikit-learn",
        "NumPy",
        "Matplotlib",
        "pandas",
        "XGBoost",
      ],
      link: "",
      github: "https://github.com/blankwatermelon/microbial-abundance-prediction",
      thumbnail: "",
    },
  ],
};
