"use client";
import ProductDetailsAccordion from "@/components/ClientComponents/ProductDetailsClient/ProductDetailsAccordion";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import LoveIcon from "@/components/Icons/LoveIcon";
import { useState } from "react";

export default function JumpingPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "ARION",
      href: "/saddles/arion-saddles",
    },
    {
      label: "JUMPING",
      href: "/saddles/jumping",
    },
  ];

  const productImages = [
    { imgLink: "/images/saddles/kids.png" },
    { imgLink: "/images/saddles/kids.png" },
    { imgLink: "/images/saddles/kids.png" },
  ];

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
      <div className="mt-16">
        <h1 className="text-[32px] leading-[100%] tracking-[0.64px] font-extrabold text-[#1F274B] text-center">
          ARION CUSTOM SADDLES
        </h1>
        <p className="text-center text-[20px] leading-[160%] text-[#4C526F] tracking-[0.04px] normal-case text-wrap mt-4">
          Perdonalize your saddle: add a pop of color , Customize your
          nameplate, & <br /> moral We want to make your dream saddle.
        </p>
      </div>

      <div className=" lg:py-12 md:py-10 py-8 maxContainer ">
        <div className="flex xl:flex-row flex-col gap-6">
          {/* image div */}
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 ">
              {productImages?.map((img, index) => (
                <img
                  key={index}
                  src={img?.imgLink}
                  alt=""
                  className="object-contain w-full h-full "
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white ">
              <div className="grid md:grid-cols-2 xl:gap-8 lg:gap-6 gap-4">
                {/* Image Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center  ">
                    <img
                      src="/images/saddles/kids.png"
                      alt="Double Noseband Bridle"
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="block xl:hidden">
                    <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 ">
                      {productImages?.map((img, index) => (
                        <img
                          key={index}
                          src={img?.imgLink}
                          alt=""
                          className="object-contain w-full h-full "
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col xl:gap-8 lg:gap-6 gap-4">
                  {/* Header */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <div className="flex justify-between items-center">
                      <h1 className="xl:text-[32px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B] ">
                        JUMPING SADDLES
                      </h1>
                      <button className="">
                        <LoveIcon className="xl:size-12 size-8" />
                      </button>
                    </div>
                    <p className="xl:text-2xl md:text-xl text-lg leading-[100%] trtacking-[.48px] text-[#4C526F]">
                      SKU: AU00100
                    </p>
                  </div>

                  <div className="h-[1px] bg-[#DFE1E7] w-full "></div>
                  <p className="xl:text-[32px]  text-2xl tracking-[.64px] text-[#1F274B] leading-[100%]">
                    STARTING AT $6,500
                  </p>
                  {/* Color Selection */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <p className="text-[#262626] xl:text-[20px]  text-base tracking-[.40px] leading-[100%]">
                      Leather COLOR
                    </p>
                    <div className="flex  gap-4">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-between items-center gap-2"
                        >
                          <button
                            onClick={() => setSelectedColor(color.name)}
                            className={`xl:w-8 xl:h-8 w-6 h-6 cursor-pointer rounded-full ${color?.code}`}
                          ></button>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Piping color */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <p className="text-[#262626] xl:text-[20px] text-base tracking-[.40px] leading-[100%]">
                      Piping color customization:
                    </p>

                    {/* 7 dots per row */}
                    <div className="grid grid-cols-7 gap-4">
                      {pipingcolors.map((color, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-between items-center gap-2"
                        >
                          <button
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-6 h-6 cursor-pointer rounded-full ${color?.code}`}
                          ></button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <div className="flex justify-between items-center">
                      <p className="text-[#262626] leading-[100%] tracking-[.4px] xl:text-xl md:text-lg text-base ">
                        Size:
                      </p>
                      <button className="underline text-base leading-[100%] tracking-[.32px] text-[#4C526F] cursor-pointer underline-offset-2 hover:no-underline">
                        Learn More
                      </button>
                    </div>

                    <div className="space-x-6">
                      <button className="uppercase leading-[100%] text-[16px] font-extrabold tracking-[0.32px] text-[#FFF] py-3 px-6 bg-[#1F274B] text-center hover:bg-[#1F274B]/90 cursor-pointer">
                        Calf
                      </button>
                      <button className="uppercase leading-[100%] text-[16px] font-extrabold tracking-[0.32px] text-[#FFF] py-3 px-6 bg-[#1F274B] text-center hover:bg-[#1F274B]/90 cursor-pointer">
                        BUFFALO
                      </button>
                      <button className="uppercase leading-[100%] text-[16px] font-extrabold tracking-[0.32px] text-[#FFF] py-3 px-6 bg-[#1F274B] text-center hover:bg-[#1F274B]/90 cursor-pointer">
                        Grained Calf
                      </button>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div>
                    <button className="w-full bg-[#1F274B] hover:bg-[#1F274B]/90 text-[#FFF] cursor-pointer text-[18px] py-4 uppercase leading-[136%] px-8">
                      Connect with our team
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ProductDetailsAccordion />
            </div>
          </div>
        </div>
        <div>
          <ShopAccessories />
        </div>
      </div>
    </>
  );
}
