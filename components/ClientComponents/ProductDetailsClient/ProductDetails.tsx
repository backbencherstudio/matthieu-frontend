
"use client"


import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import React, { useState } from 'react'
import LoveIcon from '@/components/Icons/LoveIcon';
import AppleIcon from '@/components/Icons/AppleIcon';
import ProductDetailsAccordion from './ProductDetailsAccordion';
import RelatedProduts from './RelatedProduts';

const productImages = [
    { imgLink: "/images/products-details/Rectangle 6602.png" },
    { imgLink: "/images/products-details/Rectangle 6603.png" },
    { imgLink: "/images/products-details/Rectangle 6604.png" },
    { imgLink: "/images/products-details/Rectangle 6605.png" },
]

export default function ProductDetailsClient() {

    const [selectedColor, setSelectedColor] = useState('BLACK');
    const [selectedSize, setSelectedSize] = useState('FULL');
    const [quantity, setQuantity] = useState(1);

    const colors = [
        { name: 'BLACK', code: 'bg-[#070707]' },
        { name: 'BROWN', code: 'bg-[#6E412A]' }
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
                <div className='flex xl:flex-row flex-col gap-6'>
                    {/* image div */}
                    <div className='xl:block hidden'>
                        <div className='xl:flex xl:flex-col grid grid-cols-4 gap-4 '>
                            {productImages?.map((img, index) => (
                                <img key={index} src={img?.imgLink} alt="" className='object-contain w-full h-full ' />
                            ))}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="  bg-white ">
                            <div className="grid md:grid-cols-2 xl:gap-8 lg:gap-6 gap-4">
                                {/* Image Section */}
                                <div className='flex flex-col gap-3'>
                                    <div className="flex items-center justify-center  ">
                                        <img
                                            src="/images/products-details/Rectangle 6602.png"
                                            alt="Double Noseband Bridle"
                                            className="w-full h-full object-cover "
                                        />
                                    </div>
                                    <div className='block xl:hidden'>
                                        <div className='xl:flex xl:flex-col grid grid-cols-4 gap-4 '>
                                            {productImages?.map((img, index) => (
                                                <img key={index} src={img?.imgLink} alt="" className='object-contain w-full h-full ' />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Product Details Section */}
                                <div className="flex flex-col xl:gap-8 lg:gap-6 gap-4">

                                    {/* Header */}
                                    <div className="flex flex-col xl:gap-4 gap-3">
                                        <div className='flex justify-between items-center'>
                                            <h1 className="xl:text-[32px] text-2xl font-extrabold leading-[100%] tracking-[0.64px] text-[#1F274B] ">DOUBLE NOSEBAND BRIDLE</h1>
                                            <button className="">
                                                <LoveIcon className="xl:size-12 size-8" />
                                            </button>
                                        </div>
                                        <p className="xl:text-2xl md:text-xl text-lg leading-[100%] trtacking-[.48px] text-[#4C526F]">SKU: BR7D2NS</p>
                                    </div>

                                    <div className='h-[1px] bg-[#DFE1E7] w-full '></div>
                                    <p className="xl:text-[32px]  text-2xl tracking-[.64px] text-[#1F274B] leading-[100%]">US $580.00</p>
                                    {/* Color Selection */}
                                    <div className="flex flex-col xl:gap-4 gap-3">
                                        <p className="text-[#262626] xl:text-[20px]  text-base tracking-[.40px] leading-[100%]">Color:</p>
                                        <div className='flex  gap-4'>

                                            {colors.map((color, index) => (
                                                <div key={index} className='flex flex-col justify-between items-center gap-2'>
                                                    <div className={`xl:w-8 xl:h-8 w-6 h-6 ${color?.code}`}>
                                                    </div>
                                                    <button
                                                        key={color.name}
                                                        onClick={() => setSelectedColor(color.name)}
                                                        className={`text-[#4C526F] xl:text-base text-sm leading-[100%] tracking-[.32px] transition-all font-light`}
                                                    >
                                                        {color.name}
                                                    </button>

                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size Selection */}
                                    <div className="flex flex-col xl:gap-4 gap-3">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[#262626] leading-[100%] tracking-[.4px] xl:text-xl md:text-lg text-base ">Size:</p>
                                            <button className="underline text-base leading-[100%] tracking-[.32px] text-[#4C526F] cursor-pointer underline-offset-2 hover:no-underline">See Size Guide</button>
                                        </div>
                                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size.id}
                                                    onClick={() => setSelectedSize(size.id.toUpperCase())}
                                                    className={`md:py-3 py-2 w-full  md:text-base text-sm  transition-all bg-[#4C526F] hover:bg-[#4C526F] leading-[100%] cursor-pointer ${selectedSize === size.id.toUpperCase()
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
                                    <div className="flex flex-col xl:gap-4 gap-3">
                                        <p className="lg:text-xl  text-base text-[#262626] leading-[100%] tracking-[.4px]">Benefits:</p>
                                        <ul className="xl:space-y-3 space-y-2">
                                            {benefits.map((benefit, index) => (
                                                <li key={index} className="flex gap-2.5 xl:text-base text-sm tracking-[.08px] leading-[120%] text-[#4C526F]">
                                                    <span className="  font-bold ">•</span>
                                                    <span className='normal-case'>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="text-[#262626] xl:text-lg text-start text-base underline underline-offset-2">
                                        More details
                                    </button>
                                    {/* Buttons Section */}
                                    <div className="xl:space-y-4 space-y-3">
                                        <div className='flex gap-3'>
                                            <button className="w-full bg-[#1F274B] hover:bg-[#1F274B]/90 text-white flex items-center justify-center cursor-pointer lg:text-lg text-base">
                                                <span className='flex items-center gap-2 '>BUY WITH <AppleIcon className='lg:size-[54px] size-12' /></span>

                                            </button>

                                            <button className="w-full cursor-pointer bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-4 border-1 border-[#1F274B] transition lg:text-lg text-base">
                                                ADD TO CART
                                            </button>
                                        </div>

                                        <button className="text-[#262626] xl:text-lg text-start text-base underline underline-offset-2">
                                            More payment options
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ProductDetailsAccordion />
                        </div>
                    </div>
                </div>
                <div>
                    <RelatedProduts />
                </div>
            </div>
        </div>
    )
}
