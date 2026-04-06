import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import ModalWrapper from "../reusable/ModalWrapper";
import EditCouponModalDetail from "./EditCouponModalDetail";

type Props = {
  coupon: any; // you can replace 'any' with your Coupon type if you have one
};

export default function EditCouponModal({ coupon }: Props) {
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
