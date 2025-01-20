// SkillsSection.js
'use client';

import React, { useState } from 'react';
import { programmingLanguages, frameworks, toolsAndPrograms } from '../constant';

const SkillsSection = () => {
    const [openSections, setOpenSections] = useState([]); 

    const toggleSection = (section) => {
        if (openSections.includes(section)) {
            setOpenSections(openSections.filter((openSection) => openSection !== section));
        } else {
            setOpenSections([...openSections, section]);
        }
    };

    return (
        <section className="px-4 sm:px-6 xl:px-8 bg-primary text-white py-10">
            <div className="container mx-auto">

                {/* Intro */}
                <div className="mb-8">
                    <h2 className="text-3xl xl:text-[60pt] font-medium mb-10 border-b border-gray-400 py-5 xl:py-20">
                        Skills and Expertise
                    </h2>
                    <p className="text-lg xl:text-xl mb-8 leading-relaxed">
                        As a versatile Front-end Developer, UX/UI Designer, and Graphic Designer, I have honed a diverse set of skills that enable me to create engaging and user-friendly digital experiences. My expertise spans a wide range of tools and technologies, ensuring that I can deliver high-quality solutions tailored to each unique project.
                    </p>
                </div>

                {/* Language */}
                <div className="border-b border-gray-400 py-10">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('programming')}
                    >
                        <h3 className="text-2xl font-regular">Programming Language</h3>
                        <span className="text-2xl">{openSections.includes('programming') ? '-' : '+'}</span>
                    </div>
                    {openSections.includes('programming') && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {programmingLanguages.map((language) => (
                                <div
                                    key={language.name}
                                    className="relative group border border-gray-400 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300"
                                >
                                    {/* แสดงเฉพาะไอคอนเมื่อไม่ hover */}
                                    <img
                                        src={language.icon}
                                        alt={language.name}
                                        className="w-12 h-12 mx-auto"
                                    />

                                    {/* แสดงข้อมูลเมื่อ hover */}
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="mb-2 text-lg font-medium">{language.name}</p>
                                        <div className="w-10/12 h-2 bg-gray-300 rounded">
                                            <div
                                                className="h-2 bg-green-500 rounded"
                                                style={{ width: `${language.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}
                </div>

                {/* Framework */}
                <div className="border-b border-gray-400 py-10">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('framework')}
                    >
                        <h3 className="text-2xl font-regular">Framework</h3>
                        <span className="text-2xl">{openSections.includes('framework') ? '-' : '+'}</span>
                    </div>
                    {openSections.includes('framework') && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {frameworks.map((framework) => (
                                <div
                                    key={framework.name}
                                    className="relative group border border-gray-400 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300"
                                >
                                    <img
                                        src={framework.icon}
                                        alt={framework.name}
                                        className="w-12 h-12 mx-auto"
                                    />
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="mb-2 text-lg font-medium">{framework.name}</p>
                                        <div className="w-10/12 h-2 bg-gray-300 rounded">
                                            <div
                                                className="h-2 bg-blue-500 rounded"
                                                style={{ width: `${framework.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}
                </div>

                {/* Tools & Program */}
                <div className="border-b border-gray-400 py-10">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('tools')}
                    >
                        <h3 className="text-2xl font-regular">Tools & Program</h3>
                        <span className="text-2xl">{openSections.includes('tools') ? '-' : '+'}</span>
                    </div>
                    {openSections.includes('tools') && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {toolsAndPrograms.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="relative group border border-gray-400 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300"
                                >
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="w-12 h-12 mx-auto"
                                    />
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="mb-2 text-lg font-medium">{tool.name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
