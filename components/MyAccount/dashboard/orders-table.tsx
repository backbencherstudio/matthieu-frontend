"use client";

import ChevronLeftIcon from "@/components/Icons/MyAccoountIcon/ChevronLeftIcon";
import ChevronRightIcon from "@/components/Icons/MyAccoountIcon/ChevronRightIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { useRef } from "react";

export interface Order {
  id: string;
  product: string;
  size: string;
  price: string;
  status: string;
}

interface OrdersTableProps {
  title?: string;
  data: Order[];
  statuses?: string[];
  defaultStatus?: string;
  onStatusChange?: (status: string) => void;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export function OrdersTable({
  title,
  data,
  statuses = ["All Status", "In Process", "Delivered"],
  defaultStatus = "All Status",
  onStatusChange,
  pagination,
}: OrdersTableProps) {

  

  const idRef = useRef<HTMLDivElement>(null);
  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(data, 6);

  const loading = false


  return (
    <div ref={idRef} className="p-4 bg-white border border-[#DFE1E7] lg:w-full w-[432px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] leading-[132%] uppercase font-extrabold">
          {title}
        </h1>

        {/* Tailwind dropdown */}
        <select
          defaultValue={defaultStatus.toLowerCase().replace(" ", "-")}
          onChange={(e) => onStatusChange?.(e.target.value)}
          className="w-40 text-[16px] text-[#4C526F] border border-gray-300 rounded-none focus:ring-0 focus:outline-none py-2 px-3 leading-[100%]"
        >
          {statuses.map((status, i) => (
            <option
              key={i}
              value={status.toLowerCase().replace(" ", "-")}
              className="capitalize"
            >
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="mt-5 border max-h-[600px] overflow-y-auto relative">
        <table className="w-full">
          <thead className="bg-[#F6F8FA] normal-case sticky top-0 z-40">
            <tr className="text-[14px] leading-[144%]">
              <th className="py-3 px-4 text-[#4A4C56]">Order ID</th>
              <th className="py-3 px-4 text-[#4A4C56]">Product</th>
              <th className="py-3 px-4 text-[#4A4C56]">Total Price</th>
              <th className="py-3 px-4 text-center text-[#4A4C56]">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              currentItems.map((order, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-[14px] text-[#14191F]">
                    {order.id}
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="text-[14px] uppercase text-[#1F274B]">
                        {order.product}
                      </div>
                      <div className="text-[12px] mt-2.5 normal-case">
                        Size: {order.size}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[14px] text-[#14191F]">
                    {order.price}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-2.5 py-1.5 text-[14px] leading-[100%] rounded ${order.status === "Delivered"
                        ? "text-[#13AF81] bg-[#F2FCF9]"
                        : "text-[#EDA217] bg-[#FFFBF4]"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-8 text-gray-500 text-sm"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div>
        {!loading && (
          <div
            className={`flex justify-center pt-12 pb-4 ${data?.length >= 5 ? "block" : "hidden"
              } `}
          >
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              scrollTargetRef={idRef}
            />
          </div>
        )}
      </div>
    </div>
  );
}
