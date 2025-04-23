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
  | "awslambda"
  | "python"
  | "supabase"
  | "swift"
  ;

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
      isAI?: boolean; // AI/ML related
      isGame?: boolean; // Game development
    };
  
    // Platform Support 
    platforms?: ("web" | "mobile" | "cli")[];

  }

  import { StaticImageData } from "next/image";
  
  export interface Profile {
      name: string;
      title: string;
      description: string;
      image?: string | StaticImageData;
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

  export interface ExperienceItem {
    id: string; 
    role: string;
    company: string;
    period: string; // e.g., "Jan 2020 - Present"
    description: string[]; 
    skills: Technology[]; // Technologies used
    logo?: string; // Optional logo image
    links?: {
      companyWebsite?: string;
      projectLink?: string;
      caseStudy?: string;
      github?: string;
    }
    location?: {
      city?: string;
      country?: string;
    };
    metrics?: {
      value: string; // e.g., "20%"
      label: string; // e.g., "Increased efficiency"
    }[];
  }

  export type ColorScheme = 'brand' | 'mono' | 'minimal';



