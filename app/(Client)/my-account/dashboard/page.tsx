"use client";

import ConfirmationIcon from "@/components/Icons/MyAccoountIcon/ConfirmationIcon";
import ShoppingCardIcon from "@/components/Icons/MyAccoountIcon/ShoppingCardIcon";
import SuccessIcon from "@/components/Icons/MyAccoountIcon/SuccessIcon";
import DashboardCard from "@/components/MyAccount/dashboard/dashboardCard";
import { OrdersTable } from "@/components/MyAccount/dashboard/orders-table";

const DashboardPage = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Wait for confirmation",
      icon: <ConfirmationIcon />,
      number: 29,
      iconBgColor: "#FEF6E8",
      iconColor: "#EDA217",
    },
    {
      id: 2,
      title: "Successful order",
      icon: <SuccessIcon />,
      number: 36,
      iconBgColor: "#E8F7F3",
      iconColor: "#20C997",
    },
    {
      id: 3,
      title: "Total order",
      icon: <ShoppingCardIcon />,
      number: 109,
      iconBgColor: "#E6F2FF",
      iconColor: "#0077FF",
    },
  ];

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dashboardStats.map((status) => (
          <DashboardCard
            key={status?.id}
            title={status?.title}
            icon={status.icon}
            number={status.number}
            iconBgColor={status?.iconBgColor}
            iconColor={status.iconColor}
          />
        ))}
      </div>
      <OrdersTable title="Recent Orders" data={orders} />
    </>
  );
};

export default DashboardPage;
