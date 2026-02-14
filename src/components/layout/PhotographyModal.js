import React from 'react';

const PhotographyModal = ({ selectedPhoto, closeModal }) => {
    console.log("Selected Photo:", selectedPhoto);
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 mx-4"
            onClick={closeModal}
        >
            <div className="relative">
                <img
                    src={selectedPhoto}
                    alt="Expanded view"
                    className={`max-w-full max-h-screen object-contain ${selectedPhoto && selectedPhoto.includes("no-image.png")
                            ? "bg-zinc-800"
                            : ""
                        }`}
                />
                <button
                    className="absolute top-4 right-4 bg-white text-black hover:bg-transparent hover:text-white hover:border hover:duration-500 px-3 py-1 rounded-full"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PhotographyModal;
