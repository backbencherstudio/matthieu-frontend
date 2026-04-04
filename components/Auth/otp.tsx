"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/src/redux/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

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
    const [signup] = useLoginMutation();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await signup(data);
            console.log(response, "response")
            if (response?.data?.success) {
                localStorage.setItem("token", response?.data?.authorization?.token);

                toast.success(response?.data?.message);
                reset();

                router.push(
                    response?.data?.type === "admin"
                        ? "/admin"
                        : "/my-account/dashboard"
                );

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

                            <InputOTP id="otp" maxLength={6} defaultValue="" containerClassName="gap-10 w-full">
                                <InputOTPGroup className="w-full justify-between">
                                    <InputOTPSlot className="h-12 flex-1 " index={0} {...register("otp", { required: "OTP is required" })} />
                                    <InputOTPSlot className="h-12 flex-1 " index={1} {...register("otp", { required: "OTP is required" })} />
                                    <InputOTPSlot className="h-12 flex-1 " index={2} {...register("otp", { required: "OTP is required" })} />
                                    <InputOTPSlot className="h-12 flex-1 " index={3} {...register("otp", { required: "OTP is required" })} />
                                    <InputOTPSlot className="h-12 flex-1 " index={4} {...register("otp", { required: "OTP is required" })} />
                                    <InputOTPSlot className="h-12 flex-1 " index={5} {...register("otp", { required: "OTP is required" })} />
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
