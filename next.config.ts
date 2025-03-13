import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // DreamHost does not support Next.js Image Optimization
  },
  reactStrictMode: true,
  transpilePackages: ["geist"],
};

export default nextConfig;