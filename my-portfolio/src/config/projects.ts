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
        image: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isWIP: true,
            isTeamProject: false,
        },
    },
    {
        id: "project2",
        title: "Project Two",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: ["python","postgresql", "firebase"],
        date: "2023",
        links: {
            github: "https://github.com/yourname/portfolio",
            demo: "https://yourportfolio.com"
        },
        image: "https://images.unsplash.com/photo-1528033978085-52f315289665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isWIP: true,
            isOpenSource: true,
        },
        platforms: ["web", "mobile"]
    },
    {
        id: "project3",
        title: "Project Three",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [ "typescript", "javascript", "react", "nextjs", "tailwindcss"],
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
        title: "Project Four",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: [
            "typescript",
            "javascript",
            "react",
            "nextjs",
            "tailwindcss",
            "graphql",
            "prisma",
            "nodejs",
            "express",
            "postgresql",
            "mongodb",
            "firebase",
            "git",
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