import { Profile, Technology } from "../types/index";
import profilePicture from "../public/images/profile_transparent.jpg";
import profilePicture2 from "../public/images/profile.jpg";
export const profile: Profile = {
    name: "Mia Elena",
    title: "Software Engineer",
    description: "Passionate about building impactful software solutions.",
    image: profilePicture,
    links: {
        github: "https://github.com/miasdk",
        linkedIn: "https://www.linkedin.com/in/miaelena/",
        resume: "https://docs.google.com/document/d/18HHgbBzyzwlzygUA7-VSyhm6DMrSOccT3SqBcPc2CGk/edit?usp=sharing",
    },
    skills: [
        "typescript",
        "react",
        "nextjs",
        "supabase",
    ] as Technology[],
    contact: {
        email: "miaelenatapia@gmail.com",
    },
    location: {
        city: "New York City",
        country: "USA",
    },
    email: ""
};
