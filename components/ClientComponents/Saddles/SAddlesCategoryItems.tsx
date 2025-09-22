
import SeparatorIcon from '@/components/Icons/SeparatorIcon'
import { Separators } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'


interface SAddlesCategoryItemsProps {
    saddlesItems: {
        label: string;
        subtitle: string;
        items?: string[];
        btns?: { title: string; href: string }[];
        images?: { id: number; name: string; image: string }[];
    };
}


export default function SAddlesCategoryItems({ saddlesItems }: SAddlesCategoryItemsProps) {
    return (
        <div className='flex items-center justify-center flex-col '>
            <h1 className='lg:text-[40px] md:text-[36px] text-[28px] font-extrabold md:leading-[100%] leading-[130%] textSecondary tracking-[.8px] text-center'>{saddlesItems?.label}</h1>
            <p className='text-[#4C526F] md:text-2xl text-lg font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3'>{saddlesItems?.subtitle}</p>
            <div className="flex md:mt-6 mt-4">
                {saddlesItems?.items?.map((itm, index) => (
                    <div key={index} className="flex items-center font-normal text-sm leading-[100%] tracking-[.28px] uppercase ">
                        <span className="md:py-[4px] py-[2px] textPrimary lg:text-2xl md:text-lg text-base font-extrabold leading-[100%] tracking-[.48px]  " key={index}>
                            {itm}
                        </span>
                        {index !== saddlesItems.items.length - 1 && (
                            <Separators
                                className="md:mx-3 mx-1.5 textPrimary "
                                orientation="vertical"
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className='flex md:flex-row flex-col gap-4 md:my-12 my-8'>
                {saddlesItems?.btns?.map((btn, index) => (
                    <Link href={btn?.href} key={index} className={` md:px-8 px-4 md:py-4 py-3  bg-[#1F274B] hover:bg-[#1F274B]/80 transition-colors  flex items-center justify-center `}>
                        <span className='text-white md:text-base text-sm font-medium leading-[136%] '>{btn?.title}</span>
                    </Link>
                ))}
            </div>
            <div>
                <div className='grid  md:grid-cols-2 grid-cols-1 gap-8 md:max-w-[952px]'>
                    {saddlesItems?.images.map((product) => (
                        <div key={product.id} className=' flex flex-col gap-5 items-center justify-center '>
                            <img src={product.image} alt={product.name} className='w-full h-full object-cover ' />
                            <p className='text-[#4A4C56] text-center md:text-xl text-base leading-[124%]   md:pb-5 font-normal'>{product.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
