"use client";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useGetAllUseSadlesAdminQuery } from "@/src/redux/admin/useSaddles/useSaddlesApi";
import { TableRowItem } from "@/types/TableRowItem";
import { ReactNode, useState } from "react";
import DeleteUseSaddle from "./DeleteUseSaddle";
import UseSaddlesDetailsModal from "./UseSaddlesDetailsModal";

const UseSaddlesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, refetch } = useGetAllUseSadlesAdminQuery({});
  const relevantData = data?.data;
  const currentItems = relevantData ?? [];
  const meta = data?.meta;
  const tableHeader = [
    "Saddle Id",
    "Title",
    "Description",
    "Base Price",
    "Saddle Category",
    "Category",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number,
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%] text-wrap">
        {item?.sku}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.title}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.description}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        ${item?.basePrice_usd}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.usedsaddlecategory}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.category}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
          <UseSaddlesDetailsModal id={String(item?.id)} />
        </div>
        <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
          <DeleteUseSaddle id={String(item?.id)} refetch={refetch} />
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
};

export default UseSaddlesTable;
