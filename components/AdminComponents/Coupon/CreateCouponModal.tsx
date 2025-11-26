import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import CreateCouponModalDetail from "./CreateCuponModalDetail";

export default function CreateCouponModal() {
  return (
    <ModalWrapper
      trigger={
        <span className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          <span>Create Coupon</span>
        </span>
      }
    >
      <CreateCouponModalDetail />
    </ModalWrapper>
  );
}
