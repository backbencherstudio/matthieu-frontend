import EditForm from "@/components/AdminComponents/Products/Edit/EditForm";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProduct({ params }: PageProps) {
  const { id } = await params;

  const breadLink = [
    {
      label: "Products Management",
      href: "/admin/products",
    },
    {
      label: "Edit Product",
    },
  ];
  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb breadLink={breadLink} />
      {/* Edit Form */}
      <div className="pt-5">
        <EditForm id={id} />
      </div>
    </div>
  );
}
