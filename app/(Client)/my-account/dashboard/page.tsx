import DashboardCard from "@/components/MyAccount/dashboard/dashboardCard";
import { OrdersTable } from "@/components/MyAccount/dashboard/orders-table";
import ConfirmationIcon from "@/public/icon/ConfirmationIcon";
import ShoppingCardIcon from "@/public/icon/ShoppingCardIcon";
import SuccessIcon from "@/public/icon/SuccessIcon";

const DashboardPage = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Wait for confirmation",
      icon: <ConfirmationIcon />,
      number: 29,
      iconBgColor: "#FEF6E8",
    },
    {
      id: 2,
      title: "Successful order",
      icon: <SuccessIcon />,
      number: 36,
      iconBgColor: "#E8F7F3",
    },
    {
      id: 3,
      title: "Total order",
      icon: <ShoppingCardIcon />,
      number: 109,
      iconBgColor: "#E6F2FF",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {dashboardStats.map((status) => (
          <DashboardCard
            key={status?.id}
            title={status?.title}
            icon={status.icon}
            number={status.number}
            iconBgColor={status?.iconBgColor}
          />
        ))}
      </div>
      <OrdersTable />
    </>
  );
};

export default DashboardPage;
