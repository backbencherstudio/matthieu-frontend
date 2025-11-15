import Link from "next/link";

interface SAddlesCategoryItemsProps {
  saddlesItems: {
    label: string;
    subtitle: string;
    items?: string[];
    btns?: { title: string; href: string }[];
    images?: { id: number; name: string; image: string }[];
    video?: string;
  };
}

export default function SAddlesCategoryItems({
  saddlesItems,
}: SAddlesCategoryItemsProps) {
  return (
    <div className="flex gap-8">
      <div className="p-8 bg-[#1F274B] flex items-center justify-center">
        <div>
          <h1 className="lg:text-[32px] md:text-[30px] text-[28px] font-extrabold md:leading-[100%] leading-[130%] textSecondary tracking-[.8px] text-center text-[#FFF]">
            {saddlesItems?.label}
          </h1>
          <p className="text-[#E9E9ED] md:text-2xl text-lg font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center">
            {saddlesItems?.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center">
            <button className="px-8 py-4 bg-[#FFF]">TRY A SADDLE</button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid  md:grid-cols-2 grid-cols-1 gap-8 md:max-w-[952px]">
          {saddlesItems?.images?.map((product) => (
            <Link
              href="/product-details/1"
              key={product.id}
              className=" flex flex-col gap-5 items-center justify-center "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover "
              />
              <p className="text-[#4A4C56] text-center md:text-xl text-base leading-[124%]   md:pb-5 font-normal">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
