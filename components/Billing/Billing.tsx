
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import CartsDetails from "../ClientComponents/ProductDetailsClient/CartsDetails";

export function Billing() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      streetAddress: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const onSubmit = (values) => {
    console.log("✅ Submitted:", values);
    reset();
  };

  return (
    <div className="maxContainer lg:my-12 md:my-10 my-8">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="border-[#DFE1E7] border-1 lg:p-8 p-6 lg:w-[65.55%] normal-case">
          <h2 className="text-[#1F274B]  text-[24px] md:text-[28px] lg:text-[32px]  not-italic font-extrabold leading-[100%] md:pb-[32px] pb-6">
            Billing Details
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                  First Name
                </label>
                <input
                  placeholder="Yasir abid"
                  {...register("firstName", { required: "First name is required" })}
                  className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B] "
                />
                {errors.firstName && (
                  <p className="text-red-400 text-xs font-light normal-case mt-1">{errors.firstName.message}*</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                  Last Name
                </label>
                <input
                  placeholder="Rabbu"
                  {...register("lastName")}
                  className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-xs font-light normal-case mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="arionadmin@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs font-light normal-case mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                  Phone
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="+330 612-345-678"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^\d{6,15}$/,
                      message: "Phone number must be 6–15 digits only"
                    }
                  })}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, "");
                    e.target.value = onlyNums;
                  }}
                  className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs font-light normal-case mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4A4C56] font-avenir text-[16px] leading-[150%] tracking-[0.08px]">
                Company name (optional)
              </label>
              <input
                {...register("company")}
                placeholder=""
                className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
              />
            </div>

            {/* Street Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] ">
                Street address
              </label>
              <input
                placeholder="House number and street name"
                {...register("streetAddress")}
                className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
              />
            {/* Apartment */}
              <input
                placeholder="Apartment, suite, unit, etc. (optional)"
                {...register("apartment")}
                className="!text-[#1D1F2C] text-[16px] !leading-[150%] tracking-[0.08px] md:py-[12px] py-2.5 md:px-4 px-3  
    bg-[#F8FAFB] border-none rounded-none h-auto font-extrabold
    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
              />
            </div>


            {/* City, State, Zip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              <div className="flex flex-col gap-2">
                <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] ">
                  Town / City
                </label>
                <input
                  placeholder="Paris"
                  {...register("city")}
                  className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                  State
                </label>
                <input
                  placeholder="France"
                  {...register("state")}
                  className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] ">
                  Zip code
                </label>
                <input
                  placeholder="75001"
                  {...register("zipCode")}
                  className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
                Country / Region
              </label>

              <div className="relative">
                <select
                  {...register("country")}
                  className="appearance-none w-full text-[#1D1F2C] py-[12px] pl-[16px] pr-[40px] text-[16px] font-bold leading-[150%] tracking-[0.08px] border-none rounded-none bg-[#F8FAFB] cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
                <ArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F274B]" />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-[8px] mb-0">
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
            </div>

            {/* Submit */}
            <div className="flex justify-end md:mt-8 mt-6">
              <button
                type="submit"
                className="bg-[#1F274B] cursor-pointer text-white md:px-8 px-6 md:py-4 py-3 rounded-none border-none shadow-none"
              >
                Next
              </button>
            </div>
          </form>
        </div>

        <div className="border lg:w-[32.22%] w-full px-6 py-6">
          <CartsDetails checkoutButton = {false} />
        </div>
      </div>
    </div>
  );
}


// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
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
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import ArrowDownIcon from "../Icons/ArrowDownIcon";

// const formSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z
//     .string()
//     .regex(/^\d{6,15}$/, "Phone number must be 6–15 digits only"),
//   company: z.string().optional(),
//   streetAddress: z.string().optional(),
//   apartment: z.string().optional(),
//   city: z.string().optional(),
//   state: z.string().optional(),
//   zipCode: z.string().optional(),
//   country: z.string().optional(),
// });

// export function Billing() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       company: "",
//       streetAddress: "",
//       apartment: "",
//       city: "",
//       state: "",
//       zipCode: "",
//       country: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log("✅ Submitted:", values);
//     form.reset(); // ✅ Reset form after submit
//   };

//   return (
//     <div className="pb-[48px]">
//       <Card className="max-w-3xl mx-auto mt-10 shadow-none border-none rounded-none normal-case">
//         <div className="border-[#DFE1E7] border-2 p-[32px]">
//           <CardTitle className="text-[#1F274B] font-[Avenir] text-[24px] not-italic font-extrabold leading-[100%] pb-[32px]">
//             Billing Details
//           </CardTitle>

