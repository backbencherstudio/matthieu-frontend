import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddSubCategoryForm() {
  return (
    <>
      <form>
        <div className="p-3 rounded-[6px] bg-[#F6F8FA]">
          <div className="mb-4">
            <Label className="block text-sm text-gray-black mb-1">
              Sub Category Name*
            </Label>
            <Input className="cmn-input bg-white" placeholder="Sub Category Name" />
          </div>
          <div className="mb-4">
            <Label className="block text-sm text-gray-black mb-1">
              Select Main Category*
            </Label>
            <Select>
              <SelectTrigger className="cmn-select bg-white w-full">
                <SelectValue placeholder="Saddle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Saddle">Saddle</SelectItem>
                <SelectItem value="Tack">Tack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="cmn-btn">Create Sub Category</button>
        </div>
      </form>
    </>
  );
}
