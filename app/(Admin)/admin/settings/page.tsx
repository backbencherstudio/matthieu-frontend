"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  return (
    <div className="bg-[#FFF] p-2 w-[210px] rounded-xl">
      <div className="w-full bg-white">
        <div className="space-y-2">
          <button
            onClick={() => setActiveTab("account")}
            className={`w-full p-3 rounded-[6px] font-semibold text-base transition-all ${
              activeTab === "account"
                ? "bg-[#1F274B] text-white"
                : "bg-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full px-6 py-4 rounded-xl font-semibold text-base transition-all ${
              activeTab === "notifications"
                ? "bg-[#2d3748] text-white"
                : "bg-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
