"use client";

import { OrdersTable } from "@/components/MyAccount/dashboard/orders-table";

export default function OrdersPage() {
  const orders = [
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$580.00",
      status: "In Process",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$360.00",
      status: "Delivered",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$580.00",
      status: "In Process",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$360.00",
      status: "Delivered",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$580.00",
      status: "In Process",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$360.00",
      status: "Delivered",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$580.00",
      status: "In Process",
    },
    {
      id: "#AS-AB7D-8NS",
      product: "HUNTER JUMPER SADDLE",
      size: "Pony",
      price: "$360.00",
      status: "Delivered",
    },
  ];

  return (
    <div>
      <OrdersTable
        title="My Orders"
        data={orders}
        onStatusChange={(value) => console.log("Filter changed to:", value)}
        pagination={{
          currentPage: 1,
          totalPages: 6,
          onPageChange: (page) => console.log("Page:", page),
        }}
      />
    </div>
  );
}
