import { ExperienceItem, Technology } from "../types";
import CodePathLogo from "../public/images/codepathlogo.jpg";
import HunterLogo from "../public/images/HunterCollege.jpg";
export const experience: ExperienceItem[] = [
  {
    id: "experience1",
    role: "Advanced Web Development Student",
    company: "CodePath",
    period: "Jan 2023 - May 2023", // Adjust to your actual dates
    logo: CodePathLogo, // Add logo if available
    description: [
      "Built full-stack web applications using modern JavaScript frameworks including React",
      "Implemented secure authentication flows and database management with Firebase and Supabase",
      "Developed RESTful APIs and integrated third-party services",
      "Collaborated with peers on group projects using Git for version control",
      "Participated in code reviews and applied best practices for web security and performance"
    ],
    skills: [
      "typescript",
      "react", 
      "nodejs", 
      "firebase",
      "git",
      "tailwindcss"
    ] as Technology[],
    location: {
      city: "New York", // Your location
      country: "USA",
    },
    links: {
      companyWebsite: "https://codepath.org",
      projectLink: "https://github.com/yourusername/your-web-project", // Your GitHub project
    },
    metrics: [
      {
        value: "100%",
        label: "Course Completion"
      },
      {
        value: "3+",
        label: "Web Apps Built"
      }
    ]
  },
  
  {
    id: "experience2",
    role: "iOS Development Student",
    company: "CodePath",
    period: "Aug 2022 - Dec 2022", // Adjust to your actual dates
    logo: CodePathLogo, // Add logo if available
    description: [
      "Developed multiple iOS applications using Swift and UIKit",
      "Implemented Core Data for persistent storage and user preferences",
      "Integrated RESTful APIs and JSON parsing for dynamic content",
      "Applied MVC architecture patterns for maintainable code structure",
      "Created responsive UIs that work across multiple iOS device sizes"
    ],
    skills: [
      "git",
      "firebase",
      "swift",
    ] as Technology[],
    location: {
      city: "New York", // Your location
      country: "USA",
    },
    links: {
      companyWebsite: "https://codepath.org",
      projectLink: "https://github.com/yourusername/your-ios-project", // Your GitHub project
    },
    metrics: [
      {
        value: "100%",
        label: "Course Completion"
      },
      {
        value: "4+",
        label: "iOS Apps Created"
      }
    ]
  },
  
  {
    id: "experience3",
    role: "Web Development Intern",
    company: "CUNY Hunter College",
    period: "Sep 2021 - Dec 2021",
    logo: HunterLogo,
    description: [
      "Collaborated with a team of 3 to build a campus event management platform",
      "Designed responsive UI components with React and styled with TailwindCSS",
      "Integrated user authentication and database functionalities with Firebase",
      "Implemented client-side form validation and error handling",
      "Deployed and maintained the application on Vercel"
    ],
    skills: [
      "javascript",
      "react",
      "tailwindcss",
      "firebase",
      "git"
    ] as Technology[],
    location: {
      city: "New York", // Your location
      country: "USA",
    },
    links: {
      projectLink: "https://github.com/yourusername/university-project", // Your GitHub project
    },
    meta: {
      isTeamProject: true
    }
  }
];