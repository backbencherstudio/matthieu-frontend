import SAddlesCategoryItems from '@/components/ClientComponents/Saddles/SAddlesCategoryItems'
import React from 'react'

const saddlesItems = {
    label: "ATLAS SADDLES",
    subtitle: "full CUSTOM",
    items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
    btns: [
        { title: "Connect with a saddle expert", href: "" },
    ],
    images: [
        {
            id: 1,
            name: "JUMPING SADDLES",
            image: "/images/saddles/atlas-jumping.png",
        },
        {
            id: 2,
            name: "CROSS COUNTRY SADDLES",
            image: "/images/saddles/atlas-cross.png",
        },
        {
            id: 3,
            name: "DRESSAGE SADDLES",
            image: "/images/saddles/atlas-dressage.png",
        },
        {
            id: 4,
            name: "KIDS SADDLES",
            image: "/images/saddles/atlas-kids.png",
        },
    ]
}

export default function AtlasSaddlesPage() {
    return (
        <div className='maxContainer lg:py-[80px] py-[60px]'>
            <SAddlesCategoryItems  saddlesItems = {saddlesItems} />
        </div>
    )
}
