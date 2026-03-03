"use client";

import ProductDetailsAccordion from "@/components/ClientComponents/ProductDetailsClient/ProductDetailsAccordion";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import LoveIcon from "@/components/Icons/LoveIcon";
import Link from "next/link";
import { useState } from "react";

export default function JumpingPage() {
  const breadLink = [
    { label: "SADDLES", href: "/saddles" },
    { label: "ARION", href: "/saddles/arion-saddles" },
    { label: "JUMPING", href: "/saddles/jumping" },
  ];

  const productImages = [
    { imgLink: "/images/saddles/kids.png" },
    { imgLink: "/images/saddles/kids.png" },
    { imgLink: "/images/saddles/kids.png" },
    { imgLink: "/images/saddles/kids.png" },
  ];

  const [selectedImage, setSelectedImage] = useState(productImages[0].imgLink);
  const [selectedColor, setSelectedColor] = useState("BLACK");

  const colors = [
    { name: "BLACK", code: "bg-[#070707]" },
    { name: "BROWN", code: "bg-[#371506]" },
    { name: "BROWN", code: "bg-[#8F5D46]" },
  ];

  const pipingcolors = [
    { name: "Red", code: "bg-[#EB2D3A]" },
    { name: "Green", code: "bg-[#00BF63]" },
    { name: "Blue", code: "bg-[#5E17EB]" },
    { name: "Vivid violet", code: "bg-[#1F48FF]" },
    { name: "Red-2", code: "bg-[#FF1FA9]" },
    { name: "Gold", code: "bg-[#FFD21F]" },
    { name: "##", code: "bg-[#205339]" },
    { name: "#", code: "bg-[#00357A]" },
    { name: "###", code: "bg-[#99ACFF]" },
    { name: "####", code: "bg-[#FF914D]" },
    { name: "Black", code: "bg-[#200934]" },
    { name: "####", code: "bg-[#5BE7FF]" },
    { name: "Red-3", code: "bg-[#CC007E]" },
    { name: "######", code: "bg-[#FFD9C2]" },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      {/* Heading */}
      <div className="mt-16 px-5 ">
        <h1 className="text-[32px] font-extrabold text-[#1F274B] text-center">
          ARION
        </h1>
        <div className="text-center">
          <span className="md:text-2xl text-lg! font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center capitalize textSecondary">
            CUSTOM SADDLES
          </span>
        </div>
        <p className="text-center lg:text-[20px] md:text-base text-sm text-[#4C526F] mt-4">
          Personalize your saddle! Add a pop of color, customize your
          nameplate, & much more. Let’s create the saddle of your dreams!
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
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img.imgLink}
                  alt=""
                  onClick={() => setSelectedImage(img.imgLink)}
                  className={`cursor-pointer object-contain w-full h-[120px]
                    ${selectedImage === img.imgLink
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
                JUMPING SADDLES
              </h1>
              <button className="cursor-pointer">
                <LoveIcon className="size-10" />
              </button>
            </div>

            <p className="text-xl text-[#4C526F]">SKU: AU00100</p>

            <div className="h-[1px] bg-[#DFE1E7]" />

            <p className="text-[32px] text-[#1F274B]">STARTING AT $6,500</p>

            {/* Leather Color */}
            <div>
              <p className="text-xl text-[#262626] mb-3">Leather Color</p>
              <div className="flex gap-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.code} ${selectedColor === color.name
                      ? "ring-2 ring-[#1F274B]"
                      : ""
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
                {pipingcolors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full ${color.code}`}
                  />
                ))}
              </div>
            </div>

            {/* Leather Type */}
            <div>
              <div className="flex justify-between mb-3">
                <p className="text-xl text-[#262626]">Leather Type</p>
                <a href="#leather-type" className="underline text-[#4C526F] cursor-pointer">
                  Learn More
                </a>
              </div>

              <div className="flex gap-4 flex-wrap">
                {["Calf", "Buffalo", "Grained Calf"].map((type) => (
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
            <Link href={"/saddles/saddlery-expert"} className="w-full bg-[#1F274B] text-white py-4 uppercase text-lg cursor-pointer text-center">
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
