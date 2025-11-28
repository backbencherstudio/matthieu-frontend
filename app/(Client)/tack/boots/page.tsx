import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import FilteredCategory from '@/components/ClientComponents/Tacks/FilteredCategory';
import React from 'react'

export default function BootsPage() {
return null;

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "BOOTS",
      href: "/tack/boots",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer my-12'>
        <FilteredCategory categoryData={categoryItems} title="Boots" />
      </div>
    </div>
  )
}

const categoryItems = [
{ id: 1, name: "Front Show Jumping Boots", category: "BOOTS", image: "/images/tacks/boots1.png", price: "$370.00", color: "Black", size: "Medium" },
    { id: 2, name: "Hind Show Jumping Boots", category: "BOOTS", image: "/images/tacks/boots2.png", price: "$370.00", color: "Brown", size: "Medium" },
    { id: 3, name: "Front Training Boots", category: "BOOTS", image: "/images/tacks/boots3.png", price: "$370.00", color: "Black", size: "Large" },
    { id: 4, name: "Hind Training Boots", category: "BOOTS", image: "/images/tacks/boots4.jpg", price: "$370.00", color: "Brown", size: "Large" },
];