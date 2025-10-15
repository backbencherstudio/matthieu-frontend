"use client"
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import WhatsAppIcon from '@/components/Icons/WhatsAppIcon'
import EmailIcon from '@/components/Icons/EmailIcon'
import CallingIcon from '@/components/Icons/CallingIcon'

const answerQuestion = [
    {icon:<WhatsAppIcon/>,title:"WhatsApp"},
    {icon:<EmailIcon/>,title:"E-Mail"},
    {icon:<CallingIcon /> ,title:"Call Or Text"},
]

const productDetails = [
    {
        id: "item-1",
        title: "DESCRIPTION:",
        content: <p className='leading-[160%] tracking-[.32px] md:text-base text-sm font-medium'>Arion's Double Noseband Bridle combines the effect of a regular noseband and a drop noseband. The lateral strap is designed to minimize jaw shifting and stabilize the bit without pressing on the corners of the mouth. Providing more comfort for the horse through its foam-padded headpiece, noseband, and crownpiece. The beautiful, detailed stitching and silver Arion hardware give this bridle an elegant finish. Best for competition and training. <span className='block font-normal text-[#1F274B]'> Reins are not included.</span></p>
    },
    {
        id: "item-2",
        title: "LEATHER CARE GUIDE:",
        content: <p>Grab your <Link href={"/tack/leather-care"} className='underline underline-offset-2 text-[#1F274B] font-normal '>The Cleaning Kit product </Link> and let's get to work! <br />
            Begin by removing all of the dust from your bridle. Then, clean every piece of your bridle with the <Link href={"/tack/leather-care"} className='underline underline-offset-2 text-[#1F274B] font-normal'>Leather Soap</Link> , wipe your bridle down with a clean towel and store in a dry area. Clean after every use for best results."</p>
    },
    {
        id: "item-3",
        title: "SHIPPING AND RETURNS",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-normal leading-[100%] tracking-[.4px] text-[#262626] lg:text-xl text-lg mb-4">Delivery time:</h4>
                    <ul className="list-disc list-inside md:space-y-3 space-y-2  text-[#4C526F]">
                        <li className='md:text-base text-sm leading-[120%] tracking-[.08px]'>USA: 5-7 work days | Canada: 7-10 business days</li>
                        <li className='md:text-base text-sm leading-[120%] tracking-[.08px]'>Free delivery with purchases over $1,000</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-normal leading-[100%] tracking-[.4px] text-[#262626] lg:text-xl text-lg mb-4">Shipping costs:</h4>
                    <ul className="list-disc list-inside md:space-y-3 space-y-2  text-[#4C526F]">
                        <li className='md:text-base text-sm leading-[120%] tracking-[.08px]'>Free delivery if you pick up at our booth in Wellington, Florida January March</li>
                        <li className='md:text-base text-sm leading-[120%] tracking-[.08px]'>Free delivery if you pick up from our office in Wellington, Florida</li>
                        <li className='md:text-base text-sm leading-[120%] tracking-[.08px]'>USA: $20 | Canada: $25</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-normal leading-[100%] tracking-[.4px] text-[#262626] lg:text-xl text-lg mb-4">Returns:</h4>
                    <p className='md:text-base text-sm leading-[160%] tracking-[.08px]  text-[#4C526F] '>Return tack or accessories within 14 days of purchase. The product must be new, with labels attached. Once the product is received at our Wellington office and is as described above, you will be fully reimbursed.</p>
                </div>
            </div>
        )
    },
    {
        id: "item-4",
        title: "NEED HELP?",
        content: <div className='flex gap-4'>
            <div className='w-[79px] h-[86px] '>
                <img src="/images/products-details/need help.png" alt="" className='w-full h-full object-cover ' />
            </div>
            <div>
                <p className='text-[#000] tracking-[.4px] leading-[100%] lg:text-xl text-lg font-normal'>Gabrielle will answer your questions!</p>
                <div className='flex items-center gap-6 md:mt-4 mt-3'>
                    {answerQuestion?.map((item,index) => (
                      <Link href={""} className='flex items-center gap-3' key={index}>
                        <span className='text-[#000000]'>{item?.icon}</span>
                        <span className='text-[#4C526F] leading-[100%] text-base'>{item?.title}</span>
                      </Link>
                    ))}
                </div>
            </div>
        </div>
    }
]

export default function ProductDetailsAccordion() {
    return (
        <div className="mt-8">
            <Accordion type="single" collapsible className="w-full lg:space-y-6 space-y-4">
                {productDetails.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className='bg-[#F6F8FA] px-4 border-b-0'>
                        <AccordionTrigger className="text-[#1F274B] lg:text-2xl md:text-xl text-lg font-extrabold  tracking-[.48px]  hover:no-underline cursor-pointer">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#4C526F] leading-[160%] tracking-[.32px] md:text-base text-sm normal-case font-light">
                            {item.content}

                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}