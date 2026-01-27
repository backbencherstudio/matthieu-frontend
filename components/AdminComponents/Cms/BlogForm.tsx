"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface BlogFormData {
  thumbnail: FileList | null;
  title: string;
  author: string;
  description: string;
  imageTitle: string;
  imageContent: string;
}

export function BlogForm() {
  const { control, register, handleSubmit, setValue } = useForm<BlogFormData>({
    defaultValues: {
      thumbnail: null,
      title: "",
      author: "",
      description: "",
      imageTitle: "",
      imageContent: "",
    },
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnailPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: BlogFormData) => {
    console.log("FORM DATA:", data);
    console.log("FILE:", data.thumbnail?.[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Thumbnail Upload */}
        <div className="lg:col-span-1">
          <Controller
            name="thumbnail"
            control={control}
            render={({ field }) => (
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files?.[0];
                  if (file) {
                    setValue("thumbnail", e.dataTransfer.files);
                    previewFile(file);
                  }
                }}
                className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:bg-slate-50"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(e.target.files);
                      previewFile(file);
                    }
                  }}
                />

                {thumbnailPreview ? (
                  thumbnailPreview.startsWith("data:video") ? (
                    <video
                      src={thumbnailPreview}
                      controls
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : (
                    <img
                      src={thumbnailPreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )
                ) : (
                  <div className="py-8">
                    <Upload className="w-8 h-8 mx-auto text-slate-400 mb-3" />
                    <p className="text-sm font-medium text-slate-700">
                      Thumbnail Image / Video
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Drag & drop or click to upload
                    </p>
                  </div>
                )}
              </div>
            )}
          />
        </div>

        {/* Form Fields */}
        <div className="lg:col-span-3 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Blog Title *
            </label>
            <input
              {...register("title", { required: true })}
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Enter blog title"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium mb-2">Author *</label>
            <input
              {...register("author", { required: true })}
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Enter author name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Blog Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              className="w-full p-4 border rounded-lg outline-none"
              placeholder="Write blog description..."
            />
          </div>

          {/* Image Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Image Title
            </label>
            <input
              {...register("imageTitle")}
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Enter image title"
            />
          </div>

          {/* Image Content */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Image Content
            </label>
            <textarea
              {...register("imageContent")}
              rows={4}
              className="w-full p-4 border rounded-lg outline-none"
              placeholder="Write image content..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
