'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return pathname === path ? 'text-blue-500 font-bold' : 'text-gray-600 hover:text-gray-900 font-semibold';
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className={`text-2xl font-bold ${isActive('/')}`}>
                            Carl
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className={isActive('/')}>
                            Home
                        </Link>
                        <Link href="/about" className={isActive('/about')}>
                            About
                        </Link>
                        <Link href="/contact" className={isActive('/contact')}>
                            Contact
                        </Link>
                        <Link href="/projects" className={isActive('/projects')}>
                            Projects
                        </Link>
                        <Link href="/blog" className={isActive('/blog')}>
                            Blog
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className={`block px-3 py-2 ${isActive('/')}`}>
                        Home
                    </Link>
                    <Link href="/about" className={`block px-3 py-2 ${isActive('/about')}`}>
                        About
                    </Link>
                    <Link href="/contact" className={`block px-3 py-2 ${isActive('/contact')}`}>
                        Contact
                    </Link>
                    <Link href="/projects" className={`block px-3 py-2 ${isActive('/projects')}`}>
                        Projects
                    </Link>
                    <Link href="/blog" className={`block px-3 py-2 ${isActive('/blog')}`}>
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;