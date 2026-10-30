/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for debugging
  },
  // Ensure static files are included
  trailingSlash: false,
}

export default nextConfig
