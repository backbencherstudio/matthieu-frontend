import React from "react";
import BreadCrumbDetails from "@/components/ClientComponents/reuseable/BreadCrumbDetails";
import BlogDetailPage from "@/components/ClientComponents/Blog/BlogDetails/BlogDetailsSection";

export default function BlogDetailsPage() {
  const breadLink = [
    {
      label: "BRAND",
      href: "/brand",
    },
    {
      label: "BLOG",
      href: "/Blog",
    },
    {
      label: "BLOG DETAIL",
      href: "/Blog",
    },
  ];

  return (
    <>
      <BreadCrumbDetails breadLink={breadLink} />
      <BlogDetailPage/>
    </>
  );
}