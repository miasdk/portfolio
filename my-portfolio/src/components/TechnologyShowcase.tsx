'use client';
import { useState } from "react";
import TechBadge from "./TechBadge";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { Technology, ColorScheme } from "../types";

// Category icons and colors
const categoryStyles = {
  frontend: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2H4v2h12V5zM4 13V9h12v4H4z" clipRule="evenodd" />
      </svg>
    ),
    iconColor: "text-blue-600",
  },
  backend: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
    iconColor: "text-emerald-600",
  },
  infra: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    iconColor: "text-amber-600",
  }
};

// Category descriptions
const categoryDescriptions = {
  frontend: "Tools and frameworks I use to build user interfaces",
  backend: "Technologies I work with for server-side development",
  infra: "DevOps and infrastructure tools I leverage for deployment"
};

// Display names for categories
const categoryDisplayNames = {
  frontend: "Frontend Development",
  backend: "Backend & Data",
  infra: "DevOps & Infrastructure"
};

interface TechnologyCategories {
  frontend: Technology[];
  backend: Technology[];
  infra: Technology[];
}

export default function TechnologyShowcase() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("brand");
  
  const techCategories: TechnologyCategories = {
    frontend: [
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
    ],
    backend: [
      "nodejs",
      "express",
      "supabase",
      "prisma",
      "mongodb",
      "postgresql",
    ],
    infra: [
      "git",
      "github",
      "vercel",
      "netlify",
      "docker",
      "awslambda",
    ],
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-6">
        <ColorSchemeToggle
          currentScheme={colorScheme}
          onChange={setColorScheme}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(techCategories).map(([category, technologies]) => {
          const categoryKey = category as keyof typeof categoryStyles;
          const styles = categoryStyles[categoryKey];
          
          return (
            <div 
              key={category} 
              className={`space-y-4 rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md`}
            >
              <div className="flex items-center">
                <span className={`p-2 rounded-lg mr-3 ${styles.iconColor} bg-white shadow-sm`}>
                  {styles.icon}
                </span>
                <div>
                  <h2 className={`text-lg font-semibold`}>
                    {categoryDisplayNames[categoryKey]}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {categoryDescriptions[categoryKey]}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech) => (
                  <TechBadge 
                    key={tech} 
                    tech={tech} 
                    colorScheme={colorScheme}
                    className="hover:scale-105 transition-transform" 
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}