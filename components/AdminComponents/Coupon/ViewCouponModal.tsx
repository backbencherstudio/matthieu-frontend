"use client";

import { useState } from "react";
import CustomDialog from "@/components/reusable/Features/Dialog";
import CreateIcon from "@/components/Icons/AdminIcon/CreateIcon";
import { useGetCouponByIdQuery } from "@/src/redux/admin/coupon/couponApi";

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
        <CreateIcon />
      </button>

      {/* Modal */}
      <CustomDialog open={open} setOpen={setOpen}>
        <div className="px-6 py-8 rounded-[8px] bg-[#FFF] md:w-[520px] w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
              Coupon Details
            </h1>
            {/* <button
              onClick={() => setOpen(false)}
              className="cursor-pointer px-3 py-2.5 border border-[#989CAC] rounded-[4px]"
            >
              ✕
            </button> */}
          </div>
          <hr />

          {/* Body */}
          <div className="p-3 bg-[#ECEFF3] rounded-[6px] mt-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="space-y-3 text-[14px] text-[#4C526F]">
                <p><strong>Code:</strong> {coupon?.code}</p>
                <p><strong>Discount:</strong> {coupon?.discount}%</p>
                <p>
                  <strong>Expires At:</strong>{" "}
                  {coupon?.expiresAt
                    ? new Date(coupon.expiresAt).toLocaleDateString()
                    : ""}
                </p>
                <p><strong>Max Users:</strong> {coupon?.maxUsers}</p>
                <p>
                  <strong>Max Uses Per User:</strong>{" "}
                  {coupon?.maxUsesPerUser}
                </p>
              </div>
            )}
          </div>
        </div>
      </CustomDialog>
    </div>
  );
}