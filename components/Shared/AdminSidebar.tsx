"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import DashboardIcon from "../Icons/AdminIcon/DashboardIcon";
import AnalyticsIcon from "../Icons/AdminIcon/AnalyticsIcon";
import ProductIcon from "../Icons/AdminIcon/ProductIcon";
import CartIcon from "../Icons/AdminIcon/CartIcon";
import UsersIcon from "../Icons/AdminIcon/UsersIcon";
import CMSIcon from "../Icons/AdminIcon/CMSIcon";
import CouponIcon from "../Icons/AdminIcon/CouponIcon";
import CardIcon from "../Icons/AdminIcon/CardIcon";
import AlertIcon from "../Icons/AdminIcon/AlertIcon";
import SettingIcon from "../Icons/AdminIcon/SettingIcon";
import LogoutIcon from "../Icons/AdminIcon/LogoutIcon";

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: DashboardIcon },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: AnalyticsIcon,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: ProductIcon,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: CartIcon,
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: UsersIcon,
  },
  {
    label: "CMS",
    href: "/admin/cms",
    icon: CMSIcon,
  },
  {
    label: "Coupons",
    href: "/admin/coupons",
    icon: CouponIcon,
  },
  {
    label: "Payments",
    href: "/admin/payments",
    icon: CardIcon,
  },
  {
    label: "Saddle Alerts",
    href: "/admin/saddle-alerts",
    icon: AlertIcon,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: SettingIcon,
  },
];

const bottomMenu = [
  {
    label: "Logout",
    href: "/admin/logout",
    icon: LogoutIcon,
  },
];

interface AdminSidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function AdminSidebar({
  sidebarOpen,
  toggleSidebar,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed bg-white md:py-8 py-6 px-4 z-50 h-screen overflow-y-auto w-[250px] transform border-r border-[#EAECF0] transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div>
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Link href="/admin/dashboard">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={112}
                height={40}
                className=""
              />
            </Link>
            <MdClose
              size={26}
              className="text-[#EB3D4D] lg:hidden block"
              onClick={toggleSidebar}
            />
          </div>

          {/* Menu Items */}
          <nav className="mt-6">
            {menuItems.map((item, index) => {
              const isActive = (() => {
                if (item.href === "/") {
                  return pathname === "/";
                }
                return pathname === item.href;
              })();
              return (
                <div className="mb-2" key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center md:text-base text-sm py-3 pl-3 pr-2 duration-300 rounded-[4px] gap-3 text-secondary-text ${
                      isActive
                        ? "bg-primary-bg text-white"
                        : "bg-transparent hover:bg-primary-bg cursor-pointer hover:text-white"
                    }`}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom menu */}
        <div className="">
          {bottomMenu.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <div className="mb-2" key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center md:text-base text-sm py-3 pl-3 pr-2 duration-300 rounded-[4px] gap-3 text-error-text ${
                    isActive
                      ? "bg-error-text text-white"
                      : "bg-transparent hover:bg-error-text cursor-pointer hover:text-white"
                  }`}
                >
                  <item.icon />
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
