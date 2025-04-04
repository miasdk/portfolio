import { Project, Technology } from "../types/index";

export const projects: Project[] = [
    {
        id: "project1",
        title: "Project One",
        description: "Description of project one.",
        technologies: ["typescript", "react", "nextjs", "tailwindcss"],
        date: "2023",
        links: {
            github: "https://github.com/yourname/portfolio",
            demo: "https://yourportfolio.com"
        },
        image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isTeamProject: true,
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
            isFeatured: true,
        },
        platforms: ["web", "desktop"]
    },
    {
        id: "project4",
        title: "Project Four",
        description: "Description of project four.",
        technologies: ["typescript", "javascript", "docker", "awslambda"],
        date: "2023",
        links: {
            github: "",
            demo: "https://yourportfolio.com"
        },
        image: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isOpenSource: true,
        },
        platforms: ["web", "cli"]
    },

]; 