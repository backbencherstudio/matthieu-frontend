'use client';

import {
  OrdersTable,
  Order,
} from '@/components/MyAccount/dashboard/orders-table';
import { useGetOrdersQuery } from '@/src/redux/client/order/orderApi';
import { useMemo } from 'react';

export default function OrdersPage() {
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

  return (
    <div>
      <OrdersTable
        title="My Orders"
        data={mappedOrders}
        isLoading={isLoading}
      />
    </div>
  );
}
