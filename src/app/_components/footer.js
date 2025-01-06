'use client'
import React, { useState } from "react";

const CustomTab = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 cursor-pointer p-2 hover:border-blue-300`}
    >
      <Icon className={isActive ? "text-blue-500" : "text-gray-500"} />
      <span className={isActive ? "text-blue-500" : "text-gray-500"}>{label}</span>
    </div>
  );
};

const CustomTabs = ({ tabs, onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-around">
        {tabs.map((tab, index) => (
          <CustomTab
            key={index}
            icon={tab.icon}
            label={tab.label}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Example icons
const GalleryIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
  </svg>
);

const MusicIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M12 3v10.55a4 4 0 1 0 2-3.45V5h4V3h-6z" fill="currentColor" />
  </svg>
);

const VideoIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M17 10.5V6H7v12h10v-4.5l4 4V6.5l-4 4z" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const tabs = [
    {
      icon: GalleryIcon,
      label: "Photos",
    },
    {
      icon: MusicIcon,
      label: "Music",
    },
    {
      icon: VideoIcon,
      label: "Videos",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <CustomTabs
        tabs={tabs}
        onTabChange={(index) => console.log(`Tab changed to: ${index}`)}
      />
    </div>
  );
}
