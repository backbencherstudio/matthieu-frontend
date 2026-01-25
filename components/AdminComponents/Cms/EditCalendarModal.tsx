"use client";

import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useUpdateCalendarMutation } from "@/src/redux/admin/cms/calendar/calendarApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditCalendarModalProps {
  id: string;
  refetch: () => void;
}

interface FormValues {
  name: string;
  discipline: string;
  location: string;
  date: string;
}

export default function EditCalendarModal({
  id,
  refetch,
}: EditCalendarModalProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [updateCalendar, { isLoading }] = useUpdateCalendarMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await updateCalendar({ id, data }).unwrap();
      toast.success(response.message || "Competition updated");
      setOpen(false);
      refetch();
    } catch (error) {
      toast.error("Failed to update competition");
      console.error(error);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-[7px] bg-[#F8FAFB] rounded-[6px] cursor-pointer"
      >
        <EditIcon />
      </button>

      {/* Modal */}
      <CustomDialog open={open} setOpen={setOpen}>
        <div className="bg-white p-6 rounded-[8px] w-full md:w-[520px]">
          <h2 className="text-xl font-extrabold text-[#101010] text-center">
            Edit Competition
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Competition Name */}
            <div>
              <label className="text-[12px] text-[#696E86]">
                Competition Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Discipline */}
            <div>
              <label className="text-[12px] text-[#696E86]">Discipline</label>
              <input
                {...register("discipline", {
                  required: "Discipline is required",
                })}
                className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-[12px] text-[#696E86]">Location</label>
              <input
                {...register("location", {
                  required: "Location is required",
                })}
                className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-[12px] text-[#696E86]">Date</label>
              <input
                {...register("date", { required: "Date is required" })}
                className="p-3 border border-[#ECEFF3] w-full rounded-[4px]"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-[6px] bg-[#E9E9ED] text-[#777980] cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 rounded-[6px] bg-[#1F274B] text-white cursor-pointer"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </CustomDialog>
    </>
  );
}
