"use client";

import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import CustomDialog from "@/components/reusable/Features/Dialog";
import { useUpdateAmbassadorMutation } from "@/src/redux/admin/cms/ambassador/ambassadorApi";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditAmbassadorModalProps {
  id: string;
  name?: string;
  socialLink?: string;
  country?: string;
  image?: string;
  flag?: string;
  refetch: () => void;
}

interface FormValues {
  name: string;
  socialLink: string;
  country: string;
  image?: FileList;
  flag?: FileList;
}

export default function EditAmbassadorModal({
  id,
  name,
  socialLink,
  country,
  image,
  flag,
  refetch,
}: EditAmbassadorModalProps) {
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm<FormValues>();

  const [imagePreview, setImagePreview] = useState<string | null>(
    image || null,
  );
  const [flagPreview, setFlagPreview] = useState<string | null>(flag || null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const flagInputRef = useRef<HTMLInputElement>(null);

  const triggerImageUpload = () => imageInputRef.current?.click();
  const triggerFlagUpload = () => flagInputRef.current?.click();

  const [updateAmbassador, { isLoading }] = useUpdateAmbassadorMutation();

  // Prefill form
  useEffect(() => {
    reset({
      name,
      socialLink,
      country,
    });
  }, [name, socialLink, country, reset]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "flag",
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      type === "image"
        ? setImagePreview(reader.result as string)
        : setFlagPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    setValue(type, e.target.files as FileList);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("social_links", data.socialLink);
      formData.append("country", data.country);

      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      if (data.flag?.[0]) {
        formData.append("flag_image", data.flag[0]);
      }

      const response = await updateAmbassador({ id, data: formData });

      if (response?.data?.success) {
        toast.success(response.data.message);
        refetch();
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update ambassador");
    }
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-[6px] bg-[#F8FAFB] p-[7px] cursor-pointer"
      >
        <EditIcon />
      </button>

      {/* MODAL */}
      <CustomDialog open={open} setOpen={setOpen}>
        <div className="bg-white rounded-[8px] p-6 w-full md:w-[520px]">
          <h2 className="text-lg font-extrabold mb-4">Edit Ambassador</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* IMAGE */}
              <div
                onClick={triggerImageUpload}
                className="cursor-pointer border border-dashed border-[#1F274B] bg-[#F8F9FB] rounded-[6px] h-[200px] flex items-center justify-center"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-[6px]"
                  />
                ) : (
                  <div className="text-center text-[#4C526F]">
                    <ImageSelectIcon className="mx-auto mb-2" />
                    <p className="text-sm">Profile Image</p>
                  </div>
                )}

                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "image")}
                />
              </div>

              {/* NAME */}
              <div>
                <label className="text-[12px] text-[#696E86]">Full Name</label>
                <input
                  {...register("name")}
                  className="w-full p-3 border border-[#ECEFF3] rounded-[4px]"
                />
              </div>

              {/* SOCIAL LINK */}
              <div>
                <label className="text-[12px] text-[#696E86]">
                  Social Link
                </label>
                <input
                  {...register("socialLink")}
                  className="w-full p-3 border border-[#ECEFF3] rounded-[4px]"
                />
              </div>

              {/* COUNTRY + FLAG */}
              <div>
                <label className="text-[12px] text-[#696E86]">Country</label>

                <div className="flex items-center gap-4 mt-2">
                  <div
                    onClick={triggerFlagUpload}
                    className="cursor-pointer border border-dashed border-[#1F274B] bg-[#F8F9FB] rounded-[6px] h-[48px] w-[48px] flex items-center justify-center"
                  >
                    {flagPreview ? (
                      <img
                        src={flagPreview}
                        className="h-full w-full object-cover rounded-[6px]"
                      />
                    ) : (
                      <span className="text-[10px]">Flag</span>
                    )}

                    <input
                      ref={flagInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "flag")}
                    />
                  </div>

                  <input
                    {...register("country")}
                    className="w-full p-3 border border-[#ECEFF3] rounded-[4px]"
                  />
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-[6px] bg-[#E9E9ED] cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
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
