'use client'

import React, { SVGProps } from 'react';
import Link from 'next/link';

interface FooterLink {
    name: string;
    href: string;
}

interface SocialLink extends FooterLink {
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navigation: FooterSection[] = [
        {
            title: "About",
            links: [
                { name: "Company", href: "#" },
                { name: "Team", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" }
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
                { name: "API Reference", href: "#" },
                { name: "Support", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy", href: "#" },
                { name: "Terms", href: "#" },
                { name: "Cookie Policy", href: "#" }
            ]
        }
    ];

    const social: SocialLink[] = [
        {
            name: "GitHub",
            href: "https://github.com/yourusername",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            )
        },
        {
            name: "Twitter",
            href: "https://twitter.com/yourusername",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all duration-300">
                            Carl
                        </Link>
                        <p className="mt-4 text-gray-900 text-sm leading-relaxed">
                            Building exceptional digital experiences through clean code and innovative solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {navigation.map((section) => (
                                section.links.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-base text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-4">
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

                {/* Social Links */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <div className="flex justify-between items-center">
                        <p className="text-base text-gray-900">
                            &copy; {currentYear} Carl. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-900 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;