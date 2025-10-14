"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  subscribe: boolean;
  conditions: boolean;
};

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      subscribe: false,
      conditions: false,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="maxContainer my-12">
      <div className="w-full xl:w-[464px] lg:w-[464px] mx-auto border p-[32px]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-[32px] font-extrabold ">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-[19px] self-stretch">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="firstName"
                  className="text-[16px] font-normal text-[#4A4C56]"
                >
                  Fist Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Yasir Abed"
                  className="bg-[#E9E9ED80] rounded-none !h-auto leading-[150%] lg:px-4 px-3 lg:py-3 py-2  focus-visible:ring-0 focus-visible:border-[#1F274B]"
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
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="lastName"
                  className="text-[16px] font-normal text-[#4A4C56]"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Rabbu"
                  className="bg-[#E9E9ED80] rounded-none !h-auto leading-[150%] lg:px-4 px-3 lg:py-3 py-2 focus-visible:ring-0 focus-visible:border-[#1F274B]"
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
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[16px] font-normal  text-[#4A4C56]"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="arionadmin@gmail.com"
                className="bg-[#E9E9ED80] rounded-none !h-auto leading-[150%] lg:px-4 px-3 lg:py-3 py-2 focus-visible:ring-0 focus-visible:border-[#1F274B]"
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
              <Input
                id="password"
                type="password"
                placeholder="••••••••••"
                className="bg-[#E9E9ED80] rounded-none !h-auto leading-[150%] lg:px-4 px-3 lg:py-3 py-2 focus-visible:ring-0 focus-visible:border-[#1F274B]"
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
                htmlFor="confirmPassword"
                className="text-[16px] font-normal text-[#4A4C56]"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••••"
                className="bg-[#E9E9ED80] rounded-none !h-auto leading-[150%] lg:px-4 px-3 lg:py-3 py-2 focus-visible:ring-0 focus-visible:border-[#1F274B]"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Confirm Password must be at least 6 characters",
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
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
              <div className="flex items-center space-x-2 mt-[7px]">
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
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-none !h-auto leading-[100%] lg:px-8 px-7 lg:py-4 py-3 text-[#FFF] self-stretch text-[16px] !my-[40px]"
            >
              Create Account
            </Button>

            <div className="text-center text-[18px] leading-[100%]">
              <span className="text-[#4A4C56] ">Already have an account? </span>
              <Link
                href="/signin"
                className=" font-extrabold text-[#2A3988] hover:underline"
              >
                Sign In
              </Link>
            </div>

            <div className="flex justify-center text-xs">
              <span className="text-[#717182] text-[16px] ">or</span>
            </div>

            <Button
              type="button"
              className="w-full bg-[#FFF] rounded-none !h-auto leading-[100%] lg:px-8 px-7 lg:py-4 py-3 text-[#4A4C56] border broder-[#DFE1E7] hover:bg-[#FFF]/50 cursor-pointer"
              onClick={() => console.log("Continue as guest")}
            >
              Continue as Guest
            </Button>
          </form>
        </CardContent>
      </div>
    </div>
  );
}
