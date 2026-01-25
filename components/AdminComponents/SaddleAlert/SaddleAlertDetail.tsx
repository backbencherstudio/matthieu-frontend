import CancelIcon from "@/components/Icons/AdminIcon/CancelIcon";
import { useGetSingleSaddleAlertQuery } from "@/src/redux/admin/saddleAlert/saddleAlertApi";

interface SaddleAlertDetailProps {
  id: string;
  onClose?: () => void;
}

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-[#ECEFF3] rounded ${className}`} />
);

export default function SaddleAlertDetail({
  id,
  onClose,
}: SaddleAlertDetailProps) {
  const { data, isLoading } = useGetSingleSaddleAlertQuery(id);

  return (
    <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-[35px]">
        <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
          Used Saddle Alert Details
        </h1>
        <button
          onClick={onClose}
          className="cursor-pointer px-3 py-2.5 border border-[#989CAC] rounded-[4px]"
        >
          <CancelIcon />
        </button>
      </div>

      {/* BODY */}
      <div className="p-4 border border-[#ECEFF3] rounded-[6px]">
        {isLoading ? (
          <>
            <div className="grid grid-cols-2 gap-5">
              {[...Array(8)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-5 w-full" />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-16 w-full" />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-[14px] text-[#696E86]">
                  Customer Name
                </label>
                <p className="text-[16px] text-[#1F274B]">
                  {data?.customer_name}
                </p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">Email</label>
                <p className="text-[16px] text-[#1F274B]">{data?.Email}</p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">Phone</label>
                <p className="text-[16px] text-[#1F274B]">
                  {data?.phone_number}
                </p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">
                  Price Range
                </label>
                <p className="text-[16px] text-[#1F274B]">
                  €{data?.Price_range}
                </p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">Seat Sizes</label>
                <p className="text-[16px] text-[#1F274B]">{data?.Seat_Sizes}</p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">
                  Preferences
                </label>
                <p className="text-[16px] text-[#1F274B]">
                  {data?.Preferences}
                </p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">Colors</label>
                <p className="text-[16px] text-[#1F274B]">{data?.Color}</p>
              </div>

              <div>
                <label className="text-[14px] text-[#696E86]">
                  Town, State
                </label>
                <p className="text-[16px] text-[#1F274B]">
                  {data?.state}, {data?.town}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#696E86]">
                Additional Notes
              </label>
              <p className="text-[16px] text-[#1F274B]">
                {data?.Additional_notes}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
