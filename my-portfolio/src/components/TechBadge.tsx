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
} from 'react-icons/si';
import { Technology } from '../types';


const techData = {
  typescript: {
    icon: SiTypescript,
    color: "bg-blue-600 text-white dark:bg-blue-800 dark:text-blue-100",
    label: "TypeScript",
  },
  javascript: {
    icon: SiJavascript,
    color: "bg-yellow-400 text-gray-800 dark:bg-yellow-600 dark:text-white",
    label: "JavaScript",
  },
  react: {
    icon: SiReact,
    color: "bg-cyan-500 text-white dark:bg-cyan-700 dark:text-cyan-100",
    label: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    color: "bg-black text-white dark:bg-white dark:text-black",
    label: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: "bg-sky-500 text-white dark:bg-sky-700 dark:text-sky-100",
    label: "Tailwind CSS",
  },
  graphql: {
    icon: SiGraphql,
    color: "bg-pink-600 text-white dark:bg-pink-800 dark:text-pink-100",
    label: "GraphQL",
  },
  prisma: {
    icon: SiPrisma,
    color: "bg-gray-700 text-white dark:bg-gray-500 dark:text-gray-100",
    label: "Prisma",
  },
  nodejs: {
    icon: SiNodedotjs,
    color: "bg-green-600 text-white dark:bg-green-800 dark:text-green-100",
    label: "Node.js",
  },
  express: {
    icon: SiExpress,
    color: "bg-gray-800 text-white dark:bg-gray-600 dark:text-gray-100",
    label: "Express.js",
  },
  postgresql: {
    icon: SiPostgresql,
    color: "bg-blue-700 text-white dark:bg-blue-900 dark:text-blue-100",
    label: "PostgreSQL",
  },
  mongodb: {
    icon: SiMongodb,
    color: "bg-green-500 text-white dark:bg-green-700 dark:text-green-100",
    label: "MongoDB",
  },
  firebase: {
    icon: SiFirebase,
    color: "bg-amber-500 text-white dark:bg-amber-700 dark:text-amber-100",
    label: "Firebase",
  },
  git: {
    icon: SiGit,
    color: "bg-orange-600 text-white dark:bg-orange-800 dark:text-orange-100",
    label: "Git",
  },
  github: {
    icon: SiGithub,
    color: "bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-100",
    label: "GitHub",
  },
  vercel: {
    icon: SiVercel,
    color: "bg-black text-white dark:bg-white dark:text-black",
    label: "Vercel",
  },
  netlify: {
    icon: SiNetlify,
    color: "bg-emerald-500 text-white dark:bg-emerald-700 dark:text-emerald-100",
    label: "Netlify",
  },
  figma: {
    icon: SiFigma,
    color: "bg-orange-500 text-white dark:bg-orange-700 dark:text-orange-100",
    label: "Figma",
  },
  html: {
    icon: SiHtml5,
    color: "bg-orange-600 text-white dark:bg-orange-800 dark:text-orange-100",
    label: "HTML5",
  },
  css: {
    icon: SiCss3,
    color: "bg-blue-500 text-white dark:bg-blue-700 dark:text-blue-100",
    label: "CSS3",
  },
  redux: {
    icon: SiRedux,
    color: "bg-purple-600 text-white dark:bg-purple-800 dark:text-purple-100",
    label: "Redux",
  },
  docker: {
    icon: SiDocker,
    color: "bg-blue-500 text-white dark:bg-blue-700 dark:text-blue-100",
    label: "Docker",
  },
  awslambda: {
    icon: SiAwslambda,
    color: "bg-amber-500 text-black dark:bg-amber-400 dark:text-gray-900",
    label: "AWS Lambda",
  },
} satisfies Record<Technology, { icon: IconType; color: string; label: string }>;

interface TechBadgeProps {
  tech: Technology;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export default function TechBadge({
  tech,
  size = "md",
  showLabel = true,
  className = "",
}: TechBadgeProps) {
  const { icon: Icon, color, label } = techData[tech];
  
  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1",
    md: "text-sm px-3 py-1.5 gap-1.5", 
    lg: "text-base px-4 py-2 gap-2",
  };

  const iconSizes = {
    sm: "text-[0.8em]",
    md: "text-[1em]",
    lg: "text-[1.2em]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-all ${color} ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label={showLabel ? undefined : `${label} icon`}
    >
      <Icon 
        className={`flex-shrink-0 ${iconSizes[size]}`} 
        aria-hidden="true"
      />
      {showLabel && <span>{label}</span>}
    </span>
  );
}