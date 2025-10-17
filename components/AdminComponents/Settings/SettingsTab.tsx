"use client";

import type React from "react";

import { useState } from "react";

interface Tab {
  value: string;
  label: string;
}

interface SettingTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onTabChange?: (value: string) => void;
}

export function SettingTabs({
  tabs,
  defaultValue,
  onTabChange,
}: SettingTabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultValue || tabs[0]?.value || ""
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  return (
    <div className="bg-[#FFF] p-2 w-full rounded-[8px] shadow">
      <div className="w-full bg-white">
        <div>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`w-full p-3 rounded-[6px] cursor-pointer ${
                activeTab === tab.value
                  ? "bg-[#1F274B] text-[#FFF] font-extrabold leading-[124%] text-[16px]"
                  : "bg-[#FFF] text-[#4C526F] hover:bg-[#FFF]/100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TabContentProps {
  value: string;
  activeTab: string;
  children: React.ReactNode;
}

export function TabContent({ value, activeTab, children }: TabContentProps) {
  if (value !== activeTab) return null;
  return <>{children}</>;
}
