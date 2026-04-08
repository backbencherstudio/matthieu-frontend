"use client";
import { useGetSaddleProductsQuery } from "@/src/redux/admin/saddleProduct/saddleProduct";
import { TableRowItem } from "@/types/TableRowItem";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import PaginationComponent from "../reusable/Features/PaginationComponent";
import ReuseAbleTable from "../reusable/Features/reuseable-table";
import DeleteSaddleProduct from "./DeleteSaddleProduct";

export default function SaddleProductTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, refetch } = useGetSaddleProductsQuery("");
  const allSaddles = React.useMemo(() => {
    if (!data?.data) return [];

    return Object.values(data.data)
      .filter((value) => Array.isArray(value))
      .flat();
  }, [data]);

  const relevantData = allSaddles;
  const currentItems = relevantData;
  const meta = data?.pagination;
  const tableHeader = [
    "Name",
    "Category",
    "Price $",
    "Price €",
    "Image",
    "Action",
  ];
  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number,
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%] text-wrap">
        {item?.name}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.subcategory}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        ${item?.price_usd}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        €{item?.price_eur}
      </span>
    ),
    (item) => (
      <Image
        src={item?.image}
        alt="Image"
        height={100}
        width={100}
        className="h-10 w-10"
      />
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
          <DeleteSaddleProduct id={String(item?.id)} refetch={refetch} />
        </div>
      </div>
    ),
  ];

  return (
    <>
      <div className="pt-6">
        <div className="bg-white p-4 rounded-[8px]">
          <ReuseAbleTable
            allClientDataList={relevantData}
            isLoadings={isLoading}
            currentItems={currentItems}
            tableHeader={tableHeader}
            tableRowDataRenderers={tableRowDataRenderers}
            isBg={false}
          />
        </div>
      </div>

      <div className={`flex justify-center pt-12 pb-4`}>
        <PaginationComponent
          currentPage={meta?.page}
          totalPages={meta?.totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
