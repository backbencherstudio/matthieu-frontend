"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSignupMutation } from "@/src/redux/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type SignUpFormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  // subscribe: boolean;
  // conditions: boolean;
};


export function SignUpForm() {
  const [signup, { isLoading }] = useSignupMutation()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      // subscribe: false,
      // conditions: false,
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await signup(data);
      if (response?.data?.success) {
        toast.success(response?.data?.message)
        reset()
        router.push("/signin")
      } else {
        toast.error(response?.data?.message)
      }
    } catch (error) {
      // console.error(error, "error")
      toast.error("Something went wrong")
    }
  };

  return (
    <div className="maxContainer my-12">
      <div className="w-full md:w-[464px] mx-auto border lg:p-[32px] md:p-[32px] py-[12px] px-4">
        <div className="space-y-1 text-center p-0 mb-10">
          <h1 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%]">
            Sign Up
          </h1>
        </div>
        <div className="p-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-[19px] self-stretch w-full md:justify-between">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="first_name"
                  className="text-[16px] font-normal text-[#4A4C56]"
                >
                  Fist Name
                </Label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  className="bg-[#E9E9ED80] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full  border-0 outline-1 outline-[#DFE1E7]"
                  {...register("first_name", {
                    required: "First Name is required",
                  })}
                />
                {errors.first_name && (
                  <p className="text-sm text-destructive">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="last_name"
                  className="text-[16px] font-normal text-[#4A4C56]"
                >
                  Last Name
                </Label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  className="bg-[#E9E9ED80] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full  border-0 outline-1 outline-[#DFE1E7]"
                  {...register("last_name", {
                    required: "Last Name is required",
                  })}
                />
                {errors.last_name && (
                  <p className="text-sm text-destructive">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[16px] font-normal  text-[#4A4C56]"
              >
                Email
              </Label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-[#E9E9ED80] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full  border-0 outline-1 outline-[#DFE1E7]"
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

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[16px] font-normal  text-[#4A4C56]"
              >
                Password
              </Label>
              <input
                id="password"
                type="password"
                value={watch("password")}
                placeholder="Enter your password"
                className="bg-[#E9E9ED80] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full  border-0 outline-1 outline-[#DFE1E7]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="confirm_password"
                className="text-[16px] font-normal text-[#4A4C56]"
              >
                Confirm Password
              </Label>
              <input
                id="confirm_password"
                type="password"
                value={watch("confirm_password")}
                placeholder="Enter your confirm password"
                className="bg-[#E9E9ED80] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full  border-0 outline-1 outline-[#DFE1E7]"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Confirm Password must be at least 6 characters",
                  },
                })}
              />
              {errors.confirm_password && (
                <p className="text-sm text-destructive">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            {/* <div className="mb-0">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="subscribe"
                  {...register("subscribe")}
                  className="!w-[14px] !h-[14px] aspect-square rounded-[3px] bg-[#FFF]"
                />
                <Label
                  htmlFor="subscribe"
                  className="text-sm font-normal text-[#4A4C56] leading-[100%]"
                >
                  Subscribe to our newsletter
                </Label>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox
                  id="conditions"
                  {...register("conditions")}
                  className="!w-[14px] !h-[14px] aspect-square rounded-[3px] bg-[#FFF]"
                />
                <Label
                  htmlFor="conditions"
                  className="text-sm font-normal text-[#4A4C56] leading-[100%]"
                >
                  I agree to the Terms & Conditions
                </Label>
              </div>
            </div> */}

            <Button
              type="submit"
              className="w-full bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-none !h-auto !leading-[100%]  lg:py-4 py-3 text-[#FFF] self-stretch text-[16px] lg:my-[40px] md:my-8 my-6"
            >
              Create Account
            </Button>

            <div className="text-center lg:text-[18px] text-[16px] leading-[100%]">
              <span className="text-[#4A4C56] ">Already have an account? </span>
              <Link
                href="/signin"
                className=" font-extrabold text-[#2A3988] hover:underline hover:underline-offset-4"
              >
                Sign In
              </Link>
            </div>

            <div className="flex justify-center text-xs">
              <span className="text-[#717182] text-[16px] ">or</span>
            </div>

            <Button
              type="button"
              className="w-full bg-[#FFF] rounded-none !h-auto !leading-[100%] lg:px-8 px-7 lg:py-4 py-3 text-[#4A4C56] border broder-[#DFE1E7] hover:bg-[#FFF]/50 cursor-pointer text-[16px]"
              onClick={() => console.log("Continue as guest")}
            >
              Continue as Guest
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
