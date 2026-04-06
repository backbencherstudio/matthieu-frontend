"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useResetPasswordMutation, useSignupMutation } from "@/src/redux/auth/authApi";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type newPasswordData = {
    password: string;
    confirm_password: string;
};


export function SetNewPassword() {
    // const [signup, { isLoading }] = useSignupMutation()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<newPasswordData>({
        defaultValues: {
            password: "",
            confirm_password: "",
        },
    });

    const [resetPassword] = useResetPasswordMutation()

    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    const onSubmit = async (data: newPasswordData) => {

        if (!email) {
            toast.error("Email missing");
            return;
        }

        if (!token) {
            toast.error("Token missing");
            return;
        }

        try {
            const response = await resetPassword({
                email: email,
                token: token,
                password: data.password,
            }).unwrap();

            if (response?.success) {
                toast.success(response?.message);
                reset();
                router.push(`/signin`);

            } else {
                toast.error(response?.message);
            }
        } catch (error: any) {
            toast.error("Failed to reset password");
        }
    };

    return (
        <div className="maxContainer my-12">
            <div className="w-full md:w-[464px] mx-auto border lg:p-[32px] md:p-[32px] py-[12px] px-4">
                <div className="space-y-1 text-center p-0 mb-10">
                    <h1 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%]">
                        Set New Password
                    </h1>
                </div>
                <div className="p-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                className="bg-[#E9E9ED80] leading-[150%] lg:px-4 px-3 lg:py-3 py-2 w-full border-0 outline-1 outline-[#DFE1E7]"
                                {...register("confirm_password", {
                                    required: "Confirm Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Confirm Password must be at least 6 characters",
                                    },
                                    validate: (value) =>
                                        value === watch("password") || "Passwords do not match",
                                })}
                            />
                            {errors.confirm_password && (
                                <p className="text-sm text-destructive">
                                    {errors.confirm_password.message}
                                </p>
                            )}
                        </div>



                        <Button
                            type="submit"
                            className="w-full bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-none !h-auto !leading-[100%]  lg:py-4 py-3 text-[#FFF] self-stretch text-[16px] lg:my-[40px] md:my-8 my-6"
                        >
                            Set New Password
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
