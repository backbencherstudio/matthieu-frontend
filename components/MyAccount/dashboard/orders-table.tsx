"use client";

import ChevronLeftIcon from "@/components/Icons/MyAccoountIcon/ChevronLeftIcon";
import ChevronRightIcon from "@/components/Icons/MyAccoountIcon/ChevronRightIcon";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="p-4 bg-[#FFF] border border-[#DFE1E7]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] leading-[132%] uppercase font-extrabold">
          {title}
        </h1>

        <Select
          defaultValue={defaultStatus.toLowerCase().replace(" ", "-")}
          onValueChange={(value) => onStatusChange?.(value)}
        >
          <SelectTrigger className="w-40 focus-visible:ring-0 rounded-none text-[16px] text-[#4C526F] leading-[100%]">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status, i) => (
              <SelectItem
                key={i}
                value={status.toLowerCase().replace(" ", "-")}
              >
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border mt-5">
        <Table>
          <TableHeader className="bg-[#F6F8FA]">
            <TableRow className="text-[14px] leading-[144%]">
              <TableHead>Order ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.length > 0 ? (
              data.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="text-[14px] text-[#14191F]">
                    {order.id}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-[14px] uppercase text-[#1F274B]">
                        {order.product}
                      </div>
                      <div className="text-[12px] mt-2.5">
                        Size: {order.size}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[14px] text-[#14191F]">
                    {order.price}
                  </TableCell>
                  <TableCell className="flex items-center justify-center">
                    <span
                      className={`px-2.5 py-2 text-[14px] leading-[100%] ${
                        order.status === "Delivered"
                          ? "text-[#13AF81] bg-[#F2FCF9]"
                          : "text-[#EDA217] bg-[#FFFBF4]"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-center gap-1 mt-8">
          <Button
            size="icon"
            disabled={pagination.currentPage === 1}
            className="h-8 w-8 rounded-none bg-white border border-[#F1F2F4] cursor-pointer hover:bg-white"
            onClick={() =>
              pagination.onPageChange(Math.max(1, pagination.currentPage - 1))
            }
          >
            <ChevronLeftIcon />
          </Button>

          {[...Array(pagination.totalPages)].map((_, i) => (
            <Button
              key={i}
              size="icon"
              className={`h-8 w-8 rounded-none py-1.5 cursor-pointer ${
                pagination.currentPage === i + 1
                  ? "bg-[#1F274B] text-white hover:bg-[#1F274B]/100"
                  : "bg-white border border-[#F1F2F4] text-[#111827] hover:bg-white"
              }`}
              onClick={() => pagination.onPageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            size="icon"
            disabled={pagination.currentPage === pagination.totalPages}
            className="h-8 w-8 rounded-none bg-white border border-[#F1F2F4] cursor-pointer hover:bg-white"
            onClick={() =>
              pagination.onPageChange(
                Math.min(pagination.totalPages, pagination.currentPage + 1)
              )
            }
          >
            <ChevronRightIcon />
          </Button>
        </div>
      )}
    </div>
  );
}
