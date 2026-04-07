import { useGetSingleUseSadlesAdminQuery } from "@/src/redux/admin/useSaddles/useSaddlesApi";
import Image from "next/image";

interface DetailProps {
  id: string;
  onClose?: () => void;
}

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-[#ECEFF3] rounded ${className}`} />
);

export default function UseSaddlesDetails({ id, onClose }: DetailProps) {
  const { data, isLoading } = useGetSingleUseSadlesAdminQuery(id);

  const applicant = data?.data;

  return (
    <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[720px] w-full overflow-y-auto max-h-[80vh]">
      <div className="flex items-center justify-between mb-[35px]">
        <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
          Use Saddles Details
        </h1>
      </div>

      <div className="p-4 border border-[#ECEFF3] rounded-[6px]">
        <div className="grid grid-cols-2 gap-3">
          {/* id */}
          <div>
            <label className="text-[14px] text-[#696E86]">Use Saddle Id</label>
            {isLoading ? (
              <Skeleton className="h-5 w-40 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.sku}
              </p>
            )}
          </div>

          {/* title */}
          <div>
            <label className="text-[14px] text-[#696E86]">Title</label>
            {isLoading ? (
              <Skeleton className="h-5 w-48 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.title}
              </p>
            )}
          </div>

          {/* des */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Description</label>
            {isLoading ? (
              <Skeleton className="h-5 w-32 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.description}
              </p>
            )}
          </div>

          {/* base prise */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Base Price</label>
            {isLoading ? (
              <Skeleton className="h-5 w-24 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.basePrice}
              </p>
            )}
          </div>

          {/* saddle category */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">
              Saddle Category
            </label>
            {isLoading ? (
              <Skeleton className="h-5 w-28 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.usedsaddlecategory}
              </p>
            )}
          </div>

          {/* Category */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Category</label>
            {isLoading ? (
              <Skeleton className="h-5 w-28 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.category}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Seat Size</label>
            {isLoading ? (
              <Skeleton className="h-5 w-20 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.seatSize}
              </p>
            )}
          </div>

          {/* Availability */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Availability</label>
            {isLoading ? (
              <Skeleton className="h-5 w-24 mt-3" />
            ) : (
              <p
                className={`text-[16px] mt-3 font-semibold ${
                  applicant?.isAvailable ? "text-green-600" : "text-red-500"
                }`}
              >
                {applicant?.isAvailable ? "Available" : "Not Available"}
              </p>
            )}
          </div>

          {/* Price Range */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Price Range</label>
            {isLoading ? (
              <Skeleton className="h-5 w-32 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                ${applicant?.priceRange?.min} – ${applicant?.priceRange?.max}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="text-[14px] text-[#696E86] mb-3 block">
              Saddle Images
            </label>

            {isLoading ? (
              <div className="flex gap-3">
                <Skeleton className="h-24 w-24" />
                <Skeleton className="h-24 w-24" />
                <Skeleton className="h-24 w-24" />
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {applicant?.images?.map((img: any) => (
                  <Image
                    key={img.id}
                    src={img.url}
                    alt="Used Saddle"
                    height={100}
                    width={100}
                    className="h-24 w-full object-cover rounded-[6px] border"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
