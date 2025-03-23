/** 
 * @type {import('next').NextConfig} 
 * Next.js configuration file that exports settings for the entire application
 */
const nextConfig = {
  images: {
    // Allow images from specific domains - simpler but less secure approach
    domains: ['images.pexels.com'],

    // Secure configuration for external images with specific rules
    remotePatterns: [
      {
        protocol: 'https', // Only allow HTTPS connections
        hostname: 'images.pexels.com', // Specific host to allow images from
        port: '', // No specific port required
        pathname: '/photos/**', // Allow all paths under /photos/
      },
    ],

    // Breakpoint sizes for responsive images
    // Used when generating srcset for different screen sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Sizes for thumbnail generation and smaller images
    // Used for optimizing images based on their display size
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Image formats to generate
    // WebP offers better compression while maintaining quality
    formats: ['image/webp'],
  },
}

// Export the configuration for Next.js to use
export default nextConfig 