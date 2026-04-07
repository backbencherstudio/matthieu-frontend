"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { usePaymentMutation } from "@/src/redux/client/payment/payment";
import { toast } from "sonner";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [createPaymentIntent] = usePaymentMutation();

  const [cardTitle, setCardTitle] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");

  const params = useSearchParams();
  const orderId = params.get("order_id");

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    if (!orderId) {
      console.error("Missing order_id in query params");
      setPaymentStatus("error");
      return;
    }

    setIsLoading(true);
    setPaymentStatus("processing");

    try {
      // 👉 1. Create Payment Intent
      const res = await createPaymentIntent({
        order_id: orderId,
      }).unwrap();

      const clientSecret = res?.data?.client_secret;

      // console.log("clientSecret --->", clientSecret);

      // 👉 2. Get Card Element
      const cardNumberElement = elements.getElement(CardNumberElement);
      if (!cardNumberElement) throw new Error("Card element not found");

      // 👉 3. Confirm Payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: cardTitle,
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        setPaymentStatus("error");
      } else if (result.paymentIntent?.status === "succeeded") {

        toast.success('Payment Success')


        setPaymentStatus("success");
      }
    } catch (err) {
      console.error(err);
      setPaymentStatus("error");
    } finally {
      setIsLoading(false);
    }
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
          className="w-full px-4 py-3 bg-[#F8FAFB] mt-2 focus:outline-none"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Stripe Card Elements */}
      <div>
        <div>
          <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
            Card Number
          </label>
          <div>
            <CardNumberElement
              options={cardElementOptions}
              className="w-full px-4 py-3.5 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
              Expire Date
            </label>
            <div className="w-full px-4 py-3.5 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] mt-2">
              <CardExpiryElement options={cardElementOptions} />
            </div>
          </div>

          <div>
            <label className="text-[16px] leading-[160%] text-[#4A4C56] tracking-[0.08px] normal-case">
              CVC
            </label>
            <div>
              <CardCvcElement
                options={cardElementOptions}
                className="w-full px-4 py-3.5 bg-[#F8FAFB] placeholder:text-[16px] placeholder:text-[#1D1F2C] placeholder:leading-[160%] placeholder:font-extrabold placeholder:tracking-[0.08px] mt-2"
              />
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
const PaymentDetails = () => {
  return (
    <div className="maxContainer lg:my-12 md:my-10 my-8">
      <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-6">
        <div className="border-[#DFE1E7] border-1 lg:p-8 p-6 xl:w-[65%] lg:w-full normal-case">
          <h2 className="text-[32px] font-extrabold text-[#1F274B] leading-[100%] normal-case">
            Payment Details
          </h2>

          <div>
            {/* Stripe Elements Provider */}
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
