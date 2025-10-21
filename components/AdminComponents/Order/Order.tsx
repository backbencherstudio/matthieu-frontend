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
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-extrabold leading-[100%] text-[#1F274B]">
          Orders Management
        </h1>
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/orders/track-shipment"
            className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer"
          >
            <ShipmentIcon className="h-4 w-4" />
            <span className="text-[14px] leading-[114%]">Track Shipment</span>
          </Link>
          <button className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer">
            <RefreshIcon className="h-4 w-4" />
            <span className="text-[14px] leading-[114%]">Refresh</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-9">
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
