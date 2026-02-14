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
          priority
          sizes="100vw"
          className="object-cover"
          quality={100} // Maximum quality
        />
      </div>

      {/* Preload Next Image (Hidden) */}
      <div className="hidden">
        <Image
          src={getPicture(
            currentSection === totalPictures ? 1 : currentSection + 1,
          )}
          alt="preload"
          width={10}
          height={10}
          priority
        />
      </div>

      {/* Overlay Gradient (Optional for text readability if needed later) */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default FullscreenLoopSection;
