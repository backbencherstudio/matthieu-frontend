"use client";
import {
  useGetSingleContactQuery,
  useUpdateContactMutation,
} from "@/src/redux/admin/cms/contact/contactApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormData {
  address: string;
  fb_link: string;
  instagram_link: string;
  tiktok_link: string;
  youtube_link: string;
}

export default function ContactTab() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      address: "",
      fb_link: "",
      instagram_link: "",
      tiktok_link: "",
      youtube_link: "",
    },
  });
  const { data } = useGetSingleContactQuery("");
  const contact = data;
  useEffect(() => {
    if (contact) {
      reset({
        address: contact.address,
        fb_link: contact.fb_link,
        instagram_link: contact.instagram_link,
        tiktok_link: contact.tiktok_link,
        youtube_link: contact.youtube_link,
      });
    }
  }, [contact, reset]);
  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await updateContact(data);
      if (response?.data?.id) {
        toast.success("Contact info updated");
        reset();
      }
    } catch (error) {
      console.error("Create failed", error);
      toast.error("Failed to update");
    }
  };

  return (
    <div className="p-4 bg-[#FFF] rounded-[8px] border border-[#DFE1E7]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <h1 className="text-2xl font-extrabold text-primary-text">
          Update Contact Information
        </h1>

        {/* Body */}
        <div className="mt-4">
          {/* Address */}
          <div>
            <label className="text-[12px] text-[#696E86]">Address</label>
            <input
              {...register("address", {
                required: "Address is required",
              })}
              type="text"
              className="p-3 mt-2 w-full rounded-[4px] border border-[#ECEFF3]"
              placeholder="3080 Fairlane Farms Rd. Suite 2, Wellington, FL 33414"
            />
            {errors.address && (
              <p className="text-xs text-red-500 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-4">
            <label className="text-[12px] text-[#696E86]">
              Social Media Links
            </label>

            <div className="grid md:grid-cols-2 gap-2">
              <input
                {...register("instagram_link")}
                className="p-3 mt-2 rounded-[4px] border border-[#ECEFF3]"
                placeholder="https://www.instagram.com/arion_saddle"
              />

              <input
                {...register("fb_link")}
                className="p-3 mt-2 rounded-[4px] border border-[#ECEFF3]"
                placeholder="https://www.facebook.com/arion_saddle"
              />

              <input
                {...register("tiktok_link")}
                className="p-3 mt-2 rounded-[4px] border border-[#ECEFF3]"
                placeholder="https://www.tiktok.com/arion_saddle"
              />

              <input
                {...register("youtube_link")}
                className="p-3 mt-2 rounded-[4px] border border-[#ECEFF3]"
                placeholder="https://www.youtube.com/arion_saddle"
              />
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-3 py-2.5 rounded-[4px] bg-[#1F274B] text-white cursor-pointer"
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
