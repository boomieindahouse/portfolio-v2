"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import usePicture from "@/hooks/usePicture";

const FullscreenLoopSection = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const { getPicture, totalPictures } = usePicture();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev === totalPictures ? 1 : prev + 1));
    }, 2000); // 4 seconds total loop time

    return () => clearInterval(interval);
  }, [totalPictures]);

  return (
    <div className="relative w-full h-[900px] lg:h-[600px] xl:h-[920px] overflow-hidden">
      {/* Current Image */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src={getPicture(currentSection)}
          alt={`Work Showcase ${currentSection}`}
          fill
          // No priority: this banner sits below the hero, so it must not
          // compete with the LCP content. quality 90 in AVIF/WebP is
          // visually identical to JPEG 100 at fullscreen size.
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
      </div>

      {/* NOTE: the old hidden 10x10 preload image was removed. It never
          preloaded the fullscreen variant, it only added an extra request. */}

      {/* Overlay Gradient (Optional for text readability if needed later) */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default FullscreenLoopSection;
