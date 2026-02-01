import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import JobApplicantDetail from "./JobApplicantDetail";

interface DetailProps {
  id: string;
  onClose?: () => void;
}

export default function ApplicantsDetailsModal({ id, onClose }: DetailProps) {
  return (
    <ModalWrapper
      trigger={
        <span className="p-1.5 bg-[#F8FAFB] rounded-[6px] inline-flex">
          <EyeIcon />
        </span>
      }
    >
      <JobApplicantDetail id={id} />
    </ModalWrapper>
  );
}
