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
    // WebP first, then AVIF: AVIF is slightly smaller but much slower to
    // encode on first hit, which was the main cause of the slow Works
    // grid. WebP at quality 90 is still visually identical to JPEG 100
    // at display size. Original files are left untouched, so
    // gallery/modal views can still open the full-resolution original.
    formats: ["image/webp", "image/avif"],
    // Largest display width in this site is a fullscreen banner (~1920px).
    // 3840w was never needed and only made the optimizer generate an
    // extra oversized variant.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
