import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import React from 'react'

export default function ProductDetailsPage() {

    const breadLink = [
        {
            label: "PRODUCTS",
            href: "/saddles",
        },
    ];

    return (
        <div>
            <BreadCrumb breadLink={breadLink} cart={true} />
            <div className=' lg:py-12 md:py-10 py-8'>
               
            </div>
        </div>
    )
}
