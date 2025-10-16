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
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-[12px] gap-[24px] pb-[16px]">
      {data.map((item) => (
        <div key={item.id} className="">
          <div className="bg-[#F8FAFB] shadow-sm hover:shadow-md transition-all duration-200 p-[12px] ">
            <Image
              src={item.img}
              alt={item.title}
              width={425}
              height={300}
              className="w-full h-auto object-contain"
              priority={item.id === 1}
            />
            <div className="">
              <h2
                className="md:text-[16px] lg:text-[16px] font-normal leading-[124%] uppercase font-avenir text-primary"
              >
                {item.title}
              </h2>
              <p className="md:text-[10px] lg:text-[20px]  text-[#1F274B] font-avenir text-[20px] font-extrabold leading-[136%] normal-case pt-[12px]">
                {item.desc}
              </p>
              <div className="flex flex-col md:flex-row gap-[12px] pt-[16px]">
                <div className="bg-[#1F274B] w-full md:w-3/6 ">
                  <div className="flex justify-center items-center mx-auto h-full">
                    <button className=" md:text-[10px] lg:text-[16px] py-[16px] md:py-[12px] text-white text-[14px] font-normal leading-[124%] text-center uppercase flex justify-center items-center mx-auto w-full cursor-pointer">
                    BUY NOW
                  </button>
                  </div>
                </div>
                <div className="w-full md:w-3/6 border border-[#262626]">
                  <button className="md:text-[10px] lg:text-[16px]  py-[16px] md:py-[12px] text-[16px] font-normal leading-[124%] text-center uppercase flex justify-center items-center mx-auto w-full cursor-pointer">
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