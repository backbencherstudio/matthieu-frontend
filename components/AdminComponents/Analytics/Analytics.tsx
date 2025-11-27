import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatisticCard from "../reusable/StatisticCard";
import ProfitChart from "./ProfitChart";
import SalesChart from "./SalesChart";

export default function Analytics() {
  const statisticCards = [
    {
      title: "Total Revenue",
      value: "$12,567",
      positiveValue: "+3.6%",
      negativeValue: "",
      image: "/images/admin/dollar.svg",
    },
    {
      title: "Total Orders",
      value: "3,247",
      positiveValue: "",
      negativeValue: "-6.6%",
      image: "/images/admin/cart.svg",
    },
    {
      title: "Avg. Order Value",
      value: "6,225",
      positiveValue: "+12.1%",
      negativeValue: "",
      image: "/images/admin/product.svg",
    },
    {
      title: "Conversion Rate",
      value: "1,429",
      positiveValue: "+20.1%",
      negativeValue: "",
      image: "/images/admin/conversation-rate.svg",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-2">
        <h1 className="text-2xl font-extrabold text-primary-text">
          Analytics Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[100px] sm:w-[120px] !h-[43px] py-2.5 px-3 shadow-none outline-none focus-visible:ring-0 cursor-pointer border border-primary-text rounded text-primary-text">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value=" last-7-days">Last 7 days</SelectItem>
              <SelectItem value=" last-30-days">Last 30 days</SelectItem>
              <SelectItem value="last-90-days">Last 90 days</SelectItem>
              <SelectItem value="last-year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <button className="bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap">
            <PlusIcon className="h-4 w-4" />
            <span>Export Analysis</span>
          </button>
        </div>
      </div>
      {/* Statistics Card */}
      <div className="pt-6">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {statisticCards.map((card) => (
            <StatisticCard key={card.title} card={card} />
          ))}
        </div>
      </div>
      {/* Chart */}
      <div className="pt-6">
        <div className="grid xl:grid-cols-2 gap-3">
          <SalesChart />
          <ProfitChart />
        </div>
      </div>
    </div>
  );
}
