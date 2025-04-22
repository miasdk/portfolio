import { Project } from "../types";
import Link from "next/link";
import Image from "next/image";
import TechBadge from "./TechBadge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
    return (
        <article className={`group h-full flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white ${className}`}>
            {project.image && (
                <div className="relative h-52 w-full flex-shrink-0 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={project.meta?.isFeatured}
                    />
                    {project.meta?.isWIP && (
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            In Progress
                        </span>
                    )}
                </div>
            )}

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium text-gray-900">
                        <Link 
                            href={project.links?.demo || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                        >
                            {project.title}
                        </Link>
                    </h3>
                    
                    {project.links?.github && (
                        <Link 
                            href={project.links.github}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-800 transition-colors"
                            aria-label={`View ${project.title} source code on GitHub`}
                        >
                            <FaGithub size={18} />
                        </Link>
                    )}
                </div>

                <p className="text-gray-600 text-sm flex-grow">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                        <TechBadge
                            key={tech}
                            tech={tech}
                            size="sm"
                            showLabel={true}
                            showbg={true}
                        />
                    ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{project.date}</span>
                        
                        <div className="flex gap-2">
                            {project.meta?.isOpenSource && (
                                <span className="text-xs text-gray-600">Open Source</span>
                            )}
                            
                            {project.meta?.isTeamProject && (
                                <span className="text-xs text-gray-600">Team Project</span>
                            )}
                            
                            {project.meta?.isAI && (
                                <span className="text-xs text-gray-600">AI Enhanced</span>
                            )}
                        </div>
                    </div>
                    
                    {project.links?.demo && (
                        <Link 
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800 flex items-center transition-colors "
                        >
                            Demo<FaExternalLinkAlt size={12} className="ml-1.5" />
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}