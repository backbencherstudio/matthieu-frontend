'use client';

import ConfirmationIcon from '@/components/Icons/MyAccoountIcon/ConfirmationIcon';
import ShoppingCardIcon from '@/components/Icons/MyAccoountIcon/ShoppingCardIcon';
import SuccessIcon from '@/components/Icons/MyAccoountIcon/SuccessIcon';
import DashboardCard from '@/components/MyAccount/dashboard/dashboardCard';
import {
  OrdersTable,
  Order,
} from '@/components/MyAccount/dashboard/orders-table';
import { useGetOrdersQuery } from '@/src/redux/client/order/orderApi';
import { useMemo } from 'react';

const DashboardPage = () => {
  const { data, isLoading } = useGetOrdersQuery(undefined);

  const orders = data?.data ?? [];

  const mappedOrders: Order[] = useMemo(() => {
    return orders.map(order => {
      const firstItem = order.items?.[0];

      const normalizedStatus = order.status?.toUpperCase?.() || 'PENDING';

      const tableStatus =
        normalizedStatus === 'DELIVERED' || normalizedStatus === 'COMPLETED'
          ? 'Delivered'
          : 'In Process';

      return {
        id: order.orderNumber,
        product: firstItem?.itemName || 'N/A',
        size: firstItem?.variantId || firstItem?.usedSaddleId || 'N/A',
        price: `${order.currency === 'EUR' ? '€' : '$'}${Number(order.total).toFixed(2)}`,
        status: tableStatus,
      };
    });
  }, [orders]);

  const dashboardStats = useMemo(() => {
    const waitingCount = orders.filter(order => {
      const status = order.status?.toUpperCase?.() || '';
      return ['PENDING', 'PROCESSING', 'CONFIRMED'].includes(status);
    }).length;

    const successCount = orders.filter(order => {
      const status = order.status?.toUpperCase?.() || '';
      return ['DELIVERED', 'COMPLETED'].includes(status);
    }).length;

    return [
      {
        id: 1,
        title: 'Wait for confirmation',
        icon: <ConfirmationIcon />,
        number: waitingCount,
        iconBgColor: '#FEF6E8',
        iconColor: '#EDA217',
      },
      {
        id: 2,
        title: 'Successful order',
        icon: <SuccessIcon />,
        number: successCount,
        iconBgColor: '#E8F7F3',
        iconColor: '#20C997',
      },
      {
        id: 3,
        title: 'Total order',
        icon: <ShoppingCardIcon />,
        number: orders.length,
        iconBgColor: '#E6F2FF',
        iconColor: '#0077FF',
      },
    ];
  }, [orders]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardStats.map(status => (
          <DashboardCard
            key={status.id}
            title={status.title}
            icon={status.icon}
            number={status.number}
            iconBgColor={status.iconBgColor}
            iconColor={status.iconColor}
          />
        ))}
      </div>

      <OrdersTable
        title="Recent Orders"
        data={mappedOrders}
        isLoading={isLoading}
      />
    </>
  );
};

export default DashboardPage;
