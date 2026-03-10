"use client";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import ShopAccessories from "@/components/ClientComponents/Saddles/ShopAccessories";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import WhatsAppIcon from "@/components/Icons/WhatsAppIcon";
import EmailIcon from "@/components/Icons/EmailIcon";
import CallingIcon from "@/components/Icons/CallingIcon";
import { usePathname } from "next/navigation";

export default function AtlasSaddleDetailsPage() {

  const path = usePathname()
  const isJumping = path.includes("jumping")
  const isCross = path.includes("cross")
  const isDresseges = path.includes("dressage") 
 
  const lab = isJumping ? "JUMPING" : isCross ? "CROSS-COUNTRY" : isDresseges ? "DRESSAGE" : ""

  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "ATLAS",
      href: "/saddles/atlas-saddles",
    },
    {
      label: lab,
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
  ];

  // Accordion
  const answerQuestion = [
    { icon: <WhatsAppIcon />, title: "WhatsApp" },
    { icon: <EmailIcon />, title: "E-Mail" },
    { icon: <CallingIcon />, title: "Call Or Text" },
  ];

  const productDetails = [
    // {
    //   id: "item-3",
    //   title: "SHIPPING AND RETURNS",
    //   content: (
    //     <div className="space-y-4">
    //       <div>
    //         <h4 className="font-normal leading-[100%] tracking-[.4px] text-[#262626] lg:text-xl text-lg mb-4">
    //           Delivery time:
    //         </h4>
    //         <ul className="list-disc list-inside md:space-y-3 space-y-2  text-[#4C526F]">
    //           <li className="md:text-base text-sm leading-[120%] tracking-[.08px]">
    //             USA: 5-7 work days | Canada: 7-10 business days
    //           </li>
    //           <li className="md:text-base text-sm leading-[120%] tracking-[.08px]">
    //             Free delivery with purchases over $2,000
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="font-normal leading-[100%] tracking-[.4px] text-[#262626] lg:text-xl text-lg mb-4">
    //           Shipping costs:
    //         </h4>
    //         <ul className="list-disc list-inside md:space-y-3 space-y-2  text-[#4C526F]">
    //           <li className="md:text-base text-sm leading-[120%] tracking-[.08px]">
    //             Free delivery if you pick up at our booth in Wellington, Florida
    //             January March
    //           </li>
    //           <li className="md:text-base text-sm leading-[120%] tracking-[.08px]">
    //             Free delivery if you pick up from our office in Wellington,
    //             Florida
    //           </li>
    //           <li className="md:text-base text-sm leading-[120%] tracking-[.08px]">
    //             USA: $50 | Canada: $100
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="font-normal leading-[100%] tracking-[.4px] text-[#262626] lg:text-xl text-lg mb-4">
    //           Returns:
    //         </h4>
    //         <p className="md:text-base text-sm leading-[160%] tracking-[.08px]  text-[#4C526F] ">
    //           Return tack or accessories within 7 days of purchase. The product
    //           must be new, with labels attached. Once the product is received at
    //           our Wellington office and is as described above, you will be fully
    //           reimbursed.
    //           <br />
    //           <span className="mt-2 block font-black">
    //           No returns are accepted for items purchased during sales or discount periods.
    //           </span>

    //         </p>
    //       </div>
    //     </div>
    //   ),
    // },
    {
      id: "item-4",
      title: "NEED HELP?",
      content: (
        <div className="flex gap-4">
          <div className="w-[79px] h-[86px] ">
            <img
              src="/images/products-details/need help.png"
              alt=""
              className="w-full h-full object-cover "
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
        <p className=" text-center lg:text-[20px] md:text-base text-sm text-[#4C526F] mt-4 normal-case">
          Same luxury at a competitive price. Choose your seat size, flap size,
          and leather color. Using our premium French leather and craftsmanship, we will
          create a new semi-custom, long-lasting saddle for you and your horse.
        </p>
      </div>

      <div className="lg:py-12 md:py-10 py-8 maxContainer">
        <div className="flex xl:flex-row flex-col gap-6">
          {/* image div */}
          <div className="xl:block hidden">
            <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 ">
              {productImages?.map((img, index) => (
                <img
                  key={index}
                  src={img?.imgLink}
                  alt=""
                  className="object-contain w-full h-[200px] "
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
                      className="max-w-[500px] w-full h-full object-cover "
                    />
                  </div>
                  <div className="block xl:hidden">
                    <div className="xl:flex xl:flex-col grid grid-cols-4 gap-4 ">
                      {productImages?.map((img, index) => (
                        <img
                          key={index}
                          src={img?.imgLink}
                          alt="Product Image"
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
                      are designed to suita a wide range of horses, offering
                      comfort and adaptability-though not fully custom to one
                      horse. A dependable, beautifully made French jumping
                      saddle designed to support you every ride.
                    </p>
                  </div>

                  {/* Buttons Section */}
                  <div>
                    <Link href={"/saddles/saddlery-expert"} className="w-full bg-[#1F274B] hover:bg-[#1F274B]/90 text-[#FFF] block text-center cursor-pointer text-[18px] py-4 uppercase leading-[136%] px-8">
                      Connect with our team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                    <AccordionTrigger className="text-[#1F274B] lg:text-2xl md:text-xl text-lg font-extrabold  tracking-[.48px]  hover:no-underline cursor-pointer">
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
