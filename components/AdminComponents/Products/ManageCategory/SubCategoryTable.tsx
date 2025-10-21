"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Data } from "@/lib/TableType";
import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import Link from "next/link";
import DeleteDialog from "../../reusable/DeleteDialog";
import { DataTable } from "../../reusable/DataTable";
import EditSubCategoryForm from "./EditSubCategoryForm";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "subCategory",
    header: "Sub - Category",
  },
  {
    accessorKey: "category",
    header: "Under Main Category",
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <EditSubCategoryForm id={row.original.id} />
          <DeleteDialog id={`${row.original.id}`} title="Sub Category" />
        </div>
      );
    },
  },
];

export default function SubCategoryTable() {
  const data: Data[] = [
    {
      id: 1,
      subCategory: "Reins",
      category: "Saddle",
      product: "45",
    },
    {
      id: 2,
      subCategory: "Martingales",
      category: "Saddle",
      product: "50",
    },
    {
      id: 3,
      subCategory: "Girths",
      category: "Saddle",
      product: "50",
    },
    {
      id: 4,
      subCategory: "Boots",
      category: "Tack",
      product: "50",
    },
    {
      id: 5,
      subCategory: "Bridles",
      category: "Tack",
      product: "30",
    },
  ];

  const [categories, setCategories] = useState("all");

  // Dropdown filters
  const dropFilters = <></>;

  // Filtered Data
  const filteredData = data.filter((item) => {
    if (categories === "all") return true;
    return item.categoryName === categories;
  });

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <DataTable
        title="Sub Category"
        columns={columns}
        data={filteredData}
        customFilters={dropFilters}
      />
    </div>
  );
}
