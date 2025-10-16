"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import AddressBookIcon from "@/components/Icons/MyAccoountIcon/AddressBookIcon";
import DashboardLayoutIcon from "@/components/Icons/MyAccoountIcon/DashboardLayoutIcon";
import HeartIcon from "@/components/Icons/MyAccoountIcon/HeartIcon";
import SideBarShoppingIcon from "@/components/Icons/MyAccoountIcon/SideBarShoppingIcon";
import { Menu, X } from "lucide-react";
import LogoutIcon from "../Icons/AdminIcon/LogoutIcon";
import SettingIcon from "../Icons/AdminIcon/SettingIcon";
import CameraIcon from "../Icons/MyAccoountIcon/CameraIcon";
import ImageUploader from "./imageUploader";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for all devices */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-[#1F274B] font-bold"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static top-0 left-0 h-full md:h-[740px] w-64 md:w-2xs border border-[#DFE1E7] bg-[#F6F8FA] p-3 z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Mobile Close Button (top-right corner) */}
        <div className="flex justify-end md:hidden mb-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#1F274B] p-1 hover:bg-[#E2E6F0] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex flex-col p-4 mb-12">
            <div className="relative w-20 h-20 mx-auto">
              <ImageUploader />
              <label
                htmlFor="avatarUploader"
                className="absolute top-0 right-0 bg-[#1F274B] rounded-full p-1 border border-white cursor-pointer"
              >
                <CameraIcon className="w-4 h-4 text-white" />
              </label>
            </div>

            <div className="items-center mt-5 text-center">
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
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    className={cn(
                      "w-full justify-start bg-[#F6F8FA] text-[#4A4C56] hover:bg-[#F6F8FA]/90 text-[16px] uppercase cursor-pointer rounded-none py-3.5 px-4 my-1.5 !h-auto",
                      isActive &&
                        "w-full justify-start bg-[#1F274B] text-[#FFF] hover:bg-[#1F274B]/90 text-[16px] font-extrabold uppercase leading-[100%] cursor-pointer my-1.5"
                    )}
                  >
                    <div className="flex items-center w-full h-full gap-2">
                      <Icon className="size-5" />
                      <span className="text-base font-bold leading-[100%]">
                        {item.label}
                      </span>
                    </div>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <Button className="w-full justify-start bg-[#F6F8FA] text-[#EB3D4D] hover:bg-[#F6F8FA]/90 text-[16px] font-extrabold uppercase leading-[100%] cursor-pointer rounded-none py-3.5 my-1.5 mt-auto">
            <LogoutIcon />
            LOGOUT
          </Button>
        </div>
      </aside>

      {/* Background overlay (clicking closes sidebar on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
