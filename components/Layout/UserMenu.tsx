// components/UserMenu.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import UserIcon from '../Icons/UserIcon';
import { useRouter } from 'next/navigation';


export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('token');

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('userType');
    
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict;';
    document.cookie = 'userType=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict;';
    
    setIsOpen(false);
    
    // Preferred: client-side navigation
    router.replace('/signin');          // or '/' or '/signin'
    // router.refresh();               // optional: force refresh server components
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-3 rounded-full bg-[#F6F8FA] hover:bg-gray-200"
      >
        <UserIcon className="size-[18px]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2  text-nowrap bg-[#1F274B] text-xs  z-50">
          {isLoggedIn ? (
            <>
              <Link
                href="/my-account/dashboard"
                className="block px-4 py-2 text-white hover:bg-[#454F7B94] "
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 uppercase text-red-500 hover:text-red-400 hover:bg-[#454F7B94] cursor-pointer "
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              href="/signin"
              className="block px-4 py-2  text-white hover:bg-[#454F7B94] "
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </div>
  );
}