import React, { useState } from 'react';

export default function CheckoutSummary() {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  
  const subtotal = 590.00;
  const shipping = 15.00;
  const taxRate = 0.08;
  const couponDiscount = appliedCoupon ? 0.00 : 0.00;
  
  const tax = (subtotal + shipping) * taxRate;
  const total = subtotal + shipping + tax - couponDiscount;
  
  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      setAppliedCoupon(couponCode);
      // In a real app, you would validate the coupon here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
        {/* Coupon Section */}
        <div className="mb-6">
          <label htmlFor="coupon" className="block text-gray-700 font-medium mb-3">
            Have a coupon?
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="coupon"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="GTH678"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleApplyCoupon}
              className="px-6 py-2.5 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors font-medium"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Price Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-700">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-red-500">
            <span>Coupon Discount</span>
            <span>-${couponDiscount.toFixed(2)}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg sm:text-xl font-semibold text-gray-800">
            Total Amount
          </span>
          <span className="text-lg sm:text-xl font-semibold text-gray-800">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-slate-800 text-white py-3.5 rounded hover:bg-slate-700 transition-colors font-medium text-base">
          Checkout Now
        </button>
      </div>
    </div>
  );
}