

// components/HeroSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { ImageIcon } from "lucide-react";

export default function ProductCardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-3 bg-[#F8F9FB]">
          <div className="w-full bg-white overflow-hidden rounded-lg relative">
            {/* Image Placeholder */}
            <div className="h-[400px] w-full bg-gray-100 flex flex-col items-center justify-center border border-dashed border-gray-300">
              <ImageIcon className="w-16 h-16 text-gray-300 mb-3" />
              <p className="text-gray-400 text-sm font-medium">Product Image</p>
            </div>
          </div>

          {/* Text Placeholders */}
          <div className="mt-5 space-y-3 px-1">
            <Skeleton className="h-6 w-[85%]" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      ))}
    </>
  );
}