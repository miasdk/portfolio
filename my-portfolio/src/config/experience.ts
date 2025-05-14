import { ExperienceItem, Technology } from "../types";
import CodePathLogo from "../public/images/codepathlogo.jpg";
import HunterLogo from "../public/images/HunterCollege.jpg";
import EvergreenLogo from "../public/images/evergreen-logo.jpg";
import HeadstarterLogo from "../public/images/headstarter.jpeg";
export const experience: ExperienceItem[] = [
  {
    id: "experience1",
    role: "Software Engineering Resident",
    company: "Headstarter",
    period: "May 2025 - Present",
    logo: HeadstarterLogo,
    description: [
      "Building 14+ machine learning, ai-engineering and full-stack projects in fast-paced software team environments ",
      "Developing 5+ neural networks in Python, 11 apps in Typescript on AWS/Vercel with dev and production environment",
      "Implemented llm-chaning, hyperparameter tuning, fine tuning on 10+ LLM models controlling for latency & accuracy",
      "Optimizing application performance with lazy loading and code splitting, and deploying to Vercel with CI/CD pipeline",
    ],
    skills: [
      "typescript",
      "python",
      "vercel",
      "git",
      "docker",
      "awslambda"
    ] as Technology[],
    location: {
      city: "New York",
      country: "USA",
    },
    links: {
      companyWebsite: "https://hunter.cuny.edu",
      projectLink: "https://github.com/yourusername/hunter-events-platform",
    },
    metrics: [
    ]
  },
  {
    id: "experience2",
    role: "Web Development Intern",
    company: "CUNY Hunter College",
    period: "Jan 2025 - May 2025",
    logo: HunterLogo,
    description: [
      "Designing and implementing responsive UI components with React and styled with TailwindCSS, ensuring WCAG 2.1 accessibility compliance",
      "Building secure user authentication system and real-time database functionalities with Firebase",
      "Developing comprehensive client-side form validation with error handling to enhance user experience",
      "Optimizing application performance with lazy loading and code splitting, and deploying to Vercel with CI/CD pipeline"
    ],
    skills: [
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
      "firebase",
      "git"
    ] as Technology[],
    location: {
      city: "New York",
      country: "USA",
    },
    links: {
      companyWebsite: "https://hunter.cuny.edu",
      projectLink: "https://github.com/yourusername/hunter-events-platform",
    },
    metrics: []
  },
  {
    id: "experience3",
    role: "Software Engineering Intern",
    company: "Evergreen Investments",
    period: "June 2024 - Dec 2024",
    logo: EvergreenLogo,
    description: [
      "Architected and implemented secure user authentication system with role-based access control, enhancing data protection",
      "Collaborated with UX/UI designers to create intuitive interfaces that improved user experience",
      "Implemented comprehensive unit and integration testing with Jest and React Testing Library",
      "Contributed to agile development processes including daily stand-ups, sprint planning, and retrospectives"
    ],
    skills: [
      "react",
      "nodejs",
      "typescript",
      "git",
      "firebase",
      "swift",
      "jest"
    ] as Technology[],
    location: {
      city: "New York",
      country: "USA",
    },
    links: {
      companyWebsite: "https://evergreeninvestments.com",
      projectLink: "https://github.com/yourusername/evergreen-projects",
    },
    metrics: []
  },
  {
    id: "experience4",
    role: "Advanced Web Development Mentee",
    company: "CodePath",
    period: "Aug 2023 - Jan 2024",
    logo: CodePathLogo,
    description: [
      "Developed multiple full-stack web applications utilizing React, Next.js, and TypeScript in a rigorous industry-focused program",
      "Created and consumed RESTful APIs with Express.js, integrating third-party services to enhance application functionality",
      "Collaborated with peers on group projects using Git for version control and agile methodologies",
      "Applied web security best practices and performance optimization techniques across all projects"
    ],
    skills: [
      "javascript",
      "react",
      "nextjs",
      "nodejs",
      "express",
      "firebase",
      "supabase",
      "git",
      "tailwindcss"
    ] as Technology[],
    location: {
      city: "New York",
      country: "USA",
    },
    links: {
      companyWebsite: "https://codepath.org",
      projectLink: "https://github.com/yourusername/codepath-advanced-web",
    },
    metrics: [
      {
        value: "100%",
        label: "Course Completion"
      },
      {
        value: "5+",
        label: "Web Apps Built"
      },
      {
        value: "Top 10%",
        label: "Graduating Class"
      }
    ]
  },
];