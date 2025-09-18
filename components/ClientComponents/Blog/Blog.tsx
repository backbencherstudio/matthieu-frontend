"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FilterButton {
  label: string;
  value: string;
}

interface Blog {
  id: number;
  type: string;
  image: string;
  date: string;
  title: string;
}

export default function Blog() {
  const [activeBlogType, setActiveBlogType] = useState<string>("all");

  const filterButton: FilterButton[] = [
    {
      label: "ALL",
      value: "all",
    },
    {
      label: "RIDER SPOTLIGHTS",
      value: "rider-spotlights",
    },
    {
      label: "COMPETITION HIGHLIGHTS",
      value: "competition-highlights",
    },
    {
      label: "ARION ON THE ROAD",
      value: "arion-on-the-road",
    },
    {
      label: "SADDLES",
      value: "saddles",
    },
    {
      label: " TACK & ACCESSORIES",
      value: "tack-accessories",
    },
    {
      label: "ARION WORLD",
      value: "arion-world",
    },
  ];

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
        <div className="flex flex-col items-center gap-5">
          <h1 className="uppercase text-3xl md:text-[40px] font-extrabold">
            Blog
          </h1>

          <div className="flex items-center gap-6 max-w-full w-fit overflow-x-auto filter-custom-scrollbar">
            {filterButton.map((item, idx) => (
              <button
                key={idx}
                className={`text-sm lg:text-base text-secondary-text whitespace-nowrap cursor-pointer ${
                  activeBlogType === item.value
                    ? "text-primary-text font-extrabold underline"
                    : "text-secondary-text font-normal"
                }`}
                onClick={() => setActiveBlogType(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
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
