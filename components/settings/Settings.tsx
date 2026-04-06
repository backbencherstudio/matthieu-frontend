"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

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
import { CardContent } from "@/components/ui/card";

import { useChangePasswordMutation } from "@/src/redux/client/settings/changePassApi";
import { useUpdateProfileMutation } from "@/src/redux/client/settings/updateProfileApi";
import { useGetUserQuery } from "@/src/redux/client/settings/userApi";

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().email(),
    phone: z
      .string()
      .regex(/^\d{6,15}$/, "Phone number must contain only numbers"),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Settings() {
  const [actionType, setActionType] = useState<"profile" | "password">(
    "profile"
  );

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

  const { data: userData, isLoading: userLoading } = useGetUserQuery();
  
  const [changePassword, { isLoading: passLoading }] = useChangePasswordMutation();

  const [updateProfile, { isLoading: profileLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (userData?.success) {
      const name = userData.data.name || "";
      const [firstName, lastName] = name.split(" ");

form.reset({
  firstName: userData.data.first_name || "",
  lastName: userData.data.last_name || "",
  email: userData.data.email || "",
  phone: userData.data.phone_number?.replace(/\D/g, "") || "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});
    }
  }, [userData, form]);

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    if (actionType === "profile") {
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName || "",
        email: values.email,
        phone_number: values.phone,
      };

      await updateProfile(payload).unwrap();
      toast.success("Profile updated successfully");
    }

    if (actionType === "password") {
      if (values.newPassword !== values.confirmPassword) {
        form.setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }

      const payload = {
        old_password: values.currentPassword,
        new_password: values.newPassword,
        confirm_password: values.confirmPassword,
      };

      await changePassword(payload).unwrap();

      form.setValue("currentPassword", "");
      form.setValue("newPassword", "");
      form.setValue("confirmPassword", "");

      toast.success("Password changed successfully");
    }
  } catch (error: any) {
    console.error(error);
    toast.error(error?.data?.message?.message || "Something went wrong");
  }
};

  if (userLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div>
      <div className="p-4 md:p-[24px] border border-bg-[#DFE1E7]">
        <p className="text-[#1F274B] text-[20px] md:text-[24px] font-extrabold uppercase">
          Account Settings
        </p>

        <CardContent className="normal-case px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              {/* PROFILE */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="mt-[24px]">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal">
                        First Name
                      </FormLabel>
                      <FormControl className="bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px] focus-visible:ring-ring/50">
                        <Input
                          {...field}
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px]"
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
                    <FormItem className="mt-3 md:mt-6">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal">
                        Last Name
                      </FormLabel>
                      <FormControl className="bg-[#F8FAFB] border-none rounded-none">
                        <Input
                          {...field}
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-[16px]">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal">
                        Email
                      </FormLabel>
                      <FormControl className="bg-[#F8FAFB] border-none rounded-none">
                        <Input
                          {...field}
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mt-3 md:mt-[16px]">
                      <FormLabel className="text-[#4A4C56] text-[16px] font-normal">
                        Phone
                      </FormLabel>
                      <FormControl className="bg-[#F8FAFB] border-none rounded-none">
                        <Input
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.value.replace(/\D/g, ""))
                          }
                          className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* PROFILE BUTTON */}
              <div className="flex justify-end mt-[40px]">
                <Button
                  type="submit"
                  onClick={() => setActionType("profile")}
                  className="bg-[#1F274B] text-white px-4 md:px-[32px] rounded-none py-[20px]"
                >
                  Save Profile Changes
                </Button>
              </div>

              {/* PASSWORD */}
              <h2 className="text-[#1F274B] text-[20px] md:text-[24px] font-extrabold uppercase mt-[32px] mb-[24px]">
                Change Password
              </h2>

              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#4A4C56] text-[16px]">
                      Current Password
                    </FormLabel>
                    <FormControl className="bg-[#F8FAFB] border-none rounded-none">
                      <Input
                        type="password"
                        {...field}
                        className="py-[12px] px-[16px]"
                        placeholder="Enter Current Password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#4A4C56] text-[16px] mt-[16px]">
                        New Password
                      </FormLabel>
                      <FormControl className="bg-[#F8FAFB] border-none rounded-none">
                        <Input
                          type="password"
                          {...field}
                          className="py-[12px] px-[16px]"
                          placeholder="Enter New Password"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#4A4C56] text-[16px] mt-[16px]">
                        Confirm Password
                      </FormLabel>
                      <FormControl className="bg-[#F8FAFB] border-none rounded-none">
                        <Input
                          type="password"
                          {...field}
                          className="py-[12px] px-[16px]"
                          placeholder="Enter New Password Again"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* PASSWORD BUTTON */}
              <div className="flex justify-end mt-[40px]">
                <Button
                  type="submit"
                  onClick={() => setActionType("password")}
                  disabled={passLoading}
                  className="bg-[#1F274B] text-white px-4 md:px-[32px] rounded-none py-[20px]"
                >
                  {passLoading ? "Saving..." : "Change Password"}
                </Button>
              </div>

            </form>
          </Form>
        </CardContent>
      </div>
    </div>
  );
}


















// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const formSchema = z
//   .object({
//     firstName: z.string().min(1, "First name is required"),
//     lastName: z.string().min(1, "Last name is required"),
//     email: z.string().email(),
//     phone: z
//       .string()
//       .regex(/^\d{6,15}$/, "Phone number must contain only numbers (6–15 digits)"),
//     currentPassword: z.string().optional(),
//     newPassword: z.string().optional(),
//     confirmPassword: z.string().optional(),
//   })
//   .refine((data) => data.newPassword === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// export default function Settings(){
//   const form = useForm<z.infer<typeof formSchema>>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       currentPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log("Form Submitted ✅", values);
//     form.reset();
//   };

//   return (
// <div className="">
//       <div className="p-4 md:p-[24px] border border-bg-[#DFE1E7]">
   
//         <p className="text-[#1F274B] text-[20px] px-0  md:text-[24px] not-italic font-extrabold leading-[100%] uppercase ">
//           Account Settings
//         </p>
   
//       <CardContent className="normal-case px-0">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="">
//             {/* Personal Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
//               <FormField
//                 control={form.control}
//                 name="firstName"
//                 render={({ field }) => (
//                   <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-[24px] ">
//                     <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px]  ">
//                       First Name
//                     </FormLabel>
//                     <div className="">
//                       <FormControl className="!h-auto  !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
//                         <Input
//                           placeholder="Yasir abid"
//                           {...field}
//                           required
//                           className="text-[#1D1F2C] py-[12px] px-[16px]  text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </div>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="lastName"
//                 render={({ field }) => (
//                   <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-3 md:mt-6">
//                     <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] ">
//                       Last Name
//                     </FormLabel>
//                     <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
//                       <Input
//                         placeholder="Rabbu"
//                         {...field}
//                         required
//                         className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-[16px] ">
//                     <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px]   ">
//                       Email
//                     </FormLabel>
//                     <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
//                       <Input
//                         type="email"
//                         placeholder="arionadmin@gmail.com"
//                         {...field}
//                         required
//                         className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* ✅ Phone number now only allows numbers */}
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none mt-3 md:mt-[16px]">
//                     <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] ">
//                       Phone
//                     </FormLabel>
//                     <FormControl className="h-[48px] !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]">
//                       <Input
//                         type="tel"
//                         inputMode="numeric"
//                         placeholder="330612345678"
//                         {...field}
//                         required
//                         onChange={(e) => {
//                           const onlyNums = e.target.value.replace(/\D/g, "");
//                           field.onChange(onlyNums);
//                         }}
//                         className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             {/* Change Password */}
//             <h2 className="text-[#1F274B] text-[20px] md:text-[24px] not-italic font-extrabold leading-[100%] uppercase mt-[32px] mb-[24px]">
//               Change Password
//             </h2>

//             <FormField
//               control={form.control}
//               name="currentPassword"
//               render={({ field }) => (
//                 <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
//                   <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] ">
//                     Current Password
//                   </FormLabel>
//                   <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB]  ">
//                     <Input
//                       type="password"
//                       placeholder="••••••••••"
//                       {...field}
//                       required
//                       className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic leading-[150%] tracking-[0.08px] font-bold"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <FormField
//                 control={form.control}
//                 name="newPassword"
//                 render={({ field }) => (
//                   <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
//                     <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] mt-[16px] ">
//                       New Password
//                     </FormLabel>
//                     <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB] ">
//                       <Input
//                         type="password"
//                         placeholder="••••••••••"
//                         {...field}
//                         required
//                         className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px] "
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="confirmPassword"
//                 render={({ field }) => (
//                   <FormItem className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] border-none rounded-none ">
//                     <FormLabel className="text-[#4A4C56] text-[16px] not-italic font-normal leading-[160%] tracking-[0.08px] mt-0 md:mt-[16px] ">
//                       Confirm Password
//                     </FormLabel>
//                     <FormControl className="!h-auto !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none border-none bg-[#F8FAFB] py-[12px] pt-[16px]">
//                       <Input
//                         type="password"
//                         placeholder="••••••••••"
//                         {...field}
//                         required
//                         className="text-[#1D1F2C] py-[12px] px-[16px] text-[16px] not-italic font-normal leading-[150%] tracking-[0.08px]"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="flex justify-end mt-[40px] ">
//               <Button
//                 type="submit"
//                 className="bg-[#1F274B] cursor-pointer  text-white px-4 md:px-[32px]  rounded-none py-[20px]"
//               >
//                 Save Changes
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </CardContent>
//     </div>
// </div>
//   );
// }
