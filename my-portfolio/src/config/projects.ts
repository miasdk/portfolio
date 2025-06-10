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
    lastUpdated: "2025-06-06",
    status: "complete", 
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
      demo: "https://e-cart-mu-olive.vercel.app/"
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
      isFeatured: true,
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
    isFeatured: true,
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
}
];