// src/components/layout/Navbar.js
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // detect click outside menu to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-transparent px-0 sm:px-6 xl:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[72px] px-4 lg:px-0">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <Link
              href="/"
              className="text-white text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
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
            className="text-white p-2 md:hidden relative z-50"
            aria-label="Menu"
            ref={buttonRef} // ผูกกับปุ่ม Hamburger
          >
            <svg
              className={`h-6 w-6 transform transition-transform duration-700 ${isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M4 12h16" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef} // ผูกกับเมนู
        className={`${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } fixed inset-x-0 top-[55px] bg-primary z-40 md:hidden transition-all duration-500 ease-in-out`}
      >
        <div className="flex flex-col items-end justify-center space-y-5 py-8 px-8">
          <Link
            href="/"
            className="text-white text-1xl hover:text-orange-500 transition-colors border-b border-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-1xl hover:text-orange-500 transition-colors border-b border-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/works"
            className="text-white text-1xl hover:text-orange-500 transition-colors border-b border-gray-400"
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
