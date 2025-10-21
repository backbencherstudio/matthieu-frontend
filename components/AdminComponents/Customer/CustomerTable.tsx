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

export default function CustomerTable() {
  const relevantData = [
    {
      id: "1",
      customer: "Marcus Thompson",
      email: "marcus@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "9",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "2",
      customer: "Marcelo X",
      email: "marcus@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "4",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "3",
      customer: "Elon Mask",
      email: "elon@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "7",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "4",
      customer: "Donal Tramp",
      email: "donal@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "3",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "5",
      customer: "Marcus Thompson",
      email: "marcus@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "6",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "6",
      customer: "Elon Mask",
      email: "marcus@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "8",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "7",
      customer: "Donal Tramp",
      email: "marcus@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "7",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
    {
      id: "8",
      customer: "Marcus Thompson",
      email: "marcus@ukclub.ccm",
      number: "+1 (555) 123-4567",
      location: "New York",
      state: "United States",
      order: "8",
      lastOrder: "09 June, 2025",
      totalSpent: "$5840.00",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Customer",
    "Contact",
    "Location",
    "Orders",
    "Total Spent",
    "Last Order",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#4A4C56] leading-[114%]">
        {item?.customer}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B] leading-[100%]">
        {item?.email} <br />
        <span className="text-[14px] leading-[100%] text-[#696E86]">
          {item?.number}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B] leading-[114%]">
        {item?.location} <br />
        <span className="text-[14px] leading-[100%] text-[#696E86]">
          {item?.state}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.order}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.totalSpent}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B] leading-[117%]">
        {item?.lastOrder}
      </span>
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
              Customer List
            </h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                  placeholder="Search customers..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allStatus">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Segments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allSegments">All Segments</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="regularCustomer">
                      Regular Customer
                    </SelectItem>
                    <SelectItem value="newCustomer">New Customer</SelectItem>
                    <SelectItem value="atRisk">At Risk</SelectItem>
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
