import HomeIcon from "@/components/Icons/HomeIcon";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreadLink = {
  href: string;
  label: string;
};

export default function BreadCrumb({ breadLink }: { breadLink: BreadLink[] }) {
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
        </div>
      </div>
    </div>
  );
}
