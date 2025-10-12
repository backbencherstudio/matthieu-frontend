import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreadLink = {
  href?: string;
  label: string;
};

export default function BreadCrumb({ breadLink }: { breadLink: BreadLink[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-primary-text">
      {breadLink.map((link, index) => (
        <div className="flex items-center gap-2" key={index}>
          {index !== 0 && (
            <span>
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 " />
            </span>
          )}

          {link.href ? (
            <Link href={link.href} className="text-sm sm:text-base">
              {link.label}
            </Link>
          ) : (
            <span className="text-sm sm:text-base text-[#777980]">
              {link.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
