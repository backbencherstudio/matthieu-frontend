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
// import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email(),
    phone: z.string().min(6, "Phone number required"),
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
    // resolver: zodResolver(formSchema),
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
  <div className="">
      <Card className=" border border-[#DFE1E7]  normal-case rounded-none">
      <CardHeader>
        <CardTitle className="text-[#1F274B] font-[Avenir] text-[24px] not-italic font-extrabold leading-[100%] uppercase px-[24px] pb-[]">
          Account Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-[24px]">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] h-[48px] pb-[8px]">First Name</FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input placeholder="Yasir abid" {...field} className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] h-[48px] pb-[8px]">Last Name</FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input placeholder="Rabbu" {...field}  className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"/>
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
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none pt-[16px] pb-[8px] ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] h-[48px] pb-[8px]">Email</FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input
                        type="email"
                        placeholder="arionadmin@gmail.com"
                        {...field}
                       className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none pt-[16px] pb-[8px]  ">
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px]  h-[48px] pb-[8px]">Phone</FormLabel>
                    <FormControl className="h-[48px] !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input placeholder="+330 612-345-678" {...field}  className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Change Password */}
            <h2 className="text-[#1F274B] text-[24px] not-italic font-extrabold leading-[100%] uppercase pt-[32px] pb-[24px]">
              Change Password
            </h2>

            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
                  <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] h-[48px] pb-[8px]">Current Password</FormLabel>
                  <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                    <Input
                      type="password"
                      placeholder="........."
                      {...field}
                     className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic  leading-[150%] tracking-[0.08px] font-bold"/>
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
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] h-[48px] pb-[8px]">New Password</FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input
                        type="password"
                        placeholder="......."
                        {...field}
                       className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"/>
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
                    <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] h-[48px] pb-[8px]">Confirm Password</FormLabel>
                    <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
                      <Input
                        type="password"
                        placeholder="........"
                        {...field}
                       className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"   />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end pt-[40px] pb-[24px]">
              <Button
                type="submit"
                className="bg-[#1F274B]  text-white  px-[32px]  rounded-none py-[20px]"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  </div>
  );
}
