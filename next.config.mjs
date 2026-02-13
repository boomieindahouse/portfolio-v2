/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // แนะนำให้ปิดตอน dev เพื่อความเร็ว
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
  // --- เพิ่มส่วนนี้เข้าไปเพื่อแก้ปัญหา Error ที่แจ้งมา ---
  experimental: {
    workerThreads: false, // ป้องกัน Error "Call retries were exceeded" โดยการลดภาระ Worker
    cpus: 1, // ใช้ CPU เดียวในการ build เพื่อป้องกัน Memory เต็มบน Vercel
  },
  // Add turbopack config at the root level to satisfy Next.js 16 requirements when using Turbopack with existing Webpack config
  turbopack: {}, // ตามที่ Error Log แนะนำให้ใส่ (ควรอยู่นอก experimental)
};

export default withPWA(nextConfig);
