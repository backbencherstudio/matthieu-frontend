import Image from "next/image";
import React from "react";

interface Card {
  title: string;
  value: string;
  positiveValue?: string;
  negativeValue?: string;
  image: string;
}

export default function StatisticCard({ card }: { card: Card }) {
  return (
    <div className="p-4 rounded-[8px] border border-[#ECEFF3] bg-white flex justify-between">
      <div>
        <p className="text-base">{card.title}</p>
        <h1 className="text-2xl font-extrabold mt-5 mb-3">{card.value}</h1>
        {card.positiveValue ||
          (card.negativeValue && (
            <div className="flex items-center gap-2 text-base text-gray-black">
              {card.positiveValue && (
                <p className="bg-success-bg py-1 px-2.5 rounded text-success-text text-xs">
                  {card.positiveValue}
                </p>
              )}
              {card.negativeValue && (
                <p className="bg-error-bg py-1 px-2.5 rounded text-error-text text-xs">
                  {card.negativeValue}
                </p>
              )}
              <p>vs last month</p>
            </div>
          ))}
      </div>
      <div>
        <Image
          src={card.image}
          alt="customers"
          height={40}
          width={40}
          unoptimized
        />
      </div>
    </div>
  );
}
