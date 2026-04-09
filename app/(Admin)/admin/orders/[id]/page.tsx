'use client';

import BreadCrumb from '@/components/AdminComponents/reusable/BreadCrumb';
import RefreshIcon from '@/components/Icons/AdminIcon/RefreshIcon';
import { useParams } from 'next/navigation';
import { useGetSpecificOrderQuery } from '@/src/redux/admin/order/adminOrderApi';

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params.id as string;

  // Fetch specific order data
  const {
    data: response,
    isLoading,
    error,
  } = useGetSpecificOrderQuery(orderId);
  const order = response?.data;

  const breadLink = [
    {
      label: 'Orders Management',
      href: '/admin/orders',
    },
    {
      label: 'Orders Detail',
    },
  ];

  if (isLoading)
    return <div className="p-10 text-center">Loading Order Details...</div>;
  if (error || !order)
    return (
      <div className="p-10 text-center text-red-500">Order not found.</div>
    );

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div>
        {/* Order Header */}
        <div className="mt-6 p-4 rounded-[8px] bg-[#FFF]">
          <div className="flex items-center justify-between mb-6">
            <h1 className="lg:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              Order #{order.orderNumber}
            </h1>
            <button
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-[4px] text-[14px] leading-[100%] tracking-[0.07px] ${
                order.status === 'DELIVERED'
                  ? 'bg-[#E9FAF5] text-[#20C997]'
                  : order.status === 'INPROCESS'
                    ? 'bg-[#FFFAE8] text-[#FFA600]'
                    : 'bg-[#E6EEFF] text-[#1F3BB3]'
              }`}
            >
              <RefreshIcon className="w-4 h-4" />
              <span className="font-medium">{order.status}</span>
            </button>
          </div>

          {/* Order Items */}
          <div className="mt-[21px]">
            {order.items.map(item => (
              <div key={item.id} className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded">
                  <img
                    src="/orderManagement/omimage-2.png" // Replace with item.image if available in API
                    alt={item.itemName}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-extrabold text-[#4C526F] leading-[100%]">
                    {item.itemName}
                  </h3>
                  <p className="text-[14px] text-[#4C526F] leading-[100%] mt-3">
                    SKU: {item.id.slice(0, 8).toUpperCase()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] text-[#4C526F] font-extrabold leading-[100%]">
                    {order.currency} {item.price.toFixed(2)}
                  </p>
                  <p className="text-[14px] text-[#4C526F] leading-[100%] mt-3">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <hr />
          </div>

          {/* Order Summary */}
          <div className="mt-6">
            <div className="flex justify-between text-[#4C526F] text-[14px]">
              <span>Subtotal</span>
              <span className="font-medium">
                {order.currency} {order.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#4C526F] text-[14px] mt-5">
              <span>Shipping</span>
              <span className="font-medium">
                {order.currency} {order.shipping.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#4C526F] text-[14px] mt-5 mb-4">
              <span>Tax</span>
              <span className="font-medium">
                {order.currency} {order.tax.toFixed(2)}
              </span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-[#D32F2F] text-[14px] mb-4">
                <span>Discount</span>
                <span className="font-medium">
                  -{order.currency} {order.discount.toFixed(2)}
                </span>
              </div>
            )}
            <hr />
            <div className="flex justify-between mt-5 mb-4">
              <span className="font-extrabold text-[#4C526F] text-[14px] leading-[100%]">
                Total Amount
              </span>
              <span className="text-[14px] font-bold text-[#4C526F] leading-[100%]">
                {order.currency} {order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Customer & Shipping Info */}
        <div className="p-4 mt-5 rounded-[8px] bg-[#FFF] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-extrabold leading-[132%] tracking-[0.1px]">
              Customer
            </h2>
            <div className="space-y-3 mt-5">
              <p className="font-extrabold text-[#777980] text-[14px] leading-[100%]">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-[#777980] text-[14px] leading-[100%]">
                {order.address.email}
              </p>
              <p className="text-[#777980] text-[14px] leading-[100%]">
                {order.address.phone}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-extrabold leading-[132%] tracking-[0.1px]">
              Shipping Address
            </h2>
            <div className="space-y-3 mt-5">
              <p className="text-[#777980] text-[14px] leading-[140%]">
                {order.address.streetAddress}, 
                {order.address.city}, {order.address.state}{' '}
                {order.address.zipCode}, 
                {order.address.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
