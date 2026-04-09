'use client';

import { useState } from 'react';
import EyeIcon from '@/components/Icons/AdminIcon/EyeIcon';
import EditIcon from '@/components/Icons/AdminIcon/EditIcon';
import HeaderCard from '../reusable/HeaderCard';
import OrderTable from './OrderTable';
import {
  useGetAdminOrdersQuery,
  useUpdateOrderStatusMutation,
} from '@/src/redux/admin/order/adminOrderApi';
import { useDebounce } from '@/src/hooks/useDebounce';


export default function Order() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Debounce search to avoid too many API calls while typing
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Pass filters to the query
  const {
    data: ordersData,
    isLoading,
    error,
  } = useGetAdminOrdersQuery({
    search: debouncedSearch,
    status: statusFilter,
  });

  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const handleUpdateStatus = async (orderId: string, status: string) => {
    try {
      await updateOrderStatus({ id: orderId, status }).unwrap();
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  const getStatistics = () => {
    // Note: Stats usually reflect the whole dataset, but here they reflect filtered data
    const totalOrders = ordersData?.data?.length || 0;
    const deliveredOrders =
      ordersData?.data?.filter(o => o.status === 'DELIVERED').length || 0;
    const inProcessOrders =
      ordersData?.data?.filter(o => o.status === 'INPROCESS').length || 0;
    const revenue = ordersData?.data
      ? `$${ordersData.data.reduce((acc, order) => acc + order.total, 0).toFixed(2)}`
      : '$0.00';

    return { totalOrders, deliveredOrders, inProcessOrders, revenue };
  };

  const { totalOrders, deliveredOrders, inProcessOrders, revenue } =
    getStatistics();

  const CustomerStats = [
    {
      id: 1,
      title: 'Total Orders',
      icon: <EyeIcon />,
      number: totalOrders.toString(),
      iconBgColor: '#EDF3FB',
      iconColor: '#4A87D7',
    },
    {
      id: 2,
      title: 'Delivered Orders',
      icon: <EyeIcon />,
      number: deliveredOrders.toString(),
      iconBgColor: '#E9FAF7',
      iconColor: '#22CAAD',
    },
    {
      id: 3,
      title: 'Processing Orders',
      icon: <EditIcon />,
      number: inProcessOrders.toString(),
      iconBgColor: '#FFFAE8',
      iconColor: '#FFA600',
    },
    // {
    //   id: 4,
    //   title: 'Revenue',
    //   icon: <EyeIcon />,
    //   number: revenue,
    //   iconBgColor: '#F4F1FF',
    //   iconColor: '#B081FF',
    // },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Orders Management
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 my-5">
        {CustomerStats.map(status => (
          <HeaderCard key={status.id} {...status} />
        ))}
      </div>

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
  );
}
