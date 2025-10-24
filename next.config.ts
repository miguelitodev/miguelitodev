import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'letterboxd.com',
      },
      {
        protocol: 'https',
        hostname: 'a.ltrbxd.com',
      }
    ],
  },
};

export default nextConfig;
