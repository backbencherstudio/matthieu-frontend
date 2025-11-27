"use client";

import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

interface EditCouponFormData {
  couponCode: string;
  discountType: "percentage" | "fixed";
  description: string;
  freeShipping: boolean;
  percentage: string;
  maxDiscount: string;
  minOrderAmount: string;
  usageLimit: number;
  startDate: string;
  expiryDate: string;
}

export function EditCouponForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditCouponFormData>({
    defaultValues: {
      couponCode: "SAVE20",
      discountType: "percentage",
      description: "",
      freeShipping: false,
      percentage: "",
      maxDiscount: "",
      minOrderAmount: "",
      usageLimit: 0,
      startDate: "",
      expiryDate: "",
    },
  });

  const onSubmit = (data: EditCouponFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Coupon Code*
          </label>
          <div>
            <input
              type="text"
              {...register("couponCode", {
                required: "Coupon code is required",
              })}
              className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
              placeholder="SAVE20"
            />
            {/* <div className="absolute inset-y-0 left-0 m-1 flex items-center p-[6px] bg-[#F6F8FA] rounded-[6px]">
            <RefreshCw className="w-5 h-5 text-[#4C526F]" />
          </div> */}
          </div>
          {errors.couponCode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.couponCode.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Discount Type*
          </label>
          <div>
            <Select>
              <SelectTrigger className="p-[22px] rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full">
                <SelectValue placeholder="Percentage Discount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Percentage Discount</SelectItem>
                <SelectItem value="lat7day">Fixed Cart Discount</SelectItem>
                <SelectItem value="lat30day">Fixed Product Discount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.couponCode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.couponCode.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Description
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                {...register("freeShipping")}
                className="w-3 h-3 border border-[#161C35] rounded-[3px] bg-[#FFF] aspect-square mx-[6px] accent-[#1F274B]"
              />
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Free Shipping
              </label>
            </div>
          </div>
          <div>
            <input
              type="text"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2"
              placeholder="Brief description of the coupon"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Percentage (%)
          </label>
          <div>
            <input
              type="text"
              {...register("percentage", {
                required: "Percentage is required",
              })}
              className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
              placeholder="0%"
            />
          </div>
          {errors.percentage && (
            <p className="text-red-500 text-xs mt-1">
              {errors.percentage.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Maximum Discount ($)
          </label>
          <div>
            <input
              type="text"
              {...register("maxDiscount", {
                required: "Max Discount is required",
              })}
              className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
              placeholder="$0.00"
            />
          </div>
          {errors.maxDiscount && (
            <p className="text-red-500 text-xs mt-1">
              {errors.maxDiscount.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Start Date
          </label>
          <div>
            <input
              type="date"
              className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
              placeholder="dd-mm-yy"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Expiry Date
          </label>
          <div>
            <input
              type="date"
              className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
              placeholder="dd-mm-yy"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end pt-4">
        <button
          type="submit"
          className="flex items-center text-[#FFF] transition text-[14px] leading-[117%] px-3 py-[10px] rounded-[4px] bg-[#1F274B] hover:bg-[#1F274B]/90 space-x-[8px] cursor-pointer"
        >
          <TotalCouponIcon className="text-[#FFF]" />
          <span>Update Coupon</span>
        </button>
      </div>
    </form>
  );
}
