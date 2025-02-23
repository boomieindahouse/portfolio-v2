// RecentWorks.js
'use client';

import React, { useState } from 'react';
import projects from '../../data/projects';
import ProjectModal from '../layout/ProjectModal';
import PhotographyModal from '../layout/PhotographyModal';
import Tabs from '../layout/Tabs';

const tabs = ["Web & Application", "UX/UI Design", "Graphic Design", "Photography"];

export default function RecentWorks() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const changeTab = (tab) => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setActiveTab(tab);
            setFadeClass('fade-in');
        }, 500);
    };

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const openModal = (project) => {
        if (project.category === 'Photography') {
            setSelectedPhoto(project.image || project.images);
            setIsModalOpen(true);
        } else {
            setSelectedProject(project);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <section className="px-4 sm:px-6 xl:px-8 recent-works bg-black text-white py-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-between border-b border-gray-400 py-5 xl:py-20">
                    <div>
                        <h2 className="text-3xl xl:text-[60pt] font-medium">
                            My Recent Works & Projects
                        </h2>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    changeTab={changeTab}
                    dropdownOpen={dropdownOpen}
                    setDropdownOpen={setDropdownOpen}
                />

                {/* Projects */}
                <div
                    className={`projects grid gap-6 ${fadeClass} ${activeTab === 'Photography'
                        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
                        : 'grid-cols-1 md:grid-cols-3'}`}
                >
                    {projects
                        .filter((project) => project.category === activeTab)
                        .map((project, index) => (
                            <div
                                key={index}
                                className="project-card text-start relative overflow-hidden group cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                {/* projects img */}
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                        src={activeTab === 'Photography' ? project.images : project.images[0]}
                                        alt={project.title}
                                        className="transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* expand */}
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                                        Expand
                                    </div>
                                </div>

                                {/* projects title */}
                                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                            </div>
                        ))}
                </div>
            </div>

            {/* Modal for Projects */}
            {selectedProject && selectedProject.category !== 'Photography' && (
                <ProjectModal selectedProject={selectedProject} closeModal={closeModal} />
            )}

            {/* Modal for Photography */}
            {isModalOpen && (
                <PhotographyModal selectedPhoto={selectedPhoto} closeModal={closeModal} />
            )}
        </section>
    );
}
