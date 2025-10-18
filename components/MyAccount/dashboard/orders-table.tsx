"use client";

import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { useRef, useState } from "react";

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
}

export function OrdersTable({ title, data }: OrdersTableProps) {
  const idRef = useRef<HTMLDivElement>(null);
  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(data, 6);

  const loading = false;
  const [categories, setCategories] = useState("all");

  return (
    <div ref={idRef} className="p-4 bg-white border border-[#DFE1E7]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] leading-[132%] uppercase font-extrabold">
          {title}
        </h1>

        {/* Tailwind dropdown */}
        <Select value={categories} onValueChange={setCategories}>
          <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Saddles">In Process</SelectItem>
            <SelectItem value="Tack & Accessories">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="mt-5 border  md:w-full w-[400px] overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F6F8FA] normal-case text-left">
            <tr className="text-[14px] leading-[144%]">
              <th className="py-3 px-4 text-[#4A4C56] text-left text-nowrap">
                Order ID
              </th>
              <th className="py-3 px-4 text-[#4A4C56] text-left text-nowrap">
                Product
              </th>
              <th className="py-3 px-4 text-[#4A4C56] text-left text-nowrap">
                Total Price
              </th>
              <th className="py-3 px-4 text-center text-[#4A4C56] text-nowrap">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              currentItems.map((order, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-[14px] text-[#14191F] text-nowrap">
                    {order.id}
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="text-[14px] uppercase text-[#1F274B] text-nowrap">
                        {order.product}
                      </div>
                      <div className="text-[12px] mt-2.5 normal-case text-[#696E86] text-nowrap">
                        Size: {order.size}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[14px] text-[#14191F] text-nowrap">
                    {order.price}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-2.5 py-1.5 text-[14px] leading-[100%] rounded text-nowrap ${
                        order.status === "Delivered"
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
            className={`flex justify-center pt-12 pb-4 ${
              data?.length >= 5 ? "block" : "hidden"
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
