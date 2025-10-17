"use clinet";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

type adminInfoFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function UpdatePasswordSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<adminInfoFormData>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: adminInfoFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="p-8 bg-[#FFF] border border-[#F5F5F7] rounded-[12px] w-full mt-5 shadow">
      <h2 className="text-xl font-extrabold leading-[100%] text-[#1F274B]">
        Password Update
      </h2>

      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div>
              <Label
                htmlFor="currentPassword"
                className="text-[14px] font-normal text-[#4A4C56] leading-[160%] mb-2"
              >
                Current Password
              </Label>
              <input
                id="password"
                type="password"
                placeholder="••••••••••"
                className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px] placeholder:tracking-[0.2em]"
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
                className="text-[14px] font-normal text-[#4A4C56] leading-[160%] mb-2"
              >
                New Password
              </Label>
              <input
                id="newPassword"
                type="password"
                placeholder="••••••••••"
                className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px] placeholder:tracking-[0.2em]"
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
                className="text-[14px] font-normal text-[#4A4C56] leading-[160%] mb-2"
              >
                Confirm Password
              </Label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••••"
                className="bg-[#FFF] border leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full focus:outline-1 focus:outline-[#DFE1E7] rounded-[8px] placeholder:tracking-[0.2em]"
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

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-[4px] leading-[117%] text-[#FFF] self-stretch text-[14px] px-3 py-2.5"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
