"use client";

import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import { ReactNode } from "react";
import SaddleAlertDetailModal from "./SaddleAlertDetailModal";
import SaddleDeleteModal from "./SaddleDeleteModal";

export default function SaddleAlert() {
  const relevantData = [
    {
      id: "ALT-00154258",
      customer: "Marcus Thompson",
      email: "marcus@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Marcelo X",
      email: "marcuso@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Elon Mask",
      email: "elon@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Donal Tramp",
      email: "donal@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Marcus Thompson",
      email: "marcus@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Elon Mask",
      email: "elon@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Donal Tramp",
      email: "donal@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
    {
      id: "ALT-00154258",
      customer: "Marcus Thompson",
      email: "marcus@ukclub.ccm",
      preferences: "Jumping, Cross Country",
      sizes: "17', 17.5''",
      priceRange: "€2,000 - €4,000",
      createdDate: "09 June, 2025",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Alert ID",
    "Customer",
    "Preferences",
    "Price Range",
    "Created Date",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => <span className="text-[14px] text-[#1F274B]">{item?.id}</span>,
    (item) => (
      <span className="text-[14px] text-[#1F274B]">{item?.customer}</span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">{item?.preferences}</span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">{item?.priceRange}</span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">{item?.createdDate}</span>
    ),

    (item) => (
      <div>
        <div className="flex items-center justify-end gap-2">
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px]">
            <SaddleAlertDetailModal />
          </button>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px]">
            <SaddleDeleteModal />
          </button>
        </div>
      </div>
    ),
  ];

  const isLoadings = false;

  return (
    <div>
      <div className="flex items-center justify-between mb-5 mt-4">
        <h1 className="lg:text-2xl md:text-xl text-lg font-extrabold text-[#1F274B]">
          Used Saddle Alert Overview
        </h1>
        <button className="flex items-center justify-center px-4 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer">
          <RefreshIcon />
          <span>Refresh</span>
        </button>
      </div>

      <div className="overflow-auto">
        <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
          {/* search bar */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2.5 my-[23px]">
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%]">
              Customer Alert List
            </h2>
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                placeholder="Search by customer name, email, or brand..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* table */}
          <div className="mt-4 overflow-x-auto">
            <ReuseAbleTable
              allClientDataList={relevantData}
              isLoadings={isLoadings}
              currentItems={currentItems}
              tableHeader={tableHeader}
              tableRowDataRenderers={tableRowDataRenderers}
              isBg={false}
            />
          </div>

          {/* pagination */}
          {!isLoadings && (
            <div
              className={`flex justify-center pt-12 pb-4 ${
                relevantData?.length >= 5 ? "block" : "hidden"
              }`}
            >
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
