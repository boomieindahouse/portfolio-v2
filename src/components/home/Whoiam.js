"use client";

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react";
import Link from "next/link";
import projects from "../../data/projects";

import Image from "next/image";

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
        <div className="flex items-center justify-between border-b border-gray-400 py-5 xl:py-20">
          <div>
            <h2 className="text-3xl xl:text-[60pt] font-medium">
              Know Who I Am
            </h2>
          </div>
          <div>
            <Link
              href="/about"
              className="text-gray-400 hover:underline hover:text-white transition-colors duration-300 text-sm lg:text-xl xl:text-2xl"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between mt-5 xl:mt-16">
          <div className="flex flex-col justify-between max-w-lg xl:max-w-xl">
            <div className="h-[80px]">
              <span className="bg-custom-gradient bg-clip-text text-transparent text-2xl xl:text-[40pt] font-medium mb-6 leading-[45px] xl:leading-[55px]">
                <Typewriter
                  words={["PAWITSANAT PRAPANANYOSANAN", "Boomieindahouse"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            <div className="mb-5 xl:mb-10">
              <p className="text-lg mb-6 mt-4">
                Hello my name is Boomie. I&apos;m a {age}-year-old
                <br /> I started with a simple question: How can complex things
                feel simple?
              </p>
              <p className="text-lg">
                My background traverses Graphic Design, Photography, and
                Software Engineering. This hybrid perspective allows me to build
                tools that are not only robust under the hood but intuitive on
                the surface.
                <br />
                <br />I don’t just “hand off” designs to developers — I build
                them. I ensure the animation curves match the feeling of the
                brand, and the API response times match the speed of thought.
              </p>
            </div>
          </div>

          {/* รูปโปรไฟล์ */}
          <div className="w-full sm:w-[410px] sm:h-[485px] mb-5 xl:mb-10 relative group overflow-hidden">
            <Image
              src="https://elboomie.vercel.app/assets/img/profilepic.png"
              alt="Profile"
              fill
              className="object-cover shadow-xl transition-transform transform group-hover:scale-110 group-hover:opacity-50 hover:duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Social Media Icons */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com/in/prawitsanat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="akar-icons:linkedin-fill"
                    className="text-3xl text-white hover:text-blue-500"
                  />
                </a>
                <a
                  href="https://github.com/boomieindahouse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="akar-icons:github-fill"
                    className="text-3xl text-white hover:text-purple-600"
                  />
                </a>
                <a
                  href="https://www.instagram.com/boomieindahouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="akar-icons:instagram-fill"
                    className="text-3xl text-white hover:bg-text-gradient hover:rounded-lg"
                  />
                </a>
                <a
                  href="mailto:prawitsanat@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="si:mail-line"
                    className="text-3xl text-white hover:text-blue-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mt-8 lg:mt-12">
          {projects.slice(0, 4).map((project, index) => {
            const imageSrc = Array.isArray(project.images)
              ? project.images[0]
              : project.images;
            return (
              <Link
                href="/works#recent-works"
                key={index}
                className={`relative block ${index % 2 !== 0 ? "sm:mt-16 lg:mt-24" : ""}`}
              >
                <div className="bg-primary w-full aspect-[4/3] rounded-lg overflow-hidden group border border-gray-800">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-lg lg:text-xl font-medium">
                  {project.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
