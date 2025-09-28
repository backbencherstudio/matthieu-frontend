import React from 'react'
import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import SAddlesCategoryItems from '@/components/ClientComponents/Saddles/SAddlesCategoryItems'

export default function AllSaddlesPage() {

    const breadLink = [
        {
            label: "SADDLES",
            href: "/saddles",
        },
    ];

    return (
        <div>
            <BreadCrumb breadLink={breadLink} />
            <div className='maxContainer'>
                <div className=' lg:pt-[80px] lg:pb-[60px] pt-[60px] pb-[50px]'>
                    <SAddlesCategoryItems saddlesItems={saddlesItemsArion} />
                </div>
                <div className=' lg:py-[60px] py-[50px]'>
                    <SAddlesCategoryItems saddlesItems={saddlesItemsAtlas} />
                </div>
                <div className=' lg:py-[80px] py-[60px]'>
                    <SAddlesCategoryItems saddlesItems={saddlesItemsAthena} />
                </div>

            </div>
        </div>
    )
}


const saddlesItemsArion = {
    label: "Arion Saddles",
    subtitle: "full CUSTOM",
    items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
    btns: [
        { title: "Connect with a saddle expert", href: "" },
        { title: "CUSTOMIZE YOUR SADDLE", href: "" },
    ],
    images: [
        {
            id: 1,
            name: "JUMPING SADDLES",
            image: "/images/saddles/jumping.png",
        },
        {
            id: 2,
            name: "CROSS COUNTRY SADDLES",
            image: "/images/saddles/cross.png",
        },
        {
            id: 3,
            name: "DRESSAGE SADDLES",
            image: "/images/saddles/dressage.png",
        },
        {
            id: 4,
            name: "KIDS SADDLES",
            image: "/images/saddles/kids.png",
        },
    ]
}
const saddlesItemsAtlas = {
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

const saddlesItemsAthena = {
    label: "ATHENA SADDLES",
    subtitle: "TAILOR MADE",
    items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
    btns: [
        { title: "Connect with a saddle expert", href: "" },
    ],
    video: "/videos/athena.mp4",
}