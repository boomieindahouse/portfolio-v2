import React, { useEffect, useRef } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { Icon } from "@iconify/react";

const ProjectModal = ({ selectedProject, closeModal }) => {
  const lightboxRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, []);

  // Initialize GLightbox
  useEffect(() => {
    if (!selectedProject) return;

    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      selector: ".glightbox", // Use a class selector
    });

    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  const images = Array.isArray(selectedProject.images)
    ? selectedProject.images
    : [selectedProject.images];
  const coverImage = images[0];
  const otherImages = images.slice(1);

  return (
    <div
      className="fixed inset-0 z-50 px-4 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="w-full max-w-6xl bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row animate-scaleIn relative border border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Mobile */}
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 md:hidden transition"
          onClick={closeModal}
        >
          <Icon icon="carbon:close" width="24" />
        </button>

        {/* Image Section (Left/Top) */}
        <div className="w-full md:w-3/5 h-[300px] md:h-auto relative bg-zinc-900 group">
          {/* Main Cover Link */}
          <a
            href={coverImage}
            className="glightbox w-full h-full block relative"
            data-gallery="project-gallery"
          >
            <img
              src={coverImage}
              alt={selectedProject.title}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${coverImage.includes("no-image.png") ? "bg-zinc-800" : ""
                }`}
            />

            {/* Overlay with instructions */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105">
              <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-normal flex items-center gap-2 border border-white/30">
                <Icon icon="bi:zoom-in" /> View Gallery ({images.length})
              </span>
            </div>
          </a>

          {/* Hidden links for other images to be included in the gallery */}
          {otherImages.map((img, idx) => (
            <a
              key={idx}
              href={img}
              className="glightbox hidden"
              data-gallery="project-gallery"
            />
          ))}
        </div>

        {/* Content Section (Right/Bottom) */}
        <div className="w-full md:w-2/5 p-8 overflow-y-auto custom-scrollbar bg-[#111] text-zinc-300 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-normal tracking-wider text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
                {selectedProject.category}
              </span>
              <h2 className="text-3xl font-bold text-white leading-tight">
                {selectedProject.title}
              </h2>
            </div>

            {/* Close Button Desktop */}
            <button
              className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition shrink-0 ml-4"
              onClick={closeModal}
            >
              <Icon icon="carbon:close" width="24" />
            </button>
          </div>

          {/* Details */}
          <div className="space-y-6 flex-1">
            <div>
              <h3 className="text-sm font-normal text-zinc-500 uppercase tracking-wide mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technology.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-normal text-zinc-500 uppercase tracking-wide mb-2">
                About Project
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                {selectedProject.description}
              </p>
            </div>
          </div>

          {/* Actions */}
          {(selectedProject.github || selectedProject.liveDemo) && (
            <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-normal transition-all shadow-lg hover:shadow-orange-600/20"
                >
                  <Icon icon="akar-icons:link-chain" /> Go to website
                </a>
              )}

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-normal transition-all border border-zinc-700"
                >
                  <Icon icon="akar-icons:github-fill" /> Github
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
