'use client';
import { useState } from "react";
import { IconType } from 'react-icons';
import {
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiDocker,
  SiAwslambda,
  SiPython,
  SiSupabase,
} from 'react-icons/si';
import { Technology } from '../types';


const techData = {
  typescript: {
    icon: SiTypescript,
    color: "bg-blue-500 text-white dark:bg-[#3178c6] dark:text-white",
    label: "TypeScript",
  },
  javascript: {
    icon: SiJavascript,
    color: "bg-[#f7df1e] text-black dark:bg-[#f7df1e] dark:text-black",
    label: "JavaScript",
  },
  react: {
    icon: SiReact,
    color: "bg-[#61dafb] text-black dark:bg-[#282c34] dark:text-[#61dafb]",
    label: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    color: "bg-black text-white dark:bg-black dark:text-white",
    label: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: "bg-[#06b6d4] text-white dark:bg-[#0f172a] dark:text-[#38bdf8]",
    label: "Tailwind CSS",
  },
  graphql: {
    icon: SiGraphql,
    color: "bg-[#e10098] text-white dark:bg-[#e10098] dark:text-white",
    label: "GraphQL",
  },
  prisma: {
    icon: SiPrisma,
    color: "bg-[#2d3748] text-white dark:bg-[#2d3748] dark:text-white",
    label: "Prisma",
  },
  nodejs: {
    icon: SiNodedotjs,
    color: "bg-[#339933] text-white dark:bg-[#303030] dark:text-[#8cc84b]",
    label: "Node.js",
  },
  express: {
    icon: SiExpress,
    color: "bg-[#000000] text-white dark:bg-[#000000] dark:text-white",
    label: "Express.js",
  },
  postgresql: {
    icon: SiPostgresql,
    color: "bg-[#336791] text-white dark:bg-[#336791] dark:text-white",
    label: "PostgreSQL",
  },
  mongodb: {
    icon: SiMongodb,
    color: "bg-[#47a248] text-white dark:bg-[#001e2b] dark:text-[#00ed64]",
    label: "MongoDB",
  },
  firebase: {
    icon: SiFirebase,
    color: "bg-[#ffca28] text-[#f57c00] dark:bg-[#f57c00] dark:text-[#ffca28]",
    label: "Firebase",
  },
  git: {
    icon: SiGit,
    color: "bg-[#f05032] text-white dark:bg-[#f05032] dark:text-white",
    label: "Git",
  },
  github: {
    icon: SiGithub,
    color: "bg-[#24292e] text-white dark:bg-[#161b22] dark:text-white",
    label: "GitHub",
  },
  vercel: {
    icon: SiVercel,
    color: "bg-black text-white dark:bg-black dark:text-white",
    label: "Vercel",
  },
  netlify: {
    icon: SiNetlify,
    color: "bg-[#00c7b7] text-white dark:bg-[#0e1e25] dark:text-[#00c7b7]",
    label: "Netlify",
  },
  figma: {
    icon: SiFigma,
    color: "bg-[#f24e1e] text-white dark:bg-[#1e1e1e] dark:text-[#f24e1e]",
    label: "Figma",
  },
  html: {
    icon: SiHtml5,
    color: "bg-[#e34f26] text-white dark:bg-[#e34f26] dark:text-white",
    label: "HTML5",
  },
  css: {
    icon: SiCss3,
    color: "bg-[#1572b6] text-white dark:bg-[#1572b6] dark:text-white",
    label: "CSS3",
  },
  redux: {
    icon: SiRedux,
    color: "bg-[#764abc] text-white dark:bg-[#764abc] dark:text-white",
    label: "Redux",
  },
  docker: {
    icon: SiDocker,
    color: "bg-[#2496ed] text-white dark:bg-[#0b214a] dark:text-[#2496ed]",
    label: "Docker",
  },
  awslambda: {
    icon: SiAwslambda,
    color: "bg-[#ff9900] text-black dark:bg-[#232f3e] dark:text-[#ff9900]",
    label: "AWS Lambda",
  },
  python: {
    icon: SiPython,
    color: "bg-[#3776ab] text-[#ffd43b] dark:bg-[#3776ab] dark:text-[#ffd43b]",
    label: "Python",
  },
  supabase: {
    icon: SiSupabase,
    color: "bg-[#3ecf8e] text-white dark:bg-[#3ecf8e] dark:text-white",
    label: "Supabase",
  },
} satisfies Record<Technology, { icon: IconType; color?: string; label: string }>;

interface TechBadgeProps {
  tech: Technology;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  showLabel?: boolean;
  showbg?: boolean;
  className?: string;
}

export default function TechBadge({
  tech,
  size = "md",
  showLabel = true,
  showbg = true,
  className = "",
}: TechBadgeProps) {
  const { icon: Icon, color, label } = techData[tech];
  
  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1",
    md: "text-sm px-3 py-1.5 gap-1.5",
    lg: "text-base px-4 py-2 gap-2",
    xl: "text-lg px-5 py-2.5 gap-2.5", // New xl size
    xxl: "text-xl px-2 py-3 gap-1" // New xxl size
  };

  const iconSizes = {
    sm: "text-[1.2em]",
    md: "text-[1.4em]",
    lg: "text-[1.5em]",
    xl: "text-[1.6em]",
    xxl: "text-[2.5em]",
  };

  // Base classes all badges will have
  const baseClasses = `inline-flex items-center rounded-md font-medium transition-all ${sizeClasses[size]} ${className}`;
  
  // Conditional color classes based on showbg prop
  const colorClasses = showbg 
    ? color 
    : "bg-transparent text-gray-700";

  return (
    <span
      className={`${baseClasses} ${colorClasses}`}
      role="img"
      aria-label={showLabel ? undefined : `${label} icon`}
    >
      <Icon 
        className={`flex-shrink-0 ${iconSizes[size]} ${!showbg ? "text-gray-800" : ""}`} 
        aria-hidden="true"
      />
      {showLabel && <span>{label}</span>}
    </span>
  );
}