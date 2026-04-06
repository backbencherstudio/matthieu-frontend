import { BillingSummary } from '@/components/Billing/billingSummary/BillingSummary'
import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import React from 'react'

export default function SummaryPage() {

  const breadLink = [
    {
      label: 'PRODUCT DETAIL',
      href: '/product-details/1',
    },
    {
      label: 'Billing Details',
      href: '/product-details//billing-details',
    },
    {
      label: 'Summary',
      href: '/product-details//billing-details/summary',
    },
    {
      label: 'Payment Details',
      href: '/product-details//billing-details/payment-details',
    },
  ];
  return (
    <>
      <BreadCrumb breadLink={breadLink} />
     <BillingSummary/>   
    </>
  )
}
