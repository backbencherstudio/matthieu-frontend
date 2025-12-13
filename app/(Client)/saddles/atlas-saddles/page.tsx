import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";
import React from "react";

const saddlesItems = {
  label: "ATLAS SADDLES",
  subtitle: "full CUSTOM",
  items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
  btns: [{ title: "Connect with a saddle expert", href: "" }],
  images: [
    {
      id: 1,
      slug: "jumping-saddles",
      name: "JUMPING SADDLES",
      image: "/images/saddles/atlas-jumping.png",
    },
    {
      id: 2,
      slug: "cross-country-saddles",
      name: "CROSS COUNTRY SADDLES",
      image: "/images/saddles/atlas-cross.png",
    },
    {
      id: 3,
      slug: "dressage-saddles",
      name: "DRESSAGE SADDLES",
      image: "/images/saddles/atlas-dressage.png",
    },
  ],
};

export default function AtlasSaddlesPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "Atlas Saddles",
      href: "/saddles/atlas-saddles",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer lg:py-[80px] py-[60px]">
        <SAddlesCategoryItems saddlesItems={saddlesItems} />
      </div>
    </>
  );
}
