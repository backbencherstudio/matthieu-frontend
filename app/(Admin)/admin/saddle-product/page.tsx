import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import SaddleProductTable from "@/components/SaddleProduct/SaddleProductTable";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Saddles Product
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/admin/use-saddles/add"
          >
            <PlusIcon className="h-4 w-4 text-white" />
            <span>Add Saddles Product</span>
          </Link>
        </div>
      </div>
      <SaddleProductTable />
    </div>
  );
}
