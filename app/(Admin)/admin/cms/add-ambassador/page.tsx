"use client";

import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import { useCreateAmbassadorMutation } from "@/src/redux/admin/cms/ambassador/ambassadorApi";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AddAmbassadorFormValues {
  name: string;
  socialLink: string;
  country: string;
  image: FileList;
  flag: FileList;
}

const AddAmbassador = () => {
  const breadLink = [
    { label: "Arion Ambassador", href: "/admin/cms" },
    { label: "Add New Ambassador" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AddAmbassadorFormValues>();

  // Preview states
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [flagPreview, setFlagPreview] = useState<string | null>(null);
  const router = useRouter()

  const fileInputRef = useRef<HTMLInputElement>(null);
  const flagInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => fileInputRef.current?.click();
  const triggerFlagUpload = () => flagInputRef.current?.click();

  const handleImageChange = (
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

  const [createAmbassador, { isLoading }] = useCreateAmbassadorMutation();

  const onSubmit = async (data: AddAmbassadorFormValues) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("social_links", data.socialLink);
      formData.append("country", data.country);
      formData.append("image", data.image[0]);
      formData.append("flag_image", data.flag[0]);

      const response = await createAmbassador(formData);
      if (response?.data?.success) {
        reset();
        toast.success(response?.data?.message);
        router.push('/admin/cms')
      }
    } catch (error) {
      // console.error("Create failed", error);
      toast.error("Failed to add member");
    }
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />

      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Ambassador
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Profile Image */}
            <div
              onClick={triggerFileInput}
              className="cursor-pointer border border-dashed border-[#1F274B] rounded-[6px] bg-[#F8F9FB] m-auto h-[260px] min-w-[260px] flex items-center justify-center"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-[260px] w-[260px] object-cover rounded-[6px]"
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
                className="hidden"
                onChange={(e) => handleImageChange(e, "image")}
              />
            </div>

            {/* Right Side Inputs */}
            <div className="w-full">
              {/* Full Name */}
              <div>
                <label className="text-[12px] text-[#696E86]">Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                  placeholder="Nick Dello Joio"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Social Link */}
              <div className="mt-4">
                <label className="text-[12px] text-[#696E86]">
                  Social Links
                </label>
                <input
                  {...register("socialLink")}
                  className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                  placeholder="https://instagram.com/..."
                />
              </div>

              {/* Country + Flag */}
              <div className="mt-4">
                <label className="text-[12px] text-[#696E86]">
                  Country Name
                </label>

                <div className="flex items-center gap-4 mt-2">
                  <div
                    onClick={triggerFlagUpload}
                    className="cursor-pointer border border-dashed border-[#1F274B] bg-[#F8F9FB] rounded-[6px] h-[48px] w-[48px] flex items-center justify-center"
                  >
                    {flagPreview ? (
                      <img
                        src={flagPreview}
                        alt="Flag"
                        className="h-full w-full object-cover rounded-[6px]"
                      />
                    ) : (
                      <span className="text-[10px] text-[#4C526F]">Flag</span>
                    )}

                    <input
                      ref={flagInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "flag")}
                    />
                  </div>

                  <input
                    {...register("country")}
                    className="p-3 border border-[#ECEFF3] rounded-[4px] w-full"
                    placeholder="USA"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] cursor-pointer"
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAmbassador;
