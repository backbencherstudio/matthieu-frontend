"use client";
import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import { DataTable } from "../../reusable/DataTable";
import { Data } from "@/lib/TableType";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "productColor",
    header: "Product Color",
  },
  {
    accessorKey: "productSize",
    header: "Product Size",
  },
  {
    accessorKey: "price",
    header: "Product Price",
  },
  {
    accessorKey: "stock",
    header: "Stock Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.status == "In Stock" ? (
            <span className="text-success-text bg-success-bg py-1 px-3 rounded-[6px]">
              In Stock
            </span>
          ) : row.original.status == "Low Stock" ? (
            <span className="text-progress-text bg-progress-bg py-1 px-3 rounded-[6px]">
              Low Stock
            </span>
          ) : (
            <span className="text-error-text bg-error-bg py-1 px-3 rounded-[6px]">
              Out of Stock
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "productImages",
    header: "Product Images",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {row.original.productImages?.map((image) => (
            <img
              key={image.image}
              src={image.image}
              alt="Product Image"
              className="w-12 h-12 object-cover"
            />
          ))}
        </div>
      );
    },
  },
];

export default async function ProductView({ params }: PageProps) {
  const { id } = await params;
  const breadLink = [
    {
      label: "Products Management",
      href: "/admin/products",
    },
    {
      label: "Product Detail",
    },
  ];

  const data: Data[] = [
    {
      id: 1,
      productColor: "Black",
      productSize: "Pony",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
      productImages: [
        {
          image: "/images/products-details/Rectangle 6602.png",
        },
        {
          image: "/images/products-details/Rectangle 6603.png",
        },
        {
          image: "/images/products-details/Rectangle 6604.png",
        },
        {
          image: "/images/products-details/Rectangle 6605.png",
        },
      ],
    },
    {
      id: 2,
      productColor: "Black",
      productSize: "Pony",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
      productImages: [
        {
          image: "/images/products-details/Rectangle 6602.png",
        },
        {
          image: "/images/products-details/Rectangle 6603.png",
        },
        {
          image: "/images/products-details/Rectangle 6604.png",
        },
        {
          image: "/images/products-details/Rectangle 6605.png",
        },
      ],
    },
    {
      id: 3,
      productColor: "Black",
      productSize: "Pony",
      price: "$260.00",
      stock: 45,
      status: "In Stock",
      productImages: [
        {
          image: "/images/products-details/Rectangle 6602.png",
        },
        {
          image: "/images/products-details/Rectangle 6603.png",
        },
        {
          image: "/images/products-details/Rectangle 6604.png",
        },
        {
          image: "/images/products-details/Rectangle 6605.png",
        },
      ],
    },
  ];

  // Dropdown filters
  const dropFilters = <></>;

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb breadLink={breadLink} />
      {/* Details */}
      <div className="pt-5">
        <div className="bg-white p-4 rounded-[8px]">
          {/* Header */}
          <div className="flex flex-wrap gap-2 justify-between items-center">
            <h1 className="text-2xl font-extrabold text-primary-text">
              Product Detail
            </h1>
            <Link href={`/admin/products/edit/${id}`} className="cmn-btn">
              Edit Product
            </Link>
          </div>
          {/* Body */}
          <div className="flex flex-wrap md:grid md:grid-cols-3 justify-between gap-y-3 gap-x-5 mt-5">
            <div className="flex flex-col gap-4 mb-3">
              <h3 className="text-base font-extrabold text-secondary-text">
                Product Name
              </h3>
              <p className="text-base text-secondary-text">
                Double Noseband Bridle
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-3">
              <h3 className="text-base font-extrabold text-secondary-text">
                Product ID
              </h3>
              <p className="text-base text-secondary-text">SKU: BR7D2NS</p>
            </div>

            <div className="flex flex-col gap-4 mb-3">
              <h3 className="text-base font-extrabold text-secondary-text">
                Category
              </h3>
              <p className="text-base text-secondary-text">
                {"Saddles > Bridles"}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-3 gap-x-5 mt-5">
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-extrabold text-secondary-text">
                Description
              </h1>
              <p className="text-base text-secondary-text">
                Arion's Double Noseband Bridle combines the effect of a regular
                noseband and a drop noseband. The lateral strap is designed to
                minimize jaw shifting and stabilize the bit without pressing on
                the corners of the mouth
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-base font-extrabold text-secondary-text">
                Leather Care Guide
              </h1>
              <p className="text-base text-secondary-text">
                Grab your The Cleaning Kit product and let's get to work! Begin
                by removing all of the dust from your bridle. Then, clean every
                piece of your bridle with the Leather Soap, wipe your bridle
                down with a clean towel and store in a dry area. Clean after
                every use for best results.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-base font-extrabold text-secondary-text">
                Benefits
              </h1>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-base text-secondary-text">
                  Relieves pressure on corners of the mouth
                </li>
                <li className="text-base text-secondary-text">
                  Foam padded headpiece and crown piece
                </li>
                <li className="text-base text-secondary-text">
                  Minimize jaw shifting and stabilize the bit with the lower
                  strap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="mt-5 pt-5 bg-white p-4 rounded-[8px]">
        <DataTable
          title="Product Detail"
          columns={columns}
          data={data}
          customFilters={dropFilters}
        />
      </div>
    </div>
  );
}
