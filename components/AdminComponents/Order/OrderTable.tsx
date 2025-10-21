"use client";
import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
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

export default function OrderTable() {
  const relevantData = [
    {
      id: "ORD-1001",
      productName: "Leather Riding Boots",
      productStatus: "+2 more items",
      customer: "Marcus Thompson",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$320.00",
      orderType: "Online",
      deliveryDate: "09 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Delivered",
    },
    {
      id: "ORD-1002",
      productName: "Jumping Saddle",
      productStatus: "+2 more items",
      customer: "Elon Musk",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$1,150.00",
      orderType: "In-Store",
      deliveryDate: "11 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Pending",
    },
    {
      id: "ORD-1003",
      productName: "Equestrian Helmet",
      productStatus: "+2 more items",
      customer: "Donal Tramp",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$250.00",
      orderType: "Online",
      deliveryDate: "13 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Cancelled",
    },
    {
      id: "ORD-1004",
      productName: "Show Jacket",
      productStatus: "+2 more items",
      customer: "Marcelo X",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$480.00",
      orderType: "Online",
      deliveryDate: "15 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "In Process",
    },
    {
      id: "ORD-1005",
      productName: "Riding Gloves",
      productStatus: "+2 more items",
      customer: "Sophia Williams",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$90.00",
      orderType: "Online",
      deliveryDate: "18 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Delivered",
    },
    {
      id: "ORD-1006",
      productName: "Dressage Whip",
      productStatus: "+2 more items",
      customer: "Emma Watson",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$65.00",
      orderType: "In-Store",
      deliveryDate: "20 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Delivered",
    },
    {
      id: "ORD-1007",
      productName: "Horse Blanket",
      productStatus: "+2 more items",
      customer: "Jack Johnson",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$210.00",
      orderType: "Online",
      deliveryDate: "22 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Pending",
    },
    {
      id: "ORD-1008",
      productName: "Stable Rug",
      customer: "Liam Brown",
      email: "liambrown@ukclub.ccm",
      totalPrice: "$185.00",
      orderType: "In-Store",
      deliveryDate: "25 June, 2025",
      estimatedDelivery: "Estimated",
      deliveryStatus: "Processing",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Order ID",
    "Product Name",
    "Customer",
    "Total Price",
    "Order Type",
    "Delivery Date",
    "Delivery Status",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#4A4C56] leading-[114%]">
        {item?.id}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B] leading-[100%]">
        {item?.productName} <br />
        <span className="text-[12px] leading-[100%] text-[#696E86]">
          {item?.productStatus}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B] leading-[114%]">
        {item?.customer} <br />
        <span className="text-[12px] leading-[100%] text-[#696E86]">
          {item?.email}
        </span>
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.totalPrice}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.orderType}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B] leading-[117%]">
        {item?.deliveryDate} <br />
        <span className="text-[12px] leading-[100%] text-[#696E86]">
          {item?.estimatedDelivery}
        </span>
      </span>
    ),
    (item) => (
      <span
        className={`px-3 py-1 rounded-[6px] text-[14px] font-medium ${
          item.deliveryStatus === "Delivered"
            ? "bg-[#E9FAF5] text-[#20C997]"
            : item.deliveryStatus === "In Process"
            ? "bg-[#FFFAE8] text-[#FFA600]"
            : item.deliveryStatus === "Cancelled"
            ? "bg-[#FFECEC] text-[#D32F2F]"
            : "bg-[#E6EEFF] text-[#1F3BB3]"
        }`}
      >
        {item?.deliveryStatus}
      </span>
    ),
    (item) => (
      <div>
        <div className="flex justify-end">
          <Link
            href={`/admin/orders/${item?.id}`}
            className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]"
          >
            <EyeIcon />
          </Link>
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
              Recent Orders
            </h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                  placeholder="Search orders, customers..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Typs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allTyps">All Typs</SelectItem>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="multiple">Multiple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allSegments">All Status</SelectItem>
                    <SelectItem value="inProcess">In Process</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
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
