"use client";

import AddressBookIcon from "@/components/Icons/MyAccoountIcon/AddressBookIcon";
import DashboardLayoutIcon from "@/components/Icons/MyAccoountIcon/DashboardLayoutIcon";
import HeartIcon from "@/components/Icons/MyAccoountIcon/HeartIcon";
import SideBarShoppingIcon from "@/components/Icons/MyAccoountIcon/SideBarShoppingIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoutIcon from "../Icons/AdminIcon/LogoutIcon";
import SettingIcon from "../Icons/AdminIcon/SettingIcon";
import CameraIcon from "../Icons/MyAccoountIcon/CameraIcon";

const menuItems = [
  {
    icon: DashboardLayoutIcon,
    label: "DASHBOARD",
    href: "/my-account/dashboard",
  },
  { icon: SideBarShoppingIcon, label: "ORDERS", href: "/my-account/orders" },
  { icon: AddressBookIcon, label: "MY ADDRESS", href: "/my-account/address" },
  { icon: HeartIcon, label: "SAVED", href: "/my-account/saved" },
  { icon: SettingIcon, label: "SETTINGS", href: "/my-account/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [preview, setPreview] = useState("/myAccount/profile.jpg");

  // handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    setPreview(fileURL);

    console.log("Selected file:", file);
  };

  return (
    <aside className="w-2xs h-[740px] border border-[#DFE1E7] bg-[#F6F8FA] p-3">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="flex flex-col p-4 mb-12">
          <div className="relative w-20 h-20">
            <input
              id="avatarUploader"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />

            <label htmlFor="avatarUploader" className="cursor-pointer block">
              <Avatar className="w-20 h-20">
                <AvatarImage src={preview} alt="Profile image" />
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
            </label>

            <label
              htmlFor="avatarUploader"
              className="absolute top-0 right-0 bg-[#1F274B] rounded-full p-1 border border-white cursor-pointer"
            >
              <CameraIcon className="w-4 h-4 text-white" />
            </label>
          </div>

          <div className="items-center mt-5">
            <h2 className="text-[20px] font-extrabold uppercase leading-[100%] text-[#1F274B]">
              YASIR ABED RABBU
            </h2>

            <p className="text-[16px] text-[#4C526F] leading-[100%] normal-case mt-2">
              arionadmin@gmail.com
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  className={cn(
                    "w-full justify-start bg-[#F6F8FA] text-[#4A4C56] hover:bg-[#F6F8FA]/90 text-[16px] font-extrabold uppercase leading-[100%] cursor-pointer rounded-none py-3.5 px-4 my-1.5 !h-auto",
                    isActive &&
                      "w-full justify-start bg-[#1F274B] text-[#FFF] hover:bg-[#1F274B]/90 text-[16px] font-extrabold uppercase leading-[100%] cursor-pointer my-1.5"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <Button className="w-full justify-start bg-[#F6F8FA] text-[#EB3D4D] hover:bg-[#F6F8FA]/90 text-[16px] font-extrabold uppercase leading-[100%] cursor-pointer rounded-none py-3.5 my-1.5">
          <LogoutIcon />
          LOGOUT
        </Button>
      </div>
    </aside>
  );
}
