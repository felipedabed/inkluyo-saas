import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the compiled widget bundle to be served as a static asset
  // from /public/widget/ in the demo section
  async headers() {
    return [
      {
        source: "/widget/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
