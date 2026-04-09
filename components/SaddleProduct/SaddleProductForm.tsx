"use client";

import { useCreateProductMutation } from "@/src/redux/admin/saddleProduct/saddleProduct";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
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
  // LEADLINE = "LEADLINE",
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
  const [pipingColorInput, setPipingColorInput] = useState("");
  const [colorTags, setColorTags] = useState<string[]>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showPipingColorPicker, setShowPipingColorPicker] = useState(false);
  const [pipingTags, setPipingTags] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Add this state at the top of your component
  const [colorName, setColorName] = useState("Navy");
  const [pipingColorName, setPipingColorName] = useState("Burnt Orange");

  const PRESET_COLORS = [
    { hex: "#1F274B", name: "Navy" },
    { hex: "#111927", name: "Charcoal" },
    { hex: "#6B7280", name: "Slate" },
    { hex: "#D85A30", name: "Burnt Orange" },
    { hex: "#FE5000", name: "Orange" },
    { hex: "#c6a35d", name: "Gold" },
    { hex: "#8B6914", name: "Tan" },
    { hex: "#F5F0E8", name: "Cream" },
    { hex: "#1D9E75", name: "Teal" },
    { hex: "#185FA5", name: "Blue" },
    { hex: "#534AB7", name: "Purple" },
    { hex: "#D4537E", name: "Pink" },
    { hex: "#374151", name: "Dark Gray" },
    { hex: "#E5E7EB", name: "Light Gray" },
  ];

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

  const handleColorChange = (color: any) => {
    setColorInput(color.hex);
  };

  const handlePipingColorChange = (color: any) => {
    setPipingColorInput(color.hex);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setImages((prev) => [...prev, ...files]);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const router = useRouter();

  const [createProduct, { isLoading }] = useCreateProductMutation();

  // const onSubmit = async (data: Inputs) => {
  //   try {
  //     const formData = new FormData();

  //     formData.append("name", data.name);
  //     formData.append("header_title", data.header_title);
  //     formData.append("header_description", data.header_description);
  //     formData.append("description", data.description || "");
  //     formData.append("price_usd", data.price_usd);
  //     formData.append("price_eur", data.price_eur);
  //     formData.append("category", data.category);
  //     formData.append("subcategory", data.subcategory);
  //     formData.append("country", data.country);
  //     leatherTags.forEach((item) => formData.append("leather_type", item));
  //     colorTags.forEach((item) => formData.append("colors", item));
  //     pipingTags.forEach((item) => formData.append("piping_color", item));
  //     images.forEach((file) => formData.append("images", file));

  //     const result = await createProduct(formData);
  //     if (result?.data?.success) {
  //       toast.success(result?.data?.message);
  //       router.push("/admin/saddle-product");
  //       reset();
  //       setLeatherTags([]);
  //       setColorTags([]);
  //       setPipingTags([]);
  //       setImages([]);
  //       setImagePreviews([]);
  //     }
  //   } catch (error) {
  //     console.error("Submit error:", error);
  //   }
  // };

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

      // === Send Arrays Correctly ===
      leatherTags.forEach((item) => formData.append("leather_type[]", item)); // Note: leather_type[]
      colorTags.forEach((item) => formData.append("colors[]", item)); // Note: colors[]
      pipingTags.forEach((item) => formData.append("piping_color[]", item)); // Note: piping_color[]

      // Append images
      images.forEach((file) => formData.append("images", file));

      const result = await createProduct(formData);
      if (result?.data?.success) {
        toast.success(result?.data?.message || "Product added successfully");
        router.push("/admin/saddle-product");
        reset();

        // Clear all tags and images after success
        setLeatherTags([]);
        setColorTags([]);
        setPipingTags([]);
        setImages([]);
        setImagePreviews([]);
      } else if (result.error) {
        const errorMsg =
          (result.error as any)?.data?.message?.message ||
          (result.error as any)?.data?.message ||
          "Failed to create saddle product";

        toast.error(errorMsg);
      }
    } catch (error: any) {
      console.error("Submit error:", error);
      toast.error(error?.data?.message?.message || "Failed to add product");
    }
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

        {/* Price */}
        <div className="grid grid-cols-2 gap-x-3 mb-3">
          <div>
            <Label className="text-sm text-secondary-text mb-1">
              Price USD *
            </Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter USD Price"
              {...register("price_usd", { required: "Price USD is required" })}
            />
            {errors.price_usd && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price_usd.message}
              </p>
            )}
          </div>
          <div>
            <Label className="text-sm text-secondary-text mb-1">
              Price EUR *
            </Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter EUR Price"
              {...register("price_eur", { required: "Price EUR is required" })}
            />
            {errors.price_eur && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price_eur.message}
              </p>
            )}
          </div>
        </div>

        {/* Leather Type */}
        {/* <div className="mb-3">
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
        </div> */}

        {/* ── LEATHER TYPE ── */}
        <div className="mb-4 bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-[13px] font-semibold text-[#1F274B] mb-1">
            Leather Type
          </p>
          <p className="text-xs text-gray-400 mb-3">
            Type a leather type and click Add
          </p>
          <div className="flex gap-2">
            <input
              className="flex-1 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-[#1F274B] outline-none focus:border-[#1F274B] placeholder:text-gray-300 transition-colors"
              placeholder="e.g. Full Grain, Nubuck, Suede..."
              value={leatherInput}
              onChange={(e) => setLeatherInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag(leatherInput, setLeatherInput, setLeatherTags);
                }
              }}
            />
            <button
              type="button"
              onClick={() =>
                addTag(leatherInput, setLeatherInput, setLeatherTags)
              }
              className="bg-[#1F274B] hover:bg-[#2d3a5e] text-white px-5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              + Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {leatherTags.length === 0 && (
              <span className="text-xs text-gray-300 italic">
                No leather types added yet
              </span>
            )}
            {leatherTags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-[#1F274B] rounded-lg px-3 py-1.5 text-sm font-medium"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(i, setLeatherTags)}
                  className="text-gray-400 hover:text-gray-700 text-xs cursor-pointer"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* ── COLOR PICKER BLOCK (reuse for both Colors and Piping Color) ── */}
        {(["Colors", "Piping Color"] as const).map((label) => {
          const isColor = label === "Colors";
          const currentHex = isColor ? colorInput : pipingColorInput;
          const currentName = isColor ? colorName : pipingColorName;
          const tags = isColor ? colorTags : pipingTags;
          const setHex = isColor ? setColorInput : setPipingColorInput;
          const setName = isColor ? setColorName : setPipingColorName;
          const setTags = isColor ? setColorTags : setPipingTags;

          return (
            <div
              key={label}
              className="mb-4 bg-white border border-gray-200 rounded-xl p-5"
            >
              <p className="text-[13px] font-semibold text-[#1F274B] mb-1">
                {label}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Pick from presets or choose a custom color, then click Add
              </p>

              {/* Step 1 — Swatches */}
              <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-2">
                1 — Choose a color
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {PRESET_COLORS.map(({ hex, name }) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => {
                      setHex(hex);
                      setName(name);
                    }}
                    className={`w-8 h-8 rounded-lg border transition-transform hover:scale-110 cursor-pointer ${currentHex === hex ? "ring-2 ring-[#1F274B] ring-offset-2 scale-110" : "border-black/10"}`}
                    style={{ background: hex }}
                    title={name}
                  />
                ))}
                {/* Custom picker */}
                <label
                  className="w-8 h-8 rounded-lg border border-dashed border-gray-300 hover:border-[#1F274B] flex items-center justify-center cursor-pointer transition-colors"
                  title="Custom color"
                >
                  {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#9ca3af" strokeWidth="1.2"/><path d="M7 4v6M4 7h6" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round"/></svg> */}
                  <FaPlusCircle />
                  <input
                    type="color"
                    className="sr-only"
                    value={currentHex}
                    onChange={(e) => {
                      setHex(e.target.value);
                      setName("Custom");
                    }}
                  />
                </label>
              </div>

              {/* Step 2 — Preview */}
              <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-2">
                2 — Selected
              </p>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 mb-3">
                <div
                  className="w-6 h-6 rounded-md border border-black/10 flex-shrink-0"
                  style={{ background: currentHex }}
                />
                <span className="text-sm font-semibold text-[#1F274B]">
                  {currentName}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {currentHex}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!tags.find((t) => t === currentHex))
                    setTags((prev) => [...prev, currentHex]);
                }}
                className="w-full bg-[#1F274B] hover:bg-[#2d3a5e] text-white py-2.5 rounded-lg text-sm font-semibold transition-colors mb-3 cursor-pointer"
              >
                + Add This Color
              </button>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.length === 0 && (
                  <span className="text-xs text-gray-300 italic">
                    No colors added yet
                  </span>
                )}
                {tags.map((hex, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-black/5 bg-gray-50 text-sm"
                  >
                    <div
                      className="w-4 h-4 rounded border border-black/10 flex-shrink-0"
                      style={{ background: hex }}
                    />
                    <span className="text-xs font-mono text-[#1F274B]">
                      {hex}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeTag(i, setTags)}
                      className="text-gray-400 hover:text-gray-700 text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Colors */}
        {/* <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Colors</Label>
          <div className="flex gap-2">
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Color"
              readOnly
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
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="mt-2 px-4 py-1 bg-[#111927] text-white rounded-md cursor-pointer"
          >
            {showColorPicker ? "Close Color Picker" : "Pick a Color"}
          </button>
          {showColorPicker && (
            <div className="mt-2">
              <SketchPicker
                color={colorInput}
                onChangeComplete={handleColorChange}
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {colorTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-white"
                style={{ backgroundColor: tag }}
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(index, setColorTags)}
                  className="ml-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Piping Color */}
        {/* <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">
            Piping Color
          </Label>
          <div className="flex gap-2">
            <Input
              type="text"
              className="cmn-input"
              readOnly
              placeholder="Enter Piping Color"
              value={pipingColorInput}
              onChange={(e) => setPipingColorInput(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                addTag(pipingColorInput, setPipingColorInput, setPipingTags)
              }
              className="px-4 bg-[#111927] text-white rounded-md cursor-pointer"
            >
              Add
            </button>
          </div>
          <button
            type="button"
            onClick={() => setShowPipingColorPicker(!showPipingColorPicker)}
            className="mt-2 px-4 py-1 bg-[#111927] text-white rounded-md cursor-pointer"
          >
            {showPipingColorPicker
              ? "Close Piping Color Picker"
              : "Pick a Piping Color"}
          </button>
          {showPipingColorPicker && (
            <div className="mt-2">
              <SketchPicker
                color={pipingColorInput}
                onChangeComplete={handlePipingColorChange}
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {pipingTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-white"
                style={{ backgroundColor: tag }}
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(index, setPipingTags)}
                  className="ml-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Category & Subcategory */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Category *
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
              Saddle Category *
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

        {/* Country */}
        <div className="mb-3">
          <Label className="text-sm text-secondary-text mb-1">Country *</Label>
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

        {/* Images */}
        <div className="mb-4">
          <Label className="text-sm text-secondary-text mb-2 block">
            Images *
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`preview-${index}`}
                  className="w-full h-28 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Add Button */}
            <label className="flex items-center justify-center cursor-pointer w-full h-28 bg-white rounded border border-dashed border-gray-400 hover:bg-gray-50 transition">
              <span className="text-sm text-gray-500">+ Add</span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {/* Submit */}
        <div>
          <button type="submit" className="cmn-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Add Saddle Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
