"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
// import { zodnResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ✅ Validation Schema
const formSchema = z.object({
  username: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastname: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
 phonenumber: z
  .string()
  .regex(/^\d{8,15}$/, { message: "Phone number must be 8–15 digits and only numbers." }),
  town: z.string().min(2, { message: "Town must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  experience: z.string().min(2, { message: "Experience field cannot be empty." }),
  message: z.string().min(2, { message: "Message must be at least 2 characters." }),
});

export function ApplyNowForm() {
  // ✅ React Hook Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      lastname: "",
      email: "",
      phonenumber:"" ,
      town: "",
      state: "",
      experience: "",
      message: "",
    },
  });

  // ✅ File Upload State
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  // ✅ Drag & Drop Handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles].slice(0, 2));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...selectedFiles].slice(0, 2));
  };

  // ✅ Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values, files });
     form.reset();
  setFiles([]);
  }

  return (
    <div>
      <div className="pt-[60px]">
        <h1 className="text-[#1F274B] text-center text-[48px] font-extrabold leading-[100%] tracking-[0.96px] capitalize">
          Apply Now!
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="maxContainer py-[48px]">
          {/* Row 1: First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-[16px]">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="uppercase ">
                  <FormControl>
                    <Input
                      placeholder="FIRST NAME"
                      {...field}
                        required
                      className="bg-[#F8FAFB]  text-sm file:h-0 py-3.5 !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="bg-[#F8FAFB] uppercase ">
                  <FormControl>
                    <Input
                      placeholder="LAST NAME"
                      {...field}
                        required
                      className=" text-sm  file:h-0 py-3.5  !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 md:grid-row-2 gap-6 pb-[16px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="uppercase ">
                  <FormControl className="bg-[#F8FAFB]  text-sm  file:h-0 py-3.5 !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]">
                    <Input placeholder="EMAIL" {...field}   required type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem className="uppercase ">
                  <FormControl className="bg-[#F8FAFB]  text-sm  file:h-0 py-3.5  !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]">
                    <Input placeholder="PHONE NUMBER" {...field}  type="tel"  onChange={(e) => {
  const value = e.target.value.replace(/\D/g, "");
  form.setValue("phonenumber", value, { shouldValidate: true });
}}  required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3: Town + State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-[16px]">
            <FormField
              control={form.control}
              name="town"
              render={({ field }) => (
                <FormItem className="uppercase ">
                  <FormControl className="bg-[#F8FAFB]  text-sm  file:h-0 py-3.5  !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]">
                    <Input placeholder="TOWN" {...field}   required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="uppercase ">
                  <FormControl className="bg-[#F8FAFB]  text-sm  file:h-0 py-3.5 !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]">
                    <Input placeholder="STATE" {...field}   required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Experience */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="pb-[16px] uppercase ">
                <FormControl className="bg-[#F8FAFB] text-sm  file:h-0 py-3.5 !leading-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] rounded-none px-4 pt-5 pb-4 border-none h-[50px]">
                  <Input placeholder="EXPERIENCE" {...field}   required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
   <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className=" uppercase">
              <FormControl>
                <Textarea
                  placeholder="MESSAGE"
                  {...field}
                    required
                  className="bg-[#F8FAFB] px-[16px]n pt-5 pb-[90px] md:pb-[100px] lg:pb-[120px]  border-none  rounded-none leading-5 focus-visible:ring-1  "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



          {/* ✅ Drag & Drop Upload */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "w-full border border-dashed   flex flex-col items-center justify-center cursor-pointer transition-all bg-[#F8FAFB]  mt-[16px] h-[140px]",
              isDragging
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/30"
            )}
          >
            <label className="flex flex-col items-center justify-center cursor-pointer">
              <Upload className="w-5 h-5 mb-1 text-muted-foreground" />
              <span className="text-[#4C526F] font-[Avenir] text-[20px] font-extrabold leading-[100%]  normal-case">
                Drag & Drop Files Here
              </span>
              <span className="text-[#4C526F] font-[Avenir] text-[14px] font-normal leading-[100%] normal-case pt-[8px]">
                Format: PDF, Doc, PNG (Max: 6 mb)
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.png"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <div className="w-full flex justify-end px-4">
              <p className="text-[#4C526F] text-[14px] normal-case">0 of 2</p>
            </div>

          </div>
          <div className="pt-[48px] ">
            <button
              type="submit"
              className="bg-[#1F274B] py-[12px] px-[32px]  text-white flex justify-center items-center cursor-pointer">
              Submit
            </button>
          </div>


        </form>

      </Form>
    </div>
  );
}
