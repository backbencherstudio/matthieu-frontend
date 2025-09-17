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

export default function FindUs() {
  return (
    <div>
      <div className="maxContainer">
        {/* Banner */}
        <div className="pt-12">
          <Image
            src="/images/find-us-hero.png"
            alt="find-us-hero"
            width={1000}
            height={1000}
            className="w-full h-[530px] object-cover object-top"
          />
        </div>

        {/* Contact */}
        <div className="pt-16 pb-30">
          <div className="max-w-[984px] w-full mx-auto">
            {/* Form */}
            <div className="grid md:grid-cols-[48%_4%_48%] items-center">
              <div className="p-6 flex flex-col items-center max-w-[350px] mx-auto">
                <HandShake className="h-16 w-16" />
                <h1 className="mt-4 mb-8 uppercase font-extrabold text-[32px] text-center text-primary-text leading-[124%]">
                  FIND AN EXPERT <br /> NEAR YOU
                </h1>

                <div className="grid grid-cols-2 items-center w-full mb-6">
                  <p className="text-lg">COUNTRY :</p>

                  <Select defaultValue="USA">
                    <SelectTrigger className="find-us-custom-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USA">USA</SelectItem>
                      <SelectItem value="Mexico">Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 items-center w-full mb-8">
                  <p className="text-lg">REGION :</p>

                  <Select defaultValue="CT">
                    <SelectTrigger className="find-us-custom-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CT">CT</SelectItem>
                      <SelectItem value="AT">CT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button className="bgPrimary text-white uppercase font-extrabold text-base cursor-pointer h-14 py-4 px-8 w-full">
                  Try a Saddle
                </button>
              </div>

              <div className="bgPrimary h-[90%] w-[3px]"></div>

              <div className="p-6 flex flex-col items-center max-w-[350px] mx-auto">
                <MapMarker className="h-16 w-16" />
                <h1 className="mt-4 mb-8 uppercase font-extrabold text-[32px] text-center text-primary-text leading-[124%]">
                  FIND US AT <br /> COMPETITIONS
                </h1>

                <div className="grid grid-cols-2 items-center w-full mb-6">
                  <p className="text-lg">DISCPLINE : :</p>

                  <Select defaultValue="USA">
                    <SelectTrigger className="find-us-custom-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USA">USA</SelectItem>
                      <SelectItem value="Mexico">Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 items-center w-full mb-8">
                  <p className="text-lg">REGION :</p>

                  <Select defaultValue="CT">
                    <SelectTrigger className="find-us-custom-select">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CT">CT</SelectItem>
                      <SelectItem value="AT">CT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button className="bgPrimary text-white uppercase font-extrabold text-base cursor-pointer h-14 py-4 px-8 w-full">
                  Calendar
                </button>
              </div>
            </div>

            {/* Info */}
            <div>
              <p>SAVE BUSINESS CARD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
