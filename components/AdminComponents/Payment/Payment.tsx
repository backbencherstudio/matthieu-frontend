import DollarIcon from "@/components/Icons/AdminIcon/DollarIcon";
import ProcessingIcon from "@/components/Icons/AdminIcon/ProcessingIcon";
import TransactionIcon from "@/components/Icons/AdminIcon/TransactionIcon";
import SuccessIcon from "@/components/Icons/MyAccoountIcon/SuccessIcon";

import HeaderCard from "../reusable/HeaderCard";
import PaymentTable from "./PaymentTable";

export default function Payment() {
  const paymentStats = [
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
      title: "Transactions",
      icon: <TransactionIcon />,
      number: "247",
      iconBgColor: "#FAE9EB",
      iconColor: "#CA2233",
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
      <h1 className="lg:text-2xl md:text-xl text-lg font-extrabold text-[#1F274B] leading-[100%] mb-5">
        Payment Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-9">
        {paymentStats.map((status) => (
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
      <PaymentTable />
    </div>
  );
}
