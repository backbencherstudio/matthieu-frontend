"use client";

import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";
import TailorMAade from "@/components/ClientComponents/Saddles/TailorMAade";
import { useGetAllSaddlesQuery } from "@/src/redux/client/saddle/saddleApi";

export default function AllSaddles() {
  const { data, isLoading } = useGetAllSaddlesQuery("");

  const saddlesItemsArion = data?.data?.ARION;
  const saddlesItemsAtlas = data?.data?.ATLAS;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-xl font-semibold">Loading saddles...</p>
      </div>
    );
  }

  return (
    <>
      {/* ARION Section */}
      <div className="lg:pt-[80px] lg:pb-[60px] pt-[60px] pb-[50px]">
        <SAddlesCategoryItems
          saddlesItems={{
            name: "ARION SADDLES",
            subtitle: "Fully Customizable",
            products: saddlesItemsArion,
          }}
        />
      </div>

      {/* ATLAS Section */}
      <div className="lg:py-[60px] py-[50px]">
        <SAddlesCategoryItems
          saddlesItems={{
            name: "ATLAS SADDLES",
            subtitle: "Semi CUSTOM",
            products: saddlesItemsAtlas,
          }}
        />
      </div>

      {/* Tailor Made Section */}
      <div className="lg:py-[80px] py-[60px]">
        <TailorMAade />
      </div>
    </>
  );
}