'use client'

import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const AboutSection = () => {
    const birthYear = 2000;
    const birthMonth = 10;
    const today = new Date();
    let age = today.getFullYear() - birthYear;

    if (today.getMonth() + 1 < birthMonth) {
        age--;
    }

    return (
        <section className="px-4 sm:px-6 xl:px-8 bg-primary text-white">
            <div className="container mx-auto">
                <div className='flex items-center justify-between border-b border-gray-400 py-5 xl:py-20'>
                    <div>
                        <h2 className="text-3xl xl:text-[60pt] font-medium">
                            Know Who I Am
                        </h2>
                    </div>
                    <div>
                        <Link href="/about" className='text-gray-400 hover:underline hover:text-white transition-colors duration-300 text-sm lg:text-xl xl:text-2xl'>See more</Link>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row xl:flex-row justify-between mt-5 xl:mt-16">
                    <div className="flex flex-col justify-between max-w-lg xl:max-w-xl">
                        <div className='h-[80px]'>
                            <span className="bg-custom-gradient bg-clip-text text-transparent text-2xl xl:text-[40pt] font-medium mb-6 leading-[45px] xl:leading-[55px]">
                                <Typewriter
                                    words={['PAWITSANAT PRAPANANYOSANAN', 'Boomieindahouse']}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </div>
                        <div className='mb-5 xl:mb-10'>
                            <p className="text-lg mb-6 mt-4">
                                Hello my name is Boomie. I&apos;m a {age}-year-old creative and passionate Front-end Developer, UX/UI Designer, and Graphic Designer. I specialize in crafting intuitive and visually stunning digital experiences.
                            </p>
                            <p className="text-lg">
                                Besides my work in design and development, I also have a deep love for photography. I believe in capturing the beauty of the world through my lens, which adds an extra layer of creativity and inspiration to my projects.
                            </p>
                        </div>
                    </div>

                    {/* รูปโปรไฟล์ */}
                    <div className="w-full sm:w-[410px] sm:h-[485px] mb-5 xl:mb-10 relative group overflow-hidden">
                        <img
                            src="https://i.postimg.cc/7Y5BmHm5/profilepic.png"
                            alt="Profile"
                            className="w-full h-full object-cover shadow-xl transition-transform transform group-hover:scale-110 group-hover:opacity-50 hover:duration-700"
                        />

                        {/* Social Media Icons */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-6">
                                <a href="https://linkedin.com/in/prawitsanat" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="akar-icons:linkedin-fill" className="text-3xl text-white hover:text-blue-500" />
                                </a>
                                <a href="https://github.com/boomieindahouse" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="akar-icons:github-fill" className="text-3xl text-white hover:text-purple-600" />
                                </a>
                                <a href="https://www.instagram.com/boomieindahouse/" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="akar-icons:instagram-fill" className="text-3xl text-white hover:bg-text-gradient hover:rounded-lg" />
                                </a>
                                <a href="mailto:prawitsanat@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <Icon icon="si:mail-line" className="text-3xl text-white hover:text-blue-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
