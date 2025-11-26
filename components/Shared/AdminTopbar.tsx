"use client";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import NotifcationAndProfile from "./NavDropdown/NotifcationAndProfile";

const menuItems = [
  { label: "Dashboard", href: "/" },
  {
    label: "User Management",
    href: "/user-management",
  },
  {
    label: "Service Management",
    href: "/service-management",
  },
  {
    label: "Orders Management",
    href: "/orders-management",
  },
  {
    label: "Payments & Earnings",
    href: "/payment-and-earnings",
  },
  // {
  //   label: "Reports & Disputes",
  //   href: "/reports-and-disputes",
  // },
  {
    label: "Settings",
    href: "/settings",
  },
  {
    label: "Payment Settings",
    href: "/payment-settings",
  },
  {
    label: "Dispute Resolution",
    href: "/dispute-resolution",
  },
];

interface AdminTopBarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function AdminTopBar({
  sidebarOpen,
  toggleSidebar,
}: AdminTopBarProps) {
  const pathname = usePathname();

  const headerLabel = menuItems
    .slice()
    .sort((a, b) => b.href.length - a.href.length)
    .find((menu) => pathname.startsWith(menu.href));

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="lg:p-5 p-4 md:pl-8 lg:pl-4 xl:pl-8 flex items-center justify-between border bg-white border-[#EAECF0] sticky top-0 z-50">
      <div className="flex items-center lg:hidden mr-4 lg:mr-0">
        <button onClick={toggleSidebar} className="">
          {!sidebarOpen && <HiOutlineMenuAlt1 size={26} />}
        </button>
      </div>
      <div className="flex justify-between items-center w-full gap-1">
        <form className={`max-w-[400px] w-full relative`}>
          <input
            type="text"
            placeholder="Search products, orders, customers..."
            className="h-[48px] w-full p-4 pr-8 rounded-[6px] border border-[#ECEFF3] bg-[#F8FAFB] focus:outline-none focus:border focus:border-primary-text text-base"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer"
          >
            <FiSearch className="size-4 text-primary-text" />
          </button>
        </form>

        <NotifcationAndProfile />
      </div>
    </div>
  );
}
