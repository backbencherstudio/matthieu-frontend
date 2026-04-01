"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateUseSadlesAdminMutation } from "@/src/redux/admin/useSaddles/useSaddlesApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export enum ProductCategory {
  SADDLES = "SADDLES",
  TACK = "TACK",
  LEADLINE = "LEADLINE",
  USED = "USED",
}
export enum SubProductCategory {
  ATLAS = "ATLAS",
  ARION = "ARION",
  ATHENA = "ATHENA",
}

export enum Country {
  AMERICA = "USA",
  EUROPE = "EUROPE",
}

type Inputs = {
  name: string;
  description: string;
  seatSize: number;
  basePrice_usd: number;
  basePrice_eur: number;
  stockQuantity: number;
  category: ProductCategory;
  usedsaddlecategory: SubProductCategory;
  country: Country;
};

const AddUseSaadlesForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    setImages((prev) => [...prev, ...fileArray]);

    const previewArray = fileArray.map((file) => URL.createObjectURL(file));

    setImagePreviews((prev) => [...prev, ...previewArray]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const [createUseSadles, { isLoading }] =
    useCreateUseSadlesAdminMutation();

  const onSubmit = async (data: Inputs) => {
    try {
      const formData = new FormData();

      formData.append("title", data.name);
      formData.append("description", data.description || "");
      formData.append("seatSize", String(data.seatSize));
      formData.append("basePrice_usd", String(data.basePrice_usd));
      formData.append("basePrice_eur", String(data.basePrice_eur));
      formData.append("category", data.category);
      formData.append("usedsaddlecategory", data.usedsaddlecategory);
      formData.append("stockQuantity", String(data.stockQuantity));
      formData.append("country", data.country);

      // Append multiple images
      images.forEach((image) => {
        formData.append("images", image);
      });
      const response = await createUseSadles(formData);
      if (response?.data?.statusCode === 201) {
        toast.success(response?.data?.message);
        reset();
        router.push("/admin/use-saddles");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-extrabold text-primary-text mb-5">
          Add Saddles
        </h1>

        <div className="flex flex-col lg:gap-6 gap-4">
          {/* Title */}
          <div className="">
            <Label className="text-sm text-secondary-text mb-1">Title*</Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Title"
              {...register("name", { required: "Title is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Category*
              </Label>

              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-[4px] py-[23px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(ProductCategory).map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Used Saddle Category*
              </Label>

              <Controller
                name="usedsaddlecategory"
                control={control}
                rules={{ required: "Saddle Category is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-[4px] py-[23px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(SubProductCategory).map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.usedsaddlecategory && (
                <p className="text-red-500 text-sm">
                  {errors.usedsaddlecategory.message}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="">
            <Label className="text-sm text-secondary-text mb-1">
              Description
            </Label>
            <Textarea
              className="cmn-textarea"
              placeholder="Enter Description"
              {...register("description")}
            />
          </div>

          {/* seatSize */}
          <div className="grid grid-cols-3 gap-3">
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                USD Price
              </Label>
              <Input
                type="text"
                className="cmn-input"
                placeholder="Enter Price "
                {...register("basePrice_usd", {
                  required: "Price is required",
                })}
              />
              {errors.basePrice_usd && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.basePrice_usd.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                EUR Price
              </Label>
              <Input
                type="text"
                className="cmn-input"
                placeholder="Enter Price "
                {...register("basePrice_eur", {
                  required: "Price is required",
                })}
              />
              {errors.basePrice_eur && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.basePrice_eur.message}
                </p>
              )}
            </div>
            {/* Country Select - New Column */}
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Country
              </Label>
              <Controller
                name="country"
                control={control}
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-[4px] py-[23px] cursor-pointer">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={Country.AMERICA}>USA</SelectItem>
                      <SelectItem value={Country.EUROPE}>EUROPE</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>

          {/* Stock Quantity */}
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Stock Quantity*
              </Label>
              <Input
                type="text"
                className="cmn-input"
                placeholder="Enter Stock Quantity"
                {...register("stockQuantity", {
                  required: "Stock Quantity is required",
                })}
              />
              {errors.stockQuantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stockQuantity.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Seat Size
              </Label>
              <Input
                type="text"
                className="cmn-input"
                placeholder="Enter Size "
                {...register("seatSize", { required: "Size is required" })}
              />
              {errors.seatSize && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.seatSize.message}
                </p>
              )}
            </div>
          </div>

          {/* img upload  */}
          <div className="mb-4">
            <Label className="text-sm text-secondary-text mb-2 block">
              Upload Images
            </Label>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    src={preview}
                    className="w-full h-28 object-cover rounded border"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Add Button */}
              <label className="flex items-center justify-center cursor-pointer w-full h-28 bg-white rounded border border-dashed border-gray-400">
                <span className="text-sm text-gray-500">+ Add</span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="cmn-btn">
            {isLoading ? "Creating.." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUseSaadlesForm;
