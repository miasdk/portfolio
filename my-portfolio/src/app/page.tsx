import Image from "next/image";
import TechBadge from "../components/TechBadge";
import { projects } from "../config/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
          <TechBadge
            tech="typescript"
            size="sm"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="nextjs"
            size="sm"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="react"
            size="md"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="tailwindcss"
            size="sm"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="vercel"
            size="lg" 
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="docker"
            size="lg"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="awslambda"
            size="lg"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="redux"
            size="lg"
            showLabel={true}
            className="mt-4"
          />
          <TechBadge
            tech="javascript"
            size="lg"
            showLabel={false}
            className="mt-4"
          />
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-2xl font-bold text-center sm:text-left">
            My Portfolio
          </h1>
          <p className="text-sm text-gray-600">
            A collection of my projects and skills.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      </main>
      
    </div>
  );
}
