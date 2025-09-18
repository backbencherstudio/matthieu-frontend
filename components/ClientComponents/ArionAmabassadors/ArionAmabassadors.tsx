"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterIcon from "@/components/Icons/FilterIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Blog {
  id: number;
  type: string;
  image: string;
  date: string;
  title: string;
}

export default function ArionAmabassadors() {
  const [activeBlogType, setActiveBlogType] = useState<string>("all");



  const blogs: Blog[] = [
    {
      id: 1,
      type: "rider-spotlights",
      image: "/images/blog-01.png",
      date: "26-Jun-2025",
      title:
        "Top Finishes, Big Moments: Arion Riders Make Their Mark in Kentucky",
    },
    {
      id: 2,
      type: "competition-highlights",
      image: "/images/blog-02.png",
      date: "26-Jun-2025",
      title: "Job of a Saddle Fitting Expert",
    },
    {
      id: 3,
      type: "arion-on-the-road",
      image: "/images/blog-03.png",
      date: "26-Jun-2025",
      title: "Arion Sellier is a Proud Sponsor at Wellington International",
    },
    {
      id: 4,
      type: "saddles",
      image: "/images/blog-04.png",
      date: "26-Jun-2025",
      title: "Rider Spotlight: Emma Hakim",
    },
    {
      id: 5,
      type: "saddles",
      image: "/images/blog-05.png",
      date: "26-Jun-2025",
      title: "Rider Spotlight: Parker Peacock",
    },
    {
      id: 6,
      type: "tack-accessories",
      image: "/images/blog-06.png",
      date: "26-Jun-2025",
      title: "Why choose a made to measure saddle ?",
    },
    {
      id: 7,
      type: "arion-world",
      image: "/images/blog-07.png",
      date: "26-Jun-2025",
      title: "Equipment made in France for your horse!",
    },
    {
      id: 8,
      type: "arion-world",
      image: "/images/blog-08.png",
      date: "26-Jun-2025",
      title: "Light on our range of ATLAS half-measure saddles",
    },
  ];

  return (
    <div className="pt-10 xl:pt-16 pb-16 xl:pb-30">
      <div className="maxContainer">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="uppercase text-3xl md:text-[40px] font-extrabold">
            ARION AMABASSADORS
          </h1>
          <p className="text-secondary-text text-center text-base md:text-lg">
            MEET THE RIDERS THAT TRUST OUR BRAND.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-12">
          <FilterIcon className="h-8 w-8" />

          <DropdownMenu>
            <DropdownMenuTrigger className="text-secondary-text text-base flex items-center gap-2 cursor-pointer focus-visible:border-none">
              <span>NATION</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F4F5F7] rounded-none">
              <DropdownMenuItem className="text-sm">
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                s
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm">FRANCE</DropdownMenuItem>
              <DropdownMenuItem className="text-sm">BRAZIL</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-secondary-text text-base flex items-center gap-2 cursor-pointer focus-visible:border-none">
              <span>DISCIPLINE</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F4F5F7] rounded-none">
              <DropdownMenuItem className="text-sm">
                SHOWJUMPING
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm">EVENTING</DropdownMenuItem>
              <DropdownMenuItem className="text-sm">DRESSAGE</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Blogs */}
        <div className="grid sm:grid-cols-2 gap-12 sm:gap-6 xl:gap-12 mt-12">
          {blogs
            .filter(
              (blog) => activeBlogType === "all" || blog.type === activeBlogType
            )
            .map((blog, idx) => (
              <div key={idx}>
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt="Blog Image"
                    width={1000}
                    height={1000}
                    className="h-auto xl:h-[400px] w-full object-cover"
                  />

                  <div className="bg-[#262626] absolute top-5 right-0 h-[65px] w-[90px] flex flex-col gap-1  justify-center items-center text-white">
                    <p className="text-sm font-normal">
                      {blog.date.split("-")[0]}
                    </p>
                    <p className="text-sm font-normal">
                      {blog.date.split("-")[1]} - {blog.date.split("-")[2]}
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-extrabold uppercase mt-6 mb-4 text-[#262626]">
                    {blog.title}
                  </h1>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-xl md:text-2xl pb-[2px] border-b border-primary-text text-primary-text"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
