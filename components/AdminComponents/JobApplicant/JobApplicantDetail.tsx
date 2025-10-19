import CancelIcon from "@/components/Icons/AdminIcon/CancelIcon";
import DownloadIcon from "@/components/Icons/AdminIcon/DownloadIcon";

interface JobApplicantDetailProps {
  onClose?: () => void;
}

export default function JobApplicantDetail({
  onClose,
}: JobApplicantDetailProps) {
  return (
    <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
      <div className="flex items-center justify-between mb-[35px]">
        <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
          Job Applicants Details
        </h1>
        <button
          onClick={onClose}
          className="cursor-pointer px-3 py-2.5 border border-[#989CAC] rounded-[4px]"
        >
          <CancelIcon />
        </button>
      </div>

      <div className="p-4 border border-[#ECEFF3] rounded-[6px]">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-[14px] text-[#696E86]">Name</label>
            <p className="text-[16px] text-[#1F274B]">Emma Taylor</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Email</label>
            <p className="text-[16px] text-[#1F274B]">emma.taylor@gmail.com</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Phone</label>
            <p className="text-[16px] text-[#1F274B]">+1 234 567 890</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Experience</label>
            <p className="text-[16px] text-[#1F274B]">6 Years</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">Town</label>
            <p className="text-[16px] text-[#1F274B]">Kern</p>
          </div>
          <div>
            <label className="text-[14px] text-[#696E86]">State</label>
            <p className="text-[16px] text-[#1F274B]">California</p>
          </div>
        </div>

        <div className="mt-5">
          <label className="text-[14px] text-[#696E86]">Message</label>
          <p className="text-[16px] text-[#1F274B]">
            I am passionate about saddle fitting and customer service.
          </p>
        </div>

        <div className="space-y-2 mt-4">
          <label className="text-[14px] text-[#696E86]">
            Attached Document
          </label>
          <div className="flex items-center justify-between px-4 py-3 bg-[#E9EAED] rounded-[8px] mt-3">
            <span className="text-[14px] text-[#1F274B]">
              Emma Taylor Cv.pdf
            </span>
            <button
              type="button"
              className="flex items-center justify-center p-1.5 rounded-[6px] bg-[#1F274B] cursor-pointer"
            >
              <DownloadIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
