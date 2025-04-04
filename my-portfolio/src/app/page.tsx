import Image from "next/image";
import TechBadge from "../components/TechBadge";
import { projects } from "../config/projects";
import { profile } from "../config/profile";
import { Technology } from "../types";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 p-5">
      <header className="text-center mb-10">
        <Image
          src={profile.image}
          alt={`${profile.name}'s profile picture`}
          width={150}
          height={150}
          className="rounded mx-auto mb-4 p-1"
        />
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-lg text-gray-600">{profile.title}</p>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">{profile.description}</p>
  
        <div className="mt-6">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition-colors"
          >
            Resume
          </a>
          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-white-600 text-black rounded-lg shadow-lg hover:bg-lightgray-700 transition-colors ml-4"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="mb-12 mt-5 px-10">
        <h2 className="text-center text-2xl font-semibold mb-4">Projects </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
  
    </main>


    
  );
}
