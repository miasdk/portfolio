"use client"

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
import { FileText, Linkedin, ArrowRight, FolderOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const featuredProjects = projects.filter((project) => project.meta?.isFeatured);
  const totalProjects = projects.length;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <motion.div 
            className="relative mb-4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={profile.image || "/default-profile.png"}
              alt={`${profile.name}'s profile picture`}
              width={180}
              height={180}
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {profile.name}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-4 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {profile.title}
          </motion.p>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {profile.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {profile.skills.map((tech: Technology, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              >
                <TechBadge
                  tech={tech}
                  size="md"
                  showLabel={false}
                  showbg={false}
                  className="hover:drop-shadow-xl hover:scale-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.img
            src="https://raw.githubusercontent.com/miaskyelena/contribution_snk/output/github-contribution-grid-snake.svg"
            alt="GitHub Contribution Snake"
            className="mx-auto w-full max-w-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          />
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
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
          </motion.div>
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
                  ? "md:grid-cols-3"
                  : "xl:grid-cols-3";
              
              const gridClasses = projectCount === 3 
                ? "grid-cols-1 md:grid-cols-3"
                : `grid-cols-1 sm:grid-cols-2 ${xlGridClass}`;
              
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
              <span>View All Projects</span>
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
                  highlights: exp.highlights || [],
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
            I'm always looking for new opportunities to collaborate on projects. Feel free to reach out using the form below!
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}