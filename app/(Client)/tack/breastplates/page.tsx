import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import FilteredCategory from '@/components/ClientComponents/Tacks/FilteredCategory';
import React from 'react'

export default function BreastPlatesPage() {

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "BRIDLES",
      href: "/tack/breastplates",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer my-12'>
        <FilteredCategory categoryData={categoryItems} title="BREASTPLATES" />
      </div>
    </div>
  )
}

const categoryItems = [
  { id: 1, name: "Short dressage girth", category: "BREASTPLATES", image: "/images/tacks/breastPlates.png", price: "$370.00", color: "Black", size: "Standard" },
  { id: 2, name: "Short dressage girth", category: "BREASTPLATES", image: "/images/tacks/breastPlates2.png", price: "$370.00", color: "Brown", size: "Standard" },
  { id: 3, name: "Short dressage girth", category: "BREASTPLATES", image: "/images/tacks/breastPlates3.png", price: "$370.00", color: "Black", size: "Large" },
  { id: 4, name: "Short dressage girth", category: "BREASTPLATES", image: "/images/tacks/breastPlates4.png", price: "$370.00", color: "Brown", size: "Large" },
];