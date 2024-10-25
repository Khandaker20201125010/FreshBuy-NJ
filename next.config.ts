import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**', // Allow all paths under i.ibb.co
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Also add Unsplash for completeness
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
