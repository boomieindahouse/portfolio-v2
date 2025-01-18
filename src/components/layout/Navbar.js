// src/components/layout/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[72px] px-4 lg:px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              BOOMIENDAHOUSE
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden flex space-x-10 md:flex">
            <Link
              href="/"
              className="text-white text-lg hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white text-lg hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/works"
              className="text-white text-lg hover:text-orange-500 transition-colors"
            >
              Works
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="text-white p-2 md:hidden"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            href="/"
            className="text-white text-2xl hover:text-orange-500 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl hover:text-orange-500 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/works"
            className="text-white text-2xl hover:text-orange-500 transition-colors"
            onClick={toggleMenu}
          >
            Works
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
