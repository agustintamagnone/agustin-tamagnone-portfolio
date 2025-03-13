import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["geist"],
  output: "export", // ✅ Ensure Next.js exports static files
  distDir: "out",  // ✅ Netlify uses the `out` folder
  images: {
    unoptimized: true, // ✅ Ensure images work in static export mode
  },
};

export default nextConfig;