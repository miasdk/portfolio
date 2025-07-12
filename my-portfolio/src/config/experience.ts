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
    summary: "Built multiple applications including ML models and full-stack systems in collaborative team environment",
    
    // Medium view - scannable highlights
    highlights: [
      "Built multiple applications including ML models and full-stack systems in collaborative team environment",
      "Optimized application performance through caching, code splitting, and lazy loading techniques",
      "Implemented LLM integration with hyperparameter tuning and deployment on AWS and Vercel"
    ],
    
    // Detailed view - full technical descriptions
    description: [
      "Built multiple applications including ML models and full-stack systems in collaborative team environment using Python and TypeScript",
      "Developed and deployed web applications with React/Next.js frontend and Python backend services",
      "Optimized application performance through caching, code splitting, and lazy loading techniques to improve user experience",
      "Implemented LLM integration with hyperparameter tuning and deployment on AWS and Vercel with automated CI/CD pipelines",
      "Collaborated with team members using Git version control and agile development methodologies"
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
    role: "Web Development Student Developer",
    company: "CUNY Hunter College",
    period: "Jan 2025 - May 2025",
    logo: HunterLogo,
    
    summary: "Designed WCAG 2.1 accessible React components with comprehensive form validation",
    
    highlights: [
      "Designed WCAG 2.1 accessible React components with comprehensive form validation",
      "Deployed applications with CI/CD ensuring reliable uptime; collaborated on technical architecture decisions"
    ],
    
    description: [
      "Designed WCAG 2.1 accessible React components with comprehensive form validation using TypeScript and modern React patterns",
      "Built responsive web applications with TailwindCSS ensuring cross-browser compatibility and mobile-first design",
      "Implemented client-side form validation with error handling and user feedback mechanisms",
      "Deployed applications with CI/CD pipelines ensuring reliable uptime and automated testing",
      "Collaborated on technical architecture decisions and participated in code reviews with development team"
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
    
    summary: "Engineered portfolio management features for client base, enhanced user experience and satisfaction",
    
    highlights: [
      "Engineered portfolio management features for client base, enhanced user experience and satisfaction",
      "Implemented comprehensive testing suite with Jest; architected secure access control with role-based permissions"
    ],
    
    description: [
      "Engineered portfolio management features for client base using React and TypeScript, enhancing user experience and satisfaction",
      "Developed responsive dashboard interfaces with real-time data visualization and interactive financial charts",
      "Implemented comprehensive testing suite with Jest and React Testing Library including unit and integration tests",
      "Architected secure access control with role-based permissions and authentication using Firebase and Node.js",
      "Participated in agile development cycles with daily standups, sprint planning, and collaborative code reviews"
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
    
    summary: "Developed full-stack applications with React/Next.js; engaged in pair programming sessions",
    
    highlights: [
      "Developed full-stack applications with React/Next.js; engaged in pair programming sessions",
      "Created RESTful APIs with Express.js; applied performance optimization techniques"
    ],
    
    description: [
      "Developed full-stack applications with React/Next.js and TypeScript in intensive web development program",
      "Created RESTful APIs with Express.js and Node.js, integrating third-party services and databases",
      "Applied performance optimization techniques including code splitting, lazy loading, and efficient state management",
      "Engaged in pair programming sessions and collaborative development using Git version control",
      "Built responsive web applications with modern CSS frameworks and implemented web security best practices"
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