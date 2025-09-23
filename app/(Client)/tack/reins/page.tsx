import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import ReinsCategory from '@/components/ClientComponents/Tacks/SubCategory/Reints'
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
        <ReinsCategory />
      </div>
    </div>
  )
}
