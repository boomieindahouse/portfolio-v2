"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const HobbiesSection = () => {
  const photos = [
    "https://elboomie.vercel.app/assets/img/picc.jpg",
    "https://elboomie.vercel.app/assets/img/hobby/hobby2.jpg",
    "https://elboomie.vercel.app/assets/img/hobby/hobby3.jpg",
    "https://elboomie.vercel.app/assets/img/hobby/hobby4.jpg",
  ];

  // --- Initialize GLightbox ---
  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      closeButton: true,
      zoomable: true,
      draggable: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="px-4 sm:px-6 xl:px-8 bg-primary text-white py-10">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl xl:text-[60pt] font-medium mb-10 border-b border-gray-400 py-5 xl:py-20">
          Hobbies and Interests
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg xl:text-xl mb-12 md:mb-16 leading-relaxed">
          Beyond my work, I have a deep passion for photography. I often venture
          out with my trusty old digital camera to capture the world&apos;s beauty
          from a unique perspective. The charm and character of using an older
          camera add a distinct aesthetic to my photos, making each shot a
          timeless piece of art. Through my lens, I aim to tell stories and
          preserve moments that inspire creativity in my design work.
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              {/* ใช้ GLightbox */}
              <a
                href={photo}
                className="glightbox"
                data-gallery="hobby-gallery"
              >
                <img
                  src={photo}
                  alt={`Photography sample ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                />
              </a>

              {/* Expand Overlay Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300 pointer-events-none">
                Expand
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
