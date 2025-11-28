import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import FilteredCategory from '@/components/ClientComponents/Tacks/FilteredCategory';
import React from 'react'

export default function BridlesPage() {
return null;

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "LEATHER CARE",
      href: "/tack/leather-care",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer my-12'>
        <FilteredCategory categoryData={categoryItems} title="Leather Care" />
      </div>
    </div>
  )
}

const categoryItems = [
  { id: 1, name: "Leather Soap", category: "Leather Care", image: "/images/tacks/leather-care.jpg", price: "$370.00", color: "N/A", size: "N/A" },
  { id: 2, name: "Leather Grease", category: "Leather Care", image: "/images/tacks/leather-care2.jpg", price: "$370.00", color: "N/A", size: "N/A" },
  { id: 3, name: "Cleaning Kit", category: "Leather Care", image: "/images/tacks/leather-care3.jpg", price: "$370.00", color: "N/A", size: "N/A" },
];