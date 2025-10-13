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
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    fullName: "January",
    grow: 20,
    date: "2024-01-01",
  },
  {
    name: "Feb",
    fullName: "February",
    grow: 30,
    date: "2024-02-01",
  },
  {
    name: "Mar",
    fullName: "March",
    grow: 50,
    date: "2024-03-01",
  },
  {
    name: "Apr",
    fullName: "April",
    grow: 60,
    date: "2024-04-01",
  },
  {
    name: "May",
    fullName: "May",
    grow: 70,
    date: "2024-05-01",
  },
  {
    name: "Jun",
    fullName: "June",
    grow: 80,
    date: "2024-06-01",
  },
  {
    name: "Jul",
    fullName: "July",
    grow: 40,
    date: "2024-07-01",
  },
  {
    name: "Aug",
    fullName: "August",
    grow: 30,
    date: "2024-08-01",
  },
  {
    name: "Sep",
    fullName: "September",
    grow: 20,
    date: "2024-09-01",
  },
  {
    name: "Oct",
    fullName: "October",
    grow: 27,
    date: "2024-10-01",
  },
  {
    name: "Nov",
    fullName: "November",
    grow: 18,
    date: "2024-11-01",
  },
  {
    name: "Dec",
    fullName: "December",
    grow: 40,
    date: "2024-12-01",
  },
  {
    name: "Jan",
    fullName: "January",
    grow: 20,
    date: "2025-01-01",
  },
  {
    name: "Feb",
    fullName: "February",
    grow: 30,
    date: "2025-02-01",
  },
  {
    name: "Mar",
    fullName: "March",
    grow: 50,
    date: "2025-03-01",
  },
  {
    name: "Apr",
    fullName: "April",
    grow: 60,
    date: "2025-04-01",
  },
  {
    name: "May",
    fullName: "May",
    grow: 70,
    date: "2025-05-01",
  },
  {
    name: "Jun",
    fullName: "June",
    grow: 80,
    date: "2025-06-01",
  },
  {
    name: "Jul",
    fullName: "July",
    grow: 40,
    date: "2025-07-01",
  },
  {
    name: "Aug",
    fullName: "August",
    grow: 30,
    date: "2025-08-01",
  },
  {
    name: "Sep",
    fullName: "September",
    grow: 20,
    date: "2025-09-01",
  },
  {
    name: "Oct",
    fullName: "October",
    grow: 27,
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
      <div style={{ color: "#1f274b", fontWeight: 400 }}>Grow: {d.grow}%</div>
    </div>
  );
}

export default function SalesChart() {
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
  const maxValue = Math.max(...filteredData.map((item) => item.grow));
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
          Sales Growth
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
          <AreaChart
            width={400}
            height={400}
            data={filteredData}
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(31, 39, 75, 0.40)"
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor="rgba(31, 39, 75, 0.00)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickMargin={8} />
            <YAxis
              domain={[0, maxDomain]}
              ticks={dynamicTicks}
              tickFormatter={(v: number) => `${v}%`}
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
            <Area
              type="monotone"
              dataKey="grow"
              stroke="#1F274B"
              strokeWidth={3}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
