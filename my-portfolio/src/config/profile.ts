import { Profile, Technology } from "../types/index";
import profilePicture from "../public/images/my-notion-face-transparent-glasses2.png";
export const profile: Profile = {
    name: "Mia Elena",
    title: "Software Engineer",
    description: "Passionate about building elegant software solutions.",
    image: profilePicture,
    links: {
        github: "https://github.com/miasdk",
        linkedIn: "https://www.linkedin.com/in/miaelena/",
        resume: "https://www.dropbox.com/scl/fi/cizrd3ho6tvx3jtfhxr1c/Mia-Elena-Ricci-SWE-Resume.pdf?rlkey=2riqxf44fe879gldnjj4m2d09&st=5q5cayg5&dl=0",
    },
    skills: [
        "python",
        "django",
        "react",
        "typescript",
        "postgresql",
        "aws"
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
