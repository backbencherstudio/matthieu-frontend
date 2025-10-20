import CreateIcon from "@/components/Icons/AdminIcon/CreateIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import CreateCouponModalDetail from "./CreateCouponModalDetail";

export default function CreateCouponModal() {
  return (
    <ModalWrapper
      trigger={
        <span className="p-1.5 bg-[#F8FAFB] rounded-[6px] inline-flex">
          <CreateIcon />
        </span>
      }
    >
      <CreateCouponModalDetail />
    </ModalWrapper>
  );
}
