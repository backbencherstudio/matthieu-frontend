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
import { useCreateUseSadlesMutation } from "@/src/redux/admin/useSaddles/useSaddlesApi";
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

type Inputs = {
  name: string;
  description: string;
  seatSize: number;
  basePrice: number;
  stockQuantity: number;
  category: ProductCategory;
  usedsaddlecategory: SubProductCategory;
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

  const [createUseSadles, { isLoading }] = useCreateUseSadlesMutation();

  const onSubmit = async (data: Inputs) => {
    try {
      const formData = new FormData();

      formData.append("title", data.name);
      formData.append("description", data.description || "");
      formData.append("seatSize", String(data.seatSize));
      formData.append("basePrice", String(data.basePrice));
      formData.append("category", data.category);
      formData.append("usedsaddlecategory", data.usedsaddlecategory);
      formData.append("stockQuantity", String(data.stockQuantity));

      // Append multiple images
      images.forEach((image) => {
        formData.append("images", image);
      });
      const response = await createUseSadles(formData);
      if (response?.data?.statusCode === 201) {
        toast.success(response?.data?.message);
        reset();
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

        {/* Title */}
        <div className="mb-3">
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
                  <SelectTrigger className="w-full py-5">
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
              <p className="text-red-500 text-sm">{errors.category.message}</p>
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
                  <SelectTrigger className="w-full py-5">
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
        <div className="mb-3">
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
        <div className="grid grid-cols-2 gap-3">
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
          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">Price</Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Price "
              {...register("basePrice", { required: "Price is required" })}
            />
            {errors.basePrice && (
              <p className="text-red-500 text-sm mt-1">
                {errors.basePrice.message}
              </p>
            )}
          </div>
        </div>

        {/* Stock Quantity */}
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

        {/* Submit Button */}
        <div>
          <button type="submit" className="cmn-btn">
            {isLoading ? "Creating.." : "Add Saddle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUseSaadlesForm;
