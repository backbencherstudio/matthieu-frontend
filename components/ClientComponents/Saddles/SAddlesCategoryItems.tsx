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
    <div className="lg:flex gap-x-8 justify-center">
      <div className="p-8 bg-[#1F274B] flex items-center justify-center lg:w-[374px]">
        <div>
          <p className="lg:text-[32px] md:text-[30px] text-[28px] font-extrabold md:leading-[100%] leading-[130%] textSecondary tracking-[.8px] text-center text-[#FFF]">
            {saddlesItems?.label}
          </p>
          <p className="text-[#E9E9ED] md:text-2xl text-lg font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center">
            {saddlesItems?.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href={"/saddles/saddlery-expert"}
              className="px-8 py-4 bg-[#FFF] cursor-pointer"
            >
              <span className="text-[16px] text-[#1F274B] leading-[136%] font-extrabold">
                TRY A SADDLE
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[680px]">
        <div className="grid  md:grid-cols-2 grid-cols-1 gap-8 w-full">
          {saddlesItems?.images?.map((product) => (
            <Link
              href="/saddles/jumping"
              key={product.id}
              className=" flex flex-col gap-5 items-center justify-center "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[320px] h-[312px] object-cover "
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
