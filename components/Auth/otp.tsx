"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";
import { useVerifyOtpMutation } from "@/src/redux/auth/authApi";

export function OTP() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            otp: "",
        },
    });

    const [otp, setOtp] = useState("");

    const searchParams = useSearchParams();
    const email = searchParams.get("email");


    const [verifyOtp] = useVerifyOtpMutation();
    const router = useRouter();

    const onSubmit = async () => {


        if (!email) {
            toast.error("Email missing");
            return;
        }

        if (!otp || otp.length < 6) {
            toast.error("Please enter valid OTP");
            return;
        }

        try {
            const response = await verifyOtp({
                email: email,
                token: otp
            }).unwrap();

            if (response?.success) {
                toast.success(response?.message);
                reset();
                router.push(`/new-password?email=${email}&token=${otp}`);

            } else {
                toast.error(response?.message);
            }
        } catch (error: any) {
            toast.error("Failed to verify otp");
        }
    };

    return (
        <div className="maxContainer my-12">
            <div className="w-full md:w-[464px] mx-auto border lg:p-[32px] md:p-[32px] py-[12px] px-4">
                <div className="space-y-1 text-center p-0 mb-10">
                    <h1 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%]">
                        OTP Verification
                    </h1>
                </div>
                <div className="p-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="otp"
                                className="text-[16px] font-normal text-[#4A4C56]"
                            >
                                OTP
                            </Label>

                            <InputOTP
                                maxLength={6}
                                value={otp}
                                onChange={(value) => setOtp(value)}
                            >
                                <InputOTPGroup className="w-full flex justify-between gap-2 md:gap-4">
                                    {[...Array(6)].map((_, i) => (
                                        <InputOTPSlot
                                            key={i}
                                            index={i}
                                            className="
          w-[40px] h-[50px] md:w-[50px] md:h-[60px]
          text-center text-lg md:text-xl font-medium
          border-2 border-gray-300 rounded-lg
          focus:border-blue-500 focus:ring-1 focus:ring-blue-500
          transition-all duration-200
        "
                                        />
                                    ))}
                                </InputOTPGroup>
                            </InputOTP>

                            {errors.otp && (
                                <p className="text-sm text-destructive">
                                    {errors.otp.message}
                                </p>
                            )}

                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#1F274B] cursor-pointer hover:bg-[#1F274B]/90 rounded-none !h-auto !leading-[100%]  lg:py-4 py-3 text-[#FFF] self-stretch text-[16px]"
                        >
                            Verify OTP
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
