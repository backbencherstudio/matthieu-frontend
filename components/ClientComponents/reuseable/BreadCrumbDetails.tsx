
"use client"
import HomeIcon from "@/components/Icons/HomeIcon";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CartsProducts from "../ProductDetailsClient/CartsProducts";

type BreadLink = {
  href: string;
  label: string;
};

export default function BreadCrumbDetails({ breadLink, cart = false }: { breadLink: BreadLink[], cart?: boolean }) {

  const [cartCount, setCartCount] = React.useState<number>(0);

  React.useEffect(() => {
    const c = typeof window === 'undefined' ? 0 : (JSON.parse(localStorage.getItem('cart') || '[]') || []).length;
    setCartCount(c);
  }, []);


  return (
    <div className="bg-primary-bg">
      <div className="maxContainer py-5">
        <div className="flex items-center gap-2 text-white">
          <Link href="/">
            <HomeIcon className="h-7 w-7 sm:h-9 sm:w-9" />
          </Link>

          {breadLink.map((link, index) => (
            <div className="flex items-center gap-2" key={index}>
              <span>
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 " />
              </span>

              <Link
                href={link.href}
                className="text-sm sm:text-base font-normal"
              >
                {link.label}
              </Link>
            </div>
          ))}
          {cart === true && (
            <div className="flex gap-3 items-center justify-end ml-auto">
              <span className="w-8 h-8 rounded-full border  border-white flex items-center justify-center leading-[100%] text-sm">
                {cartCount || 0}
              </span>
              <CartsProducts />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
