"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Heart,
  LayoutDashboard,
  LogOut,
  MapPin,
  Settings,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "DASHBOARD", href: "/dashboard" },
  { icon: ShoppingCart, label: "ORDERS", href: "/orders" },
  { icon: MapPin, label: "MY ADDRESS", href: "/address" },
  { icon: Heart, label: "SAVED", href: "/saved" },
  { icon: Settings, label: "SETTINGS", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-2xs h-[740px] border border-[#DFE1E7] bg-[#F6F8FA] p-3">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="flex flex-col items-center p-4">
          <Avatar className="h-20 w-20 mb-6">
            <AvatarImage
              src="/professional-portrait.png"
              alt="Yasir Abed Rabbu"
            />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>

          <h2 className="text-[20px] font-extrabold uppercase leading-[100%] text-[#1F274B]">
            YASIR ABED RABBU
          </h2>

          <p className="text-[16px] text-[#4C526F] leading-[100%] normal-case mt-2">
            arionadmin@gmail.com
          </p>
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
                    "w-full justify-start bg-[#F6F8FA] text-[#4A4C56] hover:bg-[#F6F8FA]/90 text-[16px] font-extrabold uppercase leading-[100%] cursor-pointer rounded-none py-3.5 my-1.5",
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
          <LogOut className="h-4 w-4" />
          LOGOUT
        </Button>
      </div>
    </aside>
  );
}
