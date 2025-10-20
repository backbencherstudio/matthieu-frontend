"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Data } from "@/lib/TableType";
import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import Link from "next/link";
import DeleteDialog from "../../reusable/DeleteDialog";
import { DataTable } from "../../reusable/DataTable";
import EditCategoryForm from "./EditCategoryForm";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "category",
    header: "Main Category",
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <EditCategoryForm id={row.original.id} />
          <DeleteDialog id={`${row.original.id}`} title="Category" />
        </div>
      );
    },
  },
];

export default function CategoryTable() {
  const data: Data[] = [
    {
      id: 1,
      category: "Saddle",
    },
    {
      id: 2,
      category: "Tack & Accessories",
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
        title="Category"
        columns={columns}
        data={filteredData}
        customFilters={dropFilters}
      />
    </div>
  );
}
