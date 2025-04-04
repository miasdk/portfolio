import { Profile, Technology } from "../types/index";
import placeHolder from "../public/images/placeholder2.jpg";

export const profile: Profile = {
    name: "Mia Elena",
    title: "Software Engineer",
    description: "Passionate about building impactful software solutions.",
    image: placeHolder,
    links: {
        github: "https://github.com/miasdk",
        linkedIn: "https://www.linkedin.com/in/miaelena/",
        resume: "https://drive.google.com/file/d/1gk0v2x4q3e5f8z7g9h8g8g8g8g/view?usp=sharing",
    },
    skills: [
        "typescript",
        "javascript",
    ] as Technology[],
    contact: {
        email: "miaelenatapia@gmail.com",
    },
    location: {
        city: "New York City",
        country: "USA",
    },
};
