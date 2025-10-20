"use client";
import React, { useState } from "react";
import Image from "next/image";
import FilterIcon from "@/components/Icons/FilterIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Country {
  label: string;
  value: string;
}

interface Discipline {
  label: string;
  value: string;
}

interface Data {
  id: number;
  nation: string;
  discipline: string;
  image: string;
  title: string;
  link?:string;
}

export default function ArionAmabassadors() {
  const [nationType, setNationType] = useState<string>("");
  const [disciplineType, setDisciplineType] = useState<string>("");

  const country: Country[] = [
    {
      label: "USA",
      value: "usa",
    },
    {
      label: "BRAZIL",
      value: "brazil",
    },
    {
      label: "GUATEMALA",
      value: "guatemala",
    },
    {
      label: "NEW ZELAND",
      value: "new-zeland",
    },
    {
      label: "CANADA",
      value: "canada",
    },
    {
      label: "IRELAND",
      value: "ireland",
    },
  ];

  const discipline: Discipline[] = [
    {
      label: "SHOW JUMPING",
      value: "show-jumping",
    },
    {
      label: "EVENTING",
      value: "eventing",
    },
    {
      label: "DRESSAGE",
      value: "dressage",
    },
    {
      label: "EQUITATION",
      value: "equitation",
    },
    {
      label: "HUNTER",
      value: "hunter",
    },
  ];

  const data: Data[] = [
    {
      id: 1,
      nation: "usa",
      discipline: "show-jumping",
      image: "/images/ambassadors/nick-dello-joio.jpg",
      title: "NICK DELLO JOIO",
      link:"https://www.nickdellojoio.com/"
    },
    {
      id: 2,
      nation: "usa",
      discipline: "show-jumping",
      image: "/images/ambassadors/taylor-cawley.jpg",
      title: "TAYLOR CAWLEY",
      link:"https://www.instagram.com/taylor.cawley/"
    },
    {
      id: 3,
      nation: "france",
      discipline: "eventing",
      image: "/images/ambassadors/molly-ashe-cawley.jpg",
      title: "MOLLY ASHE CAWLEY",
      link:"https://www.instagram.com/taylor.cawley/"
    },
    {
      id: 4,
      nation: "new-zeland",
      discipline: "dressage",
      image: "/images/ambassadors/emi-richard.png",
      title: "EMI RICHARD",
      link:"https://www.instagram.com/emirichard09/"
    },
    {
      id: 5,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/adriana_forte.png",
      title: "ADRIANA FORTE",
      link:"https://www.instagram.com/adriana.m.forte/"
    },
    {
      id: 6,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/parker-peacock.JPG",
      title: "PARKER PEACOCK",
      link:"https://www.instagram.com/parkerlpeacock/"
    },
    {
      id: 7,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/emma-hakim.png",
      title: "EMMA HAKIM",
      link:"https://www.instagram.com/mariellebabington/"
    },
    {
      id: 8,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/cristian_hacker.JPG",
      title: "CRISTIAN HACKER",
      link:"https://www.instagram.com/cristianhacker/"
    },
    {
      id: 9,
      nation: "canada",
      discipline: "equitation",
      image: "/images/arion-9.png",
      title: "MONICA SPENCER",
      link:"https://www.instagram.com/_quinnhunter_/"
    },
         {
      id: 10,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/Kenzie_Smith.JPEG",
      title: "KENZIE SMITH",
      link:"https://www.instagram.com/kenzie_smith_04/"
    },
       {
      id: 11,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/Ryan_Helsden.png",
      title: "RYAN HELSDEN",
      link:"https://www.instagram.com/ryan_haselden/"
    },
       {
      id: 12,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/elisa_wallace.jpg",
      title: "ELISA WALLACE",
      link:"https://wallaceeventing.com/"
    },
       {
      id: 13,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/mae-mannis.png",
      title: "MIA MANNIS",
      link:"https://www.instagram.com/mia_mannis/"
    },
       {
      id: 14,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/sophie-mitchell.jpg",
      title: "SOPHIE MITCHELL",
      link:"https://www.instagram.com/sophie.mitchell11/"
    },
       {
      id: 15,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/hayley-mairano.jpeg",
      title: "HAYLEY MAIRANO",
      link:""
    },
       {
      id: 16,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/quinn-hunter (2).png",
      title: "QUINN HUNTER",
      link:"https://www.instagram.com/_quinnhunter_/"
    },
       {
      id: 17,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/cece-chatterjee.JPG",
      title: "CECELIA CHATTERJEE",
      link:"https://www.instagram.com/cece.chatterjee/"
    },
       {
      id: 18,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/marielle-babington.png",
      title: "MARIELLE BABBINGTON ",
      link:"https://www.instagram.com/mariellebabington/"
    },
       {
      id: 19,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/michel-feitosa.JPEG",
      title: "MICHEL FEITOSA",
      link:"https://www.instagram.com/michel_feitosaa/"
    },
       {
      id: 20,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/lynn_symansky.jpg",
      title: "LYNN SYMANSKY",
      link:"https://www.symanskyequestrian.com/"
    },
       {
      id: 21,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/james_leone.jpg",
      title: "JAMES LEONE",
      link:""
    },
       {
      id: 22,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/caroline_mcleese.jpeg",
      title: "CAROLINE MCLEESE",
      link:"https://www.instagram.com/carolinemcleese/?hl=en"
    },
       {
      id: 23,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/amira-kettaneh.jpeg",
      title: "AMIRA KETTANEH",
      link:"https://www.symanskyequestrian.com/"
    },
       {
      id: 24,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/hugo-mcalpine.JPG",
      title: "HUGO MCALPINE",
      link:"https://www.instagram.com/hugomcalpine/"
    },
       {
      id: 25,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/mae-mannis.png",
      title: "MAE MANNIS",
      link:"https://www.instagram.com/mia_mannis/"
    },
       {
      id: 26,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/Addyson_Cord.JPG",
      title: "ADDYSON CORD",
      link:""
    },
       {
      id: 27,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/connor-mcmahon.jpg",
      title: "CONNOR MCMAHON",
      link:"https://www.instagram.com/conor.mcmahon13/"
    },
       {
      id: 28,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/emma_thomas.jpg",
      title: "EMMA THOMAS",
      link:"https://www.instagram.com/emma.thomas95/"
    },
       {
      id: 29,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/bobby_meyerhoff.jpg",
      title: "BOBBY MEYERHOFF",
      link:"https://emdeventing.wixsite.com/meyerhoffshowhorses"
    },
       {
      id: 30,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/danica_meyerhoff.jpg",
      title: "DANICA MEYERHOFF",
      link:"https://emdeventing.wixsite.com/meyerhoffshowhorses"
    },
       {
      id: 31,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/hadden_frost.jpg",
      title: "HADDEN FROST",
      link:"https://www.facebook.com/hadden.frost.1"
    },
        {
      id: 32,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/lia-screnci.jpg",
      title: "LIA SCRENCI",
      link:""
    },
        {
      id: 33,
      nation: "canada",
      discipline: "equitation",
      image: "/images/ambassadors/ronan-guckian.jpeg",
      title: "RONAN GUCKIAN",
      link:""
    },
       

  ];

  const filteredData = data
    .filter((item) => nationType === "" || nationType === item.nation)
    .filter(
      (item) => disciplineType === "" || disciplineType === item.discipline
    );

  return (
    <div className="pt-10 xl:pt-12 pb-16 xl:pb-30">
      <div className="maxContainer">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="uppercase text-3xl md:text-[40px] font-extrabold text-primary-text">
            ARION AMABASSADORS
          </h1>
          <p className="text-secondary-text text-center text-base md:text-lg">
            MEET THE RIDERS THAT TRUST OUR BRAND.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-12">
          <FilterIcon className="h-8 w-8" />

          <DropdownMenu>
            <DropdownMenuTrigger className="text-secondary-text text-base flex items-center gap-2 cursor-pointer focus-visible:border-none">
              <span>NATION</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F4F5F7] rounded-none">
              {country.map((item, idx) => (
                <DropdownMenuItem
                  key={idx}
                  className="text-sm"
                  onSelect={(e) => e.preventDefault()}
                >
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id={`nation-${item.value}`}
                      value={item.label}
                      checked={nationType === item.value}
                      onCheckedChange={(checked) =>
                        setNationType(checked ? item.value : "")
                      }
                      className="cursor-pointer"
                    />
                    <Label
                      htmlFor={`nation-${item.value}`}
                      className="text-sm cursor-pointer text-primary-text"
                    >
                      {item.label}
                    </Label>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-secondary-text text-base flex items-center gap-2 cursor-pointer focus-visible:border-none">
              <span>DISCIPLINE</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F4F5F7] rounded-none">
              {discipline.map((item, idx) => (
                <DropdownMenuItem
                  key={idx}
                  className="text-sm"
                  onSelect={(e) => e.preventDefault()}
                >
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id={`discipline-${item.value}`}
                      value={item.label}
                      checked={disciplineType === item.value}
                      onCheckedChange={(checked) =>
                        setDisciplineType(checked ? item.value : "")
                      }
                      className="cursor-pointer"
                    />
                    <Label
                      htmlFor={`discipline-${item.value}`}
                      className="text-sm cursor-pointer text-primary-text"
                    >
                      {item.label}
                    </Label>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {filteredData.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-dark-primary mb-2">
                  No Ambassadors Found
                </h3>
                <p className="text-secondary-text">
                  No ambassadors match your current filter criteria. Try
                  adjusting your filters to see more results.
                </p>
                <button
                  className="mt-2 bg-primary-text text-white px-4 py-2 rounded cursor-pointer"
                  onClick={() => {
                    setNationType("");
                    setDisciplineType("");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {filteredData.map((item, idx) => (
            <a href={item?.link} key={idx}>
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                unoptimized
                className="h-auto xl:h-[450px] w-full object-cover"
              />
              <h1 className="text-xl lg:text-2xl font-extrabold uppercase mt-6 text-dark-primary text-center">
                {item.title}
              </h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
