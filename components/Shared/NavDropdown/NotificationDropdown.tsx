
import NotificationIcon from "@/components/Icons/NotificationIcon";
import React from "react";


const notifications = [
  {
    id: 1,
    title: "Audio Engineer",
    description: "Find instrumentalists & vocalists for...",
    time: "12 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Audio Engineer",
    description: "Find instrumentalists & vocalists for...",
    time: "12 min ago",
    unread: false,
  },
  // ...more notifications
];

const NotificationDropdown = () => {
  return (
    <div className="pt-8">
      <div className=" bg-white rounded-b-2xl shadow-md border border-[#E8E9E9] p-6 z-40">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E9E9] mb-4">
          <div className="flex items-center gap-2">
            <NotificationIcon className="w-6 h-6" notification={true} />
            <span className="text-lg font-semibold">Mark as read</span>
          </div>
          <button className="primary-text font-semibold flex items-center gap-1">
            Mark as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col gap-2">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition
              ${notif.unread ? "" : ""}
              hover:bg-[#F6F6F6]`}
            >
              <div className="border border-[#E8E9E9] rounded-[10px] p-3">
                <NotificationIcon className="w-8 h-8 text-[#FF9900]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{notif.title}</span>
                  <span className="text-sm text-[#A0A0A0]">{notif.time}</span>
                </div>
                <div className="text-sm text-[#65686C] truncate">
                  {notif.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
