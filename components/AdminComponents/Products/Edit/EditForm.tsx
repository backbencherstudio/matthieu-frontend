"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, X } from "lucide-react";
import GalleryIcon from "@/components/Icons/AdminIcon/GalleryIcon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  SubmitHandler,
  useForm,
  useFieldArray,
  Controller,
} from "react-hook-form";
import TrashIcon from "@/components/Icons/AdminIcon/TrashIcon";

type Inputs = {
  name: string;
  description: string;
  benefits: string;
  guide: string;
  variants: {
    color: string;
    size: string;
    price: string;
    stock_qty: number | string;
  }[];
};

export default function EditForm() {
  const productVariant = [
    {
      color: "Black",
      size: "Pony",
      price: "22",
      stock_qty: "20",
      image: "/images/blog-04.png",
    },
    {
      color: "Brown",
      size: "Cob",
      price: "12",
      stock_qty: "10",
      image: "/images/blog-04.png",
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      variants: [
        {
          color: "",
          size: "",
          price: "",
          stock_qty: "",
        },
      ],
    },
  });

  const {
    fields: variantFields,
    append: appendVariant,
    remove: removeVariant,
  } = useFieldArray({
    control,
    name: "variants",
  });

  const handleRemoveVariant = (index) => {
    removeVariant(index);

    setImagePreviews((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  // Show Image Preview
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageFiles, setImageFiles] = useState<(File | null)[][]>([]);

  useEffect(() => {
    setImagePreviews((prev) => {
      if (prev.length < variantFields.length) {
        const newPreviews = [...prev];

        for (let i = prev.length; i < variantFields.length; i++) {
          newPreviews.push([null, null, null, null]);
        }

        return newPreviews;
      }

      return prev;
    });
  }, [variantFields.length]);

  const showImagePreview = (e, variantIndex, imgIndex) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setImagePreviews((prev) => {
      const updated = [...prev];
      updated[variantIndex][imgIndex] = url;
      return updated;
    });

    // Store actual file for submission
    setImageFiles((prev) => {
      const updated = [...prev];
      if (!updated[variantIndex])
        updated[variantIndex] = [null, null, null, null];
      updated[variantIndex][imgIndex] = file;
      return updated;
    });
  };

  const removeImage = (variantIndex, imgIndex) => {
    setImagePreviews((prev) => {
      const updated = [...prev];
      updated[variantIndex][imgIndex] = null;
      return updated;
    });
  };

  // Handle New Color
  const [colorDialogOpen, setColorDialogOpen] = useState<boolean[]>([]);
  const [newColor, setNewColor] = useState("");
  const [colorOptions, setColorOptions] = useState(["Black", "Brown"]);

  useEffect(() => {
    setColorDialogOpen(variantFields.map(() => false));
  }, [variantFields]);

  const openColorDialog = (variantIndex: number) => {
    setColorDialogOpen((prev) => {
      const updated = [...prev];
      updated[variantIndex] = true;
      return updated;
    });
  };

  const closeColorDialog = (variantIndex: number) => {
    setColorDialogOpen((prev) => {
      const updated = [...prev];
      updated[variantIndex] = false;
      return updated;
    });
  };

  const addColor = (variantIndex) => {
    const trimmed = newColor.trim();
    if (!trimmed) return;

    setColorOptions((prev) => {
      const updated = prev.includes(trimmed) ? prev : [...prev, trimmed];

      Promise.resolve().then(() => {
        setValue(`variants.${variantIndex}.color`, trimmed, {
          shouldDirty: true,
          shouldValidate: true,
        });
      });

      return updated;
    });

    closeColorDialog(variantIndex);
    setNewColor("");
  };

  // Handle New Size
  const [sizeDialogOpen, setSizeDialogOpen] = useState<boolean[]>([]);
  const [newSize, setNewSize] = useState("");
  const [sizeOptions, setSizeOptions] = useState([
    "Pony",
    "Cob",
    "Full",
    "Oversize",
  ]);

  useEffect(() => {
    setSizeDialogOpen(variantFields.map(() => false));
  }, [variantFields]);

  const openSizeDialog = (variantIndex: number) => {
    setSizeDialogOpen((prev) => {
      const updated = [...prev];
      updated[variantIndex] = true;
      return updated;
    });
  };

  const closeSizeDialog = (variantIndex: number) => {
    setSizeDialogOpen((prev) => {
      const updated = [...prev];
      updated[variantIndex] = false;
      return updated;
    });
  };

  const addSize = (variantIndex) => {
    const trimmed = newSize.trim();
    if (!trimmed) return;

    setSizeOptions((prev) => {
      const updated = prev.includes(trimmed) ? prev : [...prev, trimmed];

      Promise.resolve().then(() => {
        setValue(`variants.${variantIndex}.size`, trimmed, {
          shouldDirty: true,
          shouldValidate: true,
        });
      });

      return updated;
    });

    closeSizeDialog(variantIndex);
    setNewSize("");
  };

  // Form Submit
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log("Full Data - ", data);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key !== "variants") {
        formData.append(key, data[key]);
      }
    });

    data.variants.forEach((item: any, i: number) => {
      formData.append(`variants[${i}][color]`, item.color);
      formData.append(`variants[${i}][size]`, item.size);
      formData.append(`variants[${i}][price]`, item.price);
      formData.append(`variants[${i}][stock_qty]`, item.stock_qty);
      imageFiles[i]?.forEach((file, imgIndex) => {
        if (file) {
          formData.append(`variants[${i}][images][${imgIndex}]`, file);
        }
      });
    });

    // Printing Form Data
    /* for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(key, value); // Full File object
      } else {
        console.log(key, value); // Normal string
      }
    } */
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl font-extrabold text-primary-text">
            Edit Product
          </h1>
          <button className="cmn-btn">Update Product</button>
        </div>

        {/* Product Detail Inputs */}
        <div className="mt-4">
          <h1 className="text-xl font-extrabold text-primary-text mb-4">
            Product Detail
          </h1>

          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Product Name*
            </Label>
            <Input
              type="text"
              className="cmn-input"
              placeholder="Enter Product Name"
              defaultValue="Arion's Double Noseband Bridle"
              {...register(`name`, {
                required: "Product name is required",
              })}
            />
            {errors.name && <p className="error-msg">{errors.name.message}</p>}
          </div>

          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Description
            </Label>
            <Textarea
              className="cmn-textarea"
              placeholder="Enter Description"
              {...register(`description`)}
            >
              Arion's Double Noseband Bridle combines the effect of a regular
              noseband and a drop noseband.
            </Textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-y-3 gap-x-5">
            <div>
              <Label className="text-sm text-secondary-text mb-1">
                Benefits
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Benefits"
                {...register(`benefits`)}
              >
                Arion's Double Noseband Bridle combines the effect of a regular
                noseband and a drop noseband.
              </Textarea>
            </div>
            <div>
              <Label className="text-sm text-secondary-text mb-1">
                Leather Care Guide
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Leather Care Guide"
                {...register(`guide`)}
              >
                Arion's Double Noseband Bridle combines the effect of a regular
                noseband and a drop noseband.
              </Textarea>
            </div>
          </div>
        </div>

        {/* Product Variations Wrapper */}
        {variantFields.map((item, index) => (
          <div className="bg-[#F8FAFB] p-4 mt-4 relative" key={item.id}>
            <div className="flex flex-wrap justify-between gap-3">
              <h2 className="text-xl font-extrabold text-primary-text">
                Product Variation {index + 1}
              </h2>
              {index > 0 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="cmn-btn !px-4 !rounded-[6px]"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="cmn-btn !px-4 !rounded-[6px] !bg-error-bg !text-error-text"
                    onClick={() => handleRemoveVariant(index)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              {/* Left */}
              <div>
                <div className="grid sm:grid-cols-2 gap-x-3">
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Color*
                    </Label>
                    <Controller
                      name={`variants.${index}.color`}
                      control={control}
                      rules={{
                        validate: (value) => value !== "" || "Select color",
                      }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(val) => {
                            if (val === "Add Color") {
                              openColorDialog(index);
                            } else {
                              field.onChange(val);
                            }
                          }}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full cmn-select bg-white">
                            <SelectValue placeholder="Select Color" />
                          </SelectTrigger>
                          <SelectContent>
                            {colorOptions.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                            <SelectItem
                              className="cursor-pointer"
                              value="Add Color"
                            >
                              + Add Color
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors?.variants?.[index]?.color && (
                      <p className="error-msg">
                        {errors.variants[index].color?.message as string}
                      </p>
                    )}
                  </div>
                  {colorDialogOpen[index] && (
                    <Dialog
                      open={true}
                      onOpenChange={() => closeColorDialog(index)}
                    >
                      <DialogContent
                        style={{ maxWidth: "600px", width: "96%" }}
                      >
                        <h2 className="text-xl font-extrabold">Add Color</h2>

                        <hr />

                        <div className="p-3 rounded-[6px] bg-[#F6F8FA]">
                          <div className="mb-4">
                            <Label className="block text-sm text-gray-black mb-1">
                              New Color Name
                            </Label>
                            <Input
                              className="cmn-input bg-white"
                              placeholder="Color Name"
                              value={newColor}
                              onChange={(e) => setNewColor(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button
                            type="button"
                            className="cmn-btn"
                            onClick={() => addColor(index)}
                          >
                            Add Color
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}

                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Size*
                    </Label>
                    <Controller
                      name={`variants.${index}.size`}
                      control={control}
                      rules={{
                        validate: (value) => value !== "" || "Select size",
                      }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          onValueChange={(val) => {
                            if (val === "Add Size") {
                              openSizeDialog(index);
                            } else {
                              field.onChange(val);
                            }
                          }}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full cmn-select bg-white">
                            <SelectValue placeholder="Select Size" />
                          </SelectTrigger>
                          <SelectContent>
                            {sizeOptions.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                            <SelectItem
                              className="cursor-pointer"
                              value="Add Size"
                            >
                              + Add Size
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors?.variants?.[index]?.size && (
                      <p className="error-msg">
                        {errors.variants[index].size?.message as string}
                      </p>
                    )}
                  </div>

                  {sizeDialogOpen[index] && (
                    <Dialog
                      open={true}
                      onOpenChange={() => closeSizeDialog(index)}
                    >
                      <DialogContent
                        style={{ maxWidth: "600px", width: "96%" }}
                      >
                        <h2 className="text-xl font-extrabold">Add Size</h2>

                        <hr />

                        <div className="p-3 rounded-[6px] bg-[#F6F8FA]">
                          <div className="mb-4">
                            <Label className="block text-sm text-gray-black mb-1">
                              New Size
                            </Label>
                            <Input
                              className="cmn-input bg-white"
                              placeholder="Size Name"
                              value={newSize}
                              onChange={(e) => setNewSize(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button
                            type="button"
                            className="cmn-btn"
                            onClick={() => addSize(index)}
                          >
                            Add Size
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}

                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Price ($)
                    </Label>
                    <Input
                      type="text"
                      className="cmn-input bg-white"
                      placeholder="Enter Price"
                      {...register(`variants.${index}.price`, {
                        required: "Price is required",
                      })}
                    />
                    {errors?.variants?.[index]?.price && (
                      <p className="error-msg">
                        {errors.variants[index].price?.message as string}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Stock Quantity *
                    </Label>
                    <Input
                      type="text"
                      className="cmn-input bg-white"
                      placeholder="Enter Stock Quantity"
                      {...register(`variants.${index}.stock_qty`, {
                        required: "Stock is required",
                      })}
                    />
                    {errors?.variants?.[index]?.stock_qty && (
                      <p className="error-msg">
                        {errors.variants[index].stock_qty?.message as string}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Right */}
              <div>
                <h4 className="text-sm font-extrabold text-[#4C526F] mb-3">
                  Product Images
                </h4>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[0, 1, 2, 3].map((imgIndex) => (
                    <div key={imgIndex} className="relative">
                      {imagePreviews[index]?.[imgIndex] ? (
                        <label htmlFor={`v-${index}-img-${imgIndex}`}>
                          <img
                            src={imagePreviews[index][imgIndex]}
                            className="w-full h-28 object-cover rounded cursor-pointer border"
                          />

                          {/* Cancel Icon */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              removeImage(index, imgIndex);
                            }}
                            className="absolute top-2 right-2 w-6 h-6 bg-error-bg text-error-text rounded-full flex items-center justify-center cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </label>
                      ) : (
                        <label
                          htmlFor={`v-${index}-img-${imgIndex}`}
                          className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                        >
                          <div className="text-center flex flex-col gap-1 items-center">
                            <GalleryIcon className="size-8" />
                            <p className="text-sm text-secondary-text">Add</p>
                          </div>
                        </label>
                      )}

                      {/* Hidden file input */}
                      <input
                        id={`v-${index}-img-${imgIndex}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => showImagePreview(e, index, imgIndex)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="px-4">
          <button
            type="button"
            className="cmn-btn"
            onClick={() =>
              appendVariant({
                color: "",
                size: "",
                price: "",
                stock_qty: "",
              })
            }
          >
            Add Variation
          </button>
        </div>
      </form>
    </div>
  );
}
