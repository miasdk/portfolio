import { profile } from "../config/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-6">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                </div>
                <div className="flex space-x-4">
                    <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors" />
                    </a>
                    <a href={profile.links.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors" />
                    </a>
                    <a href={`mailto:${profile.contact.email}`} aria-label="Email">
                        <MdEmail className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
}