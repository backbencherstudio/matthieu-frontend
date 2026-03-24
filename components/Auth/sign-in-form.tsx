"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/src/redux/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";


type SignInFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const [signup] = useLoginMutation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await signup(data);
      console.log(response, "response")
      if (response?.data?.success) {
        localStorage.setItem("token", response?.data?.authorization?.token);

        toast.success(response?.data?.message);
        reset();

        router.push("/");

      } else {
        toast.error("Login fail please check your email or password");
      }
    } catch (error: any) {
      toast.error("Login fail please check your email or password");
    }
  };

  return (
    <div className="maxContainer my-12">
      <div className="w-full md:w-[464px] mx-auto border lg:p-[32px] md:p-[32px] py-[12px] px-4">
        <div className="space-y-1 text-center p-0 mb-10">
          <h1 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%]">
            Sign In
          </h1>
        </div>
        <div className="p-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[16px] font-normal text-[#4A4C56]"
              >
                Email
              </Label>
              <input
                id="email"
                type="email"
                placeholder="arionadmin@gmail.com"
                className="bg-[#E9E9ED80] border-0 outline-1 outline-[#DFE1E7] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full"
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

            {/* <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[16px] font-normal text-[#4A4C56]"
              >
                Password
              </Label>
              <input
                id="password"
                type="password"
                placeholder="• • • • • • • • • •"
                className="bg-[#E9E9ED80] border-0 outline-1 outline-[#DFE1E7] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full"
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
            </div> */}

            {/* Password with eye icon */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[16px] font-normal text-[#4A4C56]"
              >
                Password
              </Label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className="bg-[#E9E9ED80] border-0 outline-1 outline-[#DFE1E7] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full rounded-md pr-10"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <IoMdEyeOff className="h-5 w-5" />
                  ) : (
                    <IoEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  {...register("rememberMe")}
                  className="!w-[14px] !h-[14px] aspect-square rounded-[3px] bg-[#FFF]"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-[#4A4C56] leading-[100%]"
                >
                  Remember me
                </Label>
              </div>
              <Link
                href="/forgot-password"
                className="text-[16px] text-[#2A3988] hover:underline hover:underline-offset-4 leading-[100%] font-extrabold "
              >
                Lost your password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-none !h-auto !leading-[100%]  lg:py-4 py-3 text-[#FFF] self-stretch text-[16px]"
            >
              Sign In
            </Button>

            <div className="text-center lg:text-[18px] text-[16px] leading-[100%]">
              <span className="text-[#4A4C56]">Don’t have an account? </span>
              <Link
                href="/signup"
                className="font-extrabold text-[#2A3988] hover:underline hover:underline-offset-4"
              >
                Sign Up
              </Link>
            </div>

            <div className="flex justify-center">
              <span className="text-[#717182] text-[16px]">or</span>
            </div>

            <button
              type="button"
              className="w-full bg-[#FFF] rounded-none !h-auto leading-[100%] lg:px-8 px-7 lg:py-4 py-3 text-[#4A4C56] border broder-[#DFE1E7] hover:bg-[#FFF]/50 cursor-pointer text-[16px]"
              onClick={() => router.push("/")}
            >
              Continue as Guest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
