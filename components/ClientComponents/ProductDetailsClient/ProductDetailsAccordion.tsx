"use client"
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const productDetails = [
    {
        id: "item-1",
        title: "DESCRIPTION:",
        content: <p className='leading-[160%] tracking-[.32px] md:text-base text-sm font-light'>Arion's Double Noseband Bridle combines the effect of a regular noseband and a drop noseband. The lateral strap is designed to minimize jaw shifting and stabilize the bit without pressing on the corners of the mouth. Providing more comfort for the horse through its foam-padded headpiece, noseband, and crownpiece. The beautiful, detailed stitching and silver Arion hardware give this bridle an elegant finish. Best for competition and training. <span className='block font-normal text-[#1F274B]'> Reins are not included.</span></p>
    },
    {
        id: "item-2",
        title: "LEATHER CARE GUIDE:",
        content: <p>Grab your <span className='underline underline-offset-2 text-[#1F274B] font-normal '>The Cleaning Kit product </span> and let's get to work! <br />
            Begin by removing all of the dust from your bridle. Then, clean every piece of your bridle with the <span className='underline underline-offset-2 text-[#1F274B] font-normal'>Leather Soap</span> , wipe your bridle down with a clean towel and store in a dry area. Clean after every use for best results."</p>
    },
    {
        id: "item-3",
        title: "SHIPPING AND RETURNS",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2">Delivery time:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>USA: 5-7 work days | Canada: 7-10 business days</li>
                        <li>Free delivery with purchases over $1,000</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Shipping costs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Free delivery if you pick up at our booth in Wellington, Florida January March</li>
                        <li>Free delivery if you pick up from our office in Wellington, Florida</li>
                        <li>USA: $20 | Canada: $25</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Returns:</h4>
                    <p className="text-sm">Return tack or accessories within 14 days of purchase. The product must be new, with labels attached. Once the product is received at our Wellington office and is as described above, you will be fully reimbursed.</p>
                </div>
            </div>
        )
    },
    {
        id: "item-4",
        title: "NEED HELP?",
        content: "Gabrielle will answer your questions! Contact via WhatsApp, E-Mail, or Call Or Text."
    }
]

export default function ProductDetailsAccordion() {
    return (
        <div className="mt-8">
            <Accordion type="single" collapsible className="w-full space-y-6">
                {productDetails.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className='bg-[#F6F8FA] px-4 border-b-0'>
                        <AccordionTrigger className="text-[#1F274B] lg:text-2xl md:text-xl text-lg font-bold  tracking-[.48px]  hover:no-underline cursor-pointer">
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