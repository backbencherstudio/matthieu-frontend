"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../reusable/DataTable";
import { Data } from "@/lib/TableType";

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
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Edit
          </button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
            Delete
          </button>
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
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 2,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 3,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 4,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 5,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 6,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 7,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 8,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 9,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 10,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },

    {
      id: 11,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 12,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 13,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 14,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 15,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 16,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 17,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 18,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 19,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 20,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },

    {
      id: 21,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 22,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 23,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 24,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 25,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 26,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 27,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 28,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 29,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 30,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },

    {
      id: 31,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 32,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 33,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 34,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 35,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 36,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 37,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 38,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 39,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 40,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },

    {
      id: 41,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 42,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 43,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 44,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 45,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 46,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 47,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 48,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 49,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 50,
      productId: "SKU: BR7D2NS",
      productName: "Double Noseband Bridle",
      category: "Saddles > Bridles",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
    },
  ];

  /*   const dropdownItems = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Columns <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ); */

  return (
    <div className="pt-6">
      <div className="bg-white p-4 rounded-[8px]">
        <DataTable title="All Product" columns={columns} data={data} />
      </div>
    </div>
  );
}
