/** @type {import('next').NextConfig} */
const nextConfig = {
    // Custom domain (riyuner.id) configured via CNAME file
    // No basePath needed for root domain deployment

    images: {
        domains: ['images.unsplash.com'], // For stock photos
        formats: ['image/avif', 'image/webp'],
        // For output: 'export', disable the Image Optimization API
        // so <Image> works without a server-side optimizer.
        unoptimized: true,
    },
    compress: true,
    output: 'export',
}

export default nextConfig;
