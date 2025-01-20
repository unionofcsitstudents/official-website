// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'] // Add allowed domains here
  },
};

export default nextConfig;
