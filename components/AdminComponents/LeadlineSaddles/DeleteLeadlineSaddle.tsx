"use client";

import DeleteIcon from "@/components/Icons/DashboardIcons/DeleteIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useDeleteLeadlineSaddleMutation } from "@/src/redux/admin/leadlineSaddle/leadlineSaddle";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteSaddleProductProps {
  id: string;
  refetch: () => void;
}

export default function DeleteLeadlineSaddle({
  id,
  refetch,
}: DeleteSaddleProductProps) {
  const [open, setOpen] = useState(false);
  const [deleteSaddleProduct, { isLoading }] =
    useDeleteLeadlineSaddleMutation();

  const handelDelete = async () => {
    try {
      const response = await deleteSaddleProduct(id);
      if (response?.data?.success) {
        refetch();
        setOpen(false);
        toast.success(response?.data?.message);
      }
    } catch (error) {
      toast.error("Failed to delete saddle prodsuct");
      console.error(error);
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
            Delete Saddle Product
          </h2>

          <div className="mt-9 flex items-center justify-center space-x-4 w-full">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-[8px] bg-[#E9E9ED] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer text-[#777980] w-full"
            >
              No
            </button>

            <button
              onClick={handelDelete}
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
