"use client";

import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import { useCreateMutation } from "@/src/redux/admin/cms/arionTeam/arionTeamApi";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AddMemberFormValues {
  name: string;
  designation: string;
  image: FileList;
}

const AddMember = () => {
  const breadLink = [
    { label: "Arion Team", href: "/admin/cms" },
    { label: "Add New Member" },
  ];

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<AddMemberFormValues>();

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setValue("image", e.target.files as FileList);
    setPreview(URL.createObjectURL(file));
  };

  const [create, { isLoading }] = useCreateMutation();

  const onSubmit = async (data: AddMemberFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("image", data.image[0]);

      const response = await create(formData);

      if (response?.data?.success) {
        reset();
        toast.success("Member added successfully");
      }
    } catch (error) {
      console.error("Create failed", error);
      toast.error("Failed to add member");
    }
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      <div className="mt-5 rounded-xl bg-white p-4">
        <h1 className="text-[20px] font-extrabold">Add New Member</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            {/* Image Upload */}
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
                <label className="text-[12px] text-[#696E86]">Full Name</label>
                <input
                  {...register("name", {
                    required: "Full name is required",
                  })}
                  type="text"
                  className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  placeholder="Sylvain Houry"
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
                  type="text"
                  className="w-full rounded-[4px] border border-[#ECEFF3] p-3"
                  placeholder="Founder & CEO"
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
          <div className="mt-6 flex justify-end">
            <button
              disabled={isLoading}
              type="submit"
              className="cursor-pointer rounded-[4px] bg-[#1F274B] px-3 py-2.5 text-white"
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMember;
