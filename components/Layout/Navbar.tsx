"use client";
import { Menu, SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LanguageGlobalIcon from "../Icons/LanguageGlobalIcon";
import UsdIcon from "../Icons/UsdIcon";
import UserIcon from "../Icons/UserIcon";
import HoverItems from "./HoverItems";

import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../Shared/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState("bottom");
  const pathName = usePathname();

  const navigationLinks = [
    {
      label: "SADDLES",
      href: "/saddles",
      hasDropdown: true,
      dropdownContent: [
        {
          category: "BY COLLECTION",
          hasLink: true,
          items: [
            {
              label: "Arion Saddles",
              subtitle: "FULL CUSTOM",
              items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
              href: "/saddles/arion-saddles",
            },
            {
              label: "Atlas Saddles",
              subtitle: "SEMI CUSTOM",
              items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
              href: "/saddles/atlas-saddles",
            },
            {
              label: "Athena Saddles",
              subtitle: "TAILOR MADE",
              items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
              href: "/saddles/athena-saddles",
            },
          ],
        },
        {
          category: "USED SADDLES",
          items: [],
          hasLink: true,
          href: "/saddles/used-saddles",
        },
        {
          category: "ALL SADDLES",
          items: [],
          hasLink: true,
          href: "/saddles/all-saddles",
        },
      ],
    },
    {
      label: "TACK",
      href: "/tack",
      hasDropdown: true,
      dropdownContent: [
        { category: "Bridles", href: "/tack/bridles" },
        { category: "Reins", href: "/tack/reins" },
        { category: "Martingales", href: "/tack/breastplates" },
        { category: "Girths", href: "/tack/girths" },
        { category: "Halters & Ropes", href: "/tack/halters-and-ropes" },
        { category: "Boots", href: "/tack/boots" },
        { category: "Leather Care", href: "/tack/leather-care" },
        { category: "Accessories", href: "/tack/accessories" },
      ],
    },
    {
      label: "BRAND",
      href: "/brand/our-story",
      hasDropdown: true,
      dropdownContent: [
        { category: "Our Story", href: "/brand/our-story" },
        { category: "Meet The Team", href: "/brand/meet-the-team" },
        { category: "Workshop", href: "/brand/our-workshop" },
        { category: "Ambassadors", href: "/brand/arion-amabassadors" },
        { category: "Blog", href: "/brand/blog" },
        { category: "job offer", href: "/brand/job-offer" },
      ],
    },
    { label: "TRY A SADDLE", href: "#" },
    { label: "FIND US", href: "/find-us" },
  ];

  // Left side options
  const leftOptions = [
    { label: "USD", icon: <UsdIcon /> },
    { label: "ENGLISH", icon: <LanguageGlobalIcon /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white lg:py-6 py-4">
      <div className="maxContainer uppercase">
        <div className="flex justify-between lg:gap-6 gap-0 items-center ">
          {/* Left side - Language and currency */}
          <div className="hidden md:flex items-center xl:gap-6 gap-4">
            <div className="flex items-center gap-1.5">
              <span className="">
                <UsdIcon />{" "}
              </span>
              <span className="textPrimary text-xs leading-[100%]">USD</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center xl:gap-10 gap-6">
            {navigationLinks.slice(0, 3).map((link, index) => {
              const isActive = pathName.includes(link.href);
              return (
                <HoverCard key={index} openDelay={200}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={link.href}
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      }  textPrimary hover:font-semibold leading-[100%] xl:text-base text-sm `}
                    >
                      {link.label}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-0 mt-6 transition-all duration-100 border-0  rounded-none">
                    <HoverItems items={link} />
                  </HoverCardContent>
                </HoverCard>
              );
            })}

            {/* Logo */}
            <div className="">
              <div className="w-[156px] h-[56px]">
                <Link href="/">
                  <img src="/matheiu-logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            {navigationLinks.slice(3).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="textPrimary hover:font-semibold leading-[100%] xl:text-base text-sm font-normal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Logo (visible on mobile/tablet) */}
          <div className="lg:hidden">
            <div className="">
              <div className="w-[156px] h-[56px]">
                <Link href="/">
                  <Image
                    src="/matheiu-logo.png"
                    alt="Logo"
                    width={156}
                    height={56}
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Search and User icons */}
          <div className="flex items-center md:space-x-4 space-x-2">
            <div className="relative">
              <input className="inputStyle w-[132px] h-[32px] rounded-full transition-colors pl-7" />
              <SearchIcon className="absolute top-1/2 w-[18px] h-[18px] left-[8px] transform -translate-y-1/2 cursor-pointer" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer p-3 rounded-full bg-[#F6F8FA]">
                  <UserIcon className="size-[18px]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-none">
                <DropdownMenuLabel> </DropdownMenuLabel>

                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem
                    value="top"
                    className="cursor-pointer rounded-none"
                  >
                    <Link href="/my-account/dashboard">My Account</Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile language and currency */}
              <div className="flex md:hidden items-center justify-between  pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  {leftOptions.map((option, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <span className="">{option?.icon} </span>
                      <span className="textPrimary text-xs leading-[100%]">
                        {option.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile navigation links */}
              <div className="flex flex-col space-y-4 ">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="textPrimary hover:font-semibold leading-[100%]  text-sm font-normal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
