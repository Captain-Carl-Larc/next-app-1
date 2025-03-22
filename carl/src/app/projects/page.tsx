'use client'

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github?: string;
    category: 'popular' | 'ongoing' | 'upcoming';
}

const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "/projects/ecommerce.jpg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        link: "https://example.com/ecommerce",
        github: "https://github.com/example/ecommerce",
        category: "popular"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/projects/taskmanager.jpg",
        technologies: ["React", "Firebase", "Material-UI"],
        link: "https://example.com/taskmanager",
        github: "https://github.com/example/taskmanager",
        category: "ongoing"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern portfolio website showcasing projects, skills, and professional experience with smooth animations and responsive design.",
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
        link: "https://example.com/portfolio",
        github: "https://github.com/example/portfolio",
        category: "popular"
    },
    {
        id: 4,
        title: "Weather App",
        description: "A weather application that provides real-time weather information and forecasts using OpenWeatherMap API.",
        image: "/projects/weather.jpg",
        technologies: ["React", "OpenWeatherMap API", "Tailwind CSS"],
        link: "https://example.com/weather",
        github: "https://github.com/example/weather",
        category: "upcoming"
    },
    {
        id: 5,
        title: "Chat Application",
        description: "Real-time chat application with user authentication and message history.",
        image: "/projects/chat.jpg",
        technologies: ["Socket.io", "Express", "MongoDB"],
        link: "https://example.com/chat",
        github: "https://github.com/example/chat",
        category: "ongoing"
    },
    {
        id: 6,
        title: "Recipe Finder",
        description: "A recipe search application that helps users find cooking recipes based on ingredients.",
        image: "/projects/recipe.jpg",
        technologies: ["Vue.js", "Spoonacular API", "Tailwind CSS"],
        link: "https://example.com/recipe",
        github: "https://github.com/example/recipe",
        category: "popular"
    },
    {
        id: 7,
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout planning and progress monitoring.",
        image: "/projects/fitness.jpg",
        technologies: ["React Native", "Firebase", "Redux"],
        link: "https://example.com/fitness",
        github: "https://github.com/example/fitness",
        category: "upcoming"
    },
    {
        id: 8,
        title: "Note Taking App",
        description: "A feature-rich note-taking application with markdown support and cloud sync.",
        image: "/projects/notes.jpg",
        technologies: ["Next.js", "Prisma", "PostgreSQL"],
        link: "https://example.com/notes",
        github: "https://github.com/example/notes",
        category: "ongoing"
    },
    {
        id: 9,
        title: "Social Media Dashboard",
        description: "A dashboard for managing multiple social media accounts and tracking analytics.",
        image: "/projects/dashboard.jpg",
        technologies: ["React", "Chart.js", "Tailwind CSS"],
        link: "https://example.com/dashboard",
        github: "https://github.com/example/dashboard",
        category: "popular"
    },
    {
        id: 10,
        title: "File Sharing Platform",
        description: "A secure file sharing platform with end-to-end encryption and file preview.",
        image: "/projects/fileshare.jpg",
        technologies: ["Node.js", "AWS S3", "React"],
        link: "https://example.com/fileshare",
        github: "https://github.com/example/fileshare",
        category: "upcoming"
    }
];

const ITEMS_PER_PAGE = 6;

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO, TechStart",
        initials: "JD",
        quote: "Carl delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made all the difference."
    },
    {
        id: 2,
        name: "Alice Smith",
        position: "Product Manager, InnovateCorp",
        initials: "AS",
        quote: "Working with Carl was a game-changer for our project. His ability to understand our needs and deliver solutions was outstanding."
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "CTO, StartupX",
        initials: "MJ",
        quote: "Carl's expertise in modern web technologies and his commitment to quality helped us launch our product ahead of schedule."
    },
    {
        id: 4,
        name: "Sarah Williams",
        position: "Founder, DesignHub",
        initials: "SW",
        quote: "The portfolio website Carl built for us perfectly captures our brand identity and has significantly increased our client inquiries."
    },
    {
        id: 5,
        name: "David Chen",
        position: "Lead Developer, TechCorp",
        initials: "DC",
        quote: "Carl's clean code practices and attention to performance optimization have made our application incredibly fast and maintainable."
    },
    {
        id: 6,
        name: "Emma Davis",
        position: "Product Owner, InnovateLabs",
        initials: "ED",
        quote: "Working with Carl was a pleasure. His communication skills and technical expertise made the development process smooth and efficient."
    }
];

