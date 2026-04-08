"use client";

import { useGetSavedProductsQuery } from "@/src/redux/client/savedProduct/savedProduct";
import Image from "next/image";
import React from "react";

const Saved: React.FC = () => {
  const { data, isLoading, isError } = useGetSavedProductsQuery();

  const products = data || [];
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center">Something went wrong</p>;
  }

  if (!data || products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto pb-[16px]">
        <div className="bg-[#F8FAFB] shadow-sm p-[12px]">
          <div className="flex flex-col items-center justify-center min-h-[250px] text-center">
            <h2 className="text-[#1F274B] text-[14px] md:text-[18px] lg:text-[20px] uppercase">
              No Saved Items
            </h2>
            <p className="text-[#1F274B] text-[14px] pt-[12px]">
              You have no saved products yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[24px] pb-[16px]">
      {products?.map((item: any) => (
        <div key={item?.id}>
          <div className="bg-[#F8FAFB] shadow-sm hover:shadow-md transition-all duration-200 p-[12px]">
            <Image
              src={item?.product?.image || "/saved/saved.png"}
              alt={item?.title || "product"}
              width={100}
              height={100}
              className="w-full h-61.25 object-contain"
              unoptimized
            />

            <div>
              <h2 className="text-[#1F274B] text-[14px] md:text-[18px] lg:text-[20px] uppercase">
                {item?.product?.name || "No title"}
              </h2>

              <p className="text-[#1F274B] text-[20px] font-extrabold pt-[12px]">
                {item?.product?.price}
              </p>

              <div className="flex flex-col md:flex-row gap-[12px] pt-[16px]">
                {/* <div className="bg-[#1F274B] w-full text-center flex justify-center items-center">
                  <button className="py-[12px] px-[25px] text-white uppercase">
                    BUY NOW
                  </button>
                </div> */}

                <div className="w-full border border-[#262626] text-center flex justify-center items-center">
                  <button className="py-[12px] px-[25px] uppercase cursor-pointer">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Saved;
