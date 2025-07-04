import { Profile, Technology } from "../types/index";
import profilePicture from "../public/images/profile_transparent.jpg";
import profilePicture2 from "../public/images/profile_transparent1.jpg";
export const profile: Profile = {
    name: "Mia Elena",
    title: "Software Engineer",
    description: "Passionate about building impactful software solutions.",
    image: profilePicture,
    links: {
        github: "https://github.com/miasdk",
        linkedIn: "https://www.linkedin.com/in/miaelena/",
        resume: "https://www.dropbox.com/scl/fi/1yivfsqvvqfk5j1zbwc47/Mia-Elena-Tapia-SWE-Resume-2.pdf?rlkey=itpd6r6gmrlruh06v03cmx9f1&st=n7e6xd7y&dl=0",
    },
    skills: [
        "python",
        "django",
        "postgresql",
        "react",
        "typescript",
        "nextjs",
        "docker",
        "tailwindcss",
        "awslambda"
    ] as Technology[],
    contact: {
        email: "miatapiaswe@gmail.com",
        phone: "+1 (123) 456-7890",
    },
    location: {
        city: "New York City",
        country: "USA",
    }
};
