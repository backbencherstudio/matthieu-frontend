'use client';

import { useGetCheckoutSummaryQuery } from '@/src/redux/client/add-to-cart/checkoutSummaryApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BillingSummarySkeleton } from '../BillingSummarySkeleton';
import { useCreateOrderMutation } from '@/src/redux/client/order/orderApi';

const getCurrencySymbol = (currency?: string) => {
  if (currency === 'EUR') return '€';
  if (currency === 'USD') return '$';
  return '$';
};

export function BillingSummary() {
  const router = useRouter();
  const { data, isLoading } = useGetCheckoutSummaryQuery();
  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();
  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  const getFixedImageUrl = (url?: string) => {
    if (!url) return '/placeholder.png';

    try {
      const parsed = new URL(url);
      return `${IMAGE_BASE_URL}${parsed.pathname}`;
    } catch {
      return '/placeholder.png';
    }
  };

  if (isLoading) {
    return <BillingSummarySkeleton />;
  }

  const checkoutData = data?.data;
  const items = checkoutData?.items ?? [];
  const address = checkoutData?.address;
  const summary = checkoutData?.summary;

  const currency = summary?.currency || items?.[0]?.currency || 'USD';
  const currencySymbol = getCurrencySymbol(currency);

  const summaryItems = [
    { label: 'Subtotal', value: summary?.subtotal ?? 0 },
    { label: 'Shipping', value: summary?.shipping ?? 0 },
    { label: 'Tax', value: summary?.tax ?? 0 },
    { label: 'Coupon Discount', value: -(summary?.couponDiscount ?? 0) },
  ];

   const handleNext = async () => {
     try {
       await createOrder().unwrap();
       router.push('/product-details/billing-details/payment-details');
     } catch (error) {
       console.error('Failed to create order', error);
     }
   };

  return (
    <div className="maxContainer lg:my-12 md:my-10 my-8">
      <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-6">
        {/* Left */}
        <div className="border-[#DFE1E7] border lg:p-8 p-6 xl:w-[65%] lg:w-full normal-case">
          <h2 className="text-[#1F274B] text-[24px] md:text-[28px] lg:text-[32px] not-italic font-extrabold leading-[100%] md:pb-[32px] pb-6">
            Billing Summary
          </h2>

          {/* Address */}
          <div className="pb-6 border-b border-[#DFE1E7]">
            <h3 className="text-[#1F274B] text-xl font-extrabold leading-[100%] mb-4">
              Billing Address
            </h3>

            <div className="space-y-2 text-[#4C526F] text-base">
              <p>
                {address?.firstName} {address?.lastName}
              </p>
              <p>{address?.email}</p>
              <p>{address?.phone}</p>
              {address?.companyName && <p>{address.companyName}</p>}
              <p>{address?.streetAddress}</p>
              {address?.apartment && <p>{address.apartment}</p>}
              <p>
                {address?.city}
                {address?.state ? `, ${address.state}` : ''} {address?.zipCode}
              </p>
              <p>{address?.country}</p>
            </div>
          </div>

          {/* Items */}
          <div className="pt-6">
            <h3 className="text-[#1F274B] text-xl font-extrabold leading-[100%] mb-6">
              Order Items
            </h3>

            <div className="flex flex-col gap-4">
              {items.map(item => (
                <div
                  key={item.itemId}
                  className="flex md:flex-row flex-col gap-4 bg-white py-4 border-b border-[#ECEFF3] last:border-b-0 items-stretch"
                >
                  <div className="flex-shrink-0 flex md:gap-3 gap-4 items-center">
                    <Image
                      // src={getFixedImageUrl(item.itemImage)}
                      src={item?.itemImage}
                      width={102}
                      height={104}
                      alt={item.itemName}
                      className="w-[102px] h-[104px] object-cover rounded-lg aspect-square"
                      unoptimized
                    />

                    <div className="flex flex-col gap-3">
                      <h3 className="text-[#4C526F] md:text-lg text-base normal-case leading-[100%] font-extrabold">
                        {item.itemName}
                      </h3>
                      <p className="text-sm text-[#4C526F] font-normal leading-[100%]">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex justify-end items-center">
                    <p className="md:text-xl text-lg font-extrabold leading-[100%] text-[#4C526F]">
                      {currencySymbol}
                      {item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end md:mt-8 mt-6">
            <button
              type="button"
              onClick={handleNext}
              disabled={isCreatingOrder}
              className="bg-[#1F274B] cursor-pointer text-white md:px-8 px-6 md:py-4 py-3 rounded-none border-none shadow-none disabled:opacity-70"
            >
              {isCreatingOrder ? 'Processing...' : 'Confirm and Continue'}
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="border xl:w-[33%] md:w-full w-full px-6 py-6 h-fit">
          <h3 className="text-[#1F274B] text-xl font-extrabold leading-[100%] mb-6">
            Order Summary
          </h3>

          <div className="space-y-5 pb-4 border-b">
            {summaryItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between md:text-base text-sm leading-[100%] font-extrabold text-[#4C526F]"
              >
                <span>{item.label}</span>
                <span
                  className={
                    item.label === 'Coupon Discount' ? 'text-[#F38B94]' : ''
                  }
                >
                  {currencySymbol}
                  {item.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 text-[#4C526F] lg:text-2xl md:text-xl text-lg">
            <span className="leading-[100%] font-extrabold">Total Amount</span>
            <span className="leading-[100%] font-extrabold">
              {currencySymbol}
              {(summary?.total ?? 0).toFixed(2)}
            </span>
          </div>

          {summary?.couponMessage && (
            <p className="mt-3 text-sm text-[#4C526F]">
              {summary.couponMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
