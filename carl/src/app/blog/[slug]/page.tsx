import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, BlogPost } from '../data';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post: BlogPost | undefined = blogPosts.find(post => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Get recommended posts
    const getRecommendedPosts = () => {
        // First try to get posts from the same category
        const sameCategory = blogPosts.filter(p => 
            p.category === post.category && p.slug !== post.slug
        );

        // If we have 3 or more posts from same category, return first 3
        if (sameCategory.length >= 3) {
            return sameCategory.slice(0, 3);
        }

        // If we don't have enough posts from same category,
        // get random posts from other categories to fill up to 3
        const otherPosts = blogPosts.filter(p => 
            p.slug !== post.slug && p.category !== post.category
        );

        // Shuffle the other posts
        const shuffled = [...otherPosts].sort(() => 0.5 - Math.random());

        // Combine same category posts with random posts to make total of 3
        return [...sameCategory, ...shuffled].slice(0, 3);
    };

    const recommendedPosts = getRecommendedPosts();
    const shareUrl = `https://yourdomain.com/blog/${post.slug}`;
    const shareText = encodeURIComponent(post.title);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <Link 
                    href="/blog" 
                    className="inline-flex items-center text-black hover:text-blue-600 transition-colors duration-200 mb-8 group"
                >
                    <svg 
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                </Link>

                <article className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <header className="mb-8 border-b pb-8">
                        <div className="flex items-center gap-2 text-sm text-black mb-4">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium text-xs sm:text-sm">
                                {post.category}
                            </span>
                            <span>•</span>
                            <time dateTime={post.date} className="font-medium text-xs sm:text-sm">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">{post.title}</h1>
                        <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-700 font-semibold text-lg">
                                    {post.author[0]}
                                </span>
                            </div>
                            <div className="ml-4">
                                <p className="text-black font-medium">{post.author}</p>
                                <p className="text-black">Author</p>
                            </div>
                        </div>
                    </header>

                    <div 
                        className="prose prose-lg max-w-none
                            prose-headings:font-bold prose-headings:text-black prose-headings:mb-4
                            prose-h2:text-2xl prose-h2:mt-8
                            prose-p:text-black prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
                            prose-ul:my-6 prose-li:text-black prose-li:mb-2
                            prose-strong:text-black prose-strong:font-semibold
                            prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-black
                            prose-code:text-blue-700 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg
                            [&>*]:text-black"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Share this post</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <a 
                            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            Twitter
                        </a>
                        <a 
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <a 
                            href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>
                        <a 
                            href={`https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                            Instagram
                        </a>
                        <a 
                            href={`https://www.tiktok.com/share?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-[#000000] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                            TikTok
                        </a>
                        <a 
                            href={`https://www.snapchat.com/share?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-[#FFFC00] text-black rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
                            </svg>
                            Snapchat
                        </a>
                    </div>
                </div>

                {/* Recommended Posts Section */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-black mb-6">Recommended Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recommendedPosts.map((post) => (
                            <Link 
                                href={`/blog/${post.slug}`} 
                                key={post.id}
                                className="group"
                            >
                                <article className="h-full flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm mb-3">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                                {post.category}
                                            </span>
                                            <span className="text-gray-600 text-xs">
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
