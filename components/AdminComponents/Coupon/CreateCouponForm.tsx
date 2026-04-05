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
import { useCreateCouponMutation } from "@/src/redux/admin/coupon/couponApi";
import { toast } from "sonner"; // ✅ added
import { log } from "console";
import { CloudCog } from "lucide-react";

interface CreateCouponFormData {
  couponCode: string;
  percentage: string;
  expiryDate: string;
  usageLimit: number;
  maxUsers: number;
}

interface CreateCouponFormProps {
  onClose?: () => void; // ✅ added onClose prop
  refetch?: () => void;
}

export function CreateCouponForm({ onClose, refetch }: CreateCouponFormProps) {
  const [createCoupon] = useCreateCouponMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCouponFormData>({
    defaultValues: {
      couponCode: "SAVE20",
      percentage: "",
      usageLimit: 0,
      maxUsers: 0,
      expiryDate: "",
    },
  });

  const onSubmit = async (data: CreateCouponFormData) => {
    try {
      const payload = {
        code: data.couponCode,
        discount: Number(data.percentage),
        expiresAt: new Date(data.expiryDate).toISOString(),
        maxUsers: Number(data.maxUsers),
        maxUsesPerUser: Number(data.usageLimit),
      };

      const res = await createCoupon(payload).unwrap();
      console.table(res);
      //  success toast
      if (res?.success && res?.data?.id) {
        toast.success("Coupon created successfully!");
        refetch();
        //  reset form data after success
        reset();
      } else {
        toast.error(res?.message || "Failded to create coupon!");
      }

      //  close the modal after success
      onClose?.(); // If onClose is passed, close the modal
    } catch (error: any) {
      //  handle backend error
      const errorMessage =
        error?.data?.message?.message ||
        error?.data?.message ||
        "Failed to create coupon";

      //  error toast
      toast.error(errorMessage);

      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields remain unchanged */}
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Coupon Code*
          </label>
          <input
            type="text"
            {...register("couponCode", { required: "Coupon code is required" })}
            className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
            placeholder="SAVE20"
          />
          {errors.couponCode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.couponCode.message}
            </p>
          )}
        </div>
        {/* Discount Type (no API effect) */}
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Discount Type*
          </label>
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
      </div>

      {/* Other fields unchanged */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Percentage (%)
          </label>
          <input
            type="text"
            {...register("percentage", { required: "Percentage is required" })}
            className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
            placeholder="0%"
          />
          {errors.percentage && (
            <p className="text-red-500 text-xs mt-1">
              {errors.percentage.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Max Users
          </label>
          <input
            type="text"
            {...register("maxUsers", { required: "Max users is required" })}
            className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
            placeholder="0"
          />
          {errors.maxUsers && (
            <p className="text-red-500 text-xs mt-1">
              {errors.maxUsers.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Usage Limit
          </label>
          <input
            type="number"
            {...register("usageLimit", { required: "Usage limit is required" })}
            className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
          />
        </div>

        <div className="w-full">
          <label className="text-[12px] leading-[100%] text-[#696E86]">
            Expiry Date
          </label>
          <input
            type="date"
            {...register("expiryDate", { required: "Expiry date is required" })}
            className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-xs mt-1">
              {errors.expiryDate.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end pt-4">
        <button
          type="submit"
          className="flex items-center text-[#FFF] transition text-[14px] leading-[117%] px-3 py-[10px] rounded-[4px] bg-[#1F274B] hover:bg-[#1F274B]/90 space-x-[8px] cursor-pointer"
        >
          <TotalCouponIcon className="text-[#FFF]" />
          <span>Create Coupon</span>
        </button>
      </div>
    </form>
  );
}

// "use client";

// import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from "react-hook-form";
// import { useCreateCouponMutation } from "@/src/redux/admin/coupon/couponApi";
// import { toast } from "sonner"; // ✅ added

// interface CreateCouponFormData {
//   couponCode: string;
//   percentage: string;
//   expiryDate: string;
//   usageLimit: number;
//   maxUsers: number;
// }

// export function CreateCouponForm() {
//   const [createCoupon] = useCreateCouponMutation();

//   const {
//     register,
//     handleSubmit,
//     reset, // ✅ added
//     formState: { errors },
//   } = useForm<CreateCouponFormData>({
//     defaultValues: {
//       couponCode: "SAVE20",
//       percentage: "",
//       usageLimit: 0,
//       maxUsers: 0,
//       expiryDate: "",
//     },
//   });

//   const onSubmit = async (data: CreateCouponFormData) => {
//     try {
//       const payload = {
//         code: data.couponCode,
//         discount: Number(data.percentage),
//         expiresAt: new Date(data.expiryDate).toISOString(),
//         maxUsers: Number(data.maxUsers),
//         maxUsesPerUser: Number(data.usageLimit),
//       };

//       const res = await createCoupon(payload).unwrap();

//       // ✅ success toast
//       toast.success("Coupon created successfully 🎉");

//       // ✅ reset form only (no modal logic)
//       reset();

//       console.log("Created:", res);
//     } catch (error: any) {
//       // ✅ handle nested backend error
//       const errorMessage =
//         error?.data?.message?.message ||
//         error?.data?.message ||
//         "Failed to create coupon";

//       // ❌ error toast
//       toast.error(errorMessage);

//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="grid grid-cols-2 gap-2">
//         {/* Coupon Code */}
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Coupon Code*
//           </label>
//           <div>
//             <input
//               type="text"
//               {...register("couponCode", {
//                 required: "Coupon code is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="SAVE20"
//             />
//           </div>
//           {errors.couponCode && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.couponCode.message}
//             </p>
//           )}
//         </div>

//         {/* Discount Type */}
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Discount Type*
//           </label>
//           <div>
//             <Select>
//               <SelectTrigger className="p-[22px] rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full">
//                 <SelectValue placeholder="Percentage Discount" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="today">Percentage Discount</SelectItem>
//                 <SelectItem value="lat7day">
//                   Fixed Cart Discount
//                 </SelectItem>
//                 <SelectItem value="lat30day">
//                   Fixed Product Discount
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>

//       {/* Description + Free Shipping */}
//       <div className="mt-4">
//         <div>
//           <div className="flex items-center justify-between">
//             <div>
//               <label className="text-[12px] leading-[100%] text-[#696E86]">
//                 Description
//               </label>
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 className="w-3 h-3 border border-[#161C35] rounded-[3px] bg-[#FFF] aspect-square mx-[6px] accent-[#1F274B]"
//               />
//               <label className="text-[12px] leading-[100%] text-[#696E86]">
//                 Free Shipping
//               </label>
//             </div>
//           </div>
//           <div>
//             <input
//               type="text"
//               className="w-full p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2"
//               placeholder="Brief description of the coupon"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 mt-4">
//         {/* Percentage */}
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Percentage (%)
//           </label>
//           <div>
//             <input
//               type="text"
//               {...register("percentage", {
//                 required: "Percentage is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="0%"
//             />
//           </div>
//           {errors.percentage && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.percentage.message}
//             </p>
//           )}
//         </div>

//         {/* Max Users */}
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Max Users
//           </label>
//           <div>
//             <input
//               type="text"
//               {...register("maxUsers", {
//                 required: "Max users is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="0"
//             />
//           </div>
//           {errors.maxUsers && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.maxUsers.message}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 mt-4">
//         {/* Usage Limit */}
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Usage Limit
//           </label>
//           <div>
//             <input
//               type="number"
//               {...register("usageLimit", {
//                 required: "Usage limit is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//             />
//           </div>
//         </div>

//         {/* Expiry Date */}
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Expiry Date
//           </label>
//           <div>
//             <input
//               type="date"
//               {...register("expiryDate", {
//                 required: "Expiry date is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//             />
//           </div>
//           {errors.expiryDate && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.expiryDate.message}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="col-span-2 flex justify-end pt-4">
//         <button
//           type="submit"
//           className="flex items-center text-[#FFF] transition text-[14px] leading-[117%] px-3 py-[10px] rounded-[4px] bg-[#1F274B] hover:bg-[#1F274B]/90 space-x-[8px] cursor-pointer"
//         >
//           <TotalCouponIcon className="text-[#FFF]" />
//           <span>Create Coupon</span>
//         </button>
//       </div>
//     </form>
//   );
// }

// "use client";

// import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from "react-hook-form";

// interface CreateCouponFormData {
//   couponCode: string;
//   discountType: "percentage" | "fixed";
//   description: string;
//   freeShipping: boolean;
//   percentage: string;
//   maxDiscount: string;
//   minOrderAmount: string;
//   usageLimit: number;
//   startDate: string;
//   expiryDate: string;
// }

// export function CreateCouponForm() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<CreateCouponFormData>({
//     defaultValues: {
//       couponCode: "SAVE20",
//       discountType: "percentage",
//       description: "",
//       freeShipping: false,
//       percentage: "",
//       maxDiscount: "",
//       minOrderAmount: "",
//       usageLimit: 0,
//       startDate: "",
//       expiryDate: "",
//     },
//   });

//   const onSubmit = (data: CreateCouponFormData) => {
//     console.log("Form submitted:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="grid grid-cols-2 gap-2">
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Coupon Code*
//           </label>
//           <div>
//             <input
//               type="text"
//               {...register("couponCode", {
//                 required: "Coupon code is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="SAVE20"
//             />
//             {/* <div className="absolute inset-y-0 left-0 m-1 flex items-center p-[6px] bg-[#F6F8FA] rounded-[6px]">
//             <RefreshCw className="w-5 h-5 text-[#4C526F]" />
//           </div> */}
//           </div>
//           {errors.couponCode && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.couponCode.message}
//             </p>
//           )}
//         </div>
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Discount Type*
//           </label>
//           <div>
//             <Select>
//               <SelectTrigger className="p-[22px] rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full">
//                 <SelectValue placeholder="Percentage Discount" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="today">Percentage Discount</SelectItem>
//                 <SelectItem value="lat7day">Fixed Cart Discount</SelectItem>
//                 <SelectItem value="lat30day">Fixed Product Discount</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           {errors.couponCode && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.couponCode.message}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="mt-4">
//         <div>
//           <div className="flex items-center justify-between">
//             <div>
//               <label className="text-[12px] leading-[100%] text-[#696E86]">
//                 Description
//               </label>
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 {...register("freeShipping")}
//                 className="w-3 h-3 border border-[#161C35] rounded-[3px] bg-[#FFF] aspect-square mx-[6px] accent-[#1F274B]"
//               />
//               <label className="text-[12px] leading-[100%] text-[#696E86]">
//                 Free Shipping
//               </label>
//             </div>
//           </div>
//           <div>
//             <input
//               type="text"
//               {...register("description", {
//                 required: "Description is required",
//               })}
//               className="w-full p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2"
//               placeholder="Brief description of the coupon"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 mt-4">
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Percentage (%)
//           </label>
//           <div>
//             <input
//               type="text"
//               {...register("percentage", {
//                 required: "Percentage is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="0%"
//             />
//           </div>
//           {errors.percentage && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.percentage.message}
//             </p>
//           )}
//         </div>
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Maximum Discount ($)
//           </label>
//           <div>
//             <input
//               type="text"
//               {...register("maxDiscount", {
//                 required: "Max Discount is required",
//               })}
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="$0.00"
//             />
//           </div>
//           {errors.maxDiscount && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.maxDiscount.message}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 mt-4">
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Start Date
//           </label>
//           <div>
//             <input
//               type="date"
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="dd-mm-yy"
//             />
//           </div>
//         </div>
//         <div className="w-full">
//           <label className="text-[12px] leading-[100%] text-[#696E86]">
//             Expiry Date
//           </label>
//           <div>
//             <input
//               type="date"
//               className="p-3 rounded-[4px] bg-[#FFF] text-[14px] text-[#4C526F] leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
//               placeholder="dd-mm-yy"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="col-span-2 flex justify-end pt-4">
//         <button
//           type="submit"
//           className="flex items-center text-[#FFF] transition text-[14px] leading-[117%] px-3 py-[10px] rounded-[4px] bg-[#1F274B] hover:bg-[#1F274B]/90 space-x-[8px] cursor-pointer"
//         >
//           <TotalCouponIcon className="text-[#FFF]" />
//           <span>Create Coupon</span>
//         </button>
//       </div>
//     </form>
//   );
// }
