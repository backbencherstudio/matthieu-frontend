import CancelIcon from "@/components/Icons/AdminIcon/CancelIcon";
import { EditCouponForm } from "./EditCouponForm";

interface EditCouponModalDetailProps {
  onClose?: () => void;
}

export default function EditCouponModalDetail({
  onClose,
}: EditCouponModalDetailProps) {
  return (
    <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
            Edit Coupon
          </h1>
          <button
            onClick={onClose}
            className="cursor-pointer px-3 py-2.5 border border-[#989CAC] rounded-[4px]"
          >
            <CancelIcon />
          </button>
        </div>
        <hr />
      </div>

      <div className="p-3 bg-[#ECEFF3] rounded-[6px] mt-4">
        <EditCouponForm />
      </div>
    </div>
  );
}
