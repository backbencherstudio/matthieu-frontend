import TrashIcon from "@/components/Icons/AdminIcon/TrashIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteTackMutation } from "@/src/redux/admin/tackProduct/tackProduct";
import { toast } from "sonner";

export default function DeleteProduct({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [deleteTack, { isLoading }] = useDeleteTackMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteTack(id);
      if (response?.data?.data?.id) {
        toast.success("Product deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete product");
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="cmn-action-btn delete !bg-error-bg">
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
            onClick={handleDelete}
            className="bg-primary-bg text-white shrink cursor-pointer block w-full h-12 rounded"
          >
            {isLoading ? "Deleting.." : " Yes, Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
