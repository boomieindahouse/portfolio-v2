import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectModal = ({ selectedProject, closeModal }) => {
  // Lock body scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-50 px-4 flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        animate-fadeIn
      "
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="
          w-full max-w-3xl bg-white rounded-2xl shadow-xl 
          overflow-hidden max-h-[90vh] flex flex-col
          animate-scaleIn relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-200">
          <h2 className="text-xl font-semibold text-zinc-800">
            {selectedProject.title}
          </h2>

          <button
            className="
              w-9 h-9 flex items-center justify-center rounded-full 
              bg-zinc-300 hover:bg-zinc-200 transition
            "
            onClick={closeModal}
          >
            ✕
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            swipeable
            emulateTouch
            interval={3500}
          >
            {selectedProject.images.map((img, i) => (
              <div key={i} className="backdrop-blur-md bg-white/5">
                <img
                  src={img}
                  className="w-full max-h-[400px] object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Content Scrollable */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {/* Info */}
          <div className="space-y-3 text-zinc-700">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {selectedProject.category}
            </p>

            <p>
              <span className="font-semibold">Technology:</span>{" "}
              {selectedProject.technology}
            </p>

            <p>
              <span className="font-semibold">Description:</span>{" "}
              {selectedProject.description}
            </p>
          </div>

          {/* Actions */}
          {(selectedProject.github || selectedProject.liveDemo) && (
            <div className="mt-6 flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4 py-2 rounded-lg border border-zinc-300 
                    bg-zinc-800 text-white hover:bg-zinc-900 transition
                  "
                >
                  GitHub
                </a>
              )}

              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-black text-white px-4 py-2 rounded-lg border border-transparent hover:bg-transparent hover:border-black hover:text-black transition duration-500
                  "
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
