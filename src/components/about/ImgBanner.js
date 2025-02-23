'use client';

import { useState, useEffect } from 'react';

const SplitImageSection = () => {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(0);

    const leftImages = [
        "https://elboomie.vercel.app/assets/img/hobby/hobby4.jpg",
        "https://elboomie.vercel.app/assets/img/hobby/hobby2.jpg",
        "https://elboomie.vercel.app/assets/img/hobby/hobby5.jpg",
        "https://elboomie.vercel.app/assets/img/hobby/hobby3.jpg"
    ];

    const rightImages = [
        "https://elboomie.vercel.app/assets/img/picc.jpg",
        "https://elboomie.vercel.app/assets/img/hobby/hobby6.jpg",
        "https://elboomie.vercel.app/assets/img/hobby/hobby7.jpg"
    ];

    useEffect(() => {
        let leftTimer;
        let rightTimer;

        const startCycle = () => {
            // Update left image immediately
            setLeftImageIndex((prev) => (prev + 1) % leftImages.length);
            
            // Update right image after 2 seconds
            rightTimer = setTimeout(() => {
                setRightImageIndex((prev) => (prev + 1) % rightImages.length);
            }, 2000);
            
            // Start next cycle after 4 seconds
            leftTimer = setTimeout(startCycle, 4000);
        };

        // Start the initial cycle
        startCycle();

        // Cleanup timers
        return () => {
            clearTimeout(leftTimer);
            clearTimeout(rightTimer);
        };
    }, []);

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Image */}
                <div className="w-full h-[400px] md:h-[600px] xl:h-[800px] relative overflow-hidden">
                    <img 
                        src={leftImages[leftImageIndex]} 
                        alt={`Landscape image ${leftImageIndex + 1}`}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </div>
                
                {/* Right Image */}
                <div className="w-full h-[400px] md:h-[600px] xl:h-[800px] relative overflow-hidden">
                    <img 
                        src={rightImages[rightImageIndex]} 
                        alt={`Image ${rightImageIndex + 1}`}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default SplitImageSection;