import DollarIcon from "@/components/Icons/AdminIcon/DollarIcon";
import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";
import ShipmentIcon from "@/components/Icons/AdminIcon/ShipmentIcon";
import ShoppingCardIcon from "@/components/Icons/MyAccoountIcon/ShoppingCardIcon";
import SuccessIcon from "@/components/Icons/MyAccoountIcon/SuccessIcon";
import Link from "next/link";
import HeaderCard from "../reusable/HeaderCard";
import OrderTable from "./OrderTable";

export default function Order() {
  const CustomerStats = [
    {
      id: 1,
      title: "Total Orders",
      icon: <ShoppingCardIcon />,
      number: "12",
      iconBgColor: "#EDF3FB",
      iconColor: "#4A87D7",
    },
    {
      id: 2,
      title: "Delivered Orders",
      icon: <SuccessIcon />,
      number: "4",
      iconBgColor: "#E9FAF7",
      iconColor: "#22CAAD",
    },
    {
      id: 3,
      title: "Processing",
      icon: <RefreshIcon />,
      number: "6",
      iconBgColor: "#FFFAE8",
      iconColor: "#FFA600",
    },
    {
      id: 4,
      title: "Revenue",
      icon: <DollarIcon />,
      number: "$899.92",
      iconBgColor: "#F4F1FF",
      iconColor: "#B081FF",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Orders Management
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/admin/orders/track-shipment"
          >
            <ShipmentIcon className="h-4 w-4" />
            <span>Track Shipment</span>
          </Link>
          <Link
            className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap"
            href="/admin/products/add"
          >
            <RefreshIcon className="h-4 w-4" />
            <span>Refresh</span>
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 my-4">
        {CustomerStats.map((status) => (
          <HeaderCard
            key={status?.id}
            title={status?.title}
            icon={status.icon}
            number={status.number}
            iconBgColor={status?.iconBgColor}
            iconColor={status.iconColor}
          />
        ))}
      </div>

      <OrderTable />
    </div>
  );
}
