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
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Kenney Tran",
  role: "CS @ Boston University",
  about:
    "CS student at Boston University. I build AI-powered developer tools and real-time web apps shipped to real users — Discord bots, transit trackers, and ML pipelines.",
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
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Bash",
      "Python",
      "Java",
      "C",
      "SQL",
      "OCaml",
    ],
    libraries: [
      "React",
      "Next.js",
      "Express",
      "Material UI",
      "Firebase",
      "Node.js",
      "Tailwind",
      "scikit-learn",
      "NumPy",
      "Pandas",
    ],
    web: ["MongoDB", "Redis"],
    tools: ["Git", "GitHub", "Vercel", "Postman"],
  },
  experience: [
    {
      company: "BU Spark!",
      role: "ML Engineer",
      period: "January 2026 – May 2026",
      description: [
        "Reduced professor grading time from 25+ minutes to 3 minutes per student (8x faster) at $0.04 per assessment by architecting a multi-model pipeline using GPT-4o-mini, Gemini 2.5, and Claude Sonnet.",
        "Saved ~25 hours per 80-student course by designing a RAG pipeline that retrieves lecture content as grading context, enabling evaluation of diagrams and images within PDFs.",
        "Improved grading accuracy by 15% across assignment types by implementing rubric-based AI evaluation with few-shot calibration, eliminating grader-to-grader scoring variance.",
        "Built full-stack interface connecting Python ML backend to instructor-facing frontend, supporting 100+ student assessments per grading cycle for CS 581 Health Informatics.",
      ],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7456175621602279424/",
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
        "Real-time campus bus tracker integrating Transloc & Google Maps APIs. Uses Redis caching for low-latency updates and predictions.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Redis",
        "Google Maps API",
        "Vercel",
      ],
      link: "",
      github: "https://github.com/onkr0d/391-final-project",
      thumbnail: "",
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
      github: "https://github.com/blankwatermelon/cs-391-mp5",
      thumbnail: "",
    },
    {
      title: "Latent Semantic Analysis (LSA) Search Engine",
      description:
        "LSA search engine optimizing information retrieval. Uses dimensionality reduction to filter noise and rank results via cosine similarity.",
      techStack: ["Python", "Flask", "scikit-learn"],
      link: "https://youtu.be/NsGPjbT_1DE",
      github: "https://github.com/blankwatermelon/kenney02-assignment-4",
      thumbnail: "",
    },
    {
      title: "Multi-threaded Image Processing Server",
      description:
        "Thread-safe C server for concurrent image processing. Uses worker pools and synchronization to handle multiple client requests.",
      techStack: ["C", "POSIX Threads", "Sockets", "Semaphores"],
      link: "",
      github:
        "https://github.com/blankwatermelon/Multi-threaded-Image-Processing-Server",
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
      github: "https://github.com/blankwatermelon/506-project",
      thumbnail: "",
    },
  ],
};
