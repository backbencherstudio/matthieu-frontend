


import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AdminProfileDropdown from "./AdminProfileDropdown";
import NotificationIcon from "@/components/Icons/Dashboard/NotificationIcon";
import NotificationDropdown from "@/components/shared/NavDropdown/NotificationDropdown";

const NotifcationAndProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);


  const notification = true;

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
      icon: (
        <NotificationIcon className="w-6 h-6" notification={notification} />
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center xl:gap-6 gap-2 ">
        <ul className="flex items-center gap-4">
          {navLinksUser.map((link) => (
            <li key={link.label} className="relative group">
              <button
                className="flex items-center gap-2 font-semibold hover:bg-[#F3F3F3] rounded-[10px] transition duration-300 cursor-pointer"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
                onFocus={() => setDropdownOpen(link.label)}
                onBlur={() => setDropdownOpen(null)}
              >
                {link.icon}
              </button>
              {/* Dropdown */}
              <div
                className={`absolute -right-0 xl:right-0 top-11 xl:top-[21px] mt-2  bg-white rounded-b-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto z-20 ${
                  dropdownOpen === link.label
                    ? "opacity-100 pointer-events-auto"
                    : ""
                }`}
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <NotificationDropdown />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center xl:gap-6 gap-2">
          {/* profile button */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              className="cursor-pointer relative"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={44}
                height={44}
                className="object-cover rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </button>
            {profileDropdownOpen && (
              <div className="absolute top-[73px] -right-0 z-50 xl:right-0">
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
