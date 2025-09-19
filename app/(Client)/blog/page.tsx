import React from "react";
import BreadCrumb from "@/components/ClientComponents/reuseable/BreadCrumb";
import Blog from "@/components/ClientComponents/Blog/Blog";

export default function BlogPage() {
  const breadLink = [
    {
      label: "BRAND",
      href: "/brand",
    },
    {
      label: "BLOG",
      href: "/Blog",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <Blog />
    </>
  );
}
