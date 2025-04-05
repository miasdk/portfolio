import { ExperienceItem, Technology } from "../types";

export const experience: ExperienceItem[] = [
    {
        id: "experience1",
        role: "Software Engineer",
        company: "Tech Company",
        period: "Jan 2022 - Present",
        description: [
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to design and implement new features.",
            "Optimized application performance and scalability.",
        ],
        skills: [
            "typescript",
            "javascript",
            "react",
            "nodejs",
            "express",
            "postgresql",
        ] as Technology[],
        location: {
            city: "New York",
            country: "USA",
        },
        links: {
            companyWebsite: "https://techcompany.com",
            projectLink: "https://techcompany.com/projects",
            caseStudy: "https://techcompany.com/case-study",
        },
    },
    {
        id: "experience2",
        role: "Frontend Developer",
        company: "Another Tech Company",
        period: "Jan 2021 - Dec 2021",
        description: [
            "Worked on the frontend of a large-scale web application using React and Redux.",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Participated in code reviews and contributed to team knowledge sharing.",
        ],
        skills: [
            "typescript",
            "javascript",
            "react",
            "redux",
            "tailwindcss",
        ] as Technology[],
        location: {
            city: "San Francisco",
            country: "USA",
        },
        links: {
            companyWebsite: "https://anothertechcompany.com",
            projectLink: "https://anothertechcompany.com/projects",
            caseStudy: "https://anothertechcompany.com/case-study",
        },
       
    },
]