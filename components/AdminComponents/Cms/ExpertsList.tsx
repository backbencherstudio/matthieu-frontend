"use client";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useGetAllExpertsQuery } from "@/src/redux/admin/cms/expert/expertApi";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

const ExpertsList = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading } = useGetAllExpertsQuery({
    search: debouncedSearch,
    page: currentPage,
  });
  const relevantData = data?.data;
  const currentItems = relevantData ?? [];
  const meta = data?.meta;

  const tableHeader = ["Name", "Email", "Phone", "Region", "Country", "Action"];

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
        {item?.email}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.phone}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.region}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.country}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div>
          <button
            className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]"
            onClick={() => router.push("/admin/cms/add-competition")}
          >
            <EditIcon />
          </button>
        </div>
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
            <BlogDeleteModal />
          </button>
        </div>
      </div>
    ),
  ];

  return (
    <div className="overflow-auto">
      <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
        {/* search bar */}
        <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
          <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
            Experts List
          </h2>
          <div className="flex xl:items-center flex-wrap gap-3 space-x-3">
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                placeholder="Search Experts..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <Link
                href="/admin/cms/add-experts"
                className="flex items-center justify-center px-3 py-[13px] bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
              >
                <PlusIcon className="h-4 w-4" />
                <span className="text-[14px] leading-[114%]">Add Experts</span>
              </Link>
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
        <div
          className={`flex justify-center pt-12 pb-4 ${
            relevantData?.length >= 5 ? "block" : "hidden"
          }`}
        >
          <PaginationComponent
            currentPage={meta?.page}
            totalPages={meta?.totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertsList;
