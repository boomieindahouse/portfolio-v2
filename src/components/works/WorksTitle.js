'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
        };

        // Initial check
        checkIfMobile();

        // Add event listener
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="h-full py-20 bg-primary flex items-center px-4 sm:px-6 xl:px-8" style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
        }}>
            <div className="container mx-auto">
                <div className='h-[400px] xl:h-full'>
                    <h1 className="text-[40pt] md:text-7xl lg:text-[66pt] xl:text-[80pt] font-semibold text-white leading-[55px] xl:leading-tight text-left md:text-left mt-16 xl:mt-10">
                        Discover my creative passion and dedication to excellence.
                        {/* <br />
                        {isMobile ? 'Boomies' : 'Prapananyosanan'} */}
                    </h1>
                </div>
                <div className="flex flex-row md:flex-row justify-between mt-0 lg:mt-20 xl:mt-20">
                    <div className="space-y-2 mb-6 md:mb-0">
                        <p className="text-white text-left md:text-left">Front End Developer</p>
                        <p className="text-white text-left md:text-left">UX/UI Designer</p>
                        <p className="text-white text-left md:text-left">Graphic Designer</p>
                        <p className="text-white text-left md:text-left">Photographer</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between md:space-x-20">
                        <div className="mb-4 md:mb-0 text-left md:text-left">
                            <a
                                href="/my-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-2 py-1 text-black bg-white hover:bg-transparent hover:border hover:text-white rounded-md transition duration-300 ease-in-out"
                            >
                                My Resume
                            </a>
                        </div>
                        <div className="flex flex-col items-start md:items-start space-y-2">
                            <Link href="https://linkedin.com/in/prawitsanat" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                                LinkedIn
                            </Link>
                            <Link href="https://github.com/boomieindahouse" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-600">
                                Github
                            </Link>
                            <Link href="mailto:prawitsanat@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                                Email
                            </Link>
                            <Link href="https://www.instagram.com/boomieindahouse/" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-text-gradient hover:text-transparent bg-clip-text">
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;