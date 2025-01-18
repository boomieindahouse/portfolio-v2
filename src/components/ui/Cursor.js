'use client';

import React, { useEffect } from 'react';
import './cursor.css'; // นำเข้า CSS ที่สร้างไว้

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // ฟังก์ชันติดตามตำแหน่งเมาส์
    const handleMouseMove = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    // ฟังก์ชันเพิ่ม effect เมื่อ hover
    const handleMouseEnter = () => {
      cursor.classList.add('cursor-hover');
    };

    // ฟังก์ชันลบ effect เมื่อออกจาก hover
    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover');
    };

    // Event listeners สำหรับ mousemove และ hover
    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
