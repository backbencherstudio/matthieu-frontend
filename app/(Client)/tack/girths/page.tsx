import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import FilteredCategory from '@/components/ClientComponents/Tacks/FilteredCategory';
import React from 'react'

export default function GirthsPage() {
return null;

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "GIRTHS",
      href: "/tack/girths",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer my-12'>
        <FilteredCategory categoryData={categoryItems} title="girths" />
      </div>
    </div>
  )
}

const categoryItems = [
  { id: 1, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Black", size: "24inch" },
  { id: 2, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Brown", size: "26inch" },
  { id: 3, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Black", size: "28inch" },
  { id: 4, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Brown", size: "24inch" },
  { id: 5, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Black", size: "26inch" },
  { id: 6, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Brown", size: "28inch" },
  { id: 7, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Black", size: "24inch" },
  { id: 8, name: "Short dressage girth", category: "Girths", image: "/home/grith.png", price: "$370.00", color: "Brown", size: "26inch" },
];