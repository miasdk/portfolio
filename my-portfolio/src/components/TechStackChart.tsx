'use client';
import { useState } from 'react';
import { projects } from '../config/projects';
import { Technology } from '../types';
import {
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiPython,
  SiDjango
} from 'react-icons/si';

interface TechData {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

// Harmonious color palette inspired by brand colors but cohesive
const techColors: Record<string, string> = {
  react: '#3B82F6',     // Blue - inspired by React
  typescript: '#1E40AF', // Dark blue - TypeScript
  nextjs: '#1F2937',    // Dark gray - Next.js
  python: '#059669',    // Green - Python
  django: '#065F46',    // Dark green - Django
  postgresql: '#0369A1', // Blue - PostgreSQL
  nodejs: '#16A34A',    // Green - Node.js
  tailwindcss: '#0891B2', // Cyan - Tailwind
  javascript: '#F59E0B', // Amber - JavaScript
  express: '#374151',   // Gray - Express
  firebase: '#EA580C',  // Orange - Firebase
  docker: '#2563EB',    // Blue - Docker
  fastapi: '#10B981',   // Emerald - FastAPI
  mongodb: '#16A34A',   // Green - MongoDB
  git: '#DC2626',       // Red - Git
  github: '#1F2937',    // Dark gray - GitHub
  vercel: '#000000',    // Black - Vercel
  aws: '#F59E0B',       // Amber - AWS
};

// Technology icon mapping
const techIcons: Record<string, any> = {
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  python: SiPython,
  django: SiDjango,
  postgresql: SiPostgresql,
  nodejs: SiNodedotjs,
  tailwindcss: SiTailwindcss,
  javascript: SiJavascript,
  express: SiExpress,
  firebase: SiFirebase,
  docker: SiDocker,
};

// Generate tech stack data from projects
const generateTechData = (): TechData[] => {
  const techCount: Record<string, number> = {};
  
  // Count technology usage across all projects
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });

  // Convert to array and calculate percentages
  const totalCount = Object.values(techCount).reduce((sum, count) => sum + count, 0);
  const techArray = Object.entries(techCount).map(([tech, count]) => ({
    name: tech,
    count,
    percentage: (count / totalCount) * 100
  }));

  // Sort by usage and show ALL technologies
  const sortedTech = techArray.sort((a, b) => b.count - a.count);



  return sortedTech.map((tech) => ({
    ...tech,
    color: techColors[tech.name] || '#6B7280' // fallback to gray
  }));
};

const TechStackChart = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const techData = generateTechData();
  
  // SVG dimensions
  const size = 360;
  const center = size / 2;
  const radius = 140;
  
  // Calculate pie slices
  let cumulativePercentage = 0;
  const slices = techData.map(tech => {
    const startAngle = cumulativePercentage * 3.6; // Convert percentage to degrees
    const endAngle = (cumulativePercentage + tech.percentage) * 3.6;
    cumulativePercentage += tech.percentage;
    
    // Calculate path for SVG arc
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);
    
    const x1 = center + radius * Math.cos(startAngleRad);
    const y1 = center + radius * Math.sin(startAngleRad);
    const x2 = center + radius * Math.cos(endAngleRad);
    const y2 = center + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    const pathData = [
      `M ${center} ${center}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
    
    return {
      ...tech,
      pathData,
      startAngle,
      endAngle
    };
  });

  // Capitalize tech names for display
  const formatTechName = (tech: string): string => {
    const nameMap: Record<string, string> = {
      'react': 'React',
      'typescript': 'TypeScript',
      'nextjs': 'Next.js',
      'python': 'Python',
      'django': 'Django',
      'postgresql': 'PostgreSQL',
      'nodejs': 'Node.js',
      'tailwindcss': 'Tailwind CSS',
      'javascript': 'JavaScript',
      'express': 'Express.js',
      'firebase': 'Firebase',
      'docker': 'Docker'
    };
    return nameMap[tech] || tech.charAt(0).toUpperCase() + tech.slice(1);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
      {/* Chart */}
      <div className="relative flex-shrink-0">
        <svg width={size} height={size} className="drop-shadow-sm">
          {slices.map((slice, index) => (
            <path
              key={slice.name}
              d={slice.pathData}
              fill={slice.color}
              stroke="#ffffff"
              strokeWidth="2"
              className={`transition-all duration-300 cursor-pointer ${
                hoveredTech === slice.name 
                  ? 'opacity-100' 
                  : hoveredTech 
                    ? 'opacity-50' 
                    : 'opacity-90 hover:opacity-100'
              }`}
              style={{
                filter: hoveredTech === slice.name ? 'brightness(1.1)' : 'none',
              }}
              onMouseEnter={() => setHoveredTech(slice.name)}
              onMouseLeave={() => setHoveredTech(null)}
            />
          ))}
        </svg>
        
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-gray-900">
              {projects.length}
            </div>
            <div className="text-base font-medium text-gray-600">
              Projects
            </div>
          </div>
        </div>
      </div>

      {/* Technology List */}
      <div className="w-full lg:flex-1 max-w-md lg:max-w-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          {techData.map((tech) => {
            const IconComponent = techIcons[tech.name];
            return (
              <div
                key={tech.name}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  hoveredTech === tech.name 
                    ? 'bg-gray-50 transform scale-105' 
                    : hoveredTech 
                      ? 'opacity-50' 
                      : 'hover:bg-gray-50 hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="flex items-center gap-3">
                  {IconComponent ? (
                    <IconComponent 
                      className="w-4 h-4" 
                      style={{ color: tech.color }}
                    />
                  ) : (
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {formatTechName(tech.name)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {tech.percentage.toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackChart; 