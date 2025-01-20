'use client';

import { useState, useEffect } from 'react';

const SplitImageSection = () => {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(0);

    const leftImages = [
        "https://i.postimg.cc/zDxyprPR/355392723-770796901451094-8949239429140119245-n.jpg",
        "https://i.postimg.cc/Y00xD7B2/355393367-200712936272602-6289766086379571234-n.jpg",
        "https://i.postimg.cc/59KgYX8X/354397081-788469556086765-3935830681538853378-n.jpg"
    ];

    const rightImages = [
        "https://i.postimg.cc/W328rr9k/picc.jpg",
        "https://i.postimg.cc/SN5JFG4S/403832295-371728835248282-1590041472945275250-n.jpg",
        "https://i.postimg.cc/J0YthNBQ/409495588-1344033926237695-7849092120105937832-n.jpg"
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