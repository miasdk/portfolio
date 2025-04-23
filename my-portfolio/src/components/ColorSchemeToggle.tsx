import { ColorScheme } from "../types";

interface ColorSchemeToggleProps {
    currentScheme: ColorScheme;
    onChange: (scheme: ColorScheme) => void;
    className?: string;
}

export default function ColorSchemeToggle({
    currentScheme,
    onChange,
    className = "",
}: ColorSchemeToggleProps) {
    return ( 
        <div className={`flex items-center space-x-2 ${className}`}>
            <button 
                onClick={() => onChange('brand')}
                className={`px-3 py-1 rounded text-sm font-medium
                    ${currentScheme === 'brand'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                }`}
            >
                Brand Colors
            </button>
            <button
                onClick={() => onChange('mono')}
                className={`px-3 py-1 rounded text-sm font-medium
                    ${currentScheme === 'mono'
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-200 text-gray-700'
                }`}
            >
                Monochrome
            </button>
            <button
                onClick={() => onChange('minimal')}
                className={`px-3 py-1 rounded text-sm font-medium
                    ${currentScheme === 'minimal'
                        ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                }`}
            >
                Minimal
            </button>
        </div>
 
    )
}