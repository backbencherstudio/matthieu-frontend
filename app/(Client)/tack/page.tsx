import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import TackMainSections from '@/components/ClientComponents/Tacks/TackMainSections'
import React from 'react'

export default function TackPage() {

  const breadLink = [
    {
      label: "TACK",
      href: "/tack",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer'>
        <TackMainSections />
      </div>
    </div>
  )
}
