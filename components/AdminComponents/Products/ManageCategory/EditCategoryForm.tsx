import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EditIcon from "@/components/Icons/AdminIcon/EditIcon";

export default function EditCategoryForm({ id }: { id: number | string }) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="cmn-action-btn">
          <EditIcon />
        </DialogTrigger>
        <DialogContent style={{ maxWidth: "600px", width: "96%" }}>
          <h2 className="text-xl font-extrabold">Edit Category</h2>

          <hr />

          <form>
            <div className="p-3 rounded-[6px] bg-[#F6F8FA]">
              <div className="mb-4">
                <Label className="block text-sm text-gray-black mb-1">
                  Main Category Name*
                </Label>
                <Input
                  className="cmn-input bg-white"
                  placeholder="Category Name"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="cmn-btn">Update Category</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
