"use client";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import { useRef, useState } from "react";

const AddMember = () => {
  const breadLink = [
    {
      label: "Arion Team",
      href: "/admin/cms",
    },
    {
      label: "Add New Member",
    },
  ];

  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <div className="p-4 bg-[#FFF] rounded-xl mt-5">
        <h1 className="text-[20px] leading-[138%] tracking-[0.01px] font-extrabold">
          Add New Member
        </h1>
        <form className="mt-4">
          <div className="flex justify-between gap-6">
            <div
              onClick={triggerFileInput}
              className="cursor-pointer border  border-dashed border-[#1F274B] rounded-[6px] bg-[#F8F9FB] m-auto h-[260px] min-w-[260px] flex items-center justify-center"
            >
              <div>
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="object-cover rounded-[6px] h-[260px] w-[260px]"
                    draggable={false}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center text-[#4C526F]">
                    <ImageSelectIcon className="mb-2" />
                    <p className="text-sm">Profile Image</p>
                  </div>
                )}

                {/* HIDDEN INPUT */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="w-full">
              <div>
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Sylvain Houry"
                />
              </div>
              <div className="mt-4">
                <label className="text-[12px] leading-[100%] text-[#696E86]">
                  Position
                </label>
                <input
                  type="text"
                  className="p-3 border border-[#ECEFF3] ronunded-[4px] w-full rounded-[4px]"
                  placeholder="Founder & CEO"
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <button className="px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMember;
