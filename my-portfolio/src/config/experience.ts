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
    
    // Card view - concise and impactful
    summary: "Building production ML/AI applications with Python & TypeScript, deployed on AWS with optimized CI/CD pipelines",
    
    // Medium view - scannable highlights
    highlights: [
      "Developing neural networks and LLM integrations across multiple language models",
      "Deploying applications on AWS and Vercel with staging/production environments", 
      "Optimizing performance through lazy loading, code splitting, and automated pipelines"
    ],
    
    // Detailed view - full technical descriptions
    description: [
      "Building multiple machine learning, AI-engineering and full-stack projects in fast-paced collaborative team environments",
      "Developing neural networks in Python and TypeScript applications deployed on AWS and Vercel with staging and production environments",
      "Implementing LLM integration, hyperparameter tuning, and fine-tuning across various language models with focus on performance optimization",
      "Optimizing application performance through lazy loading, code splitting, and automated CI/CD deployment pipelines"
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
      companyWebsite: "https://headstarter.co", 
      projectLink: "https://github.com/miatapia/headstarter-projects",
    },
    metrics: [],
    displayOptions: {
      emphasizeSkills: true,
      cardLayout: "standard"
    }
  },
  {
    id: "experience2",
    role: "Web Development Intern",
    company: "CUNY Hunter College",
    period: "Jan 2025 - May 2025",
    logo: HunterLogo,
    
    summary: "Built responsive React applications with Firebase integration, ensuring WCAG 2.1 accessibility compliance",
    
    highlights: [
      "Designed responsive UI components with React and TailwindCSS",
      "Implemented secure authentication and real-time database with Firebase",
      "Optimized performance with lazy loading and automated CI/CD to Vercel"
    ],
    
    description: [
      "Designed and implemented responsive UI components with React and TailwindCSS, ensuring WCAG 2.1 accessibility compliance",
      "Built secure user authentication system and real-time database functionalities with Firebase integration",
      "Developed comprehensive client-side form validation with enhanced error handling for improved user experience",
      "Optimized application performance with lazy loading and code splitting, deploying via automated CI/CD pipeline to Vercel"
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
      projectLink: "https://github.com/miatapia/hunter-web-platform",
    },
    metrics: [],
    displayOptions: {
      emphasizeSkills: true,
      cardLayout: "standard"
    }
  },
  {
    id: "experience3",
    role: "Software Engineering Intern", 
    company: "Evergreen Investments",
    period: "June 2024 - Dec 2024",
    logo: EvergreenLogo,
    
    summary: "Architected secure authentication systems and portfolio management features with comprehensive testing suite",
    
    highlights: [
      "Built secure authentication with role-based access control",
      "Engineered portfolio management features with intuitive client interfaces",
      "Implemented comprehensive testing suite using Jest and React Testing Library"
    ],
    
    description: [
      "Architected and implemented secure user authentication system with role-based access control for enhanced data protection",
      "Engineered portfolio management features and collaborated with UX/UI designers to create intuitive client interfaces",
      "Implemented comprehensive unit and integration testing suite using Jest and React Testing Library with high code coverage",
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
      projectLink: "https://github.com/miatapia/evergreen-portfolio-system",
    },
    metrics: [],
    displayOptions: {
      emphasizeSkills: true,
      cardLayout: "standard"
    }
  },
  {
    id: "experience4",
    role: "Advanced Web Development Mentee",
    company: "CodePath",
    period: "Aug 2023 - Jan 2024", 
    logo: CodePathLogo,
    
    summary: "Developed full-stack applications with React and Next.js, integrating RESTful APIs and third-party services",
    
    highlights: [
      "Built multiple full-stack applications using React, Next.js, and TypeScript",
      "Created and consumed RESTful APIs with Express.js integration",
      "Applied web security best practices and performance optimization techniques"
    ],
    
    description: [
      "Developed multiple full-stack web applications utilizing React, Next.js, and TypeScript in rigorous industry-focused program",
      "Created and consumed RESTful APIs with Express.js, integrating third-party services for enhanced application functionality",
      "Collaborated on group projects using Git version control and agile methodologies in team-based development environment",
      "Applied web security best practices and performance optimization techniques across all project implementations"
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
      projectLink: "https://github.com/miatapia/codepath-web-development",
    },
    metrics: [],
    displayOptions: {
      emphasizeSkills: true,
      cardLayout: "standard"
    }
  },
];