//           <CardContent className="border-none rounded-none">
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 {/* First + Last Name */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none ">
//                         <FormLabel className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
//                           First Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Yasir abid"
//                             {...field}
//                             className="!text-[#1D1F2C] text-[16px]  leading-[150%] tracking-[0.08px] py-[12px] px-4 h-[48px] mt-[8px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none ">
//                         <FormLabel className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
//                           Last Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Rabbu"
//                             {...field}
//                             className="!text-[#1D1F2C] text-[16px]  leading-[150%] tracking-[0.08px] py-[12px] px-4 h-[48px] mt-[8px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Email + Phone */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none ">
//                         <FormLabel className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
//                           Email
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             type="email"
//                             placeholder="arionadmin@gmail.com"
//                             {...field}
//                             className="text-[#1D1F2C] text-[16px] leading-[150%] tracking-[0.08px] py-[12px] px-4 h-[48px] mt-[8px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none ">
//                         <FormLabel className="!text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px]">
//                           Phone
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             type="tel"
//                             inputMode="numeric"
//                             placeholder="+330 612-345-678"
//                             {...field}
//                             onChange={(e) => {
//                               const onlyNums = e.target.value.replace(/\D/g, "");
//                               field.onChange(onlyNums);
//                             }}
//                             className="text-[#1D1F2C] text-[16px]  leading-[150%] tracking-[0.08px] py-[12px] px-4 h-[48px] mt-[8px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Company */}
//                 <FormField
//                   control={form.control}
//                   name="company"
//                   render={({ field }) => (
//                     <FormItem className="!h-auto border-none rounded-none ">
//                       <FormLabel className="text-[#4A4C56] text-center font-avenir text-[16px] leading-[150%] tracking-[0.08px]">
//                         Company name (optional)
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           placeholder=""
//                           className="border px-4 h-[48px] mt-[8px] text-[16px] font-extrabold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-black text-[14px]" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Street Address */}
//                 <FormField
//                   control={form.control}
//                   name="streetAddress"
//                   render={({ field }) => (
//                     <FormItem className="!h-auto border-none rounded-none">
//                       <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
//                         Street address
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="House number and street name"
//                           {...field}
//                           className="py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-black text-[14px]" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Apartment */}
//                 <FormField
//                   control={form.control}
//                   name="apartment"
//                   render={({ field }) => (
//                     <FormItem className="!h-auto border-none rounded-none">
//                       <FormControl>
//                         <Input
//                           placeholder="Apartment, suite, unit, etc. (optional)"
//                           {...field}
//                           className="py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-black text-[14px]" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* City, State, Zip */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
//                   <FormField
//                     control={form.control}
//                     name="city"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none">
//                         <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
//                           Town / City
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Paris"
//                             {...field}
//                             className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="state"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none">
//                         <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
//                           State
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="France"
//                             {...field}
//                             className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="zipCode"
//                     render={({ field }) => (
//                       <FormItem className="!h-auto border-none rounded-none">
//                         <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
//                           Zip code
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="75001"
//                             {...field}
//                             className="text-[#1D1F2C] py-[12px] px-4 h-[48px] text-[16px] font-bold leading-[150%] tracking-[0.08px] bg-[#F8FAFB] border-none rounded-none focus-visible:ring-[1px]"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-black text-[14px]" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Country */}
//                 <FormField
//                   control={form.control}
//                   name="country"
//                   render={({ field }) => (
//                     <FormItem className="!h-auto border-none rounded-none">
//                       <FormLabel className="text-[#4A4C56] text-[16px] font-normal leading-[160%] tracking-[0.08px] pb-[8px]">
//                         Country / Region
//                       </FormLabel>

//                       <div className="relative">
//                         <select
//                           {...field}
//                           className="appearance-none w-full text-[#1D1F2C] py-[12px] pl-[16px] pr-[40px] text-[16px] font-bold leading-[150%] tracking-[0.08px] border-none rounded-none bg-[#F8FAFB] cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1F274B]"
//                         >
//                           <option value="">Select a country</option>
//                           <option value="us">United States</option>
//                           <option value="ca">Canada</option>
//                           <option value="uk">United Kingdom</option>
//                         </select>
//                         <ArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F274B]" />
//                       </div>
//                       <FormMessage className="text-black text-[14px]" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Checkboxes */}
//                 <div className="space-y-[8px]">
//                   <div className="flex gap-[8px] items-start">
//                     <Checkbox className="border-[1px] border-solid border-[#DFE1E7] rounded-[3px]" />
//                     <p className="text-[#4A4C56] text-[14px] leading-[160%]">
//                       Sign me up to receive email updates and news (optional)
//                     </p>
//                   </div>
//                   <div className="flex gap-[8px] items-start">
//                     <Checkbox className="border-[1px] border-solid border-[#DFE1E7] rounded-[3px]" />
//                     <p className="text-[#4A4C56] text-[14px] leading-[160%]">
//                       Sign me up to receive SMS updates and news (optional)
//                     </p>
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <div className="flex justify-end pt-[40px] pb-[24px]">
//                   <Button
//                     type="submit"
//                     className="bg-[#1F274B] cursor-pointer text-white px-[32px] py-[20px] rounded-none border-none shadow-none"
//                   >
//                     Next
//                   </Button>
//                 </div>
//               </form>
//             </Form>
//           </CardContent>
//         </div>
//       </Card>
//     </div>
//   );
// }


