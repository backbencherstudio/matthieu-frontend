"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  phone: z.string().min(6, "Phone number required"),
  company: z.string().optional(),
  streetAddress: z.string().optional(),
  apartment: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

export function Billing() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="pb-[48px] ">
      <Card className="max-w-3xl mx-auto mt-10 shadow-none border-none rounded-none normal-case ">
       <div className="border-[#DFE1E7] border-2 p-[32px]">
         <CardHeader className="border-none p-0">
          <CardTitle className="text-[#1F274B] font-[Avenir] text-[24px] not-italic font-extrabold leading-[100%]  p-[24px]">
            Billing Details
          </CardTitle>
        </CardHeader>

        <CardContent className="border-none rounded-none p-[24px] ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none ">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Yasir abid"
                          {...field}
                          className="text-[#1D1F2C] text-[16px] font-extrabold leading-[150%] tracking-[0.08px] py-[12px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Rabbu"
                          {...field}
                          className="text-[#1D1F2C] text-[16px] font-extrabold leading-[150%] tracking-[0.08px] py-[12px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="arionadmin@gmail.com"
                          {...field}
                          className="text-[#1D1F2C] text-[16px] font-extrabold leading-[150%] tracking-[0.08px] py-[12px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+330 612-345-678"
                          {...field}
                          className="text-[#1D1F2C] text-[16px] font-extrabold leading-[150%] tracking-[0.08px] py-[12px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="!h-auto border-none rounded-none ">
                    <FormLabel className="text-[#A5A5AB] text-center font-avenir text-[16px] font-extrabold leading-[150%] tracking-[0.08px] pb-[8px]">
                      Company name (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=""
                        className="text-[#A5A5AB] border border-[#DFE1E7] focus:outline-none focus:ring-0 focus:border-[#DFE1E7] text-[16px] font-extrabold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem className="!h-auto border-none rounded-none">
                    <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                      Street address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="House number and street name"
                        {...field}
                        className="text-[#A5A5AB] py-[12px] px-[16px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem className="!h-auto border-none rounded-none">
                    <FormControl>
                      <Input
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        {...field}
                        className="text-[#A5A5AB] py-[12px] px-[16px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none">
                      <FormLabel className="text-[#4A4C56] font-avenir text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        Town / City
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Paris"
                          {...field}
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none">
                      <FormLabel className="text-[#4A4C56] font-avenir text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        State
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="France"
                          {...field}
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="!h-auto border-none rounded-none">
                      <FormLabel className="text-[#4A4C56] font-avenir text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                        Zip code
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="75001"
                          {...field}
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

          <FormField
  control={form.control}
  name="country"
  render={({ field }) => (
    <FormItem className="!h-auto border-none rounded-none">
      <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
        Country / Region
      </FormLabel>
      <FormControl>
        <div className="relative">
          <select
            {...field}
            className="appearance-none w-full text-[#1D1F2C] py-[12px] px-[16px] text-[16px] font-bold leading-[150%] tracking-[0.08px] border-none rounded-none bg-[#F8FAFB] cursor-pointer focus:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]"
          >
           
          </select>

          <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
            <ArrowDownIcon />
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


              <div className="space-y-[8px]">
                <div className="flex gap-[8px] items-start">
                  <Checkbox className="border-[1px] border-solid border-[#DFE1E7] rounded-[3px]" />
                  <p className="text-[#4A4C56] text-[14px] leading-[160%]">
                    Sign me up to receive email updates and news (optional)
                  </p>
                </div>
                <div className="flex gap-[8px] items-start">
                  <Checkbox className="border-[1px] border-solid border-[#DFE1E7] rounded-[3px]" />
                  <p className="text-[#4A4C56] text-[14px] leading-[160%]">
                    Sign me up to receive SMS updates and news (optional)
                  </p>
                </div>
                <p className="text-[#1D1F2C]  text-[14px] font-semibold leading-[100%] pt-[18px]">
                  By checking this box and entering your phone number above. you consent to receive marketing text
messages (e.g. promos. cart reminders) from HC & Company at the number provided. including
messages sent by auto dialer. Consent is not a condition of any purchase. Message and data rates may
apply. Message frequency varies. You can unsubscribe at any time by replying STOP or clicking the
unsubscribe link (where available). Review our Privacy Policy and Terms of Service for more information.
                </p>
              </div>

              <div className="flex justify-end pt-[40px] pb-[24px]">
                <Button
                  type="submit"
                  className="bg-[#1F274B] text-white px-[32px] py-[20px] rounded-none border-none shadow-none"
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
       </div>
      </Card>
    </div>
  );
}
