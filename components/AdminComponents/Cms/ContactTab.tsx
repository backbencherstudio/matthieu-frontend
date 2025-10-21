"use client";
import { useForm } from "react-hook-form";

interface FormData {
  address: string;
  author: string;
  description: string;
}

export default function ContactTab() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      address: "",
      author: "",
      description: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="p-4 bg-[#FFF] rounded-[8px] mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl font-extrabold text-primary-text">
            Update Contact Information
          </h1>
        </div>
        {/* Body */}
        <div className="mt-4">
          <div className="w-full">
            <div>
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Address
              </label>
              <input
                type="text"
                className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                placeholder="3080 Fairlane Farms Rd. Suite 2, Wellington, FL 33414"
              />
            </div>
            <div className="mt-4">
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Social Media Links
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                  placeholder="https://www.instagram.com/arion_saddle"
                />
                <input
                  type="text"
                  className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                  placeholder="https://www.facebook.com/arion_saddle"
                />
                <input
                  type="text"
                  className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                  placeholder="https://www.tiktok.com/arion_saddle"
                />
                <input
                  type="text"
                  className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                  placeholder="https://www.Youtube.com/arion_saddle"
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <button className="px-3 py-2.5 rounded-[4px] bg-[#1F274B] text-[#FFF] text-[14px] leading-[117%] mt-6 cursor-pointer">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
