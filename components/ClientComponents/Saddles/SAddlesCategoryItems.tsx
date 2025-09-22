
import { Separators } from '@/components/ui/separator'
import React from 'react'


const SaddlesItems = {
    label: "Arion Saddles",
    subtitle: "full CUSTOM",
    items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
    btn1: "Connect with a saddle expert",
    btn2: "customize your saddle"
}


export default function SAddlesCategoryItems() {
    return (
        <div className='flex items-center justify-center flex-col '>
            <h1>{SaddlesItems?.label}</h1>
            <p>{SaddlesItems?.subtitle}</p>
            <div className="flex ">
                {SaddlesItems?.items?.map((itm, index) => (
                    <div key={index} className="flex items-center font-normal text-sm leading-[100%] tracking-[.28px] uppercase ">
                        <span className="py-[3px]" key={index}>
                            {itm}
                        </span>
                        {index !== SaddlesItems.items.length - 1 && (
                            <Separators
                                className="mx-3 text-red-500 bg-red-500 h-5 "
                                orientation="vertical"
                            />
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}
