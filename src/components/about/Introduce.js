'use client';

import React from 'react';

const Introduce = () => {
    return (
        <section className="px-4 sm:px-6 xl:px-8 bg-primary text-white">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between border-b border-gray-400 py-5 xl:py-20">
                    <div>
                        <h2 className="text-3xl xl:text-[60pt] font-medium">
                            Let me introduce myself
                        </h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-10 xl:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16">
                    <p className="text-lg leading-relaxed">
                        I started as a student in the field of Electrical Control, and as I began learning to write Arduino code, I became interested in programming.
                        <br />
                        <br />
                        I enrolled at Rajamangala University of Technology Isan, majoring in Computer Engineering.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I&apos;m interested in Full-Stack Development and UX/UI design. Whenever I have free time, I often practice coding to enhance my skills.
                        <br />
                        <br />
                        In my spare time, I love to explore new technologies and practice coding to sharpen my skills. When I&apos;m not coding, I enjoy playing games and reading design blogs to get inspired.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
