import ActiveCouponIcon from "@/components/Icons/AdminIcon/ActiveCouponIcon";
import AvgUsageRateIcon from "@/components/Icons/AdminIcon/AvgUsageRateIcon";
import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
import TotalUsageIcon from "@/components/Icons/AdminIcon/TotalUsageIcon";
import PaymentCard from "../Payment/PaymentCard";

export default function Coupon() {
  const paymentStats = [
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
      icon: <ActiveCouponIcon />,
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-9">
        {paymentStats.map((status) => (
          <PaymentCard
            key={status?.id}
            title={status?.title}
            icon={status.icon}
            number={status.number}
            iconBgColor={status?.iconBgColor}
            iconColor={status.iconColor}
          />
        ))}
      </div>
    </div>
  );
}
