/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/dongmin-portfolio' : '',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    experimental: {
        esmExternals: 'loose'
    }
};

module.exports = nextConfig;