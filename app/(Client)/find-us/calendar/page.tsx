"use client";

import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import SlidersHorizontalIcon from "@/components/Icons/SlidersHorizontalIcon";
import { ChevronDown } from "lucide-react";

import { useMemo, useState } from "react";

interface Competition {
  date: string;
  competition: string;
  location: string;
  discipline: string;
}

const COMPETITIONS: Competition[] = [
  {
    date: "8/1-8/5",
    competition: "HITS VERMONT",
    location: "MANCHESTER, VT",
    discipline: "HUNTER/JUMPER",
  },
  {
    date: "9/1-9/10",
    competition: "SILO RIDGE MASTERS",
    location: "AMENIA, NY",
    discipline: "HUNTER/JUMPER",
  },
  {
    date: "12/2-12/28",
    competition: "WELLINGTON INTERNATIONAL",
    location: "WELLINGTON, FL",
    discipline: "HUNTER/JUMPER",
  },
];

const COUNTRIES = ["All", "United States", "Canada", "International"];
const DISCIPLINES = ["All", "Hunter/Jumper", "Dressage", "Eventing"];

const CalendarPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");
  const [countryOpen, setCountryOpen] = useState(false);
  const [disciplineOpen, setDisciplineOpen] = useState(false);

  const filteredCompetitions = useMemo(() => {
    return COMPETITIONS.filter((comp) => {
      const matchesDiscipline =
        selectedDiscipline === "All" ||
        comp.discipline === selectedDiscipline.toUpperCase();
      return matchesDiscipline;
    });
  }, [selectedDiscipline]);
  const breadLink = [
    {
      label: "FIND US",
      href: "/find-us",
    },
    {
      label: "COMPETITON CALENDAR",
      href: "/find-us/calendar",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="lg:py-12 md:py-10 py-8 maxContainer">
        <div className="flex items-center gap-x-10 mb-8">
          <button
            onClick={() => setCountryOpen(!countryOpen)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <SlidersHorizontalIcon />
          </button>
          <button
            onClick={() => setCountryOpen(!countryOpen)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-[16px] leading-[100%] text-[#4C526F]">
              COUNTRY
            </span>
            <ChevronDown />
          </button>
          <button
            onClick={() => setCountryOpen(!countryOpen)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-[16px] leading-[100%] text-[#4C526F]">
              DISCPLINE
            </span>
            <ChevronDown />
          </button>
        </div>

        {/* Table */}
        <div className="border border-[#DFE1E7]">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#1F274B] text-[#FFF]">
                <th className="p-4 text-left text-lg leading-[112%] font-extrabold normal-case border border-l">
                  Date
                </th>
                <th className="p-4 text-left text-lg leading-[112%] font-extrabold normal-case border border-l">
                  Competition
                </th>
                <th className="p-4 text-left text-lg leading-[112%] font-extrabold normal-case border border-l">
                  Location
                </th>
                <th className="p-4 text-left text-lg leading-[112%] font-extrabold normal-case border border-l">
                  Discipline
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {filteredCompetitions.map((comp, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-border ${
                    idx % 2 === 0 ? "bg-background" : "bg-muted/30"
                  }`}
                >
                  <td className="text-[16px] tracking-[0.08px] text-[#4A4C56] leading-[124%] border border-l px-4 py-5">
                    {comp.date}
                  </td>
                  <td className="text-[16px] tracking-[0.08px] text-[#4A4C56] leading-[124%] border border-l px-4 py-5">
                    {comp.competition}
                  </td>
                  <td className="text-[16px] tracking-[0.08px] text-[#4A4C56] leading-[124%] border border-l px-4 py-5">
                    {comp.location}
                  </td>
                  <td className="text-[16px] tracking-[0.08px] text-[#4A4C56] leading-[124%] border border-l px-4 py-5">
                    {comp.discipline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCompetitions.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No competitions found matching your filters.
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarPage;
