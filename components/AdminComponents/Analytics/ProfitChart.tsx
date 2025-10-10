"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Jan",
    fullName: "January",
    profit: 2000,
    sales: 4000,
    date: "2024-01-01",
  },
  {
    name: "Feb",
    fullName: "February",
    profit: 3000,
    sales: 5000,
    date: "2024-02-01",
  },
  {
    name: "Mar",
    fullName: "March",
    profit: 2000,
    sales: 3000,
    date: "2024-03-01",
  },
  {
    name: "Apr",
    fullName: "April",
    profit: 4000,
    sales: 7000,
    date: "2024-04-01",
  },
  {
    name: "May",
    fullName: "May",
    profit: 2500,
    sales: 5000,
    date: "2024-05-01",
  },
  {
    name: "Jun",
    fullName: "June",
    profit: 3000,
    sales: 6000,
    date: "2024-06-01",
  },
  {
    name: "Jul",
    fullName: "July",
    profit: 4000,
    sales: 7000,
    date: "2024-07-01",
  },
  {
    name: "Aug",
    fullName: "August",
    profit: 3000,
    sales: 6000,
    date: "2024-08-01",
  },
  {
    name: "Sep",
    fullName: "September",
    profit: 2000,
    sales: 5000,
    date: "2024-09-01",
  },
  {
    name: "Oct",
    fullName: "October",
    profit: 2700,
    sales: 7000,
    date: "2024-10-01",
  },
  {
    name: "Nov",
    fullName: "November",
    profit: 1800,
    sales: 6000,
    date: "2024-11-01",
  },
  {
    name: "Dec",
    fullName: "December",
    profit: 4000,
    sales: 8000,
    date: "2024-12-01",
  },
  {
    name: "Jan",
    fullName: "January",
    profit: 2000,
    sales: 5000,
    date: "2025-01-01",
  },
  {
    name: "Feb",
    fullName: "February",
    profit: 3000,
    sales: 6000,
    date: "2025-02-01",
  },
  {
    name: "Mar",
    fullName: "March",
    profit: 5000,
    sales: 7000,
    date: "2025-03-01",
  },
  {
    name: "Apr",
    fullName: "April",
    profit: 6000,
    sales: 8000,
    date: "2025-04-01",
  },
  {
    name: "May",
    fullName: "May",
    profit: 7000,
    sales: 9000,
    date: "2025-05-01",
  },
  {
    name: "Jun",
    fullName: "June",
    profit: 8000,
    sales: 10000,
    date: "2025-06-01",
  },
  {
    name: "Jul",
    fullName: "July",
    profit: 4000,
    sales: 11000,
    date: "2025-07-01",
  },
  {
    name: "Aug",
    fullName: "August",
    profit: 3000,
    sales: 12000,
    date: "2025-08-01",
  },
  {
    name: "Sep",
    fullName: "September",
    profit: 2000,
    sales: 13000,
    date: "2025-09-01",
  },
  {
    name: "Oct",
    fullName: "October",
    profit: 2700,
    sales: 14000,
    date: "2025-10-01",
  },
];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;

  const d = payload[0].payload;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow:
          "0 8px 12px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        padding: "10px 12px",
        border: "1px solid #eef0f3",
      }}
    >
      <div style={{ fontWeight: 400, marginBottom: 4 }}>{d.fullName}</div>
      <div style={{ color: "#4ED5BD", fontWeight: 400 }}>
        Profit: ${d.profit}
      </div>
      <div style={{ color: "#1F274B", fontWeight: 400 }}>Sales: ${d.sales}</div>
    </div>
  );
}

export default function ProfitChart() {
  // Filter Chart
  const [selectedMonth, setSelectedMonth] = useState("last-6-months");

  // Filter Data based on selected period
  const getFilteredData = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    if (selectedMonth === "last-6-months") {
      // Show last 6 months from current date
      const sixMonthsAgo = new Date(currentYear, currentMonth - 5, 1);
      return data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= sixMonthsAgo && itemDate <= currentDate;
      });
    } else {
      // Show last 12 months from current date
      const twelveMonthsAgo = new Date(currentYear, currentMonth - 11, 1);
      return data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= twelveMonthsAgo && itemDate <= currentDate;
      });
    }
  };

  const filteredData = getFilteredData();

  // Get Max Value For Show Percentage in Y Axis
  const maxValue = Math.max(...filteredData.map((item) => item.sales));
  const maxDomain = Math.ceil(maxValue / 10) * 10;
  const generateTicks = (max: number) => {
    const ticks = [0];
    const step = max / 10; // 10 intervals
    for (let i = step; i <= max; i += step) {
      ticks.push(Math.round(i));
    }
    return ticks;
  };

  const dynamicTicks = generateTicks(maxDomain);

  return (
    <div className="bg-white rounded-[8px] p-4">
      {/* Title & Filter */}
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-xl font-extrabold text-primary-text">
          Product Profit
        </h1>
        <Select
          value={selectedMonth}
          onValueChange={(value) => setSelectedMonth(value)}
        >
          <SelectTrigger className="w-[180px] !h-[43px] py-2.5 px-3 shadow-none outline-none focus-visible:ring-0 focus-visible:border-[#ccc] cursor-pointer">
            <SelectValue placeholder="Last 6 Months" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-6-months">Last 6 Months</SelectItem>
            <SelectItem value="last-12-months">Last 12 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Chart */}
      <div className="mt-4 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={filteredData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, maxDomain]}
              ticks={dynamicTicks}
              tickFormatter={(v: number) => `$${v}`}
              width={40}
            />
            <Tooltip
              cursor={{
                stroke: "#1F274B",
                strokeDasharray: "3 3",
                opacity: 0.2,
              }}
              content={<CustomTooltip />}
            />
            <Bar
              dataKey="profit"
              fill="#1F274B"
              activeBar={<Rectangle fill="#1F274B" stroke="#1F274B" />}
            />
            <Bar
              dataKey="sales"
              fill="#BABCC7"
              activeBar={<Rectangle fill="#BABCC7" stroke="#BABCC7" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
