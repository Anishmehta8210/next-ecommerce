/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      
      { hostname: "lh3.googleusercontent.com" },
    ],
    domains:["i.ibb.co"],
    
  },
  reactStrictMode: true,
}

module.exports = nextConfig
