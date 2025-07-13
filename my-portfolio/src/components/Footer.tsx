import { profile } from "../config/profile";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ViewCounter from "./ViewCounter";

export default function Footer() {
    const currentYear = 2025; 
    
    return (
        <footer className="py-8 bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-sm">
                    <p>
                        Made with <FaHeart className="inline text-red-500" /> by {profile.name}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-1">
                        <span>&copy; {currentYear} {profile.name}. All rights reserved.</span>
                        <ViewCounter className="text-gray-400" />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a href={profile.links?.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="h-6 w-6 text-white hover:text-gray-900 transition-colors" />
                    </a>
                    <a href={profile.links?.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="h-6 w-6 text-white hover:text-gray-900 transition-colors" />
                    </a>
                    <a href={`mailto:${profile.contact.email}`} aria-label="Email">
                        <MdEmail className="h-6 w-6 text-white hover:text-gray-900 transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
}