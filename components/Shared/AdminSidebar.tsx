"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MdClose } from "react-icons/md"
import DashboardMenuIcon from "../Icons/DashboardIcons/DashboardMenuIcon"
import UserManagementMenuIcon from "./NavDropdown/UserManagementIcon"
import ServiceManagementMenuIcon from "./NavDropdown/ServiceManagementIcon"
import DashboardIcon from "../Icons/DashboardIcons/DashboardIcon"
import WalletIcon from "../Icons/DashboardIcons/WalletIcon"
import SettingsIcon from "../Icons/DashboardIcons/SettingsIcon"
import DisputeResolutionIcon from "../Icons/DashboardIcons/DisputeResolutionIcon"



const menuItems= [
  { label: "Dashboard", href: "/", icon: DashboardMenuIcon },
  {
    label: "User Management",
    href: "/user-management",
    icon: UserManagementMenuIcon,
  },
  {
    label: "Service Management",
    href: "/service-management",
    icon: ServiceManagementMenuIcon ,
  },
  {
    label: "Orders Management",
    href: "/orders-management",
    icon: DashboardIcon ,
  },
  {
    label: "Payments & Earnings",
    href: "/payment-and-earnings",
    icon: WalletIcon ,
  },
  // {
  //   label: "Reports & Disputes",
  //   href: "/reports-and-disputes",
  //   icon: ReportsDisputsMenuIcon ,
  // },
]

const bottomMenu = [
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon ,
  },
  {
    label: "Payment Settings",
    href: "/payment-settings",
    icon: WalletIcon ,
  },
  {
    label: "Dispute Resolution",
    href: "/dispute-resolution",
    icon: DisputeResolutionIcon ,
  },
]

interface AdminSidebarProps {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

export default function AdminSidebar({ sidebarOpen, toggleSidebar }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {sidebarOpen && <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={toggleSidebar}></div>}

      <div
        className={`fixed bg-white md:px-8 py-6 px-4 z-40 h-screen xl:w-[350px] w-[300px] transform border-r border-[#EAECF0] transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="Palomazo Logo" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12" />
            <span className="font-bold text-base sm:text-[1.375rem] text-[#161A1E]">Palomazo</span>
          </Link>
          <MdClose size={26} className="text-[#EB3D4D] lg:hidden block" onClick={toggleSidebar} />
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          <p className="text-[#65686C] text-base font-semibold leading-[128%] track32 py-3">Menu</p>
          {menuItems.map((item, index) => {
            const isActive = (() => {
              if (item.href === "/") {
                return pathname === "/"
              }
              return pathname.startsWith(item.href)
            })()
            return (
              <div className="mb-2" key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center md:text-base text-sm font-semibold p-3 duration-300 rounded-[10px] gap-2 leading-[128%] track32 text-[#161A1E] ${
                    isActive
                      ? "btn text-white"
                      : "bg-transparent hover:bg-[#d87e1f] hover:shadow-[2px_2px_2.9px_0px_rgba(208,_126,_31,_0.40)] cursor-pointer hover:text-white"
                  }`}
                >
                  <item.icon /> 
                  {item.label}
                </Link>
              </div>
            )
          })}
        </nav>

        {/* Bottom menu */}
        <div className="absolute w-full md:pr-[64px] pr-[32px]">
          <p className="py-3 rounded-[10px] text-[#161A1E]">Reports & Disputes</p>
          {bottomMenu.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <div className="mb-2" key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center md:text-base text-sm font-semibold p-3 duration-300 rounded-[10px] gap-2 leading-[128%] track32 text-[#161A1E] ${
                    isActive
                      ? "btn text-white"
                      : "bg-transparent hover:bg-[#d87e1f] hover:shadow-[2px_2px_2.9px_0px_rgba(208,_126,_31,_0.40)] cursor-pointer hover:text-white"
                  }`}
                >
                  <item.icon /> 
                  {item.label}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
