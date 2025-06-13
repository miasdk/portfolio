import { Technology } from "../types";
import { motion } from "framer-motion";

interface SkillLevel {
  technology: Technology;
  level: number; // 0-100
  yearsOfExperience: number;
  projects: number;
}

interface SkillsProgressProps {
  skills: SkillLevel[];
}

export default function SkillsProgress({ skills }: SkillsProgressProps) {
  return (
    <div className="space-y-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.technology}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium text-gray-900">
                {skill.technology}
              </span>
              <span className="text-sm text-gray-500">
                {skill.yearsOfExperience} years
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {skill.projects} projects
            </span>
          </div>
          
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"
            />
          </div>
          
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
            <span>Expert</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 