import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Firebase Storage for uploaded images
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port: '',
        pathname: '/**',
      },
      // Add any other image CDNs you might use
    ],
  },
};

export default nextConfig;