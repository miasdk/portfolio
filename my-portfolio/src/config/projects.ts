import { Project, Technology } from "../types/index";
import project1 from "../public/images/project1.jpg";

export const projects: Project[] = [
    {
        id: "project1",
        title: "eCart",
        description: "A basic e-commerce platform built with Vite, React, and a custom Node.js/PostgreSQL backend. Includes shopping cart, product management, and Stripe integration. ",
        technologies: ["react", "nodejs", "express", "postgresql", "firebase", "tailwindcss"],
        date: "2023",
        links: {
            github: "https://github.com/yourname/portfolio",
            demo: "https://yourportfolio.com"
        },
        image: project1,
        meta: {
            isTeamProject: false,
        },
    },
    {
        id: "project2",
        title: "Project Two",
        description: "Description of project two.",
        technologies: ["javascript", "nextjs", "postgresql", "docker"],
        date: "2023",
        links: {
            github: "https://github.com/yourname/portfolio",
            demo: "https://yourportfolio.com"
        },
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isWIP: true,
            isOpenSource: true,
        },
        platforms: ["web", "mobile"]
    },
    {
        id: "project3",
        title: "Project Three",
        description: "Description of project three.",
        technologies: ["typescript", "react", "mongodb", "docker"],
        date: "2023",
        links: {
            github: "",
            demo: "https://yourportfolio.com"
        },
        image: "https://images.unsplash.com/photo-1604177052603-c2b4cff228db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isWIP: true,
        },
        platforms: ["web", "desktop"]
    },
]; 