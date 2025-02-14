'use client';

import { useState, useEffect } from 'react';
import usePicture from '@/hooks/usePicture';

const FullscreenLoopSection = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const { getPicture, totalPictures } = usePicture();
    const [lowQualityLoaded, setLowQualityLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSection((prev) => (prev === totalPictures ? 1 : prev + 1));
            setLowQualityLoaded(false);
        }, 2000);

        return () => clearInterval(interval);
    }, [totalPictures]);

    return (
        <div className="relative w-full h-[900px] lg:h-[600px] xl:h-[920px] overflow-hidden">
            {/* Mobile Section */}
            <section className="absolute inset-0 w-full h-full block lg:hidden">
                <img
                    src={getPicture(currentSection, "low")} // โหลดรูปที่เบากว่า
                    alt={`Section ${currentSection}`}
                    loading="lazy"
                    className="w-full h-full object-cover blur-sm transition-all duration-500"
                    onLoad={() => setLowQualityLoaded(true)}
                />
                {lowQualityLoaded && (
                    <img
                        src={getPicture(currentSection)} // โหลดรูปหลัก
                        alt={`Section ${currentSection}`}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0"
                        onLoad={(e) => e.target.classList.remove("opacity-0")}
                    />
                )}
            </section>

            {/* Desktop Section */}
            <section className="absolute inset-0 w-full h-full hidden lg:block xl:bg-fixed xl:bg-center xl:bg-cover"
                style={{ backgroundImage: `url(${getPicture(currentSection, "low")})` }}>
            </section>
        </div>
    );
};

export default FullscreenLoopSection;
