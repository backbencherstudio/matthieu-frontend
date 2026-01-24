"use client";

import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useUpdateArionMemberMutation } from "@/src/redux/admin/cms/arionTeam/arionTeamApi";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditArionTeamModalProps {
  id: string;
  name?: string;
  designation?: string;
  image?: string;
  refetch: () => void;
}

interface FormValues {
  name: string;
  designation: string;
  image?: FileList;
}

export default function EditArionTeamModal({
  id,
  image,
  refetch,
}: EditArionTeamModalProps) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(image || null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      designation: "",
    },
  });

  const [updateArionMember, { isLoading }] = useUpdateArionMemberMutation();

  const triggerFileInput = () => fileInputRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setValue("image", e.target.files as FileList);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("designation", data.designation);

      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }
      const response = await updateArionMember({ id, data: formData });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        refetch();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to update member");
      console.error(error);
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
          <h2 className="mb-6 text-center text-xl font-extrabold text-[#101010]">
            Edit Arion Team Member
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="flex-row">
              {/* Image */}
              <div
                onClick={triggerFileInput}
                className="m-auto flex h-[260px] min-w-[260px] cursor-pointer items-center justify-center rounded-[6px] border border-dashed border-[#1F274B] bg-[#F8F9FB]"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-[260px] w-[260px] rounded-[6px] object-cover"
                  />
                ) : (
                  <div className="text-center text-[#4C526F]">
                    <ImageSelectIcon className="mx-auto mb-2" />
                    <p className="text-sm">Profile Image</p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              {/* Inputs */}
              <div className="w-full">
                <div>
                  <label className="text-[12px] text-[#696E86]">
                    Full Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Full name is required",
                    })}
                    className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="text-[12px] text-[#696E86]">Position</label>
                  <input
                    {...register("designation", {
                      required: "Position is required",
                    })}
                    className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  />
                  {errors.designation && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.designation.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-end gap-x-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-[8px] bg-[#E9E9ED] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer text-[#777980]"
              >
                Close
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className="bg-[#1F274B] px-4 py-2.5 text-white disabled:opacity-60 rounded-[8px] text-[16px] leading-[160%] tracking-[0.01px] cursor-pointer"
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
