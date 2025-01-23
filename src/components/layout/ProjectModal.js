import React from 'react';

const ProjectModal = ({ selectedProject, closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-xl p-0 relative max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 bg-white text-black hover:bg-transparent hover:text-white hover:border hover:duration-500 px-3 py-1 rounded-full"
                    onClick={closeModal}
                >
                    Close
                </button>
                <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-lg mb-4"
                />
                <h3 className="mx-4 text-2xl text-black font-semibold mb-4">{selectedProject.title}</h3>
                <p className="mx-4 text-black mb-4">Technology : {selectedProject.technology}</p>
                <p className="mx-4 text-black mb-4">Description : {selectedProject.description}</p>
                {selectedProject.category !== "UX/UI Design" &&
                    selectedProject.category !== "Graphic Design" && (
                        <div className="mx-3 my-6">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-4 py-2 text-sm lg:px-3 lg:py-2 rounded-lg lg:text-base border border-transparent lg:hover:bg-transparent lg:hover:border-black lg:hover:text-black transition duration-300"
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
