import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import SaddleAlertDetail from "./SaddleAlertDetail";

export default function SaddleAlertDetailModal() {
  return (
    <ModalWrapper
      trigger={
        <span className="p-1.5 bg-[#F8FAFB] rounded-[6px] inline-flex">
          <EyeIcon />
        </span>
      }
    >
      <SaddleAlertDetail />
    </ModalWrapper>
  );
}
