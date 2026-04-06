'use client';

import { Skeleton } from '@/components/ui/skeleton';

export function BillingSummarySkeleton() {
  return (
    <div className="maxContainer lg:my-12 md:my-10 my-8">
      <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-6 gap-6">
        {/* Left */}
        <div className="border-[#DFE1E7] border lg:p-8 p-6 xl:w-[65%] lg:w-full normal-case">
          <Skeleton className="h-8 w-56 mb-8" />

          <div className="pb-6 border-b border-[#DFE1E7]">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-56" />
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-52" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          <div className="pt-6">
            <Skeleton className="h-6 w-36 mb-6" />

            <div className="flex flex-col gap-4">
              {[1, 2].map(item => (
                <div
                  key={item}
                  className="flex md:flex-row flex-col gap-4 bg-white py-4 border-b border-[#ECEFF3] items-stretch"
                >
                  <div className="flex-shrink-0 flex md:gap-3 gap-4 items-center">
                    <Skeleton className="w-[102px] h-[104px]" />

                    <div className="flex flex-col gap-3">
                      <Skeleton className="h-5 w-40" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>

                  <div className="flex-1 flex justify-end items-center">
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end md:mt-8 mt-6">
            <Skeleton className="h-12 w-32" />
          </div>
        </div>

        {/* Right */}
        <div className="border xl:w-[33%] md:w-full w-full px-6 py-6 h-fit">
          <Skeleton className="h-6 w-36 mb-6" />

          <div className="space-y-5 pb-4 border-b">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-20" />
          </div>

          <Skeleton className="h-4 w-48 mt-4" />
        </div>
      </div>
    </div>
  );
}
