"use client"
import React, { useState } from 'react';
import { Menu, X, Search, User, SearchIcon } from 'lucide-react';
import UsdIcon from '../Icons/UsdIcon';
import LanguageGlobalIcon from '../Icons/LanguageGlobalIcon';
import Link from 'next/link';
import UserIcon from '../Icons/UserIcon';
import HoverItems from './HoverItems';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data
  const navigationLinks = [
    { label: 'SADDLES', href: '#' },
    { label: 'TACK', href: '#' },
    { label: 'BRAND', href: '#' },
    { label: 'TRY A SADDLE', href: '#' },
    { label: 'FIND US', href: '/find-us' }
  ];

  const navigationLinks2 = [
    {
      label: 'SADDLES',
      href: '#',
      hasDropdown: true,
      dropdownContent: [
        {
          category: 'BY COLLECTION',
          hasLink: true,
          items: [
            {
              label: 'Arion Saddles',
              subtitle: 'FULL CUSTOM',
              items: ['JUMPING', 'DRESSAGE', 'CROSS-COUNTRY', 'KIDS'],
              href: "/something where"
            },
            {
              label: 'Atlas Saddles',
              subtitle: 'SEMI CUSTOM',
              items: ['JUMPING', 'DRESSAGE', 'CROSS-COUNTRY', 'KIDS'],
              href: "/something where"
            },
            {
              label: 'Athena Saddles',
              subtitle: 'TAILOR MADE',
              items: ['JUMPING', 'DRESSAGE', 'CROSS-COUNTRY', 'KIDS'],
              href: "/something where"
            }
          ]
        },
        { category: 'USED SADDLES', items: [], hasLink: false, },
        { category: 'ALL SADDLES', items: [], hasLink: false, }
      ]
    },
    {
      label: 'TACK', href: '#', subItems: [
        { label: 'Bridles', href: '#' },
        { label: 'Reins', href: '#' },
        { label: 'Martingales', href: '#' },
        { label: 'Girths', href: '#' },
        { label: 'Halters & Ropes', href: '#' },
        { label: 'Boots', href: '#' },
        { label: 'Leather Care', href: '#' },
        { label: 'Accessories', href: '#' }
      ]
    },
    {
      label: 'BRAND', href: '#',
      subItems: [
        { label: 'Our Story', href: '#' },
        { label: 'Meet The Team', href: '#' },
        { label: 'Workshop', href: '#' },
        { label: 'Ambassadors', href: '#' },
        { label: 'Blog', href: '#' }
      ]
    },
    { label: 'TRY A SADDLE', href: '#' },
    { label: 'FIND US', href: '#' }
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
            {leftOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <span className="">{option?.icon} </span>
                <span className="textPrimary text-xs leading-[100%]">
                  {option.label}
                </span>
              </div>
            ))}
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center xl:gap-10 gap-6">
            {navigationLinks2.slice(0, 3).map((link, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Link
                    href={link.href}
                    className="textPrimary hover:font-semibold leading-[100%] xl:text-base text-sm font-normal"
                  >
                    {link.label}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-0 mt-3">
                    <HoverItems items = {link}/>
                </HoverCardContent>
              </HoverCard>
              // <Link
              //   key={index}
              //   href={link.href}

              //   className="textPrimary hover:font-semibold leading-[100%] xl:text-base text-sm font-normal"
              // >
              //   {link.label}
              // </Link>
            ))}

            {/* Logo */}
            <div className="">
              <div className="w-[156px] h-[56px]">
                <img src="/matheiu-logo.png" alt="" />
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
                <img src="/matheiu-logo.png" alt="" />
              </div>
            </div>
          </div>

          {/* Right side - Search and User icons */}
          <div className="flex items-center md:space-x-4 space-x-2">
            <div className='relative'>
              <input className="border border-[#DFE1E7] focus:outline-0 focus:border-[#1F274B] w-[132px] h-[32px] rounded-full transition-colors pl-7" />
              <SearchIcon className="absolute top-1/2 w-[18px] h-[18px] left-[8px] transform -translate-y-1/2 cursor-pointer" />
            </div>
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer bg-[#F6F8FA] hover:bg-gray-100 rounded-full transition-colors">
              <UserIcon className="size-[18px] " />
            </button>

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
                      <span className="">{option?.icon}  </span>
                      <span className='textPrimary text-xs leading-[100%]'>{option.label}</span>
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
