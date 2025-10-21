import ActiveCustomerIcon from "@/components/Icons/AdminIcon/ActiveCustomerIcon";
import DollarIcon from "@/components/Icons/AdminIcon/DollarIcon";
import LetterIcon from "@/components/Icons/AdminIcon/LetterIcon";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import UserGroupIcon from "@/components/Icons/AdminIcon/UserGroupIcon";
import UserPlus from "@/components/Icons/AdminIcon/UserPlus";
import HeaderCard from "../reusable/HeaderCard";
import CustomerTable from "./CustomerTable";

export default function Customer() {
  const CustomerStats = [
    {
      id: 1,
      title: "Total Customers",
      icon: <UserGroupIcon />,
      number: "9",
      iconBgColor: "#EDF3FB",
      iconColor: "#4A87D7",
    },
    {
      id: 2,
      title: "Active Customers",
      icon: <ActiveCustomerIcon />,
      number: "4",
      iconBgColor: "#E9FAF7",
      iconColor: "#22CAAD",
    },
    {
      id: 3,
      title: "New (30 days)",
      icon: <UserPlus />,
      number: "6",
      iconBgColor: "#FFFAE8",
      iconColor: "#FFCC00",
    },
    {
      id: 4,
      title: "Total Revenue",
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
          Customer Management
        </h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer">
            <LetterIcon className="h-4 w-4" />
            <span className="text-[14px] leading-[114%]">Send Campaign</span>
          </button>
          <button className="flex items-center justify-center px-3 py-2.5 bg-[#1F274B] rounded-[4px] text-[#FFF] space-x-2 cursor-pointer">
            <PlusIcon className="h-4 w-4" />
            <span className="text-[14px] leading-[114%]">Add Customer</span>
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
      <CustomerTable />
    </div>
  );
}
