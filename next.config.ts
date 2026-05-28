import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.wikipedia.org/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
