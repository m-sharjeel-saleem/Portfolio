// import { ExternalLink, Github, Mail, MapPin, Phone } from 'lucide-react'
// import healthScribeImg from '../assets/projects/health-scribe-final.png'
// import aiDevImg from '../assets/projects/ai-dev-final.png'

export const personalInfo = {
  name: "M. Sharjeel Saleem",
  title: "AI-Native Full-Stack Engineer",
  subtitle: "Generative AI & LLM Engineer | AI Automation Developer",
  tagline: "I build production-ready Generative AI, LLM, and agentic systems across web, mobile, and business-automation workflows.",
  email: "sharry00010@gmail.com",
  phone: "+92 332 5760344",
  location: "Islamabad, Pakistan",
  profileImage: "/profile_image.png",
  cvFile: "/M_Sharjeel_Saleem_Resume.pdf",

  bio: "I'm M. Sharjeel Saleem, an AI-Native Full-Stack Engineer and AI Automation Developer focused on building production-ready Generative AI, LLM, and agentic systems. My work sits at the intersection of Python, TypeScript, agentic workflows, backend APIs, and modern product delivery.\n\nI design and deploy real-time AI automations that integrate language models with SaaS tools (n8n, Make, custom orchestrators) and ship cross-platform web and mobile applications power-assisted by modern AI tooling. I focus on creating systems that solve real business problems: RAG-based systems, secure multi-agent pipelines, cost-effective API solutions, and automated workflows with precision and observability.",

  social: {
    github: "https://github.com/m-sharjeel-saleem",
    linkedin: "https://www.linkedin.com/in/msharjeelsaleem/",
    email: "mailto:sharry00010@gmail.com",
    portfolio: "https://muhammad-sharjeel-portfolio.netlify.app/"
  }
}

