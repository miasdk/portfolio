import Image from "next/image"
import TechBadge from "../components/TechBadge"
import { projects } from "../config/projects"
import { profile } from "../config/profile"
import { experience } from "../config/experience"
import type { Technology } from "../types"
import ProjectCard from "../components/ProjectCard"
import ExperienceCard from "../components/ExperienceCard"
import ContactForm from "../components/ContactForm"
import TechnologyShowcase from "../components/TechnologyShowcase"
import { ArrowDown, FileText, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            <Image
              src={profile.image || "/default-profile.png"}
              alt={`${profile.name}'s profile picture`}
              width={180}
              height={180}
              className="rounded-full object-cover relative border-4 border-white"
              priority
            />
          </div>
          

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">{profile.name}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">{profile.title}</p>
          <p className="text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mb-2">{profile.description}</p>
          
          <img
          src="https://raw.githubusercontent.com/miaskyelena/contribution_snk/output/github-contribution-grid-snake.svg"
          alt="GitHub Contribution Snake"
          className="mx-auto w-full max-w-lg mb-2 "
          />
           <div className="flex flex-wrap justify-center gap-3 mb-10">
            {profile.skills.map((tech: Technology) => (
              <TechBadge
                key={tech}
                tech={tech}
                size="xl"
                showLabel={false}
                showbg={false}
                className="hover:drop-shadow-xl hover:scale-110 transition-all duration-300"
              />
            ))}
          </div>
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

      <section id="projects" className="py-20 px-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-12"></div>
          
          <div className="mx-auto max-w-screen-xl">
            {(() => {
              const featuredProjects = projects.filter((project) => project.meta?.isFeatured);
              const projectCount = featuredProjects.length;
              
              // Determine the appropriate grid class based on project count
              const xlGridClass = projectCount >= 4 && projectCount % 4 === 0 
                ? "xl:grid-cols-4" 
                : "xl:grid-cols-3";
              
              return (
                <div className={`grid grid-cols-1 sm:grid-cols-2  ${xlGridClass} gap-6`}>
                  {featuredProjects.map((project, index, array) => (
                    <div
                      key={project.id}
                      className={`${
                        // If it's the last project and the total number of projects is odd
                        index === array.length - 1 && array.length % 2 !== 0
                          ? "sm:col-span-2 lg:col-span-1"
                          : ""
                      }`}
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              );
            })()}
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
