"use client"

import { useState, useEffect } from "react";
import { Albert_Sans } from "next/font/google"; 
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "./providers/smooth-scroll";
import BackToTopButton from "@/components/ui/BackToTopButton";
import Cursor from "@/components/ui/Cursor";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader"; // นำเข้า Loader

const albertSans = Albert_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader แสดง 4 วินาที

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/Nj630DBT/logo1.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${albertSans.className} min-h-screen bg-black`}>
        {loading ? (
          <Loader /> // แสดง Loader ก่อน
        ) : (
          <>
            <Cursor />
            <SmoothScroll>
              <Navbar />
              {children}
            </SmoothScroll>
            <BackToTopButton />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
