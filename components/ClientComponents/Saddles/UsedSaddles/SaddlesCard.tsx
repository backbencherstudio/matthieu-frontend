import Image from 'next/image';
import React from 'react'


interface TrackProductListProps {
    items?: {
        id: number;
        name: string;
        code: string;
        category: string;
        image: string;
        price: string;
        material:string;
        year: string;
    }[];
    title?: string;
}



export default function UsedSaddlesProductList() {
    return (
        <div>
            {/* <h2 className='textSecondary lg:text-[36px] md-text-[32px] text-[28px] font-extrabold leading-[100%] tracking-[.72px] '></h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-12 mt-8">
                {items.map((item,index) => (
                    <div
                        key={index}
                        className=" p-3 bg-[#F8F9FB] shadow-none hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                    >
                        <div className=" w-full h-[307px] bg-white overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain"

                            />
                        </div>
                        <div className="mt-5 flex flex-col gap-[14px]">
                            <p className="lg:text-xl md:text-lg font-extrabold leading-[124%] text-[#4C526F] text-base">{item.category}</p>
                            <h3 className="textSecondary leading-[124%] lg:text-xl md:text-lg  text-base">{item.name}</h3>
                            <p className="textSecondary font-extrabold leading-[136%] lg:text-xl md:text-lg text-base ">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const items = [
  { 
    id: 1, 
    name: "17\" ARION JUMP", 
    code: "A000100", 
    price: "$3000.00", 
    material: "GRAINED CALF", 
    year: "2022",
    category: "Saddles",
    image: "/images/saddles/jumping.png"
  },
  { 
    id: 2, 
    name: "17\" ARION JUMP", 
    code: "A000100", 
    price: "$3000.00", 
    material: "GRAINED CALF", 
    year: "2022",
    category: "Saddles",
    image: "/images/saddles/jumping.png"
  },
  { 
    id: 3, 
    name: "17\" ARION JUMP", 
    code: "A000100", 
    price: "$3000.00", 
    material: "GRAINED CALF", 
    year: "2022",
    category: "Saddles",
    image: "/images/saddles/jumping.png"
  },
  { 
    id: 4, 
    name: "17\" DEVOUCOUX DRESSAGE", 
    code: "D000200", 
    price: "$3200.00", 
    material: "PREMIUM LEATHER", 
    year: "2023",
    category: "Saddles",
    image: "/images/saddles/jumping.png"
  },
  { 
    id: 5, 
    name: "17\" CWD JUMP", 
    code: "C000300", 
    price: "$2800.00", 
    material: "CUSTOM CALF", 
    year: "2022",
    category: "Saddles",
    image: "/images/saddles/jumping.png"
  },
  { 
    id: 6, 
    name: "17\" ANTARÉS ALLROUND", 
    code: "A000400", 
    price: "$3500.00", 
    material: "GRAINED CALF", 
    year: "2023",
    category: "Saddles",
    image: "/images/saddles/jumping.png"
  },
];