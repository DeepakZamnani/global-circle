// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {

//    images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'unsplash.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'plus.unsplash.com',
//         port: '',
//         pathname: '/**',
//       },
//       // Firebase Storage for uploaded images
//       {
//         protocol: 'https',
//         hostname: 'firebasestorage.googleapis.com',
//         port: '',
//         pathname: '/**',
//       },
//        {
//         protocol: 'https',
//         hostname: 'c8.alamy.com',
//         port: '',
//         pathname: '/**',
//       },
//        {
//         protocol: 'https',
//         hostname: 'ciu.edu.ge',
//         port: '',
//         pathname: '/**',
//       },
//          {
//         protocol: 'https',
//         hostname: 'bsmi.uz',
//         port: '',
//         pathname: '/**',
//       },
//           {
//         protocol: 'https',
//         hostname: 'camuf.uz',
//         port: '',
//         pathname: '/**',
//       },
//           {
//         protocol: 'https',
//         hostname: 'farabi.university',
//         port: '',
//         pathname: '/**',
//       },
//    {
//         protocol: 'https',
//         hostname: 'kaznmu.edu.kz',
//         port: '',
//         pathname: '/**',
//       },
//         {
//         protocol: 'https',
//         hostname: 'www.astanamedicaluniversity.com',
//         port: '',
//         pathname: '/**',
//       },
//       // Add any other image CDNs you might use
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // List of allowed remote image patterns
    // - Specific ones first (more restrictive → takes precedence where they match)
    // - Broad wildcard last (catches everything else over HTTPS)
    remotePatterns: [
      // Your existing trusted sources (kept as-is)
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
      // Firebase Storage (user uploads)
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      // Other specific sites / universities
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ciu.edu.ge',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bsmi.uz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'camuf.uz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'farabi.university',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kaznmu.edu.kz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.astanamedicaluniversity.com',
        port: '',
        pathname: '/**',
      },

      // ────────────────────────────────────────────────
      // Broad wildcard → allows ANY other HTTPS image source
      // This eliminates the "hostname not configured" error for random sites
      // (YouTube thumbnails, social media, etc.)
      // Security: Only use if your app doesn't allow untrusted user-submitted image URLs
      //           (risk is mostly DoS via large files or malicious SVGs)
      {
        protocol: 'https',
        hostname: '**',      // matches any domain / subdomain
        port: '',
        pathname: '**',      // matches any path
        // search: ''        // uncomment if you want to block all query strings (rarely needed)
      },

      // Optional: If you ever need insecure HTTP sources (very rare / not recommended)
      // {
      //   protocol: 'http',
      //   hostname: '**',
      //   port: '',
      //   pathname: '**',
      // },
    ],
  },

  // You can add other Next.js config options here if needed
  // e.g. reactStrictMode: true,
  //      experimental: { ... },
};

export default nextConfig;