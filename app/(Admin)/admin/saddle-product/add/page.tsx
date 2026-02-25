"use client";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import SaddleProductForm from "@/components/SaddleProduct/SaddleProductForm";

export default function page() {
  const breadLink = [
    {
      label: "Saddle Product",
      href: "/admin/saddle-product",
    },
    {
      label: "Add Saddle Product",
    },
  ];
  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="pt-5">
        <SaddleProductForm />
      </div>
    </div>
  );
}
