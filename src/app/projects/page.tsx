'use client'

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getImageUrl, isImageValid } from '../config/images';

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
        image: getImageUrl('projects', 'ecommerce'),
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        link: "https://example.com/ecommerce",
        github: "https://github.com/example/ecommerce",
        category: "popular"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: getImageUrl('projects', 'taskManager'),
        technologies: ["React", "Firebase", "Material-UI"],
        link: "https://example.com/taskmanager",
        github: "https://github.com/example/taskmanager",
        category: "ongoing"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern portfolio website showcasing projects, skills, and professional experience with smooth animations and responsive design.",
        image: getImageUrl('projects', 'portfolio'),
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
        link: "https://example.com/portfolio",
        github: "https://github.com/example/portfolio",
        category: "popular"
    },
    {
        id: 4,
        title: "Weather App",
        description: "A weather application that provides real-time weather information and forecasts using OpenWeatherMap API.",
        image: getImageUrl('projects', 'weather'),
        technologies: ["React", "OpenWeatherMap API", "Tailwind CSS"],
        link: "https://example.com/weather",
        github: "https://github.com/example/weather",
        category: "upcoming"
    },
    {
        id: 5,
        title: "Chat Application",
        description: "Real-time chat application with user authentication and message history.",
        image: getImageUrl('projects', 'chat'),
        technologies: ["Socket.io", "Express", "MongoDB"],
        link: "https://example.com/chat",
        github: "https://github.com/example/chat",
        category: "ongoing"
    },
    {
        id: 6,
        title: "Recipe Finder",
        description: "A recipe search application that helps users find cooking recipes based on ingredients.",
        image: getImageUrl('projects', 'recipe'),
        technologies: ["Vue.js", "Spoonacular API", "Tailwind CSS"],
        link: "https://example.com/recipe",
        github: "https://github.com/example/recipe",
        category: "popular"
    },
    {
        id: 7,
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout planning and progress monitoring.",
        image: getImageUrl('projects', 'fitness'),
        technologies: ["React Native", "Firebase", "Redux"],
        link: "https://example.com/fitness",
        github: "https://github.com/example/fitness",
        category: "upcoming"
    },
    {
        id: 8,
        title: "Note Taking App",
        description: "A feature-rich note-taking application with markdown support and cloud sync.",
        image: getImageUrl('projects', 'notes'),
        technologies: ["Next.js", "Prisma", "PostgreSQL"],
        link: "https://example.com/notes",
        github: "https://github.com/example/notes",
        category: "ongoing"
    },
    {
        id: 9,
        title: "Social Media Dashboard",
        description: "A dashboard for managing multiple social media accounts and tracking analytics.",
        image: getImageUrl('projects', 'dashboard'),
        technologies: ["React", "Chart.js", "Tailwind CSS"],
        link: "https://example.com/dashboard",
        github: "https://github.com/example/dashboard",
        category: "popular"
    },
    {
        id: 10,
        title: "File Sharing Platform",
        description: "A secure file sharing platform with end-to-end encryption and file preview.",
        image: getImageUrl('projects', 'fileShare'),
        technologies: ["Node.js", "AWS S3", "React"],
        link: "https://example.com/fileshare",
        github: "https://github.com/example/fileshare",
        category: "upcoming"
    }
];

export default function ProjectsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState<Set<'popular' | 'ongoing' | 'upcoming'>>(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [validProjects, setValidProjects] = useState<Project[]>([]);

    // Validate images and set up projects
    useEffect(() => {
        const validateProjects = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const validatedProjects = await Promise.all(
                    projects.map(async (project) => {
                        const isValid = await isImageValid(project.image);
                        if (!isValid) {
                            // Use fallback image if the original image is invalid
                            return {
                                ...project,
                                image: getImageUrl('projects', 'portfolio') // Use a reliable fallback
                            };
                        }
                        return project;
                    })
                );

                setValidProjects(validatedProjects);
            } catch (err) {
                console.error('Error validating projects:', err);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        validateProjects();
    }, []);

    // Filter projects based on selected categories
    const filteredProjects = selectedCategories.size === 0
        ? validProjects
        : validProjects.filter(project => selectedCategories.has(project.category));

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Projects</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading projects...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ... rest of your JSX ... */}
        </div>
    );
} 