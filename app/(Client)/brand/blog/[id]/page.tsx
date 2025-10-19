import React from "react";
import BreadCrumbDetails from "@/components/ClientComponents/reuseable/BreadCrumbDetails";
import BlogDetailPage from "@/components/ClientComponents/Blog/BlogDetails/BlogDetailsSection";

interface PageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: PageProps) {
  const breadLink = [
    {
      label: "BRAND",
      href: "/brand",
    },
    {
      label: "BLOG",
      href: "/brand/blog",
    },
    {
      label: "BLOG DETAIL",
      href: `/brand/blog/${params.id}`,
    },
  ];

  return (
    <>
      <BreadCrumbDetails breadLink={breadLink} />
      {/* id={parseInt(params.id)}  */}
      <BlogDetailPage />
    </>
  );
}
