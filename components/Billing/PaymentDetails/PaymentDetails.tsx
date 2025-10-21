
"use client";

import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import CartsDetails from "@/components/ClientComponents/ProductDetailsClient/CartsDetails";


export function PaymentDetails() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            cardNumber: "",
            expired: "",
            cvv: "",
            carnInfoSave: "",
        },
    });

    const onSubmit = (values) => {
        console.log("✅ Submitted:", values);
        reset();
    };

    return (
        <div className="maxContainer lg:my-12 md:my-10 my-8">
            <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-6">
                <div className="border-[#DFE1E7] border-1 lg:p-8 p-6 xl:w-[65%] lg:w-full normal-case">
                    <h2 className="text-[#1F274B]  text-[24px] md:text-[28px] lg:text-[32px]  not-italic font-extrabold leading-[100%] md:pb-[32px] pb-6">
                        Payment Details
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* First + Last Name */}
                        <div className="grid grid-cols-1 ">
                            <div className="flex flex-col gap-2">
                                <label className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                                    Account Holder Name
                                </label>
                                <input
                                    placeholder="Yasir abid"
                                    {...register("name", { required: "First name is required" })}
                                    className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B] "
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs font-light normal-case mt-1">{errors.name.message}*</p>
                                )}
                            </div>

                        </div>


                        {/* Company */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#4A4C56] font-avenir text-[16px] leading-[150%] tracking-[0.08px]">
                                Card Number
                            </label>
                            <input
                                {...register("cardNumber")}
                                placeholder="1234 5678 9000 0000"
                                className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
                            />
                        </div>



                        {/* City, State, Zip */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] ">
                                    Expire Date
                                </label>
                                <input
                                    placeholder="4/30"
                                    {...register("expired")}
                                    className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                                   CVV
                                </label>
                                <input
                                    placeholder="345"
                                    {...register("cvv")}
                                    className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
                                />
                            </div>

                        </div>


                        {/* Checkboxes */}
                        <div className="space-y-[8px] mb-0">
                            <div className="flex gap-[8px] items-start">
                                <Checkbox className="border-[1px] border-solid border-[#DFE1E7] rounded-[3px]" />
                                <p className="text-[#4A4C56] text-[14px] leading-[160%]">
                                    Save Card Infctmations
                                </p>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end md:mt-8 mt-6">
                            <button
                                type="submit"
                                className="bg-[#1F274B] cursor-pointer text-white md:px-8 px-6 md:py-4 py-3 rounded-none border-none shadow-none"
                            >
                                Payment Now
                            </button>
                        </div>
                    </form>
                </div>

                <div className="border xl:w-[33%] md:w-full w-full px-6 py-6">
                    <CartsDetails checkoutButton={false} />
                </div>
            </div>
        </div>
    );
}



