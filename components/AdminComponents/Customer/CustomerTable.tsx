"use client";

import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { ReactNode, useState } from "react";
import { useGetCustomersQuery } from "@/src/redux/admin/customers/customersApi";

export default function CustomerTable() {

  //  Backend page state
  const [page, setPage] = useState(1);

  //  API call with page
  const { data, isLoading } = useGetCustomersQuery({
    page,
    limit: 10,
  });

  //  Map API data
  const relevantData =
    data?.data?.map((item: any) => ({
      id: item.id,
      email: item.email,
      name: item.name || "N/A",
      country: item.country || "N/A",
      city: item.city || "N/A",
      isActive: item.isActive,
      created_at: item.created_at,
    })) || [];

  //  Use backend pagination
  const currentItems = relevantData;
  const totalPages = data?.meta?.totalPages || 1;

  const tableHeader = [
    "Email",
    "Name",
    "Country",
    "City",
    "Status",
    "Created At",
  ];

  const tableRowDataRenderers: ((
    item: any,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {item.email}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#4A4C56]">
        {item.name}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {item.country}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#696E86]">
        {item.city}
      </span>
    ),
    (item) => (
      <span
        className={`text-[14px] ${
          item.isActive ? "text-green-600" : "text-red-500"
        }`}
      >
        {item.isActive ? "Active" : "Inactive"}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {new Date(item.created_at).toLocaleDateString()}
      </span>
    ),
  ];

  const isLoadings = isLoading;

  return (
    <div>
      <div className="overflow-auto">
        <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">

          {/* search bar (unchanged UI) */}
          <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              Customer List
            </h2>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                  placeholder="Search customers..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allStatus">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Segments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allSegments">All Segments</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="regularCustomer">
                      Regular Customer
                    </SelectItem>
                    <SelectItem value="newCustomer">New Customer</SelectItem>
                    <SelectItem value="atRisk">At Risk</SelectItem>
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

          {/*  Backend Pagination */}
          {!isLoadings && totalPages > 1 && (
            <div className="flex justify-center pt-12 pb-4">
              <PaginationComponent
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

















// "use client";

// import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
// import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useFilterPagination } from "@/hooks/useFilterHook";
// import { TableRowItem } from "@/types/TableRowItem";
// import { Search } from "lucide-react";
// import { ReactNode } from "react";
// import { useGetCustomersQuery } from "@/src/redux/admin/customers/customersApi";

// export default function CustomerTable() {

//   const { data, isLoading } = useGetCustomersQuery({
//   page: 1,
//   limit: 10,
// });

//  const relevantData =
//   data?.data?.map((item: any) => ({
//     id: item.id,
//     email: item.email,
//     name: item.name || "N/A",
//     country: item.country || "N/A",
//     city: item.city || "N/A",
//     isActive: item.isActive,
//     created_at: item.created_at,
//   })) || [];

//   const { currentItems, currentPage, totalPages, setCurrentPage } =
//     useFilterPagination(relevantData, 6);

// const tableHeader = [
//   "Email",
//   "Name",
//   "Country",
//   "City",
//   "Status",
//   "Created At",
// ];

//  const tableRowDataRenderers = [
//   (item: any) => (
//     <span className="text-[14px] text-[#1F274B]">
//       {item.email}
//     </span>
//   ),
//   (item: any) => (
//     <span className="text-[14px] text-[#4A4C56]">
//       {item.name}
//     </span>
//   ),
//   (item: any) => (
//     <span className="text-[14px] text-[#1F274B]">
//       {item.country}
//     </span>
//   ),
//   (item: any) => (
//     <span className="text-[14px] text-[#696E86]">
//       {item.city}
//     </span>
//   ),
//   (item: any) => (
//     <span
//       className={`text-[14px] ${
//         item.isActive ? "text-green-600" : "text-red-500"
//       }`}
//     >
//       {item.isActive ? "Active" : "Inactive"}
//     </span>
//   ),
//   (item: any) => (
//     <span className="text-[14px] text-[#1F274B]">
//       {new Date(item.created_at).toLocaleDateString()}
//     </span>
//   ),
// ];

//   const isLoadings = isLoading;

//   return (
//     <div>
//       <div className="overflow-auto">
//         <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
//           {/* search bar */}
//           <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
//             <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
//               Customer List
//             </h2>
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <input
//                   type="text"
//                   className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
//                   placeholder="Search customers..."
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//               </div>
//               <div>
//                 <Select>
//                   <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
//                     <SelectValue placeholder="All Status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="allStatus">All Status</SelectItem>
//                     <SelectItem value="active">Active</SelectItem>
//                     <SelectItem value="inactive">Inactive</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <Select>
//                   <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
//                     <SelectValue placeholder="All Segments" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="allSegments">All Segments</SelectItem>
//                     <SelectItem value="vip">VIP</SelectItem>
//                     <SelectItem value="regularCustomer">
//                       Regular Customer
//                     </SelectItem>
//                     <SelectItem value="newCustomer">New Customer</SelectItem>
//                     <SelectItem value="atRisk">At Risk</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>

//           {/* table */}
//           <div className="mt-4 overflow-x-auto">
//             <ReuseAbleTable
//               allClientDataList={relevantData}
//               isLoadings={isLoadings}
//               currentItems={currentItems}
//               tableHeader={tableHeader}
//               tableRowDataRenderers={tableRowDataRenderers}
//               isBg={false}
//             />
//           </div>

//           {/* pagination */}
//           {!isLoadings && (
//             <div
//               className={`flex justify-center pt-12 pb-4 ${
//                 relevantData?.length >= 5 ? "block" : "hidden"
//               }`}
//             >
//               <PaginationComponent
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={setCurrentPage}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
