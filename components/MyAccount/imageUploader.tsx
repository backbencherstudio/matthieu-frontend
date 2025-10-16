"use client";

import { cn } from "@/lib/utils"; // optional utility if you use shadcn's `cn`
import { Loader2, UploadCloud, X } from "lucide-react";
import React, { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isValidType = file.type === "image/jpeg" || file.type === "image/png";
    const isValidSize = file.size / 1024 / 1024 < 2;

    if (!isValidType) {
      setError("You can only upload JPG/PNG files!");
      return;
    }
    if (!isValidSize) {
      setError("Image must be smaller than 2MB!");
      return;
    }

    setError(null);
    setLoading(true);

    // Simulate upload (or upload to your backend here)
    setTimeout(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }, 1000);
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div
        className={cn(
          "relative border-2 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer"
        )}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        {loading ? (
          <Loader2 className="w-6 h-6 text-[#2A3988] animate-spin" />
        ) : image ? (
          <>
            <img
              src={image}
              alt="Uploaded"
              className="object-cover w-full h-full rounded-full"
              draggable={false}
            />
            <button
              onClick={removeImage}
              className="absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white hover:bg-black/70"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <UploadCloud className="w-6 h-6 mb-1 text-gray-400" />
            <span className="text-xs font-medium">Upload</span>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
