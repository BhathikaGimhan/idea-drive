/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    domains: ["lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
    unoptimized: true,
  },
  // output: {
  //   // Set the directory for static HTML export
  //   dir: "out",
  //   // Configure whether to generate static 404 pages (optional)
  //   // This can be useful for static hosting environments that don't handle custom error pages
  //   static404: true,
  // },
};

export default nextConfig;
