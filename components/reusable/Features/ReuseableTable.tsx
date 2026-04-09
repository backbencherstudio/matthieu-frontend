'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

/**
 * Relaxed the TableItem interface.
 * We use 'any' for the index signature to avoid strict interface mismatches
 * with generated API types like AdminOrderApi.
 */
export interface TableItem {
  id?: string | number;
  [key: string]: any;
}

interface ReuseAbleTableProps<T> {
  allClientDataList?: T[];
  isLoadings: boolean;
  currentItems: T[];
  tableHeader: string[];
  /**
   * We use T here so that the renderer function knows exactly
   * what properties are available on the item being passed.
   */
  tableRowDataRenderers: ((item: T, index: number) => React.ReactNode)[];
  isBg?: boolean;
}

const ReuseAbleTable = <T extends object>({
  isLoadings,
  currentItems,
  tableHeader,
  tableRowDataRenderers,
  isBg = false,
}: ReuseAbleTableProps<T>) => {
  return (
    <div className="w-full">
      <div
        className={`${
          isBg ? 'bg-white rounded-2xl px-4' : ''
        } overflow-x-auto w-full custom-scroll`}
      >
        {/* Container to prevent layout shift and handle responsive widths */}
        <div className="lg:max-w-[calc(100vw-320px)] max-w-[calc(100vw-60px)]">
          {isLoadings ? (
            <div className="space-y-2">
              {/* Skeleton Header */}
              <div className="h-12 bg-gray-200 rounded-t animate-pulse" />
              {/* Skeleton Rows */}
              {[1, 2, 3, 4, 5].map(item => (
                <div
                  key={item}
                  className="h-16 bg-gray-100 rounded animate-pulse"
                />
              ))}
            </div>
          ) : (
            <Table className="overflow-hidden border-separate border-spacing-y-2">
              <TableCaption className="hidden"></TableCaption>
              <TableHeader className="bg-[#F6F8FA]">
                <TableRow className="border-none hover:bg-transparent">
                  {tableHeader.map((header: string, index: number) => (
                    <TableHead
                      key={index}
                      className="px-4 py-3 text-sm font-semibold text-[#4A4C56] whitespace-nowrap first:rounded-l-lg last:rounded-r-lg last:text-right"
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems && currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <TableRow
                      key={(item as any)?.id || (item as any)?._id || index}
                      className="group border-none bg-white hover:bg-gray-50 transition-colors"
                    >
                      {tableRowDataRenderers.map((renderFn, colIndex) => (
                        <TableCell
                          key={colIndex}
                          className="py-4 px-4 text-sm text-[#777980] last:text-right border-b border-[#F1F2F4]"
                        >
                          {renderFn(item, index)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={tableHeader.length}
                      className="py-10 text-center"
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="text-gray-400 font-medium">
                          No Data Found
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReuseAbleTable;
