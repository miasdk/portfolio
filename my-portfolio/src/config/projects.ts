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
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        meta: {
            isOpenSource: true,
        },
        platforms: ["web", "cli"]
    },

]; 