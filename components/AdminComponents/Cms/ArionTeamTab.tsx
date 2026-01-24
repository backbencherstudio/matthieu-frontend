"use client";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import PlusIcon from "@/components/Icons/PlusIcon";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useShowAllMemberQuery } from "@/src/redux/admin/cms/arionTeam/arionTeamApi";
import { TableRowItem } from "@/types/TableRowItem";
import { format } from "date-fns";
import { Search, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

const ArionTeamTab = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading } = useShowAllMemberQuery({
    search: debouncedSearch,
  });

  const relevantData = data?.data;

  const currentItems = relevantData ?? [];

  const tableHeader = [
    "Full Name",
    "Position",
    "Profile Image",
    "Joining Date",
    "Actions",
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
        {item?.designation}
      </span>
    ),
    (item) =>
      item?.image ? (
        <Image
          src={item.image}
          alt="image"
          height={400}
          width={400}
          className="h-8 w-8 rounded-full"
        />
      ) : (
        <User2Icon className="h-8 w-8 text-gray-400" />
      ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.created_at
          ? format(new Date(item.created_at), "MMM d, yyyy")
          : ""}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div>
          <button
            className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]"
            onClick={() => router.push("/admin/cms/add-member")}
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
            All Arion Team
          </h2>
          <div className="flex xl:items-center flex-wrap gap-3 space-x-3">
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                placeholder="Search team member..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <Link
                href="/admin/cms/add-member"
                className="flex items-center justify-center px-3 py-[13px] bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
              >
                <PlusIcon className="h-4 w-4" />
                <span className="text-[14px] leading-[114%]">Add Member</span>
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
        {/* {!isLoadings && (
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
        )} */}
      </div>
    </div>
  );
};

export default ArionTeamTab;
