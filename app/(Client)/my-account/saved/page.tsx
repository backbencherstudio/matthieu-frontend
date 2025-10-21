// app/components/Saved.tsx
import Image from "next/image";
import React from "react";

interface SavedItem {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const Saved: React.FC = () => {
  const data: SavedItem[] = [
    {
      id: 1,
      img: "/saved/saved.png",
      title: "Anatomical double noseband bridle",
      desc: "$370.00",
    },
    {
      id: 2,
      img: "/saved/saved.png",
      title: "Anatomical double noseband bridle",
      desc: "$370.00",
    },
    {
      id: 3,
      img: "/saved/saved.png",
      title: "Anatomical double noseband bridle",
      desc: "$370.00",
    },
    {
      id: 4,
      img: "/saved/saved.png",
      title: "Anatomical double noseband bridle",
      desc: "$370.00",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-[24px] pb-[16px]">
      {data.map((item) => (
        <div className="">
          <div
            key={item?.id}
            className="bg-[#F8FAFB] shadow-sm hover:shadow-md transition-all duration-200 p-[12px]  "
          >
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className=" w-full h-auto object-contain"
              unoptimized
            />
            <div className="">
              <h2 className=" text-[#1F274B] text-[14px] md:text-[18px] lg:text-[20px] font-normal leading-[124%] uppercase ">
                {item.title}
              </h2>
              <p className="text-[#1F274B] font-[Avenir] text-[20px] font-extrabold leading-[136%] normal-case pt-[12px]">
                {item.desc}
              </p>
              <div className="flex flex-col md:flex-row  gap-[12px] pt-[16px]">
                <div className=" bg-[#1F274B] w-full text-center uppercase flex justify-center items-center mx-auto">
                  <button className=" py-[12px] px-[25px] md:py-[10px] lg:py-[16px] md:px-[12px] text-white  cursor-pointer text-[16px] text-base font-normal leading-[124%] text-center uppercase ">
                    BUY NOW 
                  </button>
                </div>
                <div className="w-full   border-1 border-[#262626] text-center lg:flex justify-center items-center mx-auto">
                  <button className="py-[12px] px-[25px] md:py-[10px]  lg:py-[16px] md:px-[12px] cursor-pointer text-[16px] font-normal leading-[124%] uppercase">
                    add to cart
                  </button>
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