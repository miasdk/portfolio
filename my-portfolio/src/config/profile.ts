import { Profile, Technology } from "../types/index";

export const profile: Profile = {
    name: "Mia Elena",
    title: "Software Engineer",
    description: "Passionate about building impactful software solutions.",
    image: "/images/profile.jpg",
    links: {
        github: "https://github.com/miasdk",
        linkedIn: "https://www.linkedin.com/in/miaelena/",
    },
    skills: [
        "typescript",
        "javascript",
        "react",
        "nextjs",
        "nodejs",
        "express",
        "mongodb",
        "docker",
        "aws",
        "git",
    ] as Technology[],
    contact: {
        email: "miaelenatapia@gmail.com",
    },
    location: {
        city: "New York City",
        country: "USA",
    },
};
