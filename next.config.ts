import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/postmaster",
  images: {
    remotePatterns: [
      {
        hostname: "ciistacna.com",
        
      }
    ]
  }
};

export default nextConfig;
