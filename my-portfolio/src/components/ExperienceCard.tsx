import Image from "next/image";
import TechBadge from "./TechBadge";
import { Technology } from "../types";

interface Metric {
    value: string; 
    label: string;
}

interface ExperienceCardProps {
    experience: {
        id: string;
        role: string;
        company: string;
        period: string;
        logo?: string;
        description: string[];
        skills: string[];
        metrics?: Metric[];
        location: {
            city: string;
            country: string;
        };
    }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const { role, company, period, logo, description, skills, metrics, location } = experience;
    return ( 
        <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
            <header className="flex items-start gap-4 mb-6">
                {logo && (
                    <div className="flex-shrink-0">
                        <Image 
                            src={logo}
                            alt={`${company} logo`}
                            width={48}
                            height={48}
                            className="rounded-md"
                            aria-hidden="true"
                        />
                    </div>
                )}

                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
                    <div>
                        <h3 className="font-medium text-gray-900 text-lg">
                            {role}
                        </h3>
                        <p className="text-gray-700 text-sm font-medium mt-1">
                            {company}
                        </p>
                    </div>
                    <div className="text-right sm:text-right flex flex-col items-start sm:items-end">
                        <p className="text-gray-700 text-sm">
                            {location.city}, {location.country}
                        </p>
                        <p className="text-gray-500 text-sm">
                            {period}
                        </p>
                    </div>
                </div>
            </header>
            
            <ul className="space-y-3 mb-6">
                {description.map((item, i) => (
                    <li 
                        key={i}
                        className="text-gray-700 text-sm flex items-start leading-relaxed"
                    >
                        <span className="text-blue-500 mr-2 mt-1 text-xs">■</span>
                        {item}
                    </li>
                ))}
            </ul>

            {metrics && metrics.length > 0 && (
                <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {metrics.map((metric, i) => (
                        <div 
                            key={i}
                            className="p-3 text-center border border-gray-100 rounded-md bg-gray-50"
                        >
                            <p className="text-lg font-medium text-gray-900">
                                {metric.value}
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            <div className="pt-4 border-t border-gray-200 bg-gray-50 -mx-6 mt-2 px-6 py-4 rounded-b-lg">
                <h4 className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">
                    Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <TechBadge
                            key={skill}
                            tech={skill as Technology}
                            size="sm"
                            showLabel={true}
                            showbg={false}
                            className="transition-all hover:shadow-sm"
                        />
                    ))}
                </div>
            </div>
        </article>
    )
}