"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export interface TableItem {
  id?: string | number;
  [key: string]: unknown;
}

interface ReuseAbleTableProps<T extends TableItem> {
  allClientDataList?: T[];
  isLoadings: boolean;
  currentItems: T[];
  tableHeader: string[];
  tableRowDataRenderers: ((item: T, index: number) => React.ReactNode)[];
  isBg?: boolean;
}

const ReuseAbleTable = <T extends TableItem>({
  isLoadings,
  currentItems,
  tableHeader,
  tableRowDataRenderers,
  isBg = false,
}: ReuseAbleTableProps<T>) => {
  return (
    <div>
      <div
        className={`${
          isBg && "bg-white rounded-2xl  px-4 "
        } overflow-x-auto  w-full custom-scroll`}
      >
        <div className=" lg:max-w-[calc(100vw-320px)] max-w-[calc(100vw-60px)] ">
          {isLoadings ? (
            <div className="">
              {/* Loading skeleton for table header */}
              <div className="h-12 bg-gray-300 rounded-t animate-pulse mb-2"></div>

              {/* Loading skeleton for table rows */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-16 bg-gray-300 rounded animate-pulse mb-2"
                ></div>
              ))}
            </div>
          ) : (
            <Table className=" overflow-hidden">
              <TableCaption></TableCaption>
              <TableHeader className="text-[#0CAF60]  text-sm px-4 !py-3  font-normal leading-[140%] tracking-[0.07px] ">
                <TableRow
                  className="!border-b-0 !rounded-none bg-[#F6F8FA] hover:bg-[#F6F8FA]/90"
                  // style={{ borderRadius: "40px" }}
                >
                  {tableHeader.map((header: string, index: number) => (
                    <TableHead
                      key={index}
                      className="px-4 !py-3 text-sm  font-normal leading-[144%] text-[#4A4C56] last:text-right"
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.length ? (
                  currentItems?.map((item, index) => (
                    <TableRow
                      key={item?.id || index}
                      className={`text-gray-800 inter font-normal text-[14px] border-0 rounded-[16px] ${
                        index % 2 === 0 ? "bg-white" : "bg-white"
                      }`}
                    >
                      {tableRowDataRenderers.map((renderFn, colIndex) => (
                        <TableCell
                          key={colIndex}
                          className="py-3 px-4 text-[color:var(--Gray-Black-300,#777980)] text-xs font-normal leading-[normal] last:text-right"
                        >
                          {renderFn(item, index)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={tableRowDataRenderers.length}
                      className="py-6 text-center"
                    >
                      <div className="w-full flex justify-center">
                        <span className="text-gray-500">No Data Found</span>
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
