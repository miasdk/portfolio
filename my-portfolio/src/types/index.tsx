export type Technology = 
  | "typescript"
  | "javascript"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "graphql"
  | "prisma"
  | "nodejs"
  | "express"
  | "postgresql"
  | "mongodb"
  | "firebase"
  | "git"
  | "github"
  | "vercel"
  | "netlify"
  | "figma"
  | "html"
  | "css"
  | "redux"
  | "docker"
  | "awslambda";

  export interface Project {
    // Core Properties
    id: string;
    title: string;
    shortTitle?: string; // For compact displays (e.g. mobile)
    description: string;
    technologies: Technology[];
    
    // Media (optional)
    image?: string; // Path to image (optional)
    videoUrl?: string; // For demo videos
    
    date: 
      | `${number}` // "YYYY";
      | `${number}/${number}`; // "MM/YYYY"
  
    // Links (optional)
    links?: {
      github?: string;
      demo?: string;
      figma?: string;
      caseStudy?: string;
      playStore?: string;
      appStore?: string;
    };
    
    // Additional Properties (optional)
    meta?: {
      isFeatured?: boolean; // Highlight on homepage
      isWIP?: boolean; // "Work in progress" badge
      isOpenSource?: boolean; // Shows GitHub prominence
      isTeamProject?: boolean; // Team collaboration flag
    };
  
    // Platform Support 
    platforms?: ("web" | "mobile" | "desktop" | "cli")[];

  }

  export interface Profile {
    name: string;
    title: string;
    description: string;
    image?: string;
    links?: {
      github?: string;
      linkedIn?: string;
      twitter?: string;
      website?: string;
      resume?: string; // Optional
    };
    skills: Technology[];
    contact: {  
      email: string;
      phone?: string;
    };
    location?: {
      city?: string;
      country?: string;
    };
  
  }


