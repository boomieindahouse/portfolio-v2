/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elboomie.vercel.app",
      },
    ],
  },
};

export default withPWA(nextConfig);
