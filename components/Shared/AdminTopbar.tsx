"use client";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";




import Link from "next/link";
import ArrowForwardIcon from "../Icons/DashboardIcons/ArrowForwarIcon";
import NotifcationAndProfile from "./NavDropdown/NotifcationAndProfile";

const menuItems= [
  { label: "Dashboard", href: "/",  },
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
]

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
    <div className="md:p-6 p-4 md:pl-8 lg:pl-4 xl:pl-8 flex items-center justify-between border bg-white border-[#EAECF0]">
      <div className="flex items-center lg:hidden mr-4 lg:mr-0">
        <button onClick={toggleSidebar} className="">
          {!sidebarOpen && <HiOutlineMenuAlt1 size={26} />}
        </button>
      </div>
      <div className="flex justify-between items-center md:w-full">
        <div className="flex  items-center gap-2">
          <Link href={`${headerLabel?.href}`}  className="text-base font-medium leading-[160%] track32 md:block hidden" >
            {headerLabel?.label}
          </Link>
          <div>
            {pathSegments.length > 1 && (
              <div className="flex items-center gap-2">
                <span><ArrowForwardIcon/></span>
                <span className="text-base font-medium capitalize">
                  {pathSegments[1]}{" "}
                  {/* Convert "musician-profile" to "musician profile" */}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center xl:gap-[160px] gap-4 text-base font-medium">
          <form
            className={`flex items-center flex-1 xl:w-[420px] lg:w-[250px] w-full relative z-30`}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-2.5 pl-4 pr-2 rounded-lg border border-[#e8e9e9] focus:outline-none focus:border focus:border-[#e9a04c] text-sm"
            />
            <button
              type="submit"
              style={{
                boxShadow: "2px 2px 2.9px 0px rgba(208, 126, 31, 0.40)",
              }}
              className="bg-[#e9a04c] hover:bg-[#e9a04c]/90 text-white p-1.5 rounded-md flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer w-8 h-8 border"
            >
              <FiSearch className="size-5" />
            </button>
          </form>
          <div className="">
            <NotifcationAndProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
