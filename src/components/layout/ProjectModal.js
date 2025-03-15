import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectModal = ({ selectedProject, closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-xl pb-6 relative max-w-3xl w-full max-h-screen overflow-auto md:max-h-[90vh] custom-scrollbar"
                style={{ WebkitOverflowScrolling: "touch" }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >

                {/* Carousel พร้อมแก้ไข Focus State */}
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    swipeable
                    emulateTouch
                    dynamicHeight
                    interval={2000}
                    onSwipeStart={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                >
                    {selectedProject.images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img}
                                alt={`${selectedProject.title} ${index + 1}`}
                                className="rounded-t-sm pointer-events-none" // ✅ ป้องกัน Hover Selection
                                draggable={false}
                            />
                        </div>
                    ))}
                </Carousel>
                <button
                    className="absolute top-4 right-4 bg-white text-black hover:bg-transparent hover:text-white hover:border hover:duration-500 px-3 py-1 rounded-full"
                    onClick={closeModal}
                >
                    Close
                </button>

                <h3 className="text-2xl text-zinc-700 font-semibold mt-4 px-4">{selectedProject.title}</h3>
                <p className="text-zinc-700 mt-2 px-4"><span className="font-semibold">Technology</span> : {selectedProject.technology}</p>
                <p className="text-zinc-700 mt-2 px-4"><span className="font-semibold">Description</span> : {selectedProject.description}</p>

                {selectedProject.category !== "UX/UI Design" && selectedProject.category !== "Graphic Design" && (
                    <div className="mt-4 px-4">
                        <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-4 py-2 rounded-lg border border-transparent hover:bg-transparent hover:border-black hover:text-black transition duration-300"
                        >
                            View on Github
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
