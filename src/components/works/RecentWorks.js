"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import projects from "../../data/projects";
import ProjectModal from "../layout/ProjectModal";
import PhotographyModal from "../layout/PhotographyModal";
import Tabs from "../layout/Tabs";

const tabs = [
  "Web & Application",
  "UX/UI Design",
  "Graphic Design",
  "Photography",
];

export default function RecentWorks() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = activeTab === "Photography" ? 10 : 9;

  const changeTab = (tab) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setActiveTab(tab);
      setCurrentPage(1);
      setFadeClass("fade-in");
    }, 500);
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openModal = (project) => {
    if (project.category === "Photography") {
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

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab,
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setFadeClass("fade-in");
      const section = document.getElementById("recent-works");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  useEffect(() => {
    filteredProjects.forEach((project) => {
      if (activeTab === "Photography") {
        if (Array.isArray(project.images)) {
          project.images.forEach((src) => {
            const img = new Image();
            img.src = src;
          });
        } else {
          const img = new Image();
          img.src = project.images;
        }
      } else {
        if (project.images && project.images[0]) {
          const img = new Image();
          img.src = project.images[0];
        }
      }
    });
  }, [activeTab, filteredProjects]);

  return (
    <section
      id="recent-works"
      className="px-4 sm:px-6 xl:px-8 recent-works bg-black text-white py-12"
    >
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

        {/* Projects Grid */}
        <div
          className={`projects grid gap-6 ${fadeClass} ${activeTab === "Photography"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            : "grid-cols-1 md:grid-cols-3"
            }`}
        >
          {currentProjects.map((project, index) => {
            const imageSrc =
              activeTab === "Photography"
                ? project.images
                : project.images[0];
            const isNoImage =
              typeof imageSrc === "string" && imageSrc.includes("no-image.png");

            return (
              <div
                key={index}
                className="project-card text-start relative overflow-hidden group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[6/4] w-full">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className={`w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 ${isNoImage ? "bg-zinc-800" : ""
                      }`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-100">
                    Expand
                  </div>
                </div>

                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2.5 border border-zinc-700 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white text-sm uppercase tracking-wider rounded-xl"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${currentPage === i + 1
                  ? "text-[#f97316] font-bold rounded-xl border"
                  : "border border-zinc-700 hover:bg-zinc-800 text-zinc-400 rounded-xl"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2.5 border border-zinc-700 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white text-sm uppercase tracking-wider rounded-xl"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal for Projects */}
      {selectedProject && selectedProject.category !== "Photography" && (
        <ProjectModal
          selectedProject={selectedProject}
          closeModal={closeModal}
        />
      )}

      {/* Modal for Photography */}
      {isModalOpen && (
        <PhotographyModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
        />
      )}
    </section>
  );
}
