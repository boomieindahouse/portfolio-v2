'use client';

import { useState, useEffect } from 'react';
import usePicture from '@/hooks/usePicture';

const FullscreenLoopSection = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const { getPicture, totalPictures } = usePicture();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSection((prev) => (prev === totalPictures ? 1 : prev + 1));
        }, 1500);

        return () => clearInterval(interval);
    }, [totalPictures]);

    return (
        <div className="relative w-full h-[900px] overflow-hidden">
            {/* Current Section */}
            <section className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${getPicture(currentSection)})` }}>
                
                {/* Section Content Container */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="container mx-auto px-4">
                        {/* Add your section content here */}
                        <h1 className="text-white text-4xl">Parallax Scrolling Effect</h1>
                    </div>
                </div>
            </section>

            {/* Next Section (Pre-loaded) */}
            <section className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${getPicture(currentSection === totalPictures ? 1 : currentSection + 1)})` }}>
            </section>
        </div>
    );
};

export default FullscreenLoopSection;
