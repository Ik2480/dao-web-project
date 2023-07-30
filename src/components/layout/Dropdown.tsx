
"use client"
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="hamburger-icon cursor-pointer" onClick={toggleMenu}>
          <div
            className={`hamburger-line w-6 h-0.5 bg-black my-1 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></div>
          <div
            className={`hamburger-line w-6 h-0.5 bg-black my-1 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`hamburger-line w-6 h-0.5 bg-black my-1 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></div>
        </div>
      </div>

      {isOpen && (
        <ul className="menu-list absolute top-12 right-0 bg-white shadow-md w-40">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Artificial Intelligence
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            BLOCKCHAIN SPECIALIST
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Internet of Things and AI Specialist
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Certified Web 3.0 and Metaverse Developer
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
