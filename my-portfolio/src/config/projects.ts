import { Project, Technology } from "../types/index";
import project1 from "../public/images/eCart1.jpg";
import project2 from "../public/images/portfolio.jpg";

export const projects: Project[] = [
  {
    id: "project1",
    title: "eCart",
    description: "E-commerce platform with Stripe payment integration, Firebase authentication, and PostgreSQL database. Built responsive UI with React and Tailwind CSS featuring product catalog and cart functionality.",
    technologies: ["react", "nodejs", "express", "postgresql", "firebase", "tailwindcss"],
    date: "2024-2025",
    links: {
      github: "https://github.com/miasdk/Vite-Ecommerce-Template",
    },
    image: project1,
    meta: {
      isWIP: true,
      isTeamProject: false,
      isFeatured: true,
    },
  },
  {
    id: "project2",
    title: "Portfolio",
    description: "Performance-optimized portfolio built with Next.js and TypeScript. Features SEO-friendly server-side rendering, responsive design, and custom component library for consistent UI/UX.",
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "2025",
    links: {
      github: "https://github.com/miasdk/Portfolio",
    },
    image: project2,
    meta: {
      isFeatured: true,
    },
    platforms: ["web", "mobile"]
  },
  {
    id: "project3",
    title: "Markdown Editor",
    description: "Real-time markdown editor with syntax highlighting and local storage persistence. Implemented custom rendering pipeline for optimized preview performance.",
    technologies: ["typescript", "javascript", "react", "nextjs", "tailwindcss"],
    date: "2023",
    links: {
      github: "https://github.com/yourname/portfolio",
      demo: "https://yourportfolio.com"
    },
    image: "https://images.unsplash.com/photo-1604177052603-c2b4cff228db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    meta: {
      isWIP: true,
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