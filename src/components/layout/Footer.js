import React from "react";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-second text-white pt-10 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Left Section */}
                    <div className="flex flex-col items-start space-y-4">
                        <h1 className="text-xl font-semibold">Let&apos;s Connect</h1>
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="https://linkedin.com/in/prawitsanat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 text-sm hover:text-blue-500 transition-colors duration-300"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://github.com/boomieindahouse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 text-sm hover:text-purple-600 transition-colors duration-300"
                            >
                                Github
                            </Link>
                            <Link
                                href="mailto:prawitsanat@hotmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 text-sm hover:text-blue-500 transition-colors duration-300"
                            >
                                Email
                            </Link>
                            <Link href="https://www.instagram.com/boomieindahouse/" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:bg-text-gradient hover:text-transparent bg-clip-text">
                                Instagram
                            </Link>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="flex items-start md:items-center justify-start md:justify-center text-left md:text-center">
                        <p className="text-lg lg:text-xl font-medium leading-relaxed">
                            &quot;The future is shaped by your dreams, <br />
                            so stop wasting your time and go to sleep&quot;
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-start md:items-end space-y-4">
                        <h1 className="text-xl font-bold">BOOMIENDAHOUSE</h1>
                        <a
                            href="mailto:prawitsanat@hotmail.com"
                            className="bg-white border border-white text-black px-8 py-3 font-semibold rounded-full shadow-md hover:bg-transparent hover:text-white transition-all duration-700"
                        >
                            Get in touch
                        </a>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 py-5">
                    <p className="text-gray-400 text-center md:text-center text-sm">
                        © 2024 Prawitsanat Prapananyosan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;