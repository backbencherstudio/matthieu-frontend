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
    <div className="maxContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[24px] px-[12px] ">
      {data.map((item) => (
        <div className=" ">
            <div
          key={item.id}
          className="bg-[#F8FAFB] shadow-sm hover:shadow-md transition-all duration-200 p-[12px] "
        >
          <Image
            src={item.img}
            alt={item.title}
            width={100}
            height={100}
            className=" w-full h-auto object-contain"
            unoptimized
          />
          <div className="p-4">
            <h2 className=" text-[#1F274B] text-[20px] font-normal leading-[124%] uppercase ">
              {item.title}
            </h2>
            <p className="text-[#1F274B] font-[Avenir] text-[20px] font-extrabold leading-[136%] normal-case pt-[12px]">
              {item.desc}
            </p>
            <div className="flex flex-col md:flex-row  gap-[12px] pt-[16px]">
                <div className=" bg-[#1F274B] w-full md:w-2/4">
            <button className="py-[16px] text-white  text-[16px] font-normal leading-[124%] text-center uppercase flex justify-center items-center mx-auto">BYE NOW</button>
          </div>
          <div className="w-full  md:w-2/4 border-1 border-[#262626]">
            <button className=" py-[16px] text-[16px] font-normal leading-[124%] text-center uppercase flex justify-center items-center mx-auto">add to cart</button>
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
