/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enable static export for GitHub Pages
  basePath: "/tapestri", // Set base path for GitHub Pages subdirectory
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
