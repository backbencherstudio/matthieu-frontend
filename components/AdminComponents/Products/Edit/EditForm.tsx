"use client";
import React, { useState } from "react";
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
import Image from "next/image";
import { X } from "lucide-react";
import GalleryIcon from "@/components/Icons/AdminIcon/GalleryIcon";
import TrashIcon from "@/components/Icons/AdminIcon/TrashIcon";

interface ProductVariant {
  id: string;
  color?: string;
  size?: string;
  price?: string;
  stock?: string;
  images?: File[] | null;
}

export default function EditForm() {
  const [images, setImages] = useState<File[]>([]);
  const [dynamicVariants, setDynamicVariants] = useState<ProductVariant[]>([]);

  const handleVariantImageChange = (
    variantId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files) {
      setDynamicVariants((prev) =>
        prev.map((variant) =>
          variant.id === variantId
            ? { ...variant, images: Array.from(files) }
            : variant
        )
      );
    }
  };

  const addVariant = () => {
    const variantSerial = document.getElementById(
      "variant-serial"
    ) as HTMLInputElement;
    const serial = parseInt(variantSerial.value) + 1;
    variantSerial.value = serial.toString();
    const newVariant: ProductVariant = {
      id: `variant-${serial}`,
      color: "",
      size: "",
      price: "",
      stock: "",
      images: [],
    };
    setDynamicVariants((prev) => [...prev, newVariant]);
  };

  const removeVariant = (variantId: string) => {
    setDynamicVariants((prev) =>
      prev.filter((variant) => variant.id !== variantId)
    );
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form>
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
            />
          </div>

          <div className="mb-3">
            <Label className="text-sm text-secondary-text mb-1">
              Description
            </Label>
            <Textarea className="cmn-textarea" placeholder="Enter Description">
              Arion's Double Noseband Bridle combines the effect of a regular
              noseband and a drop noseband.
            </Textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-y-3 gap-x-5">
            <div>
              <Label className="text-sm text-secondary-text mb-1">
                Benefits
              </Label>
              <Textarea className="cmn-textarea" placeholder="Enter Benefits">
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
              >
                Grab your The Cleaning Kit product and let's get to work! Begin
                by removing all of the dust from your bridle. Then, clean every
                piece of your bridle with the Leather Soap, wipe your bridle
                down with a clean towel and store in a dry area. Clean after
                every use for best results.
              </Textarea>
            </div>
          </div>
        </div>

        {/* Product Variations Wrapper */}
        <div>
          {/* Product Variant from database */}
          <div className="bg-[#F8FAFB] p-4 mt-4">
            <div className="flex justify-between gap-3">
              <h2 className="text-xl font-extrabold text-primary-text">
                Product Variation 1
              </h2>
              <div className="flex items-center gap-3">
                <button className="cmn-btn !px-4 !rounded-[6px]">Save</button>
                <button className="cmn-btn !px-4 !rounded-[6px] !bg-error-bg !text-error-text">
                  <TrashIcon />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Left */}
              <div>
                <div className="grid grid-cols-2 gap-x-3">
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Color
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full cmn-select bg-white">
                        <SelectValue placeholder="Select Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Select Color">
                          Select Color
                        </SelectItem>
                        <SelectItem value="Black">Black</SelectItem>
                        <SelectItem value="Brown">Brown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Size*
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full cmn-select bg-white">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Select Size">Select Size</SelectItem>
                        <SelectItem value="Pony">Pony</SelectItem>
                        <SelectItem value="Cob">Cob</SelectItem>
                        <SelectItem value="Full">Full</SelectItem>
                        <SelectItem value="Oversize">Oversize</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Price ($)
                    </Label>
                    <Input
                      type="text"
                      className="cmn-input bg-white"
                      placeholder="Enter Price"
                      defaultValue="580.00"
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Stock Quantity *
                    </Label>
                    <Input
                      type="text"
                      className="cmn-input bg-white"
                      placeholder="Enter Stock Quantity"
                      defaultValue="45"
                    />
                  </div>
                </div>
              </div>
              {/* Right */}
              <div>
                <h4 className="text-sm font-extrabold text-[#4C526F] mb-3">
                  Product Images
                </h4>

                <div className="grid grid-cols-4 gap-4">
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Variant 2 */}
          <div className="bg-[#F8FAFB] p-4 mt-4">
            <div className="flex justify-between gap-3">
              <h2 className="text-xl font-extrabold text-primary-text">
                Product Variation 1
              </h2>
              <div className="flex items-center gap-3">
                <button className="cmn-btn !px-4 !rounded-[6px]">Save</button>
                <button className="cmn-btn !px-4 !rounded-[6px] !bg-error-bg !text-error-text">
                  <TrashIcon />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Left */}
              <div>
                <div className="grid grid-cols-2 gap-x-3">
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Color
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full cmn-select bg-white">
                        <SelectValue placeholder="Select Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Select Color">
                          Select Color
                        </SelectItem>
                        <SelectItem value="Black">Black</SelectItem>
                        <SelectItem value="Brown">Brown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Size*
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full cmn-select bg-white">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Select Size">Select Size</SelectItem>
                        <SelectItem value="Pony">Pony</SelectItem>
                        <SelectItem value="Cob">Cob</SelectItem>
                        <SelectItem value="Full">Full</SelectItem>
                        <SelectItem value="Oversize">Oversize</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Product Price ($)
                    </Label>
                    <Input
                      type="text"
                      className="cmn-input bg-white"
                      placeholder="Enter Price"
                      defaultValue="580.00"
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="text-sm text-secondary-text mb-1">
                      Stock Quantity *
                    </Label>
                    <Input
                      type="text"
                      className="cmn-input bg-white"
                      placeholder="Enter Stock Quantity"
                      defaultValue="45"
                    />
                  </div>
                </div>
              </div>
              {/* Right */}
              <div>
                <h4 className="text-sm font-extrabold text-[#4C526F] mb-3">
                  Product Images
                </h4>

                <div className="grid grid-cols-4 gap-4">
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                  >
                    <input type="file" className="hidden" id="image" />
                    <div className="text-center flex flex-col gap-1 items-center">
                      <GalleryIcon className="size-8" />
                      <p className="text-sm text-secondary-text">Add</p>
                      {images.length > 0 && (
                        <p>
                          <span className="text-primary-text">
                            {images.map((img, i) => img.name).join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Input to count what will be next variant serial */}
          <input type="hidden" defaultValue="2" id="variant-serial" />

          {/* Product Variant to be added */}
          <div className="product-variant-to-add">
            {dynamicVariants.map((variant, index) => (
              <div key={variant.id} className="bg-[#F8FAFB] p-4 mt-4">
                <div className="flex justify-between gap-3">
                  <h2 className="text-xl font-extrabold text-primary-text">
                    Product Variation {variant.id}
                  </h2>
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
                      onClick={() => removeVariant(variant.id)}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Left */}
                  <div>
                    <div className="grid grid-cols-2 gap-x-3">
                      <div className="mb-3">
                        <Label className="text-sm text-secondary-text mb-1">
                          Product Color
                        </Label>
                        <Select>
                          <SelectTrigger className="w-full cmn-select bg-white">
                            <SelectValue placeholder="Select Color" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Select Color">
                              Select Color
                            </SelectItem>
                            <SelectItem value="Black">Black</SelectItem>
                            <SelectItem value="Brown">Brown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="mb-3">
                        <Label className="text-sm text-secondary-text mb-1">
                          Product Size*
                        </Label>
                        <Select>
                          <SelectTrigger className="w-full cmn-select bg-white">
                            <SelectValue placeholder="Select Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Select Size">
                              Select Size
                            </SelectItem>
                            <SelectItem value="Pony">Pony</SelectItem>
                            <SelectItem value="Cob">Cob</SelectItem>
                            <SelectItem value="Full">Full</SelectItem>
                            <SelectItem value="Oversize">Oversize</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="mb-3">
                        <Label className="text-sm text-secondary-text mb-1">
                          Product Price ($)
                        </Label>
                        <Input
                          type="text"
                          className="cmn-input bg-white"
                          placeholder="Enter Price"
                        />
                      </div>
                      <div className="mb-3">
                        <Label className="text-sm text-secondary-text mb-1">
                          Stock Quantity *
                        </Label>
                        <Input
                          type="text"
                          className="cmn-input bg-white"
                          placeholder="Enter Stock Quantity"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <h4 className="text-sm font-extrabold text-[#4C526F] mb-3">
                      Product Images
                    </h4>

                    <div className="grid grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((imageIndex) => (
                        <label
                          key={imageIndex}
                          htmlFor={`image-${variant.id}-${imageIndex}`}
                          className="flex items-center justify-center cursor-pointer w-full bg-[#fff] rounded border border-dashed border-secondary-text p-6"
                        >
                          <input
                            type="file"
                            className="hidden"
                            id={`image-${variant.id}-${imageIndex}`}
                            onChange={(e) =>
                              handleVariantImageChange(variant.id, e)
                            }
                          />
                          <div className="text-center flex flex-col gap-1 items-center">
                            <GalleryIcon className="size-8" />
                            <p className="text-sm text-secondary-text">Add</p>
                            {variant.images.length > 0 && (
                              <p>
                                <span className="text-primary-text">
                                  {variant.images
                                    .map((img, i) => img.name)
                                    .join(", ")}
                                </span>
                              </p>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Product Variation */}
        <div className="px-4">
          <button type="button" className="cmn-btn" onClick={addVariant}>
            Add Variation
          </button>
        </div>
      </form>
    </div>
  );
}
