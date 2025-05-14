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
        resume: "https://www.dropbox.com/scl/fi/apvvtjqsnv2via15zvufq/Mia-Elena-Tapia-SWE-Resume.pdf?rlkey=63sdhal4calzoax41jmsinc0e&st=a6z7ik24&dl=0",
    },
    skills: [
        "typescript",
        "react",
        "nextjs",
        "supabase",
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
