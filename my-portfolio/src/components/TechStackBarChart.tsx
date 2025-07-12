'use client';
import { useState } from 'react';
import { projects } from '../config/projects';

// Same data generation logic as pie chart
const techColors: Record<string, string> = {
  react: '#61dafb',
  typescript: '#3178c6',
  nextjs: '#000000',
  python: '#3776ab',
  django: '#092e20',
  postgresql: '#336791',
  nodejs: '#339933',
  tailwindcss: '#06b6d4',
  javascript: '#f7df1e',
  express: '#000000',
  firebase: '#ffca28',
  docker: '#2496ed',
  fastapi: '#009688',
  mongodb: '#47a248',
  git: '#f05032',
  github: '#24292e',
  vercel: '#000000',
  aws: '#ff9900',
};

const generateTechData = () => {
  const techCount: Record<string, number> = {};
  
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });

  const totalCount = Object.values(techCount).reduce((sum, count) => sum + count, 0);
  const techArray = Object.entries(techCount).map(([tech, count]) => ({
    name: tech,
    count,
    percentage: (count / totalCount) * 100,
    color: techColors[tech] || '#6B7280'
  }));

  return techArray.sort((a, b) => b.count - a.count);
};

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

const TechStackBarChart = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const techData = generateTechData();
  const maxCount = Math.max(...techData.map(t => t.count));

  return (
    <div className="space-y-4">
      {techData.map((tech) => (
        <div
          key={tech.name}
          className={`transition-all duration-300 ${
            hoveredTech === tech.name 
              ? 'transform scale-105' 
              : hoveredTech 
                ? 'opacity-50' 
                : 'hover:scale-105'
          }`}
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              {formatTechName(tech.name)}
            </span>
            <span className="text-xs text-gray-500">
              {tech.count} project{tech.count > 1 ? 's' : ''}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(tech.count / maxCount) * 100}%`,
                backgroundColor: tech.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackBarChart; 