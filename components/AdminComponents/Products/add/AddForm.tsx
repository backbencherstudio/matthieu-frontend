"use client";
import GalleryIcon from "@/components/Icons/AdminIcon/GalleryIcon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
import {
  useAddColorMutation,
  useAddSizeMutation,
  useColorsListQuery,
  useCreateTackProductMutation,
  useSizeListQuery,
} from "@/src/redux/admin/tackProduct/tackProduct";
import { Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { MultiSelect } from "../../reusable/MultiSelect";

type Inputs = {
  name: string;
  description: string;
  benefits: string;
  leatherCareGuide: string;
  subcategory: string;
  category: string;
  availableColor: string[];
  availableSize: string[];
  thumbnail: File | null;
  variants: {
    color: string;
    size: string;
    price: string;
    stock_qty: number | string;
  }[];
};

export enum ProductCategory {
  SADDLES = "SADDLES",
  TACK = "TACK",
  LEADLINE = "LEADLINE",
  USED = "USED",
}

enum tackSubcategory {
  BRIDLES = "BRIDLES",
  REINS = "REINS",
  MARTINGALES = "MARTINGALES",
  GRITHSF = "GRITHSF",
  STIRRUP_LEATHERS = "STIRRUP_LEATHERS",
  PADS = "PADS",
  RIDER_APPAREL = "RIDER_APPAREL",
  BOOTS = "BOOTS",
  ACCESSORIES = "ACCESSORIES",
}

const availableColor = [
  { id: "1", name: "Red" },
  { id: "2", name: "Yellow" },
  { id: "3", name: "Green" },
  { id: "4", name: "Brown" },
];
const availableSize = [
  { id: "1", name: "12" },
  { id: "2", name: "11" },
  { id: "3", name: "13" },
  { id: "4", name: "15" },
];

export default function AddForm() {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      availableColor: [],
      availableSize: [],
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

  // api end poin
  const [addColor, { isLoading }] = useAddColorMutation();
  const [addSize, { isLoading: sizeLoading }] = useAddSizeMutation();
  const { data: colors } = useColorsListQuery("");
  const { data: sizes } = useSizeListQuery("");
  const [createTackProduct, { isLoading: tackLoading }] =
    useCreateTackProductMutation();

  useEffect(() => {
    if (colors && Array.isArray(colors)) {
      setColorOptions(colors);
    }
  }, [colors]);

  useEffect(() => {
    if (sizes && Array.isArray(sizes)) {
      setSizeOptions(sizes);
    }
  }, [sizes]);

  const addColorHandler = async (variantIndex: number) => {
    const trimmed = newColor.trim();
    if (!trimmed) return;

    try {
      const response = await addColor({ name: trimmed }).unwrap();
      if (response?.id) {
        toast?.success("Color created successfully!");
      }
      const createdColor = response?.name || trimmed;

      // Add to select options
      setColorOptions((prev) =>
        prev.includes(createdColor) ? prev : [...prev, createdColor],
      );

      // Set selected value in form
      setValue(`variants.${variantIndex}.color`, createdColor, {
        shouldDirty: true,
        shouldValidate: true,
      });

      // Reset dialog
      setNewColor("");
      closeColorDialog(variantIndex);
    } catch (error) {
      console.error("Failed to add color:", error);
    }
  };

  const addSizeHandler = async (variantIndex: number) => {
    const trimmed = newSize.trim();
    if (!trimmed) return;

    try {
      const response = await addSize({ name: trimmed }).unwrap();

      if (response?.id) {
        toast.success("Size created successfully!");
      }

      const createdSize = response?.name || trimmed;
      setSizeOptions((prev) =>
        prev.includes(createdSize) ? prev : [...prev, createdSize],
      );

      setValue(`variants.${variantIndex}.size`, createdSize, {
        shouldDirty: true,
        shouldValidate: true,
      });

      setNewSize("");
      closeSizeDialog(variantIndex);
    } catch (error) {
      console.error("Failed to add size:", error);
      toast.error("Failed to add size");
    }
  };

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
  const [colorOptions, setColorOptions] = useState<
    { id: string; name: string }[]
  >([]);

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

  // Handle New Size
  const [sizeDialogOpen, setSizeDialogOpen] = useState<boolean[]>([]);
  const [newSize, setNewSize] = useState("");
  const [sizeOptions, setSizeOptions] = useState<
    { id: string; name: string }[]
  >([]);

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

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setThumbnailPreview(previewUrl);
    setThumbnailFile(file);

    setValue("thumbnail", file, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  // Form Submit
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description || "");
    formData.append("benefits", data.benefits || "");
    formData.append("leatherCareGuide", data.leatherCareGuide || "");
    formData.append("category", data.category);
    formData.append("subcategory", data.subcategory);

    if (thumbnailFile) {
      formData.append("thumbnail", thumbnailFile);
    }

    // ✅ Build variants array properly
    const formattedVariants = data.variants.map((item, index) => ({
      colorId: item.color,
      sizeId: item.size,
      price: Number(item.price),
      stockQuantity: Number(item.stock_qty),
      isDefault: index === 0,
    }));

    // ✅ Send variants as JSON string
    formData.append("variants", JSON.stringify(formattedVariants));

    // ✅ Send images separately
    imageFiles.forEach((variantImages, variantIndex) => {
      variantImages?.forEach((file) => {
        if (file) {
          formData.append(`variantImages_${variantIndex}`, file);
        }
      });
    });

    try {
      const response = await createTackProduct(formData);
      if (response?.data?.id) {
        toast.success("Product Created Successfully!");
        reset();
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl font-extrabold text-primary-text">
            Add New Product
          </h1>
          <button className="cmn-btn" disabled={tackLoading}>
            {tackLoading ? "Creating..." : "Add Product"}
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
            ></Textarea>
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
              ></Textarea>
            </div>
            <div>
              <Label className="text-sm text-secondary-text mb-1">
                Leather Care Guide
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Leather Care Guide"
                {...register(`leatherCareGuide`)}
              ></Textarea>
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
                      {Object.values(tackSubcategory).map((item) => (
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

          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Available Color
              </Label>

              <Controller
                name="availableColor"
                control={control}
                rules={{ required: "Select at least one county" }}
                render={({ field }) => (
                  <MultiSelect
                    options={availableColor}
                    value={field.value}
                    onChange={field.onChange}
                    max={3}
                    placeholder="Select Colors"
                  />
                )}
              />

              {errors.availableColor && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.availableColor.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Available Size
              </Label>

              <Controller
                name="availableSize"
                control={control}
                rules={{ required: "Select at least one county" }}
                render={({ field }) => (
                  <MultiSelect
                    options={availableSize}
                    value={field.value}
                    onChange={field.onChange}
                    max={3}
                    placeholder="Select Size"
                  />
                )}
              />

              {errors.availableSize && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.availableSize.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Thumbnail *
            </Label>

            <div className="w-full h-40 relative">
              {thumbnailPreview ? (
                <label htmlFor="thumbnail-upload">
                  <img
                    src={thumbnailPreview}
                    className="w-full h-full object-cover rounded border cursor-pointer"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setThumbnailPreview(null);
                      setThumbnailFile(null);
                      setValue("thumbnail", null);
                    }}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </label>
              ) : (
                <label
                  htmlFor="thumbnail-upload"
                  className="flex items-center justify-center cursor-pointer w-full h-full bg-white rounded border border-dashed border-secondary-text"
                >
                  <div className="text-center flex flex-col gap-1 items-center">
                    <GalleryIcon className="size-8" />
                    <p className="text-sm text-secondary-text">Add Thumbnail</p>
                  </div>
                </label>
              )}

              <input
                id="thumbnail-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleThumbnailChange}
              />
            </div>

            {errors.thumbnail && (
              <p className="text-red-500 text-sm">
                {errors.thumbnail.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Product Variations Wrapper */}
        {variantFields.map((item, index) => (
          <div className="bg-[#F8FAFB] p-4 mt-4 relative" key={item.id}>
            <div className="flex flex-wrap justify-between gap-3">
              <h2 className="text-xl font-extrabold text-primary-text">
                Product Variation {index + 1}
              </h2>
              <div className="flex items-center gap-3"></div>
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
                            {colorOptions.map((color) => (
                              <SelectItem key={color?.id} value={color?.id}>
                                {color?.name}
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
                            disabled={isLoading}
                            onClick={() => addColorHandler(index)}
                          >
                            {isLoading ? "Adding..." : "Add Color"}
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
                              <SelectItem key={opt?.id} value={opt?.id}>
                                {opt?.name}
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
                            disabled={sizeLoading}
                            onClick={() => addSizeHandler(index)}
                          >
                            {sizeLoading ? "Adding..." : "Add Size"}
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

            {index > 0 && (
              <button
                type="button"
                className="absolute top-2 right-2 cursor-pointer bg-error-bg text-error-text w-8 h-8 flex items-center justify-center rounded-sm"
                onClick={() => handleRemoveVariant(index)}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
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
