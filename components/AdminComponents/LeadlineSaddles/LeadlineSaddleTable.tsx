"use client";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useGetallLeadlineSaddleQuery } from "@/src/redux/admin/leadlineSaddle/leadlineSaddle";
import { TableRowItem } from "@/types/TableRowItem";
import { ReactNode, useState } from "react";
import DeleteLeadlineSaddle from "./DeleteLeadlineSaddle";

export default function LeadlineSadleTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, refetch } = useGetallLeadlineSaddleQuery("");
  const relevantData = data?.data;
  const currentItems = Array.isArray(relevantData) ? relevantData : [];
  const meta = data?.meta;
  const tableHeader = [
    "name",
    "Size",
    "Stock-Quantity",
    "Price $",
    "Price €",
    "Country",
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
        {item?.size}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.stockQuantity}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.price_usd}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.price_eur}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.country}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
          <DeleteLeadlineSaddle id={String(item?.id)} refetch={refetch} />
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
