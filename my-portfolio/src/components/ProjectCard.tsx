import type { Project } from "../types"
import Link from "next/link"
import Image from "next/image"
import TechBadge from "./TechBadge"
import StatusBadge from "./StatusBadge"
import { ArrowUpRight, Calendar, Github, Star, Clock } from "lucide-react"

interface ProjectCardProps {
  project: Project
  className?: string
}

// Helper function to format dates nicely
function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article className={`group relative h-full flex flex-col rounded-xl overflow-hidden bg-white ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300"></div>

      <div className="relative flex flex-col h-full z-10">
        {project.image && (
          <div className="relative h-52 w-full flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.meta?.isFeatured}
            />

            {/* Project status badges */}
            <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 items-end">
              {/* Status Badge */}
              {project.status && (
                <StatusBadge status={project.status} size="sm" />
              )}
              
              {/* Legacy WIP badge (if no status is set) */}
              {project.meta?.isWIP && !project.status && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shadow-sm">
                  In Progress
                </span>
              )}
            </div>

            {/* Quick action buttons that appear on hover */}
            <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
              {project.links?.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white hover:text-black transition-colors shadow-sm"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </Link>
              )}
              {project.links?.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white hover:text-black transition-colors shadow-sm"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                <Link
                  href={project.links?.demo || project.links?.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-2 underline-offset-2 transition-all"
                >
                  {project.title}
                </Link>
              </h3>
            </div>
            
            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>Created {project.date}</span>
              </div>
              
              {project.lastUpdated && (
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>Updated {formatRelativeDate(project.lastUpdated)}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-600 text-sm flex-grow leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.meta?.isOpenSource && (
              <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md font-medium">Open Source</span>
            )}
            {project.meta?.isTeamProject && (
              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md font-medium">
                Team Project
              </span>
            )}
            {project.meta?.isAI && (
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">AI Enhanced</span>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <h4 className="text-xs font-medium text-gray-500 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} size="sm" showLabel={true} showbg={true} showIcon={false} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 pb-5">
          <div className="flex gap-2 mt-4">
            {project.links?.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
              >
                View Demo <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            )}
            {project.links?.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors ${project.links.demo ? "" : "flex-1"}`}
              >
                <Github className="w-3.5 h-3.5 mr-1.5" /> Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}