import { Albert_Sans } from 'next/font/google'; // เปลี่ยนเป็น Albert Sans
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import SmoothScroll from './providers/smooth-scroll';
import BackToTopButton from '@/components/ui/BackToTopButton';
import Cursor from '@/components/ui/Cursor';
import Footer from '@/components/layout/Footer';

const albertSans = Albert_Sans({ subsets: ['latin'] }); // ตั้งค่า Albert Sans

export const metadata = {
  title: 'Boomies Portfolio',
  description: 'Pawitsanat Portfolio - Explore what I can do',
  keywords: [
    "Boomieindahouse",
    "Pawitsanat Prapananyosanan",
    "Boomies Portfolio",
    "ภวิศณัฏฐ์ ปภานันยศอนันต์",
    "ภวิศณัฏฐ์",
    "Boom Pawitsanat",
    "El Boomies",
  ],
  openGraph: {
    title: "Prawitsanat Portfolio - Explore what I can do",
    description: "Welcome to Prawitsanat's portfolio. Dive into a collection of my latest projects, designs, and creations.",
    url: "https://elboomie.vercel.app",
    images: [
      {
        url: "https://i.postimg.cc/Nj630DBT/logo1.png",
        width: 800,
        height: 600,
        alt: "Boomies Logo"
      }
    ],
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ลิงก์ไปยัง manifest.json */}
        <link rel="manifest" href="/manifest.json" />

        {/* ไอคอน */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/Nj630DBT/logo1.png" />

        {/* สีของ theme */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${albertSans.className} min-h-screen bg-black`}> {/* ใช้ albertSans */}
        <Cursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
