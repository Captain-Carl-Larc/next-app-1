'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { blogPosts, BlogPost } from './data';

const ITEMS_PER_PAGE = 6;

const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'latest', name: 'Latest' },
    { id: 'popular', name: 'Popular' },
    { id: 'ai', name: 'AI' },
    { id: 'developer-tools', name: 'Developer Tools' },
    { id: 'techpreneurship', name: 'Techpreneurship' },
];

export default function BlogPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

    // Initialize filters from URL params
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        const pageParam = searchParams.get('page');
        
        if (categoryParam) {
            setSelectedCategories(new Set(categoryParam.split(',')));
        }
        if (pageParam) {
            setCurrentPage(parseInt(pageParam));
        }
    }, [searchParams]);

    // Update URL when filters change
    const updateFilters = (category: string) => {
        const newCategories = new Set(selectedCategories);
        if (category === 'all') {
            newCategories.clear();
        } else {
            if (newCategories.has(category)) {
                newCategories.delete(category);
            } else {
                newCategories.add(category);
            }
        }
        setSelectedCategories(newCategories);
        setCurrentPage(1);

        const params = new URLSearchParams();
        if (newCategories.size > 0) {
            params.set('category', Array.from(newCategories).join(','));
        }
        if (currentPage > 1) {
            params.set('page', currentPage.toString());
        }
        router.push(`/blog?${params.toString()}`);
    };

    // Filter posts based on selected categories
    const filteredPosts = blogPosts.filter(post => {
        if (selectedCategories.size === 0) return true;
        return selectedCategories.has(post.category);
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`/blog?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
                    <p className="text-xl text-gray-600">Insights, tutorials, and thoughts on technology</p>
                </div>

                {/* Category Filters */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => updateFilters(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                    (category.id === 'all' && selectedCategories.size === 0) ||
                                    selectedCategories.has(category.id)
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                    <span className="text-sm font-medium text-blue-600 capitalize">{post.category}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">By {post.author}</span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                {filteredPosts.length > 0 && (
                    <div className="mt-12 flex justify-center">
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
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
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}