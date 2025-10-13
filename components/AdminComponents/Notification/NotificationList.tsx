"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Notifications {
  id: number;
  title: string;
  description: string;
  time: string;
  type: string;
}

export default function NotificationList() {
  const notifications: Notifications[] = [
    {
      id: 1,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 2,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "old",
    },
    {
      id: 3,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 4,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 5,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 6,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "old",
    },
    {
      id: 7,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 8,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 9,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 10,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "old",
    },
    {
      id: 11,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
    {
      id: 12,
      title: "New Order Received",
      description:
        "Order *ORD-2024-001 for Premium Dressage Saddle has been placed by Sarah Johnson",
      time: "5 minutes ago",
      type: "new",
    },
  ];

  const [selectedType, setSelectedType] = useState<string>("all");

  return (
    <>
      {/* Filter */}
      <div className="flex items-center justify-between gap-2 bg-white rounded-[8px] p-4">
        <h1 className="text-xl font-extrabold text-primary-text">
          Notifications
        </h1>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="max-w-[180px] w-full shadow-none outline-none focus-visible:ring-0 cursor-pointer">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* List */}
      <div className="space-y-3 mt-4">
        {notifications
          .filter((notification) => {
            if (selectedType === "all") return true;
            return notification.type === selectedType;
          })
          .map((notification, idx) => (
            <div
              key={idx}
              className="p-4 flex flex-wrap justify-between gap-2 bg-white border border-[#F6F8FA] rounded-[8px]"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-lg text-primary-text">
                  {notification.title}
                </h2>
                <p className="text-sm lg:text-base text-secondary-text">
                  {notification.description}
                </p>
              </div>
              <p className="text-sm lg:text-base text-secondary-text">
                {notification.time}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
