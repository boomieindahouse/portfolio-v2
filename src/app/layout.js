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
    title: "Boomies Portfolio",
    description: "Pawitsanat Portfolio - Explore what I can do",
    url: "https://elboomie.vercel.app",
    images: [
      {
        url: "https://i.postimg.cc/9Qk7rdbm/logo.png",
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
