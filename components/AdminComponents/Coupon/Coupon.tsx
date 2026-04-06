
"use client";
import AvgUsageRateIcon from "@/components/Icons/AdminIcon/AvgUsageRateIcon";
import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
import TotalUsageIcon from "@/components/Icons/AdminIcon/TotalUsageIcon";
import HeaderCard from "../reusable/HeaderCard";
import CouponTable from "./CouponTable";
import CreateCouponModal from "./CreateCouponModal";

//  import hook
import { useGetCouponsQuery } from "@/src/redux/admin/coupon/couponApi";

export default function Coupon() {

  //  fetch data
  const { data, isLoading, isError ,refetch } = useGetCouponsQuery();

  const coupons = data?.data || [];

  //  dynamic stats (no UI change, only values)
  const couponStats = [
    {
      id: 1,
      title: "Total Coupons",
      icon: <TotalCouponIcon />,
      number: coupons.length.toString(),
      iconBgColor: "#FCF6EF",
      iconColor: "#DAA35B",
    },
    {
      id: 2,
      title: "Active Coupons",
      icon: <EyeIcon />,
      number: coupons.filter(
        (c) => new Date(c.expiresAt) > new Date()
      ).length.toString(),
      iconBgColor: "#F3E6F3",
      iconColor: "#800080",
    },
    {
      id: 3,
      title: "Total Usage",
      icon: <TotalUsageIcon />,
      number: coupons.reduce(
        (acc, c) => acc + (c.maxUsesPerUser || 0),
        0
      ).toString(),
      iconBgColor: "#EAF3FC",
      iconColor: "#2987DF",
    },
    {
      id: 4,
      title: "Avg usage Rate",
      icon: <AvgUsageRateIcon />,
      number:
        coupons.length > 0
          ? (
              coupons.reduce(
                (acc, c) => acc + (c.maxUsesPerUser || 0),
                0
              ) / coupons.length
            ).toFixed(2)
          : "0",
      iconBgColor: "#E6F3E6",
      iconColor: "#008000",
    },
  ];

  //  optional loading state (does NOT affect design)
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load coupons</div>;

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-2 mb-5">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Coupons & Discounts
        </h1>
        <button className="bg-primary-bg text-white rounded py-2.5 px-3 whitespace-nowrap cursor-pointer">
          <CreateCouponModal  refetch={refetch}/>
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

     
      <CouponTable  />
    </div>
  );
}























// "use client";
// import AvgUsageRateIcon from "@/components/Icons/AdminIcon/AvgUsageRateIcon";
// import EyeIcon from "@/components/Icons/AdminIcon/EyeIcon";
// import TotalCouponIcon from "@/components/Icons/AdminIcon/TotalCouponIcon";
// import TotalUsageIcon from "@/components/Icons/AdminIcon/TotalUsageIcon";
// import HeaderCard from "../reusable/HeaderCard";
// import CouponTable from "./CouponTable";
// import CreateCouponModal from "./CreateCouponModal";

// export default function Coupon() {
//   const couponStats = [
//     {
//       id: 1,
//       title: "Total Coupons",
//       icon: <TotalCouponIcon />,
//       number: "7",
//       iconBgColor: "#FCF6EF",
//       iconColor: "#DAA35B",
//     },
//     {
//       id: 2,
//       title: "Active Coupons",
//       icon: <EyeIcon />,
//       number: "4",
//       iconBgColor: "#F3E6F3",
//       iconColor: "#800080",
//     },
//     {
//       id: 3,
//       title: "Total Usage",
//       icon: <TotalUsageIcon />,
//       number: "6",
//       iconBgColor: "#EAF3FC",
//       iconColor: "#2987DF",
//     },
//     {
//       id: 4,
//       title: "Avg usage Rate",
//       icon: <AvgUsageRateIcon />,
//       number: "$899.92",
//       iconBgColor: "#E6F3E6",
//       iconColor: "#008000",
//     },
//   ];
//   return (
//     <div>
//       <div className="flex flex-wrap justify-between gap-2 mb-5">
//         <h1 className="text-2xl font-extrabold text-primary-text">
//           Coupons & Discounts
//         </h1>
//         <button className="bg-primary-bg text-white rounded py-2.5 px-3  whitespace-nowrap cursor-pointer">
//           <CreateCouponModal />
//         </button>
//       </div>
//       <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4 mb-9">
//         {couponStats.map((status) => (
//           <HeaderCard
//             key={status?.id}
//             title={status?.title}
//             icon={status.icon}
//             number={status.number}
//             iconBgColor={status?.iconBgColor}
//             iconColor={status.iconColor}
//           />
//         ))}
//       </div>

//       <CouponTable />
//     </div>
//   );
// }
