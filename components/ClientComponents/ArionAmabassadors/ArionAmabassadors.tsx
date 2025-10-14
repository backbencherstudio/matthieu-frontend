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
      image: "/images/arion-1.png",
      title: "NICK DELLO JOIO",
    },
    {
      id: 2,
      nation: "usa",
      discipline: "show-jumping",
      image: "/images/arion-2.png",
      title: "TAYLOR CAWLEY",
    },
    {
      id: 3,
      nation: "france",
      discipline: "eventing",
      image: "/images/arion-3.png",
      title: "MOLLY ASHE CAWLEY",
    },
    {
      id: 4,
      nation: "new-zeland",
      discipline: "dressage",
      image: "/images/arion-4.png",
      title: "EMI RICHARD",
    },
    {
      id: 5,
      nation: "canada",
      discipline: "equitation",
      image: "/images/arion-5.png",
      title: "ADRIANA FORTE",
    },
    {
      id: 6,
      nation: "canada",
      discipline: "equitation",
      image: "/images/arion-6.png",
      title: "PARKER PEACOCK",
    },
    {
      id: 7,
      nation: "canada",
      discipline: "equitation",
      image: "/images/arion-7.png",
      title: "EMMA HAKIM",
    },
    {
      id: 8,
      nation: "canada",
      discipline: "equitation",
      image: "/images/arion-8.png",
      title: "CRISTIAN HACKER",
    },
    {
      id: 9,
      nation: "canada",
      discipline: "equitation",
      image: "/images/arion-9.png",
      title: "MONICA SPENCER",
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
            <div key={idx}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
