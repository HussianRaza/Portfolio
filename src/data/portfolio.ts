export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  category: ('AI & ML' | 'Full-Stack' | 'Systems' | 'Automation')[];
  stack: string[];
  githubUrl?: string;
  relatedGithubUrl?: string;
  demoUrl?: string;
  badge?: 'Internship Project' | 'Private / Case Study';
  hasFlowchart?: boolean;
  flowchartSteps?: { step: number; title: string; desc: string }[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  tooltip?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
}

export interface SeminarItem {
  id: string;
  title: string;
  date: string;
  institution: string;
  type: string;
  description: string;
  tags: string[];
  relatedProjectTitle?: string;
  relatedProjectId?: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  rotatingRoles: string[];
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
  cvUrl: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    coursework: string[];
  };
}

export const portfolioData = {
  personal: {
    name: "Syed Hussain Raza",
    headline: "Software Engineer & Full-Stack Developer",
    tagline: "Building high-performance web platforms, offline AI systems, and scalable backend services.",
    rotatingRoles: [
      "Software Engineer",
      "Full-Stack Developer",
      "Backend & AI Engineer"
    ],
    bio: "Software Engineer and Computer Science graduate from NED University of Engineering and Technology. I specialize in building end-to-end web applications, distributed backend services, and offline AI systems—spanning FastAPI microservices, Next.js frontends, local LLM pipelines, and automated workflows.",
    contact: {
      email: "razahussain876@gmail.com",
      phone: "+92 320 9209725",
      location: "Karachi, Pakistan",
    },
    social: {
      linkedin: "https://linkedin.com/in/syed-hussain-raza-029287199",
      github: "https://github.com/HussianRaza",
    },
    cvUrl: "/cv.pdf",
    education: {
      institution: "NED University of Engineering and Technology",
      degree: "BS Computer Science (AI Specialization)",
      period: "Oct 2022 – Aug 2026",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Distributed Systems",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
      ],
    },
  } as PersonalInfo,

  skillCategories: [
    {
      title: "Languages",
      icon: "Code2",
      description: "Core programming and scripting languages for systems & applications",
      skills: [
        { name: "Python", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript" },
        { name: "Rust", highlight: true },
        { name: "C++" },
        { name: "SQL" },
        { name: "Bash" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "Brain",
      description: "Deep learning frameworks, computer vision, audio, and language models",
      skills: [
        { name: "PyTorch", highlight: true },
        { name: "Hugging Face Transformers (BERT, FLAN-T5, Whisper)", highlight: true },
        { name: "Scikit-learn" },
        { name: "OpenCV", highlight: true },
        { name: "Tesseract OCR" },
        { name: "Quantized GGUF / AWQ", highlight: true },
        { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      ],
    },
    {
      title: "Full-Stack & Systems",
      icon: "Layers",
      description: "High-performance web frameworks, microservices, and cross-platform desktop runtimes",
      skills: [
        { name: "FastAPI", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "React" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "Tauri (Rust sidecar)", highlight: true },
        { name: "Tailwind CSS" },
        { name: "RESTful microservices" },
      ],
    },
    {
      title: "Databases, DevOps & Automation",
      icon: "Cpu",
      description: "Data persistence, container orchestration, CI/CD, and workflow automation",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "Docker", highlight: true },
        { name: "Bun", highlight: true },
        { name: "Git & GitHub Actions" },
        { name: "Linux" },
        { name: "Vercel" },
        { name: "n8n", highlight: true },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "meetai",
      title: "AI Meeting Assistant (Offline Edge Companion)",
      subtitle: "Undergraduate Capstone Project",
      summary: "An offline desktop app built with Tauri + React + TypeScript and a Rust sidecar, running deep learning models locally with no cloud APIs. Whisper handles low-latency real-time speech recognition, and an offline RAG pipeline with quantized LLMs produces automated meeting minutes and semantic Q&A.",
      category: ["AI & ML", "Systems"],
      stack: ["Tauri", "Rust", "React", "TypeScript", "Whisper", "Quantized LLMs", "RAG"],
      githubUrl: "https://github.com/HussianRaza/meetAI",
      relatedGithubUrl: "https://github.com/HussianRaza/meet-fyp",
    },
    {
      id: "finsense",
      title: "FinSense: Financial Sentiment Intelligence Engine",
      summary: "An end-to-end pipeline with a fine-tuned FinBERT model that classifies live financial news, served through low-latency async FastAPI endpoints with a Next.js frontend.",
      category: ["AI & ML", "Full-Stack"],
      stack: ["FastAPI", "Next.js", "FinBERT", "PyTorch", "Market APIs"],
      githubUrl: "https://github.com/HussianRaza/finsense-ai",
    },
    {
      id: "visionscan",
      title: "VisionScan (DocuScan): Document Computer Vision & OCR Pipeline",
      summary: "A full-stack image-to-PDF web app. Drag-and-drop upload and page reordering; OpenCV processing (grayscale, CLAHE contrast enhancement, denoising, sharpening, contour-based document crop and perspective correction, auto-deskew, binarization, watermarking, GrabCut segmentation, Canny edge detection); Tesseract OCR text extraction; PDF export.",
      category: ["AI & ML", "Full-Stack"],
      stack: ["Python", "OpenCV", "Tesseract OCR", "FastAPI"],
      githubUrl: "https://github.com/HussianRaza/visionscan-ipcv",
    },
    {
      id: "metatalent-hrtech",
      title: "HR-Tech Skills & Career Platform (n8n Automation Workflows)",
      subtitle: "Metatalent.AI Internship Project",
      summary: "Built during my internship at Metatalent.AI. An HR-tech platform aimed at improving employee skills. I built n8n workflows that extract and parse user CVs, identify skills, recommend relevant jobs, and suggest learning paths for upskilling and role transitions.",
      category: ["Automation", "AI & ML"],
      stack: ["n8n", "Webhooks", "REST APIs", "AI/LLM integration", "MongoDB", "Node.js"],
      badge: "Internship Project",
    },
    {
      id: "cryptobot-rl",
      title: "Crypto RL Trading Bot",
      subtitle: "PPO Reinforcement Learning Benchmark",
      summary: "A reinforcement learning trading bot for BTC/ETH/SOL using PPO (Stable-Baselines3) on a custom Gymnasium environment with a rolling-Sharpe reward, benchmarked against four baselines (buy-and-hold, mean reversion, momentum, random). FastAPI backend and a React + Vite + Plotly dashboard. Educational project, not financial advice.",
      category: ["AI & ML", "Full-Stack"],
      stack: ["Python", "PPO", "Gymnasium", "Stable-Baselines3", "FastAPI", "React", "Plotly"],
      githubUrl: "https://github.com/HussianRaza/cryptobot-rl",
    },
    {
      id: "nlp-hub",
      title: "NLP Intelligence Hub",
      summary: "A Gradio + Hugging Face app for T5-based text summarization and sentiment analysis, with lazy model loading, deployable as a Hugging Face Space.",
      category: ["AI & ML"],
      stack: ["Python", "Hugging Face", "FLAN-T5", "Gradio", "PyTorch"],
      githubUrl: "https://github.com/HussianRaza/NLP-project",
    },
    {
      id: "kbritex",
      title: "KBRITEX: Global B2B Commodities Trading Architecture",
      summary: "Scalable backend data models and relational-in-document transaction schemas for an international commodity trading and supply-chain engine.",
      category: ["Systems"],
      stack: ["Python", "MongoDB", "System Design", "Microservices"],
      badge: "Private / Case Study",
    },
  ] as Project[],

  githubExcludedRepos: [
    "Portfolio",
    "portfolio",
    "HussianRaza.github.io",
    "HussainRaza.github.io",
    "portfolio-hussain",
    "nextjs-dashboard",
    "practice-rebase-off-platform-project",
    "wedding-rsvp-off-platform-project",
    "meetAI",
    "meet-fyp",
    "finsense-ai",
    "visionscan-ipcv",
    "cryptobot-rl",
    "NLP-project",
  ],

  experience: [
    {
      id: "freelance",
      role: "Freelance Software Engineer",
      company: "Independent Contractor",
      type: "Remote",
      location: "Karachi, Pakistan (Remote)",
      period: "June 2026 – Present",
      current: true,
      highlights: [
        "Architect and deploy full-stack apps, backend microservices, and asynchronous REST APIs using Python, FastAPI, and TypeScript.",
        "Containerize services with Docker and manage CI/CD deployment pipelines across Linux VPS and managed cloud hosting.",
        "Design production RAG architectures and deploy quantized local language models for specialized enterprise workflows.",
      ],
      skills: ["FastAPI", "Python", "TypeScript", "Docker", "Linux", "CI/CD", "Next.js"],
    },
    {
      id: "metatalent",
      role: "Full Stack Intern",
      company: "Metatalent.AI",
      type: "Internship",
      location: "Karachi, Pakistan",
      period: "February 2026 – June 2026",
      current: false,
      highlights: [
        "Developed web applications and internal tools using React, Node.js, Express, and TypeScript.",
        "Structured MongoDB collections and aggregation pipelines; helped integrate ML inference endpoints into production platforms.",
        "Built n8n workflow automations for an HR-tech platform focused on employee upskilling: extracting skills from user CVs, recommending relevant jobs, and suggesting learning paths for career and role transitions.",
      ],
      skills: ["React", "Node.js", "Express", "TypeScript", "MongoDB", "n8n", "Webhooks"],
    },
  ] as ExperienceItem[],

  research: [
    {
      id: "mar-trading",
      title: "Multi-Agent Reinforcement Learning in Volatility Trading (OPHR Framework)",
      date: "April 2026",
      institution: "NED University of Engineering and Technology",
      type: "Technical Presentation & Academic Review",
      description: "Delivered an in-depth mathematical breakdown of the NeurIPS Order-Placement and Hedging Reinforcement (OPHR) framework, and evaluated cooperative multi-agent dynamics, market simulation, and reinforcement learning reward functions under high financial volatility.",
      tags: ["NeurIPS Review", "Multi-Agent RL", "OPHR Framework", "Market Simulation", "Quantitative Finance"],
      relatedProjectTitle: "Crypto RL Trading Bot",
      relatedProjectId: "cryptobot-rl",
    },
  ] as SeminarItem[],
};
