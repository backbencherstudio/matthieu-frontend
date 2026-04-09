"use client";

import DeleteIcon from "@/components/Icons/DashboardIcons/DeleteIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useDeleteSaddleAlertMutation } from "@/src/redux/admin/saddleAlert/saddleAlertApi";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteSaddleAlertModalProps {
  id: string;
  refetch: () => void;
}

export default function SaddleDeleteModal({
  id,
  refetch,
}: DeleteSaddleAlertModalProps) {
  const [open, setOpen] = useState(false);
  const [deleteSaddleAlert, { isLoading }] = useDeleteSaddleAlertMutation();

  const handelDelete = async () => {
    try {
      const response = await deleteSaddleAlert(id);

      if (response?.data?.id) {
        refetch();
        setOpen(false);
        toast.success("Saddle alert deleted");
      }
    } catch (error) {
      toast.error("Failed to delete member");
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
            Delete Customer Alert
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
