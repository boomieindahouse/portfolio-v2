'use client'

import React, { useState } from 'react';

const BackToTopButton = () => {
  // สร้างสถานะสำหรับการแสดงปุ่ม
  const [isVisible, setIsVisible] = useState(false);

  // ฟังก์ชันที่ใช้ตรวจสอบการเลื่อนหน้า
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // ถ้าเลื่อนเกิน 300px ให้แสดงปุ่ม
    } else {
      setIsVisible(false); // ถ้าไม่เกิน 300px ซ่อนปุ่ม
    }
  };

  // ฟังก์ชันสำหรับการเลื่อนกลับไปด้านบน
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // เลื่อนอย่างนุ่มนวล
    });
  };

  // ใช้ effect เพื่อฟังการเลื่อนหน้า
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 border bg-transparent text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-black hover:duration-700 transition-colors lg:block hidden"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
