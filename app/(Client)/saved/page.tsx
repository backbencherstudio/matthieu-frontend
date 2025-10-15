import Image from "next/image";
import React from "react";

interface SavedItem {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const Saved: React.FC = () => {
  // Base item
  const baseItem: SavedItem = {
    id: 1,
    img: "/saved/saved.png",
    title: "Anatomical double noseband bridle",
    desc: "$370.00",
  };

  // Create 4 copies of the same item
  const data: SavedItem[] = Array(4)
    .fill(null)
    .map((_, index) => ({ ...baseItem, id: index + 1 }));

  return (
    <div className="maxContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[24px] py-8 ">
      {data.map((item) => (
        <div className="pb-[24px] px-[24px]">
            <div
          key={item.id}
          className="bg-[#F8FAFB] shadow-sm hover:shadow-md transition-all duration-200 "
        >
          <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={254}
            className="object-cover w-full h-auto p-[12px] "
            unoptimized
          />
          <div className="p-4">
            <h2 className=" mb-1 text-[#1F274B] font-[Avenir] text-[20px] font-normal leading-[124%] uppercase px-[12px]">
              {item.title}
            </h2>
            <p className="text-[#1F274B] font-[Avenir] text-[20px] font-extrabold leading-[136%] normal-case pt-[14px] pb-[20px] px-[12px]">
              {item.desc}
            </p>
            <div className="flex gap-[12px]">
                <div className=" bg-[#1F274B] w-2/4">
            <button className="py-[16px] px-[32px] text-white font-[Avenir] text-[16px] font-normal leading-[124%] uppercase flex justify-center items-center mx-auto">BYE NOW</button>
          </div>
          <div className=" w-2/4 border-1 border-[#262626]">
            <button className="py-[16px] px-[32px]font-[Avenir] text-[16px] font-normal leading-[124%] uppercase text-center flex justify-center items-center mx-auto">add to cart</button>
          </div>
            </div>
          </div>
          
        </div>
        </div>
      ))}
    </div>
  );
};

export default Saved;
