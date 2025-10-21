"use client";
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
import { ReactNode } from "react";
import CouponDeleteModal from "./CouponDeleteModal";
import CreateCouponModal from "./CreateCouponModal";
import EditCouponModal from "./EditCouponModal";

export default function CouponTable() {
  const relevantData = [
    {
      code: "WELCOME20",
      description: "Discount for new customers",
      typeValue: "20%",
      minAmount: "$500",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Active",
    },
    {
      code: "SAVE100",
      description: "$100 off on orders above $1000",
      typeValue: "$100",
      minAmount: "$1000",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Active",
    },
    {
      code: "BOGO-SADDLE",
      description: "Buy One Saddle Get One",
      typeValue: "BOGO",
      minAmount: "$500",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Inactive",
    },
    {
      code: "SAVE350",
      description: "$350 off on orders above $6000",
      typeValue: "$350",
      minAmount: "$6000",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Active",
    },
    {
      code: "FREESHIP",
      description: "Free Shipping on orders above $3000",
      typeValue: "Free Shipping",
      minAmount: "$3000",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Inactive",
    },
    {
      code: "SAVE350",
      description: "$350 off on orders above $6000",
      typeValue: "$350",
      minAmount: "$6000",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Active",
    },
    {
      code: "FREESHIP",
      description: "Free Shipping on orders above $3000",
      typeValue: "Free Shipping",
      minAmount: "$3000",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Active",
    },
    {
      code: "SAVE20",
      description: "20% off on orders above $500",
      typeValue: "20%",
      minAmount: "$500",
      usage: "23 to 100",
      validityStart: "Jan 1, 2024",
      validityEnd: "Dec 31, 2024",
      status: "Active",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Code & Description",
    "Type & Value",
    "Usage",
    "Validity",
    "Coupon Status",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.code}
        <br />
        <span className="text-[12px] text-[#696E86] leading-[100%]">
          {item?.description}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {item?.typeValue} <br />
        <span className="text-[12px] text-[#696E86] leading-[100%]">
          {item?.minAmount}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.usage}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.validityStart} <br />
        <span className="text-[12px] text-[#696E86] leading-[100%]">
          {item?.validityEnd}
        </span>
      </span>
    ),
    (item) => (
      <span
        className={`text-[14px] leading-[114%] px-2 py-1 rounded-md 
    ${
      item?.status === "Active"
        ? "text-[#20C997] bg-[#E9FAF5]"
        : "text-[#EB3D4D] bg-[#FEECEE]"
    }`}
      >
        {item?.status}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
            <CreateCouponModal />
          </button>
        </div>
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
            <EditCouponModal />
          </button>
        </div>
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
            <CouponDeleteModal />
          </button>
        </div>
      </div>
    ),
  ];

  const isLoadings = false;

  return (
    <div>
      <div className="overflow-auto">
        <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
          {/* search bar */}
          <div className="flex flex-col justify-between md:flex-row md:items-center gap-2.5 mb-[23px]">
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              Coupon List
            </h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                  placeholder="Search coupons..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[120px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">All Status</SelectItem>
                    <SelectItem value="lat7day">Active</SelectItem>
                    <SelectItem value="lat30day">Inactive</SelectItem>
                  </SelectContent>
                </Select>
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
