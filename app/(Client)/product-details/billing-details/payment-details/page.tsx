
import PaymentDetails from '@/components/Billing/PaymentDetails/PaymentDetails';
import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import { useStripe } from '@stripe/react-stripe-js';
import React from 'react'


export default function PaymentDetailsPage() {

      const stripe = useStripe();


    const breadLink = [
        {
            label: "PRODUCT DETAIL",
            href: "/product-details/1",
        },
        {
            label: "Billing Details",
            href: "/product-details//billing-details",
        },
        {
            label: "Payment Details",
            href: "/product-details//billing-details/payment-details",
        },
    ];




    return (
        <div>
            <BreadCrumb breadLink={breadLink} />
            <PaymentDetails stripe={stripe} />
        </div>
    )
}
