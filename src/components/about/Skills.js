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
                        As a versatile Full-Stack Developer, UX/UI Designer, and Graphic Designer, I have honed a diverse set of skills that enable me to create engaging and user-friendly digital experiences. My expertise spans a wide range of tools and technologies, ensuring that I can deliver high-quality solutions tailored to each unique project.
                    </p>
                </div>

                {/* Sections */}
                {[
                    {
                        title: 'Programming Language',
                        key: 'programming',
                        items: programmingLanguages,
                        barColor: 'bg-teal-500',
                    },
                    {
                        title: 'Framework',
                        key: 'framework',
                        items: frameworks,
                        barColor: 'bg-blue-400',
                    },
                    {
                        title: 'Tools & Program',
                        key: 'tools',
                        items: toolsAndPrograms,
                    },
                ].map((section) => (
                    <div
                        key={section.key}
                        className="border-b border-gray-400 py-4"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center pt-4" onClick={() => toggleSection(section.key)}>
                            <h3 className="text-2xl font-regular">{section.title}</h3>
                            <span
                                className={`text-2xl rotate-icon ${openSections.includes(section.key) ? 'open' : ''}`}
                            >
                                {openSections.includes(section.key) ? '-' : '+'}
                            </span>
                        </div>

                        {/* Content */}
                        <div
                            className={`mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 dropdown-content ${openSections.includes(section.key) ? 'open' : ''}`}
                        >
                            {section.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group border border-gray-400 rounded-lg p-4 text-center hover:bg-gray-900 transition duration-300"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-12 h-12 mx-auto"
                                    />
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 hover:rounded-lg transition duration-300">
                                        <p className="mb-2 text-lg font-normal">{item.name}</p>
                                        {item.proficiency && (
                                            <div className="w-10/12 h-2 bg-gray-300 rounded">
                                                <div
                                                    className={`h-2 ${section.barColor} rounded`}
                                                    style={{ width: `${item.proficiency}%` }}
                                                ></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
