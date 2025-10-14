import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AdminProfileDropdown from "./AdminProfileDropdown";
import NotificationBell from "@/components/Icons/AdminIcon/NotificationBell";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const NotifcationAndProfile = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinksUser = [
    {
      label: "Notifications",
      icon: <NotificationBell className="w-5 h-5" />,
    },
  ];

  return (
    <div>
      <div className="flex items-center xl:gap-6 gap-2">
        <ul className="flex items-center gap-4">
          {navLinksUser.map((link) => (
            <li key={link.label} className="relative group">
              <Link
                href="/admin/notifications"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F8FAFB] transition duration-300 cursor-pointer relative"
              >
                {link.icon}
                <span className="absolute top-0 right-0 bg-error-text text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center xl:gap-6 gap-2">
          {/* profile button */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              className="cursor-pointer relative flex items-center gap-2"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <Image
                src="/images/admin/profile.png"
                alt="Profile"
                width={36}
                height={36}
                unoptimized
                className="min-w-[36px] min-h-[36px] object-cover rounded-full"
              />
              <div className="hidden sm:flex items-center gap-2">
                <div>
                  <h5 className="text-[14px] text-primary-text my-0">Nick</h5>
                  <p className="text-[12px] text-secondary-text my-0">Admin</p>
                </div>
                <ChevronDown />
              </div>
            </button>
            {profileDropdownOpen && (
              <div className="absolute top-[50px] -right-0 z-50 xl:right-0">
                <AdminProfileDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifcationAndProfile;
