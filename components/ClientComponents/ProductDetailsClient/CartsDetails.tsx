'use client';

import DeleteIcon from '@/components/Icons/DashboardIcons/DeleteIcon';
import MinusIcon from '@/components/Icons/MinusIcon';
import PlusIcon from '@/components/Icons/PlusIcon';
import { CartItemApi, useClearCartMutation, useDeleteCartItemMutation, useGetCartQuery, useUpdateCartItemQuantityMutation } from '@/src/redux/client/add-to-cart/cartApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';


interface CartsDetailsProps {
  checkoutButton?: boolean;
  onCheckout?: () => void;
}

interface CartItemUi {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
  currency: string;
  raw: CartItemApi;
}

const getCurrencySymbol = (currency?: string) => {
  if (currency === 'EUR') return '€';
  if (currency === 'USD') return '$';
  return '$';
};

export default function CartsDetails({
  checkoutButton = true,
  onCheckout,
}: CartsDetailsProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const router = useRouter();

  const {
    data: cartResponse,
    isLoading,
    isFetching,
  } = useGetCartQuery(appliedCoupon ? { coupon: appliedCoupon } : undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [updateCartItemQuantity, { isLoading: isUpdating }] =
    useUpdateCartItemQuantityMutation();

  const [deleteCartItem, { isLoading: isDeleting }] =
    useDeleteCartItemMutation();

  const [clearCart, { isLoading: isClearing }] = useClearCartMutation();

  const cartItems: CartItemUi[] = useMemo(() => {
    return (
      cartResponse?.data?.items?.map(item => ({
        id: item.itemId,
        name: item.itemName,
        sku:
          item.sku ||
          item.variantId ||
          item.usedSaddleId ||
          item.tackProductId ||
          item.itemId,
        price: item.price,
        quantity: item.quantity,
        image: item.itemImage,
        currency: item.currency,
        raw: item,
      })) ?? []
    );
  }, [cartResponse]);

  // console.log(cartItems, '--------------------------------------------------');

  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  const getFixedImageUrl = (url: string) => {
    if (!url) return '/placeholder.png';

    try {
      const parsed = new URL(url);
      return `${IMAGE_BASE_URL}${parsed.pathname}`;
    } catch {
      return '/placeholder.png';
    }
  };

  const summary = cartResponse?.data?.summary;


  const currency = summary?.currency || cartItems?.[0]?.currency || 'USD';
  const currencySymbol = getCurrencySymbol(currency);

  const subtotal = summary?.subtotal ?? 0;
  const shipping = summary?.shipping ?? 0;
  const tax = summary?.tax ?? 0;
  const couponDiscount = summary?.couponDiscount ?? 0;
  const total = summary?.total ?? 0;

  const summaryItems = [
    { label: 'Subtotal', value: subtotal },
    { label: 'Shipping', value: shipping },
    { label: 'Tax', value: tax },
    { label: 'Coupon Discount', value: -couponDiscount },
  ];

  const handleApplyCoupon = () => {
    const trimmedCode = couponCode.trim();
    if (!trimmedCode) return;
    setAppliedCoupon(trimmedCode);
  };

  const updateQuantity = async (
    itemId: string,
    currentQty: number,
    delta: number,
  ) => {
    const nextQuantity = Math.max(1, currentQty + delta);

    try {
      await updateCartItemQuantity({
        itemId,
        quantity: nextQuantity,
      }).unwrap();
    } catch (error) {
      console.error('Failed to update quantity', error);
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      await deleteCartItem(itemId).unwrap();
    } catch (error) {
      console.error('Failed to delete item', error);
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart().unwrap();
    } catch (error) {
      console.error('Failed to clear cart', error);
    }
  };

  const handleCheckout = () => {
    onCheckout?.();
    router.push('/product-details/billing-details');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 justify-between h-full normal-case">
        <div className="py-8 text-[#4C526F]">Loading cart...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 justify-between h-full normal-case">
      {/* product details section  */}
      <div className="flex flex-col gap-3">
        {cartItems.length === 0 ? (
          <div className="py-8 text-[#4C526F]">Your cart is empty.</div>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className="flex md:flex-row flex-col gap-4 bg-white py-4 border-b border-[#ECEFF3] last:border-b-0 items-stretch"
            >
              <div className="flex-shrink-0 flex md:gap-3 gap-4 items-center">
                <Image
                  src={getFixedImageUrl(item.image)}
                  width={102}
                  height={104}
                  alt={item.name}
                  className="w-[102px] h-[104px] object-cover rounded-lg aspect-square"
                  unoptimized
                />

                <div className="flex md:hidden flex-col gap-3">
                  <h3 className="text-[#4C526F] md:text-lg text-base normal-case leading-[100%] font-extrabold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4C526F] font-normal leading-[100%]">
                    SKU: {item.sku}
                  </p>
                  <div className="flex gap-4">
                    <span className="text-sm text-[#4C526F] font-normal leading-[100%] uppercase">
                      size: pony
                    </span>
                    <span className="text-sm text-[#4C526F] font-normal leading-[100%] uppercase">
                      color: brawn
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-between items-center md:items-stretch">
                <div className="flex flex-col justify-between gap-3 md:gap">
                  <div className="md:flex hidden flex-col gap-2">
                    <h3 className="text-[#4C526F] md:text-lg text-base leading-[100%] font-extrabold normal-case">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#4C526F] font-normal leading-[100%]">
                      SKU: {item.sku}
                    </p>
                    <div className="flex gap-4">
                      <span className="text-sm text-[#4C526F] font-normal leading-[100%] normal-case">
                        Size: pony
                      </span>
                      <span className="text-sm text-[#4C526F] font-normal leading-[100%] normal-case">
                        Color: brawn
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-4 items-center bg-[#F3F3F4] p-1.5">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity, -1)
                          }
                          disabled={isUpdating || isFetching}
                          className="flex items-center cursor-pointer text-[#1D1F2C] hover:text-[#1D1F2C]/50 disabled:opacity-50"
                        >
                          <MinusIcon className="" />
                        </button>

                        <span className="text-[#1D1F2C] md:text-base text-sm font-extrabold leading-[100%] py-[2px]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity, 1)
                          }
                          disabled={isUpdating || isFetching}
                          className="flex items-center cursor-pointer text-[#1D1F2C] hover:text-[#1D1F2C]/50 disabled:opacity-50"
                        >
                          <PlusIcon className="" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        disabled={isDeleting || isFetching}
                        className="cursor-pointer disabled:opacity-50"
                      >
                        <DeleteIcon className="size-5 scale-100 hover:scale-120 duration-200" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:hidden inline">
                  <p className="md:text-base text-sm leading-[100%] font-extrabold text-[#4C526F]">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="text-right flex flex-col justify-between">
                  <p className="md:text-xl text-lg font-extrabold leading-[100%] text-[#4C526F]">
                    {currencySymbol}
                    {item.price.toFixed(2)}
                  </p>
                  <p className="md:text-base text-sm leading-[100%] font-extrabold text-[#4C526F] md:block hidden">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-auto">
        <div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="coupon"
              className="text-[#1F274B] md:text-lg text-base font-extrabold leaqding-[100%]"
            >
              Have a coupon?
            </label>

            <div className="relative px-[2px] md:px-[1px]">
              <input
                type="text"
                id="coupon"
                value={couponCode}
                onChange={e => setCouponCode(e.target.value)}
                placeholder="GTH678"
                className="flex-1 pl-4 md:py-3.5 py-2.5 border border-[#1F274B3D] focus:outline-none focus:ring-1 focus:ring-[#1F274B] focus:border-transparent w-full text-[#4C526F] md:text-base leading-[100%] font-normal bg-[#F8FAFB]"
              />
              <button
                onClick={handleApplyCoupon}
                className="px-4 py-2 absolute top-1/2 -translate-y-1/2 right-3 text-base leading-[100%] font-normal text-white bg-[#1F274B] hover:bg-[#1F274B]/90 cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="space-y-5 mt-6 pb-4 border-b">
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
              {total.toFixed(2)}
            </span>
          </div>

          {checkoutButton && (
            <button
              className="w-full bg-[#1F274B] text-white py-4 hover:bg-[#1F274B]/90 transition-colors md:text-lg font-normal leading-[132%] cursor-pointer text-base md:mt-8 mt-6 disabled:opacity-50"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Checkout Now
            </button>
          )}

          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={handleClearCart}
              disabled={isClearing || isFetching}
              className="w-full mt-3 py-3 border cursor-pointer border-[#1F274B3D] text-[#4C526F] disabled:opacity-50"
            >
              Clear Cart
            </button>
          )}

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
