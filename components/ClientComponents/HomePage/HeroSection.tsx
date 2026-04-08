"use client";

import { useGetAllTackProductsQuery } from "@/src/redux/client/tack-product/tackProduct";
import Link from "next/link";

const heroTitle = [
  { title: "BRAND", href: "/brand/our-story" },
  { title: "SADDLES", href: "/saddles" },
  { title: "TACK", href: "/tack" },
  { title: "FIND US", href: "/find-us" },
];

export default function HeroSection() {
  const { data } = useGetAllTackProductsQuery("");

  const products = data?.flatMap((category) => category.products || []) || [];

  const homeProducts = products.slice(0, 3);

  return (
    <div className="maxContainer mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-9">
        {/* Left Content */}
        <div className="p-8 bg-[#1F274B] flex items-center justify-center md:col-span-4 lg:col-span-1">
          <div>
            <h1 className="text-[32px] leading-[1.24] tracking-[0.64px] font-extrabold text-[#FFF]">
              SHOP OUR BEST SELLERS
            </h1>
            <p className="text-xl leading-[1.26] tracking-[0.64px] mt-4 text-[#FFF]">
              Explore our wide variety of tack and accessories! From everyday
              training to durable performance tack.
            </p>
          </div>
        </div>

        {homeProducts.length === 0 ? (
          <div className="col-span-full text-center text-xl font-semibold">
            No products available
          </div>
        ) : (
          homeProducts.map((item) => (
            <Link href={`/product-details/${item.id}`} key={item.id}>
              <div className="p-3 bg-[#F8F9FB]">
                <div className="w-full bg-white overflow-hidden">
                  <img
                    src={item.thumbnailImage}
                    alt={item.name}
                    className="h-[400px] w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-[14px]">
                  <p className="lg:text-xl md:text-lg font-extrabold text-[#4C526F]">
                    {item.name}
                  </p>

                  <p className="font-extrabold textSecondary">
                    {item.currency === "EUR" ? "€" : "$"}
                    {Number(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {heroTitle.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-center px-9 py-[18px] bg-[#1F274B] hover:bg-[#1F274B]/90 cursor-pointer lg:text-xl md:text-lg font-extrabold uppercase text-[#FFF]"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
