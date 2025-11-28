import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import FilteredCategory from '@/components/ClientComponents/Tacks/FilteredCategory';
import React from 'react'

export default function HalterRopePage() {
return null;

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "HALTERS & ROPES",
      href: "/tack/halters-and-ropes",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer my-12'>
        <FilteredCategory categoryData={categoryItems} title="HALTERS & ROPES" />
      </div>
    </div>
  )
}

const categoryItems = [
    { id: 1, name: "Halter lead rope", category: "HALTERS & ROPES", image: "/images/tacks/halter.jpg", price: "$370.00", color: "Black", size: "Standard" },
];