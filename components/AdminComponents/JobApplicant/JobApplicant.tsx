"use client"

import PaginationComponent from '@/components/reusable/Features/PaginationComponent';
import ReuseAbleTable from '@/components/reusable/Features/reuseable-table';
import { useFilterPagination } from '@/hooks/useFilterHook';
import { TableRowItem } from '@/types/TableRowItem';
import { Search } from 'lucide-react';
import React, { ReactNode } from 'react'

export default function JobApplicant() {



    const { currentItems, currentPage, totalPages, setCurrentPage } =
        useFilterPagination(relevantData, 6);

    const tableHeader = [
        "Bill",
        "Vendor",
        "Account Type",
        "Bill Date",
        "Due Date",
        "Due Amount",
        "Status",
        "Action",
    ];

    const tableRowDataRenderers: ((
        item: TableRowItem,
        index: number
    ) => ReactNode)[] = [
            (_, index) => (
                <span className="md:text-base text-sm font-medium leading-[128%] track32 textGray">
                    {index + 1}
                </span>
            ),

            (item) => (
                <span className="md:text-base text-sm font-medium leading-[128%] track32 textGray">
                    {item?.name}
                </span>
            ),
            (item) => (
                <span className="md:text-base text-sm font-semibold leading-[128%] track32 text-[#2E3135] underline">
                    {item?.contact ? item?.contact : "_"}
                </span>
            ),
            (item) => (
                <span className="md:text-base text-sm font-semibold leading-[128%] track32 text-[#2E3135] underline">
                    {item?.contact ? item?.contact : "_"}
                </span>
            ),
            (item) => (
                <span className="md:text-base text-sm font-semibold leading-[128%] track32 text-[#2E3135] underline">
                    {item?.contact ? item?.contact : "_"}
                </span>
            ),
            (item) => (
                <span className="md:text-base text-sm font-semibold leading-[128%] track32 text-[#2E3135] underline">
                    {item?.email}
                </span>
            ),
            (item) => <span>$ {item?.balance}</span>,
            (item) => (
                <div className="flex gap-2 md:text-base text-sm font-medium leading-[128%] track32 textColor">
                    {/* <EyeIcon className="w-10 h-10 bg-[#E7F7EF] p-2 rounded-full" /> */}
                    {/* <TrashIcon className="w-10 h-10 bg-[#FFE6E6] p-2 rounded-full" /> */}
                </div>
            ),
        ];

    const isLoadings = false;

    return (
        <div>
            <div className="overflow-auto">
                <div className="">
                    <div className="bg-white rounded-[16px] px-4 pt-6">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2.5">
                            <h2 className=" leading-[104%] tracking-[-0.96px] text-[#777980] text-xl pl-1">
                                Enter Your Data
                            </h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="
      w-full md:w-[300px]
      rounded-full border-gray-300
      px-10 py-2
      text-sm
      shadow-sm
      focus:outline-0
      border
      transition-colors
      duration-200
    "
                                    placeholder="Search"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <ReuseAbleTable
                                allClientDataList={relevantData}
                                isLoadings={false}
                                currentItems={currentItems}
                                tableHeader={tableHeader}
                                tableRowDataRenderers={tableRowDataRenderers}
                                isBg={false}
                            />
                        </div>
                    </div>
                    {/* pagination component  */}
                    <div>
                        {!isLoadings && (
                            <div
                                className={`flex justify-center pt-12 pb-4 ${relevantData?.length >= 5 ? "block" : "hidden"
                                    } `}
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
        </div>
    )
}


const relevantData = [
    {
        name: 'Emma Taylor',
        email: 'emma.taylor@gmail.com',
        phone: '+1 234 567 890',
        state: 'California',
        experience: '6 Years',
    },
    {
        name: 'David Moore',
        email: 'davidm@saddles.com',
        phone: '+1 345 234 998',
        state: 'Texas',
        experience: '2 Years',
    },
    {
        name: 'Emma Taylor',
        email: 'emma.taylor@gmail.com',
        phone: '+1 234 567 890',
        state: 'California',
        experience: '1 Year',
    },
    {
        name: 'David Moore',
        email: 'davidm@saddles.com',
        phone: '+1 345 234 998',
        state: 'Texas',
        experience: '5 Years',
    },
];
