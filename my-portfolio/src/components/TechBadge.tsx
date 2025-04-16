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

// Define color scheme types for toggle functionality
type ColorScheme = 'brand' | 'mono' | 'minimal';

// Notion-inspired monochromatic color mapping for different tech categories
const monoColorScheme = {
  // Languages & Core Technologies
  primary: "bg-gray-100 text-gray-800 border border-gray-200 shadow-sm",
  // Frontend & UI
  frontend: "bg-gray-50 text-gray-800 border border-gray-200 shadow-sm",
  // Backend & Database
  backend: "bg-white text-gray-800 border border-gray-200 shadow-sm",
  // Infrastructure & DevOps
  infra: "bg-gray-100 text-gray-700 border border-gray-200 shadow-sm",
};

// Modern minimalist color scheme for tech categories
const minimalColorScheme = {
  // Languages & Core Technologies
  primary: "bg-indigo-50 text-indigo-900 border border-indigo-200",
  
  // Frontend & UI
  frontend: "bg-blue-50 text-blue-900 border border-blue-200",
  
  // Backend & Database
  backend: "bg-emerald-50 text-emerald-900 border border-emerald-200",
  
  // Infrastructure & DevOps
  infra: "bg-amber-50 text-amber-900 border border-amber-200",
};

// Technology category mapping for monochromatic and minimal schemes
const techCategories: Record<Technology, keyof typeof monoColorScheme> = {
  typescript: "primary",
  javascript: "primary",
  python: "primary",
  html: "frontend",
  css: "frontend",
  react: "frontend",
  nextjs: "frontend",
  tailwindcss: "frontend",
  redux: "frontend",
  figma: "frontend",
  nodejs: "backend",
  express: "backend",
  graphql: "backend",
  prisma: "backend",
  postgresql: "backend",
  mongodb: "backend",
  firebase: "backend",
  supabase: "backend",
  git: "infra",
  github: "infra",
  vercel: "infra",
  netlify: "infra",
  docker: "infra",
  awslambda: "infra",
};

// Original brand color tech data
const brandTechData = {
  typescript: {
    icon: SiTypescript,
    color: "bg-blue-500 text-white",
    label: "TypeScript",
  },
  javascript: {
    icon: SiJavascript,
    color: "bg-[#f7df1e] text-black",
    label: "JavaScript",
  },
  react: {
    icon: SiReact,
    color: "bg-[#61dafb] text-black",
    label: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    color: "bg-black text-white",
    label: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: "bg-[#06b6d4] text-white",
    label: "Tailwind CSS",
  },
  graphql: {
    icon: SiGraphql,
    color: "bg-[#e10098] text-white",
    label: "GraphQL",
  },
  prisma: {
    icon: SiPrisma,
    color: "bg-[#2d3748] text-white",
    label: "Prisma",
  },
  nodejs: {
    icon: SiNodedotjs,
    color: "bg-[#339933] text-white",
    label: "Node.js",
  },
  express: {
    icon: SiExpress,
    color: "bg-[#000000] text-white",
    label: "Express.js",
  },
  postgresql: {
    icon: SiPostgresql,
    color: "bg-[#336791] text-white",
    label: "PostgreSQL",
  },
  mongodb: {
    icon: SiMongodb,
    color: "bg-[#47a248] text-white",
    label: "MongoDB",
  },
  firebase: {
    icon: SiFirebase,
    color: "bg-[#ffca28] text-[#f57c00]",
    label: "Firebase",
  },
  git: {
    icon: SiGit,
    color: "bg-[#f05032] text-white",
    label: "Git",
  },
  github: {
    icon: SiGithub,
    color: "bg-[#24292e] text-white",
    label: "GitHub",
  },
  vercel: {
    icon: SiVercel,
    color: "bg-black text-white",
    label: "Vercel",
  },
  netlify: {
    icon: SiNetlify,
    color: "bg-[#00c7b7] text-white",
    label: "Netlify",
  },
  figma: {
    icon: SiFigma,
    color: "bg-[#f24e1e] text-white",
    label: "Figma",
  },
  html: {
    icon: SiHtml5,
    color: "bg-[#e34f26] text-white",
    label: "HTML5",
  },
  css: {
    icon: SiCss3,
    color: "bg-[#1572b6] text-white",
    label: "CSS3",
  },
  redux: {
    icon: SiRedux,
    color: "bg-[#764abc] text-white",
    label: "Redux",
  },
  docker: {
    icon: SiDocker,
    color: "bg-[#2496ed] text-white",
    label: "Docker",
  },
  awslambda: {
    icon: SiAwslambda,
    color: "bg-[#ff9900] text-black",
    label: "AWS Lambda",
  },
  python: {
    icon: SiPython,
    color: "bg-[#3776ab] text-[#ffd43b]",
    label: "Python",
  },
  supabase: {
    icon: SiSupabase,
    color: "bg-[#3ecf8e] text-white",
    label: "Supabase",
  },
} satisfies Record<Technology, { icon: IconType; color?: string; label: string }>;

