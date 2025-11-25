"use client";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import PlusIcon from "@/components/Icons/PlusIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

const ArionTeamTab = () => {
  const relevantData = [
    {
      id: 1,
      fullName: "Sylvain Houry",
      position: "Founder & CEO",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 2,
      fullName: "Hadrien Schenck",
      position: "As general manager",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 3,
      fullName: "Kirsten Rose",
      position: "US Sales Manager",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 4,
      fullName: "Chloe Cazebon",
      position: "Europe Marketing and Communication Manager",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 5,
      fullName: "Gabrielle Fournier",
      position: "US & Canada Marketing Communications Manager",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Full Name",
    "Position",
    "Profile Image",
    "Joining Date",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%] text-wrap">
        {item?.fullName}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.position}
      </span>
    ),
    (item) => <img src={item?.image} alt="image" className="h-8 w-8" />,
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.joiningDate}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
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

  const isLoadings = false;
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
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                  <SelectValue placeholder="All Dats" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allStatus">All Dats</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Link
                href="/admin/cms/add-member"
                className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
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
  );
};

export default ArionTeamTab;
