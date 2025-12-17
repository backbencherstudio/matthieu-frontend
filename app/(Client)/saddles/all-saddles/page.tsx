import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import SAddlesCategoryItems from "@/components/ClientComponents/Saddles/SAddlesCategoryItems";
import TailorMAade from "@/components/ClientComponents/Saddles/TailorMAade";

export default function AllSaddlesPage() {
  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer">
        <div className=" lg:pt-[80px] lg:pb-[60px] pt-[60px] pb-[50px]">
          <SAddlesCategoryItems saddlesItems={saddlesItemsArion} />
        </div>
        <div className=" lg:py-[60px] py-[50px]">
          <SAddlesCategoryItems saddlesItems={saddlesItemsAtlas} />
        </div>
        <div className=" lg:py-[80px] py-[60px]">
          <TailorMAade />
        </div>
      </div>
    </div>
  );
}

const saddlesItemsArion = {
  label: "Arion Saddles",
  subtitle: "Fully Customizable",
  items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
  btns: [
    { title: "Connect with a saddle expert", href: "" },
    { title: "CUSTOMIZE YOUR SADDLE", href: "" },
  ],
  images: [
    {
      id: 1,
      name: "JUMPING",
      image: "/images/saddles/jumping.png",
      startFrom: "$5,000",
      link: "/saddles",
      slug: "jumping",
    },
    {
      id: 2,
      name: "CROSS-COUNTRY",
      image: "/images/saddles/cross.png",
      startFrom: "$5,000",
      link: "/saddles",
      slug: "cross-country",
    },
    {
      id: 3,
      name: "DRESSAGE",
      image: "/images/saddles/dressage.png",
      startFrom: "$5,000",
      link: "/saddles",
      slug: "dressage",
    },
    {
      id: 4,
      name: "KIDS",
      image: "/images/saddles/kids.png",
      startFrom: "$5,000",
      link: "/saddles",
      slug: "kids",
    },
  ],
};

const saddlesItemsAtlas = {
  label: "ATLAS SADDLES",
  subtitle: "Semi CUSTOM",
  items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
  btns: [{ title: "Connect with a saddle expert", href: "" }],
  images: [
    {
      id: 1,
      name: "JUMPING",
      image: "/images/saddles/atlas-jumping.png",
      startFrom: "$5,000",
      link: "/saddles/atlas-saddles",
      slug: "jumping",
    },
    {
      id: 2,
      name: "CROSS-COUNTRY",
      image: "/images/saddles/atlas-cross.png",
      startFrom: "$5,000",
      link: "/saddles/atlas-saddles",
      slug: "cross-country",
    },
    {
      id: 3,
      name: "DRESSAGE",
      image: "/images/saddles/atlas-dressage.png",
      startFrom: "$5,000",
      link: "/saddles/atlas-saddles",
      slug: "dressage",
    },
  ],
};

const saddlesItemsAthena = {
  label: "ATHENA SADDLES",
  subtitle: "TAILOR MADE",
  items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
  btns: [{ title: "Connect with a saddle expert", href: "" }],
  video: "/videos/athena.mp4",
};
