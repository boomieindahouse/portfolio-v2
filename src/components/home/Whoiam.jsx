import React from 'react';

const AboutSection = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 bg-primary text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-[32pt] font-medium border-b border-gray-400 py-5 lg:py-10">
                    Know Who I Am
                </h2>

                <div className="flex flex-col lg:flex-row justify-between mt-5">
                    <div className="flex flex-col justify-between max-w-lg lg:max-w-xl">
                        <div>
                            <h3 className="text-xl lg:text-3xl font-normal mb-6">PAWITSANAT PRAPANANYOSANAN</h3>
                        </div>
                        <div>
                            <p className="text-lg mb-6">
                                I&apos;m a creative and passionate Front-end Developer, UX/UI Designer, and Graphic Designer. I specialize in crafting intuitive and visually stunning digital experiences.
                            </p>
                            <p className="text-lg">
                                Besides my work in design and development, I also have a deep love for photography. I believe in capturing the beauty of the world through my lens, which adds an extra layer of creativity and inspiration to my projects.
                            </p>
                        </div>
                    </div>

                    {/* รูปโปรไฟล์ */}
                    <div className="w-full sm:w-[410px] sm:h-[485px] mt-8 lg:mt-0">
                        <img
                            src="http://i.postimg.cc/XNLD1yV7/profilepic.png"
                            alt="Profile"
                            className="w-full h-full object-cover shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
