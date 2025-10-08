import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatisticCard from "../reusable/StatisticCard";

export default function Analytics() {
  const statisticCards = [
    {
      title: "Total Revenue",
      value: "$12,567",
      positiveValue: "+3.6%",
      negativeValue: "",
      image: "/images/admin/dashboard/dollar.svg",
    },
    {
      title: "Total Orders",
      value: "3,247",
      positiveValue: "",
      negativeValue: "-6.6%",
      image: "/images/admin/dashboard/cart.svg",
    },
    {
      title: "Avg. Order Value",
      value: "6,225",
      positiveValue: "+12.1%",
      negativeValue: "",
      image: "/images/admin/dashboard/product.svg",
    },
    {
      title: "Conversion Rate",
      value: "1,429",
      positiveValue: "+20.1%",
      negativeValue: "",
      image: "/images/admin/dashboard/conversation-rate.svg",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Analytics Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[100px] sm:w-[120px] !h-[43px] py-2.5 px-3 shadow-none outline-none focus-visible:ring-0 cursor-pointer border border-primary-text rounded text-primary-text">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="old">Old</SelectItem>
            </SelectContent>
          </Select>
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/admin/dashboard/add-product"
          >
            <PlusIcon className="h-4 w-4" />
            <span>Export Analysis</span>
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
    </div>
  );
}
