"use client";
import React from "react";

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
    date: "01/01/2025",
    grow: 20,
  },
  {
    name: "Feb",
    fullName: "February",
    date: "02/01/2025",
    grow: 30,
  },
  {
    name: "Mar",
    fullName: "March",
    date: "03/01/2025",
    grow: 50,
  },
  {
    name: "Apr",
    fullName: "April",
    date: "04/01/2025",
    grow: 60,
  },
  {
    name: "May",
    fullName: "May",
    date: "05/01/2025",
    grow: 70,
  },
  {
    name: "Jun",
    fullName: "June",
    date: "06/01/2025",
    grow: 80,
  },
  {
    name: "Jul",
    fullName: "July",
    date: "07/01/2025",
    grow: 40,
  },
  {
    name: "Aug",
    fullName: "August",
    date: "08/01/2025",
    grow: 30,
  },
  {
    name: "Sep",
    fullName: "September",
    date: "09/01/2025",
    grow: 20,
  },
  {
    name: "Oct",
    fullName: "October",
    date: "10/01/2025",
    grow: 27,
  },
  {
    name: "Nov",
    fullName: "November",
    date: "11/01/2025",
    grow: 18,
  },
  {
    name: "Dec",
    fullName: "December",
    date: "12/01/2025",
    grow: 40,
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
  return (
    <div className="bg-white rounded-[8px] p-4">
      {/* Title & Filter */}
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-xl font-extrabold text-primary-text">
          Sales Growth
        </h1>
        <select name="" id="">
          Last 6 Months
        </select>
      </div>
      {/* Chart */}
      <div className="mt-4 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
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
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
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
