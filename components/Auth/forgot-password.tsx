"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForgotPasswordMutation } from "@/src/redux/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


type ForgotPasswordData = {
    email: string;
};

export function ForgotPassword() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ForgotPasswordData>({
        defaultValues: {
            email: "",
        },
    });

    const [forgotPassword] = useForgotPasswordMutation();

    const router = useRouter();

    const onSubmit = async (data: ForgotPasswordData) => {
        try {
            const response = await forgotPassword({
                email: data.email,
            }).unwrap();

            if (response?.success) {
                toast.success(response?.message);
                reset();

                router.push(`/otp?email=${data.email}`);

            } else {
                toast.error(response?.message);
            }
        } catch (error: any) {
            toast.error("Failed to send otp");
        }
    };

    return (
        <div className="maxContainer my-12">
            <div className="w-full md:w-[464px] mx-auto border lg:p-[32px] md:p-[32px] py-[12px] px-4">
                <div className="space-y-1 text-center p-0 mb-10">
                    <h1 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%]">
                        Email Verification
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
                                placeholder="Enter your email"
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


                        <Button
                            type="submit"
                            className="w-full bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-none !h-auto !leading-[100%]  lg:py-4 py-3 text-[#FFF] self-stretch text-[16px]"
                        >
                            Send OTP
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
