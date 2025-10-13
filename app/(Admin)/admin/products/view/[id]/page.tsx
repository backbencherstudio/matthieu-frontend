import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({ params }: { params: any }) {

  const id = params?.id;

  
  const breadLink = [
    {
      label: "Products Management",
      href: "/admin/products",
    },
    {
      label: "Product Detail",
    },
  ];
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
            <Link
              href={`/admin/products/edit/${params.id}`}
              className="cmn-btn"
            >
              Edit Product
            </Link>
          </div>
          {/* Body */}
          <div className="mt-4">
            <div className="grid lg:grid-cols-[40%_60%] gap-6">
              {/* Gallery */}
              <div>
                <h3 className="text-base font-extrabold text-secondary-text">
                  Product Images
                </h3>

                <div className="my-3">
                  <Image
                    src="/images/admin/products/thumbnail.png"
                    alt="product-image"
                    width={150}
                    height={150}
                    quality={100}
                    className="object-cover rounded-[8px]"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <div>
                    <Image
                      src="/images/admin/products/products-1.png"
                      alt="Product Image"
                      width={140}
                      height={140}
                      className="w-full h-auto object-cover rounded-[8px]"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/admin/products/products-2.png"
                      alt="Product Image"
                      width={140}
                      height={140}
                      className="w-full h-auto object-cover rounded-[8px]"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/admin/products/products-3.png"
                      alt="Product Image"
                      width={140}
                      height={140}
                      className="w-full h-auto object-cover rounded-[8px]"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/admin/products/products-4.png"
                      alt="Product Image"
                      width={140}
                      height={140}
                      className="w-full h-auto object-cover rounded-[8px]"
                    />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div>
                <div className="flex flex-col gap-4 mb-3">
                  <h3 className="text-base font-extrabold text-secondary-text">
                    Product Name
                  </h3>
                  <p className="text-base text-secondary-text">
                    Double Noseband Bridle
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-base font-extrabold text-secondary-text">
                      Product Price
                    </h3>
                    <p className="text-base text-secondary-text">$260.00</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-base font-extrabold text-secondary-text">
                      Product ID
                    </h3>
                    <p className="text-base text-secondary-text">
                      SKU: BR7D2NS
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-base font-extrabold text-secondary-text">
                      Category
                    </h3>
                    <p className="text-base text-secondary-text">
                      {"Saddles > BridlesSaddles > Bridles"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-base font-extrabold text-secondary-text">
                      Sub Category
                    </h3>
                    <p className="text-base text-secondary-text">
                      {"Saddles > BridlesSaddles > Bridles"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-base font-extrabold text-secondary-text">
                      Product Size
                    </h3>
                    <p className="text-base text-secondary-text">Pony</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-base font-extrabold text-secondary-text">
                      Product Color
                    </h3>
                    <p className="text-base text-secondary-text">Black</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <h1 className="text-base font-extrabold text-secondary-text">
                  Description
                </h1>
                <p className="text-base text-secondary-text">
                  Arion's Double Noseband Bridle combines the effect of a
                  regular noseband and a drop noseband. The lateral strap is
                  designed to minimize jaw shifting and stabilize the bit
                  without pressing on the corners of the mouth
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

              <div className="flex flex-col gap-4">
                <h1 className="text-base font-extrabold text-secondary-text">
                  Leather Care Guide
                </h1>
                <p className="text-base text-secondary-text">
                  Grab your The Cleaning Kit product and let's get to work!
                  Begin by removing all of the dust from your bridle. Then,
                  clean every piece of your bridle with the Leather Soap, wipe
                  your bridle down with a clean towel and store in a dry area.
                  Clean after every use for best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
