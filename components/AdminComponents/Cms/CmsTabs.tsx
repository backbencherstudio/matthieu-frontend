"use client";

import { useState } from "react";

interface Tab {
  value: string;
  label: string;
  icon: any;
}

interface CmsTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onTabChange?: (value: string) => void;
}

export default function CmsTabs({
  tabs,
  defaultValue,
  onTabChange,
}: CmsTabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultValue || tabs[0]?.value || ""
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold leading-[100%] text-[#1F274B] mb-6">
        Content Management System (CMS)
      </h1>
      <div className="p-2 bg-[#FFF] rounded-[8px]">
        <div className="flex items-center w-full">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`rounded-[6px] cursor-pointer mx-2.5 ${
                activeTab === tab.value
                  ? "bg-[#1F274B] text-[#FFF] font-extrabold leading-[124%] text-[16px] px-5 py-3"
                  : "bg-[#FFF] text-[#4C526F] hover:bg-[#FFF]/100"
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
