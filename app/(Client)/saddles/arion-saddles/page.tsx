import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";

const saddlesItems = {
  label: "Arion Saddles",
  subtitle: "full CUSTOM",
  items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
  btns: [
    { title: "Connect with a saddle expert", href: "" },
    { title: "CUSTOMIZE YOUR SADDLE", href: "" },
  ],
  images: [
    {
      id: 1,
      name: "JUMPING SADDLES",
      image: "/images/saddles/jumping.png",
    },
    {
      id: 2,
      name: "CROSS COUNTRY SADDLES",
      image: "/images/saddles/cross.png",
    },
    {
      id: 3,
      name: "DRESSAGE SADDLES",
      image: "/images/saddles/dressage.png",
    },
    {
      id: 4,
      name: "KIDS SADDLES",
      image: "/images/saddles/kids.png",
    },
  ],
};

export default function ArionSaddlesPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "Arion Saddles",
      href: "/saddles/arion-saddles",
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
