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

export default function AddForm() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  return (
    <div className="bg-white p-4 rounded-[8px]">
      <form>
        {/* Header */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl font-extrabold text-primary-text">
            Add New Product
          </h1>
          <button className="cmn-btn">Add Product</button>
        </div>
        {/* Body */}
        <div className="mt-4 grid md:grid-cols-2 gap-5">
          {/* Left */}
          <div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Product Name*
              </Label>
              <Input
                type="text"
                className="cmn-input"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Benefits
              </Label>
              <Textarea
                className="cmn-input"
                placeholder="Enter Benefits"
              ></Textarea>
            </div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Description
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Description"
              ></Textarea>
            </div>
            <div className="mb-3">
              <Label className="text-sm text-secondary-text mb-1">
                Leather Care Guide
              </Label>
              <Textarea
                className="cmn-textarea"
                placeholder="Enter Leather Care Guide"
              ></Textarea>
            </div>
          </div>
          {/* Right */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Product ID
                </Label>
                <Input
                  type="text"
                  className="cmn-input"
                  placeholder="Enter Product ID"
                />
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Stock Quantity *
                </Label>
                <Input
                  type="text"
                  className="cmn-input"
                  placeholder="Enter Stock Quantity"
                />
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Main Category *
                </Label>
                <Select>
                  <SelectTrigger className="w-full cmn-select">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Select Category">
                      Select Category
                    </SelectItem>
                    <SelectItem value="Saddles">Saddles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Sub Category *
                </Label>
                <Select>
                  <SelectTrigger className="w-full cmn-select">
                    <SelectValue placeholder="Select Sub Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Select Category">
                      Select Sub Category
                    </SelectItem>
                    <SelectItem value="Bridles">Bridles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Product Price ($)
                </Label>
                <Input
                  type="text"
                  className="cmn-input"
                  placeholder="Product Price ($)"
                />
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Discount Price ($)
                </Label>
                <Input
                  type="text"
                  className="cmn-input"
                  placeholder="Discount Price ($)"
                />
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Product Color
                </Label>
                <Select>
                  <SelectTrigger className="w-full cmn-select">
                    <SelectValue placeholder="Select Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Select Color">Select Color</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="Brown">Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-3">
                <Label className="text-sm text-secondary-text mb-1">
                  Product Size
                </Label>
                <Select>
                  <SelectTrigger className="w-full cmn-select">
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
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-extrabold text-primary-text mb-4">
                Product Images
              </h4>

              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <Image
                    src="/images/admin/products/products-1.png"
                    alt="Product Image"
                    width={140}
                    height={140}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                  <button className="absolute -top-2 -right-2 p-1 rounded-full bg-primary-bg text-white cursor-pointer">
                    <X className="size-4" />
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src="/images/admin/products/products-1.png"
                    alt="Product Image"
                    width={140}
                    height={140}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                  <button className="absolute -top-2 -right-2 p-1 rounded-full bg-primary-bg text-white cursor-pointer">
                    <X className="size-4" />
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src="/images/admin/products/products-1.png"
                    alt="Product Image"
                    width={140}
                    height={140}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                  <button className="absolute -top-2 -right-2 p-1 rounded-full bg-primary-bg text-white cursor-pointer">
                    <X className="size-4" />
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src="/images/admin/products/products-1.png"
                    alt="Product Image"
                    width={140}
                    height={140}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                  <button className="absolute -top-2 -right-2 p-1 rounded-full bg-primary-bg text-white cursor-pointer">
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              <label
                htmlFor="image"
                className="mt-4 flex items-center justify-center cursor-pointer w-full bg-[#E9E9ED80] rounded border border-dashed border-secondary-text p-10"
              >
                <input
                  type="file"
                  className="hidden"
                  id="image"
                  onChange={handleImageChange}
                />
                <div className="text-center flex flex-col gap-1 items-center">
                  <GalleryIcon className="size-8" />
                  <p className="text-sm text-secondary-text">Upload</p>
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
      </form>
    </div>
  );
}
