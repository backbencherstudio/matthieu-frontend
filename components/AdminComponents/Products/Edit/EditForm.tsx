"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

import GalleryIcon from "@/components/Icons/AdminIcon/GalleryIcon";
import TrashIcon from "@/components/Icons/AdminIcon/TrashIcon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetSingleTackQuery,
  useUpdateTackProductMutation,
} from "@/src/redux/admin/tackProduct/tackProduct";
import { X } from "lucide-react";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import DeleteProduct from "../DeleteProduct";

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

interface EditFormProps {
  id: string;
}

export default function EditForm({ id }: EditFormProps) {
  const [updateTackProduct, { isLoading: updateLoading }] =
    useUpdateTackProductMutation();
  const { data: productData, isLoading: dataLoading } =
    useGetSingleTackQuery(id);

  const productVariant = productData?.variants ?? [];

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      description: "",
      benefits: "",
      guide: "",
      variants: [],
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

  // ✅ Populate form when data loads
  useEffect(() => {
    if (!productData) return;

    reset({
      name: productData.name || "",
      description: productData.description || "",
      benefits: productData.benefits || "",
      guide: productData.leatherCareGuide || "",
      variants:
        productData.variants?.map((v: any) => ({
          color: v.colorId || v.color || "",
          size: v.sizeId || v.size || "",
          price: String(v.price_usd || v.price || ""),
          stock_qty: String(v.stockQuantity || v.stock_qty || ""),
        })) ?? [],
    });

    // Populate image previews from existing variant images
    if (productData.variants?.length > 0) {
      const previews = productData.variants.map((v: any) => {
        const imgs = v.images?.map((img: any) => img.url || img) ?? [];
        return [...imgs, null, null, null, null].slice(0, 4);
      });

      setImagePreviews(previews);
      setImageFiles(previews.map((group: any) => group.map(() => null)));
    }
  }, [productData]);

  const handleRemoveVariant = (index: number) => {
    removeVariant(index);
    setImagePreviews((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
    setImageFiles((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  // Image Preview State
  const [imagePreviews, setImagePreviews] = useState<(string | null)[][]>([]);
  const [imageFiles, setImageFiles] = useState<(File | null)[][]>([]);

  // Sync previews when new variant is added
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

    setImageFiles((prev) => {
      if (prev.length < variantFields.length) {
        const newFiles = [...prev];
        for (let i = prev.length; i < variantFields.length; i++) {
          newFiles.push([null, null, null, null]);
        }
        return newFiles;
      }
      return prev;
    });
  }, [variantFields.length]);

  const showImagePreview = (
    e: React.ChangeEvent<HTMLInputElement>,
    variantIndex: number,
    imgIndex: number,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setImagePreviews((prev) => {
      const updated = prev.map((row) => [...row]);
      if (!updated[variantIndex])
        updated[variantIndex] = [null, null, null, null];
      updated[variantIndex][imgIndex] = url;
      return updated;
    });

    setImageFiles((prev) => {
      const updated = prev.map((row) => [...row]);
      if (!updated[variantIndex])
        updated[variantIndex] = [null, null, null, null];
      updated[variantIndex][imgIndex] = file;
      return updated;
    });
  };

  const removeImage = (variantIndex: number, imgIndex: number) => {
    setImagePreviews((prev) => {
      const updated = prev.map((row) => [...row]);
      updated[variantIndex][imgIndex] = null;
      return updated;
    });

    setImageFiles((prev) => {
      const updated = prev.map((row) => [...row]);
      updated[variantIndex][imgIndex] = null;
      return updated;
    });
  };

  // Color Dialog
  const [colorDialogOpen, setColorDialogOpen] = useState<boolean[]>([]);
  const [newColor, setNewColor] = useState("");
  const [colorOptions, setColorOptions] = useState<string[]>([]);

  useEffect(() => {
    if (productData?.variants) {
      const existingColors = productData.variants.map(
        (v: any) => v.color?.name || v.color || "",
      );
      setColorOptions((prev) => {
        const merged = [...prev, ...existingColors];
        const unique = Array.from(new Set(merged));
        return unique.filter(Boolean);
      });
    }
  }, [productData]);

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

  const addColor = (variantIndex: number) => {
    const trimmed = newColor.trim();
    if (!trimmed) return;

    setColorOptions((prev) =>
      prev.includes(trimmed) ? prev : [...prev, trimmed],
    );

    setValue(`variants.${variantIndex}.color`, trimmed, {
      shouldDirty: true,
      shouldValidate: true,
    });

    closeColorDialog(variantIndex);
    setNewColor("");
  };

  // Size Dialog
  const [sizeDialogOpen, setSizeDialogOpen] = useState<boolean[]>([]);
  const [newSize, setNewSize] = useState("");
  const [sizeOptions, setSizeOptions] = useState<string[]>([]);

  useEffect(() => {
    if (productData?.variants) {
      const existingSizes = productData.variants.map(
        (v: any) => v.size?.name || v.size || "",
      );
      setSizeOptions((prev) => {
        const merged = [...prev, ...existingSizes];
        const unique = Array.from(new Set(merged));
        return unique.filter(Boolean);
      });
    }
  }, [productData]);

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

  const addSize = (variantIndex: number) => {
    const trimmed = newSize.trim();
    if (!trimmed) return;

    setSizeOptions((prev) =>
      prev.includes(trimmed) ? prev : [...prev, trimmed],
    );

    setValue(`variants.${variantIndex}.size`, trimmed, {
      shouldDirty: true,
      shouldValidate: true,
    });

    closeSizeDialog(variantIndex);
    setNewSize("");
  };

  // Form Submit
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description || "");
    formData.append("benefits", data.benefits || "");
    formData.append("leatherCareGuide", data.guide || "");

    // Separate existing vs new variants
    const existingVariants = data.variants.slice(0, productVariant.length);
    const newVariants = data.variants.slice(productVariant.length);

    // Existing variants — only send updated images
    existingVariants.forEach((_, i) => {
      imageFiles[i]?.forEach((file) => {
        if (file) {
          formData.append(`variants[${i}].images`, file);
        }
      });
    });

    // New variants — send as JSON + images
    if (newVariants.length > 0) {
      const formattedNewVariants = newVariants.map((item) => ({
        colorId: item.color,
        sizeId: item.size,
        price: item.price,
        stockQuantity: Number(item.stock_qty),
      }));

      formData.append("variantsCreate", JSON.stringify(formattedNewVariants));

      newVariants.forEach((_, i) => {
        const actualIndex = productVariant.length + i;
        imageFiles[actualIndex]?.forEach((file) => {
          if (file) {
            formData.append(`variantsCreate[${i}].images`, file);
          }
        });
      });
    }

    try {
      const response = await updateTackProduct({ data: formData, id });
      if (response?.data?.id) {
        toast.success("Product Updated Successfully!");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  if (dataLoading) {
    return (
      <div className="bg-white p-4 rounded-[8px] flex items-center justify-center h-60">
        <p className="text-secondary-text">Loading product data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl font-extrabold text-primary-text">
            Edit Product
          </h1>
          <button className="cmn-btn" disabled={updateLoading}>
            {updateLoading ? "Updating..." : "Update Product"}
          </button>
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
              {...register("name", {
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
              {...register("description")}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-y-3 gap-x-5">
            <div>
              <Label className="text-sm text-secondary-text mb-1">
                Benefits
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Benefits"
                {...register("benefits")}
              />
            </div>
            <div>
              <Label className="text-sm text-secondary-text mb-1">
                Leather Care Guide
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Leather Care Guide"
                {...register("guide")}
              />
            </div>
          </div>
        </div>

        {/* Product Variations */}
        {variantFields.map((item, index) => (
          <div className="bg-[#F8FAFB] p-4 mt-4 relative" key={item.id}>
            <div className="flex flex-wrap justify-between gap-3">
              <h2 className="text-xl font-extrabold text-primary-text">
                Product Variation {index + 1}
              </h2>

              <div className="flex items-center gap-3">
                <button type="button" className="cmn-btn !px-4 !rounded-[6px]">
                  Save
                </button>
                {index > productVariant.length - 1 ? (
                  <button
                    type="button"
                    className="cmn-btn !px-4 !rounded-[6px] !bg-error-bg !text-error-text"
                    onClick={() => handleRemoveVariant(index)}
                  >
                    <TrashIcon />
                  </button>
                ) : (
                  <DeleteProduct
                    id={`${item.id}`}
                    title={`Product Variation ${index + 1}`}
                  />
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-4">
              {/* Left */}
              <div>
                <div className="grid sm:grid-cols-2 gap-x-3">
                  {/* Color */}
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
                              value="Add Color"
                              className="cursor-pointer"
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
                            <Label className="block text-sm mb-1">
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

                  {/* Size */}
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
                              value="Add Size"
                              className="cursor-pointer"
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
                            <Label className="block text-sm mb-1">
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

                  {/* Price */}
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

                  {/* Stock */}
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Stock Quantity*
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

              {/* Right - Images */}
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
                            src={imagePreviews[index][imgIndex]!}
                            className="w-full h-28 object-cover rounded cursor-pointer border"
                          />
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
                      <input
                        id={`v-${index}-img-${imgIndex}`}
                        type="file"
                        accept="image/*"
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

        <div className="px-4 mt-4">
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
