"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const text = "PAWITSANAT PRAPANANYOSANAN";
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Stop showing loader after 3 seconds
    const timer = setTimeout(() => setActive(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center px-4 sm:px-6 xl:px-8 text-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="flex flex-col items-center max-w-full">
        <div className="text-base md:text-xl lg:text-4xl font-bold mt-8 flex flex-wrap justify-center gap-y-2">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block relative"
              style={{
                animation: `bounceIn 0.8s ease-out ${index * 0.1}s forwards`,
                marginRight: char === " " ? "0.5rem" : "0.05rem",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          60% {
            transform: translateY(30px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
