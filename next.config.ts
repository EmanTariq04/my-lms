import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "img.clerk.com",
        protocol: "https",
      }
    ],
  },
};

export default nextConfig;
