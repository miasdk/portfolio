import { CheckCircle, Clock, Pause, Archive, Lightbulb } from "lucide-react";

type ProjectStatus = "complete" | "in-progress" | "planning" | "on-hold" | "archived";

interface StatusBadgeProps {
  status: ProjectStatus;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export default function StatusBadge({ status, size = "md", showIcon = true }: StatusBadgeProps) {
  const statusConfig = {
    complete: {
      label: "Complete",
      icon: CheckCircle,
      colors: "bg-green-100 text-green-800 border-green-200",
      iconColor: "text-green-600"
    },
    "in-progress": {
      label: "In Progress",
      icon: Clock,
      colors: "bg-blue-100 text-blue-800 border-blue-200",
      iconColor: "text-blue-600"
    },
    planning: {
      label: "Planning",
      icon: Lightbulb,
      colors: "bg-yellow-100 text-yellow-800 border-yellow-200",
      iconColor: "text-yellow-600"
    },
    "on-hold": {
      label: "On Hold",
      icon: Pause,
      colors: "bg-orange-100 text-orange-800 border-orange-200",
      iconColor: "text-orange-600"
    },
    archived: {
      label: "Archived",
      icon: Archive,
      colors: "bg-gray-100 text-gray-800 border-gray-200",
      iconColor: "text-gray-600"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm"
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 
      ${sizeClasses[size]} 
      ${config.colors} 
      rounded-full font-medium border
      shadow-sm
    `}>
      {showIcon && (
        <Icon 
          size={iconSizes[size]} 
          className={config.iconColor}
        />
      )}
      {config.label}
    </span>
  );
}