"use client";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import { useState } from "react";

import CallingIcon from "@/components/Icons/CallingIcon";
import EmailIcon from "@/components/Icons/EmailIcon";
import WhatsAppIcon from "@/components/Icons/WhatsAppIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetSingleSaddleQuery } from "@/src/redux/client/saddle/saddleApi";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function AtlasSaddleDetailsPage() {
  const path = usePathname();
  const isJumping = path.includes("jumping");
  const isCross = path.includes("cross");
  const isDresseges = path.includes("dressage");
  const params = useParams();

  const id = params?.slug;
  const { data } = useGetSingleSaddleQuery({ id: id });
  const atlasSaddleDetails = data?.data;

  // ✅ Fix: initialize as undefined so displayedImage reacts to loaded data
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );
  const displayedImage = selectedImage ?? atlasSaddleDetails?.images[0]?.url;

  const [selectedColor, setSelectedColor] = useState("BLACK");

  const lab = isJumping
    ? "JUMPING"
    : isCross
      ? "CROSS-COUNTRY"
      : isDresseges
        ? "DRESSAGE"
        : "";

  const breadLink = [
    { label: "SADDLES", href: "/saddles" },
    { label: "ATLAS", href: "/saddles/atlas-saddles" },
    { label: lab, href: "/saddles/jumping" },
  ];

  const answerQuestion = [
    { icon: <WhatsAppIcon />, title: "WhatsApp" },
    { icon: <EmailIcon />, title: "E-Mail" },
    { icon: <CallingIcon />, title: "Call Or Text" },
  ];

  const productDetails = [
    {
      id: "item-4",
      title: "NEED HELP?",
      content: (
        <div className="flex gap-4">
          <div className="w-[79px] h-[86px]">
            <img
              src="/images/products-details/need help.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[#000] tracking-[.4px] leading-[100%] lg:text-xl text-lg font-normal">
              Gabrielle will answer your questions!
            </p>
            <div className="flex items-center gap-6 md:mt-4 mt-3">
              {answerQuestion?.map((item, index) => (
                <Link href={""} className="flex items-center gap-3" key={index}>
                  <span className="text-[#000000]">{item?.icon}</span>
                  <span className="text-[#4C526F] leading-[100%] text-base">
                    {item?.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      {/* Heading */}
      <div className="mt-16 px-5">
        <h1 className="text-[32px] leading-[100%] tracking-[0.64px] font-extrabold text-[#1F274B] text-center">
          ATLAS
        </h1>
        <div className="text-center">
          <span className="md:text-2xl text-lg! font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center capitalize textSecondary block">
            SEMI - CUSTOM SADDLES
          </span>
        </div>
        <p className="text-center lg:text-[20px] md:text-base text-sm text-[#4C526F] mt-4 normal-case max-w-7xl mx-auto">
          Same luxury at a competitive price. Choose your seat size, flap size,
          and leather color. Using our premium French leather and craftsmanship,
          we will create a new semi-custom, long-lasting saddle for you and your
          horse.
        </p>
      </div>

      <div className="lg:py-12 md:py-10 py-8 maxContainer">
        <div className="flex xl:flex-row flex-col gap-6">
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4">
              {atlasSaddleDetails?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img?.url}
                  alt=""
                  onClick={() => setSelectedImage(img.url)}
                  className={`object-contain w-full h-[140px] cursor-pointer`}
                />
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white">
              <div className="grid md:grid-cols-2 xl:gap-8 lg:gap-6 gap-4">
                {/* Image Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center">
                    {/* ✅ Use displayedImage here */}
                    <img
                      src={displayedImage}
                      alt="Saddle"
                      className="max-w-[500px] w-full h-full object-cover"
                    />
                  </div>

                  {/* Mobile Thumbnails */}
                  <div className="block xl:hidden">
                    <div className="grid grid-cols-4 gap-4">
                      {atlasSaddleDetails?.images?.map((img, index) => (
                        <img
                          key={index}
                          src={img?.url}
                          onClick={() => setSelectedImage(img.url)}
                          alt="Product Image"
                          className={`object-contain w-full h-full cursor-pointer`}
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
                        JUMPING SADDLES
                      </h1>
                    </div>
                    <p className="xl:text-2xl md:text-xl text-lg leading-[100%] trtacking-[.48px] text-[#4C526F]">
                      SKU: {atlasSaddleDetails?.sku}
                    </p>
                  </div>

                  <div className="h-[1px] bg-[#DFE1E7] w-full"></div>

                  <p className="xl:text-[32px] text-2xl tracking-[.64px] text-[#1F274B] leading-[100%]">
                    STARTING AT ${atlasSaddleDetails?.price}
                  </p>

                  {/* Color Selection */}
                  <div className="flex flex-col xl:gap-4 gap-3">
                    <p className="text-[#262626] xl:text-[20px] text-base tracking-[.40px] leading-[100%]">
                      Leather COLOR
                    </p>
                    <div className="flex gap-4">
                      {atlasSaddleDetails?.colors?.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          style={{
                            backgroundColor: color.replace(",", "").trim(),
                          }}
                          className={`w-8 h-8 rounded-full border border-gray-200 ${
                            selectedColor === color
                              ? "ring-2 ring-[#1F274B]"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-secondary-text normal-case text-base">
                      Our Atlas line offers premium Arion quality at our best
                      price. Made from durable French buffalo leather with
                      reinforced hems, this saddle provides{" "}
                      <strong className="text-primary-text">
                        long-lasting grip, comfort, and performance.
                      </strong>
                    </p>
                    <p className="text-secondary-text normal-case text-base">
                      The Atlas is a half-custom model, built to your seat and
                      flap size with guidance from our experts. It's foam panels
                      are designed to suit a wide range of horses, offering
                      comfort and adaptability-though not fully custom to one
                      horse. A dependable, beautifully made French jumping
                      saddle designed to support you every ride.
                    </p>
                  </div>

                  {/* CTA */}
                  <div>
                    <Link
                      href={"/saddles/saddlery-expert"}
                      className="w-full bg-[#1F274B] hover:bg-[#1F274B]/90 text-[#FFF] block text-center cursor-pointer text-[18px] py-4 uppercase leading-[136%] px-8"
                    >
                      Connect with our team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-8">
              <Accordion
                type="single"
                collapsible
                className="w-full lg:space-y-6 space-y-4"
              >
                {productDetails.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-[#F6F8FA] px-4 border-b-0"
                  >
                    <AccordionTrigger className="text-[#1F274B] lg:text-2xl md:text-xl text-lg font-extrabold tracking-[.48px] hover:no-underline cursor-pointer">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4C526F] leading-[160%] tracking-[.32px] md:text-base text-sm normal-case font-light">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ShopAccessories />
        </div>
      </div>
    </>
  );
}
