import StatisticCard from "@/components/AdminComponents/reusable/StatisticCard";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import ProductTable from "@/components/AdminComponents/Products/ProductTable";
import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  const statisticCards = [
    {
      title: "Total Products",
      value: "150",
      image: "/images/admin/product.svg",
    },
    {
      title: "Active Products",
      value: "68",
      image: "/images/admin/activeProduct.svg",
    },
    {
      title: "Out of Stock",
      value: "8",
      image: "/images/admin/outOfStock.svg",
    },
    {
      title: "Total Value",
      value: "$19,225.5",
      image: "/images/admin/dollar.svg",
    },
  ];
  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Products Management
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/admin/dashboard/manage-category"
          >
            <span>Manage Category</span>
          </Link>
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/admin/products/add"
          >
            <PlusIcon className="h-4 w-4" />
            <span>Add Product</span>
          </Link>
        </div>
      </div>
      {/* Statistics Card */}
      <div className="pt-6">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {statisticCards.map((card) => (
            <StatisticCard key={card.title} card={card} />
          ))}
        </div>
      </div>
      {/* Table */}
      <ProductTable />
    </div>
  );
}
