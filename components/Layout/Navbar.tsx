'use client';
import {
  ArrowUp,
  BadgeEuro,
  EuroIcon,
  Menu,
  SearchIcon,
  X,
} from 'lucide-react';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import LanguageGlobalIcon from '../Icons/LanguageGlobalIcon';
import UsdIcon from '../Icons/UsdIcon';
import UserIcon from '../Icons/UserIcon';
import HoverItems from './HoverItems';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../Shared/LanguageSwitcher';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import CartsProducts from '../ClientComponents/ProductDetailsClient/CartsProducts';
import { getCookie } from '@/helper/RegionCookies';
import UserMenu from './UserMenu';
import { IoIosArrowUp } from 'react-icons/io';
import { useGetCartQuery } from '@/src/redux/client/add-to-cart/cartApi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { data: cartResponse } = useGetCartQuery(undefined);

  // const cartCount =
  //   cartResponse?.data?.items?.reduce(
  //     (total, item) => total+ item.quantity,
  //     0,
  //   ) ?? 0;
  const cartCount = cartResponse?.data?.items?.length ?? 0;
  const navigationLinks = [
    {
      label: 'SADDLES',
      href: '/saddles',
      hasDropdown: true,
      dropdownContent: [
        {
          category: 'BY COLLECTION',
          hasLink: true,
          items: [
            {
              label: 'Arion Saddles',
              subtitle: 'FULL CUSTOM',
              // items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
              items: [
                { label: 'JUMPING', href: '/saddles/jumping' },
                { label: 'DRESSAGE', href: '/saddles/dressage' },
                { label: 'CROSS-COUNTRY', href: '/saddles/cross-country' },
                { label: 'KIDS', href: '/saddles/kids' },
              ],
              href: '/saddles/arion-saddles',
            },
            {
              label: 'Atlas Saddles',
              subtitle: 'SEMI CUSTOM',
              // items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY"],
              items: [
                {
                  label: 'JUMPING',
                  href: '/saddles/atlas-saddles/jumping',
                },
                {
                  label: 'DRESSAGE',
                  href: '/saddles/atlas-saddles/dressage',
                },
                {
                  label: 'CROSS-COUNTRY',
                  href: '/saddles/atlas-saddles/cross-country',
                },
              ],
              href: '/saddles/atlas-saddles',
            },
            {
              label: 'Athena Saddles',
              subtitle: 'TAILOR MADE',
              // items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
              items: [{ label: 'coming soon', href: '#' }],
              // items: [],
              href: '/saddles/athena-saddles',
            },
          ],
        },
        {
          category: 'LEADLINE SADDLE',
          items: [],
          hasLink: true,
          href: '/saddles/leadline-saddle',
        },
        {
          category: 'ALL SADDLES',
          items: [],
          hasLink: true,
          href: '/saddles/all-saddles',
        },
      ],
    },
    {
      label: 'TACK',
      href: '/tack',
      hasDropdown: true,
      dropdownContent: [
        { category: 'Bridles', href: '/tack/#bridles' },
        { category: 'Reins', href: '/tack/#reins' },
        { category: 'Martingales', href: '/tack/#breastplates' },
        { category: 'Girths', href: '/tack/#girths' },
        { category: 'Stirrup Leathers', href: '/tack/#stirrupLeathers' },
        { category: 'Pads', href: '/tack/#pads' },
        { category: 'Rider Apparel', href: '/tack/#riderApparel' },
        { category: 'Boots', href: '/tack/#boots' },
        // { category: "Leather Care", href: "/tack/#leatherCare" },
        // { category: "Halters & Ropes", href: "/tack/#halterRopes" },
        { category: 'Accessories', href: '/tack/#accessories' },
      ],
    },
    {
      label: 'BRAND',
      href: '#',
      hasDropdown: true,
      dropdownContent: [
        { category: 'Our Story', href: '/brand/our-story' },
        { category: 'Meet The Team', href: '/brand/meet-the-team' },
        { category: 'Workshop', href: '/brand/our-workshop' },
        { category: 'Ambassadors', href: '/brand/arion-amabassadors' },
        { category: 'Blog', href: '/brand/blog' },
        { category: 'job offers', href: '/brand/job-offer' },
        { category: 'contact us', href: '/contact-us' },
      ],
    },
    { label: 'USED SADDLES', href: '/saddles/used-saddles' },
    { label: 'FIND US', href: '/find-us' },
  ];

  // Left side options
  const leftOptions = [
    { label: 'USD', icon: <UsdIcon /> },
    { label: 'ENGLISH', icon: <LanguageGlobalIcon /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLogInUers = false;

  const region = getCookie('x-region');
  const isAmerica = region === 'america';
  const icon = isAmerica ? '$' : '€';

  // Simple login check (runs once on mount)
  const isLoggedIn =
    typeof window !== 'undefined' && !!localStorage.getItem('token');

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Only add listener when menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white lg:py-6 py-4">
      <div className="maxContainer uppercase">
        <div className="flex justify-between lg:gap-6 gap-0 items-center ">
          {/* Left side - Language and currency */}
          <div className="flex items-center xl:gap-6 gap-4">
            <div className="flex items-center gap-1">
              <span className="">
                {isAmerica ? <UsdIcon /> : <BadgeEuro className="size-4" />}
              </span>
              <span className="textSecondary text-xs leading-[100%]">
                {isAmerica ? 'USD' : 'EUR'}
              </span>
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
                        isActive ? 'font-semibold' : 'font-normal'
                      }  textSecondary hover:font-semibold leading-[100%] xl:text-base text-sm `}
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
                className="textSecondary hover:font-semibold leading-[100%] xl:text-base text-sm font-normal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Logo (visible on mobile/tablet) */}
          <div className="lg:hidden">
            <div className="">
              <div className="w-[120px]  h-[48px]">
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
          <div className="flex items-center  gap-4">
            <div className="relative hidden lg:block">
              <input className="inputStyle w-[132px] h-[32px] rounded-full transition-colors pl-7" />
              <SearchIcon className="absolute top-1/2 w-[18px] h-[18px] left-[8px] transform -translate-y-1/2 cursor-pointer" />
            </div>
            <div className="lg:block hidden">
              <UserMenu />
            </div>
            <div>
              <div className="relative ml-auto flex items-center gap-3">
                {/* Cart icon as relative anchor */}
                <div className="textSecondary relative flex ">
                  <CartsProducts />

                  {/* Badge inside the cart wrapper */}
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 md:w-6 md:h-6 w-[20px] h-5 rounded-full  bg-red-500 border-2 border-white flex items-center justify-center  text-white text-xs font-bold px-1.5 shadow-md">
                      {cartCount}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="size-6 md:size-8 lg:size-10 text-red-600" />
              ) : (
                <Menu className="size-6 md:size-8 lg:size-10 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 px-4 bg-white">
            <div className="flex flex-col space-y-6">
              {/* Mobile Navigation Links with Dropdown Support */}
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link, index) => (
                  <MobileNavLink key={index} link={link} />
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

function MobileNavLink({ link }: { link: any }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!link.hasDropdown) {
    return (
      <Link
        href={link.href}
        className="flex items-center py-3.5 text-base font-semibold tracking-widest text-[#1F274B] hover:text-[#FE5000] transition-colors uppercase border-t border-gray-100 first:border-t-0"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="border-t border-gray-100 first:border-t-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3.5 text-base font-semibold tracking-widest text-[#1F274B] hover:text-[#FE5000] transition-colors uppercase"
      >
        <span>{link.label}</span>
        <span
          className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}
        >
          <IoIosArrowUp className="md:size-5 size-4" />
        </span>
      </button>

      {isOpen && (
        /* ── Level 1 tree root ── */
        <div className="relative pl-[8px] mb-3">
          {/* L1 vertical rail */}
          <div className="absolute left-0 top-0 -bottom-1.5 w-[1.5px] bg-gradient-to-b from-[#1F274B] to-[#d0d4e8] rounded-full" />

          {link.dropdownContent?.map((category: any, idx: number) => (
            <div key={idx} className="relative pl-5">
              {/* L1 horizontal tick */}
              <div className="absolute left-0 top-[18px] w-4 h-[1.5px] bg-[#c5c9d8]" />

              {/* Category label */}
              <Link
                href={category.href || '#'}
                className="block text-[12px] font-bold tracking-[0.07em] text-[#1F274B] pt-2.5 pb-1 hover:text-[#FE5000] transition-colors"
              >
                {category.category}
              </Link>

              {/* ── Level 2 sub-items ── */}
              {category.items && category.items.length > 0 && (
                <div className="relative pl-[10px]">
                  {/* L2 vertical rail */}
                  <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#dde0ea] rounded-full" />

                  {category.items.map((sub: any, subIdx: number) => (
                    <div key={subIdx} className="relative pl-5">
                      {/* L2 horizontal tick */}
                      <div className="absolute left-0 top-[12px] w-4 h-[1.5px] bg-[#c5c9d8]" />

                      <Link
                        href={sub.href || '#'}
                        className="block text-[12px] font-medium text-[#1F274B] py-[5px] hover:text-[#FE5000] transition-colors"
                      >
                        {sub.label}
                        {sub.subtitle && (
                          <span className="text-[10px] font-normal text-[#8e96b5] ml-1 tracking-normal">
                            {sub.subtitle}
                          </span>
                        )}
                      </Link>

                      {/* ── Level 3 sub-sub items ── */}
                      {sub.items && sub.items.length > 0 && (
                        <div className="relative pl-[10px]">
                          {/* L3 vertical rail */}
                          <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#eaecf4] rounded-full" />

                          {sub.items.map((subSub: any, i: number) => (
                            <div key={i} className="relative pl-5">
                              {/* L3 horizontal tick */}
                              <div className="absolute left-0 top-[10px] w-[14px] h-[1.5px] bg-[#dde0ea]" />
                              <Link
                                href={subSub.href || '#'}
                                className="block text-[11px] tracking-[0.04em] text-[#6b7490] py-[3px] hover:text-[#1F274B] transition-colors"
                              >
                                {subSub.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
