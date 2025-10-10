"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  initialPageSize?: number;
  title: string;
}

// Pagination Helper Function
function getPageItems(current: number, total: number, delta = 1) {
  const items: (number | string)[] = [];

  if (total <= 7) {
    // If total pages is 7 or less, show all pages
    for (let i = 1; i <= total; i++) {
      items.push(i);
    }
    return items;
  }

  // Always show first page
  items.push(1);

  if (current <= 4) {
    // Current page is near the beginning
    for (let i = 2; i <= Math.min(5, total - 1); i++) {
      items.push(i);
    }
    if (total > 6) {
      items.push("…");
    }
    if (total > 1) {
      items.push(total);
    }
  } else if (current >= total - 3) {
    // Current page is near the end
    if (total > 6) {
      items.push("…");
    }
    for (let i = Math.max(2, total - 4); i <= total - 1; i++) {
      items.push(i);
    }
    if (total > 1) {
      items.push(total);
    }
  } else {
    // Current page is in the middle
    items.push("…");
    for (let i = current - 1; i <= current + 1; i++) {
      items.push(i);
    }
    items.push("…");
    items.push(total);
  }

  return items;
}

export function DataTable<TData, TValue>({
  title,
  columns,
  data,
  initialPageSize = 10,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      globalFilter,
      pagination: { pageIndex: 0, pageSize: initialPageSize },
    },
  });

  const totalPages = table.getPageCount();
  const current = table.getState().pagination.pageIndex + 1;
  const pageItems = getPageItems(current, totalPages, 1);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 py-4">
        <h1 className="text-xl font-extrabold text-primary-text">{title}</h1>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="max-w-lg w-full shadow-none outline-none focus-visible:ring-0"
          />
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
        </div>
      </div>

      <div className="lg:max-w-[calc(100vw-240px)] max-w-[calc(100vw-60px)] overflow-x-auto rounded border border-[#cccccc65]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-[#F6F8FA]" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="text-sm font-normal text-gray-black py-3"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="py-5 text-sm font-normal text-primary-text"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 py-4">
        {/* Numbered pagination with ellipses */}
        <div className="flex justify-center md:justify-start items-center gap-1 md:gap-2">
          <Button
            className="cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            ‹
          </Button>

          {pageItems.map((it, i) =>
            it === "…" ? (
              <span key={`dots-${i}`} className="px-2 text-muted-foreground">
                …
              </span>
            ) : (
              <Button
                className="cursor-pointer transition-none"
                key={it as number}
                size="sm"
                variant={it === current ? "default" : "outline"}
                onClick={() => table.setPageIndex((it as number) - 1)}
              >
                {it}
              </Button>
            )
          )}

          <Button
            className="cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            ›
          </Button>
        </div>

        {/* Page size */}
        <div className="flex items-center gap-2 text-sm">
          <span>Rows per page:</span>
          <select
            className="rounded border bg-transparent px-2 py-1"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20, 30, 50].map((ps) => (
              <option key={ps} value={ps}>
                {ps}
              </option>
            ))}
          </select>
          <span className="text-muted-foreground">
            Page {current} of {Math.max(totalPages, 1)}
          </span>
        </div>
      </div>
    </>
  );
}
