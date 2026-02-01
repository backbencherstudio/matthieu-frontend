import { BlogForm } from "@/components/AdminComponents/Cms/BlogForm";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";

export default function CreateBlogPage() {
  const breadLink = [
    {
      label: "Blog",
      href: "/admin/cms",
    },
    {
      label: "Create New Blog Post",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="pt-5">
        <BlogForm />
      </div>
    </div>
  );
}
