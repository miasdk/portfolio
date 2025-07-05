import Image from "next/image"
import Link from "next/link"
import TechBadge from "../components/TechBadge"
import { projects } from "../config/projects"
import { profile } from "../config/profile"
import { experience } from "../config/experience"
import type { Technology } from "../types"
import ProjectCard from "../components/ProjectCard"
import ExperienceCard from "../components/ExperienceCard"
import ContactForm from "../components/ContactForm"
import TechnologyShowcase from "../components/TechnologyShowcase"
import { ArrowDown, FileText, Linkedin, ArrowRight, FolderOpen } from "lucide-react"

export default function Home() {
  const featuredProjects = projects.filter((project) => project.meta?.isFeatured);
  const totalProjects = projects.length;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <div className="relative mb-4">
            <Image
              src={profile.image || "/default-profile.png"}
              alt={`${profile.name}'s profile picture`}
              width={180}
              height={180}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center">{profile.name}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">{profile.title}</p>
          <p className="text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mb-8">{profile.description}</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {profile.skills.map((tech: Technology) => (
              <TechBadge
                key={tech}
                tech={tech}
                size="md"
                showLabel={false}
                showbg={false}
                className="hover:drop-shadow-xl hover:scale-110 transition-all duration-300"
              />
            ))}
          </div>
          
          <img
            src="https://raw.githubusercontent.com/miaskyelena/contribution_snk/output/github-contribution-grid-snake.svg"
            alt="GitHub Contribution Snake"
            className="mx-auto w-full max-w-lg mb-8"
          />
          
          <div className="flex gap-4">
            <a
              href={profile.links?.resume || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 group"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </a>
            <a
              href={profile.links?.linkedIn || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      <section id="projects" className="py-16 px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-3"></div>
          </div>
          
          <div className="mx-auto max-w-screen-xl">
            {(() => {
              const projectCount = featuredProjects.length;
              
              const xlGridClass = projectCount >= 4 && projectCount % 4 === 0 
                ? "xl:grid-cols-4" 
                : projectCount === 3 
                  ? "md:grid-cols-3"  // 3 columns from md+ for exactly 3 projects
                  : "xl:grid-cols-3";
              
              // For 3 projects, use 1 column on small, 3 columns on md+
              const gridClasses = projectCount === 3 
                ? "grid-cols-1 md:grid-cols-3"
                : `grid-cols-1 sm:grid-cols-2 ${xlGridClass}`;
              
              // Only apply 2+1 logic when we're using 2-column grid (not for 3 projects)
              const shouldSpanLast = projectCount !== 3;
              
              return (
                <div className={`grid ${gridClasses} gap-6 mb-10`}>
                  {featuredProjects.map((project, index, array) => (
                    <div
                      key={project.id}
                      className={`${
                        shouldSpanLast && index === array.length - 1 && array.length % 2 !== 0
                          ? "sm:col-span-2 lg:col-span-1"
                          : ""
                      }`}
                    >
                      <ProjectCard 
                        project={project} 
                        variant="grid"
                      />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group"
            >
              <FolderOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>View All  Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-12"></div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {experience.map((exp) => (
              <ExperienceCard
                key={exp.id}
                experience={{
                  ...exp,
                  logo: typeof exp.logo === "object" ? exp.logo.src : exp.logo,
                  location: {
                    city: exp.location?.city || "Unknown",
                    country: exp.location?.country || "Unknown",
                  },
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Technologies</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-12"></div>

          <div className="max-w-5xl mx-auto">
            <TechnologyShowcase />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Contact Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>

          <p className="text-center mb-10 text-gray-700 max-w-2xl mx-auto">
          Questions, collaboration ideas, or just saying hi? I'd love to hear from you 🤗 
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

     
    </main>
  )
}