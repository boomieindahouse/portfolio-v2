'use client'

import React, { useState, useEffect } from "react";
import projects from '../../data/projects';
import { CSSTransition } from "react-transition-group";

const tabs = ["Web & Application", "UX/UI Design", "Graphic Design", "Photography"];

export default function RecentWorks() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [fadeClass, setFadeClass] = useState("fade-in");

    const changeTab = (tab) => {
        setFadeClass("fade-out");
        setTimeout(() => {
            setActiveTab(tab);
            setFadeClass("fade-in");
        }, 500); // time for transition to complete before changing the content
    };

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                <div className="my-10">
                    {/* Dropdown สำหรับหน้าจอเล็ก */}
                    <div className="block lg:hidden relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full px-4 py-2 rounded-full border border-white bg-black text-white font-medium flex items-center justify-between"
                        >
                            {activeTab}
                            <svg
                                className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                            className={`absolute top-full left-0 w-full bg-black border border-white rounded-lg overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-40 opacity-100 z-50" : "max-h-0 opacity-0 z-0"
                                }`}
                            style={{ transitionProperty: "max-height, opacity" }}
                        >
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        changeTab(tab);
                                        setDropdownOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tabs สำหรับหน้าจอใหญ่ */}
                    <div className="hidden lg:flex justify-start space-x-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => changeTab(tab)}
                                className={`tab px-6 py-2 rounded-full font-medium transition ${activeTab === tab
                                    ? "bg-white text-black"
                                    : "border border-white text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div
                    className={`projects grid gap-6 ${fadeClass} ${activeTab === "Photography"
                        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                        : "grid-cols-1 md:grid-cols-3"
                        }`}
                >
                    {projects
                        .filter((project) => project.category === activeTab)
                        .map((project, index) => (
                            <div
                                key={index}
                                className="project-card text-start relative overflow-hidden group cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                {/* รูปโปรเจ็ค */}
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* คำว่า See More */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                                    Expand
                                </div>

                                {/* ชื่อโปรเจ็ค */}
                                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                            </div>
                        ))}
                </div>
            </div>

            {/* Modal for Projects */}
            {selectedProject && selectedProject.category !== "Photography" && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
                    onClick={closeModal} // เมื่อคลิกนอก modal จะปิด
                >
                    <div
                        className="bg-white rounded-xl p-0 relative max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()} // หยุด propagation เมื่อคลิกใน modal
                    >
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
                        <h3 className="mx-4 text-2xl text-black font-semibold mb-4">{selectedProject.title}</h3>
                        <p className="mx-4 text-black mb-4">Technology : {selectedProject.technology}</p>
                        <p className="mx-4 text-black mb-4">Description : {selectedProject.description}</p>
                        {selectedProject.category !== "UX/UI Design" &&
                            selectedProject.category !== "Graphic Design" && (
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
                            )}
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
