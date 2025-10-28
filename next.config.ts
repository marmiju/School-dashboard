import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost','res.cloudinary.com','www.pngall.com','avatars.githubusercontent.com'], // add your backend host
  },
};

export default nextConfig;
