// Tabs.js
import React from 'react';

const Tabs = ({ tabs, activeTab, changeTab, dropdownOpen, setDropdownOpen }) => {
  return (
    <div className="my-10">
      {/* Dropdown สำหรับหน้าจอเล็ก */}
      <div className="block lg:hidden relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full px-4 py-2 rounded-full border border-white bg-black text-white font-normal flex items-center justify-between"
        >
          {activeTab}
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {/* Dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-black border border-white rounded-lg overflow-hidden transition-all duration-300 ${dropdownOpen ? 'max-h-40 opacity-100 z-50' : 'max-h-0 opacity-0 z-0'}`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                changeTab(tab);
                setDropdownOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs สำหรับหน้าจอใหญ่ */}
      <div className="hidden lg:flex justify-start space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => changeTab(tab)}
            className={`tab px-6 py-2 rounded-full font-normal transition ${activeTab === tab ? 'bg-white text-black' : 'border border-white text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
