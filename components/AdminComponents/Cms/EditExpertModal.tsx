"use client";

import CancelIcon from "@/components/Icons/AdminIcon/CancelIcon";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import {
  useGetSingleExpertQuery,
  useUpdateExpertsMutation,
} from "@/src/redux/admin/cms/expert/expertApi";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditExpertModalProps {
  id: string;
  refetch: () => void;
}

interface EditExpertFormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
}

export default function EditExpertModal({ id, refetch }: EditExpertModalProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditExpertFormValues>();

  const [updateExperts, { isLoading }] = useUpdateExpertsMutation();
  const { data, isFetching } = useGetSingleExpertQuery(id);

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data?.name,
        email: data.data.email,
        phone: data.data.phone,
        country: data.data.country,
        region: data.data.region,
      });
    }
  }, [data, open, reset]);

  const onSubmit = async (formData: EditExpertFormValues) => {
    try {
      const response = await updateExperts({
        id,
        data: formData,
      });

      if (response?.data?.success) {
        toast.success(response.data.message);
        refetch();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to update expert");
    }
  };

  return (
    <>
      {/* Edit Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-[6px] bg-[#F8FAFB] p-[7px] cursor-pointer"
      >
        <EditIcon />
      </button>

      {/* Modal */}
      <CustomDialog open={open} setOpen={setOpen}>
        <div className="w-full rounded-[8px] bg-white p-8 md:w-[520px]">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#101010]">
              Edit Expert
            </h2>
            <button onClick={() => setOpen(false)}>
              <CancelIcon />
            </button>
          </div>

          {/* Optional loading state */}
          {isFetching ? (
            <p className="text-center text-sm text-gray-500">
              Loading expert data...
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] text-[#696E86]">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[12px] text-[#696E86]">Email</label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-[12px] text-[#696E86]">Phone</label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                />
              </div>

              {/* Country + Region */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] text-[#696E86]">Country</label>
                  <input
                    {...register("country", { required: true })}
                    className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  />
                </div>

                <div>
                  <label className="text-[12px] text-[#696E86]">Region</label>
                  <input
                    {...register("region", { required: true })}
                    className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-x-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] bg-[#E9E9ED] px-4 py-3 text-[#777980] cursor-pointer"
                >
                  Close
                </button>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="rounded-[8px] bg-[#1F274B] px-4 py-2.5 text-white disabled:opacity-60 cursor-pointer"
                >
                  {isLoading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          )}
        </div>
      </CustomDialog>
    </>
  );
}
