'use client'

import { useEffect, useState } from "react";

export default function Loader() {
  const text = "PAWITSANAT  PRAPANANYOSANAN"; // เพิ่มช่องว่างระหว่างชื่อและนามสกุล
  const [active, setActive] = useState(true);

  useEffect(() => {
    // หยุดแสดง loader หลังจาก 3 วินาที
    const timer = setTimeout(() => setActive(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-primary flex items-center justify-center px-4 sm:px-6 xl:px-8" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
    }}>
      {active ? (
        <div className="flex flex-col items-center">
          <div className="text-xl lg:text-4xl font-bold mt-8">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block relative"
                style={{
                  animation: `bounceIn 0.8s ease-out ${index * 0.1}s forwards`,
                  ...(char === " " && { marginRight: "0.5rem" }) // เพิ่มระยะห่างเมื่อเจอช่องว่าง
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-2xl text-white">Welcome to my Portfolio!</div>
      )}

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