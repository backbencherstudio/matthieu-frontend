"use client";

import DeleteIcon from "@/components/Icons/DashboardIcons/DeleteIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useState } from "react";
import { toast } from "sonner"; // Import Sonner for toasts
import { useDeleteCouponMutation } from "@/src/redux/admin/coupon/couponApi"; // import your delete API hook

type Props = {
  coupon: any; // coupon object
  onDeleteSuccess: (id: string) => void; // Callback to remove coupon from the table
  refetch:()=>void;
};

export default function CouponDeleteModal({ coupon, onDeleteSuccess ,refetch}: Props) {
  const [open, setOpen] = useState(false);
  const [deleteCoupon, { isLoading }] = useDeleteCouponMutation();

  const handleDelete = async () => {
    try {
      const response: any = await deleteCoupon(coupon.id).unwrap(); // Call API to delete coupon
      if (response?.success) {
        toast.success(response.message || "Coupon deleted successfully");
        onDeleteSuccess(coupon.id); // Update the UI locally by removing the coupon
        setOpen(false); // Close the modal on successful delete
        refetch();
      } else {
        toast.error("Failed to delete coupon");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="p-[7px] bg-[#F8FAFB] rounded-[6px]"
      >
        <span className="cursor-pointer">
          <DeleteIcon />
        </span>
      </button>

      <CustomDialog open={open} setOpen={setOpen}>
        <div className="p-8 rounded-[8px] bg-[#FFF] md:w-[417px] w-full">
          <div className="flex items-center justify-center">
            <button className="cursor-pointer p-3 border-[6px] border-[#FBD8DB] bg-[#FEECEE] rounded-full">
              <DeleteIcon />
            </button>
          </div>

          <h2 className="text-xl font-extrabold leading-[130%] tracking-[0.1px] text-[#101010] mt-4 text-center">
            Delete Alert
          </h2>

          <div className="mt-9 flex items-center justify-center space-x-4 w-full">
            <button
              onClick={() => setOpen(false)} // Close modal without deletion
              className="px-4 py-3 rounded-[8px] bg-[#E9E9ED] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer text-[#777980] w-full"
            >
              No
            </button>

            <button
              onClick={handleDelete} // Handle delete operation
              disabled={isLoading} // Disable button while loading
              className="px-4 py-3 rounded-[8px] bg-[#1F274B] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer text-[#FFF] w-full"
            >
              {isLoading ? "Deleting..." : "Yes, Delete"}
            </button>
          </div>
        </div>
      </CustomDialog>
    </div>
  );
}






















// "use client";

// import DeleteIcon from "@/components/Icons/DashboardIcons/DeleteIcon";
// import CustomDialog from "@/components/reusable/Features/Dialog";
// import { useState } from "react";




// type Props = {
//   coupon: any; // replace 'any' with your Coupon type
// };

// export default function CouponDeleteModal({ coupon }: Props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(true)}
//         className="p-[7px] bg-[#F8FAFB] rounded-[6px]"
//       >
//         <span className="cursor-pointer">
//           <DeleteIcon />
//         </span>
//       </button>

//       <CustomDialog open={open} setOpen={setOpen}>
//         <div className="p-8 rounded-[8px] bg-[#FFF] md:w-[417px] w-full">
//           <div className="flex items-center justify-center">
//             <button className="cursor-pointer p-3 border-[6px] border-[#FBD8DB] bg-[#FEECEE] rounded-full">
//               <DeleteIcon />
//             </button>
//           </div>

//           <h2 className="text-xl font-extrabold leading-[130%] tracking-[0.1px] text-[#101010] mt-4 text-center">
//             Delete Alert
//           </h2>

//           <div className="mt-9 flex items-center justify-center space-x-4 w-full">
//             <button
//               onClick={() => setOpen(false)}
//               className="px-4 py-3 rounded-[8px] bg-[#E9E9ED] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer text-[#777980] w-full"
//             >
//               No
//             </button>

//             <button className="px-4 py-3 rounded-[8px] bg-[#1F274B] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer text-[#FFF] w-full">
//               Yes, Delete
//             </button>
//           </div>
//         </div>
//       </CustomDialog>
//     </div>
//   );
// }
