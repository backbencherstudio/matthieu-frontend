import AvgUsageRateIcon from "@/components/Icons/AdminIcon/AvgUsageRateIcon";
import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
import TotalUsageIcon from "@/components/Icons/AdminIcon/TotalUsageIcon";
import HeaderCard from "../reusable/HeaderCard";
import CouponTable from "./CouponTable";

export default function Coupon() {
  const couponStats = [
    {
      id: 1,
      title: "Total Coupons",
      icon: <TotalCouponIcon />,
      number: "7",
      iconBgColor: "#FCF6EF",
      iconColor: "#DAA35B",
    },
    {
      id: 2,
      title: "Active Coupons",
      icon: <EyeIcon />,
      number: "4",
      iconBgColor: "#F3E6F3",
      iconColor: "#800080",
    },
    {
      id: 3,
      title: "Total Usage",
      icon: <TotalUsageIcon />,
      number: "6",
      iconBgColor: "#EAF3FC",
      iconColor: "#2987DF",
    },
    {
      id: 4,
      title: "Avg usage Rate",
      icon: <AvgUsageRateIcon />,
      number: "$899.92",
      iconBgColor: "#E6F3E6",
      iconColor: "#008000",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Coupons & Discounts
        </h1>
        <button className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap cursor-pointer mb-3">
          <PlusIcon className="h-4 w-4" />
          <span className="text-[14px] leading-[114%]">Create Coupon</span>
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4 mb-9">
        {couponStats.map((status) => (
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
      <CouponTable />
    </div>
  );
}
