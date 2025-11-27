import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

const ArionAmbassadorTab = () => {
  const router = useRouter();
  const relevantData = [
    {
      id: 1,
      fullName: "Nick Dello Joio",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 2,
      fullName: "Emi Richard",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 3,
      fullName: "Emma Hakim",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 4,
      fullName: "Taylor Cawley",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 5,
      fullName: "Adiana Forte",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 6,
      fullName: "Cristian Hacker",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 7,
      fullName: "Molly Ashe Cawley",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 8,
      fullName: "Parker Peacock",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
    {
      id: 9,
      fullName: "Monica Spencer",
      link: "http://www.instagram.com/taylor.cawley/",
      image: "/myAccount/profile.jpg",
      joiningDate: "Sep 5, 2024",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Full Name",
    "Social Links",
    "Profile Image",
    "Joining Date",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%] text-wrap">
        {item?.fullName}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.link}
      </span>
    ),
    (item) => <img src={item?.image} alt="image" className="h-8 w-8" />,
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.joiningDate}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div>
          <button
            className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]"
            onClick={() => router.push("/admin/cms/add-ambassador")}
          >
            <EditIcon />
          </button>
        </div>
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
            <BlogDeleteModal />
          </button>
        </div>
      </div>
    ),
  ];

  const isLoadings = false;
  return (
    <div className="overflow-auto">
      <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
        {/* search bar */}
        <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
          <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
            All Arion Ambassador
          </h2>
          <div className="flex xl:items-center flex-wrap gap-3 space-x-3">
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                placeholder="Search ambassador..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <Link
                href="/admin/cms/add-ambassador"
                className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
              >
                <PlusIcon className="h-4 w-4" />
                <span className="text-[14px] leading-[114%]">
                  Add Ambassador
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="mt-4 overflow-x-auto">
          <ReuseAbleTable
            allClientDataList={relevantData}
            isLoadings={isLoadings}
            currentItems={currentItems}
            tableHeader={tableHeader}
            tableRowDataRenderers={tableRowDataRenderers}
            isBg={false}
          />
        </div>

        {/* pagination */}
        {!isLoadings && (
          <div
            className={`flex justify-center pt-12 pb-4 ${
              relevantData?.length >= 5 ? "block" : "hidden"
            }`}
          >
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArionAmbassadorTab;
