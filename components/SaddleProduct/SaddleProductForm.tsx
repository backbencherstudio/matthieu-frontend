"use client";

import { Label } from "@radix-ui/react-label";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

type Inputs = {
  name: string;
  header_title: string;
  description: string;
  header_description: string;
  price: number;
  color: string;
  piping_color: string;
  category: string;
  subcategory: string;
  stockQuantity: number;
};

enum productcategory {
  SADDLES = "SADDLES",
  TACK = "TACK",
  LEADLINE = "LEADLINE",
  USED = "USED",
}

enum saddleSubcategory {
  ATLAS = "ATLAS",
  ARION = "ARION",
  ATHENA = "ATHENA",
}

/* ✅ Named Colors */
const namedColors = [
  { name: "Black", value: "#000000" },
  { name: "Brown", value: "#8B4513" },
  { name: "Dark Brown", value: "#5C4033" },
  { name: "Tan", value: "#D2B48C" },
  { name: "Chestnut", value: "#954535" },
  { name: "White", value: "#FFFFFF" },
];

export default function SaddleProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      color: "#000000",
      piping_color: "#000000",
    },
  });

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-extrabold text-primary-text mb-5">
          Add Saddle Product
        </h1>

        {/* Name */}
        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Name *</Label>
          <Input
            type="text"
            className="cmn-input"
            placeholder="Enter Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Header Title */}
        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Header Title *
          </Label>
          <Input
            type="text"
            className="cmn-input"
            placeholder="Enter Header Title"
            {...register("header_title", {
              required: "Header Title is required",
            })}
          />
          {errors.header_title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.header_title.message}
            </p>
          )}
        </div>

        {/* Header Description */}
        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Header Description *
          </Label>
          <Input
            type="text"
            className="cmn-input"
            placeholder="Enter Header Description"
            {...register("header_description", {
              required: "Header Description is required",
            })}
          />
          {errors.header_description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.header_description.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Description
          </Label>
          <Textarea
            className="cmn-textarea"
            placeholder="Enter description"
            {...register("description")}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-3">
          {/* Leather Color */}
          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Leather Color *
            </Label>

            <Controller
              name="color"
              control={control}
              rules={{ required: "Leather Color is required" }}
              render={({ field }) => (
                <div className="flex items-center gap-3">
                  {/* Color Picker */}
                  <input
                    type="color"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-14 h-10 p-1 border rounded cursor-pointer"
                  />

                  {/* HEX Input */}
                  <Input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="cmn-input"
                  />
                </div>
              )}
            />

            {errors.color && (
              <p className="text-red-500 text-sm mt-1">
                {errors.color.message}
              </p>
            )}
          </div>

          {/* Piping Color */}
          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Piping Color *
            </Label>

            <Controller
              name="piping_color"
              control={control}
              rules={{ required: "Piping Color is required" }}
              render={({ field }) => (
                <div className="flex items-center gap-3">
                  {/* Color Picker */}
                  <input
                    type="color"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-14 h-10 p-1 border rounded cursor-pointer"
                  />

                  {/* HEX Input */}
                  <Input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="cmn-input"
                  />
                </div>
              )}
            />

            {errors.piping_color && (
              <p className="text-red-500 text-sm mt-1">
                {errors.piping_color.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
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
                    {Object.values(productcategory).map((item) => (
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
              name="subcategory"
              control={control}
              rules={{ required: "Saddle Category is required" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full py-5">
                    <SelectValue placeholder="Select Sub Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(saddleSubcategory).map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.subcategory && (
              <p className="text-red-500 text-sm">
                {errors.subcategory.message}
              </p>
            )}
          </div>
        </div>

        {/* Stock Quantity */}
        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Stock Quantity *
          </Label>
          <Input
            type="number"
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

        <div>
          <button type="submit" className="cmn-btn">
            Add Saddle Product
          </button>
        </div>
      </form>
    </div>
  );
}
