"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/app/providers/smooth-scroll"; 
import BackToTopButton from "@/components/ui/BackToTopButton";
import Cursor from "@/components/ui/Cursor";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
    </>
  );
}