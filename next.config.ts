import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    optimizeCss: false, 
  },
  // Ignore TypeScript build errors
  typescript: {
     ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build
  eslint: {
     ignoreDuringBuilds: true,
  },
}
export default nextConfig;