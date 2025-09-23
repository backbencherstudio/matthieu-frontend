import Image from 'next/image';
import React from 'react'


interface TrackProductListProps {
    items: {
        id: number;
        name: string;
        category: string;
        image: string;
        price: string;
    }[];
    title?: string;
}

export default function TrackProductList({ items,title }:TrackProductListProps) {
    return (
        <div>
            <h2 className='textSecondary lg:text-[36px] md-text-[32px] text-[28px] font-extrabold leading-[100%] tracking-[.72px] '>{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:mt-12 mt-8">
                {items.map((item,index) => (
                    <div
                        key={index}
                        className=" p-3 bg-[#F8F9FB] shadow-none hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                    >
                        <div className=" w-full  bg-white overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className=" "

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
