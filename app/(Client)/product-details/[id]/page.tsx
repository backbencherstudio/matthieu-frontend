
"use client"
import { Heart, ChevronDown } from 'lucide-react';

import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import React, { useState } from 'react'
import LoveIcon from '@/components/Icons/LoveIcon';

const productImages = [
    { imgLink: "/images/products-details/Rectangle 6602.png" },
    { imgLink: "/images/products-details/Rectangle 6603.png" },
    { imgLink: "/images/products-details/Rectangle 6604.png" },
    { imgLink: "/images/products-details/Rectangle 6605.png" },
]

export default function ProductDetailsPage() {

    const [selectedColor, setSelectedColor] = useState('BLACK');
    const [selectedSize, setSelectedSize] = useState('FULL');
    const [quantity, setQuantity] = useState(1);

    const colors = [
        { name: 'BLACK', code: '#070707' },
        { name: 'BROWN', code: '#6E412A' }
    ];

    const sizes = [
        { id: 'pony', label: 'PONY' },
        { id: 'cob', label: 'COB' },
        { id: 'full', label: 'FULL' },
        { id: 'oversize', label: 'OVERSIZE' }
    ];

    const benefits = [
        'Relieves pressure on corners of the mouth',
        'Foam padded headpiece and crown piece',
        'Minimize jaw shifting and stabilize the bit with the lower strap'
    ];

    const breadLink = [
        {
            label: "PRODUCTS",
            href: "/saddles",
        },
    ];

    return (
        <div>
            <BreadCrumb breadLink={breadLink} cart={true} />
            <div className=' lg:py-12 md:py-10 py-8 maxContainer'>
                <div className='flex gap-6'>
                    {/* image div */}
                    <div className='flex flex-col gap-6'>
                        {productImages?.map((img, index) => (
                            <img key={index} src={img?.imgLink} alt="" />
                        ))}
                    </div>
                    <div className='w-full'>
                        <div className="  bg-white ">
                            <div className="grid grid-cols-2 gap-8">
                                {/* Image Section */}
                                <div className='border'>
                                    <div className="flex items-center justify-center  ">
                                        <img
                                            src="/images/products-details/Rectangle 6602.png"
                                            alt="Double Noseband Bridle"
                                            className="w-full h-full object-cover "
                                        />
                                    </div>
                                </div>

                                {/* Product Details Section */}
                                <div className="flex flex-col gap-8">

                                    {/* Header */}
                                    <div className="flex flex-col gap-4">
                                        <div className='flex justify-between items-center'>
                                            <h1 className="lg:text-[32px] md:text-[28px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B] ">DOUBLE NOSEBAND BRIDLE</h1>
                                            <button className="">
                                                <LoveIcon className="" />
                                            </button>
                                        </div>
                                        <p className="lg:text-2xl md:text-xl text-lg leading-[100%] trtacking-[.48px] text-[#4C526F]">SKU: BR7D2NS</p>
                                    </div>

                                    <div className='h-[1px] bg-[#DFE1E7] w-full block'></div>
                                    <p className="lg:text-[32px] md:text-[28px] text-2xl tracking-[.64px] text-[#1F274B] leading-[100%]">US $580.00</p>
                                    {/* Color Selection */}
                                    <div className="flex flex-col gap-4">
                                        <p className="text-[#262626] lg:text-[20px] md:text-lg text-base tracking-[.40px] leading-[100%]">Color:</p>
                                        <div className='flex  gap-4'>

                                            {colors.map((color) => (
                                                <div className='flex flex-col justify-between items-center gap-2'>
                                                    <div className={`w-8 h-8 bg-[${color?.code}]`}>
                                                    </div>
                                                    <button
                                                        key={color.name}
                                                        onClick={() => setSelectedColor(color.name)}
                                                        className={`text-[#4C526F] text-base leading-[100%] tracking-[.32px] transition-all font-light`}
                                                    >
                                                        {color.name}
                                                    </button>

                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size Selection */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[#262626] leading-[100%] tracking-[.4px] lg:text-xl md:text-lg text-base ">Size:</p>
                                            <button className="underline text-base leading-[100%] tracking-[.32px] text-[#4C526F] cursor-pointer underline-offset-2 hover:no-underline">See Size Guide</button>
                                        </div>
                                        <div className="flex gap-3">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size.id}
                                                    onClick={() => setSelectedSize(size.id.toUpperCase())}
                                                    className={`py-3 w-full text-base  transition-all  leading-[100%] ${selectedSize === size.id.toUpperCase()
                                                        ? 'bg-[#4C526F] text-white font-extrabold'
                                                        : 'bg-[#696E86] text-white '
                                                        }`}

                                                >
                                                    {size.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits Section */}
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Benefits:</p>
                                        <ul className="space-y-3">
                                            {benefits.map((benefit, index) => (
                                                <li key={index} className="flex gap-3 text-sm text-gray-700">
                                                    <span className="text-indigo-700 font-bold mt-1">•</span>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                                            More details
                                        </button>
                                    </div>

                                    {/* Buttons Section */}
                                    <div className="space-y-3">
                                        <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-4 transition flex items-center justify-center gap-2">
                                            <span>BUY WITH</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                            </svg>
                                        </button>

                                        <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-4 border-2 border-gray-900 transition">
                                            ADD TO CART
                                        </button>

                                        <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-semibold py-2">
                                            More payment options
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
