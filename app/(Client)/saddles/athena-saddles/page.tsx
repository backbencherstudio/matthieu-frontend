import SAddlesCategoryItems from '@/components/ClientComponents/Saddles/SAddlesCategoryItems'
import React from 'react'

const saddlesItems = {
    label: "ATHENA SADDLES",
    subtitle: "TAILOR MADE",
    items: ["JUMPING", "DRESSAGE", "CROSS-COUNTRY", "KIDS"],
    btns: [
        { title: "Connect with a saddle expert", href: "" },
    ],
    video : "/videos/athena.mp4",
}

export default function AthenaSaddlesPage() {
    return (
        <div className='maxContainer lg:py-[80px] py-[60px]' >
            <SAddlesCategoryItems saddlesItems = {saddlesItems}/>
        </div>
    )
}
