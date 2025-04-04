import placeHolderImage from "../public/images/placeholder.jpg"
import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
            My Portfolio
            </div>
            <ul className="flex space-x-4">
            <li>
                <a
                href="#projects"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                >
                Projects
                </a>
            </li>
            <li>
                <a
                href="#about"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                >
                About
                </a>
            </li>
            <li>
                <a
                href="#contact"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                >
                Contact
                </a>
            </li>
            </ul>
        </div>
        </nav>
    );
    }