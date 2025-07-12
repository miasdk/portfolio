'use client';
import { useState } from 'react';
import { projects } from '../config/projects';

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

  const techArray = Object.entries(techCount).map(([tech, count]) => ({
    name: tech,
    count,
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

const TechStackDots = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const techData = generateTechData();

  return (
    <div className="space-y-6">
      {techData.map((tech) => (
        <div
          key={tech.name}
          className={`transition-all duration-300 ${
            hoveredTech === tech.name 
              ? 'transform translate-x-2' 
              : hoveredTech 
                ? 'opacity-50' 
                : 'hover:translate-x-2'
          }`}
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          <div className="flex items-center gap-4">
            <div className="w-24 text-right">
              <span className="text-sm font-medium text-gray-700">
                {formatTechName(tech.name)}
              </span>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: tech.count }, (_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: tech.color,
                    transform: hoveredTech === tech.name ? 'scale(1.2)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">
              {tech.count} project{tech.count > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackDots; 