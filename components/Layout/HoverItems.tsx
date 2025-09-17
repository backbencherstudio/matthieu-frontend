"use client";
import React, { useState } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"; // Make sure HoverCard is imported from your UI components

export default function HoverItems({ items }) {
    console.log(items);

    return (
        <div>
            <div>
                {items?.dropdownContent?.map((item, index) => (
                    <div key={index} className="flex flex-col relative">
                        {/* Main Category Item wrapped with HoverCard */}
                        <HoverCard >
                            <HoverCardTrigger asChild>
                                <span
                                    className="px-6 py-3 bg-[#1F274B] hover:bg-[#454F7B94] text-white text-sm leading-[100%] cursor-pointer"
                                >
                                    {item?.category}
                                </span>
                            </HoverCardTrigger>
                            
                            {/* HoverCardContent */}
                            <HoverCardContent align="end"  className="w-auto p-0  bg-white shadow-lg rounded-lg absolute left-0 top-0 ">
                                {/* Conditional rendering for dropdown */}
                                {item?.items && (
                                    <div className="w-full">
                                        {item?.items.map((subItem, subIndex) => (
                                            <div key={subIndex} className="py-1 ">
                                                {/* If subItems have links, show them */}
                                                <a
                                                    href={subItem.href || "#"} // Set the correct link if href is present
                                                    className="block text-sm text-gray-700 py-1 hover:bg-gray-100"
                                                >
                                                    {subItem.label}
                                                </a>

                                                {/* If there are further sub-sub items */}
                                                {subItem.subItems && (
                                                    <div className="pl-4">
                                                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                                                            <div key={subSubIndex} className="text-sm text-gray-600">
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
