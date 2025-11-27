import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import FilteredCategory from "@/components/ClientComponents/Tacks/FilteredCategory";
import React from "react";

export default function AccessoriesPage() {
  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "ACCESSORIES",
      href: "/tack/accessories",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="maxContainer my-12">
        <FilteredCategory categoryData={categoryItems} title="Accessoris" />
      </div>
    </div>
  );
}

const categoryItems = [
  {
    id: 1,
    name: "3-point hunting collar",
    category: "Accessories",
    image: "/images/tacks/accessories.jpg",
    price: "$370.00",
    color: "Black",
    size: "Standard",
  },
  {
    id: 2,
    name: "Classic Martingale",
    category: "Accessories",
    image: "/images/tacks/accessories2.jpg",
    price: "$370.00",
    color: "Brown",
    size: "Standard",
  },
];
