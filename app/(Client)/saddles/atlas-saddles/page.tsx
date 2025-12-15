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
      name: "JUMPING SADDLES",
      image: "/images/saddles/atlas-jumping.png",
      slug: "jumping",
      link: "/saddles/atlas-saddles",
    },
    {
      id: 2,
      name: "CROSS COUNTRY SADDLES",
      image: "/images/saddles/atlas-cross.png",
      slug: "cross-country",
      link: "/saddles/atlas-saddles",
    },
    {
      id: 3,
      name: "DRESSAGE SADDLES",
      image: "/images/saddles/atlas-dressage.png",
      slug: "dressage",
      link: "/saddles/atlas-saddles",
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
