import React from 'react';

const PhotographyModal = ({ selectedPhoto, closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 mx-4"
            onClick={closeModal}
        >
            <div className="relative">
                <img
                    src={selectedPhoto}
                    alt="Expanded view"
                    className="max-w-full max-h-screen object-contain"
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
