import Image from "next/image";
import TechBadge from "../components/TechBadge";
import Link from "next/link";
import { projects } from "../config/projects";
import { profile } from "../config/profile";
import { experience } from "../config/experience";
import { Technology } from "../types";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 p-5">
      <header className="text-center mb-12">
        <Image
          src={profile.image || "/default-profile.png"}
          alt={`${profile.name}'s profile picture`}
          width={150}
          height={150}
          className="rounded mx-auto mb-4 p-1"
        />
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-lg text-gray-600">{profile.title}</p>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">{profile.description}</p>
        <div className="mt-6">
          <div className="flex flex-wrap justify-center">
            {profile.skills.map((tech: Technology) => (
              <TechBadge key={tech} tech={tech} size="xl" showLabel={false} showbg={false} className="hover:drop-shadow-xl hover:scale-110 transition-transform"/>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <a
            href={profile.links?.resume || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition-colors"
          >
            Resume
          </a>
          <a
            href={profile.links?.linkedIn || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-white-600 text-black rounded-lg shadow-lg hover:bg-lightgray-700 transition-colors ml-4"
          >
            LinkedIn
          </a>
        </div>
      </header>
     
      <section id="projects" className="mb-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
        <div className="mx-auto max-w-screen-xl">
        <div 
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            alignItems: "stretch",
          }}
        >
          {projects.map(project => (
            <div key={project.id} className="max-w-[400px] w-full mx-auto">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="experience" className="mb-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
        <div className="grid gap-6 max-w-screen-xl mx-auto">
          {experience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={{
                ...exp,
                location: {
                  city: exp.location?.city || "Unknown",
                  country: exp.location?.country || "Unknown",
                },
              }}
            />
          ))}
        </div>
      </section>

      
      <section id="contact" className="mb-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="max-w-screen-xl mx-auto">
        <p className="text-center mb-4 text-gray-700">
          I would love to hear from you! Please contact me using the form below! 
        </p>
        <ContactForm />
        </div>
      </section>

      
     

      
    </main>
  );
}
