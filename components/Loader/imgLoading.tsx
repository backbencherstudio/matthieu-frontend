"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ImageLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Skeleton className="h-9 w-72 rounded-lg" />
        
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-44 rounded-lg" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-5 text-left">
                  <Skeleton className="h-4 w-28" />
                </th>
                <th className="px-6 py-5 text-left">
                  <Skeleton className="h-4 w-32" />
                </th>
                <th className="px-6 py-5 text-left">
                  <Skeleton className="h-4 w-24" />
                </th>
                <th className="px-6 py-5 text-left">
                  <Skeleton className="h-4 w-20" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {Array.from({ length: 8 }).map((_, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="px-6 py-5">
                    <Skeleton className="h-5 w-40" />
                  </td>
                  <td className="px-6 py-5">
                    <Skeleton className="h-5 w-56" />
                  </td>
                  <td className="px-6 py-5">
                    <Skeleton className="h-5 w-28" />
                  </td>
                  <td className="px-6 py-5">
                    <Skeleton className="h-6 w-28 rounded-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Optional: Bottom pagination skeleton */}
      {/* <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-9 rounded-lg" />
          ))}
        </div>
      </div> */}
    </div>
  );
}