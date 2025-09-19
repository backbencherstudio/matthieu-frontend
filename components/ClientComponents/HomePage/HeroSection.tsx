import React from 'react'
import Image from 'next/image'

const heroData = [
    {
        title: "BRAND",
        img: "/home/brand.jpg"
    },
    {
        title: "SADDLES",
        img: "/home/saddles.jpg"
    },
    {
        title: "TACK",
        img: "/home/tack.jpg"
    }
]

export default function HeroSection() {
    return (
        <div className="maxContainer mb-12">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {heroData.map((item, index) => (
                    <div 
                        key={index}
                        className="relative group cursor-pointer overflow-hidden  transition-all duration-300"
                    >
                        {/* Background Image */}
                        <div className="relative h-[200px] md:h-[300px]">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-50 transition-all duration-300"></div>
                        </div>
                        
                        {/* Title Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white  text-2xl  lg:text-[32px] font-extrabold leading-[100%] tracking-wider drop-shadow-lg">
                                {item.title}
                            </h3>
                        </div>
                        
                        {/* Hover effect border */}
                        <div className="absolute inset-0 border-2 border-transparent  transition-all duration-300 "></div>
                    </div>
                ))}
            </div>
        </div>
    )
}