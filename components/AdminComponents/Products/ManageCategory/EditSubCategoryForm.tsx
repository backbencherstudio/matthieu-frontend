import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditSubCategoryForm({ id }: { id: number | string }) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="cmn-action-btn">
          <EditIcon />
        </DialogTrigger>
        <DialogContent style={{ maxWidth: "600px", width: "96%" }}>
          <h2 className="text-xl font-extrabold">Edit Sub Category</h2>

          <hr />

          <form>
            <div className="p-3 rounded-[6px] bg-[#F6F8FA]">
              <div className="mb-4">
                <Label className="block text-sm text-gray-black mb-1">
                  Sub Category Name*
                </Label>
                <Input className="cmn-input" placeholder="Sub Category Name" />
              </div>
              <div className="mb-4">
                <Label className="block text-sm text-gray-black mb-1">
                  Select Main Category*
                </Label>
                <Select>
                  <SelectTrigger className="cmn-select w-full">
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
              <button className="cmn-btn">Update Sub Category</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
