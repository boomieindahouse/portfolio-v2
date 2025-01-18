'use client';

import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-primary flex items-center px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-[80pt] font-semibold text-white leading-tight text-left md:text-left">
                    I&apos;m a Passionate Creative
                    <br />
                    <span className="text-orange-500">
                        <Typewriter
                            words={['Front-end Developer', 'UX/UI Designer', 'Graphic Designer']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    ,
                    <br />
                    driven by creativity and
                    <br />
                    curiosity.
                </h1>
                <div className="flex flex-row md:flex-row justify-between mt-8">
                    <div className="space-y-2 mb-6 md:mb-0">
                        <p className="text-white text-left md:text-left">Front End Developer</p>
                        <p className="text-white text-left md:text-left">UX/UI Designer</p>
                        <p className="text-white text-left md:text-left">Graphic Designer</p>
                        <p className="text-white text-left md:text-left">Photography</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between md:space-x-20">
                        <div className="mb-4 md:mb-0 text-left md:text-left">
                            <p className="text-white">Korat, Thailand</p>
                        </div>
                        <div className="flex flex-col items-start md:items-start space-y-2">
                            <Link href="https://linkedin.com" className="text-white hover:text-orange-500">
                                LinkedIn
                            </Link>
                            <Link href="https://github.com" className="text-white hover:text-orange-500">
                                Github
                            </Link>
                            <Link href="mailto:your@email.com" className="text-white hover:text-orange-500">
                                Email
                            </Link>
                            <Link href="https://instagram.com" className="text-white hover:text-orange-500">
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
