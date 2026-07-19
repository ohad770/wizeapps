import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-studies/mincha-alarm",
        destination: "/case-studies/mincha-time",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
