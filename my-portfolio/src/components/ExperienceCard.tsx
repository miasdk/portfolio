import Image from "next/image";
import TechBadge from "./TechBadge";
import { Technology } from "../types";

interface Mertric {
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
        metrics?: Mertric[];
        location: {
            city: string;
            country: string;
        };
    }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const { role, company, period, logo, description, skills, metrics, location } = experience;
    return ( 
        <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-all">
            <header className="flex items-start gap-4 mb-5">
                {logo && (
                    <div className="mt-1 flex-shrink-0">
                        <Image 
                            src={logo}
                            alt=""
                            width={40}
                            height={40}
                            className="rounded"
                            aria-hidden="true"
                        />
                    </div>
                )}

                <div className="flex justify-between items-start w-full">
                    <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                            {role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                            <p className="text-gray-700 text-sm font-medium">
                                {company}
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                            <p className="text-gray-700 text-sm font-medium">
                                {location.city}, {location.country}
                            </p>
                            <span className="text-gray-400">•</span>
                            <p className="text-gray-500 text-sm">
                                {period}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <ul className="space-y-2.5 mb-6">
                {description.map((item, i) => (
                    <li 
                        key={i}
                        className="text-gray-700 text-sm flex items-start"
                    >
                        <span className="mr-2 mt-0.5 text-gray-400">•</span>
                        {item}
                    </li>
                ))}
            </ul>

            {metrics && (
                <div className="mb-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {metrics.map((metric, i) => (
                        <div 
                            key={i}
                            className="p-2 text-center border border-gray-100 rounded"
                        >
                            <p className="text-lg font-medium text-gray-900">
                                {metric.value}
                            </p>
                            <p className="text-xs text-gray-500  mt-1">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
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
                            className="transition-opacity hover:opacity-80"
                        />
                    ))}
                </div>
            </div>
        </article>
    )
}