import Image from "next/image";
import Link from "next/link";
import { profile } from "../../config/profile";
import { Technology } from "../../types";
import TechBadge from "../../components/TechBadge";
import Mia2 from "../../public/images/mia-about1.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
        <div className="w-full md:w-5/12 group relative">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src={Mia2}
                alt="Mia Tapia"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full rounded-lg shadow-lg transition-all duration-300 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Hello, I'm Mia 👋
            </h1>
            
            <div className="prose prose-lg space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I'm a New York native crafting digital experiences through 
                <span className="font-medium text-gray-900"> React</span>, 
                <span className="font-medium text-gray-900"> Next.js</span>, and 
                <span className="font-medium text-gray-900"> TypeScript</span>.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With 3+ years of experience transforming ideas into functional web applications with a focus on 
                <span className="font-medium text-gray-900"> intuitive UX, I pride myself in my ability to tackle large, complex problems</span>.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                When away from the screen, you'll find me exploring new films or 
                hanging out with my cat.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              My Technologies
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {profile.skills.map((tech) => (
                <div key={tech} className="flex justify-center">
                  <TechBadge
                    tech={tech}
                    size="xl"
                    showLabel={false}
                    showbg={false}
                    className="hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mt-12 pt-12 border-t border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">GitHub Activity</h2>
          <Link 
            href={profile.links?.github || "https://github.com"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
          >
            View Profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://raw.githubusercontent.com/miaskyelena/contribution_snk/output/github-contribution-grid-snake.svg"
              alt="GitHub contribution grid snake animation"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            The snake grows with every commit I make to GitHub
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              What I'm Learning
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                TypeScript advanced patterns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Python for data science
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                AI integration with web applications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Advanced data structures and algorithms
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              When I'm Not Coding
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Exploring coffee shops around the city
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Watching a good film
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Hanging out with my cat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}