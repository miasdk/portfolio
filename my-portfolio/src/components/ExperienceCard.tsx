import Image from "next/image"
import TechBadge from "./TechBadge"
import { Building, MapPin, ChevronRight } from "lucide-react"
import type { Technology } from "../types"

interface Metric {
  value: string
  label: string
}

interface ExperienceCardProps {
  experience: {
    id: string
    role: string
    company: string
    period: string
    logo?: string
    description: string[]
    skills: string[]
    metrics?: Metric[]
    location: {
      city: string
      country: string
    }
  }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { role, company, period, logo, description, skills, metrics, location } = experience

  return (
    <article className="group relative rounded-xl overflow-hidden">
      {/* Card wrapper with enhanced shadow and border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Timeline indicator */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Header section */}
        <header className="p-6 pb-4">
          <div className="flex items-start gap-5">
            {/* Logo or icon */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative flex-shrink-0 p-3 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:border-gray-200 transition-all duration-300">
                {logo ? (
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`${company} logo`}
                    width={40}
                    height={40}
                    className="rounded-md"
                    aria-hidden="true"
                  />
                ) : (
                  <Building className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
              <div>
                <h3 className="font-bold text-gray-900 text-xl group-hover:text-gray-700 transition-colors">{role}</h3>
                <p className="text-gray-700 font-medium mt-1 flex items-center">
                  {company}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-300 mx-2"></span>
                  <span className="text-gray-500 text-sm">{period}</span>
                </p>
              </div>
              <div className="text-left sm:text-right flex flex-col items-start sm:items-end mt-1 sm:mt-0">
                <p className="text-gray-600 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {location.city}, {location.country}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Description section */}
        <div className="px-6 pb-4 pl-16">
          <ul className="space-y-3">
            {description.map((item, i) => (
              <li key={i} className="text-gray-700 text-sm flex items-start leading-relaxed group/item">
                <span className="text-gray-400 mr-2 mt-1 flex-shrink-0 group-hover/item:text-gray-900 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="group-hover/item:text-gray-900 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics section */}
        {metrics && metrics.length > 0 && (
          <div className="px-6 pb-6 pl-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3 text-center bg-white border border-gray-100 rounded-lg shadow-sm group-hover:shadow-md group-hover:border-gray-200 transition-all duration-300 hover:scale-105"
                >
                  <p className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies section */}
        <div className="mt-auto pt-4 px-6 pb-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
          <h4 className="text-xs font-medium text-gray-600 mb-3 flex items-center">
            <span className="inline-block w-8 h-px bg-gray-300 mr-2"></span>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <TechBadge
                key={skill}
                tech={skill as Technology}
                size="sm"
                showLabel={true}
                showbg={true}
                showIcon={false}
                className="transition-all hover:shadow-sm hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
