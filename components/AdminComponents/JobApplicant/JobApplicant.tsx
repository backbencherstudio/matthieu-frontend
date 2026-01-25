"use client";

import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useGetAllJobApplicantQuery } from "@/src/redux/admin/jobApplicant/jobApplicantApi";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import { ReactNode, useState } from "react";
import ApplicantsDetailsModal from "./ApplicantsDetailsModal";
import DeleteJobApplicant from "./DeleteJobApplicant";

export default function JobApplicant() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, refetch } = useGetAllJobApplicantQuery({
    search: debouncedSearch,
    page: currentPage,
  });

  const relevantData = data?.data;
  const currentItems = relevantData || [];
  const meta = data?.meta;

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
    index: number,
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {`${item?.firstName || ""} ${item?.lastName || ""}`}
      </span>
    ),
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
          <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
            <DeleteJobApplicant id={String(item?.id)} refetch={refetch} />
          </div>
        </div>
      </div>
    ),
  ];

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
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
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
              isLoadings={isLoading}
              currentItems={currentItems}
              tableHeader={tableHeader}
              tableRowDataRenderers={tableRowDataRenderers}
              isBg={false}
            />
          </div>

          {/* pagination */}
          <div className={`flex justify-center pt-12 pb-4`}>
            <PaginationComponent
              currentPage={meta?.page}
              totalPages={meta?.totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
