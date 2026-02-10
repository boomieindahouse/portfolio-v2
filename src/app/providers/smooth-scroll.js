"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    let reqId;

    function raf(time) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }

    reqId = requestAnimationFrame(raf);

    // Scroll to top when path changes
    lenis.scrollTo(0, { immediate: true });

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
