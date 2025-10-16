import Image from "next/image";
import React from "react";

interface SavedItem {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const Saved: React.FC = () => {
  // Corrected data structure
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
    <div className="maxContainer grid grid-cols-1 md:grid-cols-2 gap-9">
      {data.map((item) => (
        <div key={item.id} className="">
          <div
            className="bg-[#F8FAFB] shadow-sm hover:shadow-md transition-all duration-200 p-[12px]"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-auto object-contain"
              unoptimized
            />
            <div className="p-4">
              <h2 className="text-[#1F274B] text-[20px] font-normal leading-[124%] uppercase">
                {item.title}
              </h2>
              <p className="text-[#1F274B] font-[Avenir] text-[20px] font-extrabold leading-[136%] normal-case pt-[12px]">
                {item.desc}
              </p>
              <div className="flex flex-col md:flex-row gap-[12px] pt-[16px]">
                <div className="bg-[#1F274B] w-full md:w-2/4">
                  <button className="py-[16px] text-white text-[16px] font-normal leading-[124%] text-center uppercase flex justify-center items-center mx-auto">
                    BUY NOW
                  </button>
                </div>
                <div className="w-full md:w-2/4 border-1 border-[#262626]">
                  <button className="py-[16px] text-[16px] font-normal leading-[124%] text-center uppercase flex justify-center items-center mx-auto">
                    ADD TO CART
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