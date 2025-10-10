import Link from "next/link";
import React from "react";
import CouponIcon from "@/components/Icons/AdminIcon/CouponIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import StatisticCard from "@/components/AdminComponents/reusable/StatisticCard";
import TopCard from "@/components/AdminComponents/Dashboard/TopCard";

export default function DashboardPage() {
  const statisticCards = [
    {
      title: "Customers",
      value: "1,429",
      positiveValue: "+20.1%",
      negativeValue: "",
      image: "/images/admin/customers.svg",
    },
    {
      title: "Products",
      value: "6,225",
      positiveValue: "+12.1%",
      negativeValue: "",
      image: "/images/admin/product.svg",
    },
    {
      title: "Orders",
      value: "3,247",
      positiveValue: "",
      negativeValue: "-6.6%",
      image: "/images/admin/cart.svg",
    },
    {
      title: "Total Revenue",
      value: "$12,567",
      positiveValue: "+3.6%",
      negativeValue: "",
      image: "/images/admin/dollar.svg",
    },
  ];

  const topProduct = [
    {
      title: "Top Performing Products",
      btnText: "See all",
      btnLink: "/admin/products",
      list: [
        {
          image: "/images/admin/dashboard/top-product-1.png",
          name: "Racing saddle",
          sale: "4252",
          price: "$369,020",
          positivePercentage: "+20.1%",
        },
        {
          image: "/images/admin/dashboard/top-product-2.png",
          name: "Racing saddle",
          sale: "4252",
          price: "$369,020",
          positivePercentage: "+20.1%",
        },
        {
          image: "/images/admin/dashboard/top-product-3.png",
          name: "Racing saddle",
          sale: "4252",
          price: "$369,020",
          positivePercentage: "+20.1%",
        },
        {
          image: "/images/admin/dashboard/top-product-1.png",
          name: "Racing saddle",
          sale: "4252",
          price: "$369,020",
          positivePercentage: "+20.1%",
        },
      ],
    },
  ];

  const recentOrder = [
    {
      title: "Recent Orders",
      btnText: "See all",
      btnLink: "/admin/orders",
      list: [
        {
          image: "/images/admin/dashboard/top-product-1.png",
          orderID: "#A5AB7D8NS",
          desc: "Hunter Jumper Saddle",
          status: "Delivered",
          price: "$369,020",
          time: "2 hours ago",
        },
        {
          image: "/images/admin/dashboard/top-product-2.png",
          orderID: "#A5AB7D8NS",
          desc: "Hunter Jumper Saddle",
          status: "In Progress",
          price: "$369,020",
          time: "2 hours ago",
        },
        {
          image: "/images/admin/dashboard/top-product-3.png",
          orderID: "#A5AB7D8NS",
          desc: "Hunter Jumper Saddle",
          status: "On the way",
          price: "$369,020",
          time: "2 hours ago",
        },
        {
          image: "/images/admin/dashboard/top-product-1.png",
          orderID: "#A5AB7D8NS",
          desc: "Hunter Jumper Saddle",
          status: "Shipped",
          price: "$369,020",
          time: "2 hours ago",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Dashboard Overview
        </h1>
        <div className="flex items-center gap-4">
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center"
            href="/admin/dashboard/create-coupon"
          >
            <CouponIcon className="h-4 w-4" />
            <span>Create Coupon</span>
          </Link>
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center"
            href="/admin/dashboard/add-product"
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
      {/* Top Products & Orders*/}
      <div className="pt-6">
        <div className="grid xl:grid-cols-2 gap-3">
          {/* Products */}
          <TopCard cards={topProduct[0]} />
          {/* Orders */}
          <TopCard cards={recentOrder[0]} />
        </div>
      </div>
    </div>
  );
}