export default function ProjectsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState<Set<'popular' | 'ongoing' | 'upcoming'>>(new Set());

    // Testimonials carousel state
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const testimonialsPerPage = 3;
    const totalTestimonialPages = Math.ceil(testimonials.length / testimonialsPerPage);

    // Initialize filters from URL params
    useEffect(() => {
        const categories = searchParams.get('categories')?.split(',') || [];
        setSelectedCategories(new Set(categories as ('popular' | 'ongoing' | 'upcoming')[]));
        const page = parseInt(searchParams.get('page') || '1');
        setCurrentPage(page);
    }, [searchParams]);

    // Update URL when filters change
    const updateFilters = (categories: Set<'popular' | 'ongoing' | 'upcoming'>, page: number) => {
        const params = new URLSearchParams();
        if (categories.size > 0) {
            params.set('categories', Array.from(categories).join(','));
        }
        if (page > 1) {
            params.set('page', page.toString());
        }
        router.push(`/projects?${params.toString()}`);
    };

    const handleCategoryToggle = (category: 'popular' | 'ongoing' | 'upcoming') => {
        const newCategories = new Set(selectedCategories);
        if (newCategories.has(category)) {
            newCategories.delete(category);
        } else {
            newCategories.add(category);
        }
        setSelectedCategories(newCategories);
        setCurrentPage(1); // Reset to first page when changing filters
        updateFilters(newCategories, 1);
    };

    // Filter projects based on selected categories
    const filteredProjects = selectedCategories.size === 0
        ? projects
        : projects.filter(project => selectedCategories.has(project.category));

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateFilters(selectedCategories, page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Testimonials carousel functions
    const nextTestimonials = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % totalTestimonialPages);
    };

    const prevTestimonials = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + totalTestimonialPages) % totalTestimonialPages);
    };

    // Auto-advance testimonials every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextTestimonials, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
                        <p className="text-xl text-gray-600 mb-12">A collection of my work and personal projects</p>
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => {
                                setSelectedCategories(new Set());
                                setCurrentPage(1);
                                updateFilters(new Set(), 1);
                            }}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategories.size === 0
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            All Projects
                        </button>
                        <button
                            onClick={() => handleCategoryToggle('popular')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategories.has('popular')
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Popular
                        </button>
                        <button
                            onClick={() => handleCategoryToggle('ongoing')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategories.has('ongoing')
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Ongoing
                        </button>
                        <button
                            onClick={() => handleCategoryToggle('upcoming')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategories.has('upcoming')
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                            }`}
                        >
                            Upcoming
                        </button>
                    </div>

                    {/* Active Filters Display */}
                    {selectedCategories.size > 0 && (
                        <div className="text-center mb-6">
                            <p className="text-sm text-gray-600">
                                Showing {filteredProjects.length} projects
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            project.category === 'popular' 
                                                ? 'bg-red-100 text-red-800'
                                                : project.category === 'ongoing'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            View Project
                                        </a>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {filteredProjects.length > 0 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                {/* Previous button */}
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                                        currentPage === 1
                                            ? 'text-gray-300 cursor-not-allowed'
                                            : 'text-gray-500 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Page numbers */}
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                            currentPage === index + 1
                                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}

                                {/* Next button */}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                                        currentPage === totalPages
                                            ? 'text-gray-300 cursor-not-allowed'
                                            : 'text-gray-500 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    )}

                    {/* Testimonials Section */}
                    <div className="mt-24 mb-16">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Clients Say</h2>
                            <p className="text-xl text-gray-600">Testimonials from satisfied clients and partners</p>
                        </div>

                        {/* Visual Separator */}
                        <div className="relative mb-12">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 bg-gray-50 text-sm text-gray-500">Client Testimonials</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {testimonials
                                    .slice(
                                        currentTestimonialIndex * testimonialsPerPage,
                                        (currentTestimonialIndex + 1) * testimonialsPerPage
                                    )
                                    .map((testimonial) => (
                                        <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <span className="text-blue-600 font-semibold">
                                                            {testimonial.initials}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-500">
                                                        {testimonial.position}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-gray-600">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>
                                    ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevTestimonials}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Previous testimonials"
                            >
                                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonials}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Next testimonials"
                            >
                                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {[...Array(totalTestimonialPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonialIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            currentTestimonialIndex === index
                                                ? 'bg-blue-600'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to testimonial page ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                            >
                                Let's Work Together
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            No project is too big or too small. Let's discuss how I can help you achieve your goals.
                        </p>
                    </div>
                </div>
            </div>

            {/* Marketing CTA Section */}
            <div className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Let's work together to bring your vision to life
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg font-medium text-gray-900">Fast & Efficient</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Quick turnaround times without compromising quality
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg font-medium text-gray-900">Custom Solutions</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Tailored solutions that perfectly fit your needs
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg font-medium text-gray-900">Quality Guaranteed</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    High-quality code with modern best practices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}