"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email(),
    phone: z
      .string()
      .regex(/^\d{6,15}$/, "Phone number must contain only numbers (6–15 digits)"),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function Settings() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted ✅", values);
    form.reset();
  };

  return (
<div className="">
      <div className="p-4 md:p-[24px] border border-bg-[#DFE1E7]">
   
        <p className="text-[#1F274B] text-[20px] px-0  md:text-[24px] not-italic font-extrabold leading-[100%] uppercase ">
          Account Settings
        </p>
   
      <CardContent className="normal-case px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-[24px] ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px]  ">
                      First Name
                    </FormLabel>
                    <div className="">
                      <FormControl className="!h-auto  !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                        <Input
                          placeholder="Yasir abid"
                          {...field}
                          required
                          className="text-[#1D1F2C] py-[12px] px-[16px]  text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-3 md:mt-6">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] ">
                      Last Name
                    </FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input
                        placeholder="Rabbu"
                        {...field}
                        required
                        className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-[16px] ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px]   ">
                      Email
                    </FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input
                        type="email"
                        placeholder="arionadmin@gmail.com"
                        {...field}
                        required
                        className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ✅ Phone number now only allows numbers */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-3 md:mt-[16px]">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] ">
                      Phone
                    </FormLabel>
                    <FormControl className="h-[48px] !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input
                        type="tel"
                        inputMode="numeric"
                        placeholder="330612345678"
                        {...field}
                        required
                        onChange={(e) => {
                          const onlyNums = e.target.value.replace(/\D/g, "");
                          field.onChange(onlyNums);
                        }}
                        className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Change Password */}
            <h2 className="text-[#1F274B] text-[20px] md:text-[24px] not-italic font-extrabold leading-[100%] uppercase mt-[32px] mb-[24px]">
              Change Password
            </h2>

            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
                  <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] pb-[8px] ">
                    Current Password
                  </FormLabel>
                  <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]  ">
                    <Input
                      type="password"
                      placeholder="••••••••••"
                      {...field}
                      required
                      className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic leading-[150%] tracking-[0.08px] font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] mt-[16px] mb-[8px]">
                      New Password
                    </FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB] ">
                      <Input
                        type="password"
                        placeholder="••••••••••"
                        {...field}
                        required
                        className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] mt-0 md:mt-[16px] mb-[8px]">
                      Confirm Password
                    </FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB] py-[12px] pt-[16px]">
                      <Input
                        type="password"
                        placeholder="••••••••••"
                        {...field}
                        required
                        className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end mt-[40px] ">
              <Button
                type="submit"
                className="bg-[#1F274B] cursor-pointer  text-white px-4 md:px-[32px]  rounded-none py-[20px]"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </div>
</div>
  );
}
