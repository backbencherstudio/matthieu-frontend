import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import EditCouponModalDetail from "./EditCouponModalDetail";

export default function EditCouponModal() {
  return (
    <ModalWrapper
      trigger={
        <span className="p-1.5 bg-[#F8FAFB] rounded-[6px] inline-flex">
          <EditIcon />
        </span>
      }
    >
      <EditCouponModalDetail />
    </ModalWrapper>
  );
}
