import AddForm from "@/components/AdminComponents/Products/add/AddForm";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import React from "react";

export default function AddProduct() {
  const breadLink = [
    {
      label: "Products Management",
      href: "/admin/products",
    },
    {
      label: "Add Product",
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb breadLink={breadLink} />
      {/* Edit Form */}
      <div className="pt-5">
        <AddForm />
      </div>
    </div>
  );
}
