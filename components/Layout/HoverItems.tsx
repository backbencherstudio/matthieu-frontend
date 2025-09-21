"use client";
import React, { useState } from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"; // Make sure HoverCard is imported from your UI components
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function HoverItems({ items }) {
  console.log(items);

  return (
    <div>
      <div>
        {items?.dropdownContent?.map((item, index) => (
          <div key={index} className="flex flex-col relative">
            {/* Main Category Item wrapped with HoverCard */}
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <Link href={item?.href || "#"} className="px-6 py-3 bg-[#1F274B] hover:bg-[#454F7B94] text-white text-sm leading-[100%] cursor-pointer uppercase">
                  {item?.category}
                </Link>
              </HoverCardTrigger>

              {/* HoverCardContent */}
              <HoverCardContent
                align="end"
                className="w-[420px] p-0 border-0 absolute left-0  -top-[42px] rounded-none"
              >
                {/* Conditional rendering for dropdown */}
                {item?.items && (
                  <div className="w-full">
                    {item?.items.map((subItem, subIndex) => (
                      <div key={subIndex} className="bg-[#1F274B] ">
                        {/* If subItems have links, show them */}
                        <Link
                          href={subItem.href || "#"} // Set the correct link if href is present
                          className="block  hover:bg-[#454F7B94]"
                        >
                          <div className="flex px-6 py-[12px] flex-col gap-4">
                            <div className="flex gap-4">
                              <p className="text-white text-sm font-bold leading-[100%] tracking-[.28px] uppercase">
                                {subItem.label}
                              </p>
                              <span className="text-xs leading-[100%] text-white tracking-[.24px] uppercase">
                                {subItem?.subtitle}
                              </span>
                            </div>
                            <div className="flex ">
                              {subItem?.items?.map((itm, index) => (
                                <div key={index} className="flex items-center font-normal text-sm leading-[100%] tracking-[.28px] uppercase text-white">
                                  <span className="py-[3px]" key={index}>
                                    {itm}
                                  </span>
                                  {index !== subItem.items.length - 1 && (
                                    <Separator
                                      className="mx-3  h-5 "
                                      orientation="vertical"
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Link>

                        {/* If there are further sub-sub items */}
                        {subItem.subItems && (
                          <div className="pl-4">
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <div
                                key={subSubIndex}
                                className="text-sm text-gray-600"
                              >
                                {subSubItem}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
}