export const skillsData = {
  "Generative AI & LLMs": ["LLMs", "Generative AI", "RAG", "Agentic AI Workflows", "Multi-Agent Orchestration", "Vector Embeddings", "Fine-Tuning", "MCP", "Prompt Engineering (CoT, Few-Shot, Tool/Function Calling, Structured Outputs, Guardrails, Eval)"],
  "AI Platforms & APIs": ["OpenAI GPT-4/4o", "Anthropic Claude", "Hugging Face", "LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "Pydantic AI"],
  "Languages & Frameworks": ["Python", "TypeScript", "JavaScript", "SQL", "Next.js", "React", "React Native", "FastAPI", "Node.js", "Streamlit", "Tailwind CSS"],
  "ML / Computer Vision": ["PyTorch", "TensorFlow", "OpenCV", "YOLO v8", "NumPy", "Pandas", "scikit-learn", "NLP"],
  "Automation & Integrations": ["n8n", "Make", "Zapier", "Webhooks", "REST APIs", "SEO & Sales-Lead Automation", "CRM/Marketing Tool Integrations"],
  "Data & DevOps": ["MySQL", "PostgreSQL", "Supabase", "Git", "GitHub Actions", "CI/CD", "Docker", "Vercel", "Netlify"],
  "AI Dev Tools": ["Cursor", "Claude Code", "Trae AI", "GitHub Copilot", "Bolt", "v0"]
}

export const projects = [
  {
    id: 100,
    title: "CASARA - Contextual Automated Security Analysis & Risk Assessment",
    description: "Production-deployed GitHub-native PR reviewer fusing five deterministic scanners (CodeQL, Semgrep, Trivy, Bandit, Gitleaks) with a multi-agent LLM pipeline — Security, Logic, AI-Code, Privacy, and IaC specialists plus Critic + Triage agents — using scanner findings as verified grounding to cut LLM false positives.",
    longDescription: "CASARA is a production-deployed GitHub-native PR reviewer that fuses five deterministic scanners (CodeQL, Semgrep, Trivy, Bandit, Gitleaks) with a multi-agent LLM pipeline (Security, Logic, AI-Code, Privacy, and IaC specialists plus Critic + Triage agents). By using scanner findings as verified grounding, it significantly cuts LLM false positives. The platform ranks issues by real-world exploitability with EPSS/KEV data, computes a calibrated composite risk score, and auto-blocks high-risk merges via the GitHub Checks API. It also adds longitudinal developer profiling and includes a public 1,200-PR benchmark dataset with a projected F1 of 0.83–0.87. Underpinned by a formal research proposal targeting IEEE TSE / ISSTA.",
    technologies: ["Python", "Multi-Agent LLMs", "CodeQL", "Semgrep", "Trivy", "Bandit", "Gitleaks", "GitHub Checks API", "FastAPI", "Next.js", "SQLite"],
    category: "Agentic AI",
    featured: true,
    liveUrl: "https://casara.vercel.app",
    githubUrl: "https://github.com/m-sharjeel-saleem/CASARA",
    image: "/projects/casara.svg",
    status: "Active",
    year: "2026",
    features: [
      "Production-deployed GitHub-native PR reviewer",
      "Fuses 5 deterministic scanners (CodeQL, Semgrep, Trivy, Bandit, Gitleaks) with multi-agent LLM pipeline",
      "Specialists: Security, Logic, AI-Code, Privacy, IaC agents plus Critic + Triage agents",
      "Grounded agent queries using scanner findings to drastically cut false positives",
      "Ranks issues by exploitability using real-world EPSS/KEV data",
      "Computes calibrated composite risk score with automatic merge-gating",
      "Blocks high-risk merges via the GitHub Checks API",
      "Adds longitudinal developer profiling & a public 1,200-PR benchmark dataset"
    ]
  },
  {
    id: 0,
    title: "CodeAtlas - Agentic Codebase Intelligence",
    description: "An agentic platform that points a team of AI agents at any public GitHub repo — chat with the code, map its architecture, and run a verified security, performance, and logic review with full cost and trace observability.",
    longDescription: "CodeAtlas is a production-style agentic system built on a LangGraph multi-agent pipeline: a Router classifies intent, a Retriever runs RAG over a pgvector store, Security/Performance/Logic agents review the code in parallel, and a Critic agent verifies every finding against the actual source to suppress hallucinations. It integrates GitHub through the Model Context Protocol (MCP) and ships a safety layer with prompt-injection defense and hard per-session cost caps. A Next.js dashboard streams each agent step with live token, latency, and cost metrics. Powered by Google Gemini.",
    technologies: ["Python", "FastAPI", "LangGraph", "Google Gemini", "RAG", "pgvector", "Supabase", "Redis", "MCP", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Agentic AI",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/CodeAtlas",
    image: "/projects/codeatlas.svg",
    status: "Active",
    year: "2026",
    features: [
      "Multi-agent LangGraph pipeline (router → retriever → reviewers → critic)",
      "RAG over code with pgvector hybrid search",
      "Parallel Security, Performance & Logic review agents",
      "Critic agent verifies findings against source to cut hallucinations",
      "GitHub integration via Model Context Protocol (MCP)",
      "Live observability: per-run token, latency & cost tracking",
      "Safety guardrails: prompt-injection defense + per-session cost caps"
    ]
  },
  {
    id: 1,
    title: "ModelScope AI - Intelligent Model Intel",
    description: "A next-generation intelligence platform designed to analyze, compare, and recommend the best AI models for any use case using the ultra-fast Groq LPU engine.",
    longDescription: "ModelScope AI is an advanced platform that delivers deep technical insights and structured benchmarks for LLMs in milliseconds. It features an adaptive Glassmorphism UI, Markdown/Table generation, an API Playground, and a robust reliability system with 5-key API rotation for high availability on Groq's llama-3.3-70b-versatile model.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Groq AI", "Zustand", "Framer Motion", "React Markdown"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://modelscopeai.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/ModelScope_AI",
    image: "/projects/modelscope.jpg",
    status: "Completed",
    year: "2026",
    features: [
      "Sub-second AI analysis powered by Groq LPU",
      "Automatic structured benchmark markdown tables",
      "Advanced 5-key API rotation reliability system",
      "Adaptive Glassmorphism dark/light mode UI",
      "Built-in API playground and LLM cost calculator"
    ]
  },
  {
    id: 2,
    title: "BaatCheet - AI Chat Platform (Web)",
    description: "A multilingual AI-powered chat platform supporting Urdu, English, Hindi, and Roman Urdu. Features 7 specialized AI modes, voice chat, image generation, and team collaboration with role-based access.",
    longDescription: "BaatCheet is a comprehensive AI communication platform that supports multiple languages and AI modes. Built with React, TypeScript, and integrated with multiple AI providers (Groq, OpenRouter, DeepSeek, Gemini), it offers chat, code generation, research, image generation, and team project collaboration features. The platform features 7 specialized AI modes, real-time streaming responses, 50 messages context memory, voice chat with text-to-speech, image generation with multiple models, and team collaboration with role-based access.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AI/ML", "Groq", "Gemini", "TailwindCSS", "SSE Streaming"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://baatcheet-web.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/BaatCheet",
    image: "/projects/baatcheet-web.png",
    status: "Completed",
    year: "2024",
    features: [
      "7 specialized AI modes (Chat, Code, Research, Image Gen, Tutor, Creative, Math)",
      "Multilingual support (Urdu, English, Hindi, Roman Urdu)",
      "Voice chat with text-to-speech (4 natural voices)",
      "Image generation with 5 models (FLUX, Stable Diffusion, Playground)",
      "Team collaboration with role-based access (Admin, Moderator, Viewer)",
      "Real-time streaming responses via SSE",
      "50-message context memory window",
      "Multi-provider integration (Groq, OpenRouter, DeepSeek, Gemini)",
      "Hybrid search (semantic + keyword)",
      "Analytics dashboard with usage tracking"
    ]
  },
  {
    id: 3,
    title: "BaatCheet - AI Chat Platform (Android)",
    description: "Native Android app for BaatCheet with Jetpack Compose and Material 3. Features offline support, push notifications, and native performance for AI-powered multilingual communication.",
    longDescription: "BaatCheet Android is a native mobile application built with Kotlin and Jetpack Compose following Clean Architecture and MVVM patterns. It provides the complete BaatCheet experience on mobile with enhanced features like offline support, camera integration, and push notifications. The app uses Retrofit for API calls with SSE streaming, Room Database for local storage, Hilt for dependency injection, and Coil for image loading.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM", "Retrofit", "Room DB", "Hilt", "Coil", "SSE Streaming"],
    category: "Mobile Application",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/BaatCheet_Android",
    image: "/projects/baatcheet-android.png",
    status: "Completed",
    year: "2024",
    downloadInfo: {
      available: true,
      type: "firebase",
      message: "Available via Firebase App Distribution. Contact me to get the download link!",
      contactEmail: "sharry00010@gmail.com",
      contactPhone: "+92 332 5760344",
      contactWhatsApp: "https://wa.me/923325760344?text=Hi!%20I%20want%20to%20install%20BaatCheet%20app"
    },
    features: [
      "Native Android performance with Kotlin",
      "Modern UI with Jetpack Compose & Material 3",
      "Offline support with Room Database",
      "Camera and gallery integration",
      "Push notifications for real-time updates",
      "Clean Architecture with MVVM pattern",
      "Real-time SSE streaming for chat",
      "Markdown rendering with syntax highlighting",
      "7 specialized AI modes (Chat, Code, Research, etc.)",
      "Firebase App Distribution for secure updates"
    ]
  },
  {
    id: 4,
    title: "BaatCheet - AI Chat Platform (iOS)",
    description: "Native iOS app for BaatCheet built with Swift and SwiftUI. Delivers a premium iPhone experience with smooth animations, haptic feedback, and full integration with Apple ecosystem features.",
    longDescription: "BaatCheet iOS is a native Swift application crafted for the Apple ecosystem with SwiftUI for a truly native look and feel. It brings the complete BaatCheet AI platform to iPhone with iOS-native features: Face ID / Touch ID authentication, Siri Shortcuts integration, Share Sheet support, widgets, and seamless iCloud sync. Follows Apple HIG guidelines with a clean, minimal design and fluid physics-based animations. Distributed via TestFlight for beta access.",
    technologies: ["Swift", "SwiftUI", "Combine", "URLSession", "CoreData", "Face ID", "TestFlight", "MVVM"],
    category: "Mobile Application",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/BaatCheet_iOS",
    image: "/projects/baatcheet-ios.png",
    status: "Completed",
    year: "2025",
    downloadInfo: {
      available: true,
      type: "testflight",
      message: "Available via TestFlight. Contact me to get your invite link!",
      contactEmail: "sharry00010@gmail.com",
      contactPhone: "+92 332 5760344",
      contactWhatsApp: "https://wa.me/923325760344?text=Hi!%20I%20want%20to%20install%20BaatCheet%20iOS%20app"
    },
    features: [
      "Native Swift & SwiftUI for true iPhone feel",
      "Face ID / Touch ID secure authentication",
      "7 specialized AI modes (Chat, Code, Research, etc.)",
      "Multilingual support (Urdu, English, Hindi, Roman Urdu)",
      "Real-time SSE streaming for AI responses",
      "CoreData local storage for offline access",
      "Haptic feedback & smooth physics animations",
      "iCloud sync across Apple devices",
      "TestFlight distribution for beta access",
      "Apple HIG compliant design"
    ]
  },
  {
    id: 5,
    title: "Kani Framework - AI Communication Platform",
    description: "An AI-integrated Next.js application for intelligent client communication. Built with modern web technologies and AI integration to streamline business communications and enhance productivity.",
    longDescription: "Kani Framework is a comprehensive communication platform that leverages AI to enhance client interactions. The application features intelligent message routing, automated responses, and AI-powered insights to improve communication efficiency.",
    technologies: ["Next.js", "React", "TypeScript", "AI Integration", "TailwindCSS", "Cursor AI"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://kani-llm-token-optimizer.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/Kani-LLM-Token-Optimizer",
    image: "/projects/kani.jpeg",
    status: "Completed",
    year: "2024",
    features: [
      "AI-powered communication",
      "Intelligent message routing",
      "Automated responses",
      "Client insights dashboard",
      "Real-time collaboration"
    ]
  },
  {
    id: 6,
    title: "DocConverter Pro",
    description: "A secure, user-friendly document conversion platform supporting 15+ formats, with batch processing and privacy-first conversion that runs in the browser whenever possible.",
    longDescription: "DocConverter Pro is a comprehensive document conversion solution that handles multiple file formats with professional-grade accuracy. The platform emphasizes security and privacy, processing documents locally in the browser whenever possible.",
    technologies: ["React", "TypeScript", "Node.js", "File Processing APIs", "TailwindCSS"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://docconverter-pro-app.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/Doc-Converter-pro",
    image: "/projects/docconverter.png",
    status: "Completed",
    year: "2024",
    features: [
      "15+ format support",
      "Batch processing",
      "Privacy-first, in-browser conversion",
      "Professional-grade output quality",
      "Clean, responsive UI"
    ]
  },
  {
    id: 7,
    title: "ImagePro - AI Image Processing",
    description: "Professional AI-powered image processing tools for conversion, editing, enhancement, and text extraction. Completely free and private, running entirely in the browser with support for 12 formats.",
    longDescription: "ImagePro offers a comprehensive suite of AI-powered image processing tools that work entirely in your browser. The platform provides professional-grade image manipulation capabilities while maintaining complete privacy and security.",
    technologies: ["React", "TypeScript", "AI/ML", "Canvas API", "WebAssembly", "TailwindCSS"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://imagepro-advanced.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/Image-pro",
    image: "/projects/imagepro.png",
    status: "Completed",
    year: "2024",
    features: [
      "AI-powered processing",
      "OCR text extraction",
      "Format conversion",
      "Image enhancement",
      "Privacy-focused"
    ]
  },
  {
    id: 8,
    title: "Autopilot Pro - AI-Powered Road Safety System",
    description: "An innovative AI-powered road safety system for smart vehicles using YOLOv8 deep learning technology. Features real-time detection of traffic signs, pedestrians, vehicles (LTV/HTV), and traffic lights with 93% accuracy and 50ms response time.",
    longDescription: "Autopilot Pro is a comprehensive vision-based AI system designed to make roads safer by detecting traffic signs, pedestrians, and vehicles in real-time. Built as a cost-effective alternative to LIDAR and RADAR systems, it uses high-definition cameras and advanced YOLOv8 deep learning models to analyze camera feeds and provide quick, accurate alerts. The system achieves 93% detection accuracy with a 50ms response time, enabling 24/7 continuous monitoring for intelligent traffic management and safety applications.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Deep Learning", "Computer Vision", "AI/ML", "React", "TypeScript", "Web Development"],
    category: "AI/Computer Vision",
    featured: true,
    liveUrl: "https://autopilot-pro.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/Autopilot-pro",
    image: "/projects/autopilot.png",
    status: "Completed",
    year: "2024",
    features: [
      "LTV/HTV Vehicle Detection & Classification",
      "Real-time Pedestrian Detection",
      "Traffic Light Detection & Recognition",
      "Traffic Sign Detection & Interpretation",
      "93% Detection Accuracy",
      "50ms Response Time",
      "24/7 Continuous Monitoring",
      "YOLOv8 Deep Learning Technology",
      "Vision-based AI System (Alternative to LIDAR/RADAR)",
      "Interactive Web Dashboard with Live Model Testing"
    ]
  },
  {
    id: 9,
    title: "StudyFlow - AI-Powered Learning Platform",
    description: "AI-powered gamified learning platform with adaptive quizzes, game modes, and leaderboards designed to make self-learning more engaging.",
    longDescription: "StudyFlow is a gamified learning platform designed to make studying more interactive through AI-assisted quiz generation, achievement systems, and competitive learning mechanics. The product focuses on engagement, retention, and user motivation instead of passive content consumption.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "ShadCN UI", "Framer Motion", "AI/ML", "Gamification"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://studyflow-quizapp.netlify.app/",
    githubUrl: null,
    image: "/projects/studyflow.png",
    status: "Completed",
    year: "2025",
    features: [
      "AI-Powered Quiz Generation",
      "10 Engaging Game Modes",
      "Global Leaderboards",
      "Adaptive Learning System",
      "Achievement & XP System",
      "Detailed Analytics Dashboard",
      "Multiple Quiz Categories",
      "Real-time Competitions"
    ]
  },
  {
    id: 10,
    title: "Face Recognition Attendance System",
    description: "Comprehensive attendance management system using Python, OpenCV, and MySQL. Features real-time face detection, CRUD operations, and AI-powered documentation with Cursor AI integration.",
    longDescription: "A complete face recognition system built for student attendance management. The system uses OpenCV for real-time face detection and recognition, with MySQL database for data storage and Tkinter for the user interface. Integrated with Cursor AI for dashboard UI development and comprehensive documentation.",
    technologies: ["Python", "OpenCV", "Excel", "Tkinter", "MySQL", "Cursor AI", "ChatGPT", "CRUD Operations"],
    category: "Computer Vision",
    featured: true,
    liveUrl: null,
    githubUrl: null,
    image: "/projects/face-recognition.png",
    status: "Completed",
    year: "2024",
    features: [
      "Real-time face detection and recognition",
      "Student attendance management system",
      "CRUD operations with data integrity",
      "Excel integration for data export",
      "Tkinter-based user interface",
      "MySQL database for data storage",
      "Cursor AI integration for dashboard UI",
      "ChatGPT and Cursor AI for documentation"
    ]
  },
  {
    id: 11,
    title: "Student Performance Predictor",
    description: "ML-powered web application to predict student math scores based on demographic factors, parental education, and academic performance. Features 88% accuracy with 7 algorithms tested and instant predictions.",
    longDescription: "A comprehensive Machine Learning project that predicts student math scores using various demographic and academic factors. The system tests 7 different ML algorithms (Random Forest, Linear Regression, Gradient Boosting, XGBoost, CatBoost, AdaBoost, and Decision Tree) and selects the best performing model. Built with Flask for the web interface and Scikit-Learn for model training.",
    technologies: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "CatBoost", "Machine Learning", "Data Science"],
    category: "Machine Learning",
    featured: true,
    liveUrl: "https://student-performance-monitoring.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/student-performance-predictor",
    image: "/projects/student-predictor.png",
    status: "Completed",
    year: "2024",
    features: [
      "88% prediction accuracy (R² score)",
      "7 ML algorithms tested and compared",
      "Instant predictions in milliseconds",
      "Feature engineering with interaction features",
      "Data preprocessing pipeline",
      "GridSearchCV for hyperparameter tuning",
      "Flask web application",
      "Responsive modern UI design"
    ]
  },
  {
    id: 12,
    title: "AI ChatBot - LangChain & LangGraph",
    description: "A lightweight LangGraph + LangChain demo chatbot that streams responses and can call external tools (Wikipedia and Arxiv) through a simple graph architecture.",
    longDescription: "An intelligent chatbot built using LangGraph and LangChain frameworks. The chatbot features streaming responses, tool integration with Wikipedia and Arxiv for knowledge retrieval, and a graph-based architecture for managing conversation flow. Powered by Groq API for fast inference.",
    technologies: ["Python", "LangGraph", "LangChain", "LangSmith", "Groq API", "Wikipedia API", "Arxiv API", "NLP"],
    category: "AI/NLP",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/Langgraph-ChatBot",
    image: "/projects/chatbot-new.png",
    status: "Completed",
    year: "2024",
    features: [
      "LangGraph-based conversation flow",
      "LangChain integration for LLM orchestration",
      "Wikipedia tool for knowledge retrieval",
      "Arxiv tool for research paper queries",
      "Streaming chat responses",
      "Groq API for fast inference",
      "Graph-based architecture",
      "Easy to extend with new tools"
    ]
  },
  {
    id: 13,
    title: "AI Dev Updates - Real-Time News Aggregator",
    description: "Lightning-fast AI news aggregator for developers. Real-time updates on model launches, IDE updates, Cursor, Claude, GPT - everything you need to stay ahead. Powered by Groq Llama 3 with intelligent categorization.",
    longDescription: "AI Dev Updates is a comprehensive news aggregator built specifically for AI developers and vibe coders. The platform aggregates news from 29 curated RSS sources including OpenAI, Anthropic, Google AI, GitHub, and more. Using Groq's lightning-fast Llama 3 inference, it analyzes and categorizes articles in real-time, providing relevance scoring, technical impact assessment, and intelligent deduplication. Features include breaking news sections, advanced filtering, real-time search, and automatic refresh every 15 minutes. The system uses a rotating API-key pool for high availability and implements smart caching to cut redundant API calls significantly. With dual-layer caching (7-day analysis cache + 15-minute news cache) and concurrent request protection, the platform delivers a fast first load and near-instant subsequent loads.",
    technologies: ["Next.js", "React", "TypeScript", "Groq API", "Llama 3", "RSS Feeds", "TailwindCSS", "Advanced Caching", "API Pool Management"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://aidevupdates.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/AI_News_Reporter",
    image: "/projects/p-aidev.jpg",
    status: "Completed",
    year: "2025",
    features: [
      "Real-time AI news aggregation from 29 sources",
      "Groq Llama 3 powered analysis",
      "Intelligent categorization & relevance scoring",
      "Breaking news section with priority indicators",
      "Advanced filtering by category and search",
      "Rotating API-key pool for high availability",
      "Dual-layer smart caching to cut redundant API calls",
      "Auto-refresh every 15 minutes",
      "Technical impact assessment",
      "Deduplication & error handling",
      "Fast first load with near-instant cached loads"
    ]
  },
  {
    id: 14,
    title: "HealthScribe AI",
    description: "AI-assisted health documentation platform for extracting structured information from medical content and organizing patient-facing insights.",
    longDescription: "HealthScribe AI is an applied AI health-document workflow focused on turning messy clinical information into cleaner, structured outputs. The product direction includes note extraction, health-metric tracking, and consistent documentation patterns that make medical information easier to review and act on.",
    technologies: ["React", "TypeScript", "FastAPI", "OpenAI", "Speech-to-Text", "TailwindCSS", "Vite"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://healthscribee.netlify.app/",
    githubUrl: null,
    image: "/projects/p-health.jpg",
    status: "Completed",
    year: "2025",
    features: [
      "AI-assisted structured note generation",
      "Smart health metric tracking",
      "Personalized health insights",
      "Secure document storage",
      "Documentation consistency workflows",
      "Interactive health dashboard"
    ]
  },
  {
    id: 15,
    title: "DocuChat AI - Chat with Documents",
    description: "AI-powered RAG document chat platform. Upload PDFs and images, ask questions, and get intelligent answers with source citations. Features hybrid search, streaming responses, and Google OAuth authentication.",
    longDescription: "DocuChat AI is a sophisticated RAG (Retrieval-Augmented Generation) application that allows users to upload documents (PDFs and images) and have intelligent conversations about their content. The platform uses Google Gemini 2.5 Flash for chat and vision capabilities, combined with OpenAI's text-embedding-3-small for vector embeddings. Documents are processed through smart chunking, embedded, and stored in PostgreSQL with pgvector for efficient similarity search. The hybrid search system combines 70% semantic search with 30% keyword matching to retrieve the most relevant context. Features include streaming responses via SSE, conversation history, source citations, dark/light theme, and comprehensive analytics dashboard.",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "pgvector", "Google Gemini", "OpenAI Embeddings", "TailwindCSS", "shadcn/ui", "Framer Motion", "RAG", "Vector Search"],
    category: "AI/RAG Application",
    featured: true,
    liveUrl: "https://docuchatai.lovable.app",
    githubUrl: "https://github.com/m-sharjeel-saleem/docuchat-ai",
    image: "/projects/docuchat-ai.png",
    status: "Completed",
    year: "2025",
    features: [
      "RAG-powered document Q&A",
      "PDF & Image upload with OCR",
      "Google Gemini 2.5 Flash integration",
      "Hybrid search (70% semantic + 30% keyword)",
      "OpenAI text-embedding-3-small",
      "Streaming responses via SSE",
      "Source citations with relevance scores",
      "PostgreSQL + pgvector for vector storage",
      "Google OAuth authentication",
      "Dark/Light theme support",
      "Conversation history management",
      "Analytics dashboard",
      "Row Level Security (RLS)",
      "Smart document chunking (1000 chars, 200 overlap)"
    ]
  },
  {
    id: 16,
    title: "CodeSentinel AI - AI-Powered Code Analysis",
    description: "AI-assisted code review and static-analysis product for surfacing security issues, code quality risks, and actionable developer feedback.",
    longDescription: "CodeSentinel AI is an applied developer-tooling project that combines static-analysis concepts with AI-assisted review workflows. The product is aimed at helping engineering teams catch security issues, complexity hotspots, and maintainability concerns earlier in the development lifecycle through faster, clearer feedback.",
    technologies: ["TypeScript", "Node.js", "Anthropic Claude", "GitHub Actions", "Static Analysis", "OWASP", "Code Quality", "TailwindCSS"],
    category: "DevTools/Security",
    featured: true,
    liveUrl: "https://codesentinelai.netlify.app/",
    githubUrl: null,
    image: "/projects/codesentinel-ai.png",
    status: "Completed",
    year: "2025",
    features: [
      "AI-assisted pull request review",
      "OWASP Top 10 vulnerability detection",
      "Real-time code analysis",
      "AI-powered code optimization",
      "Actionable developer feedback",
      "Security analysis & scanning",
      "Code quality metrics",
      "Best practices enforcement",
      "GitHub workflow integration",
      "Intelligent suggestions"
    ]
  },
  {
    id: 17,
    title: "Learn RAG from Basics",
    description: "A complete, from-scratch implementation of a Retrieval-Augmented Generation (RAG) pipeline to eliminate LLM hallucinations.",
    longDescription: "Learn RAG from Basics is an open-source educational project that breaks down RAG into isolated, highly commented Python files. Built as the ultimate guide for software engineers, it covers data ingestion, text chunking, embedding generation using word vectors, mathematical similarity search (Cosine Distance) with ChromaDB, and prompt engineering. The project includes a complete vector search-augmented LLM pipeline with Groq and a beautiful Streamlit Web UI.",
    technologies: ["Python", "Groq AI", "ChromaDB", "Streamlit", "FastAPI", "Vector Embeddings", "RAG"],
    category: "AI/ML Development",
    featured: false,
    liveUrl: "https://learning-rag.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/Learn_RAG_from_Basics",
    image: "/projects/learn-rag.jpg",
    status: "Completed",
    year: "2026",
    features: [
      "End-to-end RAG architecture with text chunking",
      "Vector database integration (ChromaDB)",
      "High-speed LLM generation using Groq API",
      "Interactive QA Streamlit Web UI",
      "Comprehensive educational breakdown of Embeddings & Search"
    ]
  },
  {
    id: 18,
    title: "LLM Foundations - From Zero to AI Engineer",
    description: "A complete, interactive learning platform for mastering Large Language Models — from tokenization to AI agents in production.",
    longDescription: "LLM Foundations is an interactive educational platform designed for software engineers transitioning into Generative AI. It covers 14 advanced chapters across three phases (Foundations, Core Skills, and Advanced LLMs topics like RAG, LoRA, RLHF, DPO, and ReAct Agents). The platform features an adaptive Glassmorphism UI, a custom Reading Progress Bar, Sticky Navigation, Scroll Animations via Intersection Observer, and a massive set of 30 Interview Questions with optimal answers for AI Engineer roles.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Groq AI", "Sentence Transformers"],
    category: "Web Application",
    featured: false,
    liveUrl: "https://llm-foundations.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/Learn_LLM_foundations_from_Basics",
    image: "/projects/learn-llm.jpg",
    status: "Completed",
    year: "2026",
    features: [
      "14 in-depth chapters on LLMs, Attention, LoRA, and Agents",
      "Interactive code snippets and architecture visualizers",
      "30 professional-grade AI Engineer interview questions",
      "Responsive Dark Mode design with scroll-reveal animations",
      "Built natively with HTML/CSS/JS without frameworks"
    ]
  },
  {
    id: 19,
    title: "Prompt Craft Cursor",
    description: "An elite collection of meticulously engineered, role-based `.cursorrules` templates and system prompts for Cursor AI Editor.",
    longDescription: "Prompt Craft Cursor provides highly optimized, domain-specific AI instructions to push the capabilities of the Cursor AI Editor to its absolute limit. It contains modular prompts tailored for React/Next.js, Python/FastAPI, Node.js, and Android/Jetpack Compose. It enforces best practices, architecture (like Clean Architecture), strict linters, and leverages advanced cognitive models like Chain of Thought (CoT) and Tree of Thoughts (ToT) prompting strategies.",
    technologies: ["Prompt Engineering", "Cursor AI", "Markdown", "LLM Optimization", "CoT", "ToT"],
    category: "Developer Tools",
    featured: false,
    liveUrl: "https://promptcraftcursor.netlify.app/",
    githubUrl: "https://github.com/m-sharjeel-saleem/prompt_craft_cursor",
    image: "/projects/prompt-craft-actual.jpg",
    status: "Active",
    year: "2026",
    features: [
      "Domain-Specific .cursorrules templates for modern stacks",
      "Advanced cognitive prompting techniques (CoT, ToT)",
      "Strict security, typing, and architecture enforcements",
      "Modular prompt guidelines for styling and testing",
      "Custom Architect role definition for optimal AI behavior"
    ]
  },
  {
    id: 20,
    title: "GitHub MCP Server",
    description: "An advanced Model Context Protocol (MCP) server for deep and rapid GitHub integration.",
    longDescription: "The GitHub MCP Server bridges Large Language Models with GitHub's entire ecosystem securely and reliably. Through this Model Context Protocol standard, AI tools and IDEs can read repositories, fetch files, review pull requests, create issues, and automate heavy development workflows without ever compromising authentication limits or context length restrictions.",
    technologies: ["TypeScript", "Model Context Protocol", "GitHub API", "Node.js", "AI Integration"],
    category: "Developer Tools",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/github-mcp-server",
    image: "/projects/mcp-github.png",
    status: "Active",
    year: "2026",
    features: [
      "Standardized Model Context Protocol implementation",
      "Seamless and secure GitHub API integration",
      "Read/write access to repositories, PRs, and issues",
      "Direct integration with advanced AI assistants and IDEs",
      "Robust TypeScript architecture"
    ]
  },
  {
    id: 21,
    title: "Automated Omnichannel Content Repurposer",
    description: "A multi-agent AI system that transforms YouTube video transcripts into blog posts, tweets, and LinkedIn posts — powered by Claude and orchestrated with LangGraph.",
    longDescription: "This CLI-based automation system takes any YouTube video URL and runs a 4-stage LangGraph StateGraph pipeline. The Blog Agent writes 800–1200 word SEO articles, the Twitter Agent crafts 5 viral platform-optimized tweets, and the LinkedIn Agent produces thought leadership content — all reviewed by an Editor Agent with quality scoring. All outputs are saved to structured files. No UI, pure production-grade agentic automation.",
    technologies: ["Python", "Claude API", "LangGraph", "Multi-Agent", "LangChain", "youtube-transcript-api", "Prompt Engineering"],
    category: "AI/ML Development",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/Autoamted_Omnichannel_Content_Repurposer",
    image: "/projects/omnichannel-repurposer.png",
    status: "Completed",
    year: "2026",
    features: [
      "4-agent LangGraph StateGraph pipeline (Blog → Twitter → LinkedIn → Editor)",
      "YouTube transcript extraction with no API key required",
      "SEO-optimized blog, 5 viral tweets, thought leadership LinkedIn post",
      "Editor Agent with quality scoring and structured JSON output",
      "Cost-efficient at ~$0.03–$0.08 per full video repurpose"
    ]
  },
  {
    id: 22,
    title: "Automated Multi-Agent Code Reviewer",
    description: "A production-grade multi-agent system that reviews Pull Request code changes using 3 specialized Claude-powered agents for Logic, Security, and Performance.",
    longDescription: "This CLI automation runs a LangGraph-based 4-node state machine where three independent AI agents (Logic Bug Detector, Security Vulnerability Scanner, and Performance Analyzer) inspect code diffs in parallel. A Supervisor Agent merges and ranks all findings into a final Markdown PR review report. Includes PyGithub integration, tool-calling, precision/recall evaluation, and cost-tracking (~$0.004 per quick review).",
    technologies: ["Python", "Claude API", "LangGraph", "PyGithub", "Multi-Agent", "Tool Calling", "Evaluation"],
    category: "AI/ML Development",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/Automated_Code_Reviewer",
    image: "/projects/auto-code-reviewer.png",
    status: "Completed",
    year: "2026",
    features: [
      "3 parallel specialist AI agents: Logic, Security, Performance",
      "LangGraph 4-node StateGraph with shared ReviewState",
      "Tool calling with GitHub API (real + simulated PR modes)",
      "Supervisor Agent for final merged Markdown PR report",
      "Evaluation suite with Precision/Recall metrics against known test cases"
    ]
  },
  {
    id: 23,
    title: "Automated AI Research Analyst",
    description: "An advanced 5-agent agentic AI pipeline that autonomously plans, researches, analyzes, writes, and critiques professional research reports on any topic.",
    longDescription: "This is the most complex CLI automation in the portfolio — a full 5-agent agentic AI pipeline powered by Claude and LangGraph with conditional routing. The Planner decomposes topics, the Researcher makes 40+ autonomous tool calls (web search, page extraction, note-saving), the Analyst synthesizes with confidence levels, the Writer produces 1000–1500 word research reports, and the Critic quality-gates with hallucination detection. Reports are PUBLISH or REVISE-routed back through LangGraph.",
    technologies: ["Python", "Claude API", "LangGraph", "LangChain", "DuckDuckGo", "BeautifulSoup4", "Agentic AI", "Tool Calling"],
    category: "AI/ML Development",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/m-sharjeel-saleem/Automated_AI_Research_Analyst",
    image: "/projects/ai-research-analyst.png",
    status: "Completed",
    year: "2026",
    features: [
      "5-agent LangGraph pipeline: Planner → Researcher → Analyst → Writer → Critic",
      "Researcher makes 40+ autonomous tool calls per run (web search, extract, save)",
      "Conditional routing: LangGraph routes to PUBLISH or REVISE based on Critic",
      "Hallucination detection: Critic cross-references report against raw research data",
      "Research memory: saved notes accumulate structured knowledge during run"
    ]
  },
  {
    id: 24,
    title: "GitHub Workflow Automation",
    description: "An advanced event-driven automation platform powered by FastAPI, Celery, and Claude AI for automated GitHub pull request reviews with inline fix prompts.",
    longDescription: "This production-hardened platform acts as a GitHub webhook listener that spawns Celery background workers to execute parallel AI agents using LangGraph and the Claude API. It performs static analysis, logic checks, and security scans directly on pull request diffs, commenting on files with real-time feedback and fix prompts. Featuring robust architecture like Redis Pub/Sub, PostgreSQL, and idempotency guarantees.",
    technologies: ["Python", "FastAPI", "Celery", "PostgreSQL", "Redis", "Claude AI", "LangGraph"],
    category: "AI/ML Development",
    featured: true,
    liveUrl: "https://githubclaudeworkflow.netlify.app/#overview",
    githubUrl: "https://github.com/m-sharjeel-saleem/Github_Workflow_Automation",
    image: "/projects/github-workflow.png",
    status: "Active",
    year: "2026",
    features: [
      "FastAPI backend with HMAC webhook verification and idempotency",
      "Celery asynchronous workers executing parallel LangGraph agents",
      "Automated pull request diff analysis via the GitHub API",
      "Inline code comments with actionable AI-generated fix prompts",
      "Real-time SSE notifications mapped via Redis Pub/Sub"
    ]
  }
]

export const experience = [
  {
    id: 101,
    position: "AI Automation Developer",
    company: "Apex AI",
    companyUrl: "",
    location: "Remote",
    duration: "Mar 2026 – Present",
    type: "Part-time Freelance",
    description: "Designing and deploying real-time AI automations that integrate language models with SaaS tools (n8n, Make, custom orchestrators) and building end-to-end sales/lead-generation pipelines.",
    achievements: [
      "Design and deploy real-time AI automations that integrate LLMs with third-party SaaS tools (CRMs, marketing, data pipelines) to eliminate manual handoffs across business processes.",
      "Build SEO- and sales-focused lead-generation automations that source, enrich, and qualify prospects end-to-end, driving measurable pipeline lift for client organizations.",
      "Ship daily-run, production-grade workflows on n8n, Make, and custom Python/TypeScript orchestrators with monitoring, retries, and eval loops for reliable operation at scale."
    ],
    technologies: ["n8n", "Make", "Zapier", "Python", "TypeScript", "LLM Integration", "SaaS Automation", "APIs", "Lead Generation"]
  },
  {
    id: 25,
    position: "Full-Stack AI Prompt Engineer",
    company: "Sideline Technologies",
    companyUrl: "https://sideline-technologies.com",
    location: "Islamabad, Pakistan (On-site)",
    duration: "Jun 2025 – Feb 2026",
    type: "Full-time",
    description: "Building cross-platform mobile and web applications with applied AI integration, prompt systems, and modern developer tooling for faster, more reliable product delivery.",
    achievements: [
      "Architected and shipped cross-platform mobile (iOS/Android) and web apps powered by OpenAI GPT-4 and Anthropic Claude via Cursor, Claude Code, and Trae AI — compressing delivery timelines by ~40%.",
      "Designed agentic LLM pipelines with structured outputs, tool/function calling, and Supabase-backed retrieval; led prompt-engineering enablement for a 5+ person team (~30% productivity gain)."
    ],
    technologies: ["Python", "TypeScript", "React", "Next.js", "Supabase", "OpenAI", "Claude", "Cursor AI", "Claude Code", "Trae AI", "Mobile Development"]
  },
  {
    id: 26,
    position: "Prompt Engineer",
    company: "ReactiveSpace",
    companyUrl: "https://reactivespace.com",
    location: "Islamabad, Pakistan (On-site)",
    duration: "April 2025 - May 2025",
    type: "Contract",
    description: "Worked on AI prompt engineering, product workflows, and AI-assisted feature delivery for communication-focused software products.",
    achievements: [
      "Built the Kani Framework application (Next.js, TypeScript, React, Tailwind CSS) integrated with Cursor AI for rapid AI-assisted feature delivery.",
      "Developed an NLP-driven outbound chatbot orchestrated via prompt chains, automating client communication flows and lead qualification."
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Cursor AI", "NLP", "Prompt Engineering", "AI Automation"]
  },
  {
    id: 27,
    position: "Python Developer",
    company: "Dataventiv LLC",
    companyUrl: "https://dataventiv.com",
    location: "United States (Remote)",
    duration: "July 2024 - September 2024",
    type: "Internship",
    description: "Completed a Python-focused internship covering automation, SCADA systems, industrial software workflows, and applied computer-vision projects.",
    achievements: [
      "Engineered a Python Modbus simulator eliminating hardware dependency for QA (~50% test setup reduction) and built SCADA dashboards in Ignition Perspective monitoring 10+ real-time industrial data streams."
    ],
    technologies: ["Python", "SCADA", "Ignition Perspective", "OpenCV", "Modbus", "Automation", "Tkinter", "MySQL", "Excel", "Cursor AI", "Data Engineering"]
  }
]

export const stats = [
  { label: "AI Projects", value: "20+", icon: "🚀" },
  { label: "Years Building", value: "1+", icon: "⭐" },
  { label: "Core Focus", value: "LLM + Product", icon: "🧠" }
]

export const education = [
  {
    id: 34,
    degree: "Bachelor of Software Engineering",
    school: "Foundation University, Islamabad",
    duration: "2021 – 2025",
    grade: "CGPA: 3.41 / 4.0",
    coursework: [
      "Machine Learning",
      "Software Design & Architecture",
      "Database Management Systems",
      "Software Re-Engineering"
    ]
  }
]

export const certifications = [
  {
    id: 35,
    title: "The Data Analyst Course: Complete Data Analyst Bootcamp",
    issuer: "Udemy",
    date: "July 14, 2026",
    description: "Completed a comprehensive 21.5-hour data analyst bootcamp covering the full spectrum of data analysis — from data collection, cleaning, and transformation to statistical analysis, visualization, and dashboarding with real-world datasets.",
    skills: ["Data Analysis", "Python", "Statistics", "Data Visualization", "Pandas", "SQL"],
    image: "/certifications/cert7.png"
  },
  {
    id: 28,
    title: "Discover the Art of Prompting",
    issuer: "Coursera",
    date: "March 14, 2026",
    description: "Successfully completed the certification on the art of prompting. Explored advanced prompt engineering techniques, contextual structuring, and effective interaction with Large Language Models.",
    skills: ["Prompt Engineering", "Generative AI", "LLMs", "Communication"],
    image: "/certifications/cert6.jpg"
  },
  {
    id: 29,
    title: "Maximize Productivity With AI Tools",
    issuer: "Coursera",
    date: "March 11, 2026",
    description: "Successfully completed the certification on maximizing productivity with Artificial Intelligence. Gained practical skills in utilizing advanced AI tools to automate complex tasks, optimize daily workflows, and significantly enhance professional efficiency using generative models.",
    skills: ["AI Tools", "Prompt Engineering", "Workflow Automation", "Productivity"],
    image: "/certifications/cert4.jpg"
  },
  {
    id: 30,
    title: "Google Cloud Certified Program - GenAI",
    issuer: "Google Cloud",
    date: "March 9, 2026",
    description: "Successfully completed the Google Cloud Computing Foundations course followed by the specialized program on Generative AI. Explores LLMs, prompting, and GenAI applications on GCP.",
    skills: ["Generative AI", "Google Cloud", "LLMs", "Prompt Engineering"],
    image: "/certifications/cert2.jpg"
  },
  {
    id: 31,
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class (IBM)",
    date: "July 24, 2024",
    description: "Foundational course on Python programming tailored for Data Science. Covers data structures, loops, functions, and introductory data manipulation libraries like Pandas and Numpy.",
    skills: ["Python", "Data Science", "Pandas", "Numpy"],
    image: "/certifications/cert3.jpg"
  },
  {
    id: 32,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "June 30, 2024",
    description: "Certified proficiency in API fundamentals, testing, and development using the Postman platform. Covers API requests, collections, environment variables, and automated testing.",
    skills: ["API Testing", "Postman", "REST APIs", "Automation"],
    image: "/certifications/cert1.jpg"
  },
  {
    id: 33,
    title: "The Python Programming A-Z Definitive Diploma",
    issuer: "Udemy",
    date: "February 9, 2024",
    description: "Complete and definitive diploma on Python programming covering everything from basics to advanced Python concepts, object-oriented programming, and file handling.",
    skills: ["Python", "Algorithms", "Object-Oriented Programming", "Software Development"],
    image: "/certifications/cert5.jpg"
  }
]
