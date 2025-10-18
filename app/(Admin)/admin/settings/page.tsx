"use client";

import AccountSection from "@/components/AdminComponents/Settings/AccountSection";
import NotificationSection from "@/components/AdminComponents/Settings/NotificationSection";
import {
  SettingTabs,
  TabContent,
} from "@/components/AdminComponents/Settings/SettingsTab";
import { useState } from "react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const tabs = [
    { value: "account", label: "Account" },
    { value: "notifications", label: "Notifications" },
  ];

  return (
    <div className="lg:flex gap-5 flex-row">
      <div className="w-full mb-2 lg:w-fit">
        <SettingTabs
          tabs={tabs}
          defaultValue="account"
          onTabChange={setActiveTab}
        />
      </div>
      <div className="w-full">
        <TabContent value="account" activeTab={activeTab}>
          <AccountSection />
        </TabContent>
        <TabContent value="notifications" activeTab={activeTab}>
          <NotificationSection />
        </TabContent>
      </div>
    </div>
  );
}
