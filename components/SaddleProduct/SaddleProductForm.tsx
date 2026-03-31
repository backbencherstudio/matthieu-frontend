"use client";

import { useCreateProductMutation } from "@/src/redux/admin/saddleProduct/saddleProduct";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
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
  price_usd: string;
  price_eur: string;
  header_description: string;
  category: string;
  subcategory: string;
  country: string;
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
enum countryItem {
  USA = "USA",
  EUROPE = "EUROPE",
}

export default function SaddleProductForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [leatherInput, setLeatherInput] = useState("");
  const [leatherTags, setLeatherTags] = useState<string[]>([]);

  const [colorInput, setColorInput] = useState("");
  const [colorTags, setColorTags] = useState<string[]>([]);

  const [pipingInput, setPipingInput] = useState("");
  const [pipingTags, setPipingTags] = useState<string[]>([]);

  const [images, setImages] = useState<File[]>([]);

  const addTag = (
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setTags: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const value = inputValue.trim();
    if (!value) return;

    setTags((prev) => {
      if (prev.includes(value)) return prev;
      return [...prev, value];
    });
    setInputValue("");
  };

  const removeTag = (
    index: number,
    setTags: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
  };
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const onSubmit = async (data: Inputs) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("header_title", data.header_title);
      formData.append("header_description", data.header_description);
      formData.append("description", data.description || "");
      formData.append("price_usd", data.price_usd);
      formData.append("price_eur", data.price_eur);
      formData.append("category", data.category);
      formData.append("subcategory", data.subcategory);
      formData.append("country", data.country);

      colorTags.forEach((item) => {
        formData.append("colors", item);
      });

      pipingTags.forEach((item) => {
        formData.append("piping_color", item);
      });

      leatherTags.forEach((item) => {
        formData.append("leather_type", item);
      });

      images.forEach((file) => {
        formData.append("images", file);
      });

      const result = await createProduct(formData);
      if (result?.data?.success) {
        toast.success(result?.data?.message);
        reset();
        setLeatherTags([]);
        setColorTags([]);
        setPipingTags([]);
        setImages([]);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-extrabold text-primary-text mb-5">
          Add Saddle Product
        </h1>

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

        <div className="grid grid-cols-2 gap-x-3 mb-3">
          <div>
            <Label className="text-sm text-secondary-text mb-1">
              Price USD
            </Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter USD Price"
              {...register("price_usd", {
                required: "Price USD is required",
              })}
            />
            {errors.price_usd && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price_usd.message}
              </p>
            )}
          </div>

          <div>
            <Label className="text-sm text-secondary-text mb-1">
              Price EUR
            </Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter EUR Price"
              {...register("price_eur", {
                required: "Price EUR is required",
              })}
            />
            {errors.price_eur && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price_eur.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Leather Type
          </Label>
          <div className="flex gap-2">
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Leather Type"
              value={leatherInput}
              onChange={(e) => setLeatherInput(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                addTag(leatherInput, setLeatherInput, setLeatherTags)
              }
              className="px-4 bg-[#111927] text-white rounded-md cursor-pointer"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {leatherTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(index, setLeatherTags)}
                  className="text-red-500 ml-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Colors</Label>
          <div className="flex gap-2">
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Color"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
            />
            <button
              type="button"
              onClick={() => addTag(colorInput, setColorInput, setColorTags)}
              className="px-4 bg-[#111927] text-white rounded-md cursor-pointer"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {colorTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(index, setColorTags)}
                  className="text-red-500 ml-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Piping Color
          </Label>
          <div className="flex gap-2">
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Piping Color"
              value={pipingInput}
              onChange={(e) => setPipingInput(e.target.value)}
            />
            <button
              type="button"
              onClick={() => addTag(pipingInput, setPipingInput, setPipingTags)}
              className="px-4 bg-[#111927] text-white rounded-md cursor-pointer"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {pipingTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(index, setPipingTags)}
                  className="text-red-500 ml-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
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

        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Country*</Label>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full py-5">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(countryItem).map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
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

        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Images*</Label>
          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
          <div className="mt-2 text-sm text-gray-500">
            {images.length > 0 &&
              images.map((file, index) => <p key={index}>{file.name}</p>)}
          </div>
        </div>

        <div>
          <button type="submit" className="cmn-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Add Saddle Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
