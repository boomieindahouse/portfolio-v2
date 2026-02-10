"use client";

import React, { useEffect } from "react";
import "./cursor.css"; // นำเข้า CSS ที่สร้างไว้

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    // Function to track mouse position using transform for performance
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // Function to add hover effect
    const handleMouseEnter = (e) => {
      if (e.target.closest("a, button")) {
        cursor?.classList.add("cursor-hover");
      }
    };

    // Function to remove hover effect
    const handleMouseLeave = (e) => {
      if (e.target.closest("a, button")) {
        cursor?.classList.remove("cursor-hover");
      }
    };

    // Use event delegation for better performance and dynamic elements
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ top: 0, left: 0, position: "fixed", pointerEvents: "none" }}
    ></div>
  );
};

export default Cursor;