interface TechBadgeProps {
  tech: Technology;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  showLabel?: boolean;
  showbg?: boolean;
  className?: string;
  colorScheme?: ColorScheme;
}

export default function TechBadge({
  tech,
  size = "md",
  showLabel = true,
  showbg = true,
  className = "",
  colorScheme = 'mono', // Default to minimal scheme
}: TechBadgeProps) {
  const { icon: Icon, label } = brandTechData[tech];
  
  // Determine which color scheme to use
  let color = brandTechData[tech].color; // Default to brand color
  
  if (colorScheme === 'mono') {
    color = monoColorScheme[techCategories[tech]];
  } else if (colorScheme === 'minimal') {
    color = minimalColorScheme[techCategories[tech]];
  }
  
  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1",
    md: "text-sm px-3 py-1.5 gap-1.5",
    lg: "text-base px-4 py-2 gap-2",
    xl: "text-lg px-5 py-2.5 gap-2.5",
    xxl: "text-xl px-2 py-3 gap-1"
  };

  const iconSizes = {
    sm: "text-[1.2em]",
    md: "text-[1.4em]",
    lg: "text-[1.5em]",
    xl: "text-[1.6em]",
    xxl: "text-[2.5em]",
  };

  // Rounded styles based on color scheme
  const roundedStyles = colorScheme === 'mono' 
    ? "rounded-lg" // More rounded for Notion-like feel
    : "rounded-md";

  // Base classes all badges will have
  const baseClasses = `inline-flex items-center font-medium transition-all ${roundedStyles} ${sizeClasses[size]} ${className}`;
  
  // Conditional color classes based on showbg prop
  const colorClasses = showbg 
    ? color 
    : "bg-transparent text-gray-700";

  // Icon color class
  let iconColorClass = "";
  if (!showbg) {
    if (colorScheme === 'mono') {
      iconColorClass = "text-gray-600"; // Notion-like icon color
    } else if (colorScheme === 'minimal') {
      iconColorClass = "text-slate-700";
    }
  }

  // Add hover effect for mono scheme
  const hoverEffect = colorScheme === 'mono' 
    ? "hover:bg-gray-200 hover:border-gray-300 transition-colors" 
    : "";

  return (
    <span
      className={`${baseClasses} ${colorClasses} ${hoverEffect}`}
      role="img"
      aria-label={showLabel ? undefined : `${label} icon`}
    >
      <Icon 
        className={`flex-shrink-0 ${iconSizes[size]} ${iconColorClass}`} 
        aria-hidden="true"
      />
      {showLabel && <span>{label}</span>}
    </span>
  );
}

// Optional Toggle Component for Color Scheme Switching
interface ColorSchemeToggleProps {
  currentScheme: ColorScheme;
  onChange: (scheme: ColorScheme) => void;
  className?: string;
}

export function ColorSchemeToggle({
  currentScheme,
  onChange,
  className = "",
}: ColorSchemeToggleProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => onChange('brand')}
        className={`px-3 py-1 rounded text-sm font-medium ${
          currentScheme === 'brand' 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        Brand Colors
      </button>
      <button
        onClick={() => onChange('mono')}
        className={`px-3 py-1 rounded text-sm font-medium ${
          currentScheme === 'mono' 
            ? 'bg-gray-800 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        Notion Style
      </button>
      <button
        onClick={() => onChange('minimal')}
        className={`px-3 py-1 rounded text-sm font-medium ${
          currentScheme === 'minimal' 
            ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        Minimal
      </button>
    </div>
  );
}

// Example component showing usage of both the TechBadge and ColorSchemeToggle
export function TechBadgeShowcase() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('minimal');
  
  const technologies: Technology[] = [
    'typescript', 'react', 'nextjs', 'tailwindcss', 
    'nodejs', 'prisma', 'postgresql'
  ];
  
  return (
    <div className="space-y-6">
      <ColorSchemeToggle 
        currentScheme={colorScheme} 
        onChange={setColorScheme} 
      />
      
      <div className="flex flex-wrap gap-2">
        {technologies.map(tech => (
          <TechBadge 
            key={tech} 
            tech={tech} 
            colorScheme={colorScheme} 
          />
        ))}
      </div>
    </div>
  );
}