import React from "react";
import HandShake from "@/components/Icons/HandShake";
import MapMarker from "@/components/Icons/MapMarker";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            className="w-full h-auto xl:h-[530px] object-cover object-top"
          />
        </div>

        {/* Contact */}
        <div className="pt-10 xl:pt-16 pb-16 xl:pb-30">
          <div className="max-w-[985px] w-full mx-auto">
            <div className="grid md:grid-cols-[48%_4%_48%] items-center">
              <div className="p-6 flex flex-col items-center max-w-[350px] mx-auto">
                <HandShake className="h-16 w-16" />
                <h1 className="mt-4 mb-8 uppercase font-extrabold text-2xl md:text-[32px] text-center text-primary-text leading-[124%]">
                  FIND AN EXPERT <br /> NEAR YOU
                </h1>

                <div className="grid grid-cols-2 items-center w-full mb-6">
                  <p className="text-lg">COUNTRY :</p>

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

                <div className="grid grid-cols-2 items-center w-full mb-8">
                  <p className="text-lg">REGION :</p>

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

                <button className="find-us-button">Try a Saddle</button>
              </div>

              <div className="bgPrimary h-[90%] w-[3px] mx-auto hidden md:block"></div>

              <div className="p-6 flex flex-col items-center max-w-[350px] mx-auto">
                <MapMarker className="h-16 w-16" />
                <h1 className="mt-4 mb-8 uppercase font-extrabold text-2xl md:text-[32px] text-center text-primary-text leading-[124%]">
                  FIND US AT <br /> COMPETITIONS
                </h1>

                <div className="grid grid-cols-2 items-center w-full mb-6">
                  <p className="text-lg">DISCIPLINE :</p>

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

                <div className="grid grid-cols-2 items-center w-full mb-8">
                  <p className="text-lg">COUNTRY :</p>

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

                <button className="find-us-button">Calendar</button>
              </div>
            </div>

            {/* Info */}
            <div className="pt-16">
              {/* contact info */}
              <div className="grid md:grid-cols-[48%_4%_48%] items-center justify-center">
                <div className="flex md:justify-end md:pr-4">
                  <Image
                    src="/matheiu-logo.png"
                    alt="matheiu-logo"
                    width={500}
                    height={500}
                    className="w-[270px] "
                  />
                </div>
                <div className="bgPrimary h-full w-[1.5px] mx-auto hidden md:block"></div>
                <div className="flex flex-col gap-4 md:pl-4 pt-6 md:pt-0 items-center md:items-start">
                  <h2 className="text-2xl font-extrabold uppercase">
                    VICTORIA BRILL
                  </h2>
                  <p className="text-base text-secondary-text">
                    (203) 598-8691
                  </p>
                  <p className="text-base text-secondary-text">
                    V.BRILL@ARION-HST.COM
                  </p>
                </div>
              </div>
              <button
                className="find-us-button mt-6 md:mt-12 block mx-auto"
                style={{ width: "fit-content" }}
              >
                Save Business Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
