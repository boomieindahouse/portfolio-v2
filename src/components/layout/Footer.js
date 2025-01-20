import React from "react";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center lg:items-start gap-y-8">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start space-y-2 text-center lg:text-left">
                    <h1 className="text-xl font-semibold">Contact</h1>
                    <Link href="https://linkedin.com/in/prawitsanat" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-blue-500">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/boomieindahouse" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-purple-600">
                        Github
                    </Link>
                    <Link href="mailto:prawitsanat@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-blue-500">
                        Email
                    </Link>
                    <Link href="https://www.instagram.com/boomieindahouse/" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:bg-text-gradient hover:text-transparent bg-clip-text">
                        Instagram
                    </Link>
                </div>

                {/* Center Section */}
                <div className="w-full lg:w-auto text-center">
                    <p className="text-lg font-semibold">
                        &quot;The future is shaped by your dreams, <br />
                        so stop wasting your time and go to sleep&quot;
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                    <h1 className="text-xl font-bold">BOOMIENDAHOUSE</h1>
                    <button className="bg-white text-black px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300 mt-4">
                        Get in touch
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
                © 2024 Prawitsanat Prapananyosan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
