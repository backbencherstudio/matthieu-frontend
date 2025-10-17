"use client";

import { useState } from "react";
import Toggle from "./NotificationToggle";

interface NotificationItem {
  id: string;
  label: string;
  enabled: boolean;
}

export default function NotificationSection() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    { id: "orders", label: "Order notifications", enabled: true },
    { id: "marketing", label: "Marketing emails", enabled: false },
    { id: "updates", label: "Product updates", enabled: true },
    { id: "delivery", label: "Delivery Update", enabled: true },
  ]);

  const handleToggle = (id: string) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };
  return (
    <div className="p-8 bg-[#FFF] border border-[#F5F5F7] rounded-[12px] w-full shadow">
      <h2 className="text-[20px] font-extrabold leading-[120%] text-[#1F274B]">
        Notifications
      </h2>
      <div className="mt-[24.5px]">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-[14px] px-[16px] bg-[#F8FAFB] my-4 rounded-[8px]"
          >
            <label className="text-[16px] leading-[100%] text-[#4A4C56]">
              {item.label}
            </label>
            <Toggle
              checked={item.enabled}
              onChange={() => handleToggle(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
