'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import CouponIcon from '@/components/Icons/AdminIcon/CouponIcon';
import PlusIcon from '@/components/Icons/AdminIcon/PlusIcon';
import StatisticCard from '@/components/AdminComponents/reusable/StatisticCard';
import EyeIcon from '@/components/Icons/AdminIcon/EyeIcon'; // Import icons for the cards
import EditIcon from '@/components/Icons/AdminIcon/EditIcon';
import { useGetCustomersQuery } from '@/src/redux/admin/customers/customersApi';
import {
  useGetAdminOrdersQuery,
  useUpdateOrderStatusMutation,
} from '@/src/redux/admin/order/adminOrderApi';
import { useDebounce } from '@/src/hooks/useDebounce';
import OrderTable from '@/components/AdminComponents/Order/OrderTable';

export default function DashboardPage() {
  const { data: customerData } = useGetCustomersQuery({ page: 1, limit: 1 });
  const totalCustomers = customerData?.meta?.total || 0;

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 500);

  const {
    data: ordersData,
    isLoading,
    error,
  } = useGetAdminOrdersQuery({
    search: debouncedSearch,
    status: statusFilter,
  });

  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const getStatistics = () => {
    // Note: To get true totals for the cards, you'd typically want
    // an API response that provides meta totals regardless of current filters.
    const totalOrdersCount =
      ordersData?.meta?.total || ordersData?.data?.length || 0;
    const deliveredOrders =
      ordersData?.data?.filter(o => o.status === 'DELIVERED').length || 0;
    const inProcessOrders =
      ordersData?.data?.filter(o => o.status === 'INPROCESS').length || 0;
    const revenue = ordersData?.data
      ? `$${ordersData.data.reduce((acc, order) => acc + order.total, 0).toFixed(2)}`
      : '$0.00';

    return { totalOrdersCount, deliveredOrders, inProcessOrders, revenue };
  };
  const handleUpdateStatus = async (orderId: string, status: string) => {
    try {
      await updateOrderStatus({ id: orderId, status }).unwrap();
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };
  const { totalOrdersCount, deliveredOrders, inProcessOrders, revenue } =
    getStatistics();

  const cards = [
    {
      title: 'Total Customers',
      value: totalCustomers.toString(),
      image: '/images/dash-image/profile01.png',
      positiveValue: '+12%',
    },
    {
      title: 'Total Orders',
      value: totalOrdersCount.toString(),
      image: '/images/dash-image/orders.png',
      negativeValue: '-2%',
    },

    // {
    //   title: 'Revenue',
    //   value: revenue,
    //   image: '/images/dash-image/reveneu.png',
    //   positiveValue: '+5%',
    // },
  ];



  // Define the card data array
  const dashboardStats = [
    {
      title: 'Total Customers',
      value: totalCustomers.toString(),
      icon: <EyeIcon />,
      bgColor: 'bg-[#EDF3FB]',
      iconColor: 'text-[#4A87D7]',
    },
    {
      title: 'Total Orders',
      value: totalOrdersCount.toString(),
      icon: <EyeIcon />,
      bgColor: 'bg-[#E9FAF7]',
      iconColor: 'text-[#22CAAD]',
    },
    {
      title: 'Processing Orders',
      value: inProcessOrders.toString(),
      icon: <EditIcon />,
      bgColor: 'bg-[#FFFAE8]',
      iconColor: 'text-[#FFA600]',
    },
    {
      title: 'Revenue',
      value: revenue,
      icon: <EyeIcon />,
      bgColor: 'bg-[#F4F1FF]',
      iconColor: 'text-[#B081FF]',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Dashboard Overview
        </h1>
        <div className="flex items-center gap-4">
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center"
            href="/admin/coupons"
          >
            <CouponIcon className="h-4 w-4" />
            <span>Create Coupon</span>
          </Link>
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center"
            href="admin/products/add"
          >
            <PlusIcon className="h-4 w-4" />
            <span>Add Product</span>
          </Link>
        </div>
      </div>

      {/* Statistics Cards Section */}
      <div className="pt-6">
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-3">
          {cards.map((card, index) => (
            <StatisticCard key={index} card={card} />
          ))}
        </div>
      </div>

      {/* Order Table Section */}
      <div className="pt-6">
        <OrderTable
          orders={ordersData?.data || []}
          handleUpdateStatus={handleUpdateStatus}
          isLoading={isLoading}
          error={error}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>
    </div>
  );
}
