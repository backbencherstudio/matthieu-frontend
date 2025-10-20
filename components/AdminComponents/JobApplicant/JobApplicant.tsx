
"use client";

import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import { ReactNode } from "react";
import ApplicantsDeleteModal from "./ApplicantsDeleteModal";
import ApplicantsDetailsModal from "./ApplicantsDetailsModal";

export default function JobApplicant() {
  const relevantData = [
    {
      id: 1,
      name: "Emma Taylor",
      email: "emma.taylor@gmail.com",
      phone: "+1 234 567 890",
      state: "California",
      experience: "6 Years",
    },
    {
      id: 2,
      name: "David Moore",
      email: "davidm@saddles.com",
      phone: "+1 345 234 998",
      state: "Texas",
      experience: "2 Years",
    },
    {
      id: 3,
      name: "Sophia Brown",
      email: "sophia.brown@gmail.com",
      phone: "+1 987 654 321",
      state: "Florida",
      experience: "1 Year",
    },
    {
      id: 4,
      name: "Liam Johnson",
      email: "liam.johnson@gmail.com",
      phone: "+1 555 123 789",
      state: "New York",
      experience: "5 Years",
    },
    {
      id: 5,
      name: "Olivia Davis",
      email: "olivia.davis@gmail.com",
      phone: "+1 345 2334 998",
      state: "Texas",
      experience: "8 Years",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Name",
    "Email",
    "Phone",
    "State",
    "Experience",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => <span className="text-[14px] text-[#1F274B]">{item?.name}</span>,
    (item) => <span className="text-[14px] text-[#1F274B]">{item?.email}</span>,
    (item) => <span className="text-[14px] text-[#1F274B]">{item?.phone}</span>,
    (item) => <span className="text-[14px] text-[#1F274B]">{item?.state}</span>,
    (item) => (
      <span className="text-[14px] text-[#1F274B]">{item?.experience}</span>
    ),

    (item) => (
      <div>
        <div className="flex items-center justify-end gap-2">
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px]">
            <ApplicantsDetailsModal />
          </button>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px]">
            <ApplicantsDeleteModal />
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
          Job Applicants Overview
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
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
              Job Applicants List
            </h2>
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                placeholder="Search candidates..."
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
