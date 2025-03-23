'use client'

import Link from 'next/link';

interface FooterLink {
    name: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navigation: FooterSection[] = [
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Team", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "/blog" }
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Web Development", href: "#" },
                { name: "Mobile Apps", href: "#" },
                { name: "Cloud Solutions", href: "#" },
                { name: "Consulting", href: "#" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "#" },
                { name: "Guides", href: "#" },
                { name: "Support", href: "#" },
                { name: "API", href: "#" }
            ]
        }
    ];

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all duration-300">
                            Carl
                        </Link>
                        <p className="mt-4 text-gray-900 text-sm leading-relaxed">
                            Building exceptional digital experiences through clean code and innovative solutions.
                        </p>
                    </div>

                    {/* Navigation Sections */}
                    {navigation.map((section) => (
                        <div key={section.title} className="col-span-1">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                {section.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {section.links.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-base text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a 
                                    href="mailto:your.email@example.com" 
                                    className="text-base text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                >
                                    your.email@example.com
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="tel:+25490070100" 
                                    className="text-base text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                >
                                    +254 900 701 00
                                </a>
                            </li>
                            <li className="text-base text-gray-900">
                                Nairobi, Kenya
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-900 text-center">
                        &copy; {currentYear} Carl. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 