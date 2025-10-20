import SuccessIcon from '@/components/Icons/MyAccoountIcon/SuccessIcon';
import React from 'react'
import PaymentCard from '../Payment/PaymentCard';

export default function Order() {
    const orderStats = [
        {
          id: 1,
          title: "Total Revenue",
          icon: <DollarIcon />,
          number: "$58,429",
          iconBgColor: "#F4F1FF",
          iconColor: "#B081FF",
        },
        {
          id: 2,
          title: "Delivered Orders",
          icon: <SuccessIcon  />,
          number: "4",
          iconBgColor: "#E9FAF7",
          iconColor: "#22CAAD",
        },
        {
          id: 3,
          title: "Processing Fees",
          icon: <ProcessingIcon />,
          number: "$1,847",
          iconBgColor: "#E7F3FE",
          iconColor: "#0077FF",
        },
        {
          id: 4,
          title: "Success Rate",
          icon: <SuccessIcon />,
          number: "97.8%",
          iconBgColor: "#E9FAF7",
          iconColor: "#22CAAD",
        },
      ];
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-9">
        {orderStats.map((status) => (
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
  )
}
