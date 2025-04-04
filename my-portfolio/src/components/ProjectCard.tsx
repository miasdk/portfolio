import { Project } from "../types";
import Link from "next/link";
import Image from "next/image";
import TechBadge from "./TechBadge";
import { FaGithub, FaCode, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = " "}: ProjectCardProps) {
    return (
        <article className={`group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
            {project.image && (
                <div className="relative h-48 w-full">
                    {project.platforms && (
                        <div className="absolute top-2 left-2 flex gap-2">
                            {project.platforms.map((platform) => (
                                <span
                                    key={platform}
                                    className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full"
                                >
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </span>
                            ))}
                        </div>
                    )}
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={project.meta?.isFeatured} 
                    />
                </div>
            )}

            <div className="p-6">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link href={project.links?.demo || "#"} target="_blank" rel="noopener noreferrer">
                            {project.title}
                        </Link>
                    </h3>
                    {project.meta?.isWIP && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            In Progress
                        </span>
                    )}
                </div>

                <p className="mt-2 text-gray-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <TechBadge
                            key={tech}
                            tech={tech}
                            size="sm"
                            showLabel={true}
                            className="transition-opacity hover:opacity-80"
                        />
                    ))}
                </div>

                {project.links && (
                    <div className="mt-4 flex flex-wrap gap-3">
                        {project.links.github && (
                            <Link 
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium hover:underline"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <FaGithub className="mr-1" />
                                GitHub
                            </Link>
                        )}
                        {project.links.demo && (
                            <Link 
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium hover:underline"
                                aria-label={`View ${project.title} live demo`}
                            >
                                <FaExternalLinkAlt className="mr-1" />
                                 Demo
                            </Link>
                        )}
                    </div>
                )}

                    <p className="mt-4 text-sm text-gray-500"> 
                        {project.date}
                        {project.meta?.isOpenSource && (
                            <span className="ml-2 inline-flex items-center text-green-600">
                                
                                Open Source
                            </span>

                        )}
                        {project.meta?.isTeamProject && (
                            <span className="ml-2 inline-flex items-center text-blue-600">
                                Team Project
                            </span>
                        )}
                    </p>
            </div>
        </article>
    );
}