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
        <div className="relative w-full h-[900px] lg:h-[600px] xl:h-[920px] overflow-hidden">
            {/* Current Section for Mobile */}
            <section className="absolute inset-0 w-full h-full block lg:hidden">
                <img
                    src={getPicture(currentSection)}
                    alt={`Section ${currentSection}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />

                {/* Section Content Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        {/* Add your section content here */}
                        {/* <h1 className="text-white text-4xl">Parallax Scrolling Effect</h1> */}
                    </div>
                </div>
            </section>

            {/* Current Section for Desktop */}
            <section className="absolute inset-0 w-full h-full hidden lg:block xl:bg-fixed xl:bg-center xl:bg-cover"
                style={{ backgroundImage: `url(${getPicture(currentSection)})` }}>

                {/* Section Content Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        {/* Add your section content here */}
                        {/* <h1 className="text-white text-4xl">Parallax Scrolling Effect</h1> */}
                    </div>
                </div>
            </section>

            {/* Next Section (Pre-loaded) for Desktop */}
            <section className="absolute inset-0 w-full h-full hidden lg:block xl:bg-fixed xl:bg-center xl:bg-cover"
                style={{ backgroundImage: `url(${getPicture(currentSection)})`, loading: 'lazy' }}>
            </section>
        </div>
    );
};

export default FullscreenLoopSection;
