"use client";

import ChevronLeftIcon from "@/components/Icons/MyAccoountIcon/ChevronLeftIcon";
import ChevronRightIcon from "@/components/Icons/MyAccoountIcon/ChevronRightIcon";

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
  return (
    <div className="p-4 bg-white border border-[#DFE1E7] w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] leading-[132%] uppercase font-extrabold">
          {title}
        </h1>

        {/* Tailwind dropdown */}
        <select
          defaultValue={defaultStatus.toLowerCase().replace(" ", "-")}
          onChange={(e) => onStatusChange?.(e.target.value)}
          className="w-40 text-[16px] text-[#4C526F] border border-gray-300 rounded-none focus:ring-0 focus:outline-none py-1.5 leading-[100%]"
        >
          {statuses.map((status, i) => (
            <option
              key={i}
              value={status.toLowerCase().replace(" ", "-")}
              className="capitalize p-0"
            >
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="mt-5 border">
        <table className="w-full">
          <thead className="bg-[#F6F8FA] normal-case text-left">
            <tr className="text-[14px] leading-[144%]">
              <th className="py-3 px-4 text-[#4A4C56] text-left">Order ID</th>
              <th className="py-3 px-4 text-[#4A4C56] text-left">Product</th>
              <th className="py-3 px-4 text-[#4A4C56] text-left">
                Total Price
              </th>
              <th className="py-3 px-4 text-center text-[#4A4C56]">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((order, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-[14px] text-[#14191F]">
                    {order.id}
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="text-[14px] uppercase text-[#1F274B]">
                        {order.product}
                      </div>
                      <div className="text-[12px] mt-2.5 normal-case text-[#696E86]">
                        Size: {order.size}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[14px] text-[#14191F]">
                    {order.price}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-2.5 py-1.5 text-[14px] leading-[100%] rounded ${
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
      {pagination && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            disabled={pagination.currentPage === 1}
            className="h-8 w-8 flex items-center justify-center border border-[#F1F2F4] bg-white text-gray-600 disabled:opacity-50 cursor-pointer"
            onClick={() =>
              pagination.onPageChange(Math.max(1, pagination.currentPage - 1))
            }
          >
            <ChevronLeftIcon />
          </button>

          {[...Array(pagination.totalPages)].map((_, i) => (
            <button
              key={i}
              className={`h-8 w-8 flex items-center justify-center border cursor-pointer ${
                pagination.currentPage === i + 1
                  ? "bg-[#1F274B] text-white"
                  : "bg-white text-gray-700 border-[#F1F2F4]"
              }`}
              onClick={() => pagination.onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={pagination.currentPage === pagination.totalPages}
            className="h-8 w-8 flex items-center justify-center border border-[#F1F2F4] bg-white text-gray-600 disabled:opacity-50 cursor-pointer"
            onClick={() =>
              pagination.onPageChange(
                Math.min(pagination.totalPages, pagination.currentPage + 1)
              )
            }
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>
  );
}
