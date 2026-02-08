import UseSaddlesTable from "@/components/AdminComponents/UseSaddles/UseSaddlesTable";
import PlusIcon from "@/components/Icons/PlusIcon";
import Link from "next/link";

const UseSaddlesPage = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Use Saddles
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/"
          >
            <PlusIcon className="h-4 w-4 text-white" />
            <span>Add Saddles</span>
          </Link>
        </div>
      </div>
      <UseSaddlesTable />
    </div>
  );
};

export default UseSaddlesPage;
