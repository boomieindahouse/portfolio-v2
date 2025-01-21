'use client';

import { useState } from 'react';

const HobbiesSection = () => {
    const photos = [
        "https://i.postimg.cc/W328rr9k/picc.jpg",
        "https://i.postimg.cc/Y00xD7B2/355393367-200712936272602-6289766086379571234-n.jpg",
        "https://i.postimg.cc/59KgYX8X/354397081-788469556086765-3935830681538853378-n.jpg",
        "https://i.postimg.cc/zDxyprPR/355392723-770796901451094-8949239429140119245-n.jpg"
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
        setIsModalOpen(false);
    };

    return (
        <section className="px-4 sm:px-6 xl:px-8 bg-primary text-white py-10">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-3xl xl:text-[60pt] font-medium mb-10 border-b border-gray-400 py-5 xl:py-20">
                    Hobbies and Interests
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg xl:text-xl mb-12 md:mb-16 leading-relaxed">
                    Beyond my work, I have a deep passion for photography. I often venture out with my trusty old digital camera to capture the world&apos;s beauty from a unique perspective. The charm and character of using an older camera add a distinct aesthetic to my photos, making each shot a timeless piece of art. Through my lens, I aim to tell stories and preserve moments that inspire creativity in my design work.
                </p>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] overflow-hidden group"
                        >
                            {/* Image */}
                            <img
                                src={photo}
                                alt={`Photography sample ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Expand Button */}
                            <button
                                onClick={() => openModal(photo)}
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300"
                            >
                                Expand
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
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
            )}
        </section>
    );
};

export default HobbiesSection;
