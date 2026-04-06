

import { Billing } from '@/components/Billing/Billing'
import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';

import React from 'react'

export default function BillingPage() {

  const breadLink = [
    {
      label: 'PRODUCT DETAIL',
      href: '/product-details/1',
    },
    {
      label: 'Billing Details',
      href: '/product-details/billing-details',
    },
    {
      label: 'Summary',
      href: '/product-details/billing-details/summary',
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <Billing />
    </div>
  )
}
