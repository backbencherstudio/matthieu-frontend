"use client";
import { Data } from "@/lib/TableType";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "../reusable/DataTable";

import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import DeleteDialog from "../reusable/DeleteDialog";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "productId",
    header: "Product ID",
  },
  {
    accessorKey: "productName",
    header: "Product Name",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.category == "Saddles > Bridles" ? (
            <span className="text-[#C19A6B]">{row.original.category}</span>
          ) : (
            <span className="text-[#5D4037]">{row.original.category}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.status == "In Stock" ? (
            <span className="text-success-text bg-success-bg py-1 px-3 rounded-[6px]">
              In Stock
            </span>
          ) : row.original.status == "Low Stock" ? (
            <span className="text-progress-text bg-progress-bg py-1 px-3 rounded-[6px]">
              Low Stock
            </span>
          ) : (
            <span className="text-error-text bg-error-bg py-1 px-3 rounded-[6px]">
              Out of Stock
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/products/view/${row.original.id}`}
            className="cmn-action-btn"
          >
            <EyeIcon />
          </Link>
          <Link
            href={`/admin/products/edit/${row.original.id}`}
            className="cmn-action-btn"
          >
            <EditIcon />
          </Link>
          <DeleteDialog id={`${row.original.id}`} title="Product" />
        </div>
      );
    },
  },
];

export default function ProductTable() {
  const data: Data[] = [
    {
      id: 1,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 2,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Tack & Accessories > Bridles",
      categoryName: "Tack & Accessories",
      price: "$260.00",
      stock: 45,
      status: "Low Stock",
    },
    {
      id: 3,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "Low Stock",
    },
    {
      id: 4,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "Out of Stock",
    },
    {
      id: 5,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 6,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Tack & Accessories > Bridles",
      categoryName: "Tack & Accessories",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 7,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 8,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 9,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 10,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      categoryName: "Saddles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
  ];

  const [categories, setCategories] = useState("all");

  // Dropdown filters
  const dropFilters = (
    <>
      <Select value={categories} onValueChange={setCategories}>
        <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="Saddles">Saddles</SelectItem>
          <SelectItem value="Tack & Accessories">Tack & Accessories</SelectItem>
        </SelectContent>
      </Select>
    </>
  );

  // Filtered Data
  const filteredData = data.filter((item) => {
    if (categories === "all") return true;
    return item.categoryName === categories;
  });

  return (
    <div className="pt-6">
      <div className="bg-white p-4 rounded-[8px]">
        <DataTable
          title="All Product"
          columns={columns}
          data={filteredData}
          customFilters={dropFilters}
        />
      </div>
    </div>
  );
}
