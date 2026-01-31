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
import { useDebounce } from "@/src/hooks/useDebounce";
import { useGetAllBlogsQuery } from "@/src/redux/admin/cms/blog/blogApi";
import { TableRowItem } from "@/types/TableRowItem";
import { format } from "date-fns";
import { Search } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

export default function BlogPostTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, refetch } = useGetAllBlogsQuery({
    search: debouncedSearch,
    page: currentPage,
    status,
  });
  const relevantData = data?.data;
  const currentItems = relevantData ?? [];
  const meta = data?.meta;
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
    index: number,
  ) => ReactNode)[] = [
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%] text-wrap">
        {item?.title}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#1F274B]">
        {(item?.tags as string[])?.map((tag, index) => (
          <span key={index} className="text-[14px] text-[#1F274B] mr-2">
            {tag}
            {index < (item?.tags as string[]).length - 1 && ", "}
          </span>
        ))}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {typeof item?.category === "string"
          ? item?.category
          : (item?.category as { name: string })?.name}
      </span>
    ),
    (item) => (
      <span
        className={`text-[14px] leading-[114%] px-2 py-1 rounded-md 
    ${
      item?.status === "PUBLISHED"
        ? "text-[#0C5FCD] bg-[#EBEBFE]"
        : "text-[#F99F0E] bg-[#FFFAE7]"
    }`}
      >
        {item?.status}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.authorName}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.clicks}
      </span>
    ),
    (item) => (
      <span className="text-[14px] text-[#14191F] leading-[114%]">
        {item?.publishedAt
          ? format(new Date(item.publishedAt), "MMM d, yyyy")
          : "N/A"}
      </span>
    ),
    (item) => (
      <div className="flex items-center justify-end gap-2">
        <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
          <EditIcon />
        </div>
        <div className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px]">
          <BlogDeleteModal id={String(item?.id)} refetch={refetch} />
        </div>
      </div>
    ),
  ];

  return (
    <div>
      <div className="overflow-auto">
        <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
          {/* search bar */}
          <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
            <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              All Posts
            </h2>
            <div className="flex xl:items-center flex-wrap gap-3 space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 focus:outline-0 border transition-colors duration-200"
                  placeholder="Search blog posts..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Select
                  value={status ?? "all"}
                  onValueChange={(value) => {
                    setStatus(value === "all" ? undefined : value);
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="PUBLISHED">Published</SelectItem>
                    <SelectItem value="DRAFT">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className=" py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
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
                  <SelectTrigger className="py-5 rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer">
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
                  className="flex items-center justify-center px-3 py-[13px] bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
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
              isLoadings={isLoading}
              currentItems={currentItems}
              tableHeader={tableHeader}
              tableRowDataRenderers={tableRowDataRenderers}
              isBg={false}
            />
          </div>

          {/* pagination */}
          <div className={`flex justify-center pt-12 pb-4`}>
            <PaginationComponent
              currentPage={meta?.page}
              totalPages={meta?.totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
