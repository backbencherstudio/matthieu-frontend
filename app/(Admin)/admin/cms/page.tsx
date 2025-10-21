"use client";

import BlogPostTable from "@/components/AdminComponents/Cms/BlogPostTable";
import CmsTabs from "@/components/AdminComponents/Cms/CmsTabs";
import ContactTab from "@/components/AdminComponents/Cms/ContactTab";
import { TabContent } from "@/components/AdminComponents/Settings/SettingsTab";
import BlogIcon from "@/components/Icons/AdminIcon/BlogIcon";
import ContactIcon from "@/components/Icons/AdminIcon/ContactIcon";
import { useState } from "react";

export default function CmsPage() {
  const [activeTab, setActiveTab] = useState("blog");
  const tabs = [
    {
      value: "blog",
      label: "Blog Posts",
      icon: <BlogIcon />,
    },
    { value: "contact", label: "Contact Info", icon: <ContactIcon /> },
  ];

  return (
    <div>
      <div className="w-full mb-2 lg:w-fit">
        <CmsTabs tabs={tabs} defaultValue="blog" onTabChange={setActiveTab} />
      </div>
      <div className="w-full">
        <TabContent value="blog" activeTab={activeTab}>
          <BlogPostTable />
        </TabContent>
        <TabContent value="contact" activeTab={activeTab}>
          <ContactTab />
        </TabContent>
      </div>
    </div>
  );
}
