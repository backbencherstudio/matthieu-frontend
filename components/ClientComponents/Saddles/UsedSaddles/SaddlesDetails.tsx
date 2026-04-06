"use client";

import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";
import SaddlesIcon from "@/components/Icons/SaddlesIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddUsedSaddleToCardMutation, useGetSingleUseSaddleUserQuery } from "@/src/redux/client/use-saddle/useSaddleUserApi";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ZoomImage } from "./ZoomedImage";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";



const additionalInfo = [
  { label: "BRAND", value: "ANTARES" },
  { label: "COLOR", value: "Brown" },
  { label: "DISCIPLINE", value: "Cross Country" },
  { label: "SADDLE YEAR", value: "2023" },
  { label: "SEAT SIZE", value: "17" },
];

export default function SaddlesDetails() {
  const { id } = useParams();

  const [selectedImage, setSelectedImage] = useState("");
  const trialPeriodRef = useRef<HTMLDivElement>(null);
  const additionalInfoRef = useRef<HTMLDivElement>(null);

  const [selectedTrial, setSelectedTrial] = useState<string>("");
  const [quantity, setQuantity] = useState(1);


  const { data, isLoading } = useGetSingleUseSaddleUserQuery({
    id,
    trialPeriod: selectedTrial || undefined,
  });
  const [addToCard] = useAddUsedSaddleToCardMutation();

  const productImages =
    data?.data?.images?.map((img) => ({
      imgLink: img.url,
    })) || [];



  // Fetch data with trialPeriod parameter


  const handleTrialChange = (value: string) => {
    setSelectedTrial(value);
  };

  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImage(productImages[0].imgLink);
    }
  }, [data]);

  const scrollToTrialPeriod = () => {
    trialPeriodRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleCart = async () => {
    if (!data?.data) return;

    try {
      const cartData = {
        usedSaddleId: data?.data?.id,
        trialPeriod: selectedTrial,
        quantity: quantity,
      };

      const response = await addToCard(cartData);
      console.log(response);
      if (response?.data?.success) {
        toast.success("Added to cart!");
      }
      if (response?.error || !response) {
        toast.error("Failed to add to cart. Please try again.");
        return;
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  const scrollToAdditionalInfo = () => {
    additionalInfoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const breadLink = [
    { label: "SADDLES", href: "/saddles" },
    { label: "ARION", href: "/saddles/arion-saddles" },
    { label: "JUMPING", href: "/saddles/jumping" },
  ];


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
            {/* <div className="w-full max-h-[350px] flex justify-center items-center bg-white">
              <img
                src={selectedImage}
                alt="Jumping Saddle"
                className=" w-full h-full object-cover"
              />
            </div> */}

            <ZoomImage src={selectedImage} alt="Jumping Saddle" zoomLevel={2} />

            {/* Thumbnails BELOW big image */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img.imgLink}
                  alt=""
                  onClick={() => setSelectedImage(img.imgLink)}
                  className={`cursor-pointer object-contain w-full h-[100px]
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
                {data?.data?.title}
              </h1>
              {/* <button className="cursor-pointer">
                <LoveIcon className="size-10" />
              </button> */}
            </div>

            <p className="text-xl text-[#4C526F]">
              {data?.data?.currency === "USD" ? "$" : "€"}
              {data?.data?.priceRange?.min} -
              {data?.data?.currency === "USD" ? " $" : " €"}
              {data?.data?.priceRange?.max}
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
                <button className="px-4 py-3 bg-[#1F274B]/90 hover:bg-[#1F274B] text-white cursor-pointer flex items-center gap-x-2.5" onClick={scrollToTrialPeriod}>
                  <RefreshIcon className="size-6" />
                  <span className="font-semibold cursor-pointer" >TRIAL PERIOD INFO</span>
                </button>
                <button className="px-4 py-3 bg-[#1F274B]/90 hover:bg-[#1F274B] text-white cursor-pointer flex items-center gap-x-2.5" onClick={scrollToAdditionalInfo}>
                  <SaddlesIcon className="size-6" />
                  <span className="font-semibold" >SADDLE DETAILS</span>
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
                  <Select onValueChange={handleTrialChange} value={selectedTrial}>
                    <SelectTrigger className="w-full rounded-[4px] py-[23px] cursor-pointer">
                      <SelectValue placeholder="Select trial option" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="TRIAL_14_DAYS">14-DAY TRIAL</SelectItem>
                      <SelectItem value="NO_TRIAL">
                        NO TRIAL NEEDED
                      </SelectItem>
                      <SelectItem value="TRIAL_7_DAYS">7-DAY TRIAL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <p className="xl:text-2xl text-xl  text-[#1F274B] leading-[100%] upper-case mt-6 font-medium">Price {`${data?.data?.currency === "EUR" ? "€" : "$"}`}{`${data?.data?.selectedPrice}.00`}</p>
                {/* <input type="number" name="" id="" className="border pl-4 w-[60px]"/> Quantity */}
              </div>
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  disabled={
                    !data?.data ||
                    data?.data?.stockQuantity === 0 ||
                    quantity <= 1
                  }
                  className="border border-[#1F274B] p-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-[24px] text-center">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(
                        data?.data?.stockQuantity ?? 1,
                        prev + 1,
                      ),
                    )
                  }
                  disabled={
                    !data?.data ||
                    data?.data?.stockQuantity === 0 ||
                    quantity >= data?.data?.stockQuantity
                  }
                  className="border border-[#1F274B] p-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Plus size={16} />
                </button>

                <p className="xl:text-2xl text-xl tracking-[.64px] text-[#1F274B] leading-[100%] normal-case">
                  {data?.data
                    ? data?.data?.stockQuantity === 0
                      ? "Out of stock"
                      : `${data?.data.stockQuantity} in stock`
                    : "N/A"}
                </p>
              </div>
              <div className="mt-8">
                <button onClick={handleCart} disabled={ !selectedTrial ||
                          data?.data?.stockQuantity === 0 } className="px-8 py-3 bg-[#1F274B] text-white rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {data?.data?.stockQuantity === 0
                          ? "OUT OF STOCK"
                          : "ADD TO CART"}
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
        <div className="mt-10" id="additionalInfo" ref={additionalInfoRef}>
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

        {/* trial period option */}
        <div className="lg:mt-20 mt-8" id="trialPeriod" ref={trialPeriodRef}>
          <TrialPeriodOptions />
        </div>
      </div>
    </>
  );
}


// components/TrialPeriodOptions.tsx

function TrialPeriodOptions() {
  const trialOptions = [
    {
      title: "14-DAY TRIAL",
      price: "+ $150",
      popular: false,
      points: [
        "An added fee of $150 will be added to your order when you select this trial option",
        "Your 14-day trial will begin the day that your saddle shows delivered by our mailing system.",
        "Take this time to ensure that the saddle is the right fit for you and your horse.",
        "If the saddle does not suite you and/or your horse's needs reach out to our team, and we can see if there are any repairs that we can make to semi-customize the saddle that you chose or simply ship the saddle back.",
      ],
    },
    {
      title: "NO TRIAL NEEDED",
      price: "- $150",
      popular: true,
      points: [
        "If you know exactly what you are looking for in terms of size and brand, then no need to waste any time!",
        "Save money and get your saddle with ease.",
      ],
    },
    {
      title: "7-DAY TRIAL",
      price: "FREE",
      popular: false,
      points: [
        "A free 7-day trial will begin the day that your saddle shows delivered by our mailing system.",
        "Take this time to ensure that the saddle is the right fit for you and your horse.",
        "If the saddle does not suite you and/or your horse's needs reach out to our team, and we can see if there are any repairs that we can make to semi-customize the saddle that you chose or simply ship the saddle back.",
        "If you wish to extend your trial 7 days longer, to a total of 14 days, there will be an added fee of $150.",
      ],
    },
  ];

  return (
    <div className="" >
      {/* Title */}
      <div className="flex items-center gap-4 justify-center mb-10">
        <div className="h-[1px] w-16 bg-[#1F274B]" />
        <h2 className="text-2xl font-bold text-[#1F274B]  text-center whitespace-nowrap">
          TRIAL PERIOD OPTIONS
        </h2>
        <div className="h-[1px] w-16 bg-[#1F274B]" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trialOptions.map((option) => (
          <div
            key={option.title}
            className="border border-gray-200 flex flex-col relative overflow-hidden"
          >
            {/* Popular ribbon */}
            {option.popular && (
              <div className="absolute top-7 left-0 z-10">
                <div
                  className="bg-red-400 text-white text-[10px] font-bold tracking-widest text-center"
                  style={{
                    // width: "110px",
                    padding: "6px 24px",
                    transform: "rotate(-45deg) translate(-30%, 20%)",
                    transformOrigin: "top left",
                  }}
                >
                  POPULAR
                </div>
              </div>
            )}

            {/* Card Header */}
            <div className="bgPrimary px-6 py-3 ">
              <h3 className="text-white font-semibold text-center tracking-widest text-sm ">
                {option.title}
              </h3>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col gap-5 flex-1">
              <p className="text-4xl  text-[#1F274B] text-center font-medium">{option.price}</p>
              <ul className="space-y-4">
                {option.points.map((text, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="textSecondary mt-0.5 shrink-0 font-bold">✓</span>
                    <span className="text-center">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}