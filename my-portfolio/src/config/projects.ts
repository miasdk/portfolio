import { Project, Technology } from "../types/index";
import project1 from "../public/images/ecart-homepage2.png";
import project2 from "../public/images/portfolio.jpg";

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "Production-ready e-commerce platform featuring 25+ documented REST API endpoints, advanced PostgreSQL full-text search, and interactive Swagger documentation. Implements enterprise-level architecture with Firebase authentication, Stripe payment processing, and optimized database queries. Deployed on Vercel/Railway with comprehensive CI/CD pipeline.",
    technologies: ["react", "nodejs", "express", "postgresql", "firebase", "tailwindcss"],
    date: "06/2025",
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
      demo: "https://e-cart-mu-olive.vercel.app/"
    },
    image: project1,
    meta: {
      isTeamProject: false,
      isFeatured: true,
    },
  },
  {
    id: "project2",
    title: "Portfolio",
    description: "Performance-optimized portfolio built with Next.js and TypeScript. Features SEO-friendly server-side rendering, responsive design, and custom component library for consistent UI/UX.",
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "04/2025",
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
    title: "AI Application",
    description: "AI-driven web application utilizing OpenAI API for natural language processing. Features user authentication, data visualization, and responsive design.",
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "2025",
    links: {
      github: "https://github.com/yourname/portfolio",
    },
    image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    meta: {
      isWIP: true,
      isFeatured: true,   
      isAI: true,
     },
    platforms: ["web", "mobile"]
  },
  {
    id: "project4",
    title: "Weather Dashboard",
    description: "Interactive weather visualization platform integrating multiple API data sources. Built with React and D3.js for responsive charts and geolocation features.",
    technologies: [
      "typescript",
      "javascript",
      "react",
      "nextjs",
      "tailwindcss",
    ],
    date: "2023",
    links: {
      github: "https://github.com/yourname/portfolio",
      demo: "https://yourportfolio.com"
    },
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    meta: {
      isWIP: true,
      isTeamProject: true,
   
    },
    platforms: ["web", "mobile"]
  },
];