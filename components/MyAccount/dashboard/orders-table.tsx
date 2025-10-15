"use client";

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
import ChevronLeftIcon from "@/public/icon/ChevronLeftIcon";
import ChevronRightIcon from "@/public/icon/ChevronRightIcon";

const orders = [
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$580.00",
    status: "In Process",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$360.00",
    status: "Delivered",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$580.00",
    status: "In Process",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$360.00",
    status: "Delivered",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$580.00",
    status: "In Process",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$360.00",
    status: "Delivered",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$580.00",
    status: "In Process",
  },
  {
    id: "#AS-AB7D-8NS",
    product: "HUNTER JUMPER SADDLE",
    size: "Pony",
    price: "$360.00",
    status: "Delivered",
  },
];

export function OrdersTable() {
  return (
    <div className="p-4 bg-[#FFF] border border-[#DFE1E7] mt-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] leading-[132%] uppercase font-extrabold">
          Recent Orders
        </h1>
        <Select defaultValue="all">
          <SelectTrigger className="w-40 focus-visible:ring-0 rounded-none text-[16px] text-[#4C526F] leading-[100%]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="in-process">In Process</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
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
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="text-[14px] leading-[114%] text-[#14191F]">
                  {order.id}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-[14px] uppercase leading-[100%] text-[#1F274B]">
                      {order.product}
                    </div>
                    <div className="text-[12px] normal-case leading-[100%] mt-2.5">
                      Size: {order.size}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[14px] leading-[114%] text-[#14191F]">
                  {order.price}
                </TableCell>
                <TableCell className="flex items-center justify-center">
                  <span
                    className={
                      order.status === "Delivered"
                        ? "text-[#13AF81] bg-[#F2FCF9] text-[14px] leading-[100%] px-2.5 py-2"
                        : "text-[#EDA217] bg-[#FFFBF4] text-[14px] leading-[100%] px-2.5 py-2"
                    }
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 mt-8">
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-[#FFFFFF] hover:bg-[#FFFFFF]/100 py-1.5 cursor-pointer border border-[#F1F2F4]"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-[#1F274B] hover:bg-[#1F274B]/100 py-1.5 cursor-pointer"
        >
          1
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-[#1F274B] hover:bg-[#1F274B]/100 py-1.5 cursor-pointer"
        >
          2
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-[#1F274B] hover:bg-[#1F274B]/100 py-1.5 cursor-pointer"
        >
          3
        </Button>
        <span className="px-2">...</span>
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-[#1F274B] hover:bg-[#1F274B]/100 py-1.5 cursor-pointer"
        >
          6
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 rounded-none bg-[#FFFFFF] hover:bg-[#FFFFFF]/100 py-1.5 cursor-pointer border border-[#F1F2F4]"
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
