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
    <div className="bg-[#FFF] p-2 w-fit rounded-[8px] shadow">
      <div className="w-full bg-white">
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`w-full p-3 rounded-[6px] cursor-pointer ${
                activeTab === tab.value
                  ? "bg-[#1F274B] text-[#FFF] text-base font-extrabold"
                  : "bg-[#FFF] text-[#4C526F] text-base hover:bg-[#FFF]/100"
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
