import { Project, Technology } from "../types/index";
import project1 from "../public/images/ecart-homepage2.png";
import project2 from "../public/images/portfolio.jpg";

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "Production-ready e-commerce platform featuring 25+ documented REST API endpoints, advanced PostgreSQL full-text search, and interactive Swagger documentation. Implements enterprise-level architecture with Firebase authentication, Stripe payment processing, and optimized database queries. Deployed on Vercel/Render with comprehensive CI/CD pipeline.",
    technologies: ["react", "nodejs", "express", "postgresql", "firebase", "tailwindcss"],
    date: "01/2025",
    lastUpdated: "2025-06-16",
    status: "complete", 
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
      demo: "https://ecartdemo.vercel.app/"
    },
    image: project1,
    meta: {
      isTeamProject: false,
      isFeatured: true,
      isFullStack: true,
    },
  },
  {
    id: "project2",
    title: "Portfolio",
    description: "Performance-optimized portfolio built with Next.js and TypeScript. Features SEO-friendly server-side rendering, responsive design, and custom component library for consistent UI/UX.",
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "04/2025",
    lastUpdated: "2025-06-10",
    status: "complete", 
    links: {
      github: "https://github.com/miasdk/Portfolio",
      demo: "https://miaelena.vercel.app/"
    },
    image: project2,
    meta: {

    },
    platforms: ["web", "mobile"]
  },
  {
  id: "project3",
  title: "Multimodal Video Analysis",
  description: "Advanced AI platform combining visual and audio understanding for intelligent video conversations. Built with Google Gemini Pro Vision, featuring multimodal RAG architecture, real-time WebSocket processing, and vector database integration with ChromaDB. Implements intelligent video sectioning, timestamp citations, and natural language visual content search.",
  technologies: ["python", "react", "typescript", "fastapi", "tailwindcss", "postgresql"],
  date: "06/2025",
  lastUpdated: "2025-06-10",
  status: "in-progress",
  links: {
    github: "https://github.com/miasdk/multimodal-video-analysis",
    // demo: "https://multimodal-video-analysis.vercel.app/" // Add when deployed
  },
  image: "https://images.unsplash.com/photo-1710993011904-8f1162b9806d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  meta: {
    isWIP: true,
    isFeatured: false,
    isAI: true,
    isTeamProject: false,
  },
  platforms: ["web", "mobile"]
},
{
id: "project4",
title: "Sales Analytics Platform",
description: "Business intelligence platform with ML-powered sales forecasting, customer segmentation, and interactive dashboards. Processes 100K+ transactions with 85%+ prediction accuracy using Python, PostgreSQL, and Streamlit.",
technologies: ["python", "postgresql", "streamlit", "scikit-learn", "pandas", "plotly"],
date: "06/2025",
lastUpdated: "2025-06-10",
status: "in-progress",
links: {
  github: "https://github.com/miasdk/sales-analytics-platform",
  // demo: "https://sales-analytics-platform.streamlit.app/" // Add when deployed
},
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Business analytics/dashboard themed image
meta: {
  isWIP: true,
  isFeatured: true,
  isDataScience: true,
  isTeamProject: false,
},
platforms: ["web"]
},
{
  id: "project5",
  title: "Medical Referral Automation: AI-Powered Healthcare Processing",
  shortTitle: "Medical Referral AI",
  description: "Production-ready healthcare automation system that processes 30-50 page medical referrals using Mistral AI and generates insurance-specific prior authorization forms. Features intelligent document analysis, FHIR R4 compliance, provider matching algorithms, and risk stratification engine. Reduces processing time from weeks to minutes with high extraction accuracy.",
  technologies: [
    "python",
    "react", 
    "typescript",
    "django",
    "postgresql",
    "docker",
    "tailwindcss"
  ],
  date: "06/2025",
  lastUpdated: "2025-06-30", // Update to current date
  status: "complete", // Change from "in-progress" 
  links: {
    github: "https://github.com/yourusername/medical-referral-automation",
    demo: "https://medical-referral-hub.vercel.app/" // Add your demo URL
  },
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Medical/healthcare themed image
  meta: {
    isWIP: true, // Change from true
    isFeatured: true,
    isAI: true,
    isFullStack: true, // Add this since you have frontend + backend
    isHealthcare: true, // Add healthcare specialty tag
    isTeamProject: false,
  },
  platforms: ["web", "cli"] // Both web interface and CLI
}
];