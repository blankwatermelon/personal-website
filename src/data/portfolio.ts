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
    mobile: string[];
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
    "CS student at Boston University learning by shipping. Built AI-powered developer tools and real-time web apps used by actual users. I enjoy automating repetitive tasks and building solutions that make life easier. Always focused on writing clean, scalable code that solves real problems.",
  profileImage: "/images/OSHAWOTT_CRY.png",
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
    mobile: [
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
  experience: [],
  projects: [
    {
      title: "URL Shortener",
      description:
        "Built a simple and efficient URL shortener web application with a clean interface for creating and managing shortened links. Features include custom URL aliases, link analytics, and persistent storage. Deployed on Vercel with MongoDB integration.",
      techStack: ["Next.js", "Tailwind", "MongoDB", "TypeScript", "Vercel"],
      link: "",
      github: "https://github.com/blankwatermelon/cs-391-mp5",
      thumbnail: "",
    },
    {
      title: "BU Transit Tracker Web Application",
      description:
        "Developed a real-time campus bus tracking application integrating BU Transloc API and Google Maps to display live bus positions, routes, and arrival predictions. Implemented Redis caching layer to optimize API performance and reduce latency. Deployed with CI/CD pipeline via Vercel.",
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
        "Designed ML pipeline to predict Airbnb listing prices (76K+ records), achieving R² = 0.71 with Random Forest. Conducted feature engineering on amenities and neighborhood-based attributes, handled missing data with imputation, and performed log transformations to reduce skewness and optimize model performance.",
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
      title: "Multi-threaded Image Processing Server",
      description:
        "Developed a thread-safe C server with FIFO queue, supporting image registration, blurring, and edge detection. Applied mutexes and semaphores to manage shared data structures, maximizing concurrency and stability.",
      techStack: ["C", "POSIX Threads", "Sockets", "Semaphores"],
      link: "",
      github:
        "https://github.com/blankwatermelon/Multi-threaded-Image-Processing-Server",
      thumbnail: "",
    },
    {
      title: "Latent Semantic Analysis (LSA) Search Engine",
      description:
        "Implemented an information retrieval system using LSA to reduce noise (5A matrix with 40k dimensions). Deployed scree plot analysis to optimize trade-off between noise reduction and variance retention. Visualized top-5 results via cosine similarity mapping.",
      techStack: ["Python", "Flask", "scikit-learn"],
      link: "https://youtu.be/NsGPjbT_1DE",
      github: "https://github.com/blankwatermelon/kenney02-assignment-4",
      thumbnail: "",
    },
    {
      title: "Microbial Abundance Prediction",
      description:
        "Modeled log-transformed microbial abundance against pH to capture biological trends, achieving R² = 0.63 with XGBoost. Reduced log-MSE to ±0.83 through hyperparameter tuning and robust data cleaning pipeline.",
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
