"use client";

import React, { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51SDMM6EbRBgxQBnKhhbdORl3dN1inJygwuDNSTGyxKfbv7ClnLoPBVzH7A859X5vPy8OINFnaLzUSXnCdrgJbwJu00EDdd4Nck"
);

import CartsDetails from "@/components/ClientComponents/ProductDetailsClient/CartsDetails";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
} from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";

const PaymentForm = ({ stripe }: { stripe: any }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setPaymentStatus("processing");

    // Here you would normally handle the actual payment process
    setTimeout(() => {
      setPaymentStatus("success");
      setIsLoading(false);
    }, 2000);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        padding: "12px",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Card Title */}
      <div className="mt-8">
        <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
          Account Holder Name
        </label>
        <input
          type="text"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          className="w-full px-4 py-3 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] mt-2"
          placeholder="Yasir Abed Rabbu"
          required
        />
      </div>

      {/* Stripe Card Elements */}
      <div>
        <div>
          <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
            Card Number
          </label>
          <div className="w-full px-4 py-3 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] mt-2">
            <CardNumberElement options={cardElementOptions} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
              Expire Date
            </label>
            <div className=" mt-2">
              <CardExpiryElement className="w-full border-transparent focus:outline-2 px-4 py-3.5 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] " options={cardElementOptions} />
            </div>
          </div>

          <div>
            <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
              CVC
            </label>
            <div className="w-full px-4 py-3 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] mt-2">
              <CardCvcElement options={cardElementOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Save Card Information Toggle */}
      <div className="flex items-center space-x-3">
        <Checkbox
          id="save-card"
          checked={saveCard}
          onCheckedChange={(checked) => setSaveCard(checked === true)}
          className="data-[state=checked]:bg-[#1D1F2C] data-[state=checked]:border-[#1D1F2C]"
        />
        <label
          htmlFor="save-card"
          className="text-[14px] leading-[100%] font-extrabold normal-case"
        >
          Save Your Card Information
        </label>
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-end">
        <button
          type={paymentStatus === "error" ? "button" : "submit"}
          disabled={isLoading || paymentStatus === "success"}
          className="px-8 py-4 bg-[#1F274B] text-[#FFF] text-lg leading-[132%] font-extrabold cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing Payment...
            </>
          ) : paymentStatus === "success" ? (
            "Payment Successful!"
          ) : paymentStatus === "error" ? (
            "Try Again"
          ) : (
            "Payment Now"
          )}
        </button>
      </div>
    </form>
  );
};

// Main CheckoutForm component
const PaymentDetails = ({ stripe }: { stripe: any }) => {
  return (
    <div className="maxContainer lg:my-12 md:my-10 my-8">
      <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-6">
        <div className="border-[#DFE1E7] border-1 lg:p-8 p-6 xl:w-[65%] lg:w-full normal-case">
          <div className="flex items-center justify-between">
            <h2 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%] normal-case">
              Payment Details
            </h2>
            <div className="border border-[#4C526F] px-4 py-2 cursor-pointer">
              <button className="text-[16px] text-[#4C526F] leading-[100%] cursor-pointer">
                Pay with Google Pay
              </button>
            </div>
          </div>

          <div>
            {/* Stripe Elements Provider */}
            <Elements stripe={stripePromise}>
              <PaymentForm stripe={stripe} />
            </Elements>
          </div>
        </div>
        <div className="border xl:w-[33%] md:w-full w-full px-6 py-6 h-full">
          <div className="text-[#1F274B] lg:text-[32px] md:text-[28px] text-2xl font-bold leading-[100%] normal-case  mb-4">
            Your Cart
          </div>
          <CartsDetails checkoutButton={false} />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;

// "use client";

// import { useForm } from "react-hook-form";
// import { Checkbox } from "@/components/ui/checkbox";
// import CartsDetails from "@/components/ClientComponents/ProductDetailsClient/CartsDetails";

// export function PaymentDetails() {
//     const { register, handleSubmit, reset, formState: { errors } } = useForm({
//         defaultValues: {
//             name: "",
//             cardNumber: "",
//             expired: "",
//             cvv: "",
//             carnInfoSave: "",
//         },
//     });

//     const onSubmit = (values) => {
//         console.log("✅ Submitted:", values);
//         reset();
//     };

//     return (
//         <div className="maxContainer lg:my-12 md:my-10 my-8">
//             <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-6">
//                 <div className="border-[#DFE1E7] border-1 lg:p-8 p-6 xl:w-[65%] lg:w-full normal-case">
//                     <h2 className="text-[#1F274B]  text-[24px] md:text-[28px] lg:text-[32px]  not-italic font-extrabold leading-[100%] md:pb-[32px] pb-6">
//                         Payment Details
//                     </h2>

//                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                         {/* First + Last Name */}
//                         <div className="grid grid-cols-1 ">
//                             <div className="flex flex-col gap-2">
//                                 <label className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
//                                     Account Holder Name
//                                 </label>
//                                 <input
//                                     placeholder="Yasir abid"
//                                     {...register("name", { required: "First name is required" })}
//                                     className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3
//     bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
//     focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B] "
//                                 />
//                                 {errors.name && (
//                                     <p className="text-red-400 text-xs font-light normal-case mt-1">{errors.name.message}*</p>
//                                 )}
//                             </div>

//                         </div>

//                         {/* Company */}
//                         <div className="flex flex-col gap-2">
//                             <label className="text-[#4A4C56] font-avenir text-[16px] leading-[150%] tracking-[0.08px]">
//                                 Card Number
//                             </label>
//                             <input
//                                 {...register("cardNumber")}
//                                 placeholder="1234 5678 9000 0000"
//                                 className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3
//     bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
//     focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
//                             />
//                         </div>

//                         {/* City, State, Zip */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
//                             <div className="flex flex-col gap-2">
//                                 <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] ">
//                                     Expire Date
//                                 </label>
//                                 <input
//                                     placeholder="4/30"
//                                     {...register("expired")}
//                                     className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3
//     bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
//     focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
//                                 />
//                             </div>

//                             <div className="flex flex-col gap-2">
//                                 <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
//                                     CVV
//                                 </label>
//                                 <input
//                                     placeholder="345"
//                                     {...register("cvv")}
//                                     className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3
//     bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
//     focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
//                                 />
//                             </div>

//                         </div>

//                         {/* Checkboxes */}
//                         <div className="space-y-[8px] mb-0">
//                             <div className="flex gap-[8px] items-start">
//                                 <Checkbox className="border-[1px] border-solid border-[#DFE1E7] rounded-[3px]" />
//                                 <p className="text-[#4A4C56] text-[14px] leading-[160%]">
//                                     Save Card Infctmations
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Submit */}
//                         <div className="flex justify-end md:mt-8 mt-6">
//                             <button
//                                 type="submit"
//                                 className="bg-[#1F274B] cursor-pointer text-white md:px-8 px-6 md:py-4 py-3 rounded-none border-none shadow-none"
//                             >
//                                 Payment Now
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="border xl:w-[33%] md:w-full w-full px-6 py-6 h-full">
//                     <div className="text-[#1F274B] lg:text-[32px] md:text-[28px] text-2xl font-bold leading-[100%] normal-case  mb-4">Your Cart</div>
//                     <CartsDetails checkoutButton={false} />
//                 </div>
//             </div>
//         </div>
//     );
// }
