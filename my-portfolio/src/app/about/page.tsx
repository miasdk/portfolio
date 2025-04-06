import Image from "next/image";
import Link from "next/link";
import { profile } from "../../config/profile";
import { Technology } from "../../types";
import TechBadge from "../../components/TechBadge";
import Mia2 from "../../public/images/mia-about1.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row gap-12 items-start mt-5 mb-16 flex-grow">
        <div className="w-full md:w-2/4 group relative">
          <div className="w-full mx-auto md:max-w-none">
            <Image 
              src={Mia2}
              alt="Mia Tapia"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Hello, I'm Mia 👋
            </h1>
            
            <div className="prose prose-lg dark:prose-invert space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a New York native crafting digital experiences through 
                <span className="font-medium text-gray-900 dark:text-gray-100"> React</span>, 
                <span className="font-medium text-gray-900 dark:text-gray-100"> Next.js</span>, and 
                <span className="font-medium text-gray-900 dark:text-gray-100"> TypeScript</span>.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With 3+ years of experience transforming ideas into functional web applications with a focus on 
                <span className="font-medium text-gray-900 dark:text-gray-100"> intuitive UX, I pride myself in my ability to tackle large, complex problems</span>.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When away from the screen, you'll find me exploring new films or 
                hanging out with my cat. 
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {profile.skills.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech}
                size="md"
                showLabel={false}
                showbg={false}
                className="hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>
      </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
            Coding Activity
          </h2>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://raw.githubusercontent.com/miaskyelena/contribution_snk/output/github-contribution-grid-snake.svg"
              alt="GitHub contribution grid snake animation"
              width={800}
              height={400}
              className="w-full h-auto dark:invert dark:hue-rotate-180"
            />
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            The snake grows with every commit
          </p>
        </div>
    </div>
  );
}