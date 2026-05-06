'use client';

import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <div className="h-[800px] bg-primary flex items-center px-4 sm:px-6 xl:px-8" style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px', // ตั้งขนาดช่องของกริด
        }}>
            <div className="container mx-auto">
                <div className='h-[450px] xl:h-[550px]'>
                    <h1 className="text-[38pt] md:text-7xl lg:text-[66pt] xl:text-[80pt] font-semibold text-white leading-[55px] xl:leading-tight text-left md:text-left mt-0 xl:mt-10">
                        I&apos;m a Passionate Creative
                        <br />
                        <span className="text-orange-500">
                            <Typewriter
                                words={['Full-Stack Developer', 'UX/UI Designer', 'Graphic Designer']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                        ,
                        <br />
                        driven by creativity and
                        <br />
                        curiosity.
                    </h1>
                </div>
                <div className="flex flex-row md:flex-row justify-between mt-0 xl:mt-8">
                    <div className="space-y-2 mb-6 md:mb-0">
                        <p className="text-white text-left md:text-left">Full-Stack Developer</p>
                        <p className="text-white text-left md:text-left">UX/UI Designer</p>
                        <p className="text-white text-left md:text-left">Graphic Designer</p>
                        <p className="text-white text-left md:text-left">Photographer</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between md:space-x-20">
                        <div className="mb-4 md:mb-0 text-left md:text-center">
                            <p className="text-white">Korat, Thailand</p>
                            <a 
                                href="/BoomCV.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-4 px-5 py-2.5 bg-transparent border-white border hover:bg-white hover:text-black rounded-xl transition-all duration-500 font-normal text-sm group"
                            >
                                View CV
                                {/* <svg 
                                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg> */}
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
