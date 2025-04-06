'use client'; 
import { useState } from "react"; 
import Link from "next/link"; 
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-900">
                    <Link href="/">My Portfolio</Link>
                </div>

                <ul className="hidden md:flex space-x-4">
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-900"
                >
                    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 py-2">
                    <ul className="flext flex-col space-y-2">
                        <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
                        <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                    </ul>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-gray-900 hover:text-blue-500 transition-colors"
            >
                {children}
            </Link>
        </li>
    );
}


function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <li>
            <Link
                href={href}
                className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 py-2 transition-colors"
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
}