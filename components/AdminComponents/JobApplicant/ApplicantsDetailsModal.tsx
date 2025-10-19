import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useState } from "react";
import JobApplicantDetail from "./JobApplicantDetail";

export default function ApplicantsDetailsModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="p-1.5 bg-[#F8FAFB] rounded-[6px]"
      >
        <span className="cursor-pointer">
          <EyeIcon />
        </span>
      </button>
      <CustomDialog open={open} setOpen={setOpen}>
        <JobApplicantDetail onClose={() => setOpen(false)} />
      </CustomDialog>
    </div>
  );
}
