import { Albert_Sans } from 'next/font/google'; // เปลี่ยนเป็น Albert Sans
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import SmoothScroll from './providers/smooth-scroll';

const albertSans = Albert_Sans({ subsets: ['latin'] }); // ตั้งค่า Albert Sans

export const metadata = {
  title: 'Portfolio Website',
  description: 'Front-end Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} min-h-screen bg-black`}> {/* ใช้ albertSans */}
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
