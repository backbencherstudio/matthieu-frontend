import { useGetAllTackProductsQuery } from "@/src/redux/client/tack-product/tackProduct";
import Link from "next/link";

function ShopAccessories() {
  const { data } = useGetAllTackProductsQuery("");
  const leatherCare = data?.find(
    (item) => item?.subcategory === "LEATHER_CARE",
  );

  const products = leatherCare?.products;

  console.log(products);
  return (
    <div>
      <h1 className="text-[32px] font-extrabold leading-[100%] text-center text-[#1F274B]">
        SHOP ACCESSORIES
      </h1>

      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 mt-10">
        {products?.slice(0, 4).map((item, index) => (
          <Link href={`/product-details/${item.id}`} key={index}>
            <div className="p-3 bg-[#F8F9FB]">
              <div className="w-full bg-white overflow-hidden">
                <img src={item?.thumbnailImage} alt="bridles" />
              </div>

              <div className="mt-5 flex flex-col gap-[14px]">
                <p className="lg:text-xl md:text-lg font-extrabold leading-[124%] text-[#4C526F] text-base">
                  {item?.name}
                </p>

                <p className="textSecondary font-extrabold leading-[136%] lg:text-xl md:text-lg text-base">
                  ${item?.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ShopAccessories;
