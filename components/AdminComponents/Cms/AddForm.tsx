"use client";
import GalleryIcon from "@/components/Icons/AdminIcon/GalleryIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  title: string;
  author: string;
  description: string;
  freeShipping: boolean;
  percentage: string;
  maxDiscount: string;
  minOrderAmount: string;
  usageLimit: number;
  startDate: string;
  expiryDate: string;
}

export default function AddForm() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      freeShipping: false,
      percentage: "",
      maxDiscount: "",
      minOrderAmount: "",
      usageLimit: 0,
      startDate: "",
      expiryDate: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="p-4 bg-[#FFF] rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl font-extrabold text-primary-text">
            Create New Blog Post
          </h1>
        </div>
        {/* Body */}
        <div className="flex items-start space-x-4 mt-4">
          <div>
            <label
              htmlFor="image"
              className="flex items-center justify-center cursor-pointer w-full bg-[#E9E9ED80] rounded border border-dashed border-secondary-text p-10"
            >
              <input
                type="file"
                className="hidden"
                id="image"
                onChange={handleImageChange}
              />
              <div className="text-center flex flex-col gap-1 items-center">
                <GalleryIcon className="size-8" />
                <p className="text-sm text-secondary-text">
                  Thumbnail Image/Video
                </p>
                {images.length > 0 && (
                  <p>
                    <span className="text-primary-text">
                      {images.map((img, i) => img.name).join(", ")}
                    </span>
                  </p>
                )}
              </div>
            </label>
          </div>

          <div className="w-full">
            <div>
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Blog Title*
              </label>
              <input
                type="text"
                className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                placeholder="2025 FEI North American Youth Championships"
              />
            </div>
            <div className="mt-4">
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Author
              </label>
              <input
                type="text"
                className="p-3 rounded-[4px] border border-[#ECEFF3] placeholder:text-[14px] placeholder:text-[#4C526F] placeholder:leading-[100%] focus:outline-none focus:ring-0 mt-2 w-full"
                placeholder="G_fournier"
              />
            </div>
            <div className="mt-4">
              <label className="text-[12px] leading-[100%] text-[#696E86]">
                Blog Content
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
