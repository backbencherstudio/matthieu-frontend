import CancelIcon from "@/components/Icons/AdminIcon/CancelIcon";
import DownloadIcon from "@/components/Icons/AdminIcon/DownloadIcon";
import { useGetSingleContactQuery } from "@/src/redux/admin/contactUs/ContactUsApi";
import { useGetSingleJobApplicantQuery } from "@/src/redux/admin/jobApplicant/jobApplicantApi";

interface DetailProps {
  id: string;
  onClose?: () => void;
}

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-[#ECEFF3] rounded ${className}`} />
);

export default function ContactUsDetailsModal({ id, onClose }: DetailProps) {
  const { data, isLoading } = useGetSingleContactQuery(id);

  const applicant = data?.data;

  return (
    <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
      <div className="flex items-center justify-between mb-[35px]">
        <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
          Contact Details
        </h1>
      </div>

      <div className="p-4 border border-[#ECEFF3] rounded-[6px]">
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <div>
            <label className="text-[14px] text-[#696E86]">Name</label>
            {isLoading ? (
              <Skeleton className="h-5 w-40 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.first_name} {applicant?.last_name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-[14px] text-[#696E86]">Email</label>
            {isLoading ? (
              <Skeleton className="h-5 w-48 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Phone</label>
            {isLoading ? (
              <Skeleton className="h-5 w-32 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.phone}
              </p>
            )}
          </div>

          {/* Experience */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">City</label>
            {isLoading ? (
              <Skeleton className="h-5 w-24 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.city}
              </p>
            )}
          </div>

          {/* Town */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">Address</label>
            {isLoading ? (
              <Skeleton className="h-5 w-28 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.address}
              </p>
            )}
          </div>

          {/* State */}
          <div className="mt-5">
            <label className="text-[14px] text-[#696E86]">State</label>
            {isLoading ? (
              <Skeleton className="h-5 w-28 mt-3" />
            ) : (
              <p className="text-[16px] text-[#1F274B] mt-3">
                {applicant?.state}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mt-5">
          <label className="text-[14px] text-[#696E86]">Message</label>
          {isLoading ? (
            <Skeleton className="h-20 w-full mt-3" />
          ) : (
            <p className="text-[16px] text-[#1F274B]">{applicant?.message}</p>
          )}
        </div>

        
      </div>
    </div>
  );
}
