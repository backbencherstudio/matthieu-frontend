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
    <div className="flex gap-5">
      <div>
        <SettingTabs
          tabs={tabs}
          defaultValue="account"
          onTabChange={setActiveTab}
        />
      </div>
      <TabContent value="account" activeTab={activeTab}>
        <AccountSection />
      </TabContent>
      <TabContent value="notifications" activeTab={activeTab}>
        <NotificationSection />
      </TabContent>
    </div>
  );
}
