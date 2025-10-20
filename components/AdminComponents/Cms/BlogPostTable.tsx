import EditIcon from "@/components/Icons/AdminIcon/EditIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import PaginationComponent from "@/components/reusable/Features/PaginationComponent";
import ReuseAbleTable from "@/components/reusable/Features/reuseable-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterPagination } from "@/hooks/useFilterHook";
import { TableRowItem } from "@/types/TableRowItem";
import { Search } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

export default function BlogPostTable() {
  const relevantData = [
    {
      id: 1,
      title: "The Art of Saddle Craftsmanship: A Legacy of Excellence",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion", "Saddle"],
      status: "Published",
      author: "G_fournier",
      clicks: 12,
      publishDate: "Sep 5, 2024",
    },
    {
      id: 2,
      title: "Choosing the Right Saddle for Your Discipline",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion"],
      status: "Published",
      author: "G_fournier",
      clicks: 12,
      publishDate: "Sep 5, 2024",
    },
    {
      id: 3,
      title: "The Art of Saddle Craftsmanship: A Legacy of Excellence",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion", "Saddle"],
      status: "Draft",
      author: "G_fournier",
      clicks: null,
      publishDate: null,
    },
    {
      id: 4,
      title: "Choosing the Right Saddle for Your Discipline",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion"],
      status: "Published",
      author: "G_fournier",
      clicks: 12,
      publishDate: "Sep 5, 2024",
    },
    {
      id: 5,
      title: "The Art of Saddle Craftsmanship: A Legacy of Excellence",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion", "Saddle"],
      status: "Draft",
      author: "G_fournier",
      clicks: null,
      publishDate: null,
    },
    {
      id: 6,
      title: "Choosing the Right Saddle for Your Discipline",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion"],
      status: "Published",
      author: "G_fournier",
      clicks: 12,
      publishDate: "Sep 5, 2024",
    },
    {
      id: 7,
      title: "The Art of Saddle Craftsmanship: A Legacy of Excellence",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion", "Saddle"],
      status: "Published",
      author: "G_fournier",
      clicks: 12,
      publishDate: "Sep 5, 2024",
    },
    {
      id: 8,
      title: "Choosing the Right Saddle for Your Discipline",
      tags: ["NAYC", "rider results", "Team Arion"],
      categories: ["Arion"],
      status: "Published",
      author: "G_fournier",
      clicks: 12,
      publishDate: "Sep 5, 2024",
    },
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(relevantData, 6);

  const tableHeader = [
    "Blog Title",
    "Tags",
    "Category",
    "Status",
    "Author",
    "Clicks",
    "Publish Date",
    "Actions",
  ];

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%] text-wrap">
        {item?.title}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {item?.tags?.map((tag, index) => (
          <span key={index} className="text-[14px] text-[#1F274B] mr-2">
            {tag}
            {index < item.tags.length - 1 && ", "}
          </span>
        ))}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.categories?.map((category, index) => (
          <span
            key={index}
            className={`text-[14px] mr-2 ${
              item?.status === "Published" ? "text-[#B1244C]" : "text-[#379C43]"
            }`}
          >
            {category}
            {index < item.tags.length - 1 && ", "}
          </span>
        ))}
      </span>
    ),
    (item) => (
      <span
        className={`text-[14px] leading-[114%] px-2 py-1 rounded-md 
    ${
      item?.status === "Published"
        ? "text-[#0C5FCD] bg-[#EBEBFE]"
        : "text-[#F99F0E] bg-[#FFFAE7]"
    }`}
      >
        {item?.status}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.author}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.clicks}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.publishDate}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div>
          <button className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
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
    <div>
      <div className="overflow-auto">
        <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
          {/* search bar */}
          <div className="flex flex-col justify-between md:flex-row md:items-center gap-2.5 mb-[23px]">
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              All Posts
            </h2>
            <div className="flex xl:items-center flex-row space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                  placeholder="Search blog posts..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allStatus">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Dates" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allDates">All Dates</SelectItem>
                    <SelectItem value="sep">September 2025</SelectItem>
                    <SelectItem value="august">August 2025</SelectItem>
                    <SelectItem value="july">July 2025</SelectItem>
                    <SelectItem value="june">June 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="categories">All Categories</SelectItem>
                    <SelectItem value="saddle">Saddle</SelectItem>
                    <SelectItem value="arion">arion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Link
                  href="/admin/cms/add"
                  className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="text-[14px] leading-[114%]">Add Posts</span>
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
    </div>
  );
}
