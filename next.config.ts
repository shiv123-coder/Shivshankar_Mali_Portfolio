import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce aggressive caching where possible
  reactStrictMode: true,
  
  // Experimental flags to heavily optimize the bundle
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "sonner", "cmdk"],
  },

  // Image optimization rules
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
      }
    ],
  },
};

export default nextConfig;
