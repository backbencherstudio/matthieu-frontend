"use client";

import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";
import SaddlesIcon from "@/components/Icons/SaddlesIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetSingleUseSaddleQuery } from "@/src/redux/client/saddle/useSaddleApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SaddlesDetails() {
  const { id } = useParams();
  const breadLink = [
    { label: "SADDLES", href: "/saddles" },
    { label: "ARION", href: "/saddles/arion-saddles" },
    { label: "JUMPING", href: "/saddles/jumping" },
  ];

  const { data } = useGetSingleUseSaddleQuery(id);
  console.log(data);

  const additionalInfo = [
    { label: "BRAND", value: "ANTARES" },
    { label: "COLOR", value: "Brown" },
    { label: "DISCIPLINE", value: "Cross Country" },
    { label: "SADDLE YEAR", value: "2023" },
    { label: "SEAT SIZE", value: "17" },
  ];

  const productImages =
    data?.data?.images?.map((img) => ({
      imgLink: img.url,
    })) || [];

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImage(productImages[0].imgLink);
    }
  }, [data]);

  return (
    <>
      {/* <BreadCrumb breadLink={breadLink} /> */}

      {/* Heading */}
      {/* <div className="mt-16">
        <h1 className="text-[32px] font-extrabold text-[#1F274B] text-center">
          ARION CUSTOM SADDLES
        </h1>
        <p className="text-center text-[20px] text-[#4C526F] mt-4">
          Personalize your saddle: add a pop of color, customize your nameplate,
          & moral. We want to make your dream saddle.
        </p>
      </div> */}

      <div className="lg:py-12 py-8 maxContainer">
        <div className="grid xl:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {/* Big Image */}
            <div className="w-full max-h-[350px] flex justify-center items-center bg-white">
              <img
                src={selectedImage}
                alt="Jumping Saddle"
                className=" w-full h-full object-cover"
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
                  className={`cursor-pointer object-cover w-full h-[120px]
                    ${
                      selectedImage === img.imgLink
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
                {data?.data?.title}
              </h1>
              {/* <button className="cursor-pointer">
                <LoveIcon className="size-10" />
              </button> */}
            </div>

            <p className="text-xl text-[#4C526F]">
              {data?.data?.currency === "USD" ? "$" : "€"}{data?.data?.priceRange?.min} -  
              {data?.data?.currency === "USD" ? " $" : " €"}{data?.data?.priceRange?.max}
            </p>

            {/* <div className="h-[1px] bg-[#DFE1E7]" /> */}

            {/* <p className="text-[32px] text-[#1F274B]">STARTING AT $6,500</p> */}

            <div className="max-w-lg">
              <p className="normal-case text-lg">{data?.data?.description}</p>
            </div>

            <div className="flex items-center gap-x-3.5">
              <p className="text-xl text-[#4C526F]">
                SKU:{" "}
                <span className="font-bold text-black">{data?.data?.sku}</span>
              </p>
              <p className="text-xl text-[#4C526F]">
                Category:{" "}
                <a href="#" className="font-bold text-black hover:underline">
                  {data?.data?.category}
                </a>
              </p>
            </div>

            <div>
              <div className="flex gap-4 flex-wrap">
                <button className="px-4 py-3 bg-[#1F274B]/90 hover:bg-[#1F274B] text-white cursor-pointer flex items-center gap-x-2.5">
                  <RefreshIcon className="size-6" />
                  <span className="font-semibold">TRIAL PERIOD INFO</span>
                </button>
                <button className="px-4 py-3 bg-[#1F274B]/90 hover:bg-[#1F274B] text-white cursor-pointer flex items-center gap-x-2.5">
                  <SaddlesIcon className="size-6" />
                  <span className="font-semibold">SADDLE DETAILS</span>
                </button>
              </div>
              <div className="mt-8">
                <p>
                  Have a question?{" "}
                  <span className="text-primary-text">Contact Us</span>
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-5">
                <h5 className="text-lg font-bold text-nowrap">TRIAL PERIOD</h5>
                <div className="w-full">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select trial option" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="14-DAY TRIAL">14-DAY TRIAL</SelectItem>
                      <SelectItem value="NO TRIAL NEEDED">
                        NO TRIAL NEEDED
                      </SelectItem>
                      <SelectItem value="7-DAY TRIAL">7-DAY TRIAL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8">
                <button className="px-8 py-3 bg-[#1F274B] text-white rounded-md cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl text-primary-text">
            Why Choose Phase II Saddlery
          </h1>
          <p className="mt-4 text-lg normal-case">
            Our saddles receive careful scrutiny from our team of expert
            saddlers before hitting the shelves. Plus, many come with a range{" "}
            <br /> of guarantees and customizable options. Reach out to us for
            additional information and personalized fitting advice.
          </p>
        </div>
        <div className="mt-10">
          {/* Header */}
          <div className="bg-gray-200 px-4 py-2 mb-0">
            <h3 className="text-sm font-semibold text-gray-700">
              Additional information
            </h3>
          </div>

          {/* Main Section */}
          <div className="bg-white border border-gray-200 p-8">
            <h2 className="text-2xl font-light text-gray-700 mb-8 tracking-wide">
              ADDITIONAL INFORMATION
            </h2>

            {/* Table */}
            <div className="space-y-0">
              {additionalInfo.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 py-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="w-1/3">
                    <p className="font-semibold text-gray-800 text-sm">
                      {item.label}
                    </p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600 italic">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
