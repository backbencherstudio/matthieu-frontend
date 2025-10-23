import Link from "next/link";

export default function BestSellersSection() {
  return (
    <div>
      <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-extrabold md:leading-[100%] leading-[130%] textSecondary tracking-[.8px] text-center">
        SHOP OUR BEST SELLERS
      </h2>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-10 mt-8">
          {bestSellers.map((product) => (
            <Link
              href={product?.href}
              key={product.id}
              className=" flex flex-col gap-2 items-center justify-center "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover "
              />
              <p className="text-[#4A4C56] text-center md:text-xl text-base leading-[124%]  md:p-3 md:pb-5 font-normal">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const bestSellers = [
  {
    id: 1,
    name: "hUNTER bRIDLES",
    image: "/home/bridles.png",
    href: "/tack/bridles",
  },
  {
    id: 2,
    name: "lONG BELLY GRITH",
    image: "/home/grith.png",
    href: "/tack/girths",
  },
  {
    id: 3,
    name: "HELTER & LEAD ROPE",
    image: "/home/helter.png",
    href: "/tack/halters-and-ropes",
  },
];
