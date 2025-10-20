import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function AddCategoryForm() {
  return (
    <>
      <form>
        <div className="p-3 rounded-[6px] bg-[#F6F8FA]">
          <div className="mb-4">
            <Label className="block text-sm text-gray-black mb-1">
              Main Category Name*
            </Label>
            <Input className="cmn-input" placeholder="Category Name" />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="cmn-btn">Create Category</button>
        </div>
      </form>
    </>
  );
}
