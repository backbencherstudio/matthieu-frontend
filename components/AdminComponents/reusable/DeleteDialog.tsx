import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import TrashIcon from "@/components/Icons/AdminIcon/TrashIcon";
import { Button } from "@/components/ui/button";

export default function DeleteDialog({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="cmn-action-btn delete">
        <TrashIcon />
      </DialogTrigger>
      <DialogContent>
        <div className="bg-[#FEECEE] border-[6px] border-[#FBD8DB] h-12 w-12 flex items-center justify-center rounded-full mx-auto">
          <TrashIcon className="text-error-text" />
        </div>
        <h1 className="text-xl font-extrabold my-4 text-center">
          Delete {title}
        </h1>

        <DialogFooter className="sm:justify-center gap-3">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="bg-[#E9E9ED] text-[#777980] shrink cursor-pointer block w-full h-12 rounded"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-primary-bg text-white shrink cursor-pointer block w-full h-12 rounded"
          >
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
