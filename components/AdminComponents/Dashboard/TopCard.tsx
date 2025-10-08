import React from "react";
import Link from "next/link";
import Image from "next/image";
import CheckCircle from "@/components/Icons/AdminIcon/CheckCircle";
import ChartUp from "@/components/Icons/AdminIcon/ChartUp";

interface Cards {
  title: string;
  btnText: string;
  btnLink: string;
  list: {
    image: string;
    name?: string;
    sale?: string;
    price?: string;
    positivePercentage?: string;
    orderID?: string;
    desc?: string;
    status?: string;
    time?: string;
  }[];
}

export default function TopCard({ cards }: { cards: Cards }) {
  return (
    <div className="bg-white rounded-[8px] p-4">
      {/* Header */}
      <div className="flex gap-1 justify-between items-center">
        <h1 className="text-xl font-extrabold text-primary-text">
          {cards.title}
        </h1>
        <Link
          href={cards.btnLink}
          className="text-sm underline whitespace-nowrap"
        >
          {cards.btnText}
        </Link>
      </div>
      {/* List */}
      <div className="space-y-3 mt-4">
        {cards.list.map((item, idx) => (
          <div
            key={idx}
            className={`p-3 bg-[#F6F8FA80] border border-[#ECEFF3] rounded grid ${
              item.status ? "sm:grid-cols-2" : "grid-cols-[60%_40%]"
            } gap-y-2`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt="product"
                width={48}
                height={48}
                className="object-cover rounded"
              />
              <div>
                <h2 className="text-base font-extrabold text-primary-text">
                  {(item?.name && item?.name) || item?.orderID}
                </h2>
                <p className="text-sm mt-2">
                  {(item?.sale && item?.sale + " Sale") || item?.desc}
                </p>
              </div>
            </div>

            <div
              className={`flex items-center ${
                item.status ? "justify-between" : "justify-end"
              }`}
            >
              {item.status && (
                <div>
                  {item.status === "Delivered" && (
                    <div className="flex items-center gap-1 px-2 py-[6px] rounded text-success-text bg-success-bg">
                      <CheckCircle />
                      <span>{item.status}</span>
                    </div>
                  )}
                  {item.status === "In Progress" && (
                    <div className="flex items-center gap-1 px-2 py-[6px] rounded text-progress-text bg-progress-bg">
                      <CheckCircle />
                      <span>{item.status}</span>
                    </div>
                  )}
                  {item.status === "On the way" && (
                    <div className="flex items-center gap-1 px-2 py-[6px] rounded text-on-the-way-text bg-on-the-way-bg">
                      <CheckCircle />
                      <span>{item.status}</span>
                    </div>
                  )}
                  {item.status === "Shipped" && (
                    <div className="flex items-center gap-1 px-2 py-[6px] rounded text-shipped-text bg-shipped-bg">
                      <CheckCircle />
                      <span>{item.status}</span>
                    </div>
                  )}
                </div>
              )}
              <div>
                <h2 className="text-base font-extrabold text-primary-text">
                  {item.price}
                </h2>
                {item.positivePercentage && (
                  <div className="flex items-center gap-1 mt-2">
                    <ChartUp className="text-success-text" />
                    <p className="text-sm text-success-text">
                      {item.positivePercentage}
                    </p>
                  </div>
                )}
                {item.time && (
                  <p className="text-sm text-[#4C526F] mt-2">{item.time}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
