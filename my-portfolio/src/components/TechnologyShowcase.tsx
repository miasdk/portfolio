"use client"

import { useState } from "react"
import TechBadge from "./TechBadge"
import ColorSchemeToggle from "./ColorSchemeToggle"
import { Code, Database, Settings } from "lucide-react"
import type { Technology, ColorScheme } from "../types"

const categories = {
  frontend: {
    title: "Frontend Development",
    description: "Modern tools and frameworks I use to build user interfaces",
    icon: Code,
    gradient: "from-blue-50 to-indigo-50",
    iconGradient: "from-blue-500 to-indigo-600",
    borderHover: "group-hover:border-blue-200",
  },
  backend: {
    title: "Backend & Data",
    description: "Technologies I work with for server-side development",
    icon: Database,
    gradient: "from-emerald-50 to-teal-50",
    iconGradient: "from-emerald-500 to-teal-600",
    borderHover: "group-hover:border-emerald-200",
  },
  infra: {
    title: "DevOps & Infrastructure",
    description: "DevOps and infrastructure tools I leverage for deployment",
    icon: Settings,
    gradient: "from-amber-50 to-orange-50",
    iconGradient: "from-amber-500 to-orange-600",
    borderHover: "group-hover:border-amber-200",
  },
}

interface TechnologyCategories {
  frontend: Technology[]
  backend: Technology[]
  infra: Technology[]
}

export default function TechnologyShowcase() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("mono")

  const techCategories: TechnologyCategories = {
    frontend: ["typescript", "react", "nextjs", "tailwindcss", "figma", "jest", "bootstrap", "swift"],
    backend: ["nodejs", "express", "supabase", "postgresql", "python", "firebase", "mongodb", "cpp", "django"],
    infra: ["git", "github", "vercel", "netlify", "docker", "awslambda", "railway"],
  } 

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
          <ColorSchemeToggle currentScheme={colorScheme} onChange={setColorScheme} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(techCategories).map(([categoryKey, technologies]) => {
          const category = categories[categoryKey as keyof typeof categories]
          const CategoryIcon = category.icon

          return (
            <div
              key={categoryKey}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`flex-shrink-0 p-3 rounded-lg bg-white shadow-sm border border-gray-100 ${category.borderHover} transition-colors duration-300`}
                  >
                    {categoryKey === "frontend" && <CategoryIcon className="w-5 h-5 text-blue-600" />}
                    {categoryKey === "backend" && <CategoryIcon className="w-5 h-5 text-emerald-600" />}
                    {categoryKey === "infra" && <CategoryIcon className="w-5 h-5 text-amber-600" />}
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{category.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200 border-opacity-50">
                    {technologies.map((tech: Technology) => (
                    <TechBadge
                      key={tech}
                      tech={tech}
                      colorScheme={colorScheme}
                      className="hover:scale-105 hover:shadow-sm transition-all duration-300"
                    />
                    ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
