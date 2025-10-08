import LogoutIcon from "@/components/Icons/AdminIcon/LogoutIcon";
import SettingsIcon from "@/components/Icons/DashboardIcons/SettingsIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import SwitchIcon from "@/components/Icons/SwitchIcon";
import Link from "next/link";
import React from "react";

// Import icons from react-icons

const AdminProfileDropdown = () => {
  return (
    <div className="w-[220px] bg-white rounded-[6px] shadow-xl p-4 animate-fade-in flex flex-col gap-4 xl:border border-[#f6f6f6]">
      {/* Logout */}
      <div className="flex flex-col">
        <Link
          href=""
          className="flex items-center gap-3 p-3 rounded-[10px]  hover:bg-red-50 transition-colors duration-150  cursor-pointer"
        >
          <ProfileIcon className="size-5" />
          <span>Profile</span>
        </Link>
        <Link
          href=""
          className="flex items-center gap-3 p-3 rounded-[10px]  hover:bg-red-50 transition-colors duration-150  cursor-pointer"
        >
          <SettingsIcon className="size-5" />
          <span>Settings</span>
        </Link>
        <Link
          href=""
          className="flex items-center gap-3 p-3 rounded-[10px] text-error-text  hover:bg-red-50 transition-colors duration-150  cursor-pointer"
        >
          <LogoutIcon className="w-5 h-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminProfileDropdown;
