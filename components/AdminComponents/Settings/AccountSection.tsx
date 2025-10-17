"use client";
import DeleteIcon from "@/components/Icons/DashboardIcons/DeleteIcon";
import ImageSelectIcon from "@/components/Icons/DashboardIcons/ImageSelectIcon";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

type adminInfoFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function AccountSection() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isValidType = file.type === "image/jpeg" || file.type === "image/png";
    const isValidSize = file.size / 1024 / 1024 < 2;

    if (!isValidType) {
      setError("You can only upload JPG/PNG files!");
      return;
    }
    if (!isValidSize) {
      setError("Image must be smaller than 2MB!");
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }, 1000);
  };

  const removeImage = () => {
    setImage(null);
    setError(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<adminInfoFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: adminInfoFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="w-full">
      <div className="p-8 bg-[#FFF] border border-[#F5F5F7] rounded-[12px] w-full">
        <h2 className="text-xl font-extrabold leading-[100%] text-[#1F274B]">
          Edit Admin Info
        </h2>

        {/* Image upload */}
        <div className="mt-[24.5px]">
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] border border-[#F5F5F7] rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            <div className="flex flex-col gap-2 items-center">
              <button
                onClick={triggerFileInput}
                className="cursor-pointer p-[7px] rounded-[6px] bg-[#F6F8FA]"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <ImageSelectIcon className="cursor-pointer" />
              </button>

              <button
                type="button"
                onClick={removeImage}
                aria-label="Remove image"
                className="text-[#EB3D4D] cursor-pointer p-[7px] rounded-[6px] bg-[#F6F8FA]"
              >
                <DeleteIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>

        {/* Admin info form */}
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <Label
                  htmlFor="firstName"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  First name
                </Label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Md"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="lastName"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  Last name
                </Label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Yasir"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <Label
                  htmlFor="email"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  Email
                </Label>
                <input
                  id="email"
                  type="email"
                  placeholder="arionadmin@gmail.com"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  Phone
                </Label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+1 (555) 987-6543"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-[4px] leading-[117%] text-[#FFF] self-stretch text-[14px] px-3 py-2.5 mt-5 mb-8"
              >
                Update Info
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Password update form */}
      <div className="p-8 bg-[#FFF] border border-[#F5F5F7] rounded-[12px] w-full mt-5">
        <h2 className="text-xl font-extrabold leading-[100%] text-[#1F274B]">
          Password Update
        </h2>

        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div>
                <Label
                  htmlFor="currentPassword"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  Current Password
                </Label>
                <input
                  id="password"
                  type="password"
                  placeholder="• • • • • • • • • •"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("currentPassword", {
                    required: "Current Password is required",
                  })}
                />
                {errors.currentPassword && (
                  <p className="text-sm text-destructive">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <Label
                  htmlFor="newPassword"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  New Password
                </Label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="• • • • • • • • • •"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("newPassword", {
                    required: "New Password is required",
                  })}
                />
                {errors.newPassword && (
                  <p className="text-sm text-destructive">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="text-[14px] font-normal text-[#4A4C56] leading-[160%]"
                >
                  Confirm Password
                </Label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="• • • • • • • • • •"
                  className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px]"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-[4px] leading-[117%] text-[#FFF] self-stretch text-[14px] px-3 py-2.5 mt-5 mb-8"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
