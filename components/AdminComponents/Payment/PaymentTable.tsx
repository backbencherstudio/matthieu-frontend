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
import { useGetAllPaymentsQuery } from "@/src/redux/admin/payment/paymentApi";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import { ReactNode, useState } from "react";

export default function PaymentTable() {
  const [page, setPage] = useState(1);
  const { data } = useGetAllPaymentsQuery("");
  const relevantData = data?.data || [];
  const currentItems = relevantData;
  const totalPages = data?.meta_data?.total || 1;

  const tableHeader = [
    "Transaction ID",
    "Customer",
    "Payment Method",
    // "Product price",
    // "Delivery Fee",
    "Total Amount",
    // "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number,
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.custom_transaction_id}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {item?.customer} <br />
        <span className="text-[14px] leading-[100%] text-[#777980]">
          {item?.email}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.payment_gateway}
      </span>
    ),
    // (item) => (
    //   <span className="text-[14px] text-[#14191F] leading-[114%]">
    //     {item?.productPrice}
    //   </span>
    // ),
    // (item) => (
    //   <span className="text-[14px] text-[#14191F] leading-[114%]">
    //     {item?.deliveryFee}
    //   </span>
    // ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.currency === "usd" ? "$ " : item?.currency === "eur" ? "€ " : ""}
        {item?.amount}
      </span>
    ),
    // (item) => (
    //   <div>
    //     <div>
    //       <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
    //         <PaymentDownLoadIcon />
    //       </button>
    //     </div>
    //   </div>
    // ),
  ];

  const isLoadings = false;

  return (
    <div>
      <div className="overflow-auto">
        <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
          {/* search bar */}
          <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              All Transactions
            </h2>
            <div className="flex items-center space-x-3">
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
              <div>
                <Select>
                  <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="Today" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="lat7day">Last 7 days</SelectItem>
                    <SelectItem value="lat30day">Last 30 days</SelectItem>
                    <SelectItem value="lat90day">Last 90 days</SelectItem>
                    <SelectItem value="latyear">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">All Status</SelectItem>
                    <SelectItem value="lat7day">In Process</SelectItem>
                    <SelectItem value="lat30day">Delivered</SelectItem>
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
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
