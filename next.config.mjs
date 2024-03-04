/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    domains: ["lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
    unoptimized: true,
  },
};

export default nextConfig;
