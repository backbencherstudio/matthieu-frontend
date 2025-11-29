"use client";

import MapMarker from "@/components/Icons/MapMarker";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import HandShakeIcon from "@/components/Icons/HandhsakeIcon";
import { useState } from "react";

interface Country {
  label: string;
  value: string;
}

interface Region {
  label: string;
  value: string;
}

interface Discipline {
  label: string;
  value: string;
}

export default function FindUs() {

  const [showResult, setShowResult] = useState(false);


  const country: Country[] = [
    {
      label: "USA",
      value: "USA",
    },
    {
      label: "FRANCE",
      value: "FRANCE",
    },
    {
      label: "POLAND",
      value: "POLAND",
    },
  ];

  const region: Region[] = [
    {
      label: "CT",
      value: "CT",
    },
    {
      label: "AT",
      value: "AT",
    },
  ];

  const discipline: Discipline[] = [
    {
      label: "HUNTER/JUMPER",
      value: "HUNTER/JUMPER",
    },
    {
      label: "EVENTING",
      value: "EVENTING",
    },
    {
      label: "DRESSAGE",
      value: "DRESSAGE",
    },
    {
      label: "OTHER",
      value: "OTHER",
    },
  ];

  const handleSearch = () => {
    setShowResult(true);
  };

  return (
    <div>
      <div className="maxContainer">
        {/* Banner */}
        <div>
          <Image
            src="/images/find-us-hero.png"
            alt="find-us-hero"
            width={1000}
            height={1000}
            unoptimized
            className="w-full h-[200px] md:h-auto object-cover object-top"
          />
        </div>

        {/* Contact */}
        <div className="pt-10 xl:pt-16 pb-16 xl:pb-30">
          <div className="max-w-[985px] w-full mx-auto">
            <div className="grid md:grid-cols-[48%_4%_48%] items-center gap-12 md:gap-0">
              <div className="order-2 md:order-1">
                <div className={`md:p-6 flex flex-col items-center md:max-w-[350px] max-w-[450px] w-full mx-auto `}>
                  <HandShakeIcon className="w-[64px] h-[64px] text-[#1F274B]" />
                  <h1 className="mt-4 mb-8 uppercase font-extrabold text-2xl lg:text-[32px] text-center text-primary-text leading-[124%]">
                    Find an expert <br /> near you
                  </h1>

                  <div className="grid grid-cols-2 items-center w-full mb-6">
                    <p className="text-lg">Country</p>
                    <div className=" flex justify-end">
                      <Select defaultValue="USA">
                        <SelectTrigger className="find-us-custom-select">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#F4F5F7] rounded-none">
                          {country.map((item, idx) => (
                            <SelectItem
                              key={idx}
                              value={item.value}
                              className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 items-center w-full mb-8">
                    <p className="text-lg">Region</p>
                    <div className=" flex justify-end">
                      <Select defaultValue="CT">
                        <SelectTrigger className="find-us-custom-select">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#F4F5F7] rounded-none">
                          {region.map((item, idx) => (
                            <SelectItem
                              key={idx}
                              value={item.value}
                              className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <button
                    onClick={handleSearch}
                    className="find-us-button flex items-center justify-center"
                  >
                    Search
                  </button>
                </div>

              </div>



              <div className="bgPrimary h-[90%] w-[3px] mx-auto hidden md:block order-3 md:order-2"></div>

              <div className="md:p-6 flex flex-col items-center md:max-w-[350px] max-w-[450px] w-full  mx-auto order-1 md:order-3">
                <MapMarker className="h-16 w-16" />
                <h1 className="mt-4 mb-8 uppercase font-extrabold text-2xl lg:text-[32px] text-center text-primary-text leading-[124%]">
                  FIND US AT <br /> COMPETITIONS
                </h1>

                <div className="grid grid-cols-2 items-center gap-4 justify-between w-full mb-6">
                  <p className="text-lg ">DISCIPLINE</p>
                  <div className=" flex justify-end">
                    <Select defaultValue="EVENTING">
                      <SelectTrigger className="find-us-custom-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#F4F5F7] rounded-none">
                        {discipline.map((item, idx) => (
                          <SelectItem
                            key={idx}
                            value={item.value}
                            className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-4 justify-between w-full mb-6">
                  <p className="text-lg">COUNTRY</p>
                  <div className=" flex justify-end">
                    <Select defaultValue="USA">
                      <SelectTrigger className="find-us-custom-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#F4F5F7] rounded-none">
                        {country.map((item, idx) => (
                          <SelectItem
                            key={idx}
                            value={item.value}
                            className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Link
                  href={"/find-us/calendar"}
                  className="find-us-button flex items-center justify-center"
                >
                  Calendar
                </Link>
              </div>
            </div>
          </div>

          {showResult && (
            <div className="flex  flex-col justify-center items-center gap-12">
              <div className="flex flex-col items-center mt-10 w-full md:w-auto">
                <div className="p-6 flex md:flex-row flex-col gap-8 w-full  h-full items-center mx-auto border rounded-lg">
                  <div className="flex md:justify-center">
                    <Image
                      src="/matheiu-logo.png"
                      alt="matheiu-logo"
                      width={500}
                      height={500}
                      unoptimized
                      className="w-[270px] "
                    />
                  </div>
                  <div className="bgPrimary self-stretch w-[1px] hidden md:block"></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-center space-y-5">
                      <h2 className="text-2xl font-extrabold uppercase text-primary-text">
                        VICTORIA BRILL
                      </h2>
                      <p className="text-base text-secondary-text">
                        (203) 598-8691
                      </p>
                      <p className="text-base text-secondary-text">
                        V.BRILL@ARION-HST.COM
                      </p>
                    </div>
                    <button className="find-us-button block mx-auto">
                      Save Business Card
                    </button>

                  </div>
                </div>
              </div>
              <div className="">
                <Link
                  href="/saddles/saddlery-expert"
                  className="px-8 py-4 bg-[#1F274B] text-[#FFF] cursor-pointer"
                >
                  TRY A SADDLE
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
