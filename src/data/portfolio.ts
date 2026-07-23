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

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
  gallery?: GalleryImage[];
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
    "I'm a computer science grad from Boston University (Class of 2026) looking for new-grad software engineering roles. Most recently I was an ML engineer at BU Spark!, where I built an AI-assisted grading pipeline that cut grading time from 25+ minutes to around 3 per student. I like messy, ambiguous problems where half the work is figuring out what to build in the first place, and I care about writing software people actually rely on.",
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
        "A Discord music bot I built for my friend group after the big music bots got shut down. It streams audio straight from YouTube with yt-dlp and FFmpeg without ever touching the disk, so songs start playing almost as soon as you ask for them.",
      techStack: ["TypeScript", "Node.js", "Discord.js", "yt-dlp", "FFmpeg"],
      link: "",
      github: "https://github.com/blankwatermelon/steven-bot",
      thumbnail: "/images/projects/steven-bot.png",
    },
    {
      title: "BU Transit Tracker Web Application",
      description:
        "BU's official shuttle tracker always felt slow and clunky, so I made my own. It pulls live bus positions from Transloc and plots them on Google Maps, with Redis caching in front so the app stays snappy without hammering the upstream APIs.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Redis",
        "Google Maps API",
        "Vercel",
      ],
      link: "https://391-final-project-jet.vercel.app/",
      github: "",
      thumbnail: "/images/projects/transit-tracker.png",
    },
    {
      title: "FPGA Gaussian Filter Accelerator",
      description:
        "An image blur that runs in hardware instead of software. I wrote a 3×3 Gaussian filter in HLS C++ for an AMD Kria board — it processes one pixel every clock cycle and matches OpenCV's output pixel-for-pixel.",
      techStack: ["C++", "Vivado HLS", "AMD Kria", "AXI", "OpenCV"],
      link: "",
      github: "",
      thumbnail: "/images/projects/fpga-gaussian.png",
      gallery: [
        {
          src: "/images/projects/fpga-arch.png",
          caption:
            "System architecture — a four-stage streaming pipeline on the Kria FPGA fabric, with the ARM CPU as host over AXI-Lite.",
        },
        {
          src: "/images/projects/fpga-metrics.png",
          caption:
            "HLS optimization across five design iterations — streaming line buffers and pragma cleanup cut latency 2× and FF usage ~88%.",
        },
      ],
    },
    {
      title: "Airbnb Price Prediction Model",
      description:
        "A dive into messy real-world data: predicting nightly prices for 76,000+ Airbnb listings. The modeling was honestly the easy part — most of the work was cleaning and feature-engineering the dataset until a Random Forest could do something useful with it.",
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
      thumbnail: "/images/projects/airbnb-price.png",
    },
    {
      title: "URL Shortener",
      description:
        "A small link shortener with custom aliases and click analytics. I built it mostly to get comfortable with Next.js API routes and MongoDB, and it ended up being genuinely handy.",
      techStack: ["Next.js", "Tailwind", "MongoDB", "TypeScript", "Vercel"],
      link: "",
      github: "https://github.com/blankwatermelon/url-shortener",
      thumbnail: "/images/projects/url-shortener.png",
    },
    {
      title: "Latent Semantic Analysis (LSA) Search Engine",
      description:
        "A search engine that matches on meaning rather than exact keywords. It uses latent semantic analysis to compress noisy term data into concepts, then ranks documents by cosine similarity — so a search for \"car\" can still surface pages about automobiles.",
      techStack: ["Python", "Flask", "scikit-learn"],
      link: "https://youtu.be/NsGPjbT_1DE",
      github: "https://github.com/blankwatermelon/lsa-search-engine",
      thumbnail: "/images/projects/lsa-search.png",
    },
    {
      title: "Multi-threaded Image Processing Server",
      description:
        "A C server that handles image processing for many clients at once. Worker thread pools, semaphores, and careful synchronization — a hands-on tour of everything that makes POSIX concurrency fun and occasionally painful.",
      techStack: ["C", "POSIX Threads", "Sockets", "Semaphores"],
      link: "",
      github: "",
      thumbnail: "/images/projects/image-server.png",
    },
    {
      title: "Microbial Abundance Prediction",
      description:
        "Research-flavored ML: predicting how abundant soil microbes are from pH readings. I tuned XGBoost models on a small, noisy dataset and learned just how stingy biology data can be.",
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
      thumbnail: "/images/projects/microbial.png",
    },
  ],
};
