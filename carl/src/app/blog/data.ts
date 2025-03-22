export interface BlogPost {
    id: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    category: 'popular' | 'latest' | 'ai' | 'developer-tools' | 'techpreneurship';
    slug: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Getting Started with Next.js 14',
        author: 'Carl',
        date: '2024-03-15',
        excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router and Server Components.',
        category: 'latest',
        slug: 'getting-started-with-nextjs-14',
        content: `<h2>Introduction</h2><p>Next.js 14 brings exciting new features and improvements to the React ecosystem.</p>`
    },
    {
        id: '2',
        title: 'The Future of AI in Web Development',
        author: 'Carl',
        date: '2024-03-10',
        excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy web applications.',
        category: 'ai',
        slug: 'future-of-ai-in-web-development',
        content: `<h2>AI Revolution</h2><p>AI is transforming how we build and deploy web applications.</p>`
    },
    {
        id: '3',
        title: 'Essential Developer Tools for 2024',
        author: 'Carl',
        date: '2024-03-05',
        excerpt: 'A comprehensive guide to the must-have tools and extensions for modern web developers.',
        category: 'developer-tools',
        slug: 'essential-developer-tools-2024',
        content: `<h2>Must-Have Tools</h2><p>Stay productive with these essential developer tools.</p>`
    },
    {
        id: '4',
        title: 'Building a Successful Tech Startup',
        author: 'Carl',
        date: '2024-02-28',
        excerpt: 'Key insights and lessons learned from building and scaling technology startups.',
        category: 'techpreneurship',
        slug: 'building-successful-tech-startup',
        content: `<h2>Startup Journey</h2><p>Learn the key insights for building a successful tech startup.</p>`
    },
    {
        id: '5',
        title: 'Understanding React Server Components',
        author: 'Carl',
        date: '2024-02-20',
        excerpt: 'Deep dive into React Server Components and their impact on modern web development.',
        category: 'latest',
        slug: 'understanding-react-server-components',
        content: `<h2>Server Components</h2><p>Explore the power of React Server Components.</p>`
    },
    {
        id: '6',
        title: 'AI-Powered Development Workflows',
        author: 'Carl',
        date: '2024-02-15',
        excerpt: 'How to leverage AI tools to streamline your development process and boost productivity.',
        category: 'ai',
        slug: 'ai-powered-development-workflows',
        content: `<h2>AI Workflows</h2><p>Boost your productivity with AI-powered development tools.</p>`
    },
    {
        id: '7',
        title: 'VS Code Extensions You Need',
        author: 'Carl',
        date: '2024-02-10',
        excerpt: 'Essential VS Code extensions that will supercharge your development workflow.',
        category: 'developer-tools',
        slug: 'vs-code-extensions-you-need',
        content: `<h2>Essential Extensions</h2><p>Supercharge your VS Code with these must-have extensions.</p>`
    },
    {
        id: '8',
        title: 'From Developer to Entrepreneur',
        author: 'Carl',
        date: '2024-02-05',
        excerpt: 'A guide to transitioning from a developer to a successful tech entrepreneur.',
        category: 'techpreneurship',
        slug: 'from-developer-to-entrepreneur',
        content: `<h2>Career Transition</h2><p>Make the leap from developer to successful entrepreneur.</p>`
    },
    {
        id: '9',
        title: 'TypeScript Best Practices',
        author: 'Carl',
        date: '2024-01-30',
        excerpt: 'Essential TypeScript practices that will help you write better, more maintainable code.',
        category: 'latest',
        slug: 'typescript-best-practices',
        content: `<h2>TypeScript Guide</h2><p>Write better code with these TypeScript best practices.</p>`
    },
    {
        id: '10',
        title: 'Machine Learning in Web Apps',
        author: 'Carl',
        date: '2024-01-25',
        excerpt: 'Integrating machine learning models into your web applications for enhanced functionality.',
        category: 'ai',
        slug: 'machine-learning-in-web-apps',
        content: `<h2>ML Integration</h2><p>Learn how to add machine learning capabilities to your web apps.</p>`
    }
]; 