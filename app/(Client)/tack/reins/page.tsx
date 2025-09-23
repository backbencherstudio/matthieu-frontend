import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import FilteredCategory from '@/components/ClientComponents/Tacks/FilteredCategory';
import React from 'react'

export default function
  () {

  const breadLink = [
    {
      label: "TACK",
      href: "/TACK",
    },
    {
      label: "REINS",
      href: "/tack/reins",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer my-12'>
        <FilteredCategory categoryData = {reinsItems} title = "Reins" />
      </div>
    </div>
  )
}

const reinsItems = [
    { id: 1, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack1.png", price: "$370.00", color: "Black", size: "Standard" },
    { id: 2, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack2.png", price: "$370.00", color: "Brown", size: "Standard" },
    { id: 3, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack3.png", price: "$370.00", color: "Black", size: "Long" },
    { id: 4, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack4.png", price: "$370.00", color: "Brown", size: "Long" },
    { id: 5, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack1.png", price: "$370.00", color: "Black", size: "Standard" },
    { id: 6, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack2.png", price: "$370.00", color: "Brown", size: "Standard" },
    { id: 7, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack3.png", price: "$370.00", color: "Black", size: "Long" },
    { id: 8, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack4.png", price: "$370.00", color: "Brown", size: "Long" },

];