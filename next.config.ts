import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      root: '.',  
    },
  },
  allowedDevOrigins: ['192.168.1.9']
};

export default nextConfig;
