"use client";

import ProductDetailsAccordion from "@/components/ClientComponents/ProductDetailsClient/ProductDetailsAccordion";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import LoveIcon from "@/components/Icons/LoveIcon";
import { useGetSingleSaddleQuery } from "@/src/redux/client/saddle/saddleApi";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

export default function JumpingPage() {
  const path = usePathname();
  const isJumping = path.includes("jumping");
  const isCross = path.includes("cross");
  const isDresseges = path.includes("dressage");
  const isKids = path.includes("kids");
  const id = useParams().id;

  const lab = isJumping
    ? "JUMPING"
    : isCross
      ? "CROSS-COUNTRY"
      : isDresseges
        ? "DRESSAGE"
        : isKids
          ? "KIDS"
          : "";

  const breadLink = [
    { label: "SADDLES", href: "/saddles" },
    { label: "ARION", href: "/saddles/arion-saddles" },
    { label: lab, href: "/saddles/jumping" },
  ];

  const { data } = useGetSingleSaddleQuery({ id: id });
  const saddleDetails = data?.data;

  const [selectedImage, setSelectedImage] = useState(
    saddleDetails?.images[0]?.url,
  );
  const [selectedColor, setSelectedColor] = useState("BLACK");

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      {/* Heading */}
      <div className="mt-16 px-5 ">
        <h1 className="text-[32px] font-extrabold text-[#1F274B] text-center">
          {saddleDetails?.subcategory}
        </h1>
        <div className="text-center">
          <span className="md:text-2xl text-lg! font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center capitalize textSecondary">
            {saddleDetails?.subcategory === "ARION"
              ? "Fully Customizable"
              : "Semi CUSTOM"}
          </span>
        </div>
        <p className="text-center lg:text-[20px] md:text-base text-sm text-[#4C526F] mt-4 normal-case">
          Personalize your saddle! Add a pop of color, customize your nameplate,
          & much more. Let’s create the saddle of your dreams!
        </p>
      </div>

      <div className="lg:py-12 py-8 maxContainer">
        <div className="grid xl:grid-cols-2 gap-8">
          {/* ================= IMAGE SECTION ================= */}
          <div className="flex flex-col gap-4">
            {/* Big Image */}
            <div className="flex justify-center items-center bg-white">
              <img
                src={selectedImage}
                alt="Jumping Saddle"
                className="max-w-[500px] w-full object-contain"
              />
            </div>

            {/* Thumbnails BELOW big image */}
            <div className="grid grid-cols-4 gap-4">
              {saddleDetails?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt=""
                  onClick={() => setSelectedImage(img.url)}
                  className={`cursor-pointer object-contain w-full h-[120px]
                    ${
                      selectedImage === img.url
                        ? "border-[#1F274B]"
                        : "border-[#DFE1E7]"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* ================= PRODUCT DETAILS ================= */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h1 className="text-[32px] font-extrabold text-[#1F274B]">
                {saddleDetails?.name}
              </h1>
              <button className="cursor-pointer">
                <LoveIcon className="size-10" />
              </button>
            </div>

            <p className="text-xl text-[#4C526F]">SKU: {saddleDetails?.sku}</p>

            <div className="h-[1px] bg-[#DFE1E7]" />

            <p className="text-[32px] text-[#1F274B]">
              STARTING AT ${saddleDetails?.price}
            </p>

            {/* Leather Color */}
            <div>
              <p className="text-xl text-[#262626] mb-3">Leather Color</p>
              <div className="flex gap-4">
                {saddleDetails?.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.replace(",", "").trim() }}
                    className={`w-8 h-8 rounded-full border border-gray-200 ${
                      selectedColor === color ? "ring-2 ring-[#1F274B]" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Piping Colors */}
            <div>
              <p className="text-xl text-[#262626] mb-3">
                Piping color customization
              </p>
              <div className="grid grid-cols-7 gap-4">
                {saddleDetails?.piping_color.map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color.replace(",", "").trim() }}
                    className="w-6 h-6 rounded-full border border-gray-200"
                  />
                ))}
              </div>
            </div>

            {/* Leather Type */}
            <div>
              <div className="flex justify-between mb-3">
                <p className="text-xl text-[#262626]">Leather Type</p>
                <a
                  href="#leather-type"
                  className="underline text-[#4C526F] cursor-pointer"
                >
                  Learn More
                </a>
              </div>

              <div className="flex gap-4 flex-wrap">
                {saddleDetails?.leather_type.map((type) => (
                  <button
                    key={type}
                    className="uppercase font-extrabold px-6 py-3 border-2 border-[#1F274B] cursor-pointer"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={"/saddles/saddlery-expert"}
              className="w-full bg-[#1F274B] text-white py-4 uppercase text-lg cursor-pointer text-center"
            >
              Connect with our team
            </Link>
          </div>
        </div>

        <ProductDetailsAccordion />

        <div className="mt-12">
          <ShopAccessories />
        </div>
      </div>
    </>
  );
}
