'use client'
import React, { useState } from "react";
import { MdOutlineExplore } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { useAppStore } from "@/zustand/store";
const CustomTab = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 cursor-pointer p-2 hover:border-blue-300`}
    >
      <Icon className={isActive ? "text-blue-500" : "text-gray-500"} size={36} />
      <span className={isActive ? "text-blue-500" : "text-gray-500"}>{label}</span>
    </div>
  );
};


export default function Footer() {
  const {tabNow, setTab,tabs} = useAppStore();

  const handleTabClick = (tab) => {
    setTab(tab.label);
  };

  const tabIcons = tabs.map((tab) => {
    switch (tab) {
      case 'Explore':
        return { icon: MdOutlineExplore, label: tab };
      case 'Tool':
        return { icon: VscTools, label: tab };
      case 'My':
        return { icon: IoPersonOutline, label: tab };
      default:
        return { icon: null, label: tab };
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full">
        <div className="flex justify-around">
          {tabIcons.map((tabIcon, index) => (
            <CustomTab
              key={index}
              icon={tabIcon.icon}
              label={tabIcon.label}
              isActive={tabIcon.label === tabNow}
              onClick={() => handleTabClick(tabIcon)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
