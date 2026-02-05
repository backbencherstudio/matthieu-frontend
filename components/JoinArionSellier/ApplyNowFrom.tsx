"use client";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useJobApplyMutation } from "@/src/redux/client/job-apply/JobApplyApi";
import { toast } from "sonner";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  town: string;
  state: string;
  experience: string;
  message: string;
};

const MAX_FILES = 2;
const MAX_FILE_SIZE = 6 * 1024 * 1024; // 6MB

export function ApplyNowForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      town: "",
      state: "",
      experience: "",
      message: "",
    },
  });

  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    register("experience", { required: "Experience is required" });
  }, [register]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.size <= MAX_FILE_SIZE,
    );

    setFiles((prev) => [...prev, ...droppedFiles].slice(0, MAX_FILES));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files).filter(
      (file) => file.size <= MAX_FILE_SIZE,
    );

    setFiles((prev) => [...prev, ...selectedFiles].slice(0, MAX_FILES));
  };

  const [jobApply, { isLoading }] = useJobApplyMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();

      // Text fields
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("town", values.town);
      formData.append("state", values.state);
      formData.append("experience", values.experience);
      formData.append("message", values.message);

      // Files
      files.forEach((file) => {
        formData.append("files", file);
      });
      const response = await jobApply(formData);
      if (response?.data?.success) {
        reset();
        setFiles([]);
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div>
      <div className="pt-[60px]">
        <h1 className="text-[#1F274B] text-center text-[48px] font-extrabold">
          Apply Now!
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="maxContainer py-[48px]"
      >
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[18px]">
          <div>
            <Input
              placeholder="FIRST NAME"
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 2, message: "Min 2 characters" },
              })}
              className="bg-[#F8FAFB] h-[50px] rounded-none"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="LAST NAME"
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 2, message: "Min 2 characters" },
              })}
              className="bg-[#F8FAFB] h-[50px] rounded-none"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pb-[18px]">
          <div>
            <Input
              placeholder="EMAIL"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className="bg-[#F8FAFB] h-[50px] rounded-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="PHONE NUMBER"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 8, message: "Min 8 digits" },
                maxLength: { value: 15, message: "Max 15 digits" },
                pattern: {
                  value: /^\d+$/,
                  message: "Only numbers allowed",
                },
              })}
              onChange={(e) =>
                setValue("phone", e.target.value.replace(/\D/g, ""))
              }
              className="bg-[#F8FAFB] h-[50px] rounded-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Town + State */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pb-[18px]">
          <div>
            <Input
              placeholder="TOWN"
              {...register("town", { required: "Town is required" })}
              className="bg-[#F8FAFB] h-[50px] rounded-none"
            />
            {errors.town && (
              <p className="text-red-500 text-sm">{errors.town.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="STATE"
              {...register("state", { required: "State is required" })}
              className="bg-[#F8FAFB] h-[50px] rounded-none"
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>
        </div>

        {/* Experience Select */}
        <div className="pb-[16px]">
          <Select
            value={watch("experience")}
            onValueChange={(value) =>
              setValue("experience", value, {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className="bg-[#F8FAFB] rounded-none w-full py-6">
              <SelectValue placeholder="EXPERIENCE" />
            </SelectTrigger>

            <SelectContent className="rounded-none bg-[#F8FAFB]">
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>

          {errors.experience && (
            <p className="text-red-500 text-sm">{errors.experience.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="pb-[16px]">
          <Textarea
            placeholder="MESSAGE"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 2, message: "Min 2 characters" },
            })}
            className="bg-[#F8FAFB] rounded-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Drag & Drop Upload */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "w-full border border-dashed flex flex-col items-center bg-[#F8FAFB] mt-[18px]",
            isDragging ? "border-primary" : "border-muted-foreground/30",
          )}
        >
          <label className="flex flex-col items-center py-6 cursor-pointer">
            <Upload className="w-5 h-5 mb-2" />
            <span className="font-bold">Drag & Drop Files Here</span>
            <span className="text-sm">PDF, DOC, PNG (Max 6MB)</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.png"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {files.length > 0 && (
            <div className="grid grid-cols-2 gap-4 px-4 pb-4 w-full">
              {files.map((file, idx) => {
                const isImage = file.type.startsWith("image/");
                const url = isImage ? URL.createObjectURL(file) : null;

                return (
                  <div key={idx} className="relative border p-2">
                    {isImage ? (
                      <img
                        src={url!}
                        className="h-[80px] w-full object-cover"
                        onLoad={() => URL.revokeObjectURL(url!)}
                      />
                    ) : (
                      <p className="text-sm break-all">{file.name}</p>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setFiles((prev) => prev.filter((_, i) => i !== idx))
                      }
                      className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="w-full flex justify-end px-4 pb-2">
            <p className="text-sm">
              {files.length} of {MAX_FILES}
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-[48px]">
          <button
            type="submit"
            className="bg-[#1F274B] px-[32px] py-[12px] text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
