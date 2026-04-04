"use client";
import ProductDetailsAccordion from "@/components/ClientComponents/ProductDetailsClient/ProductDetailsAccordion";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import LoveIcon from "@/components/Icons/LoveIcon";
import { useGetLeadLineSaddleQuery } from "@/src/redux/client/saddle/saddleApi";
import { useState } from "react";

const LeadlineSaddlePage = () => {
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
    { imgLink: "/leadline/leadline-1.png" },
    { imgLink: "/leadline/leadline-2.png" },
    { imgLink: "/leadline/leadline-3.png" },
    { imgLink: "/leadline/leadline-4.png" },
  ];

  const { data, isLoading } = useGetLeadLineSaddleQuery({});
  if (isLoading) return <p>Loading...</p>;
  const [selectedImage, setSelectedImage] = useState(data?.data?.images[0].url);

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="lg:py-12 md:py-10 py-8 maxContainer">
        <div className="flex xl:flex-row flex-col gap-6">
          {/* image div */}
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 ">
              {data?.data?.images?.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setSelectedImage(img.url)}
                  src={img?.url}
                  alt=""
                  className="object-contain w-[220px] h-[220px] "
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
                      src={selectedImage}
                      alt="Double Noseband Bridle"
                      className="w-[586px] h-[628px] object-cover "
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
                      <h1 className="xl:text-[32px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B]">
                        {data?.data?.name || "Leadline Saddle"}
                      </h1>
                      <button className="">
                        <LoveIcon className="xl:size-12 size-8" />
                      </button>
                    </div>
                    {/* <p className="xl:text-2xl md:text-xl text-lg leading-[100%] trtacking-[.48px] text-[#4C526F]">
                      SKU: AU00100
                    </p> */}
                  </div>

                  <div className="h-[1px] bg-[#DFE1E7] w-full "></div>
                  <p className="xl:text-[32px]  text-2xl tracking-[.64px] text-[#1F274B] leading-[100%] font-extrabold">
                    ${data?.data?.price || "0.00"}
                  </p>

                  {/* Size Selection */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <div className="flex items-center gap-x-4">
                      <p className="text-[#262626] leading-[100%] tracking-[.4px] xl:text-xl md:text-lg text-base ">
                        Size:
                      </p>
                      <div className="space-x-3">
                        {data?.data?.size?.map((size, index) => (
                          <button
                            key={index}
                            className="px-6 py-3 bg-[#4C526F] text-base leading-[100%] tracking-[.32px] text-[#FFF] cursor-pointer"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="space-x-4 w-full flex items-center">
                    <button className="w-full block px-8 py-4 bg-[#1F274B] text-lg leading-[100%] tracking-[.32px] text-[#FFF] cursor-pointer uppercase">
                      Buy The Saddle
                    </button>
                    <button className="w-full block px-8 py-4 text-lg leading-[100%] tracking-[.32px] text-[#4C526F] bg-[#E9E9ED] cursor-pointer uppercase border border-[#262626]">
                      ADD TO CART
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
        <div className="mt-12">
          <ShopAccessories />
        </div>
      </div>
    </>
  );
};

export default LeadlineSaddlePage;
