'use client'

import React, { useState } from "react";

const tabs = ["Web & Application", "UX/UI Design", "Graphic Design", "Photography"];

const projects = [
    // Web & Application
    {
        category: "Web & Application",
        title: "Meeting Creative Company Website",
        image: "https://i.postimg.cc/yxg3c3Py/meetingweb.jpg",
        technology: "NEXT.js, TailwindCSS",
        description: "A website redesigned with NEXT.js for improved performance.",
        github: "https://github.com/username/meeting-creative",
    },
    {
        category: "Web & Application",
        title: "E-commerce Front-end",
        image: "https://i.postimg.cc/KzYMcH3V/ecom.jpg",
        technology: "React + Vite, TailwindCSS",
        description: "This project is an e-commerce website frontend developed to practice writing in React and using Tailwind CSS.",
        github: "https://github.com/username/ecommerce-frontend",
    },
    {
        category: "Web & Application",
        title: "Ourgram",
        image: "https://i.postimg.cc/WbZyK73Q/ourgram.jpg",
        technology: "Altorouter PHP, Javascript, CSS, MySql",
        description: "This project is a simple web application developed to mimic some basic functionalities of Instagram. It was created using the AltoRouter framework for routing.",
        github: "https://github.com/username/ourgram",
    },
    {
        category: "Web & Application",
        title: "Movie Recommendation",
        image: "https://i.postimg.cc/RZQ67Bcy/movierec.jpg",
        technology: "React Native",
        description: "This Movie Recommendation App It is an application that helps users discover popular movies and filter them by genre.",
        github: "https://github.com/username/movie-recommendation",
    },
    // UX/UI Design
    {
        category: "UX/UI Design",
        title: "Mobile App Redesign",
        image: "https://placehold.co/600x400/",
        technology: "Figma, Adobe XD",
        description: "A complete redesign of a mobile banking app to enhance user experience.",
        github: "https://github.com/username/mobile-app-redesign",
    },
    {
        category: "UX/UI Design",
        title: "E-commerce UI Kit",
        image: "https://placehold.co/600x400/",
        technology: "Figma",
        description: "Designed a UI kit for e-commerce platforms to speed up design workflows.",
        github: "https://github.com/username/ecommerce-ui-kit",
    },
    // Graphic Design
    {
        category: "Graphic Design",
        title: "Brand Logo Design",
        image: "https://i.postimg.cc/FR1KbK8D/mock6.jpg",
        technology: "Adobe Illustrator, Photoshop",
        description: "Created a logo and branding materials for a startup tech company.",
        github: "https://github.com/username/brand-logo-design",
    },
    {
        category: "Graphic Design",
        title: "Social Media Graphics",
        image: "https://i.postimg.cc/Qtq98Mwb/mock4.jpg",
        technology: "Canva, Photoshop",
        description: "Designed graphics for a social media campaign that increased engagement by 30%.",
        github: "https://github.com/username/social-media-graphics",
    },
    // Photography
    {
        category: "Photography",
        image: "https://i.postimg.cc/W328rr9k/picc.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/59KgYX8X/354397081-788469556086765-3935830681538853378-n.jpg",
    },
];

export default function RecentWorks() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState("");

    const openModal = (project) => {
        if (project.category === "Photography") {
            setSelectedPhoto(project.image);
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
        <section className="recent-works bg-black text-white py-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-between border-b border-gray-400 py-5 xl:py-20">
                    <div>
                        <h2 className="text-3xl xl:text-[60pt] font-medium">
                            My Recent Works & Projects
                        </h2>
                    </div>
                </div>

                {/* Tabs */}
                <div className="tabs flex justify-start space-x-4 my-10">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            className={`tab px-6 py-2 rounded-full font-medium transition ${activeTab === tab
                                    ? "bg-white text-black"
                                    : "border border-white text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects */}
                <div className="projects grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects
                        .filter((project) => project.category === activeTab)
                        .map((project, index) => (
                            <div
                                key={index}
                                className="project-card text-start"
                                onClick={() => openModal(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                            </div>
                        ))}
                </div>
            </div>

            {/* Modal for Projects */}
            {selectedProject && selectedProject.category !== "Photography" && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-0 relative max-w-3xl w-[full]">
                        <button
                            className="absolute top-4 right-4 bg-white text-black hover:bg-transparent hover:text-white hover:border hover:duration-500 px-3 py-1 rounded-full"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="rounded-lg mb-4"
                        />
                        <h3 className="mx-4 text-2xl text-black font-semibold mb-2">{selectedProject.title}</h3>
                        <p className="mx-4 text-black mb-4">Technology : {selectedProject.technology}</p>
                        <p className="mx-4 text-black mb-4">Description : {selectedProject.description}</p>
                        <div className="mx-3 my-6">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-4 py-2 text-sm lg:px-3 lg:py-2 rounded-lg lg:text-base border border-transparent lg:hover:bg-transparent lg:hover:border-black lg:hover:text-black transition duration-300"
                            >
                                View on Github
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Photography */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 mx-4"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={selectedPhoto}
                            alt="Expanded view"
                            className="max-w-full max-h-screen object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 bg-white text-black hover:bg-transparent hover:text-white hover:border hover:duration-500 px-3 py-1 rounded-full"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
