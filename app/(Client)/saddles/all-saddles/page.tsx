"use client";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";
import TailorMAade from "@/components/ClientComponents/Saddles/TailorMAade";
import { useGetAllSaddlesQuery } from "@/src/redux/client/saddle/saddleApi";

export default function AllSaddlesPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
  ];

  const { data } = useGetAllSaddlesQuery("");
  const saddlesItemsArion = data?.data?.ARION;
  const saddlesItemsAtlas = data?.data?.ATLAS;

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer">
        <div className="lg:pt-[80px] lg:pb-[60px] pt-[60px] pb-[50px]">
          <SAddlesCategoryItems
            saddlesItems={{
              name: "ARION SADDLES",
              subtitle: "Fully Customizable",
              images: saddlesItemsArion,
            }}
          />
        </div>
        <div className="lg:py-[60px] py-[50px]">
          <SAddlesCategoryItems
            saddlesItems={{
              name: "ATLAS SADDLES",
              subtitle: "Semi CUSTOM",
              images: saddlesItemsAtlas,
            }}
          />
        </div>
        <div className="lg:py-[80px] py-[60px]">
          <TailorMAade />
        </div>
      </div>
    </div>
  );
}
