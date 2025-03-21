"use client";

import { useState, useEffect } from "react";
import { Albert_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "./providers/smooth-scroll";
import BackToTopButton from "@/components/ui/BackToTopButton";
import Cursor from "@/components/ui/Cursor";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import { Analytics } from "@vercel/analytics/react";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Favicon & PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/Nj630DBT/logo1.png" />
        <meta name="theme-color" content="#000000" />

        {/* SEO Meta Tags */}
        <meta name="title" content="Boomieindahouse — Portfolio" />
        <meta name="description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta name="keywords" content="frontend developer, frontend developer and ux/ui designer, react portfolio, next.js portfolio, portfolio, boomieindahouse, elboomie, prawitsanat prapananyosanan, ux/ui designer, pawitsanat, pawitsanat papananyosanan" />
        <meta name="author" content="Boomieindahouse" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boomieindahouse — Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta property="og:image" content="https://elboomie.vercel.app/Homepage.png" />
        <meta property="og:url" content="https://elboomie.vercel.app/" />
        <meta property="og:site_name" content="Boomies Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boomieindahouse | Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website showcasing my projects and skills." />
        <meta name="twitter:image" content="https://elboomie.vercel.app/Homepage.png" />
        <meta name="twitter:site" content="@boomiebehumble" />
        <meta name="twitter:creator" content="@boomiebehumble" />
      </head>
      <body className={`${albertSans.className} min-h-screen bg-black`}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Cursor />
            <SmoothScroll>
              <Navbar />
              {children}
            </SmoothScroll>
            <BackToTopButton />
            <Footer />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
