/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for debugging
    domains: ['yourdomain.com'], // Add your domain if needed
  },
  // Ensure static files are included
  trailingSlash: false,
}

export default nextConfig