/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn03.nyheter24.se",
      },
    ],
  },
};

export default nextConfig;
