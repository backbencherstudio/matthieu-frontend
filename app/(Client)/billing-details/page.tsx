

import { Billing } from '@/components/Billing/Billing'
import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';

import React from 'react'

export default function BillingPage() {

  const breadLink = [
    {
      label: "PRODUCT DETAIL",
      href: "/product-details/1",
    },
    {
      label: "Billing Details",
      href: "/billing-details",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <Billing />
    </div>
  )
}
