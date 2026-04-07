"use client";

import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useGetCouponByIdQuery } from "@/src/redux/admin/coupon/couponApi";
import { useState } from "react";

type Props = {
  couponId: string;
};

export default function ViewCouponModal({ couponId }: Props) {
  const [open, setOpen] = useState(false);

  // fetch only when modal open
  const { data, isLoading } = useGetCouponByIdQuery(couponId, {
    skip: !open,
  });

  const coupon = data?.data;

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]"
      >
        <EyeIcon />
      </button>

      {/* Modal */}
      <CustomDialog open={open} setOpen={setOpen}>
        <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
              Coupon Details
            </h1>
          </div>
          <hr />

          {/* Body */}
          <div className="p-3 bg-[#ECEFF3] rounded-[6px] mt-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="space-y-3 text-[14px] text-[#4C526F]">
                <p>
                  <strong>Code:</strong> {coupon?.code}
                </p>
                <p>
                  <strong>Discount:</strong> {coupon?.discount}%
                </p>
                <p>
                  <strong>Expires At:</strong>{" "}
                  {coupon?.expiresAt
                    ? new Date(coupon.expiresAt).toLocaleDateString()
                    : ""}
                </p>
                <p>
                  <strong>Max Users:</strong> {coupon?.maxUsers}
                </p>
                <p>
                  <strong>Max Uses Per User:</strong> {coupon?.maxUsesPerUser}
                </p>
              </div>
            )}
          </div>
        </div>
      </CustomDialog>
    </div>
  );
}